const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between">
      
      {/* Brand (Top Left) */}
      <div
        className="
          font-black
          tracking-tight
          text-[#ff3b3b]
          text-2xl
          select-none
        "
      >
        HoryX
      </div>

      {/* Nav Links (Right Side) */}
<ul className="flex gap-8 text-sm font-medium text-[#ff3b3b]">
  <li>
    <a href="#home" className="font-bold hover:opacity-80 transition">
      Home
    </a>
  </li>
  <li>
    <a href="#features" className="font-bold hover:opacity-80 transition">
      Features
    </a>
  </li>
  <li>
    <a href="#about" className="font-bold hover:opacity-80 transition">
      About
    </a>
  </li>
  <li>
    <a href="#contact" className="font-bold hover:opacity-80 transition">
      Contact
    </a>
  </li>
</ul>


    </nav>
  );
};

export default Navbar;
