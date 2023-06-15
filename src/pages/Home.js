
import BlogList from './BlogList';
import useFetch from '../hooks/useFetch';

const Home = () => {
    // const [name, setName] = useState('caroline');
    // const [age, setAge] = useState(25);


    // const handleClick = (name) => {
    //     console.log('Hello,' + name);
    //     setName('klaus');
    //     setAge(30)
    // }
    // return (
    //     <div className="home">
    //         <h2>Homepage</h2>
    //         <p>{name} is {age} years old</p>
    //         <button onClick={() => handleClick('mario')}>Click Me</button>
    //     </div>
    // );


    /////////////////////////////////////////////////////
    const { data: blogs, isPending, error } = useFetch('http://localhost:3000/getAllBlogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs!' />
            }
        </div>
    )


}

export default Home;