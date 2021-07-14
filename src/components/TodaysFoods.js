import React, { Component } from 'react';

class TodaysFoods extends Component {
  render() {
    const { foods, handleDeleteTodays } = this.props;
    return (
      <div>
        <h1>Today's Foods</h1>
        {foods.map((food) => {
          return (
            <div>
              <form
                onSubmit={(event) => {
                  handleDeleteTodays(event);
                }}
                noValidate
                autoComplete="off"
              >
                <div className="box">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src={food.image} alt="food" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>{food.name}</strong> <br />
                          <small>{food.calories} cal</small>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <button className="button is-info" type="submit">
                  delete
                </button>
              </form>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TodaysFoods;
