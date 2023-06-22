import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogList = ({ blogs, title, handleDelete }) => {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    const handleEdit = (blog) => {
        const blogId = blog._id;
        navigate(`/getBlogs/${blogId}`);
    };

    const shouldShowButtons = (blog) => {
        return blog.user === userId;
    };

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            <div className="card-container">
                {blogs.map((blog) => (
                    <div className="card card2" key={blog._id}>
                        <div className="card-body">
                            <h3 className="card-title">{blog.title}</h3>
                            <p className="card-text">{blog.body}</p>
                        </div>
                        <div className="card-footer">
                            <span className="author">{blog.author}</span>
                            {shouldShowButtons(blog) && (
                                <>
                                    <button className="edit" onClick={() => handleEdit(blog)}>
                                        Edit
                                    </button>
                                    <button className="delete" onClick={() => handleDelete(blog._id)}>
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default BlogList;
