import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
//import {robots} from './robots';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';



class App extends Component {
    constructor()
    {
        super();
        this.state={
            robots: [],
            searchfield: ''
        }
    console.log('constructor');
    }

    //not part of react, my own function
    onSearch = (event) => {
        this.setState({searchfield: event.target.value});
        console.log('onSearch');
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => {this.setState({robots:users})});
        console.log('componentDidMount');
    }

    //runs everytime state changes
    render() {
        const  {robots,searchfield}=this.state;
        const filterrobots=this.state.robots.filter(robots =>
            {
                return robots.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
            });
        console.log('render');
            if(robots.length === 0)
            {
               return <h1>LOADING...</h1>;
            }
            else {
                return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox onSearch={this.onSearch}/>
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist robots={filterrobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
                );
            }
        }
}

export default App;