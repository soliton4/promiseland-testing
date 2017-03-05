const esh = require('eshost');
const os = require("os");
const agent = esh.createAgent('node', { hostPath: os.homedir() + '/.nvm/versions/node/v7.7.1/bin/node' });

//const agent = esh.createAgent('node');

agent.then(function(agent){
  console.log(agent);
  const result = agent.evalScript(`
    okk what about syntax errors?
    print(1+em.z);
  `);
  result.then(function(result){
    console.log("success");
    if (result.error){
      console.log("exec error");
      console.log(result.error);
      console.log(result);
    }else{
      console.log(result.stdout);  
    };
  }, function(err){
    console.log("error");
    console.log(err);
  });
  
});

return;


