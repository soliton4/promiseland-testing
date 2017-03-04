// global vars
print = function(s){
  process.send({
    type: "print",
    content: s
  });
};

var _test_getErrorFun = function(name){
  return function(){
    process.send({
      type: "error",
      content: name
    });
  };
};

$ = {
  createRealm: _test_getErrorFun("createRealm"),
  detachArrayBuffer: _test_getErrorFun("detachArrayBuffer"),
  evalScript: _test_getErrorFun("evalScript"),
  global: global,
  agent: {
    start: _test_getErrorFun("start"),
    broadcastbroadcast: _test_getErrorFun("broadcast"),
    getReport: _test_getErrorFun("getReport"),
    sleep: _test_getErrorFun("sleep")
  }
};
