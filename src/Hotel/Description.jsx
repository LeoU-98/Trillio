import user1 from "../assets/user-1.jpg";
import user2 from "../assets/user-2.jpg";
import user3 from "../assets/user-3.jpg";
import user4 from "../assets/user-4.jpg";
import CTA from "./CTA";

function Description() {
  const featureData = [
    "Close to the beach",
    "Breakfast included",
    "Free airport shuttle",
    "Free wifi in all rooms",
    "Air conditioning and heating",
    "Pets allowed",
    "We speak all languages",
    "Perfect for families",
  ];

  return (
    <div className="bg-white p-8">
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
        dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
        corporis incidunt deserunt quae architecto voluptate.
      </p>
      <p className="mb-6 border-b-[1px] border-gray-300 pb-6">
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate delectus, inventore iure aliquid aliquam.
      </p>
      <ul className="mb-6 grid list-disc grid-cols-2 grid-rows-4 marker:text-cerise-red-500">
        {featureData.map((feature, key) => (
          <li key={key} className="py-1">
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <p className="">Lucy and 3 other friends recommend this hotel.</p>
        <div className="flex items-center">
          <img
            src={user1}
            alt="Friend 1"
            className="-mr-2 size-10 rounded-full border-[2px] border-white"
          />
          <img
            src={user2}
            alt="Friend 2"
            className="-mr-2 size-10 rounded-full border-[2px] border-white"
          />
          <img
            src={user3}
            alt="Friend 3"
            className="-mr-2 size-10 rounded-full border-[2px] border-white"
          />
          <img
            src={user4}
            alt="Friend 4"
            className="-mr-2 size-10 rounded-full border-[2px] border-white"
          />
        </div>
      </div>
      <CTA />
    </div>
  );
}

export default Description;
