import React, { useState, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import img from "../../Images/login.png";
import logo from "../../Images/FamilyCare.png";
import { FaUser, FaLock } from "react-icons/fa";
import LoginValidation from "./LoginValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/alertsSlice";
import AOS from "aos";
import "aos/dist/aos.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = values;
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const err = LoginValidation(values);
    setErrors(err);

    if (!Object.values(err).some((error) => error)) {
      try {
        dispatch(showLoading());
        const body = { email, password };

        const response = await axios.post(
          "http://localhost:5000/api/user/login",
          body
        );
        dispatch(hideLoading());
        console.log(response.data);

        if (response.data.success) {
          const { userRole, name, token } = response.data;
          localStorage.setItem("userName", name);

          if (userRole === "patient") {
            navigate("/patient/patientDashboard");
          } else if (userRole === "doctor") {
            navigate("/doctor/doctorDashboard");
          }

          setValues({
            email: "",
            password: "",
          });
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error('An error occurred during login.');
        }
      }
    }
  };

  return (
    <div className="bg-[#d7d7d7] h-screen grid grid-cols-2">
      <div className="leftSide">
        <div>
          <NavLink to="/">
            <img src={logo} alt="l"  className="mt-3 ml-4 w-20 rounded-full" />
          </NavLink>
        </div>
        <div data-aos="slide-up">
          <img
            src={img}
            alt="img"
            className="p-12 w-9/12 h-fit max-w-full mx-auto"
          />
        </div>
      </div>
      <div className="rightSide flex justify-center items-center bg-[#d7d7d7] h-screen">
        <div className="bg-yellow-600 p-8 w-[500px] rounded-lg relative">
          <div className="text-orange flex items-center justify-center mb-10 pb-10 font-bold w-full text-5xl">
            Welcome to FamilyCare
          </div>
          <form action="" onSubmit={handleSubmit}>
            <ToastContainer />
            <div className="mb-10 relative">
              <div className="flex items-center">
                <FaUser className="text-orange mr-2" />
                <input
                  className="w-full px-3 py-3 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleInput}
                />
              </div>
              {errors.email && (
                <span className="text-xs text-red-200">{errors.email}</span>
              )}
            </div>
            <div className="mb-1 relative">
              <div className="flex items-center">
                <FaLock className="text-orange mr-2" />
                <input
                  className="w-full px-3 py-3 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleInput}
                />
              </div>
              {errors.password && (
                <span className="text-xs text-red-200">{errors.password}</span>
              )}
            </div>
            <div className="flex justify-end mt-2 mb-12">
              <button className="text-orange hover:text-black">
                Forgot Password
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange text-white font-bold rounded-lg hover:bg-gray hover:text-black bg-blue-950"
            >
              Login
            </button>
            <p className="text-sm text-center mt-8">
              Don't have an account yet?
            </p>
            <div className="w-full text-center py-3 text-orange hover:text-black hover:underline">
              <Link to="/register">Create Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
