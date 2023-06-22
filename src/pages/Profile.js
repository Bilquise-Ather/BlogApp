import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
                const userBlogs = data.data.filter(blog => blog.user === userId);
                setBlogs(userBlogs);
            })
            .catch(error => {
                console.error('Error fetching user blogs:', error);
            });
    }

    console.log(userId, 'nblog');

    return (
        <div className="container mt-4">
            <h2>My Blogs</h2>
            {blogs.length > 0 ? (
                <div className="row">
                    {blogs.map(blog => (
                        <div className="col-md-4" key={blog._id}>
                            <div className="card">
                                <div className="card-body bg-pastel">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">{blog.body}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">By {blog.author}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No blogs found.</p>
            )}
        </div>
    );
}

export default Profile;
