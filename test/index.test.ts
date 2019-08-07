import isEmpty from '../src';

describe('isEmpty.useEntries', () => {
  it('returns true', () => {
    expect(isEmpty.useEntries({})).toEqual(true);
  });
  it('returns false', () => {
    expect(isEmpty.useEntries({one:1})).toEqual(false);
  });
});

describe('isEmpty.useEntriesWOC', () => {
  it('returns true', () => {
    expect(isEmpty.useEntriesWOC({})).toEqual(true);
  });
  it('returns false', () => {
    expect(isEmpty.useEntriesWOC({one:1})).toEqual(false);
  });
});

describe('isEmpty.useKeys', () => {
  it('returns true', () => {
    expect(isEmpty.useKeys({})).toEqual(true);
  });
  it('returns false', () => {
    expect(isEmpty.useKeys({one:1})).toEqual(false);
  });
});

describe('isEmpty.useKeysWOC', () => {
  it('returns true', () => {
    expect(isEmpty.useKeysWOC({})).toEqual(true);
  });
  it('returns false', () => {
    expect(isEmpty.useKeysWOC({one:1})).toEqual(false);
  });
});

describe('isEmpty.useForIn', () => {
  it('returns true', () => {
    expect(isEmpty.useForIn({})).toEqual(true);
  });
  it('returns false', () => {
    expect(isEmpty.useForIn({one:1})).toEqual(false);
  });
});
