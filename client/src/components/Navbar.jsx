import { Link } from "react-router-dom";
import { brandName } from "../../config/BRAND";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".nav-items", {
      y: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
    });
  }, []);

  useGSAP(() => {
    if (open) {
      gsap.fromTo(
        ".sidebar",
        { x: "100%" },
        { x: "0%", duration: 0.4, ease: "power2.out" }
      );
    }
  }, [open]);

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="w-full px-6 h-14 flex items-center justify-between fixed top-0 bg-white/10 backdrop-blur-lg z-[999]">
        <h2 className="logo-font text-2xl nav-items">{brandName}</h2>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-7 items-center">
          <Link className="nav-items" to="/">Home</Link>
          <Link className="nav-items" to="/explore">Explore</Link>
          <Link className="nav-items" to="/login">Login</Link>
          <Link
            className="nav-items bg-black text-white px-3 py-1 rounded-sm"
            to="/signup"
          >
            Sign up
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <i className="ri-menu-3-fill text-2xl"></i>
        </button>
      </nav>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="fixed inset-0 z-[1000] bg-black/40">
          <div className="sidebar fixed right-0 top-0 h-full w-[75%] bg-white p-6 flex flex-col gap-6">
            <button
              className="self-end"
              onClick={() => setOpen(false)}
            >
              <i className="ri-close-fill text-2xl"></i>
            </button>

            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/explore">Explore</Link>
            <Link onClick={() => setOpen(false)} to="/login">Login</Link>
            <Link
              onClick={() => setOpen(false)}
              className="btn text-white px-4 py-2 rounded-sm w-fit"
              to="/signup"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
