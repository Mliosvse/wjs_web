import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Icon} from 'antd';
import style from '../style/wjsheader.less'
import logo from '../images/logo.png'

class WjsHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'index',  //当前选中菜单
            scrollTop: 0,    //页面滚动高度
            isLogin: false,  //是否已经登录
        };
    }

    componentDidMount() {
        this._isMounted = true;
        //页面滚动监听
        document.addEventListener('scroll', this.listenScroll);
        window.localStorage.setItem('userName', '181****8583');
        this.setState({isLogin: true});
    }

    //组件将被卸载
    componentWillUnmount() {
        this._isMounted = false;
    }

    listenScroll = () => {
        if (!this._isMounted) return;
        this.setState({
            scrollTop: this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        });

    }
    logout = () =>{
        this.setState({
           isLogin:false
        });
    }

    render() {
        const {active, scrollTop, isLogin} = this.state;
        let userItem = <li className={style.hr_gapLine}><a href="/loginAndRegiste/login.html">你好，请登录</a></li>;
        let secondItem = <li className={style.hr_gapLine}><a href="javascript:void(0);">注册</a></li>;
        if (isLogin) {
            userItem = <li className={style.hr_gapLine}><a href="javascript:void(0);">{localStorage.userName}</a></li>;
            secondItem = <li className={style.hr_gapLine}><a href="javascript:void(0);" onClick={this.logout}>退出</a></li>;
        }
        return (
            <div className={style.wjsheader}>
                <div className={style.wjsheader_top}>
                    <div className={style.wjsheaderT_left}>
                        <p>客服电话：4008-690-611（工作日：9：00～18：00）</p>
                        <p>微金石客服服务群：811381890</p>
                    </div>
                    <ul className={style.wjsheaderT_right}>
                        <li><a href="javascript:void(0);">出借人教育</a></li>
                        <li><a href="javascript:void(0);">新手指导</a></li>
                        <li><a href="javascript:void(0);">帮助中心</a></li>
                        <li><a href="javascript:void(0);">消息中心</a></li>
                        {secondItem}
                        {userItem}
                        <li>
                            <a href="javaScript:void(0)">
                                <span className={style.iphone}></span>
                                移动客户端
                                <div className={style.qrcode}>
                                    <i></i>
                                    <img src="https://twjs1.weijinshi.com/public/front/images/qr-app-download.png" alt=""/>
                                    <p>App下载</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.wjsheader_bottom}>
                    <div className={style.wjsheaderB_content}>
                        <img src={logo} alt=""/>
                        <div className={style.wjsbc_menuAccount}>
                            <div><Icon className={style.wjsbc_icon} type="user"/> 我的账户</div>
                        </div>
                        <ul className={style.wjshbc_menu}>
                            <li className={active === 'index' ? style.active : ''}><a href="javascript:void(0);">首页</a></li>
                            <li className={active === 'send' ? style.active : ''}><Link to='/login'>我要出借</Link></li>
                            <li className={active === 'information' ? style.active : ''}><a href="javascript:void(0);">信息披露</a></li>
                            <li className={active === 'safe' ? style.active : ''}><a href="javascript:void(0);">安全保障</a></li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`${style.wjsheader_bottom} ${style.wjsheader_fixedH} ${scrollTop > 160 ? style.wjsheader_fixedS : ''}`}>
                    <div style={{height: '17px'}}></div>
                    <div className={style.wjsheaderB_content}>
                        <img src={logo} alt=""/>
                        <div className={style.wjsbc_menuAccount}>
                            <div><Icon className={style.wjsbc_icon} type="user"/> 我的账户</div>
                        </div>
                        <ul className={style.wjshbc_menu}>
                            <li className={active === 'index' ? style.active : ''}><a href="javascript:void(0);">首页</a></li>
                            <li className={active === 'send' ? style.active : ''}><a href="javascript:void(0);">我要出借</a></li>
                            <li className={active === 'information' ? style.active : ''}><a href="javascript:void(0);">信息披露</a></li>
                            <li className={active === 'safe' ? style.active : ''}><a href="javascript:void(0);">安全保障</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(WjsHeader);
