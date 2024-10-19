import React from 'react';
import { User } from '../models/User';
import AddUserForm from '../components/AddUserForm';
import { useUsers } from '../hooks/useUsers';
interface EditUserPageProps {
  user: User; 
  onUpdateUser: (updatedUser: User) => void;
}

const EditUserPage: React.FC<EditUserPageProps> = ({ user, onUpdateUser }) => {
  const { users } = useUsers(); 
  const existingUsernames = users.map(existingUser => existingUser.username);
  const handleUpdateUser = (updatedUser: User) => {
    onUpdateUser(updatedUser);
  };

  return (
    <div>
      <h1>Edit User</h1>
      <AddUserForm 
        onAddUser={handleUpdateUser} 
        existingUsernames={existingUsernames}
      />
    </div>
  );
};

export default EditUserPage;
