import { useState } from 'react';
import Profile from "./Profile.jsx";
import posts from "../assets/posts.js";
import styles from "./feed.module.css";
export default function Feed() {
    const [currentIndex, setIndex] = useState(10)
    const [loadBtn, setLoadBtn] = useState("Load More")
    const [buttonClass, setClass] = useState(styles.button)
    const loadedPosts = posts.slice(0, currentIndex);

    function handleClick() {

        setIndex((prevNum)=> (prevNum + 10 ))
        console.log(currentIndex + 10) // + 10 cuz async and the other ways to do it were way too long
        if (currentIndex === 30) {
        setLoadBtn("End of feed")
            setClass(styles.buttonHidden)
    }
    }



    return (
        <>
            <div className={styles.feed}>
            {loadedPosts.map((post, index) => (
                <Profile key={index} username={post.username} fullname={post.fullName} content={post.content} likes={post.likes} timestamp={post.timestamp}/>
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
