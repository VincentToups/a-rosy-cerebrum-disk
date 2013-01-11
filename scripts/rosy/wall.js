define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, gamvas)  {
  var currentModuleminus58830 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus58830 = value;
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
    // ((js "gamvas/gamvas-module" gamvas))
    ;
    var smallJitter = (function (about)      {
      return moduleminus58c4bce870.plus(about, moduleC47fa390df.random(1));
      });
    var wallCreate = (function ()      {
      var returnValueminus58834 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus58833",
          args:arguments
        };
        });
      var recurP58837 = (function (valminus58838)        {
        if ((("undefined")===((typeof valminus58838))))          {
          return false;
          };
        return (valminus58838.recurSigil===("recurSigilminus58833"));
        });
      var actualFunminus58836 = (function ()        {
        return (function (arguments)          {
          var G58840 = undefined;
          var G58841 = Array.prototype.slice.apply(arguments);
          G58840 = (function (arguments)            {
            var matchValminus58842 = G58841;
            if ((!((matchValminus58842.length>=5))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus58843 = Array.prototype.slice.call(matchValminus58842, 0, 5);
            if ((!((5===matchArraySimplePartminus58843.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchArraySimplePartminus58843[0];
            var x = matchArraySimplePartminus58843[1];
            var y = matchArraySimplePartminus58843[2];
            var w = matchArraySimplePartminus58843[3];
            var h = matchArraySimplePartminus58843[4];
            var matchArrayTailPartminus58844 = Array.prototype.slice.call(matchValminus58842, 5);
            var matchTempminus58845 = matchArrayTailPartminus58844[0];
            var previousMatchSucceededminus58846 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus58845))))                {
                previousMatchSucceededminus58846 = false;
                };
              var r = matchTempminus58845;
              if (previousMatchSucceededminus58846)                {
                break;
                };
              previousMatchSucceededminus58846 = true;
              case 1:
              var fResult58847 = ((function (x)                {
                return 0;
                }))(matchTempminus58845);
              if ((fResult58847===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus58846 = false;
                };
              var r = fResult58847;
              if (previousMatchSucceededminus58846)                {
                break;
                };
              previousMatchSucceededminus58846 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            this._super(name, x, y);
            this.wallW = w;
            this.wallH = h;
            console.log("Creating a wall at ", JSON.stringify([x, y, w, h]));
            this.bodyRect(this.position.x, this.position.y, w, h, gamvas.physics.STATIC);
            this.setRotation(r);
            this.rotation = r;
            this.r = r;
            return console.log("wall rotation is ", this.rotation);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58840))))            {
            return G58840;
            };
          G58840 = (function (arguments)            {
            var matchValminus58848 = G58841;
            var anythingElseminus58839 = matchValminus58848;
            throw ((("Match fail in wall-create against: ")+anythingElseminus58839));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58840))))            {
            return G58840;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y w h :- (opt r 0)] (this\._super name x y) (set! this\.wall-w w) (set! this\.wall-h h) (console\.log ''Creating a wall at '' (JSON\.stringify [: x y w h])) (this\.body-rect this\.position\.x this\.position\.y w h gamvas\.physics\.STATIC) (this\.set-rotation r) (set! this\.rotation r) (set! this\.r r) (console\.log ''wall rotation is '' this\.rotation)) (anything-else-58839 (_throw (_+ ''Match fail in wall-create against: '' anything-else-58839))))) for value ")+(JSON.stringify(G58841))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus58834 = actualFunminus58836.apply(this, arguments);
      while (recurP58837(returnValueminus58834))        {
        returnValueminus58834 = actualFunminus58836.apply(this, returnValueminus58834.args);
        };
      return returnValueminus58834;
      });
    var wallDraw = (function (time)      {
      this._super(time);
      var x = this.position.x;
      var y = this.position.y;
      var hw = moduleminus58c4bce870.divide(this.wallW, 2);
      var hh = moduleminus58c4bce870.divide(this.wallH, 2);
      // (var tlx (- x hw))
      // (var tly (+ y hh))
      // (var trx (+ x hw))
      // (var try* (+ y hh))
      // (var brx (+ x hw))
      // (var bry (- y hh))
      // (var blx (- x hw))
      // (var bly (- y hh))
      ;
      var tlx = moduleminus58c4bce870.minus(hw);
      var tly = moduleminus58c4bce870.plus(hh);
      var trx = moduleminus58c4bce870.plus(hw);
      var trytimes = moduleminus58c4bce870.plus(hh);
      var brx = moduleminus58c4bce870.plus(hw);
      var bry = moduleminus58c4bce870.minus(hh);
      var blx = moduleminus58c4bce870.minus(hw);
      var bly = moduleminus58c4bce870.minus(hh);
      var st = gamvas.state.getCurrentState();
      var c = st.c;
      var jitLineTo = (function (x, y)        {
        c.lineTo(smallJitter(x), smallJitter(y));
        });
      var r = this.rotation;
      return moduleminus6acd260b96.withJitter(c, 10, 3, (function (c)        {
        c.fillStyle = moduleminus58c4bce870.plus("rgba(", moduleC47fa390df.randomInt(20, 100), ",", moduleC47fa390df.randomInt(20, 149), ",", 237, ",.4)");
        c.translate(x, y);
        c.rotate(r);
        c.beginPath();
        c.moveTo(smallJitter(tlx), smallJitter(tly));
        jitLineTo(trx, trytimes);
        jitLineTo(brx, bry);
        jitLineTo(blx, bly);
        return c.fill();
        }));
      });
    currentModuleminus58830.Wall = gamvas.Actor.extend({      
      create:wallCreate,
      draw:wallDraw
    });
    }))();
  return currentModuleminus58830;
  }))