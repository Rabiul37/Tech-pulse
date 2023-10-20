import Swal from "sweetalert2";
import Navber from "../Components/Navber";

const AddProducts = () => {
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const ProductImage = form.ProductImage.value;
    const ProductName = form.ProductName.value;
    const BrandName = form.BrandName.value;
    const ProductType = form.ProductType.value;
    const Price = form.Price.value;
    const Description = form.Description.value;
    const Rating = form.Rating.value;

    const product = {
      ProductImage,
      ProductName,
      BrandName,
      ProductType,
      Price,
      Description,
      Rating,
    };
    console.log(product);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("well Done!", "You product add successfully!", "success");
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
              Add your product !
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleForm} className="card-body">
              <div className="lg:flex items-center gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Image</span>
                  </label>
                  <input
                    type="text"
                    name="ProductImage"
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
                    placeholder="Price"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    name="Description"
                    placeholder="short description"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control w-1/3 m-auto">
                <label className="label text-center">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="Rating"
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
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

export default AddProducts;
