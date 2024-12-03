import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <img
        className="w-full h-56 object-cover"
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Product"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">Smart Watch</h3>
        <p className="text-gray-600 text-sm mt-2">
          A  Designer Smart watch 
        </p>
        <div className="mt-4">
          <button className="w-full sm:w-auto bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
