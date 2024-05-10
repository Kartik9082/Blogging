const Footer = () => {
  return (
    <div className="flex justify-evenly  bottom-0 ">
      <div className="">
        <h1 className="font-medium m-2"> Usefull links</h1>
        <ul className="">
          <li className="ml-2 p-1">Home</li>
          <li className="ml-2 p-1">About</li>
          <li className="ml-2 p-1">Profile</li>
        </ul>
      </div>
      <div>
        <h1 className="font-medium m-2"> Categories</h1>
        <ul className="">
          <li className="ml-2 p-1">Fitness</li>
          <li className="ml-2 p-1">Technology</li>
          <li className="ml-2 p-1">Sports</li>
          <li className="ml-2 p-1">Lifestyle</li>
        </ul>
      </div>
      <div>
        <h1 className="font-medium m-2">Contact us </h1>
        <ul className="">
          <li className="ml-2 p-1">🗺️ 15 Cliff St, New York, USA</li>
          <li className="ml-2 p-1">📞 +54513069781</li>
          <li className="ml-2 p-1">📧 mernblog@magzler.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
