import { useEffect, useState } from "react";

const Profile = () => {
    const [blogs, setBlogs] = useState([]);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (userId) {
            // Fetch the user's blogs
            fetchUserBlogs();
        }
    }, [userId]);

    const fetchUserBlogs = () => {
        fetch(`http://localhost:3000/getAllBlogs`)
            .then(response => response.json())
            .then(data => {
                console.log(data.data, 'data');
                // Filter the blogs based on the userId
                const userBlogs = data.data.filter(blog => blog.user == userId);
                setBlogs(userBlogs);
            })
            .catch(error => {
                console.error('Error fetching user blogs:', error);
            });
    }

    console.log(userId, 'nblog');

    return (
        <div className="profile">
            <h2>My Blogs</h2>
            {blogs.length > 0 ? (
                <ul>
                    {blogs.map(blog => (
                        <li key={blog._id}>
                            <h3>{blog.title}</h3>
                            <p>{blog.body}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No blogs found.</p>
            )}
        </div>
    );
}

export default Profile;
