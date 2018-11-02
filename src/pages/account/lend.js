import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import style from '../../style/lend.less';
import { Table, Divider, Tag } from 'antd';

class Lend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'wisdom',  //当前选中菜单
            //当前页
            currentPage: {
                wisdom:1,
            },
            columns: [
                {title: 'Name', dataIndex: 'name', key: 'name',},
                {title: 'Age', dataIndex: 'age', key: 'age',},
                {title: 'Address', dataIndex: 'address', key: 'address',},
                {title: 'Tags', key: 'tags', dataIndex: 'tags',},
                {title: 'Action', key: 'action', dataIndex: 'action',}],
            data: [
                {key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags:'developer', action:'developer',},
                {key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: 'loser', action:'developer',},
                {key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: 'teacher', action:'developer',},
                {key: '4', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: 'teacher', action:'developer',},
                {key: '5', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: 'teacher', action:'developer',},
                {key: '6', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: 'teacher', action:'developer',},
            ],
        };
    }
    //自定义分页
    itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a>上一页</a>;
        } if (type === 'next') {
            return <a>下一页</a>;
        }
        return originalElement;
    };
    //设置表格行样式
    setTableStyle = (record,index)=>{
        if(index%2!==0){
            return 'accountTableOdd';
        }else {
            return '';
        }
    };
    //页数变化回调
    pageChange = (page,pageSize) =>{
        let currentPage = this.state.currentPage;
        currentPage.wisdom = page;
        this.setState({
           currentPage
        });
    };

    render() {
        const {active} = this.state;
        const {columns,data,currentPage} = this.state;

        return (
            <div className={style.lend}>
                <ul className={style.menu}>
                    <li><a href="">自动投标</a></li>
                    <li><a href="">实物领取</a></li>
                    <li><a href="">我的转让</a></li>
                    <li><a href="">我的受让</a></li>
                    <li><a href="">我的借款</a></li>
                    <li><a href="">散标出借</a></li>
                    <li className={active==='wisdom'?style.active:''}><a href="">微智享</a></li>
                </ul>
                <Table
                    className={`${style.table} wjsTable`}
                    rowClassName={this.setTableStyle}
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        itemRender:this.itemRender,
                        hideOnSinglePage:true,
                        pageSize:5,
                        current:currentPage.wisdom,
                        onChange:this.pageChange,
                    }}/>
            </div>
        );
    }
}

export default Lend;
