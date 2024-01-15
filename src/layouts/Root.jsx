import { Outlet } from "react-router-dom";
import { Header } from "../components/Root/Header";
import { Footer } from "../components/Root/Footer";
export const Root = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}
