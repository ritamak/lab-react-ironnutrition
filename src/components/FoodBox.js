import React, { Component } from 'react';
import FoodDetails from './FoodDetails';
import AddForm from './AddForm';

class FoodBox extends Component {
  state = {
    showForm: false,
  };

  handleClick = () => {
    this.setState({
      showForm: true,
    });
  };

  handleAddFood = (event) => {
    event.preventDefault();
    this.setState({
      showForm: false,
    });
    let newFood = {
      name: event.target.name.value,
      calories: +event.target.calories.value,
      image: event.target.image.value,
      quantity: 0,
    };

    this.props.onAddNewFood(newFood);
    console.log('new food added');
    console.log(newFood);
    console.log(event.target);
    console.log(newFood.name);
    console.log(newFood.calories);
  };
  render() {
    const { foods, handleAddTodays } = this.props;
    const { showForm } = this.state;

    return (
      <div>
        {showForm ? (
          <AddForm onAddFood={this.handleAddFood} />
        ) : (
          <button onClick={this.handleClick}>Show Form</button>
        )}
        {foods.map((food, i) => {
          return (
            <FoodDetails
              key={i}
              myFood={food}
              handleAddTodays={handleAddTodays}
            />
          );
        })}
      </div>
    );
  }
}

export default FoodBox;
