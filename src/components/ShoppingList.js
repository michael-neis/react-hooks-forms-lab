import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');
  const [allItems, setAllItems] = useState(items)

  const [itemsToDisplay, setItemsToDisplay] = useState(allItems);

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value)
    setItemsToDisplay(allItems.filter((item) => {
      if (e.target.value === 'All') return true;
      return item.category === e.target.value;
    }))
  }

  function onSearchChange(e){
    setSearch(e.target.value)
    setItemsToDisplay(allItems.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  function onItemFormSubmit(newItem){
      setAllItems([newItem, ...items])
      console.log(allItems)
      setItemsToDisplay([newItem, ...allItems])
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search = {search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
