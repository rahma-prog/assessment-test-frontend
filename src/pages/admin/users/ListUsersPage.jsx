import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiPencilLine } from "react-icons/ri";
import usersService from "../../../services/usersService";
import { format } from "date-fns";

const ListUsersPage = () => {
	const [users, setUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage] = useState(8);

	useEffect(() => {
		usersService.getAll().then(setUsers);
	}, []);

	const deleteUser = async (userId) => {
		try {
			await usersService.deleteUser(userId);
			setUsers(users.filter((user) => user.id !== userId));
		} catch (error) {
			console.log(error);
		}
	};
	const indexOfLastUser = currentPage * usersPerPage;
	const indexOfFirstUser = indexOfLastUser - usersPerPage;
	const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<Link
				to={"/users/create"}
				className="inline-block rounded-lg  px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out bg-cyan-500  dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
				data-te-ripple-init
			>
				Add user
			</Link>

			<div className="flex flex-col">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<div className="overflow-hidden">
							<table className="min-w-full text-left text-sm font-light  bg-gray-50">
								<thead className="border-b font-medium dark:border-neutral-500">
									<tr>
										<th scope="col" className="px-6 py-4">
											Id
										</th>
										<th scope="col" className="px-6 py-4">
											Name
										</th>
										<th scope="col" className="px-6 py-4">
											Email
										</th>
										<th scope="col" className="px-6 py-4">
											Role
										</th>
										<th scope="col" className="px-6 py-4">
											Created At
										</th>
									</tr>
								</thead>
								<tbody>
									{currentUsers.map((user) => {
										return (
											<tr
												key={user.id}
												className="border-b dark:border-neutral-500 bg-white rounded-lg"
											>
												<td className="whitespace-nowrap px-6 py-4 font-medium ">
													{user.id}
												</td>
												<td className="whitespace-nowrap px-6 py-4 text-gray-800">
													{user.name}
												</td>
												<td className="whitespace-nowrap px-6 py-4  text-gray-600">
													{user.email}
												</td>
												<td
													className={`whitespace-nowrap px-3 inline-block mt-3 mb-3 ${
														user.role === "admin"
															? "inline-block rounded-full font-medium text-violet-700 bg-violet-100  text-base border-spacing-x-60 "
															: user.role === "developer"
															? "text-info-700 inline-block rounded-full font-medium bg-info-100 text-base border-spacing-x-60"
															: ""
													}`}
												>
													{user.role}
												</td>
												<td className="whitespace-nowrap px-6 py-4 text-gray-600">
													{format(new Date(user.createdAt), "dd MMM")}
												</td>

												<td className="whitespace-nowrap px-6 py-4">
													<RiDeleteBin6Line
														className="text-gray-600 hover:text-gray-600 cursor-pointer"
														onClick={() => deleteUser(user.id)}
													/>
												</td>
												<td className="whitespace-nowrap px-6 py-4">
													<Link to={"/users/update/" + user.id}>
														<RiPencilLine className="text-gray-600 hover:text-gray-600 cursor-pointer" />
													</Link>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<ul className="flex justify-center mt-2 ">
					{Array.from({ length: Math.ceil(users.length / usersPerPage) }).map(
						(_, index) => (
							<li
								key={index}
								className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
									currentPage === index + 1
										? "relative block rounded bg-neutral-50 px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all duration-300 "
										: "relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
								}`}
								onClick={() => paginate(index + 1)}
							>
								{index + 1}
							</li>
						)
					)}
				</ul>
			</div>
		</>
	);
};

export default ListUsersPage;
