import { Formik } from "formik";
import React, { useEffect } from "react";
import { initTE, Input, Ripple } from "tw-elements";
import authService from "../services/authService";
import { loginAction } from "../store/storeActions";
import { useStore } from "../store/storeContext";
import * as yup from "yup";
import { VALID_PASSWORD_REGEX } from "../constants/validation";

export default function LoginPage() {
  const { dispatch } = useStore("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // email, pass
  };

  useEffect(() => {
    initTE({ Input, Ripple });
  }, []);

  return (
    <div className="flex items-center justify-center">
      <section className="h-screen max-w-screen">
        <div className="h-full">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>

            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={yup.object({
                  email: yup.string().required().email("This is not an email"),
                  password: yup
                    .string()
                    .required()
                    .matches(VALID_PASSWORD_REGEX, "the password should ..."),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  authService.login(values).then((user) => {
                    dispatch(loginAction(user));
                  });
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        onChange={handleChange}
                        name="email"
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Email address
                      </label>
                    </div>
                    <p className="text-red-500">{errors.email}</p>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput22"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="exampleFormControlInput22"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Password
                      </label>
                    </div>

                    <p className="text-red-500">{errors.password}</p>

                    <div className="text-center lg:text-left">
                      <button
                        type="submit"
                        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Login
                      </button>

                      <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                        Don't have an account?
                        <a
                          href="#!"
                          className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                        >
                          Register
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// <div className="w-full h-screen flex ">
//   <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[1000px] bg-slate-50">
//     <div className="w-full h-[550px] ">
//       <img className="w-full h-full" src={login} alt="/"></img>
//     </div>
//     <div className="p-4 flex-col jusitfy-around ml-12 mr-14 pt-20 pb-20  ">
//       <form>
//         <h1 className="text-2xl font-bold  ">
//           Welcome to Assessment Test,
//         </h1>
//         <h1 className="text-2xl font-bold  mb-8  ">Sign in to continue </h1>
//         <h2 className="text-1xl font-bold  mb-6">
//           Don't have an account ?
//           <a href="https://example.com" className="underline">
//             Create an account
//           </a>
//         </h2>
//         <div>
//           <label className="font-medium mb-2 flex ">Email </label>
//           <input
//             className="border rounded-md  p-1 w-full shadow  shadow-gray-300 "
//             type="text"
//             placeholder="jane@gmail.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label className="font-medium mb-2 mt-2 flex p">Password</label>
//           <input
//             className="rounded-md border p-1  w-full shadow  shadow-gray-300"
//             type="password"
//             placeholder="**********"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button
//           className="rounded-md py-1 my-4 text-white bg-green-600 hover:bg-green-500 h-10 w-24"
//           onClick={handleSignIn}
//         >
//           Sign In
//         </button>
//       </form>
//     </div>
//   </div>
// </div>
