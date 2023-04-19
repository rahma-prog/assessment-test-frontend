import React, { useState } from "react";
import login from "../assets/images/login.jpg";
import { loginAction } from "../store/storeActions";
import { useStore } from "../store/storeContext";

export default function LoginPage() {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {dispatch} = useStore("");
  
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(loginAction({email, password}))
  } 
  
  return (
    <div className="w-full h-screen flex ">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[1000px] bg-slate-50">
        <div className="w-full h-[550px] ">
          <img className="w-full h-full" src={login} alt="/"></img>
        </div>
        <div className="p-4 flex-col jusitfy-around ml-12 mr-14 pt-20 pb-20  ">
          <form>
            <h1 className="text-2xl font-bold  ">
              Welcome to Assessment Test,
            </h1>
            <h1 className="text-2xl font-bold  mb-8  ">Sign in to continue </h1>
            <h2 className="text-1xl font-bold  mb-6">
              Don't have an account ?
              <a href="https://example.com" className="underline">
                Create an account
              </a>
            </h2>
            <div>
              <label className="font-medium mb-2 flex " >Email </label>
              <input
                className="border rounded-md  p-1 w-full shadow  shadow-gray-300 "
                type="text"
                placeholder="jane@gmail.com"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="font-medium mb-2 mt-2 flex p">Password</label>
              <input
                className="rounded-md border p-1  w-full shadow  shadow-gray-300"
                type="password"
                placeholder="**********"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="rounded-md py-1 my-4 text-white bg-green-600 hover:bg-green-500 h-10 w-24" onClick={handleSignIn}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
