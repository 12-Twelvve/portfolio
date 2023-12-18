import Navbar from "./Navbar";

const NavLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="relative text-white  font-arsenal top-[0px]">{children}</main>
    </>
  );
};

export default NavLayout;