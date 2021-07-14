import React, { Component } from 'react';

class FoodDetails extends Component {
  render() {
    const { myFood, handleAddTodays } = this.props;
    return (
      <form
        onSubmit={(event) => {
          handleAddTodays(event, myFood);
        }}
        noValidate
        autoComplete="off"
      >
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={myFood.image} alt="food" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{myFood.name}</strong> <br />
                  <small>{myFood.calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button className="button is-info" type="submit">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </form>
    );
  }
}

export default FoodDetails;
