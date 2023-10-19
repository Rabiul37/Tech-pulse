import { useLoaderData } from "react-router-dom";
import Navber from "../Components/Navber";
import Swal from "sweetalert2";

const Update = () => {
  const Products = useLoaderData();
  const { ProductImage, ProductName, BrandName, ProductType, Price, Rating } =
    Products;

  const handleUpdateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const ProductImage = form.ProductImage.value;
    const ProductName = form.ProductName.value;
    const BrandName = form.BrandName.value;
    const ProductType = form.ProductType.value;
    const Price = form.Price.value;
    const Rating = form.Rating.value;

    const updatedproduct = {
      ProductImage,
      ProductName,
      BrandName,
      ProductType,
      Price,
      Rating,
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
            <h1 className="text-5xl font-bold text-gray-200">
              Add your product !
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
                    defaultValue={ProductImage}
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
                    defaultValue={ProductName}
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
                    defaultValue={BrandName}
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
                    defaultValue={ProductType}
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
                    defaultValue={Price}
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
                    defaultValue={Rating}
                    placeholder="Rating"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-gray-700 text-gray-200">
                  Add product
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
