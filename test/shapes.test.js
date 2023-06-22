const { Triangle, Circle, Square } = require('../lib/shapes');

describe('Triangle', () => {
  test('render() method returns the SVG markup for a triangle with the given color', () => {
    const triangle = new Triangle('red');
    const expectedOutput = '<svg height="100" width="100">\n  <polygon points="50,0 100,100 0,100" fill="red" />\n</svg>';
    expect(triangle.render()).toBe(expectedOutput);
  });
});

describe('Circle', () => {
  test('render() method returns the SVG markup for a circle with the given color', () => {
    const circle = new Circle('blue');
  })
})
