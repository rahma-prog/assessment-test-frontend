import React, { useState } from "react";
import controlImage from "../assets/images/control.png";
import ChartFillImage from "../assets/images/Chart_fill.png";
import UserImage from "../assets/images/User.png";
import SearchImage from "../assets/images/Search.png";
import SettingImage from "../assets/images/Setting.png";
import ChatImage from "../assets/images/Chat.png";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
	const [open, setOpen] = useState(true);
	const Menus = [
		{ title: "Dashboard", src: ChartFillImage },
		{ title: "Inbox", src: ChatImage },
		{ title: "Users", src: UserImage, gap: true, to: "/users" },
		{ title: "Search", src: SearchImage },
		{ title: "Setting", src: SettingImage },
	];

	return (
		<div className="flex bg-gray-100">
			<div
				className={` ${
					open ? "w-72" : "w-20 "
				} bg-slate-500 h-screen p-5  pt-8 relative duration-300 rounded-lg`}
			>
				<img
					src={controlImage}
					alt=""
					className={`absolute cursor-pointer -right-3 top-9 w-7 border-gray-100
           border-2 rounded-full  ${!open && "rotate-180"}`}
					onClick={() => setOpen(!open)}
				/>

				<ul className="pt-6">
					{Menus.map((Menu, index) => (
						<li
							key={index}
							className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 &&
								"bg-light-white"} `}
						>
							<Link to={Menu.to} className="flex items-center ">
								<img src={Menu.src} alt={Menu.title} className="mr-2" />

								<span
									className={`${!open && "hidden"} origin-left duration-200`}
								>
									{Menu.title}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="h-screen flex-1 p-7">
				<Outlet />
			</div>
		</div>
	);
};
export default HomePage;
