define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, gamvas)  {
  var currentModuleminus26919 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus26919 = value;
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
      var returnValueminus26970 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus26969",
          args:arguments
        };
        });
      var recurP26973 = (function (valminus26974)        {
        if ((("undefined")===((typeof valminus26974))))          {
          return false;
          };
        return (valminus26974.recurSigil===("recurSigilminus26969"));
        });
      var actualFunminus26972 = (function ()        {
        return (function (arguments)          {
          var G26976 = undefined;
          var G26977 = Array.prototype.slice.apply(arguments);
          G26976 = (function (arguments)            {
            var matchValminus26978 = G26977;
            if ((!((matchValminus26978.length>=4))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus26979 = Array.prototype.slice.call(matchValminus26978, 0, 4);
            if ((!((4===matchArraySimplePartminus26979.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x = matchArraySimplePartminus26979[0];
            var y = matchArraySimplePartminus26979[1];
            var w = matchArraySimplePartminus26979[2];
            var h = matchArraySimplePartminus26979[3];
            var matchArrayTailPartminus26980 = Array.prototype.slice.call(matchValminus26978, 4);
            var matchTempminus26981 = matchArrayTailPartminus26980[0];
            var previousMatchSucceededminus26982 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus26981))))                {
                previousMatchSucceededminus26982 = false;
                };
              var r = matchTempminus26981;
              if (previousMatchSucceededminus26982)                {
                break;
                };
              previousMatchSucceededminus26982 = true;
              case 1:
              var fResult26983 = ((function (x)                {
                return 0;
                }))(matchTempminus26981);
              if ((fResult26983===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus26982 = false;
                };
              var r = fResult26983;
              if (previousMatchSucceededminus26982)                {
                break;
                };
              previousMatchSucceededminus26982 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            wallCount = moduleminus58c4bce870.plus(1, wallCount);
            return (new moduleB147560188.Wall(moduleminus58c4bce870.plus("wall-", wallCount, JSON.stringify([x, y, w, h])), x, y, w, h, r));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26976))))            {
            return G26976;
            };
          G26976 = (function (arguments)            {
            var matchValminus26984 = G26977;
            var anythingElseminus26975 = matchValminus26984;
            throw ((("Match fail in w* against: ")+anythingElseminus26975));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26976))))            {
            return G26976;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: x y w h :- (opt r 0)] (set! wall-count (+ 1 wall-count)) (new Wall (+ ''wall-'' wall-count (JSON\.stringify [: x y w h])) x y w h r)) (anything-else-26975 (_throw (_+ ''Match fail in w* against: '' anything-else-26975))))) for value ")+(JSON.stringify(G26977))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus26970 = actualFunminus26972.apply(this, arguments);
      while (recurP26973(returnValueminus26970))        {
        returnValueminus26970 = actualFunminus26972.apply(this, returnValueminus26970.args);
        };
      return returnValueminus26970;
      });
    var pi = Math.PI;
    window.levelGeometry = undefined;
    currentModuleminus26919.testBed = (function ()      {
      var geometry = [wtimes(0, 80, 800, 10, moduleminus58c4bce870.divide(pi, 10)), wtimes(0, 110, 800, 10, moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(pi, 10)))];
      window.levelGeometry = geometry;
      return {        
        geometry:geometry,
        initialPosition:[12, 20]
      };
      });
    }))();
  return currentModuleminus26919;
  }))