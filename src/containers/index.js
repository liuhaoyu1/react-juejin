import React,{PureComponent} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
export default class App extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container">
                <div>
                    <Link to='/home'>首页</Link>
                    <Link to='/booklet'>小册</Link>  
                    <Link to='/source'>资源</Link>    
                </div>
                <div className="container1">
                    {this.props.children}
                </div>
            </div>
        )
    }
}