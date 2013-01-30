define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module", "gamvas/box-2d-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, gamvas, Box2D)  {
  var currentModuleminus9434 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus9434 = value;
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
    // ("rosy/drawing" :all)
    ;
    // ("rosy/utils" :all)
    ;
    // ((js "gamvas/gamvas-module" gamvas))
    ;
    // ((js "gamvas/box-2d-module" Box2D))
    ;
    var stateExtension = {      
      
    };
    var actorExtension = {      
      
    };
    var vec = (function (x, y)      {
      return (new (Box2D.Common.Math.b2Vec2)(x, y));
      });
    var goalRadius = 30;
    var goalColor = moduleC47fa390df.makeDrgba({      
      r:255,
      g:212,
      b:36,
      dr:10,
      dg:10,
      db:10,
      a:0.4
    });
    var numberOfCircles = 8;
    (function (arguments)      {
      var defineToObjectminus9442 = stateExtension;
      var doCollide = (function (a, c, om)        {
        return false;
        });
      defineToObjectminus9442.doCollide = doCollide;
      return defineToObjectminus9442;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus9462 = stateExtension;
      var update = (function (time)        {
        return ((moduleminus4745e9d952.definedPredicate(this.actor.ball))?((function (arguments)          {
          var matchVar9496 = this.actor.ball.position;
          var x = matchVar9496.x;
          if ((("undefined")===((typeof x))))            {
            throw ((("Match error in var-match (({} x x y y) this\.actor\.ball\.position) against: ")+matchVar9496));
            };
          var y = matchVar9496.y;
          if ((("undefined")===((typeof y))))            {
            throw ((("Match error in var-match (({} x x y y) this\.actor\.ball\.position) against: ")+matchVar9496));
            };
          ;
          return ((this.actor.pointInside(x, y))?((function (arguments)            {
            this.actor.ball.cancelGravityNextUpdate(0);
            var matchVar9502 = this.actor.ball.body.GetWorldCenter();
            var ballCenter = matchVar9502;
            var bx = matchVar9502.x;
            if ((("undefined")===((typeof bx))))              {
              throw ((("Match error in var-match ((and ball-center ({} x bx y by)) (this\.actor\.ball\.body\.GetWorldCenter)) against: ")+matchVar9502));
              };
            var by = matchVar9502.y;
            if ((("undefined")===((typeof by))))              {
              throw ((("Match error in var-match ((and ball-center ({} x bx y by)) (this\.actor\.ball\.body\.GetWorldCenter)) against: ")+matchVar9502));
              };
            ;
            var matchVar9503 = this.actor.body.GetWorldCenter();
            var gx = matchVar9503.x;
            if ((("undefined")===((typeof gx))))              {
              throw ((("Match error in var-match (({} x gx y gy) (this\.actor\.body\.GetWorldCenter)) against: ")+matchVar9503));
              };
            var gy = matchVar9503.y;
            if ((("undefined")===((typeof gy))))              {
              throw ((("Match error in var-match (({} x gx y gy) (this\.actor\.body\.GetWorldCenter)) against: ")+matchVar9503));
              };
            ;
            var bToG = (new (gamvas.Vector2D)(moduleminus58c4bce870.minus(gx, bx), moduleminus58c4bce870.minus(gy, by)));
            var r = bToG.length();
            var matchVar9504 = bToG.normalized();
            var fx = matchVar9504.x;
            if ((("undefined")===((typeof fx))))              {
              throw ((("Match error in var-match (({} x fx y fy) (b->g\.normalized)) against: ")+matchVar9504));
              };
            var fy = matchVar9504.y;
            if ((("undefined")===((typeof fy))))              {
              throw ((("Match error in var-match (({} x fx y fy) (b->g\.normalized)) against: ")+matchVar9504));
              };
            ;
            this.actor.ball.addDampingNextUpdate(moduleminus58c4bce870.divide(1, r));
            return this.actor.ball.addForce(vec(moduleminus58c4bce870.times(fx, moduleminus58c4bce870.times(5, r, r, r, r)), moduleminus58c4bce870.times(fy, moduleminus58c4bce870.times(5, r, r, r, r))), ballCenter);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
        });
      defineToObjectminus9462.update = update;
      return defineToObjectminus9462;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    var GoalState = gamvas.ActorState.extend(stateExtension);
    (function (arguments)      {
      var defineToObjectminus9510 = actorExtension;
      var create = (function ()        {
        var returnValueminus9526 = undefined;
        var recur = (function ()          {
          return {            
            recurSigil:"recurSigilminus9525",
            args:arguments
          };
          });
        var recurP9529 = (function (valminus9530)          {
          if ((("undefined")===((typeof valminus9530))))            {
            return false;
            };
          return (valminus9530.recurSigil===("recurSigilminus9525"));
          });
        var actualFunminus9528 = (function ()          {
          return (function (arguments)            {
            var G9532 = undefined;
            var G9533 = Array.prototype.slice.apply(arguments);
            G9532 = (function (arguments)              {
              var matchValminus9534 = G9533;
              if ((!((("object")===((typeof matchValminus9534))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((matchValminus9534.length>=3))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArraySimplePartminus9535 = Array.prototype.slice.call(matchValminus9534, 0, 3);
              if ((!((("object")===((typeof matchArraySimplePartminus9535))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((3===matchArraySimplePartminus9535.length))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var name = matchArraySimplePartminus9535[0];
              var cx = matchArraySimplePartminus9535[1];
              var cy = matchArraySimplePartminus9535[2];
              var matchArrayTailPartminus9536 = Array.prototype.slice.call(matchValminus9534, 3);
              var matchTempminus9537 = matchArrayTailPartminus9536[0];
              var ball = matchTempminus9537;
              this._super(name, cx, cy);
              var matchVar9538 = this.position;
              var cx = matchVar9538.x;
              if ((("undefined")===((typeof cx))))                {
                throw ((("Match error in var-match (({} x cx y cy) this\.position) against: ")+matchVar9538));
                };
              var cy = matchVar9538.y;
              if ((("undefined")===((typeof cy))))                {
                throw ((("Match error in var-match (({} x cx y cy) this\.position) against: ")+matchVar9538));
                };
              ;
              this.bodyCircle(cx, cy, goalRadius, gamvas.physics.STATIC);
              this.visRadii = moduleminus4745e9d952.range(0, 1, numberOfCircles, (function ()                {
                return [moduleC47fa390df.randomNormal(moduleminus58c4bce870.divide(goalRadius, 2)), 0];
                }));
              this.addState((new (GoalState)("goalState")));
              this.setState("goalState");
              this.ball = ball;
              return console.log("In goal create using color ", goalColor.toString(), " ball is ", ball);
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9532))))              {
              return G9532;
              };
            G9532 = (function (arguments)              {
              var matchValminus9547 = G9533;
              var anythingElseminus9531 = matchValminus9547;
              throw ((("Match fail in create against: ")+anythingElseminus9531));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9532))))              {
              return G9532;
              };
            throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name cx cy :- ball] (this\._super name cx cy) (var-match ({} x cx y cy) this\.position) (this\.body-circle cx cy goal-radius gamvas\.physics\.STATIC) (set! (@ vis-radii) (range 0 1 number-of-circles (lambda nil [: (random-normal (/ goal-radius 2)) 0]))) (this\.add-state (new Goal-State :goal-state)) (this\.set-state :goal-state) (set! (@ ball) ball) (console\.log ''In goal create using color '' (goal-color\.to-string) '' ball is '' ball)) (anything-else-9531 (_throw (_+ ''Match fail in create against: '' anything-else-9531))))) for value ")+(JSON.stringify(G9533))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          });
        returnValueminus9526 = actualFunminus9528.apply(this, arguments);
        while (recurP9529(returnValueminus9526))          {
          returnValueminus9526 = actualFunminus9528.apply(this, returnValueminus9526.args);
          };
        return returnValueminus9526;
        });
      defineToObjectminus9510.create = create;
      return defineToObjectminus9510;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    var clamp = (function (val, low, high)      {
      return ((moduleminus58c4bce870.greaterThan(val, high))?(high) : (((moduleminus58c4bce870.lessThan(val, low))?(low) : (val))));
      });
    var circleClamp = (function (val, low, high)      {
      return ((moduleminus58c4bce870.greaterThan(val, high))?(moduleminus58c4bce870.plus(low, moduleminus58c4bce870.minus(val, high))) : (((moduleminus58c4bce870.lessThan(val, low))?(moduleminus58c4bce870.minus(high, moduleminus58c4bce870.minus(low, val))) : (val))));
      });
    var _clamp = (function (low, high)      {
      return (function (val)        {
        return clamp(val, low, high);
        });
      });
    (function (arguments)      {
      var defineToObjectminus9553 = actorExtension;
      var updateRadii = (function ()        {
        var returnValueminus9609 = undefined;
        var recur = (function ()          {
          return {            
            recurSigil:"recurSigilminus9608",
            args:arguments
          };
          });
        var recurP9612 = (function (valminus9613)          {
          if ((("undefined")===((typeof valminus9613))))            {
            return false;
            };
          return (valminus9613.recurSigil===("recurSigilminus9608"));
          });
        var actualFunminus9611 = (function ()          {
          return (function (arguments)            {
            var G9615 = undefined;
            var G9616 = Array.prototype.slice.apply(arguments);
            G9615 = (function (arguments)              {
              var matchValminus9617 = G9616;
              if ((!((("object")===((typeof matchValminus9617))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((1===matchValminus9617.length))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var time = matchValminus9617[0];
              this.visRadii = moduleminus295baa4e1e.map((function ()                {
                var returnValueminus9623 = undefined;
                var recur = (function ()                  {
                  return {                    
                    recurSigil:"recurSigilminus9622",
                    args:arguments
                  };
                  });
                var recurP9626 = (function (valminus9627)                  {
                  if ((("undefined")===((typeof valminus9627))))                    {
                    return false;
                    };
                  return (valminus9627.recurSigil===("recurSigilminus9622"));
                  });
                var actualFunminus9625 = (function ()                  {
                  return (function (arguments)                    {
                    var G9629 = undefined;
                    var G9630 = Array.prototype.slice.apply(arguments);
                    G9629 = (function (arguments)                      {
                      var matchValminus9631 = G9630;
                      if ((!((("object")===((typeof matchValminus9631))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        };
                      if ((!((1===matchValminus9631.length))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        };
                      var matchTempminus9632 = matchValminus9631[0];
                      if ((!((("object")===((typeof matchTempminus9632))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        };
                      if ((!((2===matchTempminus9632.length))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        };
                      var r = matchTempminus9632[0];
                      var d = matchTempminus9632[1];
                      return [circleClamp(moduleminus58c4bce870.plus(r, moduleminus58c4bce870.times(time, d)), 0, goalRadius), clamp(moduleminus58c4bce870.plus(d, moduleC47fa390df.randomNormal()), -10, 10)];
                      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9629))))                      {
                      return G9629;
                      };
                    G9629 = (function (arguments)                      {
                      var matchValminus9633 = G9630;
                      var anythingElseminus9628 = matchValminus9633;
                      throw ((("Match fail in anonymous against: ")+anythingElseminus9628));
                      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9629))))                      {
                      return G9629;
                      };
                    throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: [: r d]] [: (circle-clamp (+ r (* time d)) 0 goal-radius) (clamp (+ d (random-normal)) -10 10)]) (anything-else-9628 (_throw (_+ ''Match fail in anonymous against: '' anything-else-9628))))) for value ")+(JSON.stringify(G9630))));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  });
                returnValueminus9623 = actualFunminus9625.apply(this, arguments);
                while (recurP9626(returnValueminus9623))                  {
                  returnValueminus9623 = actualFunminus9625.apply(this, returnValueminus9623.args);
                  };
                return returnValueminus9623;
                }), this.visRadii);
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9615))))              {
              return G9615;
              };
            G9615 = (function (arguments)              {
              var matchValminus9638 = G9616;
              var anythingElseminus9614 = matchValminus9638;
              throw ((("Match fail in update-radii against: ")+anythingElseminus9614));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9615))))              {
              return G9615;
              };
            throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: time] (set! (@ vis-radii) (map (lambda ([: r d]) [: (circle-clamp (+ r (* time d)) 0 goal-radius) (clamp (+ d (random-normal)) -10 10)]) (@ vis-radii)))) (anything-else-9614 (_throw (_+ ''Match fail in update-radii against: '' anything-else-9614))))) for value ")+(JSON.stringify(G9616))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          });
        returnValueminus9609 = actualFunminus9611.apply(this, arguments);
        while (recurP9612(returnValueminus9609))          {
          returnValueminus9609 = actualFunminus9611.apply(this, returnValueminus9609.args);
          };
        return returnValueminus9609;
        });
      defineToObjectminus9553.updateRadii = updateRadii;
      return defineToObjectminus9553;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus9644 = actorExtension;
      var drawOneCircle = (function (r)        {
        var matchVar9660 = this.position;
        var x = matchVar9660.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) this\.position) against: ")+matchVar9660));
          };
        var y = matchVar9660.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) this\.position) against: ")+matchVar9660));
          };
        ;
        var c = gamvas.state.getCurrentState().c;
        return moduleminus6acd260b96.withJitter(c, 10, 3, (function (c)          {
          c.strokeStyle = goalColor.toString();
          c.beginPath();
          c.arc(moduleC47fa390df.random(4, moduleminus58c4bce870.minus(x, 2)), moduleC47fa390df.random(4, moduleminus58c4bce870.minus(y, 2)), moduleC47fa390df.random(0.1, r), 0, moduleminus58c4bce870.times(2, Math.PI), false);
          return c.stroke();
          }));
        });
      defineToObjectminus9644.drawOneCircle = drawOneCircle;
      return defineToObjectminus9644;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus9666 = actorExtension;
      var draw = (function (time)        {
        this._super(time);
        this.updateRadii(time);
        var arrayObject9727 = this.visRadii;
        for (index in (arrayObject9727))          {
          var matchVar9732 = arrayObject9727[index];
          if ((!((("object")===((typeof matchVar9732))))))            {
            throw ((("Match error in var-match ([: r d] [array-object9727 index]) against: ")+matchVar9732));
            };
          if ((!((2===matchVar9732.length))))            {
            throw ((("Match error in var-match ([: r d] [array-object9727 index]) against: ")+matchVar9732));
            };
          var r = matchVar9732[0];
          var d = matchVar9732[1];
          ;
          this.drawOneCircle(r);
          };
        ;
        });
      defineToObjectminus9666.draw = draw;
      return defineToObjectminus9666;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus9742 = actorExtension;
      var pointInside = (function (worldX, worldY)        {
        var fixture = this.fixture;
        var physicsX = gamvas.physics.toWorld(worldX), physicsY = gamvas.physics.toWorld(worldY);
        return fixture.TestPoint((new (Box2D.Common.Math.b2Vec2)(physicsX, physicsY)));
        });
      defineToObjectminus9742.pointInside = pointInside;
      return defineToObjectminus9742;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    currentModuleminus9434.Goal = gamvas.Actor.extend(actorExtension);
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus9434;
  }))