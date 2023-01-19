import { Component } from 'react';
import { render } from 'react-dom';
import './Card-list-style.css';
import CardComponent from './card-container'
class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
            const {monsters} = this.props
          return (
           <CardComponent monster = {monster}/>
          );
        })}
      </div>
    );
  }
}
export default CardList;
