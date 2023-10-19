import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProductCart = ({ product }) => {
  const { id, name, brandName, img, price, rating, type } = product;
  return (
    <div>
      <div className="card card-compact w-96 bg-gray-700 shadow-xl mb-12">
        <figure>
          <img className="w-96 h-60" src={img} alt="brand" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-gray-200">Name : {name} </h1>
          <h1 className="card-title text-gray-200">
            Brand Name : {brandName}{" "}
          </h1>
          <h1 className="card-title text-cyan-400"> Type : {type} </h1>
          <h1 className="card-title text-cyan-400"> Price : {price} $ </h1>
          <h1 className="card-title text-cyan-400"> Rating : {rating} star </h1>
          <div className="card-actions justify-center">
            <Link to={`/detailsProduct/${id}`}>
              <button className="btn bg-gray-200 text-gray-800">Details</button>
            </Link>
            <button className="btn bg-gray-200 text-gray-800">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
ProductCart.propTypes = {
  product: PropTypes.object,
};
