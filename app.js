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



      
     



sequelize.sync()
.then(()=>{
    app.listen(port, () => {
        console.log(`Server Running on port ${port}`);
    });
})
.catch( err => console.log(err));

