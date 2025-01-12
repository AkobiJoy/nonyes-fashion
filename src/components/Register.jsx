"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
// import axios from "axios";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Register = () => {
  const router = useRouter()
  const [isPassword, setIsPassword] = useState(false);
  const [loading, setLoading] = useState(false); //loader state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [genderErr, setGenderErr] = useState("");
  const [contactErr, setContactErr] = useState("");
  const [countryErr, setCountryErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [resErr, setResErr] = useState(false)

  const toggleIsPassword = () => {
    setIsPassword(!isPassword);
  };

  // Form submission handler
  const submitForm = async (e) => {
    e.preventDefault();

    // Reset errors
    setNameErr("");
    setEmailErr("");
    setGenderErr("");
    setContactErr("");
    setCountryErr("");
    setPasswordErr("");

    // Validation
    let validForm = true;

    if (!name) {
      setNameErr("Please fill name input!");
      validForm = false;
    } else if (!email) {
      setEmailErr("Please fill an email address!");
      validForm = false;
    } else if (!gender) {
      setGenderErr("Please select gender!");
      validForm = false;
    } else if (!contact) {
      setContactErr("Please fill contact input!");
      validForm = false;
    } else if (!country) {
      setCountryErr("Please select country!");
      validForm = false;
    } else if (!password) {
      setPasswordErr("Please fill password input!");
      validForm = false;
    }

    const LiveServerUrl  = process.env.NEXT_PUBLIC_LIVE_ENDPONT
    const LocalServerUrl  = process.env.NEXT_PUBLIC_LOCAL_ENDPONT
    const ApiUrl = process.env.NODE_ENV === "production"? LiveServerUrl : LocalServerUrl
    if (validForm) {
      setLoading(true);
      // Handle form submission (e.g., API call)
      try {
        const res = await axios.post(`/api/register`,{
          name,
          email,
          gender,
          contact,
          country,
          password,
       });
       console.log(res)
       if (res.status === 409){
        setResErr(true)
       }
       else if (res.status===201){
        router.replace('/login')
       }
        
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    }
  };

  return (
    <div className="bbg py-[2rem] px-[1rem] h-[100vh] flex justify-center">
      <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg shadow-sky-200 max-w-md w-[45rem] h-[47.5rem]">
        <div className="flex flex-col gap-4">
          <h1 className="text-center bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent text-lg font-bold">
            HI THERE! <span className="italic">SIGN UP TO BEGIN</span>
          </h1>

          <form action="" onSubmit={submitForm} className="flex flex-col gap-4">
          {
             // Display error message if email already exists 
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
                  <span>Warning:  Email Already exists</span>
                </div>
              )
            }
            <div>
              <label htmlFor="Name" className="text-gray-300 font-semibold">
                Name
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                  setNameErr("");
                }}
                value={name}
                type="text"
                placeholder={nameErr || "Name"}
                className={`w-full px-3 py-3 outline-sky-100 border-3 rounded border-white placeholder-gray-400 ${
                  nameErr
                    ? "placeholder-red-600 italic border-2 border-red-500"
                    : ""
                }`}
              />
            </div>

            <div>
              <label htmlFor="Email" className="text-gray-300 font-semibold">
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailErr("");
                }}
                value={email}
                type="email"
                placeholder={emailErr || "Email"}
                className={`w-full px-3 py-3 outline-sky-100 border-3 rounded border-white placeholder-gray-400 ${
                  emailErr
                    ? "placeholder-red-600 italic border-2 border-red-500"
                    : ""
                }`}
              />
            </div>

            <div>
              <label htmlFor="Gender" className="text-gray-300 font-semibold">
                Gender
              </label>
              <select
                onChange={(e) => {
                  setGender(e.target.value);
                  setGenderErr("");
                }}
                value={gender}
                id="Gender"
                className={`w-full px-3 py-3 outline-sky-100 border-3 rounded border-white text-gray-700 ${
                  genderErr ? "text-red-600 italic border-2 border-red-500" : ""
                }`}
              >
                <option value="" disabled>
                  {genderErr || "Select Gender"}
                </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Others</option>
              </select>
            </div>

            <div>
              <label htmlFor="Contact" className="text-gray-300 font-semibold">
                Contact
              </label>
              <input
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Removes any non-numeric characters
                  setContact(value);
                }}
                value={contact}
                type="tel"
                placeholder={contactErr || "Contact"}
                inputMode="numeric" // Shows numeric keyboard on mobile devices
                className={`w-full px-3 py-3 outline-sky-100 border-3 rounded border-white placeholder-gray-400 ${
                  contactErr
                    ? "placeholder-red-600 italic border-2 border-red-500"
                    : ""
                }`}
              />
            </div>

            <div>
              <label htmlFor="Country" className="text-gray-300 font-semibold">
                Country
              </label>
              <select
                onChange={(e) => {
                  setCountry(e.target.value);
                  setCountryErr("");
                }}
                value={country}
                id="Country"
                className={`w-full px-3 py-3 outline-sky-100 border-3 rounded border-white text-gray-700 ${
                  countryErr
                    ? "text-red-600 italic border-2 border-red-500"
                    : ""
                }`}
              >
                <option value="" disabled>
                  {countryErr || "Select Country"}
                </option>
                <option value="US">United States</option>
                <option value="PK">Pakistan</option>
                <option value="UK">London</option>
                <option value="GH">Ghana</option>
                <option value="AS">Asia</option>
                <option value="NG">Nigeria</option>
              </select>
            </div>


            <div className="relative">
              <label htmlFor="Password" className="text-gray-300 font-semibold">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={isPassword ? "text" : "password"}
                placeholder="Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&_.]{8,}$"
                title="Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character."
                className={`w-full px-3 py-3 outline-sky-100 border-3 rounded border-white placeholder-gray-400 ${
                  passwordErr
                    ? "placeholder-red-600 italic border-2 border-red-500"
                    : ""
                }`}
              />
              <div
                onClick={toggleIsPassword}
                className="absolute top-3/4 right-3 transform -translate-y-1/2 flex items-center cursor-pointer"
              >
                {isPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </div>
            </div>

            <button className="glass rounded-full py-2 px-3 shadow-md bg-sky-700 bg-opacity-50 hover:bg-opacity-70 hover:translate-y-px duration-300 text-white font-semibold w-max block m-auto">
              {loading ? (
                <div className="loader px-1 py-2 text-xs bg-sky-500"></div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-sky-300 text-base">
              Have an account already?
            </span>
            <button className="text-white font-bold hover:text-black text-lg">
              Login Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
