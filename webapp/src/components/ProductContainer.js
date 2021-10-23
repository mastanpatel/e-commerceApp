import React from 'react';
import ProductRow from './ProductRow';
import './ProductContainer.css';

class ProductContainer extends React.Component {
  render() {
  const rows = [];
  let lastCategory = null;


  this.props.products.forEach((products) => {
    if (products.category !== lastCategory) {
      // rows.push(
      //   <ProductCategoryRow
      //     category={product.category}
      //     key={product.category} />
      // );
    }
    rows.push(
      <ProductRow
        product={products}
        key={products.title} />
    );
    lastCategory = products.category;
  });
  
  return (
    <div className="product-container">
      <div className="rows-container">{rows}</div>
    </div>
  );
 }
}

export default ProductContainer;