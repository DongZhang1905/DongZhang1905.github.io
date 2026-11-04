import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const source = readFileSync(new URL('../public/analytics.js', import.meta.url), 'utf8');
function run({ off = false, dnt = '0', storageBlocked = false } = {}) {
  const calls = [], listeners = {};
  const store = new Map(off ? [['homepage-analytics-off', '1']] : []);
  const storage = { getItem: k => { if(storageBlocked) throw Error(); return store.get(k) || null; }, setItem: (k, v) => store.set(k, v) };
  const location = { origin: 'https://dongzhang1905.github.io', pathname: '/', hash: '' };
  vm.runInNewContext(source, { location, localStorage: storage, sessionStorage: storage, crypto: { randomUUID: () => 'a7c863b5-0c7e-45f4-8436-817a338221a3' }, navigator: { doNotTrack: dnt }, document: { referrer: 'https://www.google.com/' }, fetch: (url, options) => { calls.push({url, options, event: JSON.parse(options.body)}); return Promise.resolve({status:204}); }, window: { addEventListener: (type, fn) => listeners[type] = fn } });
  return { calls, listeners, location };
}
test('tracker records a load and section navigation in the same random session', () => {
  const {calls, listeners, location} = run();
  location.hash = '#research'; listeners.hashchange();
  assert.equal(calls.length, 2);
  assert.equal(calls[0].event.kind, 'page');
  assert.equal(calls[1].event.path, '/#research');
  assert.equal(calls[0].event.session, calls[1].event.session);
  assert.equal(calls[0].options.credentials, 'omit');
});
test('opt-out, DNT and blocked storage are handled without breaking the page', () => {
  assert.equal(run({off:true}).calls.length, 0);
  assert.equal(run({dnt:'1'}).calls.length, 0);
  assert.equal(run({storageBlocked:true}).calls.length, 1);
  const state = run();
  state.listeners['homepage-analytics-toggle']({detail:{off:true}});
  state.listeners.hashchange();
  assert.equal(state.calls.length, 1);
});
