import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Edit = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = useState('');
    const [bio, setBio] = useState('');

    const { id } = useParams();

    useEffect(() =>{
        axios
          .get(`https://merntest03.herokuapp.com/users/${id}`)
          .then((res) => {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmail(res.data.email);
            setDOB(res.data.dob);
            setBio(res.data.bio);
          })
          .catch((err) => console.log(err));

    }, [id])

    const handleEditSubmit = async (event) => {
      event.preventDefault();
      await axios({
        method: 'PATCH',
        url: `https://merntest03.herokuapp.com/users/${id}`,
        data: {
          firstName,
          lastName,
          email,
          dob,
          bio,
        },
      })
        .then(() => {
          window.alert('Data Updated');
          window.location = ('/');
        })
        .catch((err) => window.alert(err.message));
    };


    return (
      <>
        <div class="container px-5 py-24 mx-auto h-screen">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Edit User
            </h1>
          </div>
          <form onSubmit={handleEditSubmit}>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <input
                    class="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-red-500 text-base px-4 py-2"
                    placeholder="First Name"
                    type="text"
                    required
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div class="p-2 w-1/2">
                  <input
                    class="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-red-500 text-base px-4 py-2"
                    placeholder="Last Name"
                    type="text"
                    required
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div class="p-2 w-1/2">
                  <input
                    class="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-red-500 text-base px-4 py-2"
                    placeholder="Email"
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="p-2 w-1/2">
                  <input
                    class="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-red-500 text-base px-4 py-2"
                    placeholder="DOB"
                    type="date"
                    required
                    name="dob"
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
                  />
                </div>
                <div class="p-2 w-full">
                  <textarea
                    class="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none h-48 focus:border-red-500 text-base px-4 py-2 resize-none block"
                    placeholder="Bio"
                    name="bio"
                    required
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </div>
                <div class="p-2 w-full">
                  <button
                    type="submit"
                    class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
}

export default Edit
