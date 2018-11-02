import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import App from './layout/App';
import Login from './pages/login';
import NotFount from './pages/404';
import './style/common.css';
import registerServiceWorker from './registerServiceWorker';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <LocaleProvider locale={zhCN}>
                    <Switch>
                        <Route path="/home/:id" component={App}/>
                        <Route exact path="/login" component={Login}/>
                        <Route path="/" render={() => {
                            return <Redirect to="/home/index"/>
                        }}/>
                        <Route component={NotFount}/>
                    </Switch>
                </LocaleProvider>
            </Router>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
