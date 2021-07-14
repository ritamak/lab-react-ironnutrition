import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Search extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <div>
        <div class="field has-addons">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Find a food"
              onChange={onSearch}
            ></input>
            <div class="control">
              <a class="button is-info">Search</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
