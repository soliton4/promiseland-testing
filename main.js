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
    if (promiseland._hasModule({ hashStr: "b9ed86dfc929eb15bbd8bb02e3b661c4" })){ return promiseland._getModule("b9ed86dfc929eb15bbd8bb02e3b661c4"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "b9ed86dfc929eb15bbd8bb02e3b661c4", "module": PL$1, promising: true });
var PL$19/*promiseland*/;try{PL$19/*promiseland*/ = promiseland;}catch(e){};
var PL$44/*console*/;try{PL$44/*console*/ = console;}catch(e){};
var PL$63/*description*/;try{PL$63/*description*/ = description;}catch(e){};
var PL$75/*__dirname*/;try{PL$75/*__dirname*/ = __dirname;}catch(e){};
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
var PL$7/*pathModule*/;
var PL$9/*os*/;
var PL$11/*cp*/;
var PL$13/*yaml*/;
var PL$15/*eshost*/;
var PL$17/*folder*/;
var PL$18/*CallbackErrorFirst*/;
var PL$20/*breakup*/;
var PL$26/*testEnvStr*/;
var PL$28/*harnessess*/;
var PL$39/*runTest*/;
var PL$87/*runTests*/;
function PL$21/*fsReadStr*/(PL$22/*path*/){

  ;
  var PL$23/*cb*/ = new PL$18/*CallbackErrorFirst*/();
  ;
  PL$5/*fs*/["readFile"](PL$22/*path*/, {
    "encoding": "utf8"
  }, PL$23/*cb*/);
  return PL$23/*cb*/["promise"];
  ;};
function PL$24/*fsWrite*/(PL$22/*path*/, PL$25/*content*/){

  ;
  var PL$23/*cb*/ = new PL$18/*CallbackErrorFirst*/();
  ;
  PL$5/*fs*/["writeFile"](PL$22/*path*/, PL$25/*content*/, PL$23/*cb*/);
  return PL$23/*cb*/["promise"];
  ;};
function PL$29/*getHarness*/(PL$30/*n*/){
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
PL$33/*promiseland exception catcher*/(function(){

  ;
  if(PL$28/*harnessess*/[PL$30/*n*/]){
    PL$31.resolve(PL$28/*harnessess*/[PL$30/*n*/]); return;
  };
  ;
  PL$21/*fsReadStr*/(("./test262/harness/" + PL$30/*n*/)).then(PL$33/*promiseland exception catcher*/(function(PL$35){PL$28/*harnessess*/[PL$30/*n*/] = PL$35;
  PL$31.resolve(PL$28/*harnessess*/[PL$30/*n*/]); return;
  PL$31.resolve(); return;}), PL$34/*catch rejected*/);
  ;
})();return PL$31;
};
function PL$36/*endsWith*/(PL$37/*s*/, PL$38/*c*/){

  ;
  if((PL$37/*s*/["substr"]((PL$37/*s*/["length"] - PL$38/*c*/["length"]), PL$38/*c*/["length"]) === PL$38/*c*/)){
    return true;
  };
  ;
  ;};
function PL$85/*fsStat*/(PL$22/*path*/){

  ;
  var PL$23/*cb*/ = new PL$18/*CallbackErrorFirst*/();
  ;
  PL$5/*fs*/["stat"](PL$22/*path*/, PL$23/*cb*/);
  return PL$23/*cb*/["promise"];
  ;};
function PL$86/*fsReaddir*/(PL$22/*path*/){

  ;
  var PL$23/*cb*/ = new PL$18/*CallbackErrorFirst*/();
  ;
  PL$5/*fs*/["readdir"](PL$22/*path*/, {
    
  }, PL$23/*cb*/);
  return PL$23/*cb*/["promise"];
  ;};
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("fs").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*fs*/ = PL$6;
  __requireFun("path").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*pathModule*/ = PL$8;
  __requireFun("os").then(PL$3/*promiseland exception catcher*/(function(PL$10){PL$9/*os*/ = PL$10;
  __requireFun("child_process").then(PL$3/*promiseland exception catcher*/(function(PL$12){PL$11/*cp*/ = PL$12;
  __requireFun("js-yaml").then(PL$3/*promiseland exception catcher*/(function(PL$14){PL$13/*yaml*/ = PL$14;
  __requireFun("eshost").then(PL$3/*promiseland exception catcher*/(function(PL$16){PL$15/*eshost*/ = PL$16;
  PL$17/*folder*/ = "./test262/test";
  PL$18/*CallbackErrorFirst*/ = PL$19/*promiseland*/["CallbackErrorFirst"];
  PL$20/*breakup*/ = false;
  /* function fsReadStr (){} - hoisted */;
  ;
  /* function fsWrite (){} - hoisted */;
  ;
  PL$21/*fsReadStr*/("./testenv.js").then(PL$3/*promiseland exception catcher*/(function(PL$27){PL$26/*testEnvStr*/ = PL$27;
  PL$28/*harnessess*/ = {
    
  };
  /* function getHarness (){} - hoisted */;
  ;
  /* function endsWith (){} - hoisted */;
  ;
  PL$39/*runTest*/ = (function(PL$22/*path*/){
  var PL$40 = new __Promise();
  var PL$42/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$40.reject(e);
      };
    };
  };
  var PL$43/*catch rejected*/ = function(e){
    PL$40.reject(e);
  };
  var PL$45/*dataStr*/;
  var PL$47/*ystart*/;
  var PL$48/*yend*/;
  var PL$49/*yamlStr*/;
  var PL$50/*doc*/;
  var PL$52/*ignoreMember*/;
  var PL$53/*ignoreFlags*/;
  var PL$54/*i*/;
  var PL$55/*flags*/;
  var PL$56/*negative*/;
  var PL$57/*printSource*/;
  var PL$58/*includesStr*/;
  var PL$59/*includesAr*/;
  var PL$60/*isModule*/;
  var PL$61/*isAsync*/;
  var PL$62/*member*/;
  var PL$69/*testContentStr*/;
  var PL$76/*agent*/;
  var PL$82/*result*/;
  PL$42/*promiseland exception catcher*/(function(){
  
    ;
    if(PL$36/*endsWith*/(PL$22/*path*/, "_FIXTURE.js")){
      PL$44/*console*/["log"](("ignoring " + PL$22/*path*/));
      PL$40.resolve(true); return;
    };
    ;
    PL$44/*console*/["log"](("running test " + PL$22/*path*/));
    PL$21/*fsReadStr*/(PL$22/*path*/).then(PL$42/*promiseland exception catcher*/(function(PL$46){PL$45/*dataStr*/ = PL$46;
    PL$47/*ystart*/ = PL$45/*dataStr*/["indexOf"]("/*---");
    PL$48/*yend*/ = PL$45/*dataStr*/["indexOf"]("---*/");
    PL$49/*yamlStr*/;
    if((((PL$47/*ystart*/ > - 1) && (PL$48/*yend*/ > - 1)) && (PL$47/*ystart*/ < PL$48/*yend*/))){
      PL$47/*ystart*/ += 5;
      PL$49/*yamlStr*/ = PL$45/*dataStr*/["substr"](PL$47/*ystart*/, (PL$48/*yend*/ - PL$47/*ystart*/));
    }else{
    PL$44/*console*/["log"]("yaml not found");
    PL$20/*breakup*/ = true;
    PL$40.resolve(); return;
    };
    ;
    PL$50/*doc*/;
    try
    {
      PL$50/*doc*/ = PL$13/*yaml*/["safeLoad"](PL$49/*yamlStr*/);}catch(PL$51/*e*/){
      PL$44/*console*/["log"](PL$51/*e*/);
      PL$40.resolve(false); return;};
    ;
    PL$52/*ignoreMember*/ = {
      "es5id": true,
      "info": true,
      "esid": true,
      "es6id": true,
      "features": true,
      "author": true
    };
    PL$53/*ignoreFlags*/ = {
      "onlyStrict": true
    };
    PL$54/*i*/;
    PL$55/*flags*/ = [
      
    ];
    PL$56/*negative*/ = false;
    PL$57/*printSource*/ = (function(){
    
      ;
      PL$44/*console*/["log"]("========================== source ==============================");
      PL$44/*console*/["log"](PL$45/*dataStr*/);
      PL$44/*console*/["log"]("================================================================");
      ;});
    PL$58/*includesStr*/ = "";
    PL$59/*includesAr*/ = [
      
    ];
    PL$60/*isModule*/ = false;
    PL$61/*isAsync*/ = false;
    PL$62/*member*/;
    for(PL$62/*member*/ in PL$50/*doc*/){
      if(PL$52/*ignoreMember*/[PL$62/*member*/]){
        continue;;
      };
      ;
      switch (PL$62/*member*/){
        case "description":
          
          PL$63/*description*/ = PL$50/*doc*/[PL$62/*member*/];
          break;;
        case "flags":
          
          {
            PL$55/*flags*/ = PL$50/*doc*/[PL$62/*member*/];
            for(PL$54/*i*/ = 0;(PL$54/*i*/ < PL$55/*flags*/["length"]);++PL$54/*i*/){{
              if(PL$53/*ignoreFlags*/[PL$55/*flags*/[PL$54/*i*/]]){
                continue;;
              };
              ;
              if((PL$55/*flags*/[PL$54/*i*/] === "noStrict")){
                PL$40.resolve(true); return;
              };
              ;
              if((PL$55/*flags*/[PL$54/*i*/] === "raw")){
                PL$40.resolve(true); return;
              };
              ;
              if((PL$55/*flags*/[PL$54/*i*/] === "module")){
                PL$60/*isModule*/ = true;
                continue;;
              };
              ;
              if((PL$55/*flags*/[PL$54/*i*/] === "generated")){
                continue;;
              };
              ;
              if((PL$55/*flags*/[PL$54/*i*/] == "async")){
                PL$61/*isAsync*/ = true;
                continue;;
              };
              ;
              PL$57/*printSource*/();
              PL$44/*console*/["log"](("unknown flag: " + PL$55/*flags*/[PL$54/*i*/]));
              PL$20/*breakup*/ = true;
              PL$40.resolve(); return;}};
            ;};
          ;
          break;;
        case "negative":
          
          PL$56/*negative*/ = PL$50/*doc*/[PL$62/*member*/];
          break;;
        case "includes":
          
          PL$59/*includesAr*/ = PL$50/*doc*/[PL$62/*member*/];
          break;;
        default:
          
          PL$57/*printSource*/();
          PL$44/*console*/["log"](("unknown member: " + PL$62/*member*/));
          PL$44/*console*/["log"](PL$50/*doc*/);
          PL$20/*breakup*/ = true;
          PL$40.resolve(); return;
        
      };
      ;};
    ;
    PL$54/*i*/ = 0;var PL$65 = new __Promise();
    var PL$64 = function(){var PL$66 = new __Promise();
    if((PL$54/*i*/ < PL$59/*includesAr*/["length"])){
    PL$29/*getHarness*/(PL$59/*includesAr*/[PL$54/*i*/]).then(PL$42/*promiseland exception catcher*/(function(PL$67){PL$58/*includesStr*/ += PL$67;
    PL$66.resolve(true); return PL$66; /* continue */
    ;}), PL$43/*catch rejected*/);
    ;}else{
    PL$66.resolve(false); return PL$66; /* break */
    
    };
    PL$66;return PL$66;
    };
    var PL$68 = function(){PL$64().then(function(contLoop){
    if (contLoop){++PL$54/*i*/;PL$68();}else{PL$65.resolve();};
    });
    };
    PL$68();
    PL$65.then(function(){;
    ;
    PL$69/*testContentStr*/ = "";
    if(PL$60/*isModule*/){
    }else{
    PL$69/*testContentStr*/ += "\"use strict\"\n";
    PL$69/*testContentStr*/ += PL$26/*testEnvStr*/;
    };
    ;
    PL$29/*getHarness*/("assert.js").then(PL$42/*promiseland exception catcher*/(function(PL$70){PL$69/*testContentStr*/ += PL$70;
    PL$29/*getHarness*/("sta.js").then(PL$42/*promiseland exception catcher*/(function(PL$71){PL$69/*testContentStr*/ += PL$71;
    
    var PL$72 = new __Promise();if(PL$61/*isAsync*/){
      PL$29/*getHarness*/("doneprintHandle.js").then(PL$42/*promiseland exception catcher*/(function(PL$73){PL$69/*testContentStr*/ += PL$73;
      PL$72.resolve();;}), PL$43/*catch rejected*/);
      ;
    }else{PL$72.resolve();
    };PL$72.then(PL$42/*promiseland exception catcher*/(function(PL$74){PL$74;;
    ;
    PL$69/*testContentStr*/ += PL$58/*includesStr*/;
    if(PL$60/*isModule*/){
      PL$69/*testContentStr*/ += (("require(\"" + PL$7/*pathModule*/["resolve"](PL$75/*__dirname*/, PL$22/*path*/)) + "\");\n");
      PL$44/*console*/["log"]("module ------------------------------------------------------------------------");
    }else{
    PL$69/*testContentStr*/ += PL$45/*dataStr*/;
    };
    ;
    PL$15/*eshost*/["createAgent"]("node", {
      "hostPath": (PL$9/*os*/["homedir"]() + "/.nvm/versions/node/v7.7.1/bin/node")
    }).then(PL$42/*promiseland exception catcher*/(function(PL$77){PL$76/*agent*/ = PL$77;
    var PL$78 = new __Promise();
    var PL$79 = new __Promise();
    var PL$80/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$79.resolve(e); }; }; };
    var PL$81 = function(e){ PL$79.resolve(e); };
    PL$80/*try catch*/(function(){
      PL$76/*agent*/["evalScript"](PL$69/*testContentStr*/).then(PL$80/*try catch*/(function(PL$83){PL$82/*result*/ = PL$83;
      if((! PL$56/*negative*/ && PL$82/*result*/["error"])){
        PL$57/*printSource*/();
        PL$44/*console*/["log"]("test failed");
        PL$44/*console*/["log"](PL$82/*result*/["error"]);
        PL$40.resolve(false); return;
      };
      ;
      if((PL$56/*negative*/ && ! PL$82/*result*/["error"])){
        PL$57/*printSource*/();
        PL$44/*console*/["log"]("test failed");
        PL$44/*console*/["log"]("expected error but non ocured");
        PL$40.resolve(false); return;
      };
      ;
      if(PL$61/*isAsync*/){
        PL$44/*console*/["log"]("async result:");
        PL$44/*console*/["log"](PL$82/*result*/);
        if((PL$82/*result*/["stdout"] !== "Test262:AsyncTestComplete\n")){
          PL$44/*console*/["log"]("test failed");
          PL$40.resolve(false); return;
        };
      };
      ;
      PL$40.resolve(true); return;
      PL$78.resolve();}), PL$81);
    ;})();
    PL$79.then(PL$42/*promiseland exception catcher*/(function(PL$84/*err*/){
      PL$57/*printSource*/();
      PL$20/*breakup*/ = true;
      PL$44/*console*/["log"]("error running test");
      PL$44/*console*/["log"](PL$84/*err*/);
      PL$40.resolve(false); return;
      PL$78.resolve();;}));
    PL$78.then(PL$42/*promiseland exception catcher*/(function(){;
    ;
    PL$40.resolve(); return;}), PL$43/*catch rejected*/)}), PL$43/*catch rejected*/);
    ;}), PL$43/*catch rejected*/);
    ;}), PL$43/*catch rejected*/);
    ;}), PL$43/*catch rejected*/);
    ;});}), PL$43/*catch rejected*/);
    ;
  })();return PL$40;
  });
  /* function fsStat (){} - hoisted */;
  ;
  /* function fsReaddir (){} - hoisted */;
  ;
  PL$87/*runTests*/ = (function(PL$22/*path*/){
  var PL$88 = new __Promise();
  var PL$90/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$88.reject(e);
      };
    };
  };
  var PL$91/*catch rejected*/ = function(e){
    PL$88.reject(e);
  };
  var PL$96/*stat*/;
  var PL$99/*files*/;
  var PL$54/*i*/;
  PL$90/*promiseland exception catcher*/(function(){
  
    ;
    var PL$92 = new __Promise();
    var PL$93 = new __Promise();
    var PL$94/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$93.resolve(e); }; }; };
    var PL$95 = function(e){ PL$93.resolve(e); };
    PL$94/*try catch*/(function(){
      if(PL$20/*breakup*/){
        PL$88.resolve(); return;
      };
      ;
      PL$85/*fsStat*/(PL$22/*path*/).then(PL$94/*try catch*/(function(PL$97){PL$96/*stat*/ = PL$97;
      
      var PL$98 = new __Promise();if(PL$96/*stat*/["isDirectory"]()){
        PL$86/*fsReaddir*/(PL$22/*path*/).then(PL$94/*try catch*/(function(PL$100){PL$99/*files*/ = PL$100;
        PL$54/*i*/ = 0;
        PL$54/*i*/ = 0;var PL$102 = new __Promise();
        var PL$101 = function(){var PL$103 = new __Promise();
        if((PL$54/*i*/ < PL$99/*files*/["length"])){
        PL$87/*runTests*/(((PL$22/*path*/ + "/") + PL$99/*files*/[PL$54/*i*/])).then(PL$94/*try catch*/(function(PL$104){PL$104;
        PL$103.resolve(true); return PL$103; /* continue */
        ;}), PL$95);
        ;}else{
        PL$103.resolve(false); return PL$103; /* break */
        
        };
        PL$103;return PL$103;
        };
        var PL$105 = function(){PL$101().then(function(contLoop){
        if (contLoop){++PL$54/*i*/;PL$105();}else{PL$102.resolve();};
        });
        };
        PL$105();
        PL$102.then(function(){;
        ;
        PL$98.resolve();;});}), PL$95);
        ;
      }else{PL$98.resolve();
      };PL$98.then(PL$94/*try catch*/(function(PL$106){PL$106;;
      ;
      
      var PL$107 = new __Promise();if(PL$96/*stat*/["isFile"]()){
        
        var PL$108 = new __Promise();if((PL$22/*path*/["substr"](- 3) == ".js")){
          PL$39/*runTest*/(PL$22/*path*/).then(PL$94/*try catch*/(function(PL$109){PL$109;
          PL$108.resolve();;}), PL$95);
          ;
        }else{PL$108.resolve();
        };PL$108.then(PL$94/*try catch*/(function(PL$110){PL$110;;
        ;
        PL$107.resolve();;}), PL$95);
        ;
      }else{PL$107.resolve();
      };PL$107.then(PL$94/*try catch*/(function(PL$111){PL$111;;
      ;
      PL$92.resolve();}), PL$95);
    ;}), PL$95);
    ;}), PL$95);
    ;})();
    PL$93.then(PL$90/*promiseland exception catcher*/(function(PL$51/*e*/){
      PL$44/*console*/["log"](PL$51/*e*/);
      PL$20/*breakup*/ = true;
      PL$92.resolve();;}));
    PL$92.then(PL$90/*promiseland exception catcher*/(function(){;
    ;
    PL$88.resolve(); return;}), PL$91/*catch rejected*/)
  })();return PL$88;
  });
  PL$87/*runTests*/(PL$17/*folder*/);
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
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
