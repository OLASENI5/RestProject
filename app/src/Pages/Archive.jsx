import axios from "axios"
import { useEffect, useState } from "react"
import { baseURL } from "../constants/constants"


const Archive = () => {
    const [posts, setPosts] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`${baseURL}posts/`)
            .then(res => {

                console.log(res.data)
                setPosts(res.data)
                setLoading(false)
            })
    }, [])

    return (
        <div className=" flex flex-col items-center justify-center gap-3">

            <h1>Archive</h1>

            {
                loading ? (<p className=" text-5xl animate-spin w-fit flex items-center justify-center">X</p>) : (

                    <div className="flex flex-col items-center justify-center gap-10">
                        {posts?.map(items => (
                            <div className=" flex flex-col items-center justify-center px-20 gap-2" key={items._id}>
                                <p>{items.title}</p>
                                <p>{items.author}</p>
                            </div>
                        ))}
                    </div>
                )
            }

        </div>
    )
}

export default Archive