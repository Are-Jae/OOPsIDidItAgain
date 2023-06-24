class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render(text) {
      throw new Error('render() method must be implemented in the child class.');
    }
  }
  
  class Triangle extends Shape {
    render(text) {
      return `<svg height="100" width="100">
      <polygon points="50,0 100,100 0,100" fill="${this.color}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${text}</text>
    </svg>`;
    }
  }
  
  class Circle extends Shape {
    render(text) {
      return  `<svg height="100" width="100">
      <polygon points="50,0 100,100 0,100" fill="${this.color}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${text}</text>
    </svg>`;
    }
  }
  
  class Square extends Shape {
    render(text) {
      return  `<svg height="100" width="100">
      <polygon points="50,0 100,100 0,100" fill="${this.color}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${text}</text>
    </svg>`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  