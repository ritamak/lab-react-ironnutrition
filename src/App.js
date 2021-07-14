//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJson from './foods.json';
import React, { Component } from 'react';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import TodaysFoods from './components/TodaysFoods';

class App extends Component {
  state = {
    foods: foodsJson,
    filteredFoods: foodsJson,
    todaysFoods: [],
  };

  handleAddTodays = (event, food) => {
    event.preventDefault();
    console.log('Add total works');
    let foodObj = {
      name: food.name,
      calories: food.calories,
      image: food.image,
    };
    this.setState({
      todaysFoods: [foodObj, ...this.state.todaysFoods],
    });
  };

  handleDeleteTodays = (event, food) => {
    event.preventDefault();
    console.log(event.target.name);
    this.setState({
      todaysFoods: [
        this.state.todaysFoods.filter(
          (food) => food.name !== event.target.name
        ),
      ],
    });
  };

  handleAddNewFood = (newFood) => {
    this.setState({
      foods: [newFood, ...this.state.foods],
      filteredFoods: [newFood, ...this.state.foods],
    });
    console.log('hello');
    console.log(this.state);
  };

  handleSearch = (event) => {
    let seachedFoods = event.target.value;
    const { foods } = this.state;

    let filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(seachedFoods.toLowerCase());
    });

    this.setState({
      filteredFoods: filteredFoods,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Food Nutrition by Ironhack</h1>
        <div class="columns">
          <div class="column">
            <Search onSearch={this.handleSearch} />
            <FoodBox
              foods={this.state.filteredFoods}
              handleAddTodays={this.handleAddTodays}
              onAddNewFood={this.handleAddNewFood}
            />
          </div>
          <div class="column">
            <TodaysFoods
              foods={this.state.todaysFoods}
              handleDeleteTodays={this.handleDeleteTodays}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
