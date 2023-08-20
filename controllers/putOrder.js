const Sequelize = require('sequelize');
const Order = require('../models/order');
const path = require('path');
const express= require('express');

exports.getOrderPage = (req,res,next) => {
    res.sendFile(path.join(__dirname,'..','public','views','Resto.html'));
};

exports.postOrderData = (req,res,next) =>{
         
        const order = {
             name : req.body.name,
             dish: req.body.dish,
             table: req.body.table
        }
       
        console.log(order);

        Order.create({
            name:order.name,
            dish: order.dish,
            table:order.table
        })
        .then( ()=> {
            console.log('Order Created...');
        })
        .catch( err => console.log(err));

 };


 exports.getOrders = async (req,res) => {
     
    try {

        const  orders = await Order.findAll();
           res.status(200).json({allOrders : orders});
      
   } catch (error) {
       console.log('Get orders failings', JSON.stringify(error));
       res.status(500).json({error:error});
   }

 };

 exports.deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        console.log(orderId);
        await Order.destroy({where : { id : orderId}});
        res.status(200);
      
   } catch (error) {
        console.log(error);
        res.status(500).json(error);
   } 
 };