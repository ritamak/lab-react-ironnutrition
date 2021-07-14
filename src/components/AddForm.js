import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class AddForm extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.onAddFood} noValidate autoComplete="off">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                label="Name"
              ></input>
            </div>
          </div>
          <div className="field">
            <label className="label">Calories</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="calories"
                label="Calories"
              ></input>
            </div>
          </div>
          <div className="field">
            <label className="label">Image Url</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="image"
                label="Image"
              ></input>
            </div>
          </div>
          <button type="submit">Insert</button>
        </form>
      </>
    );
  }
}

export default AddForm;
