import React,{useState,useCallback} from 'react'
import axios from 'axios'

const accessToken =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGU1MTNmZjk5NTAxZDdlYzQ0ZGE1NjIiLCJpYXQiOjE2MjU4MDkxNzF9.Vw9KJNS9F10uDncoBa-S8cp8Zp0qeFbEYuW-Pds4mb0"
const apiUrl ='http://localhost:5000/api';

const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: accessToken,
    },
});

const Posts = () => {
    const [posts,setPosts] = useState([]);
    const [requestError,setRequestError] = useState();
    const fetchData = useCallback(async () => {
        try{
            const result = await authAxios.get(`/posts`);
            setPosts(result.data.posts);
        } catch(err){
            setRequestError(err.message);
        }
    });
    return (
        <div>
            <button onClick= {() =>fetchData()}>Get posts</button>
            {posts.title} 
            <br/>{posts.description}
            {requestError}
        </div>
    )
}

export default Posts
