import { Link } from "react-router-dom";

export default function SignUpForm() {
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80" >Sign Up</button>
          </form>
          <div className="flex gap-2 mt-4">
              <p>Have an account?</p>
              <Link to={"/signin"}>
              <span className="text-blue-700">Sign In</span>
              </Link>
              
          </div>
    </div>
  );
}
