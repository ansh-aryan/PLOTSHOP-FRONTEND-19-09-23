import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if(parseInt(quantity)>0){
      var tax = 0;
      if(product.type == "Product"){
        if(product.price>5000) tax = 0.18*product.price
        else if(product.price>1000 && product.price<=5000) tax = 0.12*product.price
        else tax = 200
    }else{
        if(product.price>8000) tax = 0.15*Price
        else if(product.price>1000 && product.price<=8000) tax = 0.10*product.price
        else tax = 100
    }

    // Call the addToCart callback function with the product and quantity
    addToCart(product.name, quantity, product.price, product.type, parseFloat(tax).toFixed(2));
    
    }
    
  };

  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-4 border-teal-900">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover object-center h-full block"
          />
        </a>
        <div className="mt-4">
          <h2 className="text-white title-font text-lg font-medium">
            {product.name}
          </h2>
          <p className="mt-1">Rs {product.price}</p>
          <p className="mt-1"> {product.type}</p>
          {/* <button className="inline-flex text-white bg-purple-600 my-2 border-0 py-1 px-6 focus:outline-none hover:bg-purple-900 rounded text-lg hover:shadow-sm hover:shadow-purple-400/50">
            ADD
          </button> */}

          <div className="flex items-center space-x-4">
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded"
              onClick={handleIncrement}
            >
              +
            </button>

            <button
              className="bg-teal-500 hover:bg-teal-800 text-white px-4 py-2 rounded"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
