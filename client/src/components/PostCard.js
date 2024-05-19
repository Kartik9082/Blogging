const PostCard = ({ title, author, content, createdAt }) => {
  const isoDateString = createdAt;
  console.log(isoDateString);
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
    <div className=" max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md max-h-96">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 underline">{title} </div>

        <p className="text-sm text-gray-600 mt-4">{formattedDate}</p>
        <p className="text-sm text-gray-600">{author.name}</p>
        <p className="text-gray-700 text-base mt-4">{content}</p>
      </div>
    </div>
  );
};

export default PostCard;
