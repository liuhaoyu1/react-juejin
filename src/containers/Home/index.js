import React,{PureComponent} from 'react';
import {Link} from 'react-router';
export default class Home extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                home
                <Link to='home/web'>web</Link>
            </div>
        )
    }
}