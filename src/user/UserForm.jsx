import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [newUser, setNewUser] = useState({ name: '', years: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(newUser);
    setNewUser({ name: '', years: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ime:
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
        />
      </label>
      <label> <br /> <br />
        Godine:
        <input
          type="text"
          name="years"
          value={newUser.years}
          onChange={handleInputChange}
        />
        <br />
      </label> <br />
      <button type="submit">Dodaj korisnika</button>
    </form>
  );
};

export default UserForm;