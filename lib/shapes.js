class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('render() method must be implemented in the child class.');
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<svg height="100" width="100">
        <polygon points="50,0 100,100 0,100" fill="${this.color}" />
      </svg>`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<svg height="100" width="100">
        <circle cx="50" cy="50" r="50" fill="${this.color}" />
      </svg>`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<svg height="100" width="100">
        <rect width="100" height="100" fill="${this.color}" />
      </svg>`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  