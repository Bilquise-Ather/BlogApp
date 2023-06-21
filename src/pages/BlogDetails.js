import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {
    const { _id } = useParams();
    const { data: blog, error, isPending } = useFetch(`http://localhost:3000/getBlogs/${_id}`);

    const navigate = useNavigate();

    // const handleClick = () => {
    //     fetch(`http://localhost:3000/deleteBlog/${_id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(() => {
    //             navigate("/");
    //         })
    //         .catch(error => {
    //             console.error("Error deleting blog:", error);
    //         });
    // };


    return
    // (
    //     <div className="blog-details">
    //     //     {isPending && <div>Loading...</div>}
    //     //     {error && <div>{error}</div>}
    //     //     {blog && (
    //     //         <article>
    //     //             <h2>{blog.title}</h2>
    //     //             <p>Written by: {blog.author}</p>
    //     //             <div>{blog.body}</div>
    //     //             <button onClick={handleClick}>Delete Blog</button>
    //     //         </article>
    //         )}
    //     </div>
    // )
}

export default BlogDetails;
