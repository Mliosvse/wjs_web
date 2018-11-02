import React from 'react';
import style from '../style/wjsfooter.less'
//图片
import footerimg1 from '../images/footer-ewm1.jpg'
import footerimg2 from '../images/footer-ewm2.jpg'
import footerimg3 from '../images/footer-ewm3.png'
import beianbgs from '../images/beianbgs.png'
import fbpc1 from '../images/footer-msg-right1.png'
import fbpc2 from '../images/footer-msg-right2.png'
class WjsFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount(){

    }

    render() {
        return (
            <div className={style.wjsfooter}>
                <div className={style.wjsf_top}>
                    <div className={style.wjsft_left}>
                        <p>4008-690-611</p>
                        <p>服务时间：09：00～18：00</p>
                    </div>
                    <ul className={style.wjsft_mid}>
                        <li><a href="">平台介绍</a></li>
                        <li><a href="">股东背景</a></li>
                        <li><a href="">联系我们</a></li>
                        <li><a href="">帮助中心</a></li>
                    </ul>
                    <ul className={style.wjsft_right}>
                        <li>
                            <img src={footerimg1} alt=""/>
                            <span>服务号</span>
                        </li>
                        <li>
                            <img src={footerimg2} alt=""/>
                            <span>订阅号</span>
                        </li>
                        <li>
                            <img src={footerimg3} alt=""/>
                            <span>手机App下载</span>
                        </li>
                    </ul>
                </div>
                <div className={style.wjsf_bootom}>
                    <div className={style.wjsfb_container}>
                        <div className={style.wjsfbc_left}>
                            <p>©2016微金石 All rights reserved 杭州金石互联网金融服务有限公司 浙ICP备16002241号-1 ICP经营许可证编号：浙B2-20171040</p>
                            <p>
                                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602005938" rel="noopener noreferrer"  target="_blank">
                                    <img src={beianbgs} alt=""/>
                                </a>
                                浙公网安备 33010602005938号
                            </p>
                        </div>
                        <div className={style.wjsfbc_right}>
                            <a href="http://si.trustutn.org/info?sn=898170120000562566848&certType=4"><img src={fbpc1} alt=""/></a>
                            <a href="https://www.anquan.org/"><img src={fbpc2} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WjsFooter;
