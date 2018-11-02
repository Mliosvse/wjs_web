import React, {Component} from 'react';
import {Carousel} from 'antd';
import myHttp from '../utils/request';
import style from '../style/index.less';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //banner轮播图集合
            bannerList: [
                {
                    href: 'http://www.weijinshi.com/information/informationdetail.html?id=310',
                    src: 'https://f.weijinshi.com/myoss/data/B2F9502DE3CA41D75CC7B8A2A9E9DB2D.jpg'
                },
                {
                    href: 'https://www.weijinshi.com/information/records.html',
                    src: 'https://f.weijinshi.com/myoss/data/7432FCEF56870D63C3CC33DB5BCA4D7B.png'
                },
                {
                    href: 'http://www.weijinshi.com/activity/liveReview.html',
                    src: 'https://f.weijinshi.com/myoss/data/C35ADE17937FD9C66A6FADFEF0AC35A7.png'
                },
                {
                    href: 'https://www.weijinshi.com/activity/notice.html',
                    src: 'https://f.weijinshi.com/myoss/data/9EBD15E47081D9B8268C0D94DC86EB40.jpg'
                },
                {
                    href: 'https://www.weijinshi.com/information/invite.html',
                    src: 'https://f.weijinshi.com/myoss/data/7DD90CE5B60DE095BC9BD4798B2E3870.png'
                },
            ],
            //合作机构
            cooperating:[
                {
                    title:'网贷之家',
                    src:'https://f.weijinshi.com/myoss/data/7EFF48243FF905640E2BD9E7223F0A27',
                    href:'https://www.wdzj.com/'
                },
                {
                    title:'网贷天眼',
                    src:'https://f.weijinshi.com/myoss/data/2126EF9E51E5C4F683E63E82710EB9F5',
                    href:'https://www.p2peye.com/'
                },
                {
                    title:'阿里云',
                    src:'https://f.weijinshi.com/myoss/data/9E5D53A4E9D9C8367D5E5829C2AA4B37',
                    href:'https://www.aliyun.com/'
                },
                {
                    title:'君安世纪律师事务所',
                    src:'https://f.weijinshi.com/myoss/data/FDF2428A9CA7566FA7D4052C53C81AE7',
                    href:'http://www.junanlawyer.com/'
                },
                {
                    title:'中国电子认证服务产业',
                    src:'https://f.weijinshi.com/myoss/data/B30E3ADAC41491BF61165B9598EB00DC',
                    href:'http://www.ceaia.org.cn/'
                },
                {
                    title:'杭州银行',
                    src:'https://f.weijinshi.com/myoss/data/811B6C97C6DC8DB33CFFF21CE43CF04B',
                    href:'http://www.hzbank.com.cn/'
                },
                {
                    title:'视科传媒',
                    src:'https://f.weijinshi.com/myoss/data/83657BADF32849587E95D7979E737DC7',
                    href:'http://sk.seecomedia.com/'
                },
                {
                    title:'新浪支付',
                    src:'https://f.weijinshi.com/myoss/data/5570FA198555172390046114DBEC0CCC',
                    href:'https://pay.sina.com.cn/'
                },
                {
                    title:'修正健康饮品',
                    src:'https://f.weijinshi.com/myoss/data/2170E993223BE58A99AE99D6C3C1B5D4',
                    href:'http://www.xzjkyp.com/'
                },
            ],
            //默认图片地址
            defaultPic:'http://twjs1.weijinshi.com/public/common/default.jpg',
        };
    }
    //获取banner轮播组件
    setCarouselRef = el => {
        this.carouselRef = el;
    };
    //下一张轮播
    next = () => {
        if (this.carouselRef) this.carouselRef.next();
    }
    //上一张轮播
    prev = () => {
        if (this.carouselRef) this.carouselRef.prev();
    }
    componentDidMount() {
        myHttp.post('/v1/data',{api:'banners'}).then((res)=>{

        })
    }

    render() {
        const {bannerList,cooperating,defaultPic} = this.state;
        //合作伙伴轮播配置参数
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 6,
            autoplay: true,
            autoplaySpeed: 2000
        };
        const listItems = bannerList.map((item,index) =>
            <div className={style.bannerItem} key={index}>
                <a href={item.herf}><img className={style.bannerImg} src={item.src} alt=""/></a>
            </div>
        );
        const cooperate = cooperating.map((item,index)=>
            <div className={style.cooperateItem} key={index}>
                <a href={item.href}>
                    <img className={style.cooperateImg} src={item.src} target="_blank" title={item.title} onError={()=>{defaultPic}} alt=''/>
                </a>
            </div>
        );
        return (
            <div className={style.home}>
                <div className={style.banner}>
                    <Carousel ref={this.setCarouselRef} className={style.carousel} autoplay>
                        {listItems}
                    </Carousel>
                    <span className={`${style.btnSpan} ${style.preBtn}`} onClick={this.prev}></span>
                    <span className={`${style.btnSpan} ${style.nextBtn}`} onClick={this.next}></span>
                </div>
                <div className={'roateInUpLeft'} style={{fontSize:'28px',width:'180px',height:'50px'}}>
                    animate
                </div>
                <div className={style.cooperate}>
                    <h2>合作机构</h2>
                    <Carousel className={style.cooperateBox} {...settings}>
                        {cooperate}
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Index;
