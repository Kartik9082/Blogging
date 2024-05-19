import { Link } from "react-router-dom";

const PostCard = ({ title, author, content, createdAt, _id }) => {
  const isoDateString = createdAt;

  const dateObject = new Date(isoDateString);

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get month name
  const monthName = monthNames[dateObject.getMonth()];

  // Get day
  const day = dateObject.getDate();

  // Get year
  const year = dateObject.getFullYear();

  // Format the date string
  const formattedDate = `${monthName} ${day} ${year}`;

  return (
    <div className="w-72 mx-auto bg-white rounded-xl overflow-hidden shadow-md max-h-96">
      <div className="px-6 py-4">
        <Link to={"/blog/" + _id}>
          <div className="font-bold text-xl mb-2 hover:text-gray-600 delay-75 transition ease-in-out">
            {title}{" "}
          </div>
        </Link>

        <p className="text-sm text-gray-600 mt-4">{formattedDate}</p>
        <p className="text-sm text-gray-600">{author.name}</p>
        <p className="text-gray-700 text-base mt-4">{content}</p>
      </div>
    </div>
  );
};

export default PostCard;
