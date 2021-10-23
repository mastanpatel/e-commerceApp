import React from 'react';
import './Card.css';

class Card extends React.Component {
  render(){
    return (
      <div class="card-container">
        <div><img src={this.props.product.image} alt="Girl in a jacket" width="150" height="200" /></div>
        <div>
          <a href="www.google.com">
            <span class="product-title">{this.props.product.title}</span>
          </a>
        </div>
        <div class="product-desc">{this.props.product.description}</div>
        <div>{this.props.product.price}<span>$</span></div>
      </div>
    );
   }
  }


export default Card;