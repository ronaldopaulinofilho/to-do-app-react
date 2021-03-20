import React, { Component } from "react";
import "./style.css";
class ListOfCategories extends Component {

  constructor(){
    super();
    this.state = {categories:[]}
    this._newCategories = this._newCategories.bind(this);
  }
  componentDidMount(){
   this.props.categories.subscribe(this._newCategories);
  }

  componentWillUnmount(){ this.props.categories.unsubscribe(this._newCategories);
  }
  
  _newCategories(categories){
   this.setState({...this.state,categories})
  }

  _handleEventInput(e) {
    if (e.key === "Enter") {
      let categoryValue = e.target.value;
      this.props.addCategory(categoryValue);
    }
  }
  render() {
    return (
      <section className="list-categories">
        <ul className="list-categories_list">
          {this.state.categories.map((category, index) => {
            return (
              <li key={index} className="list-categories_item">
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="list-categories_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListOfCategories;
