const pigLatin = require('./index-START');

test('pigLatin is a function', () => {
  expect(typeof pigLatin).toEqual('function');
});

test('returns pigLatin value for pig', () => {
  expect(pigLatin('pig')).toEqual("igpay");
});

test('returns pigLatin value for glove', () => {
    expect(pigLatin('glove')).toEqual("oveglay");
});

test('returns pigLatin value for explain', () => {
    expect(pigLatin('explain')).toEqual("explainway");
});
