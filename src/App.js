import React from 'react';
import { Component } from 'react';
import './App.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import ArtVersionDevelopmentTest from './components/ArtVersion Development Test/ArtVersionDevelopmentTest';

import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

require('dotenv').config();

const mapStateToProps = state => {
    return {
        test: state.simpleReducer.test,
    }
};

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})

class App extends Component {

    componentDidMount = () => {
        
    }

    render = () => {
        return (
            <div className="App">
                <Router basename={'/av-dev-test'}>
                    <Route render={({ location }) => (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                classNames="fade"
                                timeout={300}
                            >
                                <Switch location={location}>
                                    <Route exact path="/" component={Homepage} />
                                    <Route path="/ADT" component={ArtVersionDevelopmentTest} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )}/>   
                </Router>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
