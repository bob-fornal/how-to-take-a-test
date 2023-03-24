var consoleDebug;
var consoleLog;

beforeAll(function() {
  consoleDebug = spyOn(console, 'debug');
  consoleDebug.and.stub();

  consoleLog = spyOn(console, 'log');
  consoleLog.and.stub();
});

afterEach(function() {
  consoleDebug.calls.reset();
  consoleLog.calls.reset();
});
