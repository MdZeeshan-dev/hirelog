function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div className="flex items-center gap-12">

          <h1 className="text-2xl font-bold text-blue-600">
            HireLog
          </h1>

          <ul className="flex gap-8 text-gray-600 font-medium">
            <li className="text-blue-600 border-b-2 border-blue-600 pb-1">
              Dashboard
            </li>

            <li>Add Job</li>

            <li>Profile</li>
          </ul>

        </div>

        <div className="flex items-center gap-3">
          <span className="font-medium">
            Hello, Zeeshan!
          </span>

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;