import Button from "../Components/Button";

function SignUp() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form className="space-y-5">

      
          <div>
            <label className="block text-sm text-gray-600 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>


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
              placeholder="Create password"
              className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <Button text="Sign Up" />

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-medium">
              Login
            </a>
          </p>

        </form>
      </div>
    </section>
  );
}

export default SignUp;