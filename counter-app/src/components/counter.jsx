import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    prod: [
      {
        name: "beans",
        id: 1,
        price: 550,
        productinfo:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, fugit cum. Assumenda illo id labore inventore reiciendis dolore! Error temporibus quia labore facere neque autem culpa fuga minus, sunt dolor!",
      },
      {
        name: "rice",
        id: 2,
        price: 650,
        productinfo:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, fugit cum. Assumenda illo id labore inventore reiciendis dolore! Error temporibus quia labore facere neque autem culpa fuga minus, sunt dolor!",
      },
    ],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  //style for div that will hold each product
  productStyles = {
    borderColor: "lightblue",
    borderStyle: "solid",
    margin: 10,
    height: 200,
    overflow: "hidden",
  };

  productTitle = {
    margin: 10,
    fontSize: 25,
    fontWeight: "bold",
    float: "left",
    clear: "left",
  };

  productInfo = {
    width: 600,
    margin: 10,
    float: "left",
    clear: "left",
  };

  productButtons = {
    float: "right",
    margin: 30,
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {this.renderTags()}
        {this.renderProducts()}
      </div>
    );
  }

  renderProducts() {
    return (
      <React.Fragment>
        {this.state.prod.map((product) => (
          <div key={product.id} style={this.productStyles}>
            <span style={this.productTitle}>{product.name}</span>
            <span style={this.productInfo}>{product.productinfo}</span>
            <button style={this.productButtons}>Add to cart!</button>
          </div>
        ))}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
