import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

    {/*const [name,setName]= useState('mario');

    const handleDelete=(id) => {
        const newBlogs = blogs.filter((blog)=>blog.id!==id)
        setBlogs(newBlogs);
    }*/}


    return (
        <div className="Home">
            { error && <div>{error}</div> }
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
            {/*<BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's blogs!"/>
            *<button onClick={()=>{respondClick('Nikhil')}}>Click here</button>    {/*ya bina argument pass kiye to sidhe onClick={respondClick}
            <button onClick={()=>setName('luigi')}>Change name</button>
            <p>{name}</p>*/}
        </div>
    );

}
 
export default Home;