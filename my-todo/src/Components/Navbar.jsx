import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuItems = ["Home", "Features"];
  const authItems = ["Login", "Sign Up"];

  return (
    <nav className="w-full bg-blue-50 px-6 py-4 flex items-center justify-between relative">

      <h1 className="text-2xl font-bold text-gray-800">
        Taskify
      </h1>

      <ul className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2 text-gray-700 font-medium">
        {menuItems.map((item, index) => (
          <li key={index} className="hover:text-black cursor-pointer">
            {item}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex gap-4 items-center">
        {authItems.map((item, index) =>
          item === "Sign Up" ? (
            <button
              key={index}
              className="bg-black text-white px-4 py-1 rounded-lg hover:bg-gray-800"
            >
              {item}
            </button>
          ) : (
            <button key={index} className="hover:text-black text-gray-700">
              {item}
            </button>
          )
        )}
      </div>

  
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-blue-50 flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
          
          {menuItems.map((item, index) => (
            <p key={index} className="cursor-pointer hover:text-black">
              {item}
            </p>
          ))}

          {authItems.map((item, index) =>
            item === "Sign Up" ? (
              <button
                key={index}
                className="bg-black text-white px-4 py-1 rounded-lg"
              >
                {item}
              </button>
            ) : (
              <button key={index} className="hover:text-black">
                {item}
              </button>
            )
          )}

        </div>
      )}

    </nav>
  );
}

export default Navbar;