import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoryList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.handleGetCategories();
  }

  handleGetCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  };

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h1>Categorias</h1>
        <ul>
          {categories.map((i) => (
            <label key={ i.id } data-testid="category" htmlFor="category">
              <button name="category" type="radio">{i.name}</button>
            </label>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
