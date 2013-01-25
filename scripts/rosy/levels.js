define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, gamvas)  {
  var currentModuleminus69618 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus69618 = value;
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
      var returnValueminus69810 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus69809",
          args:arguments
        };
        });
      var recurP69813 = (function (valminus69814)        {
        if ((("undefined")===((typeof valminus69814))))          {
          return false;
          };
        return (valminus69814.recurSigil===("recurSigilminus69809"));
        });
      var actualFunminus69812 = (function ()        {
        return (function (arguments)          {
          var G69816 = undefined;
          var G69817 = Array.prototype.slice.apply(arguments);
          G69816 = (function (arguments)            {
            var matchValminus69818 = G69817;
            if ((!((("object")===((typeof matchValminus69818))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus69818.length>=4))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus69819 = Array.prototype.slice.call(matchValminus69818, 0, 4);
            if ((!((("object")===((typeof matchArraySimplePartminus69819))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchArraySimplePartminus69819.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x = matchArraySimplePartminus69819[0];
            var y = matchArraySimplePartminus69819[1];
            var w = matchArraySimplePartminus69819[2];
            var h = matchArraySimplePartminus69819[3];
            var matchArrayTailPartminus69820 = Array.prototype.slice.call(matchValminus69818, 4);
            var matchTempminus69821 = matchArrayTailPartminus69820[0];
            var previousMatchSucceededminus69822 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus69821))))                {
                previousMatchSucceededminus69822 = false;
                };
              var r = matchTempminus69821;
              if (previousMatchSucceededminus69822)                {
                break;
                };
              previousMatchSucceededminus69822 = true;
              case 1:
              var fResult69823 = ((function (x)                {
                return 0;
                }))(matchTempminus69821);
              if ((fResult69823===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus69822 = false;
                };
              var r = fResult69823;
              if (previousMatchSucceededminus69822)                {
                break;
                };
              previousMatchSucceededminus69822 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            wallCount = moduleminus58c4bce870.plus(1, wallCount);
            return (new moduleB147560188.Wall(moduleminus58c4bce870.plus("wall-", wallCount, JSON.stringify([x, y, w, h])), x, y, w, h, r));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69816))))            {
            return G69816;
            };
          G69816 = (function (arguments)            {
            var matchValminus69824 = G69817;
            var anythingElseminus69815 = matchValminus69824;
            throw ((("Match fail in w* against: ")+anythingElseminus69815));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69816))))            {
            return G69816;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: x y w h :- (opt r 0)] (set! wall-count (+ 1 wall-count)) (new Wall (+ ''wall-'' wall-count (JSON\.stringify [: x y w h])) x y w h r)) (anything-else-69815 (_throw (_+ ''Match fail in w* against: '' anything-else-69815))))) for value ")+(JSON.stringify(G69817))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus69810 = actualFunminus69812.apply(this, arguments);
      while (recurP69813(returnValueminus69810))        {
        returnValueminus69810 = actualFunminus69812.apply(this, returnValueminus69810.args);
        };
      return returnValueminus69810;
      });
    var pi = Math.PI;
    window.levelGeometry = undefined;
    currentModuleminus69618.testBed = (function ()      {
      var shift = -40;
      var geometry = [wtimes(0, moduleminus58c4bce870.plus(shift, 200), 800, 10, moduleminus58c4bce870.divide(pi, 10)), wtimes(0, moduleminus58c4bce870.plus(shift, 230), 800, 10, moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(pi, 10)))];
      window.levelGeometry = geometry;
      return {        
        geometry:geometry,
        initialPosition:[12, 20]
      };
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus69618;
  }))