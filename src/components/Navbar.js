import { Link } from 'react-router-dom';

const Navbar = () => {
    const handleLogout = () => {
        fetch('http://localhost:3000/logout', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(() => {
                console.log('Logged out successfully!');
                localStorage.removeItem('accessToken');
                localStorage.removeItem('userId');
            })
            .catch(error => {
                console.error('Error logging out:', error);
            });
    };

    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/getBlogs/:_id">Blog Details</Link>
                <Link to="/user-reg">Sign-up</Link>
                <Link to="/login">Login</Link>
                <Link to="/" onClick={handleLogout} style={{ textDecoration: 'none', cursor: 'pointer' }}>Logout</Link>
            </div>
        </nav>
    );
};

export default Navbar;
