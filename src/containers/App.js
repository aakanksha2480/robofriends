import React,{useState,useEffect} from 'react';
import Cardlist from '../components/Cardlist';
//import {robots} from './robots';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';



function App() {

    const [robots,setRobots] = useState([]);
    const [searchfield,setSearchfield] = useState('');

    //not part of react, my own function
    const onSearch = (event) => {
        setSearchfield(event.target.value);
        console.log('onSearch');
    }

    //runs everytime App() runs. When app renders - first paramter
    // Array as second argument
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(Response => Response.json())
            .then(users => {
                setRobots(users);
            });
         console.log('componentDidMount');
    },[]);

        const filterrobots=robots.filter(robots =>
            {
                return robots.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
            });
            if(robots.length === 0)
            {
               return <h1>LOADING...</h1>;
            }
            else {
                return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <button>Click me!</button>
                    <Searchbox onSearch={onSearch}/>
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist robots={filterrobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
                );
            }
};

export default App;