// components/UserList.tsx
import React from 'react';
import UserCard from './UserCard';
import { User } from '../models/User';
import EditUserForm from './EditUserForm';


interface UserListProps {
  users: User[];
  onEditUser: (username: string) => void;
  onDeleteUser: (username: string) => void;
  
}

const UserList: React.FC<UserListProps> = ({ users, onEditUser, onDeleteUser }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <div className="user-card" key={user.username}>
          <h2>{user.first_name} {user.last_name}</h2>
          <p>Username: {user.username}</p>
          <p>Age: {user.age}</p>
          <p>Marital Status: {user.marital_status}</p>
          <p>Employed: {user.is_employed ? 'Yes' : 'No'}</p>
          <button onClick={() => onEditUser(user.username)}>Edit</button>
          <button onClick={() => onDeleteUser(user.username)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;