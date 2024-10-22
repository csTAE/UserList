import React, { useState, useEffect } from 'react';
import { User } from '../models/User';

interface EditUserFormProps {
  user: User;
  onSubmit: (updatedUser: User) => void;
  onCancel: () => void;
}

const EditUserForm: React.FC<EditUserFormProps> = ({ user, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<User>(user);

  useEffect(() => {
    setFormData(user); // When user prop changes, update form data
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLSelectElement;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleInputChange}
      />
      <input
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleInputChange}
      />
      <input
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
        disabled
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={handleInputChange}
      />

      <label>
        Marital Status:
        <select
          name="marital_status"
          value={formData.marital_status}
          onChange={handleInputChange}
          required
        >
          <option value="">Select...</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
        </select>
      </label>

      <label>
        Is Employed:
        <select
          name="is_employed"
          value={formData.is_employed ? 'yes' : 'no'}
          onChange={handleInputChange}
          required
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </label>

      <label>
        Is Founder:
        <select
          name="is_founder"
          value={formData.is_founder ? 'yes' : 'no'}
          onChange={handleInputChange}
          required
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </label>

      <button type="submit">Save Changes</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
