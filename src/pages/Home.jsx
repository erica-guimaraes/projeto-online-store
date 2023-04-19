import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';

class Home extends Component {
  render() {
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoryList />
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          <button>carrinho</button>
        </Link>
      </div>
    );
  }
}

export default Home;
