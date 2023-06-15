

const BlogList = ({ blogs, title, handleDelete }) => {

    console.log(blogs);


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
                    {blogs.data.map((blog) => (
                        <tr key={blog.id}>
                            <td>{blog.title}</td>
                            <td>{blog.author}</td>
                            <td>{blog.body}</td>
                            <td>
                                <button >Edit</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(blog._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BlogList;
