import sprite from "../assets/sprite.svg";

function Rating() {
  return (
    <div className="flex items-center gap-4 bg-white pl-12">
      <h1 className="text-2xl font-thin uppercase text-gray-500">
        Hotel Las Palmas
      </h1>

      <div className="mr-auto flex items-center">
        <svg className="size-6 fill-cerise-red-500">
          <use href={`${sprite}#icon-star`} />
        </svg>
        <svg className="size-6 fill-cerise-red-500">
          <use href={`${sprite}#icon-star`} />
        </svg>
        <svg className="size-6 fill-cerise-red-500">
          <use href={`${sprite}#icon-star`} />
        </svg>
        <svg className="size-6 fill-cerise-red-500">
          <use href={`${sprite}#icon-star`} />
        </svg>
        <svg className="size-6 fill-cerise-red-500">
          <use href={`${sprite}#icon-star`} />
        </svg>
      </div>

      <div className="flex items-center gap-1">
        <svg className="size-6 fill-cerise-red-500">
          <use href={`${sprite}#icon-location-pin`} />
        </svg>
        <button className="text-cerise-red-500 underline underline-offset-8">
          Albufeira, Portugal
        </button>
      </div>

      <div className="bg-cerise-red-500 px-3 py-4 text-center text-white">
        <div className="text-2xl">8.6</div>
        <div className="text-xs">429 votes</div>
      </div>
    </div>
  );
}

export default Rating;
