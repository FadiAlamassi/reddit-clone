const tape = require('tape');

tape('simple test', (t) => {
  t.equal(1, 1, '1 should equal 1');
  t.end();
});
