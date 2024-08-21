const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <div className="font-manrope text-2xl">Bookish Bonanza</div>
      <nav className="flex space-x-4">
        <a href="#vpress" className="hover:underline">
          VPress
        </a>
        <a href="#nonver" className="hover:underline">
          NONVER
        </a>
        <a href="#ember" className="hover:underline">
          Ember
        </a>
        <a href="#shop" className="hover:underline">
          Shop
        </a>
        <button className="bg-gray-800 text-white px-4 py-2 rounded">
          B-UI Login
        </button>
      </nav>
    </header>
  );
};
export default Header;
