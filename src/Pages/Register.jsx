import { Link } from "react-router-dom";
import Navber from "../Components/Navber";

const Register = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User E-mail</span>
                </label>
                <input
                  type="text"
                  name="imgURL"
                  placeholder="Your image Link"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <label>
                <input type="checkbox" name="checkbox" id="" />
                <span className="text-sm font-semibold ml-2">
                  Agree with our term and condition
                </span>
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <h1 className="texxt-sm font-semibold">
                Do not have account ?{" "}
                <Link to="/Login" className="underline">
                  Login
                </Link>{" "}
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
