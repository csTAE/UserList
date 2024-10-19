import React, { useState } from 'react';
import { useUsers } from '../hooks/useUsers';
import UserList from '../components/UserList';
import AddUserForm from '../components/AddUserForm';
import { User } from '../models/User';
import './UserListPage.css'; 


const UserListPage: React.FC = () => {
  const { users, loading, addUser, editUser, deleteUser } = useUsers();
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleEditUser = (username: string) => {
    setSelectedUser(username);
  };

  const handleDeleteUser = (username: string) => {
    deleteUser(username);
  };

  const existingUsernames = users.map(user => user.username); 

  return (
    <div>
      <h1>User List</h1>
      <AddUserForm onAddUser={addUser} existingUsernames={existingUsernames} /> 
      <UserList users={users} onEditUser={handleEditUser} onDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default UserListPage;
