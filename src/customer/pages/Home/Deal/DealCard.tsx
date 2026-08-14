const DealCard = () => {
  return (
    <div className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      <img
        className="w-full h-72 object-cover"
        src="https://i.pinimg.com/736x/e8/f9/c2/e8f9c298b248f36ab779774b23092b94.jpg"
        alt="Deal"
      />

      <div className="bg-black text-white text-center p-4">
        <p className="text-lg font-semibold">
          Silver Bracelet
        </p>

        <p className="text-2xl font-bold text-pink-400">
          20% OFF
        </p>

        <p className="text-sm opacity-80">
          Shop Now
        </p>
      </div>
    </div>
  );
};

export default DealCard;