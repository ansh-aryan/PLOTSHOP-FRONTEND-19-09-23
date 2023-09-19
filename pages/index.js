import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [cart, setCart] = useState([]);

  // Callback function to update the cart with the selected product and quantity
  const addToCart = (product, quantity, price, type, tax) => {
    const updatedCart = [...cart];
    // Add the product and quantity to the cart
    updatedCart.push({ name: product, quantity: quantity, price: price, type: type, tax: tax });
    setCart(updatedCart);
    console.log("+++++++++++++++++++++++++++++++++++++=");
    console.log(cart);
    console.log("+++++++++++++++++++++++++++++++++++++=");
  };

  return (
    <section className="text-gray-400 body-font ">
      <header className="text-gray-400  body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="Shop"
            >
              <path
                d="M22,2H2A1,1,0,0,0,1,3V7A3,3,0,0,0,3,9.82V21a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9.82A3,3,0,0,0,23,7V3A1,1,0,0,0,22,2ZM15,4h2V7a1,1,0,0,1-2,0ZM11,4h2V7a1,1,0,0,1-2,0ZM7,4H9V7A1,1,0,0,1,7,7ZM4,8A1,1,0,0,1,3,7V4H5V7A1,1,0,0,1,4,8ZM14,20H10V16a2,2,0,0,1,4,0Zm5,0H16V16a4,4,0,0,0-8,0v4H5V9.82a3.17,3.17,0,0,0,1-.6,3,3,0,0,0,4,0,3,3,0,0,0,4,0,3,3,0,0,0,4,0,3.17,3.17,0,0,0,1,.6ZM21,7a1,1,0,0,1-2,0V4h2Z"
                fill="#ffffff"
                className="color000000 svgShape"
              ></path>
            </svg>
            <span className="ml-3 text-xl">PLOT Shop</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
          <Link
            href={`/checkout?cart=${JSON.stringify(cart)}`}
            className="inline-flex items-center bg-teal-600 border-0 py-1 px-3 focus:outline-none hover:bg-teal-900 hover:shadow-white-500/50 rounded text-white mt-4 md:mt-0 hover:shadow-sm hover:shadow-purple-500/50"
          >
            Checkout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1 "
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </header>
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap -m-4">
          <ProductCard
            key={1}
            product={{
              image: "/cam.png",
              name: "Plotaroid Camera",
              price: "4799",
              type:"Product",
              
              quantity: 0,
            }}
            addToCart={addToCart}
          />
          <ProductCard
            key={2}
            product={{
              image: "/watch.png",
              name: "PlotWatch",
              price: "9999",
              type:"Product",
              
              quantity: 0,
            }}
            addToCart={addToCart}
          />
          <ProductCard
            key={3}
            product={{
              image: "/hfone.png",
              name: "PlotSound",
              price: "6599",
              type:"Product",
              
              quantity: 0,
            }}
            addToCart={addToCart}
          />
          <ProductCard
            key={4}
            product={{
              image: "/glass.png",
              name: "PlotGlass",
              price: "2499",
              type:"Product",
              
              quantity: 0,
            }}
            addToCart={addToCart}
          />
          <ProductCard
            key={5}
            product={{
              image: "/health.png",
              name: "PlotWellness",
              price: "3499",
              type:"Service",
              
              quantity: 0,
            }}
            addToCart={addToCart}
          />
          <ProductCard
            key={6}
            product={{
              image: "/derma.png",
              name: "PlotDerma",
              price: "999",
              type:"Service",
            
              quantity: 0,
            }}
            addToCart={addToCart}
          />
          <ProductCard
            key={7}
            product={{
              image: "/skin.png",
              name: "PlotSkinCare",
              price: "5999",
              type:"Service",
              quantity: 0,
            }}
            addToCart={addToCart}
          />
          <ProductCard
            key={8}
            product={{
              image: "/decor.png",
              name: "PlotDecor",
              price: "1999",
              type:"Service",
              quantity: 0,
            }}
            addToCart={addToCart}
          />
        </div>
      </div>
    </section>
  );
}
