// hooks/useUsers.ts
import { useState, useEffect } from 'react';
import { fetchUsers } from '../utils/api';

interface User {
  first_name: string;
  last_name: string;
  username: string;
  age: number;
  marital_status: string;
  is_employed: boolean;
  is_founder: boolean;
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  const editUser = (username: string, updatedUser: User) => {
    setUsers(users.map(user => (user.username === username ? updatedUser : user)));
  };

  const deleteUser = (username: string) => {
    setUsers(prevUsers => prevUsers.filter(user => user.username !== username));
    alert(`${username} has been deleted successfully!`); // Show alert after deletion
  };
  

  return { users, loading, addUser, editUser, deleteUser };
};
