import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchbox/search-box.component';
class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };

        // this.handleChange = this.handleChange.bind(this); if not arrow function
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value });
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <SearchBox placeholder='Search Monster' handleChange={this.handleChange} />
                <CardList monsters={filteredMonster} />
            </div>
        );
    }
}

export default App;