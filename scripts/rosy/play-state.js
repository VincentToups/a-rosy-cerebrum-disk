define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "gamvas/gamvas-module", "gamvas/box-2d-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, gamvas, b2d)  {
  var currentModuleminus69837 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus69837 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" (:with-prefix idioms- :all))
    ;
    // ("hooves/hooves" :all)
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
    // ((js "gamvas/box-2d-module" b2d))
    ;
    // This comment better appear.
    ;
    var keyedPredicate = "macro - no dynamic value.";
    var makeInit = (function (level)      {
      return (function ()        {
        gamvas.physics.pixelsPerMeter = 128;
        var w = gamvas.physics.resetWorld(0, 9.8, false);
        var self = this;
        this.subState = "inPlay";
        this.logCounter = 0;
        (function (arguments)          {
          var G69856 = undefined;
          var G69857 = level();
          G69856 = (function (arguments)            {
            var matchValminus69858 = G69857;
            var matchObjectTempminus69859 = matchValminus69858.geometry;
            if ((("undefined")===((typeof matchObjectTempminus69859))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var g = matchObjectTempminus69859;
            var matchObjectTempminus69860 = matchValminus69858.initialPosition;
            if ((("undefined")===((typeof matchObjectTempminus69860))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((("object")===((typeof matchObjectTempminus69860))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchObjectTempminus69860.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var px = matchObjectTempminus69860[0];
            var py = matchObjectTempminus69860[1];
            for (i in (g))              {
              this.addActor(g[i]);
              };
            this.ball = (new moduleC4807d4439.Ball("Player", px, py));
            return this.addActor(this.ball);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69856))))            {
            return G69856;
            };
          throw ((("match-fail at ((match (level) (({} geometry g initial-position [: px py]) (for (i :in g) (this\.add-actor [g i])) (set! this\.ball (new Ball ''Player'' px py)) (this\.add-actor this\.ball)))) for value ")+(JSON.stringify(G69857))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        return console.log("this.ball is ", this.ball);
        });
      });
    var drawInPlay = (function (time)      {
      ((((gamvas.key.isPressed(gamvas.key.PAGE_UP))&&(moduleminus58c4bce870.lessThan(this.camera.zoomFactor, 1.5))))?(this.camera.zoom(moduleminus58c4bce870.times(time, 0.7))) : (undefined));
      ((((gamvas.key.isPressed(gamvas.key.PAGE_DOWN))&&(moduleminus58c4bce870.greaterThan(this.camera.zoomFactor, 0.1))))?(this.camera.zoom(moduleminus58c4bce870.times(time, -0.7))) : (undefined));
      ((gamvas.key.isPressed(gamvas.key.UP))?(this.camera.move(0, moduleminus58c4bce870.times(time, -70))) : (undefined));
      ((gamvas.key.isPressed(gamvas.key.DOWN))?(this.camera.move(0, moduleminus58c4bce870.times(time, 70))) : (undefined));
      ((gamvas.key.isPressed(gamvas.key.LEFT))?(this.camera.move(moduleminus58c4bce870.times(time, -70), 0)) : (undefined));
      ((gamvas.key.isPressed(gamvas.key.RIGHT))?(this.camera.move(moduleminus58c4bce870.times(time, 70), 0)) : (undefined));
      var vec = (new gamvas.Vector2D(0, 9.8));
      gamvas.physics.setGravity(vec);
      // (this\.camera\.set-position this\.ball\.position\.x this\.ball\.position\.y)
      ;
      return moduleC47fa390df.moveTowards(this.camera, this.ball.position, time);
      });
    var draw = (function (time)      {
      this.logCounter = moduleminus58c4bce870.plus(1, this.logCounter);
      return (function (arguments)        {
        var G69917 = undefined;
        var G69918 = this.subState;
        G69917 = (function (arguments)          {
          var matchValminus69919 = G69918;
          if ((!(("inPlay"===matchValminus69919))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return this.drawInPlay(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69917))))          {
          return G69917;
          };
        G69917 = (function (arguments)          {
          var matchValminus69920 = G69918;
          var otherValue = matchValminus69920;
          return this.drawInPlay(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69917))))          {
          return G69917;
          };
        throw ((("match-fail at ((match this\.sub-state (:in-play (this\.draw-in-play time)) (other-value (this\.draw-in-play time)))) for value ")+(JSON.stringify(G69918))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var log = (function ()      {
      var returnValueminus69922 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus69921",
          args:arguments
        };
        });
      var recurP69925 = (function (valminus69926)        {
        if ((("undefined")===((typeof valminus69926))))          {
          return false;
          };
        return (valminus69926.recurSigil===("recurSigilminus69921"));
        });
      var actualFunminus69924 = (function ()        {
        return (function (arguments)          {
          var G69928 = undefined;
          var G69929 = Array.prototype.slice.apply(arguments);
          G69928 = (function (arguments)            {
            var matchValminus69930 = G69929;
            if ((!((("object")===((typeof matchValminus69930))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus69930.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus69931 = matchValminus69930[0];
            var matchTempminus69932 = matchValminus69930[1];
            var arguments = matchTempminus69931;
            if ((("undefined")===((typeof matchTempminus69932))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var modulo = matchTempminus69932;
            return ((moduleC47fa390df.modsignTripleEqualminus0(this.logCounter, modulo))?(console.log.apply(console, arguments)) : (undefined));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69928))))            {
            return G69928;
            };
          G69928 = (function (arguments)            {
            var matchValminus69933 = G69929;
            if ((!((("object")===((typeof matchValminus69933))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus69933.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var arguments = matchValminus69933[0];
            return recur(arguments, 300);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69928))))            {
            return G69928;
            };
          G69928 = (function (arguments)            {
            var matchValminus69934 = G69929;
            var anythingElseminus69927 = matchValminus69934;
            throw ((("Match fail in log against: ")+anythingElseminus69927));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69928))))            {
            return G69928;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: arguments (defined modulo)] (if (%===0 this\.log-counter modulo) (console\.log\.apply console arguments))) ([: arguments] (recur arguments 300)) (anything-else-69927 (_throw (_+ ''Match fail in log against: '' anything-else-69927))))) for value ")+(JSON.stringify(G69929))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus69922 = actualFunminus69924.apply(this, arguments);
      while (recurP69925(returnValueminus69922))        {
        returnValueminus69922 = actualFunminus69924.apply(this, returnValueminus69922.args);
        };
      return returnValueminus69922;
      });
    var onMouseDown = (function (btn, x, y, evt)      {
      var actors = this.getActors();
      for (index in (actors))        {
        var actor = actors[index];
        actor.getCurrentState().onMouseDown(btn, x, y, evt);
        };
      });
    currentModuleminus69837.createPlayState = (function (params)      {
      return gamvas.State.extend({        
        init:makeInit(params),
        draw:draw,
        drawInPlay:drawInPlay,
        onMouseDown:onMouseDown,
        log:log
      });
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus69837;
  }))