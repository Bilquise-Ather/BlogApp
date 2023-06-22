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
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog._id}>
                            <td>{blog.title}</td>
                            <td>{blog.author}</td>
                            <td>{blog.body}</td>
                            <td>
                                {shouldShowButtons(blog) && (
                                    <>
                                        <button className='edit' onClick={() => handleEdit(blog)}>
                                            Edit
                                        </button>
                                        <button className='delete' onClick={() => handleDelete(blog._id)}>
                                            Delete
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogList;
