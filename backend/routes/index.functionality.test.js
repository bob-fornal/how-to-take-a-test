const fs = require('fs').promises;

const { root, tests } = require('./index.functionality');

describe('Index Routes Functionality', () => {
  it('expects "root" return 404, unauthorized', () => {
    let responseStatus = -1;
    let responseDescription = '';
    const req = {};
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

    root(req, res);
    expect(responseStatus).toEqual(401);
    expect(responseDescription).toEqual('Unauthorized');
  });

  it('expects "tests" to read the file and return 200 and file', async () => {
    const json = {
      data: 'ANYTHING'
    };
    fs.readFile = jest.fn(() => Promise.resolve(json));
    const req = {};
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

    await tests(req, res);
    expect(responseStatus).toEqual(200);
    expect(responseDescription).toEqual(json);
  });
});