import React, { useState } from 'react';

import Menu from './components/Menu';
import Categories from './components/Categories';

import courses from './data';

function App() {
  const [menuItems, setMenuItems] = useState(courses);

  const filterMenuItems = (category) => {
    if (category === 'all') {
      setMenuItems(courses);
      return;
    }

    let newMenuItems = courses.filter((course) => course.category === category);
    setMenuItems(newMenuItems);
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Courses</h2>
          <div className='underline'></div>
        </div>
        <Categories filterMenuItems={filterMenuItems} menuItems={menuItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
