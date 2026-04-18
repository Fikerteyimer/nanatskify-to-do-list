import Button from "../Components/Button";

function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <Button text="Login" />
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 font-medium">
              Sign up
            </a>
          </p>

        </form>
      </div>
    </section>
  );
}

export default Login;