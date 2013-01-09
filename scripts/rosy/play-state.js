define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, gamvas)  {
  var currentModuleminus44867 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus44867 = value;
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
    // ("rosy/wall" :all)
    ;
    // ("rosy/ball" :all)
    ;
    // ((js "gamvas/gamvas-module" gamvas))
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
          var G44886 = undefined;
          var G44887 = level();
          G44886 = (function (arguments)            {
            var matchValminus44888 = G44887;
            var matchObjectTempminus44889 = matchValminus44888.geometry;
            if ((("undefined")===((typeof matchObjectTempminus44889))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var g = matchObjectTempminus44889;
            var matchObjectTempminus44890 = matchValminus44888.initialPosition;
            if ((("undefined")===((typeof matchObjectTempminus44890))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchObjectTempminus44890.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var px = matchObjectTempminus44890[0];
            var py = matchObjectTempminus44890[1];
            for (i in (g))              {
              this.addActor(g[i]);
              };
            this.ball = (new moduleC4807d4439.Ball("Player", px, py));
            return this.addActor(this.ball);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44886))))            {
            return G44886;
            };
          throw ((("match-fail at ((match (level) (({} geometry g initial-position [: px py]) (for (i :in g) (this\.add-actor [g i])) (set! this\.ball (new Ball ''Player'' px py)) (this\.add-actor this\.ball)))) for value ")+(JSON.stringify(G44887))));
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
      return (((((!(moduleminus58c4bce870.TripleEqualminus("undefined", typeof(this.ball)))))&&(this.ball.stationaryPredicate())))?(this.subState = "ballAtRest") : (undefined));
      });
    var draw = (function (time)      {
      this.logCounter = moduleminus58c4bce870.plus(1, this.logCounter);
      return (function (arguments)        {
        var G44955 = undefined;
        var G44956 = this.subState;
        G44955 = (function (arguments)          {
          var matchValminus44957 = G44956;
          if ((!(("inPlay"===matchValminus44957))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return this.drawInPlay(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44955))))          {
          return G44955;
          };
        G44955 = (function (arguments)          {
          var matchValminus44958 = G44956;
          var otherValue = matchValminus44958;
          return this.drawInPlay(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44955))))          {
          return G44955;
          };
        throw ((("match-fail at ((match this\.sub-state (:in-play (this\.draw-in-play time)) (other-value (this\.draw-in-play time)))) for value ")+(JSON.stringify(G44956))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var log = (function ()      {
      var returnValueminus44960 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus44959",
          args:arguments
        };
        });
      var recurP44963 = (function (valminus44964)        {
        if ((("undefined")===((typeof valminus44964))))          {
          return false;
          };
        return (valminus44964.recurSigil===("recurSigilminus44959"));
        });
      var actualFunminus44962 = (function ()        {
        return (function (arguments)          {
          var G44966 = undefined;
          var G44967 = Array.prototype.slice.apply(arguments);
          G44966 = (function (arguments)            {
            var matchValminus44968 = G44967;
            if ((!((2===matchValminus44968.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus44969 = matchValminus44968[0];
            var matchTempminus44970 = matchValminus44968[1];
            var arguments = matchTempminus44969;
            if ((("undefined")===((typeof matchTempminus44970))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var modulo = matchTempminus44970;
            return ((moduleC47fa390df.modsignTripleEqualminus0(this.logCounter, modulo))?(console.log.apply(console, arguments)) : (undefined));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44966))))            {
            return G44966;
            };
          G44966 = (function (arguments)            {
            var matchValminus44971 = G44967;
            if ((!((1===matchValminus44971.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var arguments = matchValminus44971[0];
            return recur(arguments, 300);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44966))))            {
            return G44966;
            };
          G44966 = (function (arguments)            {
            var matchValminus44972 = G44967;
            var anythingElseminus44965 = matchValminus44972;
            throw ((("Match fail in log against: ")+anythingElseminus44965));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44966))))            {
            return G44966;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: arguments (defined modulo)] (if (%===0 this\.log-counter modulo) (console\.log\.apply console arguments))) ([: arguments] (recur arguments 300)) (anything-else-44965 (_throw (_+ ''Match fail in log against: '' anything-else-44965))))) for value ")+(JSON.stringify(G44967))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus44960 = actualFunminus44962.apply(this, arguments);
      while (recurP44963(returnValueminus44960))        {
        returnValueminus44960 = actualFunminus44962.apply(this, returnValueminus44960.args);
        };
      return returnValueminus44960;
      });
    currentModuleminus44867.createPlayState = (function (params)      {
      return gamvas.State.extend({        
        init:makeInit(params),
        draw:draw,
        drawInPlay:drawInPlay,
        log:log
      });
      });
    }))();
  return currentModuleminus44867;
  }))