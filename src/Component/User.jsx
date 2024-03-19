import posts from "../assets/posts.js";
import styles from "./user.module.css";
import Page from "./Page.jsx";

export default function User( {randomPost} ) {

    return (
        <div className={styles.currentUser}>
            <div className={styles.profileName}>
            <h2>{randomPost.fullName}</h2>
            <h3>@{randomPost.username}</h3>
            </div>
            <img className={`${styles.profilePic} ${styles.pointer}`} src={"https://robohash.org/" + randomPost.username + ".png"}
                 alt="profile-icon"/>
            <div className={styles.followers}>
                <p>Following <span>{posts.length}</span></p>
                <p>Followers <span>{Math.ceil(Math.random() * 100)}</span></p>
            </div>
        </div>
    )
}