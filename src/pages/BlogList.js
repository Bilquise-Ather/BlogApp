import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogList = ({ blogs, title, handleDelete }) => {

    const navigate = useNavigate();

    const handleEdit = (blog) => {
        console.log(blog);
        const blogId = blog._id;
        navigate(`/getBlogs/${blogId}`);
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
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog._id}>
                            <td>{blog.title}</td>
                            <td>{blog.author}</td>
                            <td>{blog.body}</td>
                            <td>
                                <button className='edit' onClick={() => handleEdit(blog)}>Edit</button>
                            </td>
                            <td>
                                <button className='delete' onClick={() => handleDelete(blog._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogList;
