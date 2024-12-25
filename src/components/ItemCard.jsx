const ItemCard = ({ item }) => {
  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);

    return Array.from({ length: totalStars }, (_, index) => (
      <span
        key={index}
        className={index < filledStars ? "text-yellow-500" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };
  return (
    <div className="flex flex-col items-center justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <a href="#">
        <img className="rounded-t-lg" src={item.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {item.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">Price: {item.price}</p>
        <p className="flex items-center">
          Rating:{" "}
          {item.rating?.average
            ? renderStars(item.rating.average)
            : "No Rating"}
          <span className="ml-2 text-gray-500">
            ({item.rating?.reviews} reviews)
          </span>
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
