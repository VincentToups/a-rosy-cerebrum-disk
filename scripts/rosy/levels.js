define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, gamvas)  {
  var currentModuleminus11952 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus11952 = value;
    });
  (function (arguments)    {
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
      var returnValueminus11956 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus11955",
          args:arguments
        };
        });
      var recurP11959 = (function (valminus11960)        {
        if ((("undefined")===((typeof valminus11960))))          {
          return false;
          };
        return (valminus11960.recurSigil===("recurSigilminus11955"));
        });
      var actualFunminus11958 = (function ()        {
        return (function (arguments)          {
          var G11962 = undefined;
          var G11963 = Array.prototype.slice.apply(arguments);
          G11962 = (function (arguments)            {
            var matchValminus11964 = G11963;
            if ((!((("object")===((typeof matchValminus11964))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus11964.length>=4))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus11965 = Array.prototype.slice.call(matchValminus11964, 0, 4);
            if ((!((("object")===((typeof matchArraySimplePartminus11965))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchArraySimplePartminus11965.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x = matchArraySimplePartminus11965[0];
            var y = matchArraySimplePartminus11965[1];
            var w = matchArraySimplePartminus11965[2];
            var h = matchArraySimplePartminus11965[3];
            var matchArrayTailPartminus11966 = Array.prototype.slice.call(matchValminus11964, 4);
            var matchTempminus11967 = matchArrayTailPartminus11966[0];
            var previousMatchSucceededminus11968 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus11967))))                {
                previousMatchSucceededminus11968 = false;
                };
              var r = matchTempminus11967;
              if (previousMatchSucceededminus11968)                {
                break;
                };
              previousMatchSucceededminus11968 = true;
              case 1:
              var fResult11969 = ((function (x)                {
                return 0;
                }))(matchTempminus11967);
              if ((fResult11969===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus11968 = false;
                };
              var r = fResult11969;
              if (previousMatchSucceededminus11968)                {
                break;
                };
              previousMatchSucceededminus11968 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            wallCount = moduleminus58c4bce870.plus(1, wallCount);
            return (new (moduleB147560188.Wall)(moduleminus58c4bce870.plus("wall-", wallCount, JSON.stringify([x, y, w, h])), x, y, w, h, r));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11962))))            {
            return G11962;
            };
          G11962 = (function (arguments)            {
            var matchValminus11970 = G11963;
            var anythingElseminus11961 = matchValminus11970;
            throw ((("Match fail in w* against: ")+anythingElseminus11961));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11962))))            {
            return G11962;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: x y w h :- (opt r 0)] (set! wall-count (+ 1 wall-count)) (new Wall (+ ''wall-'' wall-count (JSON\.stringify [: x y w h])) x y w h r)) (anything-else-11961 (_throw (_+ ''Match fail in w* against: '' anything-else-11961))))) for value ")+(JSON.stringify(G11963))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus11956 = actualFunminus11958.apply(this, arguments);
      while (recurP11959(returnValueminus11956))        {
        returnValueminus11956 = actualFunminus11958.apply(this, returnValueminus11956.args);
        };
      return returnValueminus11956;
      });
    var pi = Math.PI;
    window.levelGeometry = undefined;
    currentModuleminus11952.testBed = (function ()      {
      var shift = -40;
      var geometry = [wtimes(0, moduleminus58c4bce870.plus(shift, 200), 800, 10, moduleminus58c4bce870.divide(pi, 10)), wtimes(0, moduleminus58c4bce870.plus(shift, 230), 800, 10, moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(pi, 10)))];
      window.levelGeometry = geometry;
      return {        
        geometry:geometry,
        initialPosition:[-20, 20]
      };
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus11952;
  }))