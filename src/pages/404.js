import React, { Component } from 'react';
import style from '../style/error.less';

class Notfound extends Component {

  render() {
    return (
        <div className={style.error}>
            <div className={style.error_container}>
                <img className={style.error_left} src="https://f.weijinshi.com/public/front/images/http-404.png" alt=""/>
                <div className={style.error_right}>
                    <p className={style.error_txt}>
                        非常遗憾，您访问的页面穿越了，<br/>
                        我们正在努力找回，错误代码404。<br/>
                        建议您联系客服 <br/>
                        <span className={style.error_tel}>400-800-5237</span> <br/>
                    </p>
                    <a href="javascript:window.location.reload();" className={style.error_refresh}>刷新试试</a>
                </div>
            </div>
        </div>
    );
  }
}

export default Notfound;
