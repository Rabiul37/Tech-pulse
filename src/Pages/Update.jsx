import { useLoaderData } from "react-router-dom";
import Navber from "../Components/Navber";
import Swal from "sweetalert2";

const Update = () => {
  const Products = useLoaderData();
  console.log(Products);
  const { img, name, brandName, type, price, rating } = Products;

  const handleUpdateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const img = form.ProductImage.value;
    const name = form.ProductName.value;
    const brandName = form.BrandName.value;
    const type = form.ProductType.value;
    const price = form.Price.value;
    const rating = form.Rating.value;

    const updatedproduct = {
      img,
      name,
      brandName,
      type,
      price,
      rating,
    };

    fetch(`http://localhost:5000/products/${Products._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedproduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("well Done!", "You product updeted!", "success");
        }
      });
  };

  return (
    <div>
      <Navber></Navber>
      <div className="hero min-h-screen bg-gray-700">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-xl font-bold text-gray-200 lg:text-5xl">
              Update your product !
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateForm} className="card-body">
              <div className="lg:flex items-center gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Image</span>
                  </label>
                  <input
                    type="text"
                    name="ProductImage"
                    defaultValue={img}
                    placeholder="Enter Product Image link"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    name="ProductName"
                    defaultValue={name}
                    placeholder="Product Name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="lg:flex items-center gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Brand Name</span>
                  </label>
                  <input
                    type="text"
                    name="BrandName"
                    defaultValue={brandName}
                    placeholder="Brand Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Type</span>
                  </label>
                  <input
                    type="text"
                    name="ProductType"
                    defaultValue={type}
                    placeholder="phone, computer, headphone, etc"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="lg:flex items-center gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    name="Price"
                    defaultValue={price}
                    placeholder="Price"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control  m-auto">
                  <label className="label text-center">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    name="Rating"
                    defaultValue={rating}
                    placeholder="Rating"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-gray-700 text-gray-200">
                  Update product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
