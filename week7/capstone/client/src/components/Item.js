
import { useState } from "react";
import ItemFormHandler from "./ItemFormHandler";




function Item({ deleteItem, editItem, name, gender, url }) {
    const [editToggle, setEditToggle] = useState(false)
    function editHandler(item, url){
        editItem(item,url)
        setEditToggle(false)
    }
    return (
        <div className='item'>
            {!editToggle ?
                <>
                    <h1>name: {name}</h1>
                    <p>gender: {gender}</p>
                    <button onClick={() => deleteItem(url)} className="delete-btn">Delete</button>
                    <button onClick = {() => setEditToggle(prevToggle => !prevToggle)} className="edit-btn">Edit</button>
                </>
                :
                <>
                <ItemFormHandler 
                name ={name}
                gender={gender}
                url={url}
                btnText='Submit Edit'
                submit={editHandler}/>
                <button onClick= {() => setEditToggle(prevToggle=> !prevToggle)}>Close</button>
                </>
                
            }
        </div>
    );
}

export default Item;