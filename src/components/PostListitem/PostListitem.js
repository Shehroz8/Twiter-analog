import React from "react";
import "./PostListitem.css"

export default class PostListitem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        }
        this.onImportant = this.onImportant.bind(this)
        this.onLike = this.onLike.bind(this)
    }

    onImportant(){
        this.setState(({important}) => ({important: !important}))
    }

    onLike(){
        this.setState(({like}) => ({like: !like}))
    }

    render() {

        const {label, onDelete} = this.props
        const {important, like} = this.state
        let classNames = "app-list-item d-flex justify-content-between"
        if (important){
            classNames += ' important'
        }

        if(like){
            classNames += ' like'
        }

        return(
            <ul className="app-list list-group">
                <li className={classNames}>
                <span className="app-list-item-label" onClick={this.onLike}>
                    {label}
                </span>
                    <div className="d-flex justify-content-center aligin-items-center">
                        <button type="button" className="btn-star btn-sm" onClick={this.onImportant}>
                            <i className="fa fa-star"></i>
                        </button>
                        <button  type="button" onClick={onDelete} className="btn-trash btn-sm">
                            <i className="fa fa-trash"></i>
                        </button>
                        <button>
                            <i className="fa fa-heart"></i>
                        </button>
                    </div>
                </li>
            </ul>
        )
    }
}