import propTypes from "prop-types";
function UserReview({ data }) {
  const { userName, userImage, date, comment, rate } = data;

  return (
    <figure className="relative bg-white p-8 before:absolute before:left-0 before:top-0 before:font-sans before:text-9xl before:text-gray-300 before:content-['\201C']">
      <blockquote className="relative z-20 mb-8 mt-6">{comment}</blockquote>
      <figcaption className="flex items-center gap-2">
        <img src={userImage} alt="User 1" className="size-10 rounded-full" />
        <div className="mr-auto">
          <p className="text-sm uppercase text-gray-600">{userName}</p>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
        <div className="text-2xl text-cerise-red-500">{rate}</div>
      </figcaption>
    </figure>
  );
}

export default UserReview;
UserReview.propTypes = {
  data: propTypes.object,
};
