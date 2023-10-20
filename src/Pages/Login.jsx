import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Components/Navber";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/Ai";
import { FcGoogle } from "react-icons/Fc";
const Login = () => {
  const { googleLogin, login } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGooleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.message);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLoginForm = (event) => {
    setLoginError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
        Swal.fire("Good job!", "You successfully logedin!", "success");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError("This E-mail or Password is invalid");
      });
  };
  return (
    <div>
      <Navber></Navber>
      <div className="hero min-h-screen bg-gray-700">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl text-gray-200 font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="text-center mt-5 text-red-600">
              {loginError && <span>{loginError}</span>}
            </div>
            <form onSubmit={handleLoginForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered relative"
                  required
                />
                <span
                  className="text-xl absolute right-10 top-[192px] "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiFillEye></AiFillEye>
                  ) : (
                    <AiFillEyeInvisible></AiFillEyeInvisible>
                  )}
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gray-700 text-gray-200">Login</button>
              </div>
              <h1 className="texxt-sm font-semibold">
                Do not have account ?{" "}
                <Link to="/Register" className="underline">
                  Register
                </Link>{" "}
              </h1>
            </form>
            <span className="text-sm font-semibold text-center text-gray-700">
              Login with
            </span>
            <button
              onClick={handleGooleLogin}
              className="btn btn-outline mb-3 mx-2"
            >
              <span className="text-xl">
                <FcGoogle></FcGoogle>
              </span>
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
