import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Travel Explorer</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
