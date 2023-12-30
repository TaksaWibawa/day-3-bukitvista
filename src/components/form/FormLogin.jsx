import { login, selectLoginState } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function FormLogin() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { status, message } = useSelector(selectLoginState);

	const handleOnSubmit = (data) => {
		dispatch(login(data)).then((res) => {
			if (res.payload) {
				Cookies.set("token", res.payload.token, { expires: 1 });
				navigate("/product-dashboard");
			}
		});
	};

	return (
		<form
			onSubmit={handleSubmit(handleOnSubmit)}
			className="flex flex-col gap-4 p-8 bg-white rounded shadow"
		>
			<h1 className="text-3xl font-bold text-center">Login</h1>
			<div className="flex flex-col gap-2">
				<label htmlFor="username">Username</label>
				<input
					type="username"
					id="username"
					className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-100"
					{...register("username", {
						required: "Username is required",
					})}
				/>
				{errors.username && <span className="text-red-500">{errors.username.message}</span>}
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-100"
					{...register("password", {
						required: "Password is required",
					})}
				/>
				{errors.password && <span className="text-red-500">{errors.password.message}</span>}
			</div>
			<button
				type="submit"
				className={`text-white rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-100 ${status === "loading" ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
				disabled={status === "loading"}
			>
				{status === "loading" ? "Loading..." : "Login"}
			</button>
			{status === "error" && <span className="text-red-500">{message}</span>}
		</form>
	);
}
