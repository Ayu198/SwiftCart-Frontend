import React from "react";

export const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-4 lg:h-[700px] px-5 lg:px-20">

      {/* Left Large Image */}
      <div className="col-span-3 row-span-12 overflow-hidden rounded-xl">
        <img
          src="https://i.pinimg.com/736x/91/d0/60/91d0601e73a75986e6362ec56193d7f7.jpg"
          alt="Category"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Small Image */}
      <div className="col-span-2 row-span-6 overflow-hidden rounded-xl">
        <img
          src="https://i.pinimg.com/736x/74/ec/d7/74ecd7e690d3709c0857ac4cf6be91eb.jpg"
          alt="Category"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Wide Image */}
      <div className="col-span-4 row-span-6 overflow-hidden rounded-xl">
        <img
          src="https://i.pinimg.com/736x/bc/a4/07/bca40799e3ea8a99ca411cdaf3b8f291.jpg"
          alt="Category"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Large Image */}
      <div className="col-span-3 row-span-12 overflow-hidden rounded-xl">
        <img
          src="https://i.pinimg.com/736x/f7/67/05/f76705e7a7f17e9989ff203520fc3c15.jpg"
          alt="Category"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Wide Image */}
      <div className="col-span-4 row-span-6 overflow-hidden rounded-xl">
        <img
          src="https://i.pinimg.com/736x/a6/ef/14/a6ef1446679f1af538809e9981f949ec.jpg"
          alt="Category"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Small Image */}
      <div className="col-span-2 row-span-6 overflow-hidden rounded-xl">
        <img
          src="https://i.pinimg.com/736x/b5/9a/a0/b59aa0251268a47bd3010adcf0973c2c.jpg"
          alt="Category"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};