import PostListitem from "../PostListitem";
import "./PostList.css"

const PostList =({posts, onDelete})=>{
    const elements = posts.map((item)=>{
        const {id, ...itemProps} = item
        return(
            <li key={item.id} className="list-group">
                <PostListitem {...itemProps} onDelete={()=>{
                    onDelete(id)
                }}/>
            </li>
        )
    })
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList