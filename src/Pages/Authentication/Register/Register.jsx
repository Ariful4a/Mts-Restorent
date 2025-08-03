import { Link } from "react-router";
import img from "../../../assets/login/Rectangle 75.png"; // Replace with your own image
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Components/Providers/AuthProviders";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const registerUser = result.user;
      console.log(registerUser);
      Swal.fire({
        title: "Register successfully",
        icon: "success",
        draggable: true,
      });
    });
  };

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="shadow-2xl shadow-black rounded-md flex w-[900px] max-w-full overflow-hidden">
          {/* Left Form Side */}
          <div className="w-1/2 p-10">
            <h2 className="text-2xl font-bold mb-6 text-black">Sign Up</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="Type here"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
                {errors.name && <span>Name is required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="Type here"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
                {errors.email && <span>Email is required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">
                    Password must be at least 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must include uppercase, lowercase, number, and
                    special character
                  </p>
                )}
              </div>

              <input
                type="submit"
                value="Sign Up"
                className="bg-amber-600 hover:bg-amber-700 text-white w-full py-2 rounded cursor-pointer"
              />
            </form>

            <p className="text-sm text-center mt-4 text-gray-600">
              Already registered?{" "}
              <Link to="/login" className="text-amber-600 font-medium">
                Go to log in
              </Link>
            </p>

            <div className="text-center mt-4 text-gray-600 text-sm">
              Or sign up with
            </div>

            <div className="flex justify-center gap-4 mt-3">
              <button className="border rounded-full p-2 hover:bg-gray-100">
                <i className="fab fa-google"></i>
              </button>
              <button className="border rounded-full p-2 hover:bg-gray-100">
                <i className="fab fa-github"></i>
              </button>
              <button className="border rounded-full p-2 hover:bg-gray-100">
                <i className="fab fa-facebook-f"></i>
              </button>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="w-1/2 p-6 flex items-center justify-center">
            <img
              src={img}
              alt="Register illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
