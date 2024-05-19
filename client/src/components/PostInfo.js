const PostInfo = () => {
  return (
    <div className="flex justify-center min-w-[80%] bg-gradient-to-r from-[#a8edea] to-[#fed6e3] min-h-[100vh]">
      <div className="absolute w-8/12 flex flex-col m-4  p-4 bg-white rounded-xl">
        <div className="flex justify-around items-center m-2 p-2 bg-stone-200">
          <div className="text-2xl font-bold">The Next Gen Tech</div>
          <div className="text-sm text-slate-800">- Kartikay</div>
        </div>
        <div className="flex justify-center items-center m-2 py-2 w-10/12">
          <p className="m-auto">
            Consider mechanisms for revoking tokens if they are compromised or
            if the user logs out. This might involve blacklisting tokens on the
            server-side or using token expiration strategies.
          </p>
        </div>
        <div className="flex gap-5">
          <button>🩷</button>
          <button>💬</button>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
