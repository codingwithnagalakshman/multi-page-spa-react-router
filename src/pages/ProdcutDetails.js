import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();

  return <h1>ProductDetails: {params.productId} </h1>;
}

export default ProductDetails;
