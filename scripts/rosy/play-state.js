define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "rosy/goal", "gamvas/gamvas-module", "gamvas/box-2d-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, moduleminus2184996f81, gamvas, b2d)  {
  var currentModuleminus295377 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus295377 = value;
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
    // ("rosy/goal" :all)
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
          var G295739 = undefined;
          var G295740 = level();
          G295739 = (function (arguments)            {
            var matchValminus295741 = G295740;
            var matchObjectTempminus295742 = matchValminus295741.geometry;
            if ((("undefined")===((typeof matchObjectTempminus295742))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var g = matchObjectTempminus295742;
            var matchObjectTempminus295743 = matchValminus295741.initialPosition;
            if ((("undefined")===((typeof matchObjectTempminus295743))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((("object")===((typeof matchObjectTempminus295743))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchObjectTempminus295743.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var px = matchObjectTempminus295743[0];
            var py = matchObjectTempminus295743[1];
            for (i in (g))              {
              this.addActor(g[i]);
              };
            this.ball = (new (moduleC4807d4439.Ball)("Player", px, py));
            this.addActor(this.ball);
            return this.addActor((new (moduleminus2184996f81.Goal)("Goal", 25, 150, this.ball)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295739))))            {
            return G295739;
            };
          throw ((("match-fail at ((match (level) (({} geometry g initial-position [: px py]) (for (i :in g) (this\.add-actor [g i])) (set! this\.ball (new Ball ''Player'' px py)) (this\.add-actor this\.ball) (this\.add-actor (new Goal ''Goal'' 25 150 this\.ball))))) for value ")+(JSON.stringify(G295740))));
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
      var vec = (new (gamvas.Vector2D)(0, 9.8));
      gamvas.physics.setGravity(vec);
      // (this\.camera\.set-position this\.ball\.position\.x this\.ball\.position\.y)
      ;
      return moduleC47fa390df.moveTowards(this.camera, this.ball.position, time);
      });
    var draw = (function (time)      {
      this.logCounter = moduleminus58c4bce870.plus(1, this.logCounter);
      (function (arguments)        {
        var G295800 = undefined;
        var G295801 = this.subState;
        G295800 = (function (arguments)          {
          var matchValminus295802 = G295801;
          if ((!(("inPlay"===matchValminus295802))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return this.drawInPlay(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295800))))          {
          return G295800;
          };
        G295800 = (function (arguments)          {
          var matchValminus295803 = G295801;
          var otherValue = matchValminus295803;
          return this.drawInPlay(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295800))))          {
          return G295800;
          };
        throw ((("match-fail at ((match this\.sub-state (:in-play (this\.draw-in-play time)) (other-value (this\.draw-in-play time)))) for value ")+(JSON.stringify(G295801))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      return // (gamvas\.physics\.draw-debug)
      ;
      });
    var log = (function ()      {
      var returnValueminus295805 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus295804",
          args:arguments
        };
        });
      var recurP295808 = (function (valminus295809)        {
        if ((("undefined")===((typeof valminus295809))))          {
          return false;
          };
        return (valminus295809.recurSigil===("recurSigilminus295804"));
        });
      var actualFunminus295807 = (function ()        {
        return (function (arguments)          {
          var G295811 = undefined;
          var G295812 = Array.prototype.slice.apply(arguments);
          G295811 = (function (arguments)            {
            var matchValminus295813 = G295812;
            if ((!((("object")===((typeof matchValminus295813))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus295813.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus295814 = matchValminus295813[0];
            var matchTempminus295815 = matchValminus295813[1];
            var arguments = matchTempminus295814;
            if ((("undefined")===((typeof matchTempminus295815))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var modulo = matchTempminus295815;
            return ((moduleC47fa390df.modsignTripleEqualminus0(this.logCounter, modulo))?(console.log.apply(console, arguments)) : (undefined));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295811))))            {
            return G295811;
            };
          G295811 = (function (arguments)            {
            var matchValminus295816 = G295812;
            if ((!((("object")===((typeof matchValminus295816))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus295816.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var arguments = matchValminus295816[0];
            return recur(arguments, 300);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295811))))            {
            return G295811;
            };
          G295811 = (function (arguments)            {
            var matchValminus295817 = G295812;
            var anythingElseminus295810 = matchValminus295817;
            throw ((("Match fail in log against: ")+anythingElseminus295810));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295811))))            {
            return G295811;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: arguments (defined modulo)] (if (%===0 this\.log-counter modulo) (console\.log\.apply console arguments))) ([: arguments] (recur arguments 300)) (anything-else-295810 (_throw (_+ ''Match fail in log against: '' anything-else-295810))))) for value ")+(JSON.stringify(G295812))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus295805 = actualFunminus295807.apply(this, arguments);
      while (recurP295808(returnValueminus295805))        {
        returnValueminus295805 = actualFunminus295807.apply(this, returnValueminus295805.args);
        };
      return returnValueminus295805;
      });
    var onMouseDown = (function (btn, x, y, evt)      {
      var actors = this.getActors();
      for (index in (actors))        {
        var actor = actors[index];
        actor.getCurrentState().onMouseDown(btn, x, y, evt);
        };
      });
    currentModuleminus295377.createPlayState = (function (params)      {
      return gamvas.State.extend({        
        init:makeInit(params),
        draw:draw,
        drawInPlay:drawInPlay,
        onMouseDown:onMouseDown,
        log:log
      });
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus295377;
  }))