import { useState } from "react";
import { useNavigate } from 'react-router-dom';



const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();


    const handlesubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:3000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added!');
            setIsPending(false);
            navigate("/")

        })


    }


    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handlesubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="Shakespere">Shakespere</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button diabled>Adding Blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;
