import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../PostStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm";
import "./App.css"
import React from "react";

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {label: "React haqida", important: false, id: 1},
                {label: "Js haqida", important: false, id: 2},
                {label: "Python haqida", important: false, id: 3}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)

        this.maxId = 4
    }

    deleteItem(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after]
            
            return{
                data: newArr
            }
        })
    }

    addItem(body){
        const newItem ={
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data})=> {
            const newArr = [...data, newItem]
            return{
                data: newArr
            }
        })
    }

    render(){
        return(
        <div className="app">
        <AppHeader/>
        <div className="search-panel d-flex ">
            <SearchPanel />
            <PostStatusFilter />
        </div>
            <PostList posts={this.state.data} onDelete={this.deleteItem}/>
            <PostAddForm  onAdd={this.addItem}/>
        </div>
        )
    }
}