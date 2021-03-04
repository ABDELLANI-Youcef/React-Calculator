import calculate from '../calculate';

describe('The user can add equation correctly', () => {
  test('should write 1 in next', () => {
    const firstState = { total: null, operation: null, next: null };
    const secondState = calculate(firstState, '1');
    expect(secondState.next).toBe('1');
  });

  test('should update next from 1 to 11', () => {
    const firstState = { total: null, operation: null, next: '1' };
    const secondState = calculate(firstState, '1');
    expect(secondState.next).toBe('11');
  });

  test('should move next context to total and update the operation', () => {
    const firstState = { total: null, operation: null, next: '1' };
    const secondState = calculate(firstState, '+');
    expect(secondState.next).toBeNull();
    expect(secondState.total).toEqual('1');
    expect(secondState.operation).toEqual('+');
  });

  test('should add the second operator in next attribut', () => {
    const firstState = { total: '1', operation: '+', next: null };
    const secondState = calculate(firstState, '1');
    expect(secondState.next).toBe('1');
    expect(secondState.total).toEqual('1');
    expect(secondState.operation).toEqual('+');
  });

  test('should add the second operation in operation attribut', () => {
    const firstState = { total: '1', operation: '+', next: '1' };
    const secondState = calculate(firstState, '+');
    expect(secondState.next).toBeNull();
    expect(secondState.total).toEqual('2');
    expect(secondState.operation).toEqual('+');
  });

  test('should let the user enter a negative number', () => {
    const firstState = { total: null, operation: null, next: null };
    let secondState = calculate(firstState, '-');
    expect([secondState.next, secondState.total, secondState.operation]).toEqual(['-', null, null]);
    secondState = calculate(secondState, '1');
    expect([secondState.next, secondState.total, secondState.operation]).toEqual(['-1', null, null]);
  });

  test('should let the user multiply by a negative number', () => {
    const firstState = { total: '1', operation: 'X', next: null };
    let secondState = calculate(firstState, '-');
    expect([secondState.next, secondState.total, secondState.operation]).toEqual(['-', '1', 'X']);
    secondState = calculate(secondState, '1');
    expect([secondState.next, secondState.total, secondState.operation]).toEqual(['-1', '1', 'X']);
  });

  test('should let the user divide by a negative number', () => {
    const firstState = { total: '1', operation: '÷', next: null };
    let secondState = calculate(firstState, '-');
    expect([secondState.next, secondState.total, secondState.operation]).toEqual(['-', '1', '÷']);
    secondState = calculate(secondState, '1');
    expect([secondState.next, secondState.total, secondState.operation]).toEqual(['-1', '1', '÷']);
  });
});

describe('The particular operations', () => {
  test('should make all the attributes null', () => {
    const firstState = { total: '1', operation: '+', next: '1' };
    const secondState = calculate(firstState, 'AC');
    expect(secondState.next).toBeNull();
    expect(secondState.total).toBeNull();
    expect(secondState.operation).toBeNull();
  });

  test('should should switch the sign of the next and total attribute', () => {
    const firstState = { total: '1', operation: '+', next: '1' };
    const secondState = calculate(firstState, '+/-');
    expect(secondState.next).toBe('-1');
    expect(secondState.total).toEqual('-1');
    expect(secondState.operation).toEqual('+');
  });
});

describe('The arithmitic operations', () => {
  test('should make addition correctly', () => {
    const firstState = { total: '1', operation: '+', next: '1' };
    const secondState = calculate(firstState, '=');
    expect(secondState.total).toEqual('2');
  });

  test('should make addition correctly 2', () => {
    const firstState = { total: '-1', operation: '+', next: '1' };
    const secondState = calculate(firstState, '=');
    expect(secondState.total).toEqual('0');
  });

  test('should make substraction correctly', () => {
    const firstState = { total: '1', operation: '-', next: '1' };
    const secondState = calculate(firstState, '=');
    expect(secondState.total).toEqual('0');
  });

  test('should make substraction correctly 2', () => {
    const firstState = { total: '-1', operation: '-', next: '1' };
    const secondState = calculate(firstState, '=');
    expect(secondState.total).toEqual('-2');
  });

  test('should make multiplication correctly', () => {
    const firstState = { total: '1', operation: 'X', next: '9' };
    const secondState = calculate(firstState, '=');
    expect(secondState.total).toEqual('9');
  });

  test('should make multiplication correctly 2', () => {
    const firstState = { total: '2', operation: 'X', next: '-9' };
    const secondState = calculate(firstState, '=');
    expect(secondState.total).toEqual('-18');
  });

  test('should make division correctly', () => {
    const firstState = { total: '2', operation: '÷', next: '5' };
    const secondState = calculate(firstState, '=');
    expect(secondState.total).toEqual('0.4');
  });

  test('should make division correctly 2', () => {
    const firstState = { total: '2', operation: '÷', next: '-5' };
    const secondState = calculate(firstState, '=');
    expect(secondState.total).toEqual('-0.4');
  });

  test('should make percentage operation correctly', () => {
    const firstState = { total: '17', operation: '%', next: '150' };
    const secondState = calculate(firstState, '=');
    expect(secondState.total).toEqual('25.5');
  });

  test('should write a warning when trying to divide by zero', () => {
    const firstState = { total: '1', operation: '÷', next: '0' };
    const secondState = calculate(firstState, '=');
    expect(secondState.total).toEqual('ERROR, DIVISION BY ZERO');
    expect(secondState.next).toBeNull();
    expect(secondState.operation).toBeNull();
  });

  test('should return -1=-1', () => {
    const firstState = { total: null, operation: null, next: '-1' };
    const secondState = calculate(firstState, '=');
    expect(secondState.total).toEqual('-1');
    expect(secondState.next).toBeNull();
    expect(secondState.operation).toBeNull();
  });

  test('should return 1=1', () => {
    const firstState = { total: null, operation: null, next: '1' };
    const secondState = calculate(firstState, '=');
    expect(secondState.total).toEqual('1');
    expect(secondState.next).toBeNull();
    expect(secondState.operation).toBeNull();
  });
});
