import React from 'react';
import EditUserForm from '../components/EditUserForm';
import { User } from '../models/User';

interface EditUserPageProps {
  selectedUser: User | null;
  onUpdateUser: (updatedUser: User) => void;
  onCancelEdit: () => void;
}

const EditUserPage: React.FC<EditUserPageProps> = ({ selectedUser, onUpdateUser, onCancelEdit }) => {
  if (!selectedUser) {
    return <div>User not found!</div>;
  }

  const handleFormSubmit = (updatedUser: User) => {
    onUpdateUser(updatedUser);
    window.alert(`User Updated: ${updatedUser.first_name} ${updatedUser.last_name}`);
  };

  return (
    <div className="edit-user-page">
      <h2>Edit User</h2>
      <EditUserForm user={selectedUser} onSubmit={handleFormSubmit} onCancel={onCancelEdit} />
    </div>
  );
};

export default EditUserPage;
