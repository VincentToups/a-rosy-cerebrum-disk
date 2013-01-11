define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, gamvas)  {
  var currentModuleminus58827 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus58827 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" (:with-prefix idioms- :all))
    ;
    // ("rosy/drawing" :all)
    ;
    // ("rosy/utils" :all)
    ;
    // ("rosy/wall" :all)
    ;
    // ("rosy/ball" :all)
    ;
    // ((js "gamvas/gamvas-module" gamvas))
    ;
    var wallCount = 0;
    var wtimes = (function ()      {
      var returnValueminus58862 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus58861",
          args:arguments
        };
        });
      var recurP58865 = (function (valminus58866)        {
        if ((("undefined")===((typeof valminus58866))))          {
          return false;
          };
        return (valminus58866.recurSigil===("recurSigilminus58861"));
        });
      var actualFunminus58864 = (function ()        {
        return (function (arguments)          {
          var G58868 = undefined;
          var G58869 = Array.prototype.slice.apply(arguments);
          G58868 = (function (arguments)            {
            var matchValminus58870 = G58869;
            if ((!((matchValminus58870.length>=4))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus58871 = Array.prototype.slice.call(matchValminus58870, 0, 4);
            if ((!((4===matchArraySimplePartminus58871.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x = matchArraySimplePartminus58871[0];
            var y = matchArraySimplePartminus58871[1];
            var w = matchArraySimplePartminus58871[2];
            var h = matchArraySimplePartminus58871[3];
            var matchArrayTailPartminus58872 = Array.prototype.slice.call(matchValminus58870, 4);
            var matchTempminus58873 = matchArrayTailPartminus58872[0];
            var previousMatchSucceededminus58874 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus58873))))                {
                previousMatchSucceededminus58874 = false;
                };
              var r = matchTempminus58873;
              if (previousMatchSucceededminus58874)                {
                break;
                };
              previousMatchSucceededminus58874 = true;
              case 1:
              var fResult58875 = ((function (x)                {
                return 0;
                }))(matchTempminus58873);
              if ((fResult58875===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus58874 = false;
                };
              var r = fResult58875;
              if (previousMatchSucceededminus58874)                {
                break;
                };
              previousMatchSucceededminus58874 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            wallCount = moduleminus58c4bce870.plus(1, wallCount);
            return (new moduleB147560188.Wall(moduleminus58c4bce870.plus("wall-", wallCount, JSON.stringify([x, y, w, h])), x, y, w, h, r));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58868))))            {
            return G58868;
            };
          G58868 = (function (arguments)            {
            var matchValminus58876 = G58869;
            var anythingElseminus58867 = matchValminus58876;
            throw ((("Match fail in w* against: ")+anythingElseminus58867));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58868))))            {
            return G58868;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: x y w h :- (opt r 0)] (set! wall-count (+ 1 wall-count)) (new Wall (+ ''wall-'' wall-count (JSON\.stringify [: x y w h])) x y w h r)) (anything-else-58867 (_throw (_+ ''Match fail in w* against: '' anything-else-58867))))) for value ")+(JSON.stringify(G58869))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus58862 = actualFunminus58864.apply(this, arguments);
      while (recurP58865(returnValueminus58862))        {
        returnValueminus58862 = actualFunminus58864.apply(this, returnValueminus58862.args);
        };
      return returnValueminus58862;
      });
    var pi = Math.PI;
    currentModuleminus58827.testBed = (function ()      {
      return {        
        geometry:[wtimes(0, 80, 800, 10, moduleminus58c4bce870.divide(pi, 10)), wtimes(0, 110, 800, 10, moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(pi, 10)))],
        initialPosition:[12, 20]
      };
      });
    }))();
  return currentModuleminus58827;
  }))