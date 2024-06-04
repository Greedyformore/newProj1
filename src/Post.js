import React, {useState} from 'react'

export default function Post() {

    //useState
    const [post,setPost] = useState();

   const loadPost = ()=>{

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=> response.json())
    .then (res => {
        const data = res; 
        setPost (data)
        
        console.log(res)})
   }
    return (
    <div>Post
{
    post?<div>
    <p>ID :{post.id}</p>
    <p>title :{post.title}</p>
    <p>userId :{post.userId}</p>
    <p>Completed :{post.Completed}</p>
    </div>:null 
}

        <button onClick={loadPost}>Get Post</button>
    </div>
  )
}
