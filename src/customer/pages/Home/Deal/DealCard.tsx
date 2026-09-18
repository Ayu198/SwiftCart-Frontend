import type { Deal } from "../../../../types/dealTypes";

const DealCard = ({item}:{item:Deal}) => {
  return (
    <div className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      <img
        className="w-full h-72 object-cover"
        src={item.category.image}
        alt="Deal"
      />

      <div className="bg-black text-white text-center p-4">
        <p className="text-lg font-semibold">
          {item.category.name}
        </p>

        <p className="text-2xl font-bold text-pink-400">
          {item.discount}% OFF
        </p>

        <p className="text-sm opacity-80">
          Shop Now
        </p>
      </div>
    </div>
  );
};

export default DealCard;