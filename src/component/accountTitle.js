import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Icon,Progress,Upload, message} from 'antd';
import style from '../style/accountTitle.less'

class WjsHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'lend',  //当前选中菜单
            userName: 'qx18158868583',  //用户姓名
            safe:false,     //是否开通账户
            assetsbox:false,  //资产状态显示控制
            imageUrl:'http://twjs1.weijinshi.com/public/common/defaultUser.png',  //资产状态显示控制
        };
    }

    componentDidMount() {
        this._isMounted = true;
    }

    //组件将被卸载
    componentWillUnmount() {
        this._isMounted = false;
    }
    getBase64=(img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    beforeUpload=(file) =>{
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('图片大小需小于 2MB!');
        }
        return isLt2M;
    }

    handleChange = (info) => {
        console.log(info);
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
            }));
        }
    }

    render() {
        const {active,imageUrl,userName,safe,assetsbox} = this.state;
        let safeEl = <a href="">您尚未开通账户管理，立即开通</a>;
        if(safe){
            safeEl = <span>您已开通账户管理</span>;
        }
        return (
            <div className={style.content}>
                <div className={style.title}>
                    <ul className={style.menu}>
                        <li className={active==='index'?style.selectd:''}><a href="">账户首页</a></li>
                        <li className={active==='lend'?style.selectd:''}><a href="">借款出借</a></li>
                        <li><a href="">交易记录</a></li>
                        <li><a href="">会员信息</a></li>
                        <li><a href="">安全中心</a></li>
                        <li><a href="">我的奖励</a><i></i></li>
                        <li><a href="">我要借款</a></li>
                        <li><a href="">积分商场</a></li>
                    </ul>
                </div>
                <div className={`${style.userInfo} clearfix`}>
                    <div className={style.userImg}>
                        <Upload
                            accept=".jpg,.jpeg,.png,.gif"
                            name="imgFile"
                            listType="picture"
                            showUploadList={false}
                            action="/account/updatephoto"
                            beforeUpload={this.beforeUpload}
                            onChange={this.handleChange}
                        >
                            <img src={imageUrl} alt=""/>
                            <div className={style.shading}>更新头像</div>
                        </Upload>
                    </div>
                    <p className={style.name}>你好！<a href="">{userName}</a></p>
                    <div className={`${style.rank} toolTip`}>
                        <img src="http://ywjs.weijinshi.com/public/front/images/creditlevel1.png" alt=""/>
                        <span>信用等级：青铜</span>
                    </div>
                    <div className={style.safe}>
                        {safeEl}
                    </div>
                    <ul className={style.step}>
                        <li className='toolTip'><a href=""><span>实名认证</span></a></li>
                        <li className='toolTip'><a href=""><span>手机认证</span></a></li>
                        <li className='toolTip'><a href=""><span>邮箱认证</span></a></li>
                        <li className='toolTip'><a href=""><span>银行卡绑定</span></a></li>
                    </ul>
                    <div className={`${style.safeRank} custom`}>
                        <span>安全等级:</span>
                        <Progress size='small' percent={50} showInfo={false} strokeWidth={8} strokeColor='#5B71F9'/>
                    </div>
                    <a href="" className={`${style.bell} toolTip`}><i>2</i><span>消息</span></a>
                    <div className={style.qrcode}>
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=http://ywjs.weijinshi.com/wx/loginAndRegiste/register.html?recommendCode=024CF7EAA8DBC952067DD7FD1C143008" alt=''/>
                    </div>
                    <div className={style.signIn}>
                        <p className={style.integral}>当前积分：<span>8分</span></p>
                        <div className={style.edit}><i></i>已签</div>
                        <div className={`${style.assets} ${assetsbox?'':style.active}`}
                             onClick={()=>{this.setState({assetsbox:!assetsbox})}}>
                            <span>资产状态</span>
                            <i className={style.assetsIcon}></i>
                        </div>
                    </div>
                </div>
                <div className={`${style.assetsbox} ${assetsbox?'':style.assetsbox_hide}`}>
                    <div className={style.record}>
                        <div>可用余额 （参考）</div>
                        <p><i>0.00</i>元</p>
                        <span>你有 0 笔待回款资金</span>
                    </div>
                    <div className={style.record}>
                        <div>总收益 （参考）</div>
                        <p><i>0.00</i>元</p>
                        <span>你已成功投资 0 笔</span>
                    </div>
                    <table className={style.assetTable}>
                        <tbody>
                        <tr height="30">
                            <td>总资产（参考）</td>
                            <td>0.00元</td>
                            <td>我的奖励</td>
                            <td>0.00元</td>
                        </tr>
                        <tr height="30">
                            <td>可用（参考）</td>
                            <td>0.00元</td>
                            <td>冻结</td>
                            <td>0.00元</td>
                        </tr>
                        <tr height="30">
                            <td>待收（参考）</td>
                            <td>0.00元</td>
                            <td>待还</td>
                            <td>0.00元</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className={style.assetsBtn}>
                        <a href="">充值</a>
                        <a href="">提现</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(WjsHeader);
