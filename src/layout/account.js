import React, { Component } from 'react';
import {Redirect,Route,Switch} from 'react-router-dom'
import style from '../style/account.less';
import AccountTitle from '../component/accountTitle'
import Lend from "../pages/account/lend";

class Account extends Component {
  render() {
    return (
        <div className={style.account}>
            <AccountTitle/>
            <Switch>
                <Route exact path="/home/account/lend" component={Lend}/>
                <Route path="/home/account/:id" render={() => {
                    return <Redirect to="/home/account/lend"/>
                }}/>
            </Switch>
        </div>
    );
  }
}

export default Account;
