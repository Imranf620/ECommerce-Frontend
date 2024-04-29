import React, { useState } from 'react';

const shoeData = {
    base: 'standard', // Default base
    colors: ['red', 'blue', 'black'], // Available colors
    soles: ['rubber', 'leather'], // Available soles
    customParts: {
      color: 'red',
      sole: 'rubber',
    },
  };
  

const ShoeCustomizer = () => {
  const [currentColor, setCurrentColor] = useState(shoeData.customParts.color);
  const [currentSole, setCurrentSole] = useState(shoeData.customParts.sole);

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const handleSoleChange = (sole) => {
    setCurrentSole(sole);
  };

  return (
    <div>
      <h2>Customize Your Shoe</h2>
      <div>
        <h3>Color</h3>
        {shoeData.colors.map((color) => (
          <button key={color} onClick={() => handleColorChange(color)}>
            {color}
          </button>
        ))}
      </div>

      <div>
        <h3>Sole</h3>
        {shoeData.soles.map((sole) => (
          <button key={sole} onClick={() => handleSoleChange(sole)}>
            {sole}
          </button>
        ))}
      </div>

      <div>
        <h3>Your Customized Shoe</h3>
        <p>Color: {currentColor}</p>
        <p>Sole: {currentSole}</p>
      </div>
    </div>
  );
};

export default ShoeCustomizer;
