export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2">
            <h4 className="text-xl font-bold mb-2">Travel Agency</h4>
            <p className="text-gray-400">
              Your gateway to the best destinations around the world.
            </p>
          </div>
          <div className="w-full sm:w-1/2 text-right">
            <h4 className="text-xl font-bold mb-2">Follow Us</h4>
            <div className="space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
