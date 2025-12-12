import { useState } from "react";
import useFetch from "./hooks/useFetch";
import './App.css'

export default function App() {
    const [postId, setPostId] = useState(null);

    const { data, loading, error } = useFetch(
        postId ? `https://jsonplaceholder.typicode.com/posts/${postId}` : null
    );

    return (
        <div>
            <button onClick={() => setPostId(1)}>Post 1</button>
            <button onClick={() => setPostId(2)}>Post 2</button>
            <button onClick={() => setPostId(3)}>Post 3</button>

            <hr/>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            {data && (
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                </div>
            )}
        </div>
    );
}
