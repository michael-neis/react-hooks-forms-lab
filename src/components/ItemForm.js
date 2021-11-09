import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({onItemFormSubmit}) {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('Produce');


  function handleNameChange(e){
    setName(e.target.value)
  }

  function handleCategoryChange(e){
    setCategory(e.target.value)
  }
  
  function handleFormSubmit(e){
    e.preventDefault()
    const newItem = {
    id: uuid(),
    name: `${name}`,
    category: `${category}`,
  }
    onItemFormSubmit(newItem)
    setName('')
    setCategory('Produce')
  }

  return (
    <form onSubmit={handleFormSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} value={name}/>
      </label>

      <label>
        Category:
        <select onChange={handleCategoryChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
