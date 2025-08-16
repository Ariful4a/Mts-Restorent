import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result =>{
        console.log(result.user);
        navigate('/');
    })
  
  };

  return (
    <div className="w-[500px]">
        <div className="divider"></div>
      <div className="w-full">
        <button className="btn bg-green-500 text-red-500 w-full" onClick={handleGoogleSignIn}>
          <FaGoogle></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
