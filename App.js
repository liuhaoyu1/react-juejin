import React,{Component} from 'react'
import {hashHistory} from 'react-router'
import RouterMap from './router/routerMap'
export default class App extends  Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            // <div>11</div>
            <RouterMap history={hashHistory}/>
        )
    }
}
