export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Travel Explorer</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about-us" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#contact-form" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
