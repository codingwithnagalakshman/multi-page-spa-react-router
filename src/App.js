import {
  createBrowserRouter,
  RouterProvider
  // createRoutesFromElements,
  // Route
} from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayOut from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProdcutDetails";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <ProductDetails /> }
    ]
  }
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
