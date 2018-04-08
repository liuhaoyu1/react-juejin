import React,{PureComponent} from 'react';
import {Router,Route,IndexRoute} from 'react-router'

//组件
import App from '../src/containers'
import Home from '../src/containers/Home'
import Booklet from '../src/containers/Booklet'
import Source from '../src/containers/Source'

//home
import Web from '../src/containers/Home/Web'
export default class RouterMap extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
           return (
                <Router history={this.props.history}>
                   <Route path="/" component={App}>
                        <IndexRoute component = {Home} />
                        <Route path='/home'>
                            <IndexRoute component = {Home} />
                            {/* <Route path='web' component={Web}></Route> */}
                        </Route>
                        <Route path='booklet'>
                            <IndexRoute component = {Booklet} />
                        </Route>
                        <Route path='source'>
                            <IndexRoute component = {Source} />
                        
                        </Route>
                   </Route>
                </Router>
           )
    }
}