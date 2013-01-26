define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, gamvas)  {
  var currentModuleminus295121 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus295121 = value;
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
      var returnValueminus295350 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus295349",
          args:arguments
        };
        });
      var recurP295353 = (function (valminus295354)        {
        if ((("undefined")===((typeof valminus295354))))          {
          return false;
          };
        return (valminus295354.recurSigil===("recurSigilminus295349"));
        });
      var actualFunminus295352 = (function ()        {
        return (function (arguments)          {
          var G295356 = undefined;
          var G295357 = Array.prototype.slice.apply(arguments);
          G295356 = (function (arguments)            {
            var matchValminus295358 = G295357;
            if ((!((("object")===((typeof matchValminus295358))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus295358.length>=4))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus295359 = Array.prototype.slice.call(matchValminus295358, 0, 4);
            if ((!((("object")===((typeof matchArraySimplePartminus295359))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchArraySimplePartminus295359.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x = matchArraySimplePartminus295359[0];
            var y = matchArraySimplePartminus295359[1];
            var w = matchArraySimplePartminus295359[2];
            var h = matchArraySimplePartminus295359[3];
            var matchArrayTailPartminus295360 = Array.prototype.slice.call(matchValminus295358, 4);
            var matchTempminus295361 = matchArrayTailPartminus295360[0];
            var previousMatchSucceededminus295362 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus295361))))                {
                previousMatchSucceededminus295362 = false;
                };
              var r = matchTempminus295361;
              if (previousMatchSucceededminus295362)                {
                break;
                };
              previousMatchSucceededminus295362 = true;
              case 1:
              var fResult295363 = ((function (x)                {
                return 0;
                }))(matchTempminus295361);
              if ((fResult295363===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus295362 = false;
                };
              var r = fResult295363;
              if (previousMatchSucceededminus295362)                {
                break;
                };
              previousMatchSucceededminus295362 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            wallCount = moduleminus58c4bce870.plus(1, wallCount);
            return (new (moduleB147560188.Wall)(moduleminus58c4bce870.plus("wall-", wallCount, JSON.stringify([x, y, w, h])), x, y, w, h, r));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295356))))            {
            return G295356;
            };
          G295356 = (function (arguments)            {
            var matchValminus295364 = G295357;
            var anythingElseminus295355 = matchValminus295364;
            throw ((("Match fail in w* against: ")+anythingElseminus295355));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295356))))            {
            return G295356;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: x y w h :- (opt r 0)] (set! wall-count (+ 1 wall-count)) (new Wall (+ ''wall-'' wall-count (JSON\.stringify [: x y w h])) x y w h r)) (anything-else-295355 (_throw (_+ ''Match fail in w* against: '' anything-else-295355))))) for value ")+(JSON.stringify(G295357))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus295350 = actualFunminus295352.apply(this, arguments);
      while (recurP295353(returnValueminus295350))        {
        returnValueminus295350 = actualFunminus295352.apply(this, returnValueminus295350.args);
        };
      return returnValueminus295350;
      });
    var pi = Math.PI;
    window.levelGeometry = undefined;
    currentModuleminus295121.testBed = (function ()      {
      var shift = -40;
      var geometry = [wtimes(0, moduleminus58c4bce870.plus(shift, 200), 800, 10, moduleminus58c4bce870.divide(pi, 10)), wtimes(0, moduleminus58c4bce870.plus(shift, 230), 800, 10, moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(pi, 10)))];
      window.levelGeometry = geometry;
      return {        
        geometry:geometry,
        initialPosition:[12, 20]
      };
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus295121;
  }))