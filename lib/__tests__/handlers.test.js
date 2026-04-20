const handlers = require('../handlers')

test('home page renders', () => {
    const req = {}
    const res = { render: jest.fn() }
    handlers.home(req, res)
    console.log('test')
    console.log(res.render.mock)
    expect(res.render.mock.calls[0][0]).toBe('home')
})