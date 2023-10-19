import { Link, useLoaderData } from "react-router-dom";
import Navber from "../Components/Navber";
import { useState } from "react";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadedproducts = useLoaderData();
  const [products, setProducts] = useState(loadedproducts);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount < 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = products.filter((product) => product._id !== _id);
            setProducts(remaining);
          });
      }
    });
  };
  return (
    <div>
      <Navber></Navber>
      <div className="grid gap-8 lg:grid-cols-2 mt-12 p-12">
        {products.map((product) => (
          <div key={product.id}>
            <div className="card card-side p-8 bg-gray-700 shadow-xl">
              <figure>
                <img className="w-40" src={product.ProductImage} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-gray-200">
                  Product Name : {product.ProductName}
                </h2>
                <h2 className="card-title text-gray-200">
                  Brand Name : {product.BrandName}
                </h2>
                <h2 className="card-title text-gray-200">
                  Product Type : {product.ProductType}
                </h2>
                <h2 className="card-title text-cyan-300">
                  Price : {product.Price} ${" "}
                </h2>
                <h2 className="card-title text-cyan-300">
                  Rating : {product.Rating} star{" "}
                </h2>
                <p className="text-sm font-medium text-gray-200">
                  {product.Description}
                </p>
                <div className="card-actions">
                  <button className="btn bg-gray-200">Details</button>
                  <Link to={`/update/${product._id}`}>
                    <button className="btn bg-gray-200">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn bg-gray-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
