import { Link, useLoaderData } from "react-router-dom";
import Navber from "../Components/Navber";
import { useState } from "react";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadedproducts = useLoaderData();
  console.log(loadedproducts);
  const [products, setProducts] = useState(loadedproducts);
  console.log(products);
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
            <div className="card  lg:card-side p-8 bg-gray-700 shadow-xl">
              <figure>
                <img
                  className="w-[800px] h-[300px]"
                  src={product.img}
                  alt="product"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-gray-200">
                  Product Name : {product.name}
                </h2>
                <h2 className="card-title text-gray-200">
                  Brand Name : {product.brandName}
                </h2>
                <h2 className="card-title text-gray-200">
                  Product Type : {product.type}
                </h2>
                <h2 className="card-title text-cyan-300">
                  Price : {product.price} ${" "}
                </h2>
                <h2 className="card-title text-cyan-300">
                  Rating : {product.rating} star{" "}
                </h2>
                <p className="text-sm font-medium text-gray-200">
                  {product.description}
                </p>
                <div className="card-actions">
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
