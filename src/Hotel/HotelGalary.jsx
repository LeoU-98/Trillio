import hotelImage1 from "../assets/hotel-1.jpg";
import hotelImage2 from "../assets/hotel-2.jpg";
import hotelImage3 from "../assets/hotel-3.jpg";

function HotelGalary() {
  return (
    <div className="flex w-full items-center">
      <img
        src={hotelImage1}
        alt="hotel image 1"
        className="w-1/3 select-none"
      />
      <img
        src={hotelImage2}
        alt="hotel image 2"
        className="w-1/3 select-none"
      />
      <img
        src={hotelImage3}
        alt="hotel image 3"
        className="w-1/3 select-none"
      />
    </div>
  );
}

export default HotelGalary;
