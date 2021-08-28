import { forEach } from './../methods/forEach';
import { every } from './../methods/every';
import { some } from './../methods/some';
import { find } from './../methods/find';
import { map } from './../methods/map';
import { filter } from './../methods/filter';
import { reduce } from './../methods/reduce';

const reducerCallback = (acc: number, currValue: number) => acc + currValue;
const filterCallback = (itm: number) => itm > 10;
const mapCallback = (itm: number) => itm * 10;

test('test reduce array method', () => {
    expect(reduce([5, 1, 2, 3, 4], reducerCallback)).toBe(15);
});
test('test filter array method', () => {
    expect(filter([5, 1, 2, 3, 4], filterCallback)).toEqual([]);
    expect(filter([5, 1, 22, 3, 4], filterCallback)).toEqual([22]);
});
test('test map array method', () => {
    expect(map([5, 1, 2, 3, 4], mapCallback)).toEqual([50, 10, 20, 30, 40]);
});
test('test find array method', () => {
    expect(find([5, 11, 2, 3, 4], filterCallback)).toBe(11);
});
test('test some array method', () => {
    expect(some([5, 1, 2, 3, 4], filterCallback)).toBe(false);
    expect(some([5, 1, 22, 3, 4], filterCallback)).toBe(true);
});
test('test every array method', () => {
    expect(every([25, 11, 22, 23, 4], filterCallback)).toBe(true);
    expect(every([25, 11, 2, 23, 4], filterCallback)).toBe(false);
});
test('test forEach array method', () => {
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
});
