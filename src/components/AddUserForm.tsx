import React, { useState } from 'react';
import '../styles/components/AddUserForm.css';

interface User {
  first_name: string;
  last_name: string;
  username: string;
  age: number;
  marital_status: string;
  is_employed: boolean;
}

interface AddUserFormProps {
  onAddUser: (user: User) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ onAddUser }) => {
  const [newUser, setNewUser] = useState<User>({
    first_name: '',
    last_name: '',
    username: '',
    age: 0,
    marital_status: '',
    is_employed: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLSelectElement; // Type assertion
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value, // For checkbox
    }));
  
    // Convert is_employed to boolean based on dropdown selection
    if (name === 'is_employed') {
      setNewUser(prevUser => ({
        ...prevUser,
        is_employed: value === 'yes', // Set boolean value based on dropdown
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddUser(newUser);
    window.alert('User Added: ' + newUser.first_name + ' ' + newUser.last_name);

    

    // Reset the form
    setNewUser({
      first_name: '',
      last_name: '',
      username: '',
      age: 0,
      marital_status: '',
      is_employed: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="first_name" placeholder="First Name" value={newUser.first_name} onChange={handleInputChange} />
      <input name="last_name" placeholder="Last Name" value={newUser.last_name} onChange={handleInputChange} />
      <input name="username" placeholder="Username" value={newUser.username} onChange={handleInputChange} />
      <input name="age" type="number" placeholder="Age" value={newUser.age} onChange={handleInputChange} />

      {/* Dropdown for marital status */}
      <label>
        Marital Status:
        <select name="marital_status" value={newUser.marital_status} onChange={handleInputChange} required>
          <option value="">Select...</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
        </select>
      </label>

      {/* Dropdown for employment status */}
      <label>
        Is Employed:
        <select name="is_employed" value={newUser.is_employed ? 'yes' : 'no'} onChange={handleInputChange} required>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </label>

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
