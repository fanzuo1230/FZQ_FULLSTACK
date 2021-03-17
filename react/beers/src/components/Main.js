import React ,{ Component } from 'react';
import { Link }from 'react-router-dom';
import Header from './Header';
import List from './List';
import Loader from './Loader';
import Item  from './Item';
export default class Main extends Component{
    constructor(){
        super()
        this.state={
            isLoading:true
        }
    }
    render(){
        return(
            <div>
               {/* 首页  组件化 */}
               <Header siteName=" Fire Xuan !"/>
               <Loader />
               <List />
               <Item />
            </div>
        )
    }
}