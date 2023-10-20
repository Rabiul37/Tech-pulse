import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="mt-12 mb-8 w-10/12 m-auto">
      <div className="grid gap-8 lg:grid-cols-3">
        {brands.map((brand) => (
          <div key={brand.id}>
            <Link to={`/brandDetails/${brand.id}`}>
              <div className="card card-compact  bg-gray-700 shadow-xl">
                <figure>
                  <img
                    className="w-96 h-60"
                    src={brand.brandImage}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h1 className="text-3xl font-semibold text-cyan-400">
                    {brand.brandName}
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
