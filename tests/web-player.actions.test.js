import sayHello from '../src/web-player/web-player.actions'

test('pass tunnes return "Hello tunnes Im web-player module."', () => {
  expect(sayHello('tunnes')).toBe('Hello tunnes, Im web-player module.')
})
