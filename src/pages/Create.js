import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Create = () => {
    const { _id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (_id) {
            console.log(_id, 'id');
            fetch(`http://localhost:3000/getBlogs/${_id}`)
                .then((response) => response.json(
                    console.log(response)
                ))
                .then((data) => {
                    console.log(data.data, 'ch');
                    setTitle(data.data[0].title);
                    setBody(data.data[0].body);
                    setAuthor(data.data[0].author);
                })
                .catch((error) => console.error('Error fetching blog data:', error));
        }
    }, [_id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { _id: _id || null, title, body, author, userId };
        console.log(blog, 'b');
        setIsPending(true);

        const url = _id ? `http://localhost:3000/updateBlog` : `http://localhost:3000/blogs`;

        fetch(url, {
            method: _id ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog),
        })
            .then((response) => {
                if (response.ok) {
                    console.log(_id ? 'Blog updated!' : 'New blog added!');
                    navigate('/');
                } else {
                    console.log('Error:', response.statusText);
                }
            })
            .catch((error) => console.error('Error adding/updating blog:', error))
            .finally(() => setIsPending(false));
    };

    return (
        <div className="create">
            <h2>{_id ? 'Edit Blog' : 'Add a new blog'}</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="Shakespeare">Shakespeare</option>
                </select>
                {!isPending && <button>{_id ? 'Update Blog' : 'Add Blog'}</button>}
                {isPending && <button disabled>{_id ? 'Updating Blog...' : 'Adding Blog...'}</button>}
            </form>
        </div>
    );
};

export default Create;
