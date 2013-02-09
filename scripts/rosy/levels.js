define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, gamvas)  {
  var currentModuleminus76133 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus76133 = value;
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
      var returnValueminus76463 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus76462",
          args:arguments
        };
        });
      var recurP76466 = (function (valminus76467)        {
        if ((("undefined")===((typeof valminus76467))))          {
          return false;
          };
        return (valminus76467.recurSigil===("recurSigilminus76462"));
        });
      var actualFunminus76465 = (function ()        {
        return (function (arguments)          {
          var G76469 = undefined;
          var G76470 = Array.prototype.slice.apply(arguments);
          G76469 = (function (arguments)            {
            var matchValminus76471 = G76470;
            if ((!((("object")===((typeof matchValminus76471))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus76471.length>=4))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus76472 = Array.prototype.slice.call(matchValminus76471, 0, 4);
            if ((!((("object")===((typeof matchArraySimplePartminus76472))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchArraySimplePartminus76472.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x = matchArraySimplePartminus76472[0];
            var y = matchArraySimplePartminus76472[1];
            var w = matchArraySimplePartminus76472[2];
            var h = matchArraySimplePartminus76472[3];
            var matchArrayTailPartminus76473 = Array.prototype.slice.call(matchValminus76471, 4);
            var matchTempminus76474 = matchArrayTailPartminus76473[0];
            var previousMatchSucceededminus76475 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus76474))))                {
                previousMatchSucceededminus76475 = false;
                };
              var r = matchTempminus76474;
              if (previousMatchSucceededminus76475)                {
                break;
                };
              previousMatchSucceededminus76475 = true;
              case 1:
              var fResult76476 = ((function (x)                {
                return 0;
                }))(matchTempminus76474);
              if ((fResult76476===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus76475 = false;
                };
              var r = fResult76476;
              if (previousMatchSucceededminus76475)                {
                break;
                };
              previousMatchSucceededminus76475 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            wallCount = moduleminus58c4bce870.plus(1, wallCount);
            return (new (moduleB147560188.Wall)(moduleminus58c4bce870.plus("wall-", wallCount, JSON.stringify([x, y, w, h])), x, y, w, h, r));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76469))))            {
            return G76469;
            };
          G76469 = (function (arguments)            {
            var matchValminus76477 = G76470;
            var anythingElseminus76468 = matchValminus76477;
            throw ((("Match fail in w* against: ")+anythingElseminus76468));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76469))))            {
            return G76469;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: x y w h :- (opt r 0)] (set! wall-count (+ 1 wall-count)) (new Wall (+ ''wall-'' wall-count (JSON\.stringify [: x y w h])) x y w h r)) (anything-else-76468 (_throw (_+ ''Match fail in w* against: '' anything-else-76468))))) for value ")+(JSON.stringify(G76470))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus76463 = actualFunminus76465.apply(this, arguments);
      while (recurP76466(returnValueminus76463))        {
        returnValueminus76463 = actualFunminus76465.apply(this, returnValueminus76463.args);
        };
      return returnValueminus76463;
      });
    var pi = Math.PI;
    window.levelGeometry = undefined;
    currentModuleminus76133.testBed = (function ()      {
      var shift = -40;
      var geometry = [wtimes(0, moduleminus58c4bce870.plus(shift, 200), 800, 10, moduleminus58c4bce870.divide(pi, 10)), wtimes(0, moduleminus58c4bce870.plus(shift, 230), 800, 10, moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(pi, 10)))];
      window.levelGeometry = geometry;
      return {        
        geometry:geometry,
        initialPosition:[-20, 20]
      };
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus76133;
  }))