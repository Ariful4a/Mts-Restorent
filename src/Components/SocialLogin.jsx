import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photo: result.user?.photoURL,
      };
      axiosPublic
        .post("/users", userInfo)
        .then((res) => {
          console.log(res.data);
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  return (
    <div className="w-[500px]">
      <div className="divider"></div>
      <div className="w-full">
        <button
          className="btn bg-green-500 text-red-500 w-full"
          onClick={handleGoogleSignIn}
        >
          <FaGoogle></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
