import React from 'react';
import Card from './Card';
import './ProductRow.css';

class ProductRow extends React.Component {

  render(){
    return (
      <div class="productrow-container">
        <Card product = {this.props.product}/>

      </div>
      );
    }
  }


export default ProductRow;