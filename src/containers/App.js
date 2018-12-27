import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

//the search box, takes two objects, robots and searchfield
//searchfield accepts strings

//run constructor with empty array
class App extends Component {
    constructor(){
        super()
        this.state ={
            robots: [],
            searchfield: ''
    }
}

//updating state after we fetch
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }


//if there is anything relating to STATE, you have to do 'this.'
//also anytime you create your own method and not a pre built one, use
    //this syntax function = () =>{ }
//setState is a builtin function. You are changing value of state(searchfield) to what ever you are typing in
onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
    }


render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}
    
export default App;
