import { useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
  const { id } = useParams();
  console.log(id);
  const loadedData = useLoaderData();
  const brand = loadedData.find((brands) => brands.id == id);
  console.log(brand);
  return (
    <div>
      <h1 className="text-5xl ">{id}</h1>
    </div>
  );
};

export default BrandDetails;
