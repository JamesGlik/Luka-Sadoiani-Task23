import React from 'react';
import { useNavigate } from 'react-router';

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' }
];

const Users = () => {

    const navigate = useNavigate();

    const handleNavigation = (id) => {
        navigate(`/user/${id}`);
    };

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li 
                        key={user.id} 
                        style={{ cursor: 'pointer', color: 'blue' }}
                        onClick={() => handleNavigation(user.id)}
                    >
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;