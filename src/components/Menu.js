import React from 'react';

const Menu = ({ menuItems }) => {
  function formatToCurrency(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  return (
    <div className='section-center'>
      {menuItems.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>₹{formatToCurrency(price)}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

