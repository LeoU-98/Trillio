function CTA() {
  return (
    <div className="mt-6 flex flex-col items-center">
      <h2 className="mb-4 text-lg text-gray-700">
        Good news! We have 4 free rooms for your selected dates!
      </h2>
      <button className="group relative flex flex-col items-center overflow-hidden rounded-full bg-gradient-to-r from-cerise-red-500 to-cerise-red-700 px-6 py-3 text-center text-lg text-white duration-300">
        <span className="absolute block -translate-y-20 duration-300 group-hover:translate-y-0">
          Book now
        </span>
        <span className="relative block translate-y-0 duration-300 group-hover:translate-y-20">
          Only 4 rooms left
        </span>
      </button>
    </div>
  );
}

export default CTA;
