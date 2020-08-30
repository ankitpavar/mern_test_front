import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      method: 'POST',
      url: 'https://merntest03.herokuapp.com/users',
      data: {
        firstName,
        lastName,
        email,
        dob,
        bio,
      },
    })
      .then(() => {
        window.alert('Data Submitted');
        setFirstName('');
        setLastName('');
        setEmail('');
        setDOB('');
        setBio('');
      })
      .catch((err) => window.alert(err.message));
  };

  return (
    <>
      <div className="container px-5 py-8 mx-auto h-screen">
        <Link to="/">
          <button className="flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            View Users
          </button>
        </Link>
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Create User
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-red-500 text-base px-4 py-2"
                  placeholder="First Name"
                  type="text"
                  required
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-red-500 text-base px-4 py-2"
                  placeholder="Last Name"
                  type="text"
                  required
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-red-500 text-base px-4 py-2"
                  placeholder="Email"
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-red-500 text-base px-4 py-2"
                  placeholder="DOB"
                  type="date"
                  required
                  name="dob"
                  value={dob}
                  onChange={(e) => setDOB(e.target.value)}
                />
              </div>
              <div className="p-2 w-full">
                <textarea
                  className="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none h-48 focus:border-red-500 text-base px-4 py-2 resize-none block"
                  placeholder="Bio"
                  name="bio"
                  required
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
