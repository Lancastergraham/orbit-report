import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite("will", "dog", "fish", "lilly", true)).toBeTruthy();
  });
});
