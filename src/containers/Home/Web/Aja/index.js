import React,{PureComponent} from 'react';
import {Link} from 'react-router';
export default class Aja extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                home
                <br />
                <Link to='home/web/aja'>aja</Link>
                <br />
                
                <Link to='home/web/a'>a</Link>
            </div>
        )
    }
}