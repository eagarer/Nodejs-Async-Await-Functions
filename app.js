import axios from "axios";

async function userId(id) {
  const { data: userData } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const { data: postsData } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + id
  );
  //   const find = posts.find((item)=> item.id == id);

  const result = {
    user: userData,
    post: postsData,
  };
  console.log(result.user);
  console.log("Post: ", result.post[0]);
}

export default userId;
