import {useEffect, useState} from 'react';
import Profile from "./Profile.jsx";
import posts from "../assets/posts.js";
import styles from "./feed.module.css";
import NewPost from "./NewPost.jsx";
import User from "./User.jsx"


export default function Feed( {randomPost}) {
    const [currentIndex, setIndex] = useState(10)
    const [loadBtn, setLoadBtn] = useState("Load More")
    const [buttonClass, setClass] = useState(styles.button)
    const [loadedPosts, setLoadedPosts] = useState(posts.slice(0, currentIndex));

    // Loads more posts on button click
    function handleClick() {

        setIndex((prevNum)=> (prevNum + 10 ))


        console.log(currentIndex + 10) // + 10 cuz async and the other ways to do it were way too long
    }


    // Updates button when index reaches end of array

    useEffect(() => {
            if (currentIndex >= posts.length) {
                setLoadBtn("End of feed")
                setClass(styles.buttonHidden)
            }
        }, [currentIndex]);

    function addNewPost(newPost) {
        setLoadedPosts((prevPosts) => [newPost, ...prevPosts]);
    }

    return (
        <>
            <div className={styles.feed}>
                <NewPost addNewPost={addNewPost} randomPost={randomPost}/>
            {loadedPosts.map((post, index) => (
                <Profile key={post.username + index} username={post.username} fullname={post.fullName} content={post.content} likes={post.likes} timestamp={post.timestamp}/>
            ))}
            <button onClick={handleClick}  className={buttonClass}>{loadBtn}</button>
            </div>

        </>
    )
}

console.log(`
^..^      /
/_/\\_____/
   /\\   /\\
  /  \\ /  \\
`)
