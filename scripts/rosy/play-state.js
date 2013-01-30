define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "rosy/goal", "gamvas/gamvas-module", "gamvas/box-2d-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, moduleminus2184996f81, gamvas, b2d)  {
  var currentModuleminus9431 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus9431 = value;
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
          var G9793 = undefined;
          var G9794 = level();
          G9793 = (function (arguments)            {
            var matchValminus9795 = G9794;
            var matchObjectTempminus9796 = matchValminus9795.geometry;
            if ((("undefined")===((typeof matchObjectTempminus9796))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var g = matchObjectTempminus9796;
            var matchObjectTempminus9797 = matchValminus9795.initialPosition;
            if ((("undefined")===((typeof matchObjectTempminus9797))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((("object")===((typeof matchObjectTempminus9797))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchObjectTempminus9797.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var px = matchObjectTempminus9797[0];
            var py = matchObjectTempminus9797[1];
            for (i in (g))              {
              this.addActor(g[i]);
              };
            this.ball = (new (moduleC4807d4439.Ball)("Player", px, py));
            this.addActor(this.ball);
            return this.addActor((new (moduleminus2184996f81.Goal)("Goal", 25, 150, this.ball)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9793))))            {
            return G9793;
            };
          throw ((("match-fail at ((match (level) (({} geometry g initial-position [: px py]) (for (i :in g) (this\.add-actor [g i])) (set! this\.ball (new Ball ''Player'' px py)) (this\.add-actor this\.ball) (this\.add-actor (new Goal ''Goal'' 25 150 this\.ball))))) for value ")+(JSON.stringify(G9794))));
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
        var G9854 = undefined;
        var G9855 = this.subState;
        G9854 = (function (arguments)          {
          var matchValminus9856 = G9855;
          if ((!(("inPlay"===matchValminus9856))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return this.drawInPlay(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9854))))          {
          return G9854;
          };
        G9854 = (function (arguments)          {
          var matchValminus9857 = G9855;
          var otherValue = matchValminus9857;
          return this.drawInPlay(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9854))))          {
          return G9854;
          };
        throw ((("match-fail at ((match this\.sub-state (:in-play (this\.draw-in-play time)) (other-value (this\.draw-in-play time)))) for value ")+(JSON.stringify(G9855))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      return // (gamvas\.physics\.draw-debug)
      ;
      });
    var log = (function ()      {
      var returnValueminus9859 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus9858",
          args:arguments
        };
        });
      var recurP9862 = (function (valminus9863)        {
        if ((("undefined")===((typeof valminus9863))))          {
          return false;
          };
        return (valminus9863.recurSigil===("recurSigilminus9858"));
        });
      var actualFunminus9861 = (function ()        {
        return (function (arguments)          {
          var G9865 = undefined;
          var G9866 = Array.prototype.slice.apply(arguments);
          G9865 = (function (arguments)            {
            var matchValminus9867 = G9866;
            if ((!((("object")===((typeof matchValminus9867))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus9867.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus9868 = matchValminus9867[0];
            var matchTempminus9869 = matchValminus9867[1];
            var arguments = matchTempminus9868;
            if ((("undefined")===((typeof matchTempminus9869))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var modulo = matchTempminus9869;
            return ((moduleC47fa390df.modsignTripleEqualminus0(this.logCounter, modulo))?(console.log.apply(console, arguments)) : (undefined));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9865))))            {
            return G9865;
            };
          G9865 = (function (arguments)            {
            var matchValminus9870 = G9866;
            if ((!((("object")===((typeof matchValminus9870))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus9870.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var arguments = matchValminus9870[0];
            return recur(arguments, 300);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9865))))            {
            return G9865;
            };
          G9865 = (function (arguments)            {
            var matchValminus9871 = G9866;
            var anythingElseminus9864 = matchValminus9871;
            throw ((("Match fail in log against: ")+anythingElseminus9864));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9865))))            {
            return G9865;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: arguments (defined modulo)] (if (%===0 this\.log-counter modulo) (console\.log\.apply console arguments))) ([: arguments] (recur arguments 300)) (anything-else-9864 (_throw (_+ ''Match fail in log against: '' anything-else-9864))))) for value ")+(JSON.stringify(G9866))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus9859 = actualFunminus9861.apply(this, arguments);
      while (recurP9862(returnValueminus9859))        {
        returnValueminus9859 = actualFunminus9861.apply(this, returnValueminus9859.args);
        };
      return returnValueminus9859;
      });
    var onMouseDown = (function (btn, x, y, evt)      {
      var actors = this.getActors();
      for (index in (actors))        {
        var actor = actors[index];
        actor.getCurrentState().onMouseDown(btn, x, y, evt);
        };
      });
    currentModuleminus9431.createPlayState = (function (params)      {
      return gamvas.State.extend({        
        init:makeInit(params),
        draw:draw,
        drawInPlay:drawInPlay,
        onMouseDown:onMouseDown,
        log:log
      });
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus9431;
  }))