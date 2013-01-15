define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, gamvas)  {
  var currentModuleminus24597 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus24597 = value;
    });
  ((function ()    {
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
    currentModuleminus24597.modsignTripleEqualminus0 = (function (n, m)      {
      return moduleminus58c4bce870.TripleEqualminus(0, moduleminus58c4bce870.modsign(n, m));
      });
    currentModuleminus24597.drgba = (function ()      {
      var returnValueminus24792 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus24791",
          args:arguments
        };
        });
      var recurP24795 = (function (valminus24796)        {
        if ((("undefined")===((typeof valminus24796))))          {
          return false;
          };
        return (valminus24796.recurSigil===("recurSigilminus24791"));
        });
      var actualFunminus24794 = (function ()        {
        return (function (arguments)          {
          var G24798 = undefined;
          var G24799 = Array.prototype.slice.apply(arguments);
          G24798 = (function (arguments)            {
            var matchValminus24800 = G24799;
            if ((!((matchValminus24800.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus24801 = Array.prototype.slice.call(matchValminus24800, 0, 0);
            if ((!((0===matchArraySimplePartminus24801.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPartminus24802 = Array.prototype.slice.call(matchValminus24800, 0);
            var matchTempminus24803 = matchArrayTailPartminus24802[0];
            if ((("undefined")===((typeof matchTempminus24803))))              {
              matchTempminus24803 = {                
                
              };
              };
            var matchObjectTempminus24804 = matchTempminus24803.r;
            var previousMatchSucceededminus24812 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus24804))))                {
                previousMatchSucceededminus24812 = false;
                };
              var r = matchObjectTempminus24804;
              if (previousMatchSucceededminus24812)                {
                break;
                };
              previousMatchSucceededminus24812 = true;
              case 1:
              var fResult24813 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus24804);
              if ((fResult24813===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus24812 = false;
                };
              var r = fResult24813;
              if (previousMatchSucceededminus24812)                {
                break;
                };
              previousMatchSucceededminus24812 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus24805 = matchTempminus24803.dr;
            var previousMatchSucceededminus24814 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus24805))))                {
                previousMatchSucceededminus24814 = false;
                };
              var dr = matchObjectTempminus24805;
              if (previousMatchSucceededminus24814)                {
                break;
                };
              previousMatchSucceededminus24814 = true;
              case 1:
              var fResult24815 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus24805);
              if ((fResult24815===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus24814 = false;
                };
              var dr = fResult24815;
              if (previousMatchSucceededminus24814)                {
                break;
                };
              previousMatchSucceededminus24814 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus24806 = matchTempminus24803.g;
            var previousMatchSucceededminus24816 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus24806))))                {
                previousMatchSucceededminus24816 = false;
                };
              var g = matchObjectTempminus24806;
              if (previousMatchSucceededminus24816)                {
                break;
                };
              previousMatchSucceededminus24816 = true;
              case 1:
              var fResult24817 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus24806);
              if ((fResult24817===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus24816 = false;
                };
              var g = fResult24817;
              if (previousMatchSucceededminus24816)                {
                break;
                };
              previousMatchSucceededminus24816 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus24807 = matchTempminus24803.dg;
            var previousMatchSucceededminus24818 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus24807))))                {
                previousMatchSucceededminus24818 = false;
                };
              var dg = matchObjectTempminus24807;
              if (previousMatchSucceededminus24818)                {
                break;
                };
              previousMatchSucceededminus24818 = true;
              case 1:
              var fResult24819 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus24807);
              if ((fResult24819===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus24818 = false;
                };
              var dg = fResult24819;
              if (previousMatchSucceededminus24818)                {
                break;
                };
              previousMatchSucceededminus24818 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus24808 = matchTempminus24803.b;
            var previousMatchSucceededminus24820 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus24808))))                {
                previousMatchSucceededminus24820 = false;
                };
              var b = matchObjectTempminus24808;
              if (previousMatchSucceededminus24820)                {
                break;
                };
              previousMatchSucceededminus24820 = true;
              case 1:
              var fResult24821 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus24808);
              if ((fResult24821===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus24820 = false;
                };
              var b = fResult24821;
              if (previousMatchSucceededminus24820)                {
                break;
                };
              previousMatchSucceededminus24820 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus24809 = matchTempminus24803.db;
            var previousMatchSucceededminus24822 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus24809))))                {
                previousMatchSucceededminus24822 = false;
                };
              var db = matchObjectTempminus24809;
              if (previousMatchSucceededminus24822)                {
                break;
                };
              previousMatchSucceededminus24822 = true;
              case 1:
              var fResult24823 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus24809);
              if ((fResult24823===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus24822 = false;
                };
              var db = fResult24823;
              if (previousMatchSucceededminus24822)                {
                break;
                };
              previousMatchSucceededminus24822 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus24810 = matchTempminus24803.a;
            var previousMatchSucceededminus24824 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus24810))))                {
                previousMatchSucceededminus24824 = false;
                };
              var a = matchObjectTempminus24810;
              if (previousMatchSucceededminus24824)                {
                break;
                };
              previousMatchSucceededminus24824 = true;
              case 1:
              var fResult24825 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus24810);
              if ((fResult24825===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus24824 = false;
                };
              var a = fResult24825;
              if (previousMatchSucceededminus24824)                {
                break;
                };
              previousMatchSucceededminus24824 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus24811 = matchTempminus24803.da;
            var previousMatchSucceededminus24826 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus24811))))                {
                previousMatchSucceededminus24826 = false;
                };
              var da = matchObjectTempminus24811;
              if (previousMatchSucceededminus24826)                {
                break;
                };
              previousMatchSucceededminus24826 = true;
              case 1:
              var fResult24827 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus24811);
              if ((fResult24827===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus24826 = false;
                };
              var da = fResult24827;
              if (previousMatchSucceededminus24826)                {
                break;
                };
              previousMatchSucceededminus24826 = true;
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
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24798))))            {
            return G24798;
            };
          G24798 = (function (arguments)            {
            var matchValminus24860 = G24799;
            var anythingElseminus24797 = matchValminus24860;
            throw ((("Match fail in rosy/utils-drgba against: ")+anythingElseminus24797));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24798))))            {
            return G24798;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (options{} (r 100) (dr 0) (g 100) (dg 0) (b 100) (db 0) (a 0) (da 0))] (set! (@ r) r) (set! (@ g) g) (set! (@ b) b) (set! (@ a) a) (set! (@ dr) dr) (set! (@ dg) dg) (set! (@ db) db) (set! (@ da) da) this) (anything-else-24797 (_throw (_+ ''Match fail in rosy/utils-drgba against: '' anything-else-24797))))) for value ")+(JSON.stringify(G24799))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus24792 = actualFunminus24794.apply(this, arguments);
      while (recurP24795(returnValueminus24792))        {
        returnValueminus24792 = actualFunminus24794.apply(this, returnValueminus24792.args);
        };
      return returnValueminus24792;
      });
    var colorRectify = (function (v)      {
      return Math.round(((moduleminus58c4bce870.greaterThan(v, 255))?(255) : (((moduleminus58c4bce870.lessThan(v, 0))?(0) : (v)))));
      });
    var alphaRectify = (function (a)      {
      return ((moduleminus58c4bce870.greaterThan(a, 1))?(1) : (((moduleminus58c4bce870.lessThan(a, 0))?(0) : (a))));
      });
    var colorRandom = (function (c, m)      {
      var r = moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(m, 2), currentModuleminus24597.random(m));
      var a = colorRectify(moduleminus58c4bce870.plus(c, r));
      return a;
      });
    var alphaRandom = (function (c, m)      {
      var r = moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(m, 2), currentModuleminus24597.random(m));
      var a = alphaRectify(moduleminus58c4bce870.plus(c, r));
      return a;
      });
    currentModuleminus24597.drgba.prototype.toString = (function ()      {
      return moduleminus58c4bce870.plus("rgba(", colorRandom(this.r, this.dr), ",", colorRandom(this.g, this.dg), ",", colorRandom(this.b, this.db), ",", alphaRandom(this.a, this.da), ")");
      });
    currentModuleminus24597.makeDrgba = (function (options)      {
      return (new currentModuleminus24597.drgba(options));
      });
    currentModuleminus24597.moveTowards = (function ()      {
      var returnValueminus24970 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus24969",
          args:arguments
        };
        });
      var recurP24973 = (function (valminus24974)        {
        if ((("undefined")===((typeof valminus24974))))          {
          return false;
          };
        return (valminus24974.recurSigil===("recurSigilminus24969"));
        });
      var actualFunminus24972 = (function ()        {
        return (function (arguments)          {
          var G24976 = undefined;
          var G24977 = Array.prototype.slice.apply(arguments);
          G24976 = (function (arguments)            {
            var matchValminus24978 = G24977;
            if ((!((3===matchValminus24978.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus24979 = matchValminus24978[0];
            var matchTempminus24980 = matchValminus24978[1];
            var matchTempminus24981 = matchValminus24978[2];
            var camera = matchTempminus24979;
            if ((("undefined")===((typeof matchTempminus24979))))              {
              matchTempminus24979 = {                
                
              };
              };
            var matchObjectTempminus24982 = matchTempminus24979.position;
            var cx = matchObjectTempminus24982.x;
            if ((("undefined")===((typeof cx))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var cy = matchObjectTempminus24982.y;
            if ((("undefined")===((typeof cy))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x = matchTempminus24980.x;
            if ((("undefined")===((typeof x))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var y = matchTempminus24980.y;
            if ((("undefined")===((typeof y))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var time = matchTempminus24981;
            var d = (new gamvas.Vector2D(moduleminus58c4bce870.minus(x, cx), moduleminus58c4bce870.minus(y, cy)));
            var len = d.length();
            var dir = d.normalized();
            var move = (new gamvas.Vector2D(moduleminus58c4bce870.times(time, dir.x, Math.pow(moduleminus58c4bce870.times(0.1, len), 4)), moduleminus58c4bce870.times(time, dir.y, Math.pow(moduleminus58c4bce870.times(0.1, len), 4))));
            return camera.move(move.x, move.y);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24976))))            {
            return G24976;
            };
          G24976 = (function (arguments)            {
            var matchValminus24983 = G24977;
            var anythingElseminus24975 = matchValminus24983;
            throw ((("Match fail in rosy/utils-move-towards against: ")+anythingElseminus24975));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G24976))))            {
            return G24976;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (and camera ({}- position ({} x cx y cy))) ({} x x y y) time] (var d (new gamvas\.Vector2D (- x cx) (- y cy))) (var len (d\.length)) (var dir (d\.normalized)) (var move (new gamvas\.Vector2D (* time dir\.x (Math\.pow (* 0.1 len) 4)) (* time dir\.y (Math\.pow (* 0.1 len) 4)))) (camera\.move move\.x move\.y)) (anything-else-24975 (_throw (_+ ''Match fail in rosy/utils-move-towards against: '' anything-else-24975))))) for value ")+(JSON.stringify(G24977))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus24970 = actualFunminus24972.apply(this, arguments);
      while (recurP24973(returnValueminus24970))        {
        returnValueminus24970 = actualFunminus24972.apply(this, returnValueminus24970.args);
        };
      return returnValueminus24970;
      });
    currentModuleminus24597.random = (function ()      {
      var returnValueminus25014 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus25013",
          args:arguments
        };
        });
      var recurP25017 = (function (valminus25018)        {
        if ((("undefined")===((typeof valminus25018))))          {
          return false;
          };
        return (valminus25018.recurSigil===("recurSigilminus25013"));
        });
      var actualFunminus25016 = (function ()        {
        return (function (arguments)          {
          var G25020 = undefined;
          var G25021 = Array.prototype.slice.apply(arguments);
          G25020 = (function (arguments)            {
            var matchValminus25022 = G25021;
            if ((!((1===matchValminus25022.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus25022[0];
            return moduleminus58c4bce870.times(magnitude, Math.random());
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25020))))            {
            return G25020;
            };
          G25020 = (function (arguments)            {
            var matchValminus25023 = G25021;
            if ((!((2===matchValminus25023.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus25023[0];
            var offset = matchValminus25023[1];
            return moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25020))))            {
            return G25020;
            };
          G25020 = (function (arguments)            {
            var matchValminus25024 = G25021;
            var anythingElseminus25019 = matchValminus25024;
            throw ((("Match fail in rosy/utils-random against: ")+anythingElseminus25019));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25020))))            {
            return G25020;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: magnitude] (* magnitude (Math\.random))) ([: magnitude offset] (+ offset (* magnitude (Math\.random)))) (anything-else-25019 (_throw (_+ ''Match fail in rosy/utils-random against: '' anything-else-25019))))) for value ")+(JSON.stringify(G25021))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus25014 = actualFunminus25016.apply(this, arguments);
      while (recurP25017(returnValueminus25014))        {
        returnValueminus25014 = actualFunminus25016.apply(this, returnValueminus25014.args);
        };
      return returnValueminus25014;
      });
    currentModuleminus24597.randomInt = (function ()      {
      var returnValueminus25055 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus25054",
          args:arguments
        };
        });
      var recurP25058 = (function (valminus25059)        {
        if ((("undefined")===((typeof valminus25059))))          {
          return false;
          };
        return (valminus25059.recurSigil===("recurSigilminus25054"));
        });
      var actualFunminus25057 = (function ()        {
        return (function (arguments)          {
          var G25061 = undefined;
          var G25062 = Array.prototype.slice.apply(arguments);
          G25061 = (function (arguments)            {
            var matchValminus25063 = G25062;
            if ((!((1===matchValminus25063.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus25063[0];
            return Math.round(moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25061))))            {
            return G25061;
            };
          G25061 = (function (arguments)            {
            var matchValminus25064 = G25062;
            if ((!((2===matchValminus25064.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus25064[0];
            var offset = matchValminus25064[1];
            return Math.round(moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random())));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25061))))            {
            return G25061;
            };
          G25061 = (function (arguments)            {
            var matchValminus25065 = G25062;
            var anythingElseminus25060 = matchValminus25065;
            throw ((("Match fail in rosy/utils-random-int against: ")+anythingElseminus25060));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25061))))            {
            return G25061;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: magnitude] (Math\.round (* magnitude (Math\.random)))) ([: magnitude offset] (Math\.round (+ offset (* magnitude (Math\.random))))) (anything-else-25060 (_throw (_+ ''Match fail in rosy/utils-random-int against: '' anything-else-25060))))) for value ")+(JSON.stringify(G25062))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus25055 = actualFunminus25057.apply(this, arguments);
      while (recurP25058(returnValueminus25055))        {
        returnValueminus25055 = actualFunminus25057.apply(this, returnValueminus25055.args);
        };
      return returnValueminus25055;
      });
    }))();
  return currentModuleminus24597;
  }))