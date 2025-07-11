import Banner from "../Banner";
import { Outlet } from "react-router";

function DefaultPage() {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  )
}

export default DefaultPage;