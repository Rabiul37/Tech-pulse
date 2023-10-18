import { SiSecurityscorecard } from "react-icons/Si";
import { MdElectricalServices } from "react-icons/Md";
import { TbAirConditioning } from "react-icons/Tb";
import { GiHeatHaze } from "react-icons/Gi";
import service from "../assets/service.jpg";
const OurService = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-12 bg-gray-700 p-10  m-auto lg:grid-cols-3">
      <div className="col-span-2">
        <h1 className="text-5xl font-semibold text-[#B1FCFC]">Our Services</h1>
        <p className="text-sm text-gray-200 text-justify">
          We provide electronic solutions: design, manufacturing, repairs.
          Innovate with our expertise for quality, reliable electronics in
          various industries.
        </p>
        <div className="bg-gray-700 ">
          {/* frist colom */}
          <div className="grid  gap-8 mt-8 mb-8 lg:grid-cols-2">
            <div className=" flex items-center gap-5">
              <h1 className="text-5xl text-[#B1FCFC]">
                {" "}
                <SiSecurityscorecard></SiSecurityscorecard>
              </h1>
              <div>
                <h1 className="text-2xl font-semibold text-gray-100">
                  Security system
                </h1>
                <p className="text-sm  text-white text-justify">
                  Comprehensive security system services: Installation,
                  monitoring, and maintenance for safeguarding homes and
                  businesses. Your safety is our priority.
                </p>
              </div>
            </div>
            <div className="bg-gray-700 flex items-center gap-5">
              <h1 className="text-5xl text-[#B1FCFC]">
                {" "}
                <MdElectricalServices></MdElectricalServices>
              </h1>
              <div>
                <h1 className="text-2xl font-semibold text-gray-100">
                  Electrical
                </h1>
                <p className="text-sm  text-white text-justify">
                  Expert electrical services for residential, commercial, and
                  industrial needs. Wiring, repairs, and installations done
                  professionally.
                </p>
              </div>
            </div>
          </div>

          {/* secound colom */}
          <div className="grid  gap-8 mt-8 mb-8 lg:grid-cols-2">
            <div className="bg-gray-700 flex items-center gap-5">
              <h1 className="text-5xl text-[#B1FCFC]">
                {" "}
                <TbAirConditioning></TbAirConditioning>
              </h1>
              <div>
                <h1 className="text-2xl font-semibold text-gray-100">
                  Air Conditioning
                </h1>
                <p className="text-sm  text-white text-justify">
                  Trusted air conditioning service: Installation, repairs, and
                  maintenance for cool and comfortable indoor environments. Stay
                  comfortable with us.
                </p>
              </div>
            </div>
            <div className="bg-gray-700 flex items-center gap-5">
              <h1 className="text-5xl text-[#B1FCFC]">
                {" "}
                <GiHeatHaze></GiHeatHaze>
              </h1>
              <div>
                <h1 className="text-2xl font-semibold text-gray-100">
                  Heating
                </h1>
                <p className="text-sm  text-white text-justify">
                  Reliable heating services: Installation, repairs, and
                  maintenance for a cozy, warm, and comfortable home or
                  business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="w-96 h-full m-right" src={service} alt="" />
      </div>
    </div>
  );
};

export default OurService;
