var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
      var option = {exec: "server.js"}
      cluster.setupMaster(option);
      var worker = cluster.fork().process;
      worker.on('death', function(work){
          cluster.fork();
      });
    worker.on("message", function(msg){
        console.log("err"+msg.err)
    });
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
    console.log("error")
}