import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import './ArtVersionDevelopmentTest.scss';
import { simpleAction } from '../../actions/simpleAction.js';
import Axios from 'axios';

const mapStateToProps = state => {
    return {
        test: state.simpleReducer.test,
    }
};

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
});

class ArtVersionDevelopmentTest extends Component {

    state = {
        persons: [],
        pull: [1,2,3,4,5],
        text:'',
        txtfull:'We Design Experiences'
    }

    componentDidMount = () => {
        setInterval(() => {

            const { text, txtfull } = this.state

            if (text.length < txtfull.length) {

                this.setState(({ text }) => ({

                    text: text + txtfull.charAt(text.length)

                }))

            }else{
                this.setState(({ text }) => ({

                    text: ''

                }))
            }
        }, 350)
    }

    newAction = async () => {
        this.props.history.push('/ADT')
    }

    otherAction = async () => {
        const { pull } = this.state
        Axios.get('https://jsonplaceholder.typicode.com/users?id='+pull[0]+'&id='+pull[1]+'&id='+pull[2]+'&id='+pull[3]+'&id='+pull[4]+'').then(res => {
                this.setState({ persons: res.data});
            });
            if(pull[0] === 1){
                this.setState({ pull: pull.map(function(item){
                    return item+5;})});
            }else{
                this.setState({ pull: pull.map(function(item){
                    return item-5;})});
            }
        }

    render = () => {

        return (

            <div className="adt-container">

                <div class='container containerTop'>
                    <div class="pic picTop"><div class='name nameTop'>Sky Clark</div><img src="../../pic1.jpg" alt="Sky Clark"></img></div>
                    <div class="pic picTop"><div class='name nameTop'>Katy Jones</div><img src="../../pic2.jpg" alt="Katy Jones"></img></div>
                    <div class="pic picTop"><div class='name nameTop'>Joe Smith</div><img src="../../pic3.jpg" alt="Joe Smith"></img></div>
                    <div class="pic picTop"><div class='name nameTop'>Amy Lee</div><img src="../../pic4.jpg" alt="Amy Lee"></img></div>
                    <div class="pic picTop"><div class='name nameTop'>Becky McBride</div><img src="../../pic7.jpg" alt="Becky McBride"></img></div>
                </div>

                <div class='container containerBottom'>
                    <div class="pic picBottom"><div class='name nameBottom'>Ashley West</div><img src="../../pic5.jpg" alt="Ashley West"></img></div>
                    <div class="pic picBottom"><div class='name nameBottom'>Jake Reeves</div><img src="../../pic6.jpg" alt="Jake Reeves"></img></div>
                    <div class="pic picBottom"><div class='name nameBottom'>Emily O'brien</div><img src="../../pic7.jpg" alt="Emily O'brien"></img></div>
                    <div class="pic picBottom"><div class='name nameBottom'>Justis Collins</div><img src="../../pic8.jpg" alt="Justis Collins"></img></div>
                    <div class="pic picBottom"><div class='name nameBottom'>Ben Greene</div><img src="../../pic9.jpg" alt="Ben Greene"></img></div>
                </div>

                <div class="person">

                    <div class="personIdHeader">ID</div>
                    <div class="personNameHeader">NAME</div>
                    <div class="personEmailHeader">EMAIL</div>

                    <div class="personId">
                        {this.state.persons.map(person => (
                            <p>{person.id}</p>
                        ))}
                    </div>
                    
                    <div class="personName">
                        {this.state.persons.map(person => (
                            <p>{person.name}</p>
                        ))}
                    </div>

                    <div class="personEmail">
                        {this.state.persons.map(person => (
                            <p>{person.email}</p>
                        ))}
                    </div>
                
                </div>

                <button class="btnAPI" onClick={this.otherAction}>GENERATE NAMES</button>

                <div class='text'>
                    <h1>{this.state.text}|</h1>
                </div>

            </div>
            
        );
    }

    componentDidUnmount
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtVersionDevelopmentTest);