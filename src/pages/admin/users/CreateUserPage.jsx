import React, { useEffect } from "react";
import { initTE, Input, Ripple, Select } from "tw-elements";
import { useFormik } from "formik";
import * as Yup from "yup";
import { VALID_PASSWORD_REGEX } from "../../../constants/validation";
import usersService from "../../../services/usersService";
import { UserRole } from "../../../constants/role";

const CreateUserPage = () => {
	useEffect(() => {
		initTE({ Input, Ripple, Select });
	}, []);

	const validationSchema = Yup.object({
		name: Yup.string()
			.required("Name is required")
			.matches(/^[a-zA-Z].{1,20}$/, "Name should contain only characters"),
		email: Yup.string()
			.email("Invalid email address")
			.required("Email address is required"),
		password: Yup.string()
			.required("Password is required")
			.matches(VALID_PASSWORD_REGEX, "the password should .."),
		role: Yup.string().required("Role is required"),
	});

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			role: "",
		},

		validationSchema,
		onSubmit: async (values) => {
			try {
				const response = await usersService.createUser(values);
				console.log(response);
				formik.resetForm();
			} catch (error) {
				console.error(error);
			}
		},
	});

	return (
		<div className="flex flex-col items-center justify-center">
			<h1>Create users</h1>

			<form
				className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
				onSubmit={formik.handleSubmit}
			>
				<div>
					<div className="relative mb-6" data-te-input-wrapper-init>
						<input
							type="text"
							className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
							id="exampleFormControlInputName"
							{...formik.getFieldProps("name")}
						/>

						<label
							htmlFor="exampleFormControlInput2"
							className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
						>
							Name
						</label>
					</div>
					{formik.touched.name && formik.errors.name && (
						<div className="text-red-500 mt-0 mb-4 text-sm">
							{formik.errors.name}
						</div>
					)}
				</div>
				<div>
					<div className="relative mb-6" data-te-input-wrapper-init>
						<input
							type="text"
							className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
							id="exampleFormControlInputEmail"
							placeholder="Email address"
							{...formik.getFieldProps("email")}
						/>
						<label
							htmlFor="exampleFormControlInput2"
							className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
						>
							Email address
						</label>
					</div>
					{formik.touched.email && formik.errors.email && (
						<div className="text-red-500 mt-0 mb-4 text-sm">
							{formik.errors.email}
						</div>
					)}
				</div>
				<div>
					<div className="relative mb-6" data-te-input-wrapper-init>
						<input
							type="password"
							className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
							id="exampleFormControlInputPassword"
							{...formik.getFieldProps("password")}
						/>
						<label
							htmlFor="exampleFormControlInput2"
							className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
						>
							Password
						</label>
					</div>
					{formik.touched.password && formik.errors.password && (
						<div className="text-red-500 mt-0 mb-4 text-sm">
							{formik.errors.password}
						</div>
					)}
				</div>

				<div className="relative mb-6" data-te-select-wrapper-init>
					<select data-te-select-init {...formik.getFieldProps("role")}>
						<option value={UserRole.ADMIN}>Admin</option>
						<option value={UserRole.DEVELOPER}>Developer</option>
					</select>
					<label data-te-select-label-ref>Role</label>
				</div>

				<button
					type="submit"
					className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-cyan-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					Create
				</button>
			</form>
		</div>
	);
};

export default CreateUserPage;
