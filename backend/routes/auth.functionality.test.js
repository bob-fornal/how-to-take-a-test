const db = require('../model');

const { register } = require('./auth.functionality');

describe('Auth Functionality', () => {
  it('expect "register" to return 400 and message if missing data', async () => {
    let responseStatus = -1;
    let responseDescription = {};
    const req = { body: { username: 'USERNAME', email: 'EMAIL', password: undefined } };
    const res = {
      status: ((status) => {
        responseStatus = status;
        return {
          send: ((description) => {
            responseDescription = description;
          })
        };
      })
    };

    await register(req, res);
    expect(responseStatus).toEqual(400);
    expect(responseDescription).toEqual({ success: false, message: 'Username, email, and password are required.' });
  });

  it('expect "register" to return 409 and message if username already exists', async () => {
    let responseStatus = -1;
    let responseDescription = {};
    db.user.findOne = jest.fn(() => Promise.resolve(true));
    const req = { body: { username: 'USERNAME', email: 'EMAIL', password: 'PASSWORD' } };
    const res = {
      status: ((status) => {
        responseStatus = status;
        return {
          send: ((description) => {
            responseDescription = description;
          })
        };
      })
    };

    await register(req, res);
    expect(responseStatus).toEqual(409);
    expect(responseDescription).toEqual({ success: false, message: 'Invalid username' });
  });
});
