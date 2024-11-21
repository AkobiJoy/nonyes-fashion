"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const router = useRouter()
  const [isPassword, setIsPassword] = useState(false);
  const [loading, setLoading] = useState(false); //loader state 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [resErr, setResErr] = useState(false)

  const toggleIsPassword = () => {
    setIsPassword(!isPassword);
  };

  const submitForm = async (e) => {
    e.preventDefault();
  
    // Reset errors
    setEmailErr("");
    setPasswordErr("");
  
    // Validation
    let validForm = true;
  
    if (!email) {
      setEmailErr("Please fill an email address!");
      validForm = false;
    } else if (!password) {
      setPasswordErr("Please fill password input!");
      validForm = false;
    }
  
    if (validForm) {
      setLoading(true);
      // Handle form submission (e.g., API call)
      try {
        const res = await axios.post("http://localhost:3000/api/login",{
          email,
          password
        });
        console.log(res)
        if(res.status === 401){
         setResErr(true)           
        }
        else if (res.status === 200){
          router.push("/write")
        }
        console.log(res)
      } 
      catch (error) {
        console.log(error.message)
        setResErr(true)
        
      }
      setLoading(false)
    }
  };


  
  return (
    <div className="bg flex items-center justify-center py-[10rem] px-[10rem] h-[100vh]">
      <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg shadow-sky-200 max-w-md">
        <div className="flex flex-col gap-6">
          <h1 className="text-center bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent text-wrap text-lg font-bold">
            HI THERE! <span className="italic">SIGN IN TO CONTINUE</span>
          </h1>

          <form action="" onSubmit={submitForm} className="flex flex-col gap-5">
          {
             // Display error message if email or password is wrong 
              resErr && (
                <div role="alert" className="alert alert-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Warning:  Invalid Cridentials</span>
                </div>
              )
            }

            <div>
              <label htmlFor="Email" className="text-gray-300 font-semibold">
                Email
              </label>
              <input onChange={(e)=>{
                setEmail(e.target.value)
                setEmailErr("")
              }}
                value={email}
                type="email"
                placeholder={emailErr||"Email"}
                className={`w-full px-3 py-3 outline-sky-100 border-3 rounded border-white placeholder-gray-400 ${
                  emailErr
                    ? "placeholder-red-600 italic border-2 border-red-500"
                    : ""
                }`} />
            </div>

            <div className="relative">
              <label htmlFor="Password" className="text-gray-300 font-semibold">
                Password
              </label>
              <input onChange={(e)=>{
                setPassword(e.target.value)
                setPasswordErr("")
              }}
              value={password}
              type={isPassword ? "text" : "password"}
                placeholder={passwordErr || "Password"}
                className={`w-full px-3 py-3 outline-sky-100 border-3 rounded border-white placeholder-gray-400 ${
                  passwordErr ? "placeholder-red-600 italic border-2 border-red-500" : ""
                }`} />
              <div
                onClick={toggleIsPassword}
                className="absolute top-3/4 right-3 transform -translate-y-1/2 flex items-center cursor-pointer"
              >
                {isPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </div>
            </div>
            <button className="glass rounded-full py-2 px-6 shadow-md bg-sky-700 bg-opacity-50 hover:bg-opacity-70 hover:translate-y-px duration-300 text-white font-semibold w-max block m-auto">
            {loading ? <div className="loader px-1 py-2 text-xs bg-sky-400"></div> : "Login"}
            </button>
          </form>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-sky-300 text-base">
             {" Don't"} have an account?
            </span>
            <button className="text-white font-bold hover:text-black text-lg">
              Register Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;





