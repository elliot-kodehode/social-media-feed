import styles from "./feed.module.css";
import {useState} from "react";

export default function NewPost({addNewPost, randomPost}) {

    const [formData, setFormData] = useState("")

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevState) => ({...prevState, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    const newPost = {
            username: randomPost.username,
            fullName: randomPost.fullName,
            content: formData.postContent,
            likes: 0,
            timestamp: "Posted just now"

        }
        addNewPost(newPost);
        setFormData({ ...formData, postContent: '' });
    }



    return (
        <div className={styles.postWrapper}>
            <form className={styles.formField}>
                <label className={styles.formLabel}>
            Make a new post

            <textarea rows="6" name="postContent" className={styles.newPost} onChange={handleChange}  maxLength={256} value={formData.postContent} placeholder={"What's on your mind?"}/>
                </label>
            <input type="submit" className={styles.postBtn} onClick={handleSubmit}/>
            </form>
        </div>
    )


}