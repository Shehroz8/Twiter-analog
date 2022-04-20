import PostListitem from "../PostListitem";
import "./PostList.css"

const PostList =({posts})=>{
    const elements = posts.map((item)=>{
        const {id, ...itemProps} = item
        return(
            <li key={item.id} className="list-group">
                <PostListitem {...itemProps}/>
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