import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayOut() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayOut;
