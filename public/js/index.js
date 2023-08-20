window.addEventListener('DOMContentLoaded',() => {
    fetchData();
});

async  function fetchData(){

try{


const  responce =  await axios.get('http://localhost:4000/orders')
  
 console.log( 'data Loaded');
 console.log(responce);
 const items = responce.data.allOrders;
 for(let i=0; i< items.length; i++){
     addToBillList(items[i]);
 }
}
catch(error) {
 console.log(error);
}

 



}


//*************************************************

//************************************************
function addToBillList(item){
const {name , dish, table} = item;

const ultable1 = document.getElementById('table1');
const ultable2 =document.getElementById('table2');
const ultable3 = document.getElementById('table3');

const li = document.createElement('li');

li.appendChild(document.createTextNode(name));
li.appendChild(document.createTextNode(" "));
li.appendChild(document.createTextNode(" , Dish - "));
li.appendChild(document.createTextNode(dish));
li.appendChild(document.createTextNode(" "));

li.appendChild(document.createTextNode(" "));
//*************************
const btn = document.createElement('button');
btn.className = " btn btn-danger";
btn.appendChild(document.createTextNode('Delete Item'));
li.appendChild(btn);



if( item.table == 1){
ultable1.appendChild(li);
}
if( item.table == 2){
    ultable2.appendChild(li);
}
if( item.table == 3){
ultable3.appendChild(li);
}


btn.addEventListener('click', deleteItem);

async   function deleteItem(){
         
       let id = item.id;
       console.log(id);
    if( item.table == 1){

        ultable1.removeChild(li);

        try{
         const  deleteTbale1 =  await axios.delete(`http://localhost:4000/orders/${id}`)
         console.log('Item Deleted.. form table 1');
        

        }
        catch(err) {
         console.log(err);
        }
    
        
        
        
 };
 if( item.table == 2){
     ultable2.removeChild(li);

     try{
        
      const deleteTable2 = await  axios.delete(`http://localhost:4000/orders/${id}`)
        
         console.log('Item Deleted.. form table 2');
     
     }
     catch(err ) {
         console.log(err);
        }
 };

 if( item.table == 3){
     ultable3.removeChild(li);

   try{
     const deleteTable3 = await  axios.delete(`http://localhost:4000/orders/${id}`)
        
         console.log('Item Deleted.. from table 3');
     
   }
    catch(err ) {
         console.log(err);
        }
 };


     }




          


}
//******************************************************************

 
function freeHolds (){
    
    setTimeout(() => {
              window.location.reload();
    },300);
 };

