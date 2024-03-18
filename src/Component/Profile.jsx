import styles from "./profile.module.css"
import likeIcon from "../assets/licon-but-better.png"

export default function Profile({username, fullname, content, likes, timestamp}) {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profile}>
            <img className={`${styles.profilePic} ${styles.pointer}`} src={"https://robohash.org/" + username + ".png"} alt="profile-icon"/>
                <h3 className={`${styles.fullName} ${styles.pointer}`}>{fullname}</h3>
            <h3 className={`${styles.userName} ${styles.pointer}`}>@{username}</h3>
            </div>
            <p className={content}>{content}</p>
            <div className={styles.likesContainer}>
            <img src={likeIcon} alt="thumbs up icon" className={`${styles.likesIcon} ${styles.pointer}`}/>
            <p className={likes}>{likes}</p>
            </div>
            <p className={styles.timestamp}>{timestamp}</p>
        </div>
    )
}