import React from 'react';
import { useParams } from 'react-router';

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' }
];

const UserDetails = () => {

    const { id } = useParams();

    const user = users.find((u) => u.id === parseInt(id, 10));

    if (!user) {
        return (
            <div>
                <h1>User Details</h1>
                <p>User not found</p>
            </div>
        );
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>
                <strong>ID:</strong> {user.id}
            </p>
            <p>
                <strong>Name:</strong> {user.name}
            </p>
        </div>
    );
};

export default UserDetails;