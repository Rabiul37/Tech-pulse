import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className=" bg-[#00000088] w-full h-[90vh] absolute">
        <div className="flex flex-col items-center mt-16 gap-8">
          <h1 className=" text-xl font-bold text-gray-200   lg:text-5xl tracking-wider">
            The Pulse of Technology
          </h1>
          <h1 className="text-4xl font-bold text-[#b1fcfc]">
            Electrify Your Future
          </h1>
          <Link to="/Register">
            <button className="btn-outline tracking-wider px-10 font-bold py-2 text-xl mt-10 bg-[#b1fcfc]">
              Register
            </button>
          </Link>
          <h1 className="text-4xl font-bold text-[#b1fcfc]">Tech Plus</h1>
          <h1 className=" text-xl font-bold text-[#b1fcfc]  lg:text-3xl tracking-wider">
            Where Innovation Meets Integration
          </h1>
        </div>
      </div>
      <img className="w-full h-[90vh]" src={banner} alt="" />
    </div>
  );
};

export default Banner;
