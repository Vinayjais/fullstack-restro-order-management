const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./util/database');
const Order = require('./models/order');
const OrderRouter = require('./routes/orderRouter');


const port = 4000;

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public','css')));
app.use(express.static(path.join(__dirname,'public','js')));
app.use(express.static(path.join(__dirname,'public','views')));

app.use(OrderRouter);

app.get('/orders', async (req,res) => {
      
     try {

          const  orders = await Order.findAll();
             res.status(200).json({allOrders : orders});
        
     } catch (error) {
         console.log('Get orders failings', JSON.stringify(error));
         res.status(500).json({error:error});
     }
} );

app.delete('/orders/:id' , async (req, res) => {
       try {
            const orderId = req.params.id;
            console.log(orderId);
            await Order.destroy({where : { id : orderId}});
            res.status(200);
          
       } catch (error) {
            console.log(error);
            res.status(500).json(error);
       } 
});

      
     



sequelize.sync()
.then(()=>{
    app.listen(port, () => {
        console.log(`Server Running on port ${port}`);
    });
})
.catch( err => console.log(err));

