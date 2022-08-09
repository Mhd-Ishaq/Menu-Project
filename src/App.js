import React, { useState } from 'react';

import Menu from './components/Menu';
import Categories from './components/Categories';

import courses from './data';

let items = ['All',...new Set(courses.map((item) => item.category))];
// categories = ['All',  ...new Set(categories)];
function App() {
  const [menuItems, setMenuItems] = useState(courses);
  const [categories] = useState(items);

  const filterMenuItems = (category) => {
    if (category === 'All') {
      setMenuItems(courses);
      return;
    }

    let newMenuItems = courses.filter((course) =>{
      return course.category === category
    } );
    setMenuItems(newMenuItems);
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Courses</h2>
          <div className='underline'></div>
        </div>
        <Categories filterMenuItems={filterMenuItems} categories={categories} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
