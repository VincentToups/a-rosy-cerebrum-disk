define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, gamvas)  {
  var currentModuleminus58889 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus58889 = value;
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
          var G58908 = undefined;
          var G58909 = level();
          G58908 = (function (arguments)            {
            var matchValminus58910 = G58909;
            var matchObjectTempminus58911 = matchValminus58910.geometry;
            if ((("undefined")===((typeof matchObjectTempminus58911))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var g = matchObjectTempminus58911;
            var matchObjectTempminus58912 = matchValminus58910.initialPosition;
            if ((("undefined")===((typeof matchObjectTempminus58912))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchObjectTempminus58912.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var px = matchObjectTempminus58912[0];
            var py = matchObjectTempminus58912[1];
            for (i in (g))              {
              this.addActor(g[i]);
              };
            this.ball = (new moduleC4807d4439.Ball("Player", px, py));
            return this.addActor(this.ball);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58908))))            {
            return G58908;
            };
          throw ((("match-fail at ((match (level) (({} geometry g initial-position [: px py]) (for (i :in g) (this\.add-actor [g i])) (set! this\.ball (new Ball ''Player'' px py)) (this\.add-actor this\.ball)))) for value ")+(JSON.stringify(G58909))));
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
      (((((!(moduleminus58c4bce870.TripleEqualminus("undefined", typeof(this.ball)))))&&(((this.ball.stationaryPredicate())&&(moduleminus58c4bce870.TripleEqualminus(this.state, "inPlay"))))))?((function (arguments)        {
        console.log("Ball stationary at ", this.ball.position);
        this.subState = "ballAtRest";
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
      // (this\.camera\.set-position this\.ball\.position\.x this\.ball\.position\.y)
      ;
      return moduleC47fa390df.moveTowards(this.camera, this.ball.position, time);
      });
    var draw = (function (time)      {
      this.logCounter = moduleminus58c4bce870.plus(1, this.logCounter);
      return (function (arguments)        {
        var G58993 = undefined;
        var G58994 = this.subState;
        G58993 = (function (arguments)          {
          var matchValminus58995 = G58994;
          if ((!(("inPlay"===matchValminus58995))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return this.drawInPlay(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58993))))          {
          return G58993;
          };
        G58993 = (function (arguments)          {
          var matchValminus58996 = G58994;
          var otherValue = matchValminus58996;
          return this.drawInPlay(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58993))))          {
          return G58993;
          };
        throw ((("match-fail at ((match this\.sub-state (:in-play (this\.draw-in-play time)) (other-value (this\.draw-in-play time)))) for value ")+(JSON.stringify(G58994))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var log = (function ()      {
      var returnValueminus58998 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus58997",
          args:arguments
        };
        });
      var recurP59001 = (function (valminus59002)        {
        if ((("undefined")===((typeof valminus59002))))          {
          return false;
          };
        return (valminus59002.recurSigil===("recurSigilminus58997"));
        });
      var actualFunminus59000 = (function ()        {
        return (function (arguments)          {
          var G59004 = undefined;
          var G59005 = Array.prototype.slice.apply(arguments);
          G59004 = (function (arguments)            {
            var matchValminus59006 = G59005;
            if ((!((2===matchValminus59006.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus59007 = matchValminus59006[0];
            var matchTempminus59008 = matchValminus59006[1];
            var arguments = matchTempminus59007;
            if ((("undefined")===((typeof matchTempminus59008))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var modulo = matchTempminus59008;
            return ((moduleC47fa390df.modsignTripleEqualminus0(this.logCounter, modulo))?(console.log.apply(console, arguments)) : (undefined));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G59004))))            {
            return G59004;
            };
          G59004 = (function (arguments)            {
            var matchValminus59009 = G59005;
            if ((!((1===matchValminus59009.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var arguments = matchValminus59009[0];
            return recur(arguments, 300);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G59004))))            {
            return G59004;
            };
          G59004 = (function (arguments)            {
            var matchValminus59010 = G59005;
            var anythingElseminus59003 = matchValminus59010;
            throw ((("Match fail in log against: ")+anythingElseminus59003));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G59004))))            {
            return G59004;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: arguments (defined modulo)] (if (%===0 this\.log-counter modulo) (console\.log\.apply console arguments))) ([: arguments] (recur arguments 300)) (anything-else-59003 (_throw (_+ ''Match fail in log against: '' anything-else-59003))))) for value ")+(JSON.stringify(G59005))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus58998 = actualFunminus59000.apply(this, arguments);
      while (recurP59001(returnValueminus58998))        {
        returnValueminus58998 = actualFunminus59000.apply(this, returnValueminus58998.args);
        };
      return returnValueminus58998;
      });
    currentModuleminus58889.createPlayState = (function (params)      {
      return gamvas.State.extend({        
        init:makeInit(params),
        draw:draw,
        drawInPlay:drawInPlay,
        log:log
      });
      });
    }))();
  return currentModuleminus58889;
  }))