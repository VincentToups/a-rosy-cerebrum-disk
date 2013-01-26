define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, gamvas)  {
  var currentModuleminus267356 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus267356 = value;
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
    currentModuleminus267356.modsignTripleEqualminus0 = (function (n, m)      {
      return moduleminus58c4bce870.TripleEqualminus(0, moduleminus58c4bce870.modsign(n, m));
      });
    currentModuleminus267356.drgba = (function ()      {
      var returnValueminus267404 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus267403",
          args:arguments
        };
        });
      var recurP267407 = (function (valminus267408)        {
        if ((("undefined")===((typeof valminus267408))))          {
          return false;
          };
        return (valminus267408.recurSigil===("recurSigilminus267403"));
        });
      var actualFunminus267406 = (function ()        {
        return (function (arguments)          {
          var G267410 = undefined;
          var G267411 = Array.prototype.slice.apply(arguments);
          G267410 = (function (arguments)            {
            var matchValminus267412 = G267411;
            if ((!((("object")===((typeof matchValminus267412))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus267412.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus267413 = Array.prototype.slice.call(matchValminus267412, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePartminus267413))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePartminus267413.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPartminus267414 = Array.prototype.slice.call(matchValminus267412, 0);
            var matchTempminus267415 = matchArrayTailPartminus267414[0];
            if ((("undefined")===((typeof matchTempminus267415))))              {
              matchTempminus267415 = {                
                
              };
              };
            var matchObjectTempminus267416 = matchTempminus267415.r;
            var previousMatchSucceededminus267424 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus267416))))                {
                previousMatchSucceededminus267424 = false;
                };
              var r = matchObjectTempminus267416;
              if (previousMatchSucceededminus267424)                {
                break;
                };
              previousMatchSucceededminus267424 = true;
              case 1:
              var fResult267425 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus267416);
              if ((fResult267425===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus267424 = false;
                };
              var r = fResult267425;
              if (previousMatchSucceededminus267424)                {
                break;
                };
              previousMatchSucceededminus267424 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus267417 = matchTempminus267415.dr;
            var previousMatchSucceededminus267426 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus267417))))                {
                previousMatchSucceededminus267426 = false;
                };
              var dr = matchObjectTempminus267417;
              if (previousMatchSucceededminus267426)                {
                break;
                };
              previousMatchSucceededminus267426 = true;
              case 1:
              var fResult267427 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus267417);
              if ((fResult267427===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus267426 = false;
                };
              var dr = fResult267427;
              if (previousMatchSucceededminus267426)                {
                break;
                };
              previousMatchSucceededminus267426 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus267418 = matchTempminus267415.g;
            var previousMatchSucceededminus267428 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus267418))))                {
                previousMatchSucceededminus267428 = false;
                };
              var g = matchObjectTempminus267418;
              if (previousMatchSucceededminus267428)                {
                break;
                };
              previousMatchSucceededminus267428 = true;
              case 1:
              var fResult267429 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus267418);
              if ((fResult267429===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus267428 = false;
                };
              var g = fResult267429;
              if (previousMatchSucceededminus267428)                {
                break;
                };
              previousMatchSucceededminus267428 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus267419 = matchTempminus267415.dg;
            var previousMatchSucceededminus267430 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus267419))))                {
                previousMatchSucceededminus267430 = false;
                };
              var dg = matchObjectTempminus267419;
              if (previousMatchSucceededminus267430)                {
                break;
                };
              previousMatchSucceededminus267430 = true;
              case 1:
              var fResult267431 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus267419);
              if ((fResult267431===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus267430 = false;
                };
              var dg = fResult267431;
              if (previousMatchSucceededminus267430)                {
                break;
                };
              previousMatchSucceededminus267430 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus267420 = matchTempminus267415.b;
            var previousMatchSucceededminus267432 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus267420))))                {
                previousMatchSucceededminus267432 = false;
                };
              var b = matchObjectTempminus267420;
              if (previousMatchSucceededminus267432)                {
                break;
                };
              previousMatchSucceededminus267432 = true;
              case 1:
              var fResult267433 = ((function (x)                {
                return 100;
                }))(matchObjectTempminus267420);
              if ((fResult267433===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus267432 = false;
                };
              var b = fResult267433;
              if (previousMatchSucceededminus267432)                {
                break;
                };
              previousMatchSucceededminus267432 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus267421 = matchTempminus267415.db;
            var previousMatchSucceededminus267434 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus267421))))                {
                previousMatchSucceededminus267434 = false;
                };
              var db = matchObjectTempminus267421;
              if (previousMatchSucceededminus267434)                {
                break;
                };
              previousMatchSucceededminus267434 = true;
              case 1:
              var fResult267435 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus267421);
              if ((fResult267435===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus267434 = false;
                };
              var db = fResult267435;
              if (previousMatchSucceededminus267434)                {
                break;
                };
              previousMatchSucceededminus267434 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus267422 = matchTempminus267415.a;
            var previousMatchSucceededminus267436 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus267422))))                {
                previousMatchSucceededminus267436 = false;
                };
              var a = matchObjectTempminus267422;
              if (previousMatchSucceededminus267436)                {
                break;
                };
              previousMatchSucceededminus267436 = true;
              case 1:
              var fResult267437 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus267422);
              if ((fResult267437===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus267436 = false;
                };
              var a = fResult267437;
              if (previousMatchSucceededminus267436)                {
                break;
                };
              previousMatchSucceededminus267436 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus267423 = matchTempminus267415.da;
            var previousMatchSucceededminus267438 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus267423))))                {
                previousMatchSucceededminus267438 = false;
                };
              var da = matchObjectTempminus267423;
              if (previousMatchSucceededminus267438)                {
                break;
                };
              previousMatchSucceededminus267438 = true;
              case 1:
              var fResult267439 = ((function (x)                {
                return 0;
                }))(matchObjectTempminus267423);
              if ((fResult267439===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus267438 = false;
                };
              var da = fResult267439;
              if (previousMatchSucceededminus267438)                {
                break;
                };
              previousMatchSucceededminus267438 = true;
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
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267410))))            {
            return G267410;
            };
          G267410 = (function (arguments)            {
            var matchValminus267472 = G267411;
            var anythingElseminus267409 = matchValminus267472;
            throw ((("Match fail in rosy/utils-drgba against: ")+anythingElseminus267409));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267410))))            {
            return G267410;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (options{} (r 100) (dr 0) (g 100) (dg 0) (b 100) (db 0) (a 0) (da 0))] (set! (@ r) r) (set! (@ g) g) (set! (@ b) b) (set! (@ a) a) (set! (@ dr) dr) (set! (@ dg) dg) (set! (@ db) db) (set! (@ da) da) this) (anything-else-267409 (_throw (_+ ''Match fail in rosy/utils-drgba against: '' anything-else-267409))))) for value ")+(JSON.stringify(G267411))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus267404 = actualFunminus267406.apply(this, arguments);
      while (recurP267407(returnValueminus267404))        {
        returnValueminus267404 = actualFunminus267406.apply(this, returnValueminus267404.args);
        };
      return returnValueminus267404;
      });
    var colorRectify = (function (v)      {
      return Math.round(((moduleminus58c4bce870.greaterThan(v, 255))?(255) : (((moduleminus58c4bce870.lessThan(v, 0))?(0) : (v)))));
      });
    var alphaRectify = (function (a)      {
      return ((moduleminus58c4bce870.greaterThan(a, 1))?(1) : (((moduleminus58c4bce870.lessThan(a, 0))?(0) : (a))));
      });
    var colorRandom = (function (c, m)      {
      var r = moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(m, 2), currentModuleminus267356.random(m));
      var a = colorRectify(moduleminus58c4bce870.plus(c, r));
      return a;
      });
    var alphaRandom = (function (c, m)      {
      var r = moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(m, 2), currentModuleminus267356.random(m));
      var a = alphaRectify(moduleminus58c4bce870.plus(c, r));
      return a;
      });
    currentModuleminus267356.drgba.prototype.toString = (function ()      {
      return moduleminus58c4bce870.plus("rgba(", colorRandom(this.r, this.dr), ",", colorRandom(this.g, this.dg), ",", colorRandom(this.b, this.db), ",", alphaRandom(this.a, this.da), ")");
      });
    currentModuleminus267356.makeDrgba = (function (options)      {
      return (new (currentModuleminus267356.drgba)(options));
      });
    currentModuleminus267356.moveTowards = (function ()      {
      var returnValueminus267582 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus267581",
          args:arguments
        };
        });
      var recurP267585 = (function (valminus267586)        {
        if ((("undefined")===((typeof valminus267586))))          {
          return false;
          };
        return (valminus267586.recurSigil===("recurSigilminus267581"));
        });
      var actualFunminus267584 = (function ()        {
        return (function (arguments)          {
          var G267588 = undefined;
          var G267589 = Array.prototype.slice.apply(arguments);
          G267588 = (function (arguments)            {
            var matchValminus267590 = G267589;
            if ((!((("object")===((typeof matchValminus267590))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus267590.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus267591 = matchValminus267590[0];
            var matchTempminus267592 = matchValminus267590[1];
            var matchTempminus267593 = matchValminus267590[2];
            var camera = matchTempminus267591;
            if ((("undefined")===((typeof matchTempminus267591))))              {
              matchTempminus267591 = {                
                
              };
              };
            var matchObjectTempminus267594 = matchTempminus267591.position;
            var cx = matchObjectTempminus267594.x;
            if ((("undefined")===((typeof cx))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var cy = matchObjectTempminus267594.y;
            if ((("undefined")===((typeof cy))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x = matchTempminus267592.x;
            if ((("undefined")===((typeof x))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var y = matchTempminus267592.y;
            if ((("undefined")===((typeof y))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var time = matchTempminus267593;
            var d = (new (gamvas.Vector2D)(moduleminus58c4bce870.minus(x, cx), moduleminus58c4bce870.minus(y, cy)));
            var len = d.length();
            var dir = d.normalized();
            var move = (new (gamvas.Vector2D)(moduleminus58c4bce870.times(time, dir.x, Math.pow(moduleminus58c4bce870.times(0.1, len), 4)), moduleminus58c4bce870.times(time, dir.y, Math.pow(moduleminus58c4bce870.times(0.1, len), 4))));
            return camera.move(move.x, move.y);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267588))))            {
            return G267588;
            };
          G267588 = (function (arguments)            {
            var matchValminus267595 = G267589;
            var anythingElseminus267587 = matchValminus267595;
            throw ((("Match fail in rosy/utils-move-towards against: ")+anythingElseminus267587));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267588))))            {
            return G267588;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (and camera ({}- position ({} x cx y cy))) ({} x x y y) time] (var d (new gamvas\.Vector2D (- x cx) (- y cy))) (var len (d\.length)) (var dir (d\.normalized)) (var move (new gamvas\.Vector2D (* time dir\.x (Math\.pow (* 0.1 len) 4)) (* time dir\.y (Math\.pow (* 0.1 len) 4)))) (camera\.move move\.x move\.y)) (anything-else-267587 (_throw (_+ ''Match fail in rosy/utils-move-towards against: '' anything-else-267587))))) for value ")+(JSON.stringify(G267589))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus267582 = actualFunminus267584.apply(this, arguments);
      while (recurP267585(returnValueminus267582))        {
        returnValueminus267582 = actualFunminus267584.apply(this, returnValueminus267582.args);
        };
      return returnValueminus267582;
      });
    currentModuleminus267356.random = (function ()      {
      var returnValueminus267626 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus267625",
          args:arguments
        };
        });
      var recurP267629 = (function (valminus267630)        {
        if ((("undefined")===((typeof valminus267630))))          {
          return false;
          };
        return (valminus267630.recurSigil===("recurSigilminus267625"));
        });
      var actualFunminus267628 = (function ()        {
        return (function (arguments)          {
          var G267632 = undefined;
          var G267633 = Array.prototype.slice.apply(arguments);
          G267632 = (function (arguments)            {
            var matchValminus267634 = G267633;
            if ((!((("object")===((typeof matchValminus267634))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus267634.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus267634[0];
            return moduleminus58c4bce870.times(magnitude, Math.random());
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267632))))            {
            return G267632;
            };
          G267632 = (function (arguments)            {
            var matchValminus267635 = G267633;
            if ((!((("object")===((typeof matchValminus267635))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus267635.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus267635[0];
            var offset = matchValminus267635[1];
            return moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267632))))            {
            return G267632;
            };
          G267632 = (function (arguments)            {
            var matchValminus267636 = G267633;
            var anythingElseminus267631 = matchValminus267636;
            throw ((("Match fail in rosy/utils-random against: ")+anythingElseminus267631));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267632))))            {
            return G267632;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: magnitude] (* magnitude (Math\.random))) ([: magnitude offset] (+ offset (* magnitude (Math\.random)))) (anything-else-267631 (_throw (_+ ''Match fail in rosy/utils-random against: '' anything-else-267631))))) for value ")+(JSON.stringify(G267633))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus267626 = actualFunminus267628.apply(this, arguments);
      while (recurP267629(returnValueminus267626))        {
        returnValueminus267626 = actualFunminus267628.apply(this, returnValueminus267626.args);
        };
      return returnValueminus267626;
      });
    currentModuleminus267356.randomNormal = (function ()      {
      var returnValueminus267660 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus267659",
          args:arguments
        };
        });
      var recurP267663 = (function (valminus267664)        {
        if ((("undefined")===((typeof valminus267664))))          {
          return false;
          };
        return (valminus267664.recurSigil===("recurSigilminus267659"));
        });
      var actualFunminus267662 = (function ()        {
        return (function (arguments)          {
          var G267666 = undefined;
          var G267667 = Array.prototype.slice.apply(arguments);
          G267666 = (function (arguments)            {
            var matchValminus267668 = G267667;
            if ((!((("object")===((typeof matchValminus267668))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus267668.length>=0))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus267669 = Array.prototype.slice.call(matchValminus267668, 0, 0);
            if ((!((("object")===((typeof matchArraySimplePartminus267669))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchArraySimplePartminus267669.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArrayTailPartminus267670 = Array.prototype.slice.call(matchValminus267668, 0);
            var matchTempminus267671 = matchArrayTailPartminus267670[0];
            var matchTempminus267672 = matchArrayTailPartminus267670[1];
            var previousMatchSucceededminus267673 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus267671))))                {
                previousMatchSucceededminus267673 = false;
                };
              var c = matchTempminus267671;
              if (previousMatchSucceededminus267673)                {
                break;
                };
              previousMatchSucceededminus267673 = true;
              case 1:
              var fResult267674 = ((function (x)                {
                return 0;
                }))(matchTempminus267671);
              if ((fResult267674===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus267673 = false;
                };
              var c = fResult267674;
              if (previousMatchSucceededminus267673)                {
                break;
                };
              previousMatchSucceededminus267673 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var previousMatchSucceededminus267675 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus267672))))                {
                previousMatchSucceededminus267675 = false;
                };
              var s = matchTempminus267672;
              if (previousMatchSucceededminus267675)                {
                break;
                };
              previousMatchSucceededminus267675 = true;
              case 1:
              var fResult267676 = ((function (x)                {
                return 1;
                }))(matchTempminus267672);
              if ((fResult267676===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus267675 = false;
                };
              var s = fResult267676;
              if (previousMatchSucceededminus267675)                {
                break;
                };
              previousMatchSucceededminus267675 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var total = 0;
            for (var i = 0;moduleminus58c4bce870.lessThan(i, 10);i = moduleminus58c4bce870.plus(i, 1))              {
              total = moduleminus58c4bce870.plus(total, currentModuleminus267356.random(2, -1));
              };
            total = moduleminus58c4bce870.divide(total, 10);
            return moduleminus58c4bce870.plus(c, moduleminus58c4bce870.times(total, s));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267666))))            {
            return G267666;
            };
          G267666 = (function (arguments)            {
            var matchValminus267677 = G267667;
            var anythingElseminus267665 = matchValminus267677;
            throw ((("Match fail in rosy/utils-random-normal against: ")+anythingElseminus267665));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267666))))            {
            return G267666;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (opt c 0) (opt s 1)] (var total 0) (for ((var i 0) (< i 10) (set! i (+ i 1))) (set! total (+ total (random 2 -1)))) (set! total (/ total 10)) (+ c (* total s))) (anything-else-267665 (_throw (_+ ''Match fail in rosy/utils-random-normal against: '' anything-else-267665))))) for value ")+(JSON.stringify(G267667))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus267660 = actualFunminus267662.apply(this, arguments);
      while (recurP267663(returnValueminus267660))        {
        returnValueminus267660 = actualFunminus267662.apply(this, returnValueminus267660.args);
        };
      return returnValueminus267660;
      });
    currentModuleminus267356.randomInt = (function ()      {
      var returnValueminus267708 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus267707",
          args:arguments
        };
        });
      var recurP267711 = (function (valminus267712)        {
        if ((("undefined")===((typeof valminus267712))))          {
          return false;
          };
        return (valminus267712.recurSigil===("recurSigilminus267707"));
        });
      var actualFunminus267710 = (function ()        {
        return (function (arguments)          {
          var G267714 = undefined;
          var G267715 = Array.prototype.slice.apply(arguments);
          G267714 = (function (arguments)            {
            var matchValminus267716 = G267715;
            if ((!((("object")===((typeof matchValminus267716))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus267716.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus267716[0];
            return Math.round(moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267714))))            {
            return G267714;
            };
          G267714 = (function (arguments)            {
            var matchValminus267717 = G267715;
            if ((!((("object")===((typeof matchValminus267717))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus267717.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus267717[0];
            var offset = matchValminus267717[1];
            return Math.round(moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random())));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267714))))            {
            return G267714;
            };
          G267714 = (function (arguments)            {
            var matchValminus267718 = G267715;
            var anythingElseminus267713 = matchValminus267718;
            throw ((("Match fail in rosy/utils-random-int against: ")+anythingElseminus267713));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267714))))            {
            return G267714;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: magnitude] (Math\.round (* magnitude (Math\.random)))) ([: magnitude offset] (Math\.round (+ offset (* magnitude (Math\.random))))) (anything-else-267713 (_throw (_+ ''Match fail in rosy/utils-random-int against: '' anything-else-267713))))) for value ")+(JSON.stringify(G267715))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus267708 = actualFunminus267710.apply(this, arguments);
      while (recurP267711(returnValueminus267708))        {
        returnValueminus267708 = actualFunminus267710.apply(this, returnValueminus267708.args);
        };
      return returnValueminus267708;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus267356;
  }))