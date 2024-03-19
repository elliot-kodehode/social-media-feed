import Feed from "./Feed.jsx";
import User from "./User.jsx";
import posts from "../assets/posts.js";

export default function Page() {

    const randomPost = posts[Math.floor(Math.random() * posts.length)]

  return (
      <>
          <User randomPost={randomPost}/>
          <Feed randomPost={randomPost}/>

      </>
  )
}