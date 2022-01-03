import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts').then(res => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, [])

  return (
    <div className="container">
        <header className="bg-gray-800 text-white">
          NAVBAR
        </header>
        <ul className="text-lg">
          {posts.map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
