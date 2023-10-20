import axios from "axios"
import { useState } from "react"
import { baseURL } from "../constants/constants"

const Home = () => {
    const [posts, setPosts] = useState()

    const loadPosts = async () => {
        let results = await axios.get(`${baseURL}posts/latest`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

            setPosts(results)
    }

    return (
        <div className="flex flex-col justify-center items-center ">
        home
        <button onClick={loadPosts}>load more posts</button>
        </div>
    )
}

export default Home