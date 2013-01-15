define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, gamvas)  {
  var currentModuleminus26463 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus26463 = value;
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
          var G26482 = undefined;
          var G26483 = level();
          G26482 = (function (arguments)            {
            var matchValminus26484 = G26483;
            var matchObjectTempminus26485 = matchValminus26484.geometry;
            if ((("undefined")===((typeof matchObjectTempminus26485))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var g = matchObjectTempminus26485;
            var matchObjectTempminus26486 = matchValminus26484.initialPosition;
            if ((("undefined")===((typeof matchObjectTempminus26486))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchObjectTempminus26486.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var px = matchObjectTempminus26486[0];
            var py = matchObjectTempminus26486[1];
            for (i in (g))              {
              this.addActor(g[i]);
              };
            this.ball = (new moduleC4807d4439.Ball("Player", px, py));
            return this.addActor(this.ball);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26482))))            {
            return G26482;
            };
          throw ((("match-fail at ((match (level) (({} geometry g initial-position [: px py]) (for (i :in g) (this\.add-actor [g i])) (set! this\.ball (new Ball ''Player'' px py)) (this\.add-actor this\.ball)))) for value ")+(JSON.stringify(G26483))));
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
      (((((!(moduleminus58c4bce870.TripleEqualminus("undefined", (typeof this.ball)))))&&(((this.ball.stationaryPredicate())&&(moduleminus58c4bce870.TripleEqualminus(this.state, "inPlay"))))))?((function (arguments)        {
        console.log("Ball stationary at ", this.ball.position);
        this.subState = "ballAtRest";
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
      // (this\.camera\.set-position this\.ball\.position\.x this\.ball\.position\.y)
      ;
      return moduleC47fa390df.moveTowards(this.camera, this.ball.position, time);
      });
    var draw = (function (time)      {
      this.logCounter = moduleminus58c4bce870.plus(1, this.logCounter);
      (function (arguments)        {
        var G26567 = undefined;
        var G26568 = this.subState;
        G26567 = (function (arguments)          {
          var matchValminus26569 = G26568;
          if ((!(("inPlay"===matchValminus26569))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return this.drawInPlay(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26567))))          {
          return G26567;
          };
        G26567 = (function (arguments)          {
          var matchValminus26570 = G26568;
          var otherValue = matchValminus26570;
          return this.drawInPlay(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26567))))          {
          return G26567;
          };
        throw ((("match-fail at ((match this\.sub-state (:in-play (this\.draw-in-play time)) (other-value (this\.draw-in-play time)))) for value ")+(JSON.stringify(G26568))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      return gamvas.physics.drawDebug();
      });
    var log = (function ()      {
      var returnValueminus26572 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus26571",
          args:arguments
        };
        });
      var recurP26575 = (function (valminus26576)        {
        if ((("undefined")===((typeof valminus26576))))          {
          return false;
          };
        return (valminus26576.recurSigil===("recurSigilminus26571"));
        });
      var actualFunminus26574 = (function ()        {
        return (function (arguments)          {
          var G26578 = undefined;
          var G26579 = Array.prototype.slice.apply(arguments);
          G26578 = (function (arguments)            {
            var matchValminus26580 = G26579;
            if ((!((2===matchValminus26580.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus26581 = matchValminus26580[0];
            var matchTempminus26582 = matchValminus26580[1];
            var arguments = matchTempminus26581;
            if ((("undefined")===((typeof matchTempminus26582))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var modulo = matchTempminus26582;
            return ((moduleC47fa390df.modsignTripleEqualminus0(this.logCounter, modulo))?(console.log.apply(console, arguments)) : (undefined));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26578))))            {
            return G26578;
            };
          G26578 = (function (arguments)            {
            var matchValminus26583 = G26579;
            if ((!((1===matchValminus26583.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var arguments = matchValminus26583[0];
            return recur(arguments, 300);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26578))))            {
            return G26578;
            };
          G26578 = (function (arguments)            {
            var matchValminus26584 = G26579;
            var anythingElseminus26577 = matchValminus26584;
            throw ((("Match fail in log against: ")+anythingElseminus26577));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26578))))            {
            return G26578;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: arguments (defined modulo)] (if (%===0 this\.log-counter modulo) (console\.log\.apply console arguments))) ([: arguments] (recur arguments 300)) (anything-else-26577 (_throw (_+ ''Match fail in log against: '' anything-else-26577))))) for value ")+(JSON.stringify(G26579))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus26572 = actualFunminus26574.apply(this, arguments);
      while (recurP26575(returnValueminus26572))        {
        returnValueminus26572 = actualFunminus26574.apply(this, returnValueminus26572.args);
        };
      return returnValueminus26572;
      });
    currentModuleminus26463.createPlayState = (function (params)      {
      return gamvas.State.extend({        
        init:makeInit(params),
        draw:draw,
        drawInPlay:drawInPlay,
        log:log
      });
      });
    }))();
  return currentModuleminus26463;
  }))