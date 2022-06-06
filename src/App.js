import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const displayItems = (category) => {
    if(category === 'all')
      setMenuItems(items);
    else{
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <h4 className='underline'></h4>
        </div>
        <Categories displayItems={displayItems} categories={categories}></Categories>
        <Menu items={menuItems}></Menu>

      </section>
    </main>
  );
}

export default App;
