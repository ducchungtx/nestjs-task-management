function addNumbers(num1, num2) {
  return num1 + num2;
}

describe('addNumbers', () => {
  it('should add two numbers', () => {
    const result = addNumbers(1, 2);
    expect(result).toEqual(3);
  });
});
