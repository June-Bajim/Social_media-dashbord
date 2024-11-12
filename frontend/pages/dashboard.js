// pages/dashboard.js
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('http://localhost:5000/api/posts');
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Social Media Dashboard</h1>
            {posts.map((post) => (
                <div key={post._id}>
                    <h3>{post.user.username}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}
