import axios from "axios";

const Page = async ({ params }: { params: Promise<{ blogId: string }>}) => {
    const { blogId } = await params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`);
    const posts = response.data;
    return (
        <div>
            <h2>Post {blogId}</h2>
            <h3>{posts.title}</h3>
        </div>
    )
}
export default Page
