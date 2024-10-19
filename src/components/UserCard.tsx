// components/UserCard.tsx
import React from 'react';
import '../styles/components/UserCard.css';

interface User {
  first_name: string;
  last_name: string;
  username: string;
  age: number;
  marital_status: string;
  is_employed: boolean;
  is_founder: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const UserCard: React.FC<User> = ({ first_name, last_name, username, age, marital_status, is_employed, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <h3>{first_name} {last_name}</h3>
      <p>Username: {username}</p>
      <p>Age: {age}</p>
      <p>Status: {marital_status}</p>
      <p>Employed: {is_employed ? "Yes" : "No"}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default UserCard;
