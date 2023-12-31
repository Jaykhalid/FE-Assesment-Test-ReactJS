import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleViewUser = (user) => {
    // Open a modal or component to display user details
  };

  const handleEditUser = (user) => {
    // Open a form to update user data
  };

  const handleDeleteUser = (user) => {
    // Display confirmation and delete data if confirmed
  };

  return (
    <div>
      {loading && <div>Loading...</div>}

      {!loading && users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Input Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>
                  {user.address.street}, {user.address.suite}
                  <br />
                  {user.address.city}, {user.address.zipcode}
                  <br />
                  {user.address.geo.lat}, {user.address.geo.lng}
                </td>
                <td>{user.gender}</td>
                <td>{user.date_of_birth}</td>
                <td>{user.input_date}</td>
                <td>
                  <button onClick={() => handleViewUser(user)}>View</button>
                  <button onClick={() => handleEditUser(user)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;