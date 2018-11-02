import React, {Component} from 'react';
import {Switch, Redirect, Route} from 'react-router-dom'
import WjsHeader from '../component/wjsHeader';
import WjsFooter from '../component/wjsFooter';
import ToolBar from '../component/toolBar';
import Wplan from "../pages/wplan";
import Index from "../pages/index";
import Account from "../layout/account";

class App extends Component {
    render() {
        return (
            <div>
                <WjsHeader></WjsHeader>
                <Switch>
                    <Route exact path="/home/index" component={Index}/>
                    <Route exact path="/home/account/:id" component={Account}/>
                    <Route exact path="/home/wplan" component={Wplan}/>
                    <Route path="/home/:id" render={() => {
                        return <Redirect to="/home/index"/>
                    }}/>
                </Switch>
                <ToolBar/>
                <WjsFooter></WjsFooter>
            </div>

        );
    }
}

export default App;
