import React,{PureComponent} from 'react';
import {Link} from 'react-router';
export default class Web extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Link to='home/web/aja'>aja</Link>
            </div>
        )
    }
}