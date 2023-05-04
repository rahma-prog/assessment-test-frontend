import React, { useState } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: '', email: '' });
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div>
      

      <div className="mb-4">
        <h3>Add User</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
          className="mr-2 px-2 py-1 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
          className="mr-2 px-2 py-1 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleAddUser}
          className="px-4 py-2 text-white rounded-md bg-stone-950"
        >
          Add user
        </button>
      </div>

      <h2>Team members </h2>
      <ul className="border border-gray-300">
        {users.map((user, index) => (
          <li key={index} className="flex items-center justify-between py-2 px-4 border-b border-gray-300">
            <div>
              <input type="checkbox" className="mr-2" />
              {user.name} - {user.email}
            </div>
            <div>
              <button onClick={() => handleDeleteUser(index)} className="mr-2">
              </button>
              <button onClick={() => console.log('Modify user:', user)}>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
