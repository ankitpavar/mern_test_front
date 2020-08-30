import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [UserData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get('https://merntest03.herokuapp.com/users')
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const list = () => {
    return UserData.map((user) => {
      return <Users user={user} key={user._id} />;
    });
  };
  return (
    <>
      {UserData.length === 0 ? (
        <p className="container mx-auto mt-4  h-screen text-white text-2xl font-bold">
          No users found please create a new one{' '}
          <Link to="/add">
            <button className="bg-red-500 text-white active:bg-red-600 font-bold  text-xs px-6 py-3 rounded shadow hover:bg-red-700 outline-none focus:outline-none ml-2 mb-1">
              Create
            </button>
          </Link>
        </p>
      ) : (
        <div className="h-screen container mx-auto mt-4 md:overflow-hidden">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-800  text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Last Name
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  DOB
                </th>
                <th className=" px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Bio
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Edit
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>{list()}</tbody>
          </table>
        </div>
      )}
    </>
  );
};
const Users = ({ user }) => {
  const handleDelete = () => {
    axios
      .delete(`https://merntest03.herokuapp.com/users/${user._id}`)
      .then(() => {
        window.alert('Delete Successfully');
        window.location = ('/');
      });
  };

  return (
    <>
      <tr className="bg-gray-700">
        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-white">
          {user.firstName}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
          {user.lastName}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
          {user.email}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-white">
          {user.dob}
        </td>
        <td className="px-6 py-4  text-sm leading-5 text-white">{user.bio}</td>
        <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
          <Link to={`/edit/${user._id}`}>
            <button className="bg-blue-500 text-white active:bg-blue-600 font-bold  text-xs px-6 py-3 rounded shadow hover:bg-blue-700 outline-none focus:outline-none mr-2 mb-1">
              Edit
            </button>
          </Link>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white active:bg-red-600 font-bold  text-xs px-6 py-3 rounded shadow hover:bg-red-700 outline-none focus:outline-none mr-2 mb-1"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
export default Home;
