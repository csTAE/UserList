import React, { useState } from 'react';
import { useUsers } from '../hooks/useUsers';
import UserList from '../components/UserList';
import AddUserForm from '../components/AddUserForm';
import EditUserPage from './EditUserPage'; // Import the EditUserPage
import { User } from '../models/User';
import './UserListPage.css'; 
import { useNavigate } from 'react-router-dom';

const UserListPage: React.FC = () => {
  const { users, loading, addUser, editUser, deleteUser } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // Track the selected user object
  const navigate = useNavigate(); // For navigation

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleEditUser = (username: string) => {
    const userToEdit = users.find(user => user.username === username); // Find the user by username
    if (userToEdit) {
      setSelectedUser(userToEdit); // Set the actual user object
      navigate('/edit-user'); // Navigate to the EditUserPage
    }
  };

  const handleDeleteUser = (username: string) => {
    deleteUser(username);
  };

  const existingUsernames = users.map(user => user.username); 

  return (
    <div>
      {selectedUser ? (
        <EditUserPage
          selectedUser={selectedUser}
          onUpdateUser={(updatedUser) => {
            editUser(updatedUser.username, updatedUser); // Update the user
            setSelectedUser(null); // Reset selected user after update
          }}
          onCancelEdit={() => setSelectedUser(null)} // Cancel editing
        />
      ) : (
        <>
          <h1>User List</h1>
          <UserList users={users} onEditUser={handleEditUser} onDeleteUser={deleteUser} />
          <AddUserForm onAddUser={addUser} existingUsernames={existingUsernames}/>
        </>
      )}
    </div>
  );
};

export default UserListPage;
