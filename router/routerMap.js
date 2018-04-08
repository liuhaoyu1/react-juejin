import React,{PureComponent} from 'react';
import {Router,Route,IndexRoute} from 'react-router'

//组件
import App from '../src/containers'
import Home from '../src/containers/Home'
import Booklet from '../src/containers/Booklet'
import Source from '../src/containers/Source'

//home
import Web from '../src/containers/Home/Web'
//home -web
import Aja from '../src/containers/Home/Web/Aja'
import A from '../src/containers/Home/Web/Aja/Ajax'
export default class RouterMap extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
           return (
                <Router history={this.props.history}>
                   <Route path="/" component={App}>
                        <IndexRoute component = {Home} />
                        <Route path='home'>
                            <IndexRoute component = {Home} />
                            <Route path='web'>
                                <IndexRoute component = {Web} />
                                <Route path='aja' component = {Aja} >
                                     {/* <IndexRoute component = {Aja} /> */}
                                </Route>
                                <Route path='a' component = {A}></Route>
                            </Route>
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