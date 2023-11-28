import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: '',
    address: '',
    gender: '',
    date_of_birth: '',
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prevState) => ({ ...prevState, [name]: value }));
  };

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

  const handleAddUser = async () => {
    try {
      setLoading(true);
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
      console.log('User baru telah dibuat:', response.data);
      
      setUsers([...users, response.data]);
      setShowModal(false);
      setNewUser({
        name: '',
        address: '',
        gender: '',
        date_of_birth: '',
      });
      
      setLoading(false);
    } catch (error) {
      console.error(error);
      console.log('Gagal membuat user baru:', error);
      setLoading(TRUE);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleEditUser = async (updatedUser) => {
    setSelectedUser(null);
    setShowModal(false);
  };

  const handleDeleteUser = (user) => {
    // Display confirmation and delete data if confirmed
  };

  return (
    <div>
        <button className="user-table-add-button" onClick={() => setShowModal(true)}>
            Tambah user
        </button>

        <Modal isOpen={showModal} contentLabel="Add User Form" className="user-form-modal">
            <form onSubmit={handleAddUser}>
              <h2>Registrasi Akun</h2>

              <label>Nama</label>
              <input
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleChange}
                required
              />

              <label>Alamat</label>
              <input
                type="text"
                name="address"
                value={newUser.address}
                onChange={handleChange}
              />

              <label>Jenis Kelamin</label>
              <div className='radio-group'>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="M"
                  checked={newUser.gender === 'M'}
                  onChange={handleChange}
                />
                <label htmlFor="male">Pria</label>

                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="F"
                  checked={newUser.gender === 'F'}
                  onChange={handleChange}
                />
                <label htmlFor="female">Wanita</label>
              </div>

              <label>Tanggal Lahir</label>
              <input
                type="date"
                name="date_of_birth"
                value={newUser.date_of_birth}
                onChange={handleChange}
              />

              <div className="form-buttons">
                <button onClick={handleCloseModal}>Cancel</button>
                <button type="submit">Submit</button>
              </div>
            </form>
        </Modal>

        {loading && <div>Loading...</div>}

        {!loading && users.length > 0 && (
        
            <table className="user-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Jenis Kelamin</th>
                  <th>Tanggal Lahir</th>
                  <th>Tanggal Input</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
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
                    <td className='user-table-actions'>
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