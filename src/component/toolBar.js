import React from 'react';
import { Icon } from 'antd';
import style from '../style/toolBar.less'

class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleBar:false,  //控制toolBar展开折叠
            scrollTop:0,      //页面滚动距离
        };
    }
    componentDidMount(){
        this._isMounted = true;
        //页面滚动监听
        document.addEventListener('scroll',this.listenScroll)
    }
    //组件将被卸载
    componentWillUnmount(){
        this._isMounted = false;
    }

    listenScroll = ()=>{
        if(!this._isMounted)return;
        this.setState({
            scrollTop:this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        });
    }
    //返回顶部
    goTop = ()=>{
        let timer = null;
        //设置定时器
        timer = setInterval(function(){
            //获取滚动条距离顶部的高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;  //同时兼容了ie和Chrome浏览器
            //减小的速度
            var isSpeed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
            //判断，然后清除定时器
            if (osTop === 0) {
                clearInterval(timer);
            }
        },30);
    }

    render() {
        const {toggleBar,scrollTop} = this.state;
        let toggleBtn = <div><Icon className={style.toolBar_leftIcon} type="caret-left" /><span>展开</span></div>;
        if(toggleBar){
            toggleBtn = <div><Icon className={style.toolBar_leftIcon} type="caret-right" /><span>收起</span></div>;
        }
        return (
            <div className={`${style.toolBar} ${toggleBar?style.toolBar_hide:''}`}>
                <img src="http://twjs1.weijinshi.com/public/front/images/rightbar-h2.png" alt=""/>
                <ul className={style.toolBar_list}>
                    <li className={style.toolBarL_logo}>
                        <img src="http://twjs1.weijinshi.com/public/front/images/rightbar-logo.png" alt=""/>
                    </li>
                    <li className={style.toolBarL_qq}>
                        <a href="http://wpa.qq.com/msgrd?v=3&uin=3502249611&site=qq&menu=yes" title='客服01'>在线咨询</a>
                    </li>
                    <li className={style.toolBarL_qq}>
                        <a href="http://wpa.qq.com/msgrd?v=3&uin=2691820399&site=qq&menu=yes" title='客服02'>在线咨询</a>
                    </li>
                    <li className={style.toolBarL_register}>
                        <a href=""><Icon className={style.toolBar_rgIocn} type="form" />注册</a>
                    </li>
                    <li className={style.toolBarL_wechat}>
                        <img src="http://twjs1.weijinshi.com/public/front/images/qr-paltform-wechat.png" alt=""/>
                        <p>关注微信 <br/>扫码了解</p>
                    </li>
                    <li className={`${scrollTop>200?style.toolBarL_gotop:style.toolBarL_gotopH}`}
                        onClick={()=>{this.goTop()}}>
                        <span className={style.toolBar_gotopIcon}></span>
                    </li>
                </ul>
                <div className={style.toolBar_contrlBtn} onClick={()=>{this.setState({toggleBar:!toggleBar});}}>
                    {toggleBtn}
                </div>
            </div>
        );
    }
}

export default ToolBar;
