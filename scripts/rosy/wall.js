define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, gamvas)  {
  var currentModuleminus44753 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus44753 = value;
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
    var wallCreate = (function (name, x, y, w, h)      {
      this._super(name, x, y);
      this.wallW = w;
      this.wallH = h;
      console.log("Creating a wall at ", JSON.stringify([x, y, w, h]));
      return this.bodyRect(this.position.x, this.position.y, w, h, gamvas.physics.STATIC);
      });
    var wallDraw = (function (time)      {
      this._super(time);
      var x = this.position.x;
      var y = this.position.y;
      var hw = moduleminus58c4bce870.divide(this.wallW, 2);
      var hh = moduleminus58c4bce870.divide(this.wallH, 2);
      var tlx = moduleminus58c4bce870.minus(x, hw);
      var tly = moduleminus58c4bce870.plus(y, hh);
      var trx = moduleminus58c4bce870.plus(x, hw);
      var trytimes = moduleminus58c4bce870.plus(y, hh);
      var brx = moduleminus58c4bce870.plus(x, hw);
      var bry = moduleminus58c4bce870.minus(y, hh);
      var blx = moduleminus58c4bce870.minus(x, hw);
      var bly = moduleminus58c4bce870.minus(y, hh);
      var st = gamvas.state.getCurrentState();
      var c = st.c;
      var jitLineTo = (function (x, y)        {
        c.lineTo(smallJitter(x), smallJitter(y));
        });
      return moduleminus6acd260b96.withJitter(c, 10, 3, (function (c)        {
        c.fillStyle = moduleminus58c4bce870.plus("rgba(", moduleC47fa390df.randomInt(80), ",", moduleC47fa390df.randomInt(80), ",", 255, ",.4)");
        c.beginPath();
        c.moveTo(smallJitter(tlx), smallJitter(tly));
        jitLineTo(trx, trytimes);
        jitLineTo(brx, bry);
        jitLineTo(blx, bly);
        return c.fill();
        }));
      });
    currentModuleminus44753.Wall = gamvas.Actor.extend({      
      create:wallCreate,
      draw:wallDraw
    });
    }))();
  return currentModuleminus44753;
  }))