import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] text-center px-5">
      <h1 className="text-6xl md:text-9xl font-bold text-[#974fd0]">404</h1>
      <p className="text-2xl md:text-4xl mt-4 text-red-600">
        Oops! page not found
      </p>
      <Link
        to="/"
        className="mt-8 bg-[#974fd0] text-white px-6 py-3 rounded-xl text-xl"
      >
        Go Home
      </Link>
    </main>
  );
};

export default NotFound;
