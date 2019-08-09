import {CapitalizePipe} from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('provides capitalization for every word', () => {
    expect(pipe.transform('hello world', 'hello world')).toBe('Hello World');
  });


  it('shouldn\'t touch numbers', () => {
    expect(pipe.transform('1', 'hello world')).toBe('1');
  });

  it('shouldn\'t touch empthy stream', () => {
    expect(pipe.transform('', 'hello world')).toBe('');
  });
});
