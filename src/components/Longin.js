import React, { useEffect, useState } from 'react';

function Login() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [cpass, setCpass] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  const eventSubmit = (e) => {
    e.preventDefault();
    console.log(name, pass, cpass);

    localStorage.setItem(
      name,
      JSON.stringify({ name: name, pass: pass, cpass: cpass })
    );

    fetchDataFromLocalStorage();
  };

  const eventClick = () => {
    setIsShow((prev) => !prev);
  };

  const eventHandler = (e) => {
    const val = e.target.value;
    const n = e.target.name;
    if (n === 'name') setName(val);
    else if (n === 'pass') setPass(val);
    else if (n === 'cpass') setCpass(val);
  };

  useEffect(() => {
    fetchDataFromLocalStorage();
  }, []);

  const fetchDataFromLocalStorage = () => {
    const usersList = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      usersList.push(JSON.parse(value));
    }
    setUserDetails(usersList);
  };

  const eventDelete = (name) => {
    localStorage.removeItem(name);
    fetchDataFromLocalStorage();
  };

  const eventUpdate = () => {
    // You can add logic here for updating user details
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

        <form onSubmit={eventSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Username</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              onChange={eventHandler}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="pass"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              onChange={eventHandler}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Confirm Password</label>
            <input
              type="password"
              name="cpass"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              onChange={eventHandler}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>

        <a
          href="#"
          onClick={eventClick}
          className="block text-center mt-4 text-blue-600 hover:underline"
        >
          {isShow ? 'Hide Data' : 'Show Data'}
        </a>

        {isShow && (
          <table className="w-full mt-4 border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Username</th>
                <th className="border px-4 py-2">Password</th>
                <th className="border px-4 py-2">Confirm Password</th>
                <th className="border px-4 py-2">Delete</th>
                <th className="border px-4 py-2">Update</th>
              </tr>
            </thead>
            <tbody>
              {userDetails.map((item) => (
                <tr key={item.name} className="text-center">
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.pass}</td>
                  <td className="border px-4 py-2">{item.cpass}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => eventDelete(item.name)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="border px-4 py-2">
                    <button onClick={eventUpdate} className="text-blue-500 hover:underline">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Login;
