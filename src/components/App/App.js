import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../PostStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm";
import "./App.css"

const App = ()=>{

    const data =[
        {label: "React haqida", important: true, id: "qw"},
        {label: "Js haqida", important: false, id: "qa"},
        {label: "Python haqida", important: false, id: "qz"}
    ]

    return(
        <div className="app">
        <AppHeader/>
        <div className="search-panel d-flex ">
            <SearchPanel />
            <PostStatusFilter />
        </div>
            <PostList posts={data}/>
            <PostAddForm />
        </div>
    )
}

export default App;
