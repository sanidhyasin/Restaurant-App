// import { GoPlus } from "react-icons/go";
// import { FiMinus } from "react-icons/fi";

// export const MenuItem = () => {
//   return (
//     <div className="w-full h-fit border-2 rounded-lg flex row">
//       <div className="flex basis-1/6 h-full w-full bg-center bg-cover bg-black  rounded-l-xl">
//         <img
//           className=" rounded-l-xl"
//           src="https://i.ibb.co/2cbCP1c/pizza-pizza-filled-with-tomatoes-salami-olives.jpg"
//           alt="trial"
//         />
//       </div>
//       <div className="flex flex-row justify-between w-full px-8 py-4">
//         <div className=" flex flex-col justify-between">
//           <div className="">
//             <h1 className=" text-3xl font-semibold">Pizza</h1>
//             <p className=" text-xl text-slate-500 ">
//               Delicious thin crust pizza with cheese, olives, tomato, onion,
//               chicken
//             </p>
//           </div>
//           <div className="">
//             <h1 className="text-2xl italic text-slate-700">₹795</h1>
//           </div>
//         </div>
//         <div className="flex flex-col justify-between items-center">
//           <div className=" flex flex-row gap-1">
//             <button>
//               <FiMinus className="text-2xl text-slate-700" />
//             </button>
//             <div className="p-2 border-2">1</div>
//             <button>
//               <GoPlus className="text-2xl text-slate-700" />
//             </button>
//           </div>
//           <div className="">
//             <button class=" bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full">
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// MenuItem.js
import React from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

export const MenuItem = ({ item, quantity, onQuantityChange, onAddToCart }) => {
  const fallbackImageUrl = "https://via.placeholder.com/150?text=No+Image";

  const getImageUrl = (item) => {
    if (item.image && typeof item.image === "string") {
      return item.image;
    }
    if (item.image && item.image.url) {
      return item.image.url;
    }
    if (item.imageUrl) {
      return item.imageUrl;
    }
    return fallbackImageUrl;
  };

  const imageUrl = getImageUrl(item);

  return (
    <div className="sm:w-full sm:max-w-full max-w-[400px] h-[400px] sm:h-[200px] border-2 rounded-lg flex flex-col sm:flex-row mb-4 justify-between">
      <div className=" w-full h-[200px] sm:w-[200px] sm:h-full flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-l-lg"
          src={imageUrl}
          alt={item.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImageUrl;
          }}
        />
      </div>
      <div className="flex flex-row justify-between w-full px-8 py-4 overflow-hidden">
        <div className="flex flex-col justify-between ">
          <div>
            <h1 className="text-3xl font-semibold sm:truncate">{item.name}</h1>
            <p className="text-xl text-slate-500 line-clamp-2">
              {item.description}
            </p>
          </div>
          <div>
            <h1 className="text-2xl italic text-slate-700">
              ₹{(item.price * 80).toFixed(2)}
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center ml-4">
          <div className="flex flex-row gap-1">
            <button onClick={() => onQuantityChange(item.id, -1)}>
              <FiMinus className="text-2xl text-slate-700" />
            </button>
            <div className="p-2 border-2">{quantity}</div>
            <button onClick={() => onQuantityChange(item.id, 1)}>
              <GoPlus className="text-2xl text-slate-700" />
            </button>
          </div>
          <div>
            <button
              className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => onAddToCart(item)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
