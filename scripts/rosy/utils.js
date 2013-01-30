define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, gamvas)  {
  var currentModuleminus8671 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus8671 = value;
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
    currentModuleminus8671.modsignTripleEqualminus0 = (function (n, m)      {
      return moduleminus58c4bce870.TripleEqualminus(0, moduleminus58c4bce870.modsign(n, m));
      });
    currentModuleminus8671.drgba = (function ()      {
      var returnValueminus8719 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus8718",
          args:arguments
        };
        });
      var recurP8722 = (function (valminus8723)        {
        if ((("undefined")===((typeof valminus8723))))          {
          return false;
          };
        return (valminus8723.recurSigil===("recurSigilminus8718"));
        });
      var actualFunminus8721 = (function ()        {
        return (function (arguments)          {
          var G8725 = undefined;
          var G8726 = Array.prototype.slice.apply(arguments);
          G8725 = (function (arguments)            {
            var matchValminus8727 = G8726;
            if ((!((("object")===((typeof matchValminus8727))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus8727.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus8728 = Array.prototype.slice.call(matchValminus8727, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePartminus8728))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePartminus8728.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPartminus8729 = Array.prototype.slice.call(matchValminus8727, 0);
            var matchTempminus8730 = matchArrayTailPartminus8729[0];
            if ((("undefined")===((typeof matchTempminus8730))))              {
              matchTempminus8730 = {                
                
              };
              };
            var matchObjectTempminus8731 = matchTempminus8730.r;
            var previousMatchSucceededminus8739 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus8731))))                {
                previousMatchSucceededminus8739 = false;
                };
              var r = matchObjectTempminus8731;
              if (previousMatchSucceededminus8739)                {
                break;
                };
              previousMatchSucceededminus8739 = true;
              case 1:
              var fResult8740 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus8731);
              if ((fResult8740===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus8739 = false;
                };
              var r = fResult8740;
              if (previousMatchSucceededminus8739)                {
                break;
                };
              previousMatchSucceededminus8739 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus8732 = matchTempminus8730.dr;
            var previousMatchSucceededminus8741 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus8732))))                {
                previousMatchSucceededminus8741 = false;
                };
              var dr = matchObjectTempminus8732;
              if (previousMatchSucceededminus8741)                {
                break;
                };
              previousMatchSucceededminus8741 = true;
              case 1:
              var fResult8742 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus8732);
              if ((fResult8742===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus8741 = false;
                };
              var dr = fResult8742;
              if (previousMatchSucceededminus8741)                {
                break;
                };
              previousMatchSucceededminus8741 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus8733 = matchTempminus8730.g;
            var previousMatchSucceededminus8743 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus8733))))                {
                previousMatchSucceededminus8743 = false;
                };
              var g = matchObjectTempminus8733;
              if (previousMatchSucceededminus8743)                {
                break;
                };
              previousMatchSucceededminus8743 = true;
              case 1:
              var fResult8744 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus8733);
              if ((fResult8744===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus8743 = false;
                };
              var g = fResult8744;
              if (previousMatchSucceededminus8743)                {
                break;
                };
              previousMatchSucceededminus8743 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus8734 = matchTempminus8730.dg;
            var previousMatchSucceededminus8745 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus8734))))                {
                previousMatchSucceededminus8745 = false;
                };
              var dg = matchObjectTempminus8734;
              if (previousMatchSucceededminus8745)                {
                break;
                };
              previousMatchSucceededminus8745 = true;
              case 1:
              var fResult8746 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus8734);
              if ((fResult8746===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus8745 = false;
                };
              var dg = fResult8746;
              if (previousMatchSucceededminus8745)                {
                break;
                };
              previousMatchSucceededminus8745 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus8735 = matchTempminus8730.b;
            var previousMatchSucceededminus8747 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus8735))))                {
                previousMatchSucceededminus8747 = false;
                };
              var b = matchObjectTempminus8735;
              if (previousMatchSucceededminus8747)                {
                break;
                };
              previousMatchSucceededminus8747 = true;
              case 1:
              var fResult8748 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus8735);
              if ((fResult8748===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus8747 = false;
                };
              var b = fResult8748;
              if (previousMatchSucceededminus8747)                {
                break;
                };
              previousMatchSucceededminus8747 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus8736 = matchTempminus8730.db;
            var previousMatchSucceededminus8749 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus8736))))                {
                previousMatchSucceededminus8749 = false;
                };
              var db = matchObjectTempminus8736;
              if (previousMatchSucceededminus8749)                {
                break;
                };
              previousMatchSucceededminus8749 = true;
              case 1:
              var fResult8750 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus8736);
              if ((fResult8750===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus8749 = false;
                };
              var db = fResult8750;
              if (previousMatchSucceededminus8749)                {
                break;
                };
              previousMatchSucceededminus8749 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus8737 = matchTempminus8730.a;
            var previousMatchSucceededminus8751 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus8737))))                {
                previousMatchSucceededminus8751 = false;
                };
              var a = matchObjectTempminus8737;
              if (previousMatchSucceededminus8751)                {
                break;
                };
              previousMatchSucceededminus8751 = true;
              case 1:
              var fResult8752 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus8737);
              if ((fResult8752===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus8751 = false;
                };
              var a = fResult8752;
              if (previousMatchSucceededminus8751)                {
                break;
                };
              previousMatchSucceededminus8751 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus8738 = matchTempminus8730.da;
            var previousMatchSucceededminus8753 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus8738))))                {
                previousMatchSucceededminus8753 = false;
                };
              var da = matchObjectTempminus8738;
              if (previousMatchSucceededminus8753)                {
                break;
                };
              previousMatchSucceededminus8753 = true;
              case 1:
              var fResult8754 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus8738);
              if ((fResult8754===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus8753 = false;
                };
              var da = fResult8754;
              if (previousMatchSucceededminus8753)                {
                break;
                };
              previousMatchSucceededminus8753 = true;
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
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G8725))))            {
            return G8725;
            };
          G8725 = (function (arguments)            {
            var matchValminus8787 = G8726;
            var anythingElseminus8724 = matchValminus8787;
            throw ((("Match fail in rosy/utils-drgba against: ")+anythingElseminus8724));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G8725))))            {
            return G8725;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (options{} (r 100) (dr 0) (g 100) (dg 0) (b 100) (db 0) (a 0) (da 0))] (set! (@ r) r) (set! (@ g) g) (set! (@ b) b) (set! (@ a) a) (set! (@ dr) dr) (set! (@ dg) dg) (set! (@ db) db) (set! (@ da) da) this) (anything-else-8724 (_throw (_+ ''Match fail in rosy/utils-drgba against: '' anything-else-8724))))) for value ")+(JSON.stringify(G8726))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus8719 = actualFunminus8721.apply(this, arguments);
      while (recurP8722(returnValueminus8719))        {
        returnValueminus8719 = actualFunminus8721.apply(this, returnValueminus8719.args);
        };
      return returnValueminus8719;
      });
    var colorRectify = (function (v)      {
      return Math.round(((moduleminus58c4bce870.greaterThan(v, 255))?(255) : (((moduleminus58c4bce870.lessThan(v, 0))?(0) : (v)))));
      });
    var alphaRectify = (function (a)      {
      return ((moduleminus58c4bce870.greaterThan(a, 1))?(1) : (((moduleminus58c4bce870.lessThan(a, 0))?(0) : (a))));
      });
    var colorRandom = (function (c, m)      {
      var r = moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(m, 2), currentModuleminus8671.random(m));
      var a = colorRectify(moduleminus58c4bce870.plus(c, r));
      return a;
      });
    var alphaRandom = (function (c, m)      {
      var r = moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(m, 2), currentModuleminus8671.random(m));
      var a = alphaRectify(moduleminus58c4bce870.plus(c, r));
      return a;
      });
    currentModuleminus8671.drgba.prototype.toString = (function ()      {
      return moduleminus58c4bce870.plus("rgba(", colorRandom(this.r, this.dr), ",", colorRandom(this.g, this.dg), ",", colorRandom(this.b, this.db), ",", alphaRandom(this.a, this.da), ")");
      });
    currentModuleminus8671.makeDrgba = (function (options)      {
      return (new (currentModuleminus8671.drgba)(options));
      });
    currentModuleminus8671.moveTowards = (function ()      {
      var returnValueminus8897 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus8896",
          args:arguments
        };
        });
      var recurP8900 = (function (valminus8901)        {
        if ((("undefined")===((typeof valminus8901))))          {
          return false;
          };
        return (valminus8901.recurSigil===("recurSigilminus8896"));
        });
      var actualFunminus8899 = (function ()        {
        return (function (arguments)          {
          var G8903 = undefined;
          var G8904 = Array.prototype.slice.apply(arguments);
          G8903 = (function (arguments)            {
            var matchValminus8905 = G8904;
            if ((!((("object")===((typeof matchValminus8905))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus8905.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus8906 = matchValminus8905[0];
            var matchTempminus8907 = matchValminus8905[1];
            var matchTempminus8908 = matchValminus8905[2];
            var camera = matchTempminus8906;
            if ((("undefined")===((typeof matchTempminus8906))))              {
              matchTempminus8906 = {                
                
              };
              };
            var matchObjectTempminus8909 = matchTempminus8906.position;
            var cx = matchObjectTempminus8909.x;
            if ((("undefined")===((typeof cx))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var cy = matchObjectTempminus8909.y;
            if ((("undefined")===((typeof cy))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x = matchTempminus8907.x;
            if ((("undefined")===((typeof x))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var y = matchTempminus8907.y;
            if ((("undefined")===((typeof y))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var time = matchTempminus8908;
            var d = (new (gamvas.Vector2D)(moduleminus58c4bce870.minus(x, cx), moduleminus58c4bce870.minus(y, cy)));
            var len = d.length();
            var dir = d.normalized();
            var move = (new (gamvas.Vector2D)(moduleminus58c4bce870.times(time, dir.x, Math.pow(moduleminus58c4bce870.times(0.1, len), 4)), moduleminus58c4bce870.times(time, dir.y, Math.pow(moduleminus58c4bce870.times(0.1, len), 4))));
            return camera.move(move.x, move.y);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G8903))))            {
            return G8903;
            };
          G8903 = (function (arguments)            {
            var matchValminus8910 = G8904;
            var anythingElseminus8902 = matchValminus8910;
            throw ((("Match fail in rosy/utils-move-towards against: ")+anythingElseminus8902));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G8903))))            {
            return G8903;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (and camera ({}- position ({} x cx y cy))) ({} x x y y) time] (var d (new gamvas\.Vector2D (- x cx) (- y cy))) (var len (d\.length)) (var dir (d\.normalized)) (var move (new gamvas\.Vector2D (* time dir\.x (Math\.pow (* 0.1 len) 4)) (* time dir\.y (Math\.pow (* 0.1 len) 4)))) (camera\.move move\.x move\.y)) (anything-else-8902 (_throw (_+ ''Match fail in rosy/utils-move-towards against: '' anything-else-8902))))) for value ")+(JSON.stringify(G8904))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus8897 = actualFunminus8899.apply(this, arguments);
      while (recurP8900(returnValueminus8897))        {
        returnValueminus8897 = actualFunminus8899.apply(this, returnValueminus8897.args);
        };
      return returnValueminus8897;
      });
    currentModuleminus8671.random = (function ()      {
      var returnValueminus8941 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus8940",
          args:arguments
        };
        });
      var recurP8944 = (function (valminus8945)        {
        if ((("undefined")===((typeof valminus8945))))          {
          return false;
          };
        return (valminus8945.recurSigil===("recurSigilminus8940"));
        });
      var actualFunminus8943 = (function ()        {
        return (function (arguments)          {
          var G8947 = undefined;
          var G8948 = Array.prototype.slice.apply(arguments);
          G8947 = (function (arguments)            {
            var matchValminus8949 = G8948;
            if ((!((("object")===((typeof matchValminus8949))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus8949.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus8949[0];
            return moduleminus58c4bce870.times(magnitude, Math.random());
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G8947))))            {
            return G8947;
            };
          G8947 = (function (arguments)            {
            var matchValminus8950 = G8948;
            if ((!((("object")===((typeof matchValminus8950))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus8950.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus8950[0];
            var offset = matchValminus8950[1];
            return moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G8947))))            {
            return G8947;
            };
          G8947 = (function (arguments)            {
            var matchValminus8951 = G8948;
            var anythingElseminus8946 = matchValminus8951;
            throw ((("Match fail in rosy/utils-random against: ")+anythingElseminus8946));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G8947))))            {
            return G8947;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: magnitude] (* magnitude (Math\.random))) ([: magnitude offset] (+ offset (* magnitude (Math\.random)))) (anything-else-8946 (_throw (_+ ''Match fail in rosy/utils-random against: '' anything-else-8946))))) for value ")+(JSON.stringify(G8948))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus8941 = actualFunminus8943.apply(this, arguments);
      while (recurP8944(returnValueminus8941))        {
        returnValueminus8941 = actualFunminus8943.apply(this, returnValueminus8941.args);
        };
      return returnValueminus8941;
      });
    currentModuleminus8671.randomNormal = (function ()      {
      var returnValueminus8975 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus8974",
          args:arguments
        };
        });
      var recurP8978 = (function (valminus8979)        {
        if ((("undefined")===((typeof valminus8979))))          {
          return false;
          };
        return (valminus8979.recurSigil===("recurSigilminus8974"));
        });
      var actualFunminus8977 = (function ()        {
        return (function (arguments)          {
          var G8981 = undefined;
          var G8982 = Array.prototype.slice.apply(arguments);
          G8981 = (function (arguments)            {
            var matchValminus8983 = G8982;
            if ((!((("object")===((typeof matchValminus8983))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus8983.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus8984 = Array.prototype.slice.call(matchValminus8983, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePartminus8984))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePartminus8984.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPartminus8985 = Array.prototype.slice.call(matchValminus8983, 0);
            var matchTempminus8986 = matchArrayTailPartminus8985[0];
            var matchTempminus8987 = matchArrayTailPartminus8985[1];
            var previousMatchSucceededminus8988 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus8986))))                {
                previousMatchSucceededminus8988 = false;
                };
              var c = matchTempminus8986;
              if (previousMatchSucceededminus8988)                {
                break;
                };
              previousMatchSucceededminus8988 = true;
              case 1:
              var fResult8989 = ((function (x)                {
                return 0;
                }))(matchTempminus8986);
              if ((fResult8989===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus8988 = false;
                };
              var c = fResult8989;
              if (previousMatchSucceededminus8988)                {
                break;
                };
              previousMatchSucceededminus8988 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var previousMatchSucceededminus8990 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus8987))))                {
                previousMatchSucceededminus8990 = false;
                };
              var s = matchTempminus8987;
              if (previousMatchSucceededminus8990)                {
                break;
                };
              previousMatchSucceededminus8990 = true;
              case 1:
              var fResult8991 = ((function (x)                {
                return 1;
                }))(matchTempminus8987);
              if ((fResult8991===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus8990 = false;
                };
              var s = fResult8991;
              if (previousMatchSucceededminus8990)                {
                break;
                };
              previousMatchSucceededminus8990 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var total = 0;
            for (var i = 0;moduleminus58c4bce870.lessThan(i, 10);i = moduleminus58c4bce870.plus(i, 1))              {
              total = moduleminus58c4bce870.plus(total, currentModuleminus8671.random(2, -1));
              };
            total = moduleminus58c4bce870.divide(total, 10);
            return moduleminus58c4bce870.plus(c, moduleminus58c4bce870.times(total, s));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G8981))))            {
            return G8981;
            };
          G8981 = (function (arguments)            {
            var matchValminus8992 = G8982;
            var anythingElseminus8980 = matchValminus8992;
            throw ((("Match fail in rosy/utils-random-normal against: ")+anythingElseminus8980));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G8981))))            {
            return G8981;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (opt c 0) (opt s 1)] (var total 0) (for ((var i 0) (< i 10) (set! i (+ i 1))) (set! total (+ total (random 2 -1)))) (set! total (/ total 10)) (+ c (* total s))) (anything-else-8980 (_throw (_+ ''Match fail in rosy/utils-random-normal against: '' anything-else-8980))))) for value ")+(JSON.stringify(G8982))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus8975 = actualFunminus8977.apply(this, arguments);
      while (recurP8978(returnValueminus8975))        {
        returnValueminus8975 = actualFunminus8977.apply(this, returnValueminus8975.args);
        };
      return returnValueminus8975;
      });
    currentModuleminus8671.randomInt = (function ()      {
      var returnValueminus9023 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus9022",
          args:arguments
        };
        });
      var recurP9026 = (function (valminus9027)        {
        if ((("undefined")===((typeof valminus9027))))          {
          return false;
          };
        return (valminus9027.recurSigil===("recurSigilminus9022"));
        });
      var actualFunminus9025 = (function ()        {
        return (function (arguments)          {
          var G9029 = undefined;
          var G9030 = Array.prototype.slice.apply(arguments);
          G9029 = (function (arguments)            {
            var matchValminus9031 = G9030;
            if ((!((("object")===((typeof matchValminus9031))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus9031.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus9031[0];
            return Math.round(moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9029))))            {
            return G9029;
            };
          G9029 = (function (arguments)            {
            var matchValminus9032 = G9030;
            if ((!((("object")===((typeof matchValminus9032))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus9032.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus9032[0];
            var offset = matchValminus9032[1];
            return Math.round(moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random())));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9029))))            {
            return G9029;
            };
          G9029 = (function (arguments)            {
            var matchValminus9033 = G9030;
            var anythingElseminus9028 = matchValminus9033;
            throw ((("Match fail in rosy/utils-random-int against: ")+anythingElseminus9028));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9029))))            {
            return G9029;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: magnitude] (Math\.round (* magnitude (Math\.random)))) ([: magnitude offset] (Math\.round (+ offset (* magnitude (Math\.random))))) (anything-else-9028 (_throw (_+ ''Match fail in rosy/utils-random-int against: '' anything-else-9028))))) for value ")+(JSON.stringify(G9030))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus9023 = actualFunminus9025.apply(this, arguments);
      while (recurP9026(returnValueminus9023))        {
        returnValueminus9023 = actualFunminus9025.apply(this, returnValueminus9023.args);
        };
      return returnValueminus9023;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus8671;
  }))