import { useLoaderData, useParams } from "react-router-dom";
import Navber from "../Components/Navber";
import Swal from "sweetalert2";

const DetailsProduct = () => {
  const { id } = useParams();
  const loadedData = useLoaderData();
  const allProducts = loadedData.flatMap((item) => item.products || []);
  const products = allProducts.find((product) => product.id == id);
  const { name, img, type, price, description, brandName, rating } = products;

  const handleAddCart = () => {
    const product = { name, img, type, price, brandName, rating, description };
    console.log(product);
    fetch(
      "https://assignment-ten-server-p5zlxbw1b-rabiul-awals-projects.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Your products add to the cart!", "success");
        }
      });
  };

  return (
    <div>
      <Navber></Navber>
      <div>
        <div className="card card-side bg-gray-700 shadow-xl mt-20 w-8/12 m-auto mb-28">
          <figure>
            <img className="h-[500px] w-[1350px]" src={img} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl text-cyan-300">Name : {name}</h2>
            <h2 className="card-title text-xl text-cyan-300">type : {type}</h2>
            <h2 className="card-title text-xl text-cyan-300">
              price : {price}
            </h2>
            <p className="text-base font-semibold text-gray-200">
              {description}
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={handleAddCart}
                className="btn bg-gray-200 text-gray-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-gray-500">m</h1>
    </div>
  );
};

export default DetailsProduct;
