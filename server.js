(((function ()  {
  var rjs = require("requirejs");
  rjs.config({    
    nodeRequire:require,
    baseUrl:"./scripts/"
  });
  return rjs;
  }))())(["hooves/operator-functions", "hooves/lisp-idioms", "http"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, http)  {
  return ((function ()    {
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" :all)
    ;
    // ((js "http" http))
    ;
    console.log(moduleminus58c4bce870.plus("Hello World", moduleminus58c4bce870.divide(3, 2)));
    return console.log(moduleminus58c4bce870.plus("http is ", JSON.stringify(http)));
    }))();
  }));
