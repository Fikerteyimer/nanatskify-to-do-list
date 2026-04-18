import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" }
  ];

  const authItems = [
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup" }
  ];

  return (
    <nav className="w-full bg-blue-50 px-6 py-4 flex items-center justify-between relative">

      <h1 className="text-2xl font-bold text-gray-800">
        Taskify
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2 text-gray-700 font-medium">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-black font-bold" : "hover:text-black"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Desktop Auth */}
      <div className="hidden md:flex gap-4 items-center">
        {authItems.map((item, index) =>
          item.name === "Sign Up" ? (
            <NavLink to={item.path} key={index}>
              <button className="bg-black text-white px-4 py-1 rounded-lg hover:bg-gray-800">
                {item.name}
              </button>
            </NavLink>
          ) : (
            <NavLink to={item.path} key={index}>
              <button className="hover:text-black text-gray-700">
                {item.name}
              </button>
            </NavLink>
          )
        )}
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-blue-50 flex flex-col items-center gap-4 py-4 shadow-md md:hidden">

          {menuItems.map((item, index) => (
            <NavLink key={index} to={item.path}>
              <p className="cursor-pointer hover:text-black">
                {item.name}
              </p>
            </NavLink>
          ))}

          {authItems.map((item, index) =>
            item.name === "Sign Up" ? (
              <NavLink to={item.path} key={index}>
                <button className="bg-black text-white px-4 py-1 rounded-lg">
                  {item.name}
                </button>
              </NavLink>
            ) : (
              <NavLink to={item.path} key={index}>
                <button className="hover:text-black">
                  {item.name}
                </button>
              </NavLink>
            )
          )}

        </div>
      )}
    </nav>
  );
}

export default Navbar;