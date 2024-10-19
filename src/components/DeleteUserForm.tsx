import React from 'react';

const DeleteUserForm = () => {
  const handleDeleteUser = (e: React.FormEvent) => {
    e.preventDefault();
    window.alert('User Deleted');
  };

  return (
    <form onSubmit={handleDeleteUser}>
      <label>
        User ID to Delete:
        <input type="text" name="userId" />
      </label>
      <button type="submit">Delete User</button>
    </form>
  );
};

export default DeleteUserForm;