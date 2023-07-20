import React, { useState } from 'react'

const GroceryItemComponent = ({item, handleEditItem, handleDeleteItem}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newItem, setNewItem]= useState(item.name);
    const [errors, setErrors] = useState("");
    const onEdit = () => {
        if(newItem){
            handleEditItem(item.id, newItem);
            setIsEditing(false);
            setErrors("");
        }else{
            setErrors("Grocery item must not be empty.");
        }
    }
  return (
    <>
    <li className='list-item'>
        {isEditing ? (<input type='text' value={newItem} onChange={(event) => setNewItem(event.target.value)}/>) : (<span>{item.name}</span>)}
        <div>
            <button onClick={() => {isEditing ? onEdit() : setIsEditing(true)}} className='btn-edit'>{isEditing ? <i class='bx bx-check'></i> : <i class='bx bxs-edit'></i>}</button>
            <button onClick={() => handleDeleteItem(item.id)} className='btn-delete'><i class='bx bxs-trash' ></i></button>
        </div>
    </li>
    {errors ? <p className='errors'>{errors}</p>: null}
    </>
  )
}

export default GroceryItemComponent