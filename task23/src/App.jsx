import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './Users';
import UserDetails from './UserDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
