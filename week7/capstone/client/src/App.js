
import './App.css';
import axios from 'axios';
import {useState, useEffect} from "react";
import Item from './components/Item';
import ItemFormHandler from './components/ItemFormHandler';


function App() {
   const [items, setItems] = useState([]);

   const getItems = () => {
    axios.get('/items')
      .then(res => {
        console.log (res.data)
        setItems(res.data)
      })
      .catch(err => console.log(err))
   }
  
   const addItem = (newAvenger) => {
    newAvenger.URL=items.length.toString()
    axios.post('/items', newAvenger)
    .then(res => {
      getItems()
    })
    .catch(err => console.log(err))
   };

   const deleteItem = (url) => {
    axios.delete(`/items/${url}`)
    .then(res=>{
      getItems()
    } )
    .catch(err => console.log(err))
   }

   const editItem =(updates, url) => {
    axios.put(`/items/${url}`, updates)
    .then(res => {
      getItems()
    })
    .catch(err => console.log(err))
   }

   useEffect(() => {
    getItems();
   }, []);

   const itemsList = items.map(item => <Item {...item} name={item["Name/Alias"]}url={item.URL}gender={item.Gender}deleteItem={deleteItem} editItem={editItem} key={item.url}/>)

   return (
    <div className='items-container'>
      <ItemFormHandler 
      btnText='Add Item'
      submit={addItem}/>
      {itemsList}
    </div>
   );
}

export default App;
