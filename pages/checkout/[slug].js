import React, { useState } from "react";
import { useRouter } from "next/router";

const Slug = ({cart}) => {
//   const router = useRouter();
//   const { cart } = router.query;
//   const productCart = JSON.parse(atob(cart));
  const productCart = cart;
  const [isBill, setIsBill] = useState(false);
  //const [isTax, setIsTax] = useState(false);
  const [totalBill, setTotalBill] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const generateBill = () => {
    // Define the URL of your backend server
    const backendURL = "http://localhost:8000"; // Replace with your actual server URL

    // Make a POST request to calculate the total bill
    fetch(`${backendURL}/total-bill`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data received from the server
        const totalBill = data.totalBill;
        setTotalBill(totalBill);
        setIsBill(true);
        console.log(`Total Bill: $${totalBill}`);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch Error:", error);
      });

      fetch(`${backendURL}/total-tax`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // Handle the data received from the server
          const totalTax = data.totalTax;
          setTotalTax(totalTax);
         // setIsTax(true);
          console.log(`Total Bill: $${totalTax}`);
        })
        .catch((error) => {
          // Handle any errors that occurred during the fetch
          console.error("Fetch Error:", error);
        });
  };

  return (
    <>
      <section className="text-gray-400 body-font max-h-screen">
      <header className="text-gray-400  body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/"className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
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
        </div>
      </header>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Order Summary
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Summary of the order
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-xl bg-stone-950 rounded-tl rounded-bl">
                    Product
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-xl bg-stone-950">
                    Quantity
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-xl bg-stone-950">
                    Type
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-xl bg-stone-950">
                    Price
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-xl bg-stone-950">
                    Tax
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-xl bg-stone-950">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {productCart.map((product) => (
                  <tr className="text-white text-lg bg-stone-950 ">
                    <td className="px-3 py-3">{product.name}</td>
                    <td className="px-3 py-3">{product.quantity}</td>
                    <td className="px-3 py-3">{product.type}</td>
                    <td className="px-3 py-3">₹ {product.price}</td>
                    <td className="px-3 py-3">₹ {product.tax}</td>
                    <td className="px-3 py-3">₹ {parseFloat(product.tax)*parseFloat(product.quantity)+ parseFloat(product.price) * parseFloat(product.quantity)}</td>
                  </tr>
                ))}
                {isBill ? (
                    <tr className="text-white text-lg bg-teal-800">
                    <td className="px-3 py-6">TOTAL</td>
                    <td className="px-3 py-6"></td>
                    <td className="px-3 py-6"></td>
                    <td className="px-3 py-6">₹ {totalBill}</td>
                    <td className="px-3 py-6">₹ {parseFloat(totalTax).toFixed(2)}</td>
                    <td className="px-3 py-6">₹ {parseFloat(totalTax+totalBill).toFixed(2)}</td>
                  </tr>
                ) : (
                  <tr>
                    <td className="px-4 py-6"></td>
                    <td className="px-4 py-6"></td>
                    <td className="px-4 py-6"></td>
                    <td className="px-4 py-6"></td>
                    <td className="px-4 py-6"></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <button
              onClick={generateBill}
              className="flex ml-auto text-xl text-white bg-teal-800 border-0 py-2 px-6 focus:outline-none hover:bg-teal-950 rounded"
            >
              Generate Bill
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slug;

export async function getServerSideProps(context) {
    const cart = JSON.parse(atob(context.query.slug));
    return {
      props: {
        cart
      },
    };
  }