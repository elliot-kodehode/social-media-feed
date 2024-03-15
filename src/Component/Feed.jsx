import Profile from "./Profile.jsx";
import posts from "../assets/posts.js";
export default function Feed() {
    return (
        <div className="feed">
            {posts.map((post, index) => (
                <Profile key={index} username={post.username} fullname={post.fullName} content={post.content} likes={post.likes} timestamp={post.timestamp}/>
            ))}
        </div>
    )
}