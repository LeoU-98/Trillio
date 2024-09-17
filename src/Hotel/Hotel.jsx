import Description from "./Description";
import HotelGalary from "./HotelGalary";
import Rating from "./Rating";
import UserReview from "./UserReview";
import user5 from "../assets/user-5.jpg";
import user6 from "../assets/user-6.jpg";

const userData = [
  {
    userName: "Nick Smith",
    userImage: user5,
    date: "Feb 23rd, 2017",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugadoloremque architecto dicta animi, totam, itaque officia ex. ",

    rate: "7.8",
  },
  {
    userName: "Sarah Antoney",
    userImage: user6,
    date: "Nov 2nd, 2021",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugadoloremque architecto dicta animi, totam, itaque officia ex. ",
    rate: "8.2",
  },
];

function Hotel() {
  return (
    <main className="basis-[80%] bg-yellow-600">
      <HotelGalary />
      <Rating />
      <div className="flex gap-10 bg-[#faf9f9] p-10">
        <Description />
        <div className="flex flex-col gap-10">
          {userData.map((user, key) => (
            <UserReview data={user} key={key} />
          ))}
          <div className="flex items-center justify-center">
            <button className="text-cerise-red-500 underline underline-offset-4">
              show all →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hotel;
