import { useLoaderData, useParams } from "react-router-dom";
import Navber from "../Components/Navber";
import ProductCart from "./ProductCart";

const BrandDetails = () => {
  const { id } = useParams();
  const loadedData = useLoaderData();
  const brand = loadedData.find((brands) => brands.id == id);
  const {
    firstSliderImage,
    secondSliderImage,
    thirdSliderImage,
    noData,
    products,
  } = brand;
  return (
    <div>
      <Navber></Navber>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img className="w-full h-[80vh]" src={firstSliderImage} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img className="w-full h-[80vh]" src={secondSliderImage} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img className="w-full h-[80vh]" src={thirdSliderImage} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-5xl text-red-600 font-bold text-center m-20 bg-white">
        {noData}
      </h1>
      <div className="grid gap-2 lg:grid-cols-2 w-8/12 m-auto mt-12 mb-12">
        {products.map((product) => (
          <ProductCart key={product.id} product={product}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
