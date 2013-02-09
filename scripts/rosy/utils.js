define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, gamvas)  {
  var currentModuleminus75730 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus75730 = value;
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
    currentModuleminus75730.modsignTripleEqualminus0 = (function (n, m)      {
      return moduleminus58c4bce870.TripleEqualminus(0, moduleminus58c4bce870.modsign(n, m));
      });
    currentModuleminus75730.drgba = (function ()      {
      var returnValueminus75778 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus75777",
          args:arguments
        };
        });
      var recurP75781 = (function (valminus75782)        {
        if ((("undefined")===((typeof valminus75782))))          {
          return false;
          };
        return (valminus75782.recurSigil===("recurSigilminus75777"));
        });
      var actualFunminus75780 = (function ()        {
        return (function (arguments)          {
          var G75784 = undefined;
          var G75785 = Array.prototype.slice.apply(arguments);
          G75784 = (function (arguments)            {
            var matchValminus75786 = G75785;
            if ((!((("object")===((typeof matchValminus75786))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus75786.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus75787 = Array.prototype.slice.call(matchValminus75786, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePartminus75787))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePartminus75787.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPartminus75788 = Array.prototype.slice.call(matchValminus75786, 0);
            var matchTempminus75789 = matchArrayTailPartminus75788[0];
            if ((("undefined")===((typeof matchTempminus75789))))              {
              matchTempminus75789 = {                
                
              };
              };
            var matchObjectTempminus75790 = matchTempminus75789.r;
            var previousMatchSucceededminus75798 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus75790))))                {
                previousMatchSucceededminus75798 = false;
                };
              var r = matchObjectTempminus75790;
              if (previousMatchSucceededminus75798)                {
                break;
                };
              previousMatchSucceededminus75798 = true;
              case 1:
              var fResult75799 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus75790);
              if ((fResult75799===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus75798 = false;
                };
              var r = fResult75799;
              if (previousMatchSucceededminus75798)                {
                break;
                };
              previousMatchSucceededminus75798 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus75791 = matchTempminus75789.dr;
            var previousMatchSucceededminus75800 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus75791))))                {
                previousMatchSucceededminus75800 = false;
                };
              var dr = matchObjectTempminus75791;
              if (previousMatchSucceededminus75800)                {
                break;
                };
              previousMatchSucceededminus75800 = true;
              case 1:
              var fResult75801 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus75791);
              if ((fResult75801===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus75800 = false;
                };
              var dr = fResult75801;
              if (previousMatchSucceededminus75800)                {
                break;
                };
              previousMatchSucceededminus75800 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus75792 = matchTempminus75789.g;
            var previousMatchSucceededminus75802 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus75792))))                {
                previousMatchSucceededminus75802 = false;
                };
              var g = matchObjectTempminus75792;
              if (previousMatchSucceededminus75802)                {
                break;
                };
              previousMatchSucceededminus75802 = true;
              case 1:
              var fResult75803 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus75792);
              if ((fResult75803===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus75802 = false;
                };
              var g = fResult75803;
              if (previousMatchSucceededminus75802)                {
                break;
                };
              previousMatchSucceededminus75802 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus75793 = matchTempminus75789.dg;
            var previousMatchSucceededminus75804 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus75793))))                {
                previousMatchSucceededminus75804 = false;
                };
              var dg = matchObjectTempminus75793;
              if (previousMatchSucceededminus75804)                {
                break;
                };
              previousMatchSucceededminus75804 = true;
              case 1:
              var fResult75805 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus75793);
              if ((fResult75805===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus75804 = false;
                };
              var dg = fResult75805;
              if (previousMatchSucceededminus75804)                {
                break;
                };
              previousMatchSucceededminus75804 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus75794 = matchTempminus75789.b;
            var previousMatchSucceededminus75806 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus75794))))                {
                previousMatchSucceededminus75806 = false;
                };
              var b = matchObjectTempminus75794;
              if (previousMatchSucceededminus75806)                {
                break;
                };
              previousMatchSucceededminus75806 = true;
              case 1:
              var fResult75807 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus75794);
              if ((fResult75807===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus75806 = false;
                };
              var b = fResult75807;
              if (previousMatchSucceededminus75806)                {
                break;
                };
              previousMatchSucceededminus75806 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus75795 = matchTempminus75789.db;
            var previousMatchSucceededminus75808 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus75795))))                {
                previousMatchSucceededminus75808 = false;
                };
              var db = matchObjectTempminus75795;
              if (previousMatchSucceededminus75808)                {
                break;
                };
              previousMatchSucceededminus75808 = true;
              case 1:
              var fResult75809 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus75795);
              if ((fResult75809===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus75808 = false;
                };
              var db = fResult75809;
              if (previousMatchSucceededminus75808)                {
                break;
                };
              previousMatchSucceededminus75808 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus75796 = matchTempminus75789.a;
            var previousMatchSucceededminus75810 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus75796))))                {
                previousMatchSucceededminus75810 = false;
                };
              var a = matchObjectTempminus75796;
              if (previousMatchSucceededminus75810)                {
                break;
                };
              previousMatchSucceededminus75810 = true;
              case 1:
              var fResult75811 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus75796);
              if ((fResult75811===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus75810 = false;
                };
              var a = fResult75811;
              if (previousMatchSucceededminus75810)                {
                break;
                };
              previousMatchSucceededminus75810 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus75797 = matchTempminus75789.da;
            var previousMatchSucceededminus75812 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus75797))))                {
                previousMatchSucceededminus75812 = false;
                };
              var da = matchObjectTempminus75797;
              if (previousMatchSucceededminus75812)                {
                break;
                };
              previousMatchSucceededminus75812 = true;
              case 1:
              var fResult75813 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus75797);
              if ((fResult75813===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus75812 = false;
                };
              var da = fResult75813;
              if (previousMatchSucceededminus75812)                {
                break;
                };
              previousMatchSucceededminus75812 = true;
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
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75784))))            {
            return G75784;
            };
          G75784 = (function (arguments)            {
            var matchValminus75846 = G75785;
            var anythingElseminus75783 = matchValminus75846;
            throw ((("Match fail in rosy/utils-drgba against: ")+anythingElseminus75783));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75784))))            {
            return G75784;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (options{} (r 100) (dr 0) (g 100) (dg 0) (b 100) (db 0) (a 0) (da 0))] (set! (@ r) r) (set! (@ g) g) (set! (@ b) b) (set! (@ a) a) (set! (@ dr) dr) (set! (@ dg) dg) (set! (@ db) db) (set! (@ da) da) this) (anything-else-75783 (_throw (_+ ''Match fail in rosy/utils-drgba against: '' anything-else-75783))))) for value ")+(JSON.stringify(G75785))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus75778 = actualFunminus75780.apply(this, arguments);
      while (recurP75781(returnValueminus75778))        {
        returnValueminus75778 = actualFunminus75780.apply(this, returnValueminus75778.args);
        };
      return returnValueminus75778;
      });
    var colorRectify = (function (v)      {
      return Math.round(((moduleminus58c4bce870.greaterThan(v, 255))?(255) : (((moduleminus58c4bce870.lessThan(v, 0))?(0) : (v)))));
      });
    var alphaRectify = (function (a)      {
      return ((moduleminus58c4bce870.greaterThan(a, 1))?(1) : (((moduleminus58c4bce870.lessThan(a, 0))?(0) : (a))));
      });
    var colorRandom = (function (c, m)      {
      var r = moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(m, 2), currentModuleminus75730.random(m));
      var a = colorRectify(moduleminus58c4bce870.plus(c, r));
      return a;
      });
    var alphaRandom = (function (c, m)      {
      var r = moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(m, 2), currentModuleminus75730.random(m));
      var a = alphaRectify(moduleminus58c4bce870.plus(c, r));
      return a;
      });
    currentModuleminus75730.drgba.prototype.toString = (function ()      {
      return moduleminus58c4bce870.plus("rgba(", colorRandom(this.r, this.dr), ",", colorRandom(this.g, this.dg), ",", colorRandom(this.b, this.db), ",", alphaRandom(this.a, this.da), ")");
      });
    currentModuleminus75730.makeDrgba = (function (options)      {
      return (new (currentModuleminus75730.drgba)(options));
      });
    currentModuleminus75730.moveTowards = (function ()      {
      var returnValueminus75956 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus75955",
          args:arguments
        };
        });
      var recurP75959 = (function (valminus75960)        {
        if ((("undefined")===((typeof valminus75960))))          {
          return false;
          };
        return (valminus75960.recurSigil===("recurSigilminus75955"));
        });
      var actualFunminus75958 = (function ()        {
        return (function (arguments)          {
          var G75962 = undefined;
          var G75963 = Array.prototype.slice.apply(arguments);
          G75962 = (function (arguments)            {
            var matchValminus75964 = G75963;
            if ((!((("object")===((typeof matchValminus75964))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus75964.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus75965 = matchValminus75964[0];
            var matchTempminus75966 = matchValminus75964[1];
            var matchTempminus75967 = matchValminus75964[2];
            var camera = matchTempminus75965;
            if ((("undefined")===((typeof matchTempminus75965))))              {
              matchTempminus75965 = {                
                
              };
              };
            var matchObjectTempminus75968 = matchTempminus75965.position;
            var cx = matchObjectTempminus75968.x;
            if ((("undefined")===((typeof cx))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var cy = matchObjectTempminus75968.y;
            if ((("undefined")===((typeof cy))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x = matchTempminus75966.x;
            if ((("undefined")===((typeof x))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var y = matchTempminus75966.y;
            if ((("undefined")===((typeof y))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var time = matchTempminus75967;
            var d = (new (gamvas.Vector2D)(moduleminus58c4bce870.minus(x, cx), moduleminus58c4bce870.minus(y, cy)));
            var len = d.length();
            var dir = d.normalized();
            var move = (new (gamvas.Vector2D)(moduleminus58c4bce870.times(time, dir.x, Math.pow(moduleminus58c4bce870.times(0.1, len), 4)), moduleminus58c4bce870.times(time, dir.y, Math.pow(moduleminus58c4bce870.times(0.1, len), 4))));
            return camera.move(move.x, move.y);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75962))))            {
            return G75962;
            };
          G75962 = (function (arguments)            {
            var matchValminus75969 = G75963;
            var anythingElseminus75961 = matchValminus75969;
            throw ((("Match fail in rosy/utils-move-towards against: ")+anythingElseminus75961));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G75962))))            {
            return G75962;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (and camera ({}- position ({} x cx y cy))) ({} x x y y) time] (var d (new gamvas\.Vector2D (- x cx) (- y cy))) (var len (d\.length)) (var dir (d\.normalized)) (var move (new gamvas\.Vector2D (* time dir\.x (Math\.pow (* 0.1 len) 4)) (* time dir\.y (Math\.pow (* 0.1 len) 4)))) (camera\.move move\.x move\.y)) (anything-else-75961 (_throw (_+ ''Match fail in rosy/utils-move-towards against: '' anything-else-75961))))) for value ")+(JSON.stringify(G75963))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus75956 = actualFunminus75958.apply(this, arguments);
      while (recurP75959(returnValueminus75956))        {
        returnValueminus75956 = actualFunminus75958.apply(this, returnValueminus75956.args);
        };
      return returnValueminus75956;
      });
    currentModuleminus75730.random = (function ()      {
      var returnValueminus76000 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus75999",
          args:arguments
        };
        });
      var recurP76003 = (function (valminus76004)        {
        if ((("undefined")===((typeof valminus76004))))          {
          return false;
          };
        return (valminus76004.recurSigil===("recurSigilminus75999"));
        });
      var actualFunminus76002 = (function ()        {
        return (function (arguments)          {
          var G76006 = undefined;
          var G76007 = Array.prototype.slice.apply(arguments);
          G76006 = (function (arguments)            {
            var matchValminus76008 = G76007;
            if ((!((("object")===((typeof matchValminus76008))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus76008.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus76008[0];
            return moduleminus58c4bce870.times(magnitude, Math.random());
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76006))))            {
            return G76006;
            };
          G76006 = (function (arguments)            {
            var matchValminus76009 = G76007;
            if ((!((("object")===((typeof matchValminus76009))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus76009.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus76009[0];
            var offset = matchValminus76009[1];
            return moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76006))))            {
            return G76006;
            };
          G76006 = (function (arguments)            {
            var matchValminus76010 = G76007;
            var anythingElseminus76005 = matchValminus76010;
            throw ((("Match fail in rosy/utils-random against: ")+anythingElseminus76005));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76006))))            {
            return G76006;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: magnitude] (* magnitude (Math\.random))) ([: magnitude offset] (+ offset (* magnitude (Math\.random)))) (anything-else-76005 (_throw (_+ ''Match fail in rosy/utils-random against: '' anything-else-76005))))) for value ")+(JSON.stringify(G76007))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus76000 = actualFunminus76002.apply(this, arguments);
      while (recurP76003(returnValueminus76000))        {
        returnValueminus76000 = actualFunminus76002.apply(this, returnValueminus76000.args);
        };
      return returnValueminus76000;
      });
    currentModuleminus75730.randomNormal = (function ()      {
      var returnValueminus76034 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus76033",
          args:arguments
        };
        });
      var recurP76037 = (function (valminus76038)        {
        if ((("undefined")===((typeof valminus76038))))          {
          return false;
          };
        return (valminus76038.recurSigil===("recurSigilminus76033"));
        });
      var actualFunminus76036 = (function ()        {
        return (function (arguments)          {
          var G76040 = undefined;
          var G76041 = Array.prototype.slice.apply(arguments);
          G76040 = (function (arguments)            {
            var matchValminus76042 = G76041;
            if ((!((("object")===((typeof matchValminus76042))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus76042.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus76043 = Array.prototype.slice.call(matchValminus76042, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePartminus76043))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePartminus76043.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPartminus76044 = Array.prototype.slice.call(matchValminus76042, 0);
            var matchTempminus76045 = matchArrayTailPartminus76044[0];
            var matchTempminus76046 = matchArrayTailPartminus76044[1];
            var previousMatchSucceededminus76047 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus76045))))                {
                previousMatchSucceededminus76047 = false;
                };
              var c = matchTempminus76045;
              if (previousMatchSucceededminus76047)                {
                break;
                };
              previousMatchSucceededminus76047 = true;
              case 1:
              var fResult76048 = ((function (x)                {
                return 0;
                }))(matchTempminus76045);
              if ((fResult76048===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus76047 = false;
                };
              var c = fResult76048;
              if (previousMatchSucceededminus76047)                {
                break;
                };
              previousMatchSucceededminus76047 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var previousMatchSucceededminus76049 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus76046))))                {
                previousMatchSucceededminus76049 = false;
                };
              var s = matchTempminus76046;
              if (previousMatchSucceededminus76049)                {
                break;
                };
              previousMatchSucceededminus76049 = true;
              case 1:
              var fResult76050 = ((function (x)                {
                return 1;
                }))(matchTempminus76046);
              if ((fResult76050===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus76049 = false;
                };
              var s = fResult76050;
              if (previousMatchSucceededminus76049)                {
                break;
                };
              previousMatchSucceededminus76049 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var total = 0;
            for (var i = 0;moduleminus58c4bce870.lessThan(i, 10);i = moduleminus58c4bce870.plus(i, 1))              {
              total = moduleminus58c4bce870.plus(total, currentModuleminus75730.random(2, -1));
              };
            total = moduleminus58c4bce870.divide(total, 10);
            return moduleminus58c4bce870.plus(c, moduleminus58c4bce870.times(total, s));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76040))))            {
            return G76040;
            };
          G76040 = (function (arguments)            {
            var matchValminus76051 = G76041;
            var anythingElseminus76039 = matchValminus76051;
            throw ((("Match fail in rosy/utils-random-normal against: ")+anythingElseminus76039));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76040))))            {
            return G76040;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (opt c 0) (opt s 1)] (var total 0) (for ((var i 0) (< i 10) (set! i (+ i 1))) (set! total (+ total (random 2 -1)))) (set! total (/ total 10)) (+ c (* total s))) (anything-else-76039 (_throw (_+ ''Match fail in rosy/utils-random-normal against: '' anything-else-76039))))) for value ")+(JSON.stringify(G76041))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus76034 = actualFunminus76036.apply(this, arguments);
      while (recurP76037(returnValueminus76034))        {
        returnValueminus76034 = actualFunminus76036.apply(this, returnValueminus76034.args);
        };
      return returnValueminus76034;
      });
    currentModuleminus75730.randomInt = (function ()      {
      var returnValueminus76082 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus76081",
          args:arguments
        };
        });
      var recurP76085 = (function (valminus76086)        {
        if ((("undefined")===((typeof valminus76086))))          {
          return false;
          };
        return (valminus76086.recurSigil===("recurSigilminus76081"));
        });
      var actualFunminus76084 = (function ()        {
        return (function (arguments)          {
          var G76088 = undefined;
          var G76089 = Array.prototype.slice.apply(arguments);
          G76088 = (function (arguments)            {
            var matchValminus76090 = G76089;
            if ((!((("object")===((typeof matchValminus76090))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus76090.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus76090[0];
            return Math.round(moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76088))))            {
            return G76088;
            };
          G76088 = (function (arguments)            {
            var matchValminus76091 = G76089;
            if ((!((("object")===((typeof matchValminus76091))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus76091.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus76091[0];
            var offset = matchValminus76091[1];
            return Math.round(moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random())));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76088))))            {
            return G76088;
            };
          G76088 = (function (arguments)            {
            var matchValminus76092 = G76089;
            var anythingElseminus76087 = matchValminus76092;
            throw ((("Match fail in rosy/utils-random-int against: ")+anythingElseminus76087));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76088))))            {
            return G76088;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: magnitude] (Math\.round (* magnitude (Math\.random)))) ([: magnitude offset] (Math\.round (+ offset (* magnitude (Math\.random))))) (anything-else-76087 (_throw (_+ ''Match fail in rosy/utils-random-int against: '' anything-else-76087))))) for value ")+(JSON.stringify(G76089))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus76082 = actualFunminus76084.apply(this, arguments);
      while (recurP76085(returnValueminus76082))        {
        returnValueminus76082 = actualFunminus76084.apply(this, returnValueminus76082.args);
        };
      return returnValueminus76082;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus75730;
  }))