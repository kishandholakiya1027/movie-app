import { Group } from "@/components/Group";
import GroupWrapper from "@/components/GroupWrapper";
import BackgroundComponent from "@/components/common/backgroundComponent";
import { setToken } from "@/utils/auth";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../../../config";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  console.log("🚀 ~ file: index.jsx:13 ~ SignIn ~ error:", error)
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const remember = localStorage.getItem("rememberMe")
    if(remember){
      setEmail(localStorage.getItem("email"))
      setPassword(localStorage.getItem("password"))
      setRememberMe(true)
    }
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let err = {...error}
    const  regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!email && !password){
      err = {...err,email:true,password:true}
    }
    else if(!email || !regex.test(email)){
    err = {...err,email:true}
    }else if(!password){
      err = {...err,password:true}
    }else {
      await axios.post(`${API_URL}/users/login`, {
        email, password
      }).then(res => {
        console.log("🚀 ~ file: index.jsx:41 ~ handleSubmit ~ res:", res)
        if (res?.status === 200) {
          setToken(res?.data?.token)
          router.push("/")
        }
  
      }).catch(err => {
        toast(err?.response?.data?.message||err?.message)
        console.log(err)
      })

    }
    setError(err)

  }

  return (
    <>
      {/* <div className="relative bg-darkslategray w-full h-[800px] overflow-hidden text-center text-sm text-white font-h1">
      <img
        className="absolute top-[689px] left-[0px] w-[1440px] h-[111px] object-cover"
        alt=""
        src="/vectors@2x.png"
      />
      <div className="absolute top-[220px] left-[570px] w-[300px] h-[360px]">
        <div className="absolute top-[306px] left-[0px] rounded-3xs bg-primary flex flex-row items-start justify-start py-[15px] px-[126px] text-base">
          <b className="relative leading-[24px]">Login</b>
        </div>
        <div className="absolute top-[258px] left-[83px] w-[134px] h-6">
          <div className="absolute top-[0px] left-[26px] leading-[24px]">
            Remember me
          </div>
          <div className="absolute top-[4px] left-[0px] rounded-[5px] bg-input-color w-[18px] h-[17px]" />
        </div>
        <div className="absolute top-[189px] left-[0px] w-[300px] h-[45px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-input-color" />
          <div className="absolute top-[24.44%] left-[5.33%] leading-[24px]">
            Password
          </div>
        </div>
        <div className="absolute top-[120px] left-[0px] w-[300px] h-[45px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-input-color" />
          <div className="absolute top-[24.44%] left-[5.33%] leading-[24px]">
            Email
          </div>
        </div>
        <div className="absolute bottom-[280px] left-[37px] text-45xl leading-[80px] font-semibold">
          Sign in
        </div>
      </div>
    </div> */}

      {/* <div className="bg-[#093545] flex flex-row justify-center w-full">
        <div className="bg-[#093545] w-full h-[800px] relative">
          <img
            className="absolute w-[1440px] h-[111px] top-[689px] left-0"
            alt="Vectors"
            src="/vectors@2x.png"
          />
          <div className="absolute w-[302px] h-[360px] top-[220px] left-[570px]  text-white">
            <div className="absolute top-[306px] left-[0px] rounded-3xs bg-primary flex flex-row items-start justify-start py-[15px] px-[126px] text-base">
              <b className="relative leading-[24px]">Login</b>
            </div>
            <div className="absolute top-[258px] left-[83px] w-[134px] h-6">
              <div className="absolute top-[0px] left-[26px] leading-[24px]">
                Remember me
              </div>
              <div className="absolute top-[4px] left-[0px] rounded-[5px] bg-input-color w-[18px] h-[17px]" />
            </div>
            <div className="absolute top-[189px] left-[0px] w-[300px] h-[45px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-input-color" />
              <div className="absolute top-[24.44%] font-body-small font-[number:var(--body-small-font-weight)] text-white text-[length:var(--body-small-font-size)] text-center tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)] left-[5.33%] leading-[24px]">
                Password
              </div>
            </div>
            <div className="absolute top-[120px] left-[0px] w-[300px] h-[45px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-input-color" />
              <div className="absolute top-[24.44%] left-[5.33%] font-body-small font-[number:var(--body-small-font-weight)] text-white text-[length:var(--body-small-font-size)] text-center tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)] leading-[24px]">
                Email
              </div>
            </div>
            <div className="absolute bottom-[280px] font-h1 font-[number:var(--h1-font-weight)] text-white text-[length:var(--h1-font-size)]  left-[37px] text-45xl leading-[80px] font-semibold">
              Sign in
            </div>
          </div>
        </div>
      </div> */}
      <BackgroundComponent>
        <form className="flex flex-col justify-end items-center">
          <h1 className="text-white text-center text-6xl font-semibold leading-[80px] self-center whitespace-nowrap mt-48 max-md:text-4xl max-md:mt-10">
            Sign in
          </h1>
          <div className="text-white text-center text-sm leading-6 whitespace-nowrap bg-cyan-900 self-center w-[300px] max-w-full justify-center mt-11 pl-5 pr-16 py-5 rounded-xl items-start max-md:mt-10 max-md:pr-5">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="input"
              aria-label="Email"
              aria-role="textbox"
              value={email}
              onChange={(e) => {
                setError({...error,email:false})
                setEmail(e?.target?.value)}}
            />
          </div>
          <p className="text-[#ff0000] text-xs w-[100%] flex justify-start ms-4">{error?.email ? "Please enter a valid email":""}</p>
          <div className="text-white text-center text-sm leading-6 whitespace-nowrap bg-cyan-900 self-center w-[300px] max-w-full justify-center mt-6 pl-5 pr-16 py-5 rounded-xl items-start max-md:pr-5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input"
              aria-label="Password"
              aria-role="textbox"
              value={password}
              onChange={(e) => {
                setError({...error,password:false})
                setPassword(e?.target?.value)}}
            />
          </div>
          <p className="text-[#ff0000] text-xs w-[100%] flex justify-start ms-4">{error?.password ? "Please enter a valid password":""}</p>

          <div className="self-center flex items-stretch gap-2.5 mt-7 px-5">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              className="bg-cyan-900 flex w-[18px] shrink-0 h-[17px] flex-col rounded-md"
              aria-label="Remember me checkbox"
              onClick={(e)=>{setRememberMe(!rememberMe)
              localStorage.setItem("rememberMe", e?.target?.checked)
              localStorage.setItem("email", email)
              localStorage.setItem("password", password)
              }
              }
            />
            <label
              htmlFor="remember-me"
              className="text-white text-center text-sm leading-6 self-center my-auto"
            >
              Remember me
            </label>
          </div>

          <button onClick={handleSubmit} className="button text-white cursor-pointer text-center text-base font-bold leading-6 whitespace-nowrap items-center bg-emerald-400 self-center w-[300px] max-w-full justify-center mt-7 px-16 py-4 rounded-xl max-md:px-5">
            Login
          </button>
        </form>
      </BackgroundComponent>
    </>
  );
};

export default SignIn;
