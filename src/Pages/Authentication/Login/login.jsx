import { useEffect, useRef, useState } from "react";
import img1 from "../../../assets/login/authentication2 1.png";
import img2 from "../../../assets/login/Rectangle 75.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
const captchaRef = useRef(null);
const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };


  const handleValidate = () =>{
    const user_captcha_value = captchaRef.current.value;
    if(validateCaptcha(user_captcha_value)){
        setDisabled(false);
    }
    else{
        setDisabled(true);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${img2})` }}
    >
      <div
        className="bg-white shadow-lg rounded-lg flex w-[900px] max-w-full overflow-hidden"
        style={{ backgroundImage: `url(${img2})` }}
      >
        {/* Left Side Illustration */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <img
            src={img1}
            alt="Login illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Side Login Form */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white text-black"
              />
            </div>

            <div>
              <label className="label">
                <LoadCanvasTemplate />
              </label>
            </div>

            <div>
              <input
                type="text"
                name="captcha"
                ref={captchaRef}
                placeholder="Type Captcha"
                className="w-full border border-gray-300 bg-white text-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button onClick={handleValidate} className="btn btn-outline btn-xs w-full mt-4 bg-green-500">Validate</button>
            </div>

            <input
            disabled={disabled}
              className="btn bg-orange-600 w-30"
              type="submit"
              value={"Login"}
            />
          </form>

          <div className="text-center mt-4">
            <p className="text-sm">
              New here?{" "}
              <span className="text-orange-500 font-semibold cursor-pointer">
                Create a New Account
              </span>
            </p>

            <p className="text-sm mt-4">Or sign in with</p>

            <div className="flex justify-center gap-4 mt-2">
              <button className="border rounded-full p-2">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="border rounded-full p-2">
                <i className="fab fa-google"></i>
              </button>
              <button className="border rounded-full p-2">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
