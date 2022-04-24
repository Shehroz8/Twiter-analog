import "./PostAddForm.css"
const PostAddForm =({onAdd})=>{
    return(
        <div className="bottom-panel d-flex">
            <input type="text" placeholder="What are you thinking about?" className="form-control new-post-label"/>
            <button onClick={()=> onAdd("hi")} type="submit" className="btn btn-outline-secondary">
                Add Post
            </button>
        </div>
    )
}

export default PostAddForm