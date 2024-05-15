const PostCard = ({ title, author, content, createdAt }) => {
  return (
    <div className=" max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md max-h-96">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-sm text-gray-600">Author: {author.name}</p>
        <p className="text-gray-700 text-base mt-4">{content}</p>
        <p className="text-sm text-gray-600 mt-4">{createdAt}</p>
      </div>
    </div>
  );
};

export default PostCard;
