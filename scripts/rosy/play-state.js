define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "rosy/goal", "gamvas/gamvas-module", "gamvas/box-2d-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, moduleminus2184996f81, gamvas, b2d)  {
  var currentModuleminus76490 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus76490 = value;
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
          var G76860 = undefined;
          var G76861 = level();
          G76860 = (function (arguments)            {
            var matchValminus76862 = G76861;
            var matchObjectTempminus76863 = matchValminus76862.geometry;
            if ((("undefined")===((typeof matchObjectTempminus76863))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var g = matchObjectTempminus76863;
            var matchObjectTempminus76864 = matchValminus76862.initialPosition;
            if ((("undefined")===((typeof matchObjectTempminus76864))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((("object")===((typeof matchObjectTempminus76864))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchObjectTempminus76864.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var px = matchObjectTempminus76864[0];
            var py = matchObjectTempminus76864[1];
            for (i in (g))              {
              this.addActor(g[i]);
              };
            this.ball = (new (moduleC4807d4439.Ball)("Player", px, py));
            this.addActor(this.ball);
            return this.addActor((new (moduleminus2184996f81.Goal)("Goal", 25, 150, this.ball)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76860))))            {
            return G76860;
            };
          throw ((("match-fail at ((match (level) (({} geometry g initial-position [: px py]) (for (i :in g) (this\.add-actor [g i])) (set! this\.ball (new Ball ''Player'' px py)) (this\.add-actor this\.ball) (this\.add-actor (new Goal ''Goal'' 25 150 this\.ball))))) for value ")+(JSON.stringify(G76861))));
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
        var G76921 = undefined;
        var G76922 = this.subState;
        G76921 = (function (arguments)          {
          var matchValminus76923 = G76922;
          if ((!(("inPlay"===matchValminus76923))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return this.drawInPlay(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76921))))          {
          return G76921;
          };
        G76921 = (function (arguments)          {
          var matchValminus76924 = G76922;
          var otherValue = matchValminus76924;
          return this.drawInPlay(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76921))))          {
          return G76921;
          };
        throw ((("match-fail at ((match this\.sub-state (:in-play (this\.draw-in-play time)) (other-value (this\.draw-in-play time)))) for value ")+(JSON.stringify(G76922))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      return // (gamvas\.physics\.draw-debug)
      ;
      });
    var log = (function ()      {
      var returnValueminus76926 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus76925",
          args:arguments
        };
        });
      var recurP76929 = (function (valminus76930)        {
        if ((("undefined")===((typeof valminus76930))))          {
          return false;
          };
        return (valminus76930.recurSigil===("recurSigilminus76925"));
        });
      var actualFunminus76928 = (function ()        {
        return (function (arguments)          {
          var G76932 = undefined;
          var G76933 = Array.prototype.slice.apply(arguments);
          G76932 = (function (arguments)            {
            var matchValminus76934 = G76933;
            if ((!((("object")===((typeof matchValminus76934))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus76934.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus76935 = matchValminus76934[0];
            var matchTempminus76936 = matchValminus76934[1];
            var arguments = matchTempminus76935;
            if ((("undefined")===((typeof matchTempminus76936))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var modulo = matchTempminus76936;
            return ((moduleC47fa390df.modsignTripleEqualminus0(this.logCounter, modulo))?(console.log.apply(console, arguments)) : (undefined));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76932))))            {
            return G76932;
            };
          G76932 = (function (arguments)            {
            var matchValminus76937 = G76933;
            if ((!((("object")===((typeof matchValminus76937))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus76937.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var arguments = matchValminus76937[0];
            return recur(arguments, 300);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76932))))            {
            return G76932;
            };
          G76932 = (function (arguments)            {
            var matchValminus76938 = G76933;
            var anythingElseminus76931 = matchValminus76938;
            throw ((("Match fail in log against: ")+anythingElseminus76931));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76932))))            {
            return G76932;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: arguments (defined modulo)] (if (%===0 this\.log-counter modulo) (console\.log\.apply console arguments))) ([: arguments] (recur arguments 300)) (anything-else-76931 (_throw (_+ ''Match fail in log against: '' anything-else-76931))))) for value ")+(JSON.stringify(G76933))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus76926 = actualFunminus76928.apply(this, arguments);
      while (recurP76929(returnValueminus76926))        {
        returnValueminus76926 = actualFunminus76928.apply(this, returnValueminus76926.args);
        };
      return returnValueminus76926;
      });
    var onMouseDown = (function (btn, x, y, evt)      {
      var actors = this.getActors();
      for (index in (actors))        {
        var actor = actors[index];
        actor.getCurrentState().onMouseDown(btn, x, y, evt);
        };
      });
    currentModuleminus76490.createPlayState = (function (params)      {
      return gamvas.State.extend({        
        init:makeInit(params),
        draw:draw,
        drawInPlay:drawInPlay,
        onMouseDown:onMouseDown,
        log:log
      });
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus76490;
  }))