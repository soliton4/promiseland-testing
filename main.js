(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "f2c213208fc37fcdeab3482b8a8f0347" })){ return promiseland._getModule("f2c213208fc37fcdeab3482b8a8f0347"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "f2c213208fc37fcdeab3482b8a8f0347", "module": PL$1, promising: true });
var PL$13/*promiseland*/;try{PL$13/*promiseland*/ = promiseland;}catch(e){};
var PL$35/*console*/;try{PL$35/*console*/ = console;}catch(e){};
var PL$49/*description*/;try{PL$49/*description*/ = description;}catch(e){};
var PL$56/*Callback*/;try{PL$56/*Callback*/ = Callback;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$5/*fs*/;
var PL$7/*cp*/;
var PL$9/*yaml*/;
var PL$11/*folder*/;
var PL$12/*CallbackErrorFirst*/;
var PL$14/*breakup*/;
var PL$20/*testEnvStr*/;
var PL$22/*harnessess*/;
var PL$30/*runTest*/;
var PL$68/*runTests*/;
function PL$15/*fsReadStr*/(PL$16/*path*/){

  ;
  var PL$17/*cb*/ = new PL$12/*CallbackErrorFirst*/();
  ;
  PL$5/*fs*/["readFile"](PL$16/*path*/, {
    "encoding": "utf8"
  }, PL$17/*cb*/);
  return PL$17/*cb*/["promise"];
  ;};
function PL$18/*fsWrite*/(PL$16/*path*/, PL$19/*content*/){

  ;
  var PL$17/*cb*/ = new PL$12/*CallbackErrorFirst*/();
  ;
  PL$5/*fs*/["writeFile"](PL$16/*path*/, PL$19/*content*/, PL$17/*cb*/);
  return PL$17/*cb*/["promise"];
  ;};
function PL$23/*getHarness*/(PL$24/*n*/){
var PL$25 = new __Promise();
var PL$27/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$25.reject(e);
    };
  };
};
var PL$28/*catch rejected*/ = function(e){
  PL$25.reject(e);
};
PL$27/*promiseland exception catcher*/(function(){

  ;
  if(PL$22/*harnessess*/[PL$24/*n*/]){
    PL$25.resolve(PL$22/*harnessess*/[PL$24/*n*/]); return;
  };
  ;
  PL$15/*fsReadStr*/(("./test262/harness/" + PL$24/*n*/)).then(PL$27/*promiseland exception catcher*/(function(PL$29){PL$22/*harnessess*/[PL$24/*n*/] = PL$29;
  PL$25.resolve(PL$22/*harnessess*/[PL$24/*n*/]); return;
  PL$25.resolve(); return;}), PL$28/*catch rejected*/);
  ;
})();return PL$25;
};
function PL$66/*fsStat*/(PL$16/*path*/){

  ;
  var PL$17/*cb*/ = new PL$12/*CallbackErrorFirst*/();
  ;
  PL$5/*fs*/["stat"](PL$16/*path*/, PL$17/*cb*/);
  return PL$17/*cb*/["promise"];
  ;};
function PL$67/*fsReaddir*/(PL$16/*path*/){

  ;
  var PL$17/*cb*/ = new PL$12/*CallbackErrorFirst*/();
  ;
  PL$5/*fs*/["readdir"](PL$16/*path*/, {
    
  }, PL$17/*cb*/);
  return PL$17/*cb*/["promise"];
  ;};
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("fs").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*fs*/ = PL$6;
  __requireFun("child_process").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*cp*/ = PL$8;
  __requireFun("js-yaml").then(PL$3/*promiseland exception catcher*/(function(PL$10){PL$9/*yaml*/ = PL$10;
  PL$11/*folder*/ = "./test262/test/language";
  PL$12/*CallbackErrorFirst*/ = PL$13/*promiseland*/["CallbackErrorFirst"];
  PL$14/*breakup*/ = false;
  /* function fsReadStr (){} - hoisted */;
  ;
  /* function fsWrite (){} - hoisted */;
  ;
  PL$15/*fsReadStr*/("./testenv.js").then(PL$3/*promiseland exception catcher*/(function(PL$21){PL$20/*testEnvStr*/ = PL$21;
  PL$22/*harnessess*/ = {
    
  };
  /* function getHarness (){} - hoisted */;
  ;
  PL$30/*runTest*/ = (function(PL$16/*path*/){
  var PL$31 = new __Promise();
  var PL$33/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$31.reject(e);
      };
    };
  };
  var PL$34/*catch rejected*/ = function(e){
    PL$31.reject(e);
  };
  var PL$36/*dataStr*/;
  var PL$38/*ystart*/;
  var PL$39/*yend*/;
  var PL$40/*yamlStr*/;
  var PL$41/*doc*/;
  var PL$43/*ignoreMember*/;
  var PL$44/*ignoreFlags*/;
  var PL$45/*i*/;
  var PL$46/*flags*/;
  var PL$47/*negative*/;
  var PL$48/*member*/;
  var PL$50/*testContentStr*/;
  var PL$54/*testDone*/;
  var PL$55/*testCallback*/;
  var PL$57/*finishTest*/;
  var PL$58/*errorHappened*/;
  var PL$59/*systemError*/;
  var PL$60/*t*/;
  PL$33/*promiseland exception catcher*/(function(){
  
    ;
    PL$35/*console*/["log"](("running test " + PL$16/*path*/));
    PL$15/*fsReadStr*/(PL$16/*path*/).then(PL$33/*promiseland exception catcher*/(function(PL$37){PL$36/*dataStr*/ = PL$37;
    PL$35/*console*/["log"]("========================== source ==============================");
    PL$35/*console*/["log"](PL$36/*dataStr*/);
    PL$35/*console*/["log"]("================================================================");
    PL$38/*ystart*/ = PL$36/*dataStr*/["indexOf"]("/*---");
    PL$39/*yend*/ = PL$36/*dataStr*/["indexOf"]("---*/");
    PL$40/*yamlStr*/;
    if((((PL$38/*ystart*/ > - 1) && (PL$39/*yend*/ > - 1)) && (PL$38/*ystart*/ < PL$39/*yend*/))){
      PL$38/*ystart*/ += 5;
      PL$40/*yamlStr*/ = PL$36/*dataStr*/["substr"](PL$38/*ystart*/, (PL$39/*yend*/ - PL$38/*ystart*/));
    }else{
    PL$35/*console*/["log"]("yaml not found");
    PL$14/*breakup*/ = true;
    PL$31.resolve(); return;
    };
    ;
    PL$41/*doc*/;
    try
    {
      PL$41/*doc*/ = PL$9/*yaml*/["safeLoad"](PL$40/*yamlStr*/);}catch(PL$42/*e*/){
      PL$35/*console*/["log"](PL$42/*e*/);
      PL$14/*breakup*/ = true;
      PL$31.resolve(); return;};
    ;
    PL$43/*ignoreMember*/ = {
      "es5id": true
    };
    PL$44/*ignoreFlags*/ = {
      "onlyStrict": true
    };
    PL$45/*i*/;
    PL$46/*flags*/ = [
      
    ];
    PL$47/*negative*/ = false;
    PL$48/*member*/;
    for(PL$48/*member*/ in PL$41/*doc*/){
      if(PL$43/*ignoreMember*/[PL$48/*member*/]){
        continue;;
      };
      ;
      switch (PL$48/*member*/){
        case "description":
          
          PL$49/*description*/ = PL$41/*doc*/[PL$48/*member*/];
          break;;
        case "flags":
          
          {
            PL$46/*flags*/ = PL$41/*doc*/[PL$48/*member*/];
            for(PL$45/*i*/ = 0;(PL$45/*i*/ < PL$46/*flags*/["length"]);++PL$45/*i*/){{
              if(PL$44/*ignoreFlags*/[PL$46/*flags*/[PL$45/*i*/]]){
                continue;;
              };
              ;
              PL$35/*console*/["log"](("unknown flag: " + PL$46/*flags*/[PL$45/*i*/]));
              PL$14/*breakup*/ = true;
              PL$31.resolve(); return;}};
            ;};
          ;
          break;;
        case "negative":
          
          PL$47/*negative*/ = PL$41/*doc*/[PL$48/*member*/];
          break;;
        default:
          
          PL$35/*console*/["log"](("unknown member: " + PL$48/*member*/));
          PL$35/*console*/["log"](PL$41/*doc*/);
          PL$14/*breakup*/ = true;
          PL$31.resolve(); return;
        
      };
      ;};
    ;
    PL$50/*testContentStr*/ = "";
    PL$50/*testContentStr*/ += PL$20/*testEnvStr*/;
    PL$23/*getHarness*/("assert.js").then(PL$33/*promiseland exception catcher*/(function(PL$51){PL$50/*testContentStr*/ += PL$51;
    PL$23/*getHarness*/("sta.js").then(PL$33/*promiseland exception catcher*/(function(PL$52){PL$50/*testContentStr*/ += PL$52;
    PL$50/*testContentStr*/ += "(function(){\n\"use strict\";\n";
    PL$50/*testContentStr*/ += PL$36/*dataStr*/;
    PL$50/*testContentStr*/ += "\n})();";
    PL$18/*fsWrite*/("./runningtest.js", PL$50/*testContentStr*/).then(PL$33/*promiseland exception catcher*/(function(PL$53){PL$53;
    PL$54/*testDone*/ = false;
    PL$55/*testCallback*/ = new PL$56/*Callback*/();
    PL$57/*finishTest*/ = (function(){
    
      ;
      if(PL$54/*testDone*/){
        return;
      };
      ;
      PL$54/*testDone*/ = true;
      PL$55/*testCallback*/();
      ;});
    PL$35/*console*/["log"]("running test");
    PL$58/*errorHappened*/ = false;
    PL$59/*systemError*/ = false;
    PL$60/*t*/ = PL$7/*cp*/["fork"]("./runningtest.js", {
      "silent": true
    });
    PL$35/*console*/["log"](PL$60/*t*/);
    PL$60/*t*/["on"]("close", (function(){
    
      ;
      PL$57/*finishTest*/();
      ;}));
    PL$60/*t*/["on"]("disconnect", (function(){
    
      ;
      PL$57/*finishTest*/();
      ;}));
    PL$60/*t*/["on"]("error", (function(){
    
      ;
      PL$58/*errorHappened*/ = true;
      PL$35/*console*/["log"]("error event");
      PL$57/*finishTest*/();
      ;}));
    PL$60/*t*/["on"]("exit", (function(){
    
      ;
      PL$57/*finishTest*/();
      ;}));
    PL$60/*t*/["on"]("message", (function(PL$61/*msg*/){
    
      ;
      if((PL$61/*msg*/["type"] == "print")){
        PL$35/*console*/["log"](PL$61/*msg*/["content"]);
        return;
      };
      ;
      if((PL$61/*msg*/["type"] == "error")){
        PL$35/*console*/["log"](PL$61/*msg*/);
        PL$59/*systemError*/ = true;
        PL$57/*finishTest*/();
        return;
      };
      ;
      PL$35/*console*/["log"](PL$61/*msg*/);
      PL$59/*systemError*/ = true;
      PL$57/*finishTest*/();
      ;}));
    PL$60/*t*/["stderr"]["on"]("data", (function(PL$62/*p1*/, PL$63/*p2*/, PL$64/*p3*/){
    
      ;
      PL$35/*console*/["log"]("stderr data");
      PL$35/*console*/["log"](PL$62/*p1*/);
      PL$35/*console*/["log"](PL$63/*p2*/);
      PL$35/*console*/["log"](PL$64/*p3*/);
      ;}));
    PL$60/*t*/["stderr"]["on"]("error", (function(PL$62/*p1*/, PL$63/*p2*/, PL$64/*p3*/){
    
      ;
      PL$35/*console*/["log"]("stderr error");
      PL$35/*console*/["log"](PL$62/*p1*/);
      PL$35/*console*/["log"](PL$63/*p2*/);
      PL$35/*console*/["log"](PL$64/*p3*/);
      ;}));
    PL$55/*testCallback*/["promise"].then(PL$33/*promiseland exception catcher*/(function(PL$65){PL$65;
    if(((PL$59/*systemError*/ || PL$58/*errorHappened*/) || PL$47/*negative*/)){
      PL$14/*breakup*/ = true;
      PL$35/*console*/["log"]("test failed");
    }else{
    PL$35/*console*/["log"]("test passed");
    };
    ;
    PL$31.resolve(); return;}), PL$34/*catch rejected*/);
    ;}), PL$34/*catch rejected*/);
    ;}), PL$34/*catch rejected*/);
    ;}), PL$34/*catch rejected*/);
    ;}), PL$34/*catch rejected*/);
    ;
  })();return PL$31;
  });
  /* function fsStat (){} - hoisted */;
  ;
  /* function fsReaddir (){} - hoisted */;
  ;
  PL$68/*runTests*/ = (function(PL$16/*path*/){
  var PL$69 = new __Promise();
  var PL$71/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$69.reject(e);
      };
    };
  };
  var PL$72/*catch rejected*/ = function(e){
    PL$69.reject(e);
  };
  var PL$77/*stat*/;
  var PL$80/*files*/;
  var PL$45/*i*/;
  PL$71/*promiseland exception catcher*/(function(){
  
    ;
    var PL$73 = new __Promise();
    var PL$74 = new __Promise();
    var PL$75/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$74.resolve(e); }; }; };
    var PL$76 = function(e){ PL$74.resolve(e); };
    PL$75/*try catch*/(function(){
      if(PL$14/*breakup*/){
        PL$69.resolve(); return;
      };
      ;
      PL$66/*fsStat*/(PL$16/*path*/).then(PL$75/*try catch*/(function(PL$78){PL$77/*stat*/ = PL$78;
      
      var PL$79 = new __Promise();if(PL$77/*stat*/["isDirectory"]()){
        PL$67/*fsReaddir*/(PL$16/*path*/).then(PL$75/*try catch*/(function(PL$81){PL$80/*files*/ = PL$81;
        PL$45/*i*/ = 0;
        PL$45/*i*/ = 0;var PL$83 = new __Promise();
        var PL$82 = function(){var PL$84 = new __Promise();
        if((PL$45/*i*/ < PL$80/*files*/["length"])){
        PL$68/*runTests*/(((PL$16/*path*/ + "/") + PL$80/*files*/[PL$45/*i*/])).then(PL$75/*try catch*/(function(PL$85){PL$85;
        PL$84.resolve(true); return PL$84; /* continue */
        ;}), PL$76);
        ;}else{
        PL$84.resolve(false); return PL$84; /* break */
        
        };
        PL$84;return PL$84;
        };
        var PL$86 = function(){PL$82().then(function(contLoop){
        if (contLoop){++PL$45/*i*/;PL$86();}else{PL$83.resolve();};
        });
        };
        PL$86();
        PL$83.then(function(){;
        ;
        PL$79.resolve();;});}), PL$76);
        ;
      }else{PL$79.resolve();
      };PL$79.then(PL$75/*try catch*/(function(PL$87){PL$87;;
      ;
      
      var PL$88 = new __Promise();if(PL$77/*stat*/["isFile"]()){
        
        var PL$89 = new __Promise();if((PL$16/*path*/["substr"](- 3) == ".js")){
          PL$30/*runTest*/(PL$16/*path*/).then(PL$75/*try catch*/(function(PL$90){PL$90;
          PL$89.resolve();;}), PL$76);
          ;
        }else{PL$89.resolve();
        };PL$89.then(PL$75/*try catch*/(function(PL$91){PL$91;;
        ;
        PL$88.resolve();;}), PL$76);
        ;
      }else{PL$88.resolve();
      };PL$88.then(PL$75/*try catch*/(function(PL$92){PL$92;;
      ;
      PL$73.resolve();}), PL$76);
    ;}), PL$76);
    ;}), PL$76);
    ;})();
    PL$74.then(PL$71/*promiseland exception catcher*/(function(PL$42/*e*/){
      PL$35/*console*/["log"](PL$42/*e*/);
      PL$73.resolve();;}));
    PL$73.then(PL$71/*promiseland exception catcher*/(function(){;
    ;
    PL$69.resolve(); return;}), PL$72/*catch rejected*/)
  })();return PL$69;
  });
  PL$68/*runTests*/(PL$11/*folder*/);
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1};
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    module.exports = __modFun(function(modulesAr, callback, errBack){
      // the require function for CommonJs
      var args = [];
      try{
        var i = 0;
        var l = modulesAr.length;
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    }, require("promiseland"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
