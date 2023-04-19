import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  state = {
    nome: '',
    category: '',
    productsList: [],
  };

  handleClickBusca = async () => {
    const { nome, category } = this.state;
    const result = await getProductsFromCategoryAndQuery(category, nome);
    this.setState({
      productsList: result.results,
    });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      nome: value,
    });
  };

  render() {
    const { productsList } = this.state;
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          data-testid="query-input"
          type="text"
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          onClick={ this.handleClickBusca }
        >
          Buscar
        </button>
        <CategoryList />
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          <button>carrinho</button>
        </Link>
        {productsList.length === 0
          ? (<p>Nenhum produto foi encontrado</p>)
          : (productsList.map((product) => (
            <div data-testid="product" key={ product.id }>
              <p>{productsList.title}</p>
              <img src={ productsList.thumbnail } alt={ productsList.title } />
              <p>{productsList.price}</p>
            </div>
          )))}
      </div>
    );
  }
}

export default Home;
