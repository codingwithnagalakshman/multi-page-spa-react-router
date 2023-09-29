import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>My Home Page</h1>
      Go to <Link to="/products">the list of products list</Link>
      <p>
        <button onClick={navigateHandler}>navigate</button>
      </p>
    </>
  );
}

export default HomePage;