import React from 'react';
import Modal from 'react-modal';

const UserModal = ({ user, show, handleClose }) => {
  const modalStyle = {
    content: {
      width: '500px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
    },
  };

  return (
    <Modal isOpen={show} style={modalStyle}>
      <h2>User Details</h2>

      <p>Name: {user.name}</p>
      <p>Address: {user.address}</p>
      <p>Gender: {user.gender}</p>
      <p>Date of Birth: {user.date_of_birth}</p>

      <button onClick={handleClose}>Close</button>
    </Modal>
  );
};

export default UserModal;
