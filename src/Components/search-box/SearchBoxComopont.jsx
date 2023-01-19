import { Component } from 'react';
import './SearcBoxComponet.css';

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}
export default SearchBox;
