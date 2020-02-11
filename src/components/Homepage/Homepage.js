import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import './Homepage.scss';
import { simpleAction } from '../../actions/simpleAction.js';

const mapStateToProps = state => {
    return {
        test: state.simpleReducer.test,
    }
};

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})

class Homepage extends Component {

    componentDidMount = () => {

    }

    newAction = async () => {
        this.props.history.push('/ADT')
    }

    render = () => {
        return (
            <div className="homepage-container">
                <h1>ArtVersion Development Test</h1>
                <p>Use this page to help you construct the component you will be using for your development test if you are not familiar with react.<br/>
                It contains everything you will need to complete this challenge.</p>
                <button onClick={this.newAction}>Test Page</button>
            </div>
        );
    }

    componentDidUnmount
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);