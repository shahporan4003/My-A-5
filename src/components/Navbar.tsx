import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="container mx-auto flex h-14 flex-nowrap items-center justify-between bg-white px-4">

        {/* Left: Logo */}
        <div className="shrink-0">
          <img
            className="h-6 w-auto"
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Center: Menu */}
        <div className="shrink-0">
          <ul className="flex flex-nowrap items-center gap-6 whitespace-nowrap text-slate-600">
            <li className="cursor-pointer whitespace-nowrap text-pink-600">
              Home
            </li>

            <li className="cursor-pointer whitespace-nowrap">
              Technologies
            </li>

            <li className="cursor-pointer whitespace-nowrap">
              Projects
            </li>

            <li className="cursor-pointer whitespace-nowrap">
              About
            </li>

            <li className="cursor-pointer whitespace-nowrap">
              Contact
            </li>
          </ul>
        </div>

        {/* Right: Buttons */}
        <div className="flex shrink-0 flex-nowrap items-center gap-4">
          <button className="cursor-pointer whitespace-nowrap text-base text-gray-700">
            Sign In
          </button>

          <button className="shrink-0 cursor-pointer whitespace-nowrap rounded-3xl bg-pink-600 px-4 py-2 text-base text-white shadow-md">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;