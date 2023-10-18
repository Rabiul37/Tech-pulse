import company from "../assets/company.jpg";
const AboutCompany = () => {
  return (
    <div>
      <div>
        <div>
          <img src={company} alt="" />
        </div>
        <div>
          <h1>Who We Are</h1>
          <p>
            An electrical company dedicated to excellence in electrical
            solutions. We provide a wide range of services, from electrical
            installation and repairs to energy-efficient upgrades and smart home
            solutions. Our experienced team ensures safety and efficiency in
            every project.
          </p>
          <ul>
            <li>Installation and Repairs</li>
            <li>Safety and Compliance</li>
          </ul>
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
