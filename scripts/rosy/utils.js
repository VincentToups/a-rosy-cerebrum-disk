define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, gamvas)  {
  var currentModuleminus69256 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus69256 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" :all)
    ;
    // ("hooves/hooves" :all)
    ;
    // ((js "gamvas/gamvas-module" gamvas))
    ;
    currentModuleminus69256.modsignTripleEqualminus0 = (function (n, m)      {
      return moduleminus58c4bce870.TripleEqualminus(0, moduleminus58c4bce870.modsign(n, m));
      });
    currentModuleminus69256.drgba = (function ()      {
      var returnValueminus69304 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus69303",
          args:arguments
        };
        });
      var recurP69307 = (function (valminus69308)        {
        if ((("undefined")===((typeof valminus69308))))          {
          return false;
          };
        return (valminus69308.recurSigil===("recurSigilminus69303"));
        });
      var actualFunminus69306 = (function ()        {
        return (function (arguments)          {
          var G69310 = undefined;
          var G69311 = Array.prototype.slice.apply(arguments);
          G69310 = (function (arguments)            {
            var matchValminus69312 = G69311;
            if ((!((("object")===((typeof matchValminus69312))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus69312.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus69313 = Array.prototype.slice.call(matchValminus69312, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePartminus69313))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePartminus69313.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPartminus69314 = Array.prototype.slice.call(matchValminus69312, 0);
            var matchTempminus69315 = matchArrayTailPartminus69314[0];
            if ((("undefined")===((typeof matchTempminus69315))))              {
              matchTempminus69315 = {                
                
              };
              };
            var matchObjectTempminus69316 = matchTempminus69315.r;
            var previousMatchSucceededminus69324 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus69316))))                {
                previousMatchSucceededminus69324 = false;
                };
              var r = matchObjectTempminus69316;
              if (previousMatchSucceededminus69324)                {
                break;
                };
              previousMatchSucceededminus69324 = true;
              case 1:
              var fResult69325 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus69316);
              if ((fResult69325===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus69324 = false;
                };
              var r = fResult69325;
              if (previousMatchSucceededminus69324)                {
                break;
                };
              previousMatchSucceededminus69324 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus69317 = matchTempminus69315.dr;
            var previousMatchSucceededminus69326 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus69317))))                {
                previousMatchSucceededminus69326 = false;
                };
              var dr = matchObjectTempminus69317;
              if (previousMatchSucceededminus69326)                {
                break;
                };
              previousMatchSucceededminus69326 = true;
              case 1:
              var fResult69327 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus69317);
              if ((fResult69327===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus69326 = false;
                };
              var dr = fResult69327;
              if (previousMatchSucceededminus69326)                {
                break;
                };
              previousMatchSucceededminus69326 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus69318 = matchTempminus69315.g;
            var previousMatchSucceededminus69328 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus69318))))                {
                previousMatchSucceededminus69328 = false;
                };
              var g = matchObjectTempminus69318;
              if (previousMatchSucceededminus69328)                {
                break;
                };
              previousMatchSucceededminus69328 = true;
              case 1:
              var fResult69329 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus69318);
              if ((fResult69329===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus69328 = false;
                };
              var g = fResult69329;
              if (previousMatchSucceededminus69328)                {
                break;
                };
              previousMatchSucceededminus69328 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus69319 = matchTempminus69315.dg;
            var previousMatchSucceededminus69330 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus69319))))                {
                previousMatchSucceededminus69330 = false;
                };
              var dg = matchObjectTempminus69319;
              if (previousMatchSucceededminus69330)                {
                break;
                };
              previousMatchSucceededminus69330 = true;
              case 1:
              var fResult69331 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus69319);
              if ((fResult69331===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus69330 = false;
                };
              var dg = fResult69331;
              if (previousMatchSucceededminus69330)                {
                break;
                };
              previousMatchSucceededminus69330 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus69320 = matchTempminus69315.b;
            var previousMatchSucceededminus69332 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus69320))))                {
                previousMatchSucceededminus69332 = false;
                };
              var b = matchObjectTempminus69320;
              if (previousMatchSucceededminus69332)                {
                break;
                };
              previousMatchSucceededminus69332 = true;
              case 1:
              var fResult69333 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus69320);
              if ((fResult69333===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus69332 = false;
                };
              var b = fResult69333;
              if (previousMatchSucceededminus69332)                {
                break;
                };
              previousMatchSucceededminus69332 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus69321 = matchTempminus69315.db;
            var previousMatchSucceededminus69334 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus69321))))                {
                previousMatchSucceededminus69334 = false;
                };
              var db = matchObjectTempminus69321;
              if (previousMatchSucceededminus69334)                {
                break;
                };
              previousMatchSucceededminus69334 = true;
              case 1:
              var fResult69335 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus69321);
              if ((fResult69335===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus69334 = false;
                };
              var db = fResult69335;
              if (previousMatchSucceededminus69334)                {
                break;
                };
              previousMatchSucceededminus69334 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus69322 = matchTempminus69315.a;
            var previousMatchSucceededminus69336 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus69322))))                {
                previousMatchSucceededminus69336 = false;
                };
              var a = matchObjectTempminus69322;
              if (previousMatchSucceededminus69336)                {
                break;
                };
              previousMatchSucceededminus69336 = true;
              case 1:
              var fResult69337 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus69322);
              if ((fResult69337===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus69336 = false;
                };
              var a = fResult69337;
              if (previousMatchSucceededminus69336)                {
                break;
                };
              previousMatchSucceededminus69336 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus69323 = matchTempminus69315.da;
            var previousMatchSucceededminus69338 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus69323))))                {
                previousMatchSucceededminus69338 = false;
                };
              var da = matchObjectTempminus69323;
              if (previousMatchSucceededminus69338)                {
                break;
                };
              previousMatchSucceededminus69338 = true;
              case 1:
              var fResult69339 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus69323);
              if ((fResult69339===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus69338 = false;
                };
              var da = fResult69339;
              if (previousMatchSucceededminus69338)                {
                break;
                };
              previousMatchSucceededminus69338 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
            this.dr = dr;
            this.dg = dg;
            this.db = db;
            this.da = da;
            return this;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69310))))            {
            return G69310;
            };
          G69310 = (function (arguments)            {
            var matchValminus69372 = G69311;
            var anythingElseminus69309 = matchValminus69372;
            throw ((("Match fail in rosy/utils-drgba against: ")+anythingElseminus69309));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69310))))            {
            return G69310;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (options{} (r 100) (dr 0) (g 100) (dg 0) (b 100) (db 0) (a 0) (da 0))] (set! (@ r) r) (set! (@ g) g) (set! (@ b) b) (set! (@ a) a) (set! (@ dr) dr) (set! (@ dg) dg) (set! (@ db) db) (set! (@ da) da) this) (anything-else-69309 (_throw (_+ ''Match fail in rosy/utils-drgba against: '' anything-else-69309))))) for value ")+(JSON.stringify(G69311))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus69304 = actualFunminus69306.apply(this, arguments);
      while (recurP69307(returnValueminus69304))        {
        returnValueminus69304 = actualFunminus69306.apply(this, returnValueminus69304.args);
        };
      return returnValueminus69304;
      });
    var colorRectify = (function (v)      {
      return Math.round(((moduleminus58c4bce870.greaterThan(v, 255))?(255) : (((moduleminus58c4bce870.lessThan(v, 0))?(0) : (v)))));
      });
    var alphaRectify = (function (a)      {
      return ((moduleminus58c4bce870.greaterThan(a, 1))?(1) : (((moduleminus58c4bce870.lessThan(a, 0))?(0) : (a))));
      });
    var colorRandom = (function (c, m)      {
      var r = moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(m, 2), currentModuleminus69256.random(m));
      var a = colorRectify(moduleminus58c4bce870.plus(c, r));
      return a;
      });
    var alphaRandom = (function (c, m)      {
      var r = moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(m, 2), currentModuleminus69256.random(m));
      var a = alphaRectify(moduleminus58c4bce870.plus(c, r));
      return a;
      });
    currentModuleminus69256.drgba.prototype.toString = (function ()      {
      return moduleminus58c4bce870.plus("rgba(", colorRandom(this.r, this.dr), ",", colorRandom(this.g, this.dg), ",", colorRandom(this.b, this.db), ",", alphaRandom(this.a, this.da), ")");
      });
    currentModuleminus69256.makeDrgba = (function (options)      {
      return (new currentModuleminus69256.drgba(options));
      });
    currentModuleminus69256.moveTowards = (function ()      {
      var returnValueminus69482 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus69481",
          args:arguments
        };
        });
      var recurP69485 = (function (valminus69486)        {
        if ((("undefined")===((typeof valminus69486))))          {
          return false;
          };
        return (valminus69486.recurSigil===("recurSigilminus69481"));
        });
      var actualFunminus69484 = (function ()        {
        return (function (arguments)          {
          var G69488 = undefined;
          var G69489 = Array.prototype.slice.apply(arguments);
          G69488 = (function (arguments)            {
            var matchValminus69490 = G69489;
            if ((!((("object")===((typeof matchValminus69490))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus69490.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus69491 = matchValminus69490[0];
            var matchTempminus69492 = matchValminus69490[1];
            var matchTempminus69493 = matchValminus69490[2];
            var camera = matchTempminus69491;
            if ((("undefined")===((typeof matchTempminus69491))))              {
              matchTempminus69491 = {                
                
              };
              };
            var matchObjectTempminus69494 = matchTempminus69491.position;
            var cx = matchObjectTempminus69494.x;
            if ((("undefined")===((typeof cx))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var cy = matchObjectTempminus69494.y;
            if ((("undefined")===((typeof cy))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x = matchTempminus69492.x;
            if ((("undefined")===((typeof x))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var y = matchTempminus69492.y;
            if ((("undefined")===((typeof y))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var time = matchTempminus69493;
            var d = (new gamvas.Vector2D(moduleminus58c4bce870.minus(x, cx), moduleminus58c4bce870.minus(y, cy)));
            var len = d.length();
            var dir = d.normalized();
            var move = (new gamvas.Vector2D(moduleminus58c4bce870.times(time, dir.x, Math.pow(moduleminus58c4bce870.times(0.1, len), 4)), moduleminus58c4bce870.times(time, dir.y, Math.pow(moduleminus58c4bce870.times(0.1, len), 4))));
            return camera.move(move.x, move.y);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69488))))            {
            return G69488;
            };
          G69488 = (function (arguments)            {
            var matchValminus69495 = G69489;
            var anythingElseminus69487 = matchValminus69495;
            throw ((("Match fail in rosy/utils-move-towards against: ")+anythingElseminus69487));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69488))))            {
            return G69488;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (and camera ({}- position ({} x cx y cy))) ({} x x y y) time] (var d (new gamvas\.Vector2D (- x cx) (- y cy))) (var len (d\.length)) (var dir (d\.normalized)) (var move (new gamvas\.Vector2D (* time dir\.x (Math\.pow (* 0.1 len) 4)) (* time dir\.y (Math\.pow (* 0.1 len) 4)))) (camera\.move move\.x move\.y)) (anything-else-69487 (_throw (_+ ''Match fail in rosy/utils-move-towards against: '' anything-else-69487))))) for value ")+(JSON.stringify(G69489))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus69482 = actualFunminus69484.apply(this, arguments);
      while (recurP69485(returnValueminus69482))        {
        returnValueminus69482 = actualFunminus69484.apply(this, returnValueminus69482.args);
        };
      return returnValueminus69482;
      });
    currentModuleminus69256.random = (function ()      {
      var returnValueminus69526 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus69525",
          args:arguments
        };
        });
      var recurP69529 = (function (valminus69530)        {
        if ((("undefined")===((typeof valminus69530))))          {
          return false;
          };
        return (valminus69530.recurSigil===("recurSigilminus69525"));
        });
      var actualFunminus69528 = (function ()        {
        return (function (arguments)          {
          var G69532 = undefined;
          var G69533 = Array.prototype.slice.apply(arguments);
          G69532 = (function (arguments)            {
            var matchValminus69534 = G69533;
            if ((!((("object")===((typeof matchValminus69534))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus69534.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus69534[0];
            return moduleminus58c4bce870.times(magnitude, Math.random());
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69532))))            {
            return G69532;
            };
          G69532 = (function (arguments)            {
            var matchValminus69535 = G69533;
            if ((!((("object")===((typeof matchValminus69535))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus69535.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus69535[0];
            var offset = matchValminus69535[1];
            return moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69532))))            {
            return G69532;
            };
          G69532 = (function (arguments)            {
            var matchValminus69536 = G69533;
            var anythingElseminus69531 = matchValminus69536;
            throw ((("Match fail in rosy/utils-random against: ")+anythingElseminus69531));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69532))))            {
            return G69532;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: magnitude] (* magnitude (Math\.random))) ([: magnitude offset] (+ offset (* magnitude (Math\.random)))) (anything-else-69531 (_throw (_+ ''Match fail in rosy/utils-random against: '' anything-else-69531))))) for value ")+(JSON.stringify(G69533))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus69526 = actualFunminus69528.apply(this, arguments);
      while (recurP69529(returnValueminus69526))        {
        returnValueminus69526 = actualFunminus69528.apply(this, returnValueminus69526.args);
        };
      return returnValueminus69526;
      });
    currentModuleminus69256.randomInt = (function ()      {
      var returnValueminus69567 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus69566",
          args:arguments
        };
        });
      var recurP69570 = (function (valminus69571)        {
        if ((("undefined")===((typeof valminus69571))))          {
          return false;
          };
        return (valminus69571.recurSigil===("recurSigilminus69566"));
        });
      var actualFunminus69569 = (function ()        {
        return (function (arguments)          {
          var G69573 = undefined;
          var G69574 = Array.prototype.slice.apply(arguments);
          G69573 = (function (arguments)            {
            var matchValminus69575 = G69574;
            if ((!((("object")===((typeof matchValminus69575))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus69575.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus69575[0];
            return Math.round(moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69573))))            {
            return G69573;
            };
          G69573 = (function (arguments)            {
            var matchValminus69576 = G69574;
            if ((!((("object")===((typeof matchValminus69576))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus69576.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus69576[0];
            var offset = matchValminus69576[1];
            return Math.round(moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random())));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69573))))            {
            return G69573;
            };
          G69573 = (function (arguments)            {
            var matchValminus69577 = G69574;
            var anythingElseminus69572 = matchValminus69577;
            throw ((("Match fail in rosy/utils-random-int against: ")+anythingElseminus69572));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69573))))            {
            return G69573;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: magnitude] (Math\.round (* magnitude (Math\.random)))) ([: magnitude offset] (Math\.round (+ offset (* magnitude (Math\.random))))) (anything-else-69572 (_throw (_+ ''Match fail in rosy/utils-random-int against: '' anything-else-69572))))) for value ")+(JSON.stringify(G69574))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus69567 = actualFunminus69569.apply(this, arguments);
      while (recurP69570(returnValueminus69567))        {
        returnValueminus69567 = actualFunminus69569.apply(this, returnValueminus69567.args);
        };
      return returnValueminus69567;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus69256;
  }))