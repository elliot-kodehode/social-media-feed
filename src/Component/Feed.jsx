import {useEffect, useState} from 'react';
import Profile from "./Profile.jsx";
import posts from "../assets/posts.js";
import styles from "./feed.module.css";
import NewPost from "./NewPost.jsx";

export default function Feed( {randomPost}) {

    const [currentIndex, setIndex] = useState(10)
    const [loadBtn, setLoadBtn] = useState("Load More")
    const [buttonClass, setClass] = useState(styles.button)
    const storedPosts = JSON.parse(localStorage.getItem("allPosts"));
    const [allPosts, setPosts] = useState(storedPosts || posts);
    const loadedPosts = allPosts.slice(0, currentIndex);

    // Loads more posts on button click
    function handleClick() {
        setIndex((prevNum)=> (prevNum + 10 ))
    }

    // Updates button when index reaches end of array
    useEffect(() => {
            if (currentIndex >= allPosts.length) {
                setLoadBtn("End of feed")
                setClass(styles.buttonHidden)
            }
        }, [currentIndex]);

    // Updates post list with the new post
    function addNewPost(newPost) {
        setPosts((prevPosts) => [newPost, ...prevPosts])
        setIndex((prevNum) => (prevNum + 1))
    }

    // Stores the new post list
    useEffect(() => {
        localStorage.setItem("allPosts", JSON.stringify(allPosts));

    }, [allPosts]);


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
