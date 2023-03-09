let consoleDebug;
let consoleLog;

beforeAll(() => {
  consoleDebug = spyOn(console, 'debug');
  consoleDebug.and.stub();

  consoleLog = spyOn(console, 'log');
  consoleLog.and.stub();
});

afterEach(() => {
  consoleDebug.calls.reset();
  consoleLog.calls.reset();
});
