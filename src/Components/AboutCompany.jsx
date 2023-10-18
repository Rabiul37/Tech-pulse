import company from "../assets/company.jpg";
import { HiCheck } from "react-icons/Hi";
const AboutCompany = () => {
  return (
    <div>
      <div className="grid items-center gap-8 lg:grid-cols-2 mt-12 mb-5 bg-gray-200 p-10 w-11/12 m-auto rounded-3xl">
        <div>
          <img className="h-[90vh] w-full" src={company} alt="" />
        </div>
        <div>
          <h1 className="text-4xl font-semibold text-gray-800 mb-8 ">
            What We Do
          </h1>
          <p className="text-md font-semibold text-gray-500 mb-8">
            An electrical company dedicated to excellence in electrical
            solutions. We provide a wide range of services, from electrical
            installation and repairs to energy-efficient upgrades and smart home
            solutions. Our experienced team ensures safety and efficiency in
            every project.
          </p>
          <ol className="font-semibold text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-black">
                <HiCheck></HiCheck>
              </span>
              <li>Installation and Repairs</li>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black">
                <HiCheck></HiCheck>
              </span>
              <li>Safety and Compliance</li>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black">
                <HiCheck></HiCheck>
              </span>
              <li>Energy-Efficiency Solutions</li>
            </div>
          </ol>
          <button className="btn bg-gray-700 text-white ">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
