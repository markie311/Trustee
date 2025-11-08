import React, { useState } from 'react';

import '../../styles/landingpage/categorybuttons.scss';

// Mock subcategories data - customize these for each category
const categoryData = {
  Men: {
    columns: [
      { title: 'Clothing', items: ['Shirts', 'Pants', 'Jackets', 'Suits', 'Activewear'] },
      { title: 'Shoes', items: ['Sneakers', 'Boots', 'Dress Shoes', 'Sandals'] },
      { title: 'Accessories', items: ['Watches', 'Belts', 'Wallets', 'Sunglasses'] }
    ]
  },
  Women: {
    columns: [
      { title: 'Clothing', items: ['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Activewear'] },
      { title: 'Shoes', items: ['Heels', 'Flats', 'Boots', 'Sneakers', 'Sandals'] },
      { title: 'Accessories', items: ['Handbags', 'Jewelry', 'Scarves', 'Sunglasses'] }
    ]
  },
  Designer: {
    columns: [
      { title: 'Luxury Brands', items: ['Gucci', 'Prada', 'Louis Vuitton', 'Chanel'] },
      { title: 'Collections', items: ['New Arrivals', 'Limited Edition', 'Sale Items'] },
      { title: 'Categories', items: ['Apparel', 'Accessories', 'Shoes', 'Bags'] }
    ]
  },
  Kids: {
    columns: [
      { title: 'Boys', items: ['Tops', 'Bottoms', 'Shoes', 'Outerwear'] },
      { title: 'Girls', items: ['Dresses', 'Tops', 'Bottoms', 'Shoes'] },
      { title: 'Baby', items: ['Bodysuits', 'Sleepwear', 'Accessories'] }
    ]
  },
  Home: {
    columns: [
      { title: 'Living Room', items: ['Sofas', 'Tables', 'Decor', 'Lighting'] },
      { title: 'Bedroom', items: ['Beds', 'Mattresses', 'Bedding', 'Storage'] },
      { title: 'Kitchen', items: ['Appliances', 'Cookware', 'Dinnerware'] }
    ]
  },
  Electronics: {
    columns: [
      { title: 'Computers', items: ['Laptops', 'Desktops', 'Tablets', 'Accessories'] },
      { title: 'Mobile', items: ['Smartphones', 'Cases', 'Chargers', 'Headphones'] },
      { title: 'Audio & Video', items: ['TVs', 'Speakers', 'Cameras', 'Gaming'] }
    ]
  },
  Entertainment: {
    columns: [
      { title: 'Movies & TV', items: ['Blu-ray', 'DVDs', 'Streaming', 'Box Sets'] },
      { title: 'Music', items: ['Vinyl', 'CDs', 'Digital', 'Instruments'] },
      { title: 'Gaming', items: ['Consoles', 'Games', 'Accessories', 'VR'] }
    ]
  },
  Hobbies: {
    columns: [
      { title: 'Arts & Crafts', items: ['Painting', 'Drawing', 'Sculpting', 'DIY Kits'] },
      { title: 'Collectibles', items: ['Action Figures', 'Cards', 'Memorabilia'] },
      { title: 'Outdoor', items: ['Camping', 'Fishing', 'Hiking', 'Photography'] }
    ]
  },
  Sports: {
    columns: [
      { title: 'Fitness', items: ['Gym Equipment', 'Yoga', 'Running', 'Cycling'] },
      { title: 'Team Sports', items: ['Basketball', 'Soccer', 'Baseball', 'Football'] },
      { title: 'Outdoor Sports', items: ['Golf', 'Tennis', 'Swimming', 'Skiing'] }
    ]
  },
  About: {
    columns: [
      { title: 'Company', items: ['Our Story', 'Careers', 'Press', 'Contact'] },
      { title: 'Support', items: ['Help Center', 'Shipping', 'Returns', 'FAQ'] },
      { title: 'Connect', items: ['Blog', 'Social Media', 'Newsletter'] }
    ]
  }
};

export default function CategoryButtons({ viewport = 'lg' }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const categories = ['Men', 'Women', 'Designer', 'Kids', 'Home', 'Electronics', 'Entertainment', 'Hobbies', 'Sports', 'About'];

  const handleMouseEnter = (category) => {
    if (viewport !== 'xs') {
      setActiveDropdown(category);
    }
  };

  const handleMouseLeave = () => {
    if (viewport !== 'xs') {
      setActiveDropdown(null);
    }
  };

  const handleClick = (category) => {
    console.log(`Navigating to ${category}`);
  };

  // Mobile/XS View
  if (viewport === 'xs') {
    return (
      <div id="categorybuttons" className="categorybuttons-row categorybuttons-mobile">
        {categories.map((category, categoryindx) => (
          <div
            key={categoryindx}
            className="categorybuttons-categorybuttoncontainer mobile"
          >
            <button
              className="categorybuttons-categorybuttoncontainer-categorybutton"
              onClick={() => handleClick(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>
    );
  }

  // Desktop View (MD/LG) with Dropdowns
  return (
    <div className="categorybuttons-wrapper">
      <div id="categorybuttons" className="categorybuttons-row">
        {categories.map((category, categoryindx) => (
          <div
            key={categoryindx}
            className="categorybuttons-categorybuttoncontainer"
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`categorybuttons-categorybuttoncontainer-categorybutton ${
                activeDropdown === category ? 'active' : ''
              }`}
              onClick={() => handleClick(category)}
            >
              {category}
              <span className="dropdown-arrow">▼</span>
            </button>

            {/* Dropdown Menu */}
            {activeDropdown === category && categoryData[category] && (
              <div className="category-dropdown">
                <div className="category-dropdown-content">
                  {categoryData[category].columns.map((column, colIdx) => (
                    <div key={colIdx} className="category-dropdown-column">
                      <h3 className="category-dropdown-title">{column.title}</h3>
                      <ul className="category-dropdown-list">
                        {column.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="category-dropdown-item">
                            <a href="#" onClick={(e) => { e.preventDefault(); console.log(`Selected: ${item}`); }}>
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}