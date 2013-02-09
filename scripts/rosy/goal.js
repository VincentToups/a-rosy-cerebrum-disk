define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module", "gamvas/box-2d-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, gamvas, Box2D)  {
  var currentModuleminus76493 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus76493 = value;
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
    var numberOfCircles = 5;
    (function (arguments)      {
      var defineToObjectminus76501 = stateExtension;
      var doCollide = (function (a, c, om)        {
        return false;
        });
      defineToObjectminus76501.doCollide = doCollide;
      return defineToObjectminus76501;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus76521 = stateExtension;
      var update = (function (time)        {
        return ((moduleminus4745e9d952.definedPredicate(this.actor.ball))?((function (arguments)          {
          var matchVar76555 = this.actor.ball.position;
          var x = matchVar76555.x;
          if ((("undefined")===((typeof x))))            {
            throw ((("Match error in var-match (({} x x y y) this\.actor\.ball\.position) against: ")+matchVar76555));
            };
          var y = matchVar76555.y;
          if ((("undefined")===((typeof y))))            {
            throw ((("Match error in var-match (({} x x y y) this\.actor\.ball\.position) against: ")+matchVar76555));
            };
          ;
          return ((this.actor.pointInside(x, y))?((function (arguments)            {
            this.actor.ball.cancelGravityNextUpdate(0);
            var matchVar76561 = this.actor.ball.body.GetWorldCenter();
            var ballCenter = matchVar76561;
            var bx = matchVar76561.x;
            if ((("undefined")===((typeof bx))))              {
              throw ((("Match error in var-match ((and ball-center ({} x bx y by)) (this\.actor\.ball\.body\.GetWorldCenter)) against: ")+matchVar76561));
              };
            var by = matchVar76561.y;
            if ((("undefined")===((typeof by))))              {
              throw ((("Match error in var-match ((and ball-center ({} x bx y by)) (this\.actor\.ball\.body\.GetWorldCenter)) against: ")+matchVar76561));
              };
            ;
            var matchVar76562 = this.actor.body.GetWorldCenter();
            var gx = matchVar76562.x;
            if ((("undefined")===((typeof gx))))              {
              throw ((("Match error in var-match (({} x gx y gy) (this\.actor\.body\.GetWorldCenter)) against: ")+matchVar76562));
              };
            var gy = matchVar76562.y;
            if ((("undefined")===((typeof gy))))              {
              throw ((("Match error in var-match (({} x gx y gy) (this\.actor\.body\.GetWorldCenter)) against: ")+matchVar76562));
              };
            ;
            var bToG = (new (gamvas.Vector2D)(moduleminus58c4bce870.minus(gx, bx), moduleminus58c4bce870.minus(gy, by)));
            var r = bToG.length();
            var matchVar76563 = bToG.normalized();
            var fx = matchVar76563.x;
            if ((("undefined")===((typeof fx))))              {
              throw ((("Match error in var-match (({} x fx y fy) (b->g\.normalized)) against: ")+matchVar76563));
              };
            var fy = matchVar76563.y;
            if ((("undefined")===((typeof fy))))              {
              throw ((("Match error in var-match (({} x fx y fy) (b->g\.normalized)) against: ")+matchVar76563));
              };
            ;
            this.actor.ball.addDampingNextUpdate(moduleminus58c4bce870.divide(1, r));
            return this.actor.ball.addForce(vec(moduleminus58c4bce870.times(fx, moduleminus58c4bce870.times(5, r, r, r, r)), moduleminus58c4bce870.times(fy, moduleminus58c4bce870.times(5, r, r, r, r))), ballCenter);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
        });
      defineToObjectminus76521.update = update;
      return defineToObjectminus76521;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    var GoalState = gamvas.ActorState.extend(stateExtension);
    (function (arguments)      {
      var defineToObjectminus76569 = actorExtension;
      var create = (function ()        {
        var returnValueminus76585 = undefined;
        var recur = (function ()          {
          return {            
            recurSigil:"recurSigilminus76584",
            args:arguments
          };
          });
        var recurP76588 = (function (valminus76589)          {
          if ((("undefined")===((typeof valminus76589))))            {
            return false;
            };
          return (valminus76589.recurSigil===("recurSigilminus76584"));
          });
        var actualFunminus76587 = (function ()          {
          return (function (arguments)            {
            var G76591 = undefined;
            var G76592 = Array.prototype.slice.apply(arguments);
            G76591 = (function (arguments)              {
              var matchValminus76593 = G76592;
              if ((!((("object")===((typeof matchValminus76593))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((matchValminus76593.length>=3))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArraySimplePartminus76594 = Array.prototype.slice.call(matchValminus76593, 0, 3);
              if ((!((("object")===((typeof matchArraySimplePartminus76594))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((3===matchArraySimplePartminus76594.length))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var name = matchArraySimplePartminus76594[0];
              var cx = matchArraySimplePartminus76594[1];
              var cy = matchArraySimplePartminus76594[2];
              var matchArrayTailPartminus76595 = Array.prototype.slice.call(matchValminus76593, 3);
              var matchTempminus76596 = matchArrayTailPartminus76595[0];
              var ball = matchTempminus76596;
              this._super(name, cx, cy);
              var matchVar76597 = this.position;
              var cx = matchVar76597.x;
              if ((("undefined")===((typeof cx))))                {
                throw ((("Match error in var-match (({} x cx y cy) this\.position) against: ")+matchVar76597));
                };
              var cy = matchVar76597.y;
              if ((("undefined")===((typeof cy))))                {
                throw ((("Match error in var-match (({} x cx y cy) this\.position) against: ")+matchVar76597));
                };
              ;
              this.bodyCircle(cx, cy, goalRadius, gamvas.physics.STATIC);
              this.visRadii = moduleminus4745e9d952.range(0, 1, numberOfCircles, (function ()                {
                return [moduleC47fa390df.randomNormal(moduleminus58c4bce870.divide(goalRadius, 2), 5), 5];
                }));
              this.addState((new (GoalState)("goalState")));
              this.setState("goalState");
              this.ball = ball;
              return console.log("In goal create using color ", goalColor.toString(), " ball is ", ball);
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76591))))              {
              return G76591;
              };
            G76591 = (function (arguments)              {
              var matchValminus76606 = G76592;
              var anythingElseminus76590 = matchValminus76606;
              throw ((("Match fail in create against: ")+anythingElseminus76590));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76591))))              {
              return G76591;
              };
            throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name cx cy :- ball] (this\._super name cx cy) (var-match ({} x cx y cy) this\.position) (this\.body-circle cx cy goal-radius gamvas\.physics\.STATIC) (set! (@ vis-radii) (range 0 1 number-of-circles (lambda nil [: (random-normal (/ goal-radius 2) 5) 5]))) (this\.add-state (new Goal-State :goal-state)) (this\.set-state :goal-state) (set! (@ ball) ball) (console\.log ''In goal create using color '' (goal-color\.to-string) '' ball is '' ball)) (anything-else-76590 (_throw (_+ ''Match fail in create against: '' anything-else-76590))))) for value ")+(JSON.stringify(G76592))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          });
        returnValueminus76585 = actualFunminus76587.apply(this, arguments);
        while (recurP76588(returnValueminus76585))          {
          returnValueminus76585 = actualFunminus76587.apply(this, returnValueminus76585.args);
          };
        return returnValueminus76585;
        });
      defineToObjectminus76569.create = create;
      return defineToObjectminus76569;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    var clamp = (function (val, low, high)      {
      return ((moduleminus58c4bce870.greaterThan(val, high))?(high) : (((moduleminus58c4bce870.lessThan(val, low))?(low) : (val))));
      });
    var circleClamp = (function (val, low, high)      {
      return ((moduleminus58c4bce870.greaterThan(val, high))?(high) : (((moduleminus58c4bce870.lessThan(val, low))?(low) : (val))));
      });
    var _clamp = (function (low, high)      {
      return (function (val)        {
        return clamp(val, low, high);
        });
      });
    var bouncePredicate = (function (r, min, max)      {
      return ((((moduleminus58c4bce870.greaterThanequal(r, max))||(moduleminus58c4bce870.lessThanequal(r, min))))?(true) : (false));
      });
    (function (arguments)      {
      var defineToObjectminus76620 = actorExtension;
      var updateRadii = (function ()        {
        var returnValueminus76676 = undefined;
        var recur = (function ()          {
          return {            
            recurSigil:"recurSigilminus76675",
            args:arguments
          };
          });
        var recurP76679 = (function (valminus76680)          {
          if ((("undefined")===((typeof valminus76680))))            {
            return false;
            };
          return (valminus76680.recurSigil===("recurSigilminus76675"));
          });
        var actualFunminus76678 = (function ()          {
          return (function (arguments)            {
            var G76682 = undefined;
            var G76683 = Array.prototype.slice.apply(arguments);
            G76682 = (function (arguments)              {
              var matchValminus76684 = G76683;
              if ((!((("object")===((typeof matchValminus76684))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((1===matchValminus76684.length))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var time = matchValminus76684[0];
              this.visRadii = moduleminus295baa4e1e.map((function ()                {
                var returnValueminus76690 = undefined;
                var recur = (function ()                  {
                  return {                    
                    recurSigil:"recurSigilminus76689",
                    args:arguments
                  };
                  });
                var recurP76693 = (function (valminus76694)                  {
                  if ((("undefined")===((typeof valminus76694))))                    {
                    return false;
                    };
                  return (valminus76694.recurSigil===("recurSigilminus76689"));
                  });
                var actualFunminus76692 = (function ()                  {
                  return (function (arguments)                    {
                    var G76696 = undefined;
                    var G76697 = Array.prototype.slice.apply(arguments);
                    G76696 = (function (arguments)                      {
                      var matchValminus76698 = G76697;
                      if ((!((("object")===((typeof matchValminus76698))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        };
                      if ((!((1===matchValminus76698.length))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        };
                      var matchTempminus76699 = matchValminus76698[0];
                      if ((!((("object")===((typeof matchTempminus76699))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        };
                      if ((!((2===matchTempminus76699.length))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        };
                      var r = matchTempminus76699[0];
                      var d = matchTempminus76699[1];
                      // (console\.log "update radii" [: r d] ", " goal-radius ", " (>= r goal-radius) ", bounce " (bounce\? r 0 goal-radius))
                      ;
                      ((bouncePredicate(r, 0, goalRadius))?(d = moduleminus58c4bce870.minus(d)) : (undefined));
                      return [circleClamp(moduleminus58c4bce870.plus(r, moduleminus58c4bce870.times(time, d)), 0, goalRadius), clamp(moduleminus58c4bce870.plus(d, moduleC47fa390df.randomNormal()), -10, 10)];
                      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76696))))                      {
                      return G76696;
                      };
                    G76696 = (function (arguments)                      {
                      var matchValminus76700 = G76697;
                      var anythingElseminus76695 = matchValminus76700;
                      throw ((("Match fail in anonymous against: ")+anythingElseminus76695));
                      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76696))))                      {
                      return G76696;
                      };
                    throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: [: r d]] (comment (console\.log ''update radii'' [: r d] '', '' goal-radius '', '' (>= r goal-radius) '', bounce '' (bounce\? r 0 goal-radius))) (if (bounce\? r 0 goal-radius) (set! d (- d))) [: (circle-clamp (+ r (* time d)) 0 goal-radius) (clamp (+ d (random-normal)) -10 10)]) (anything-else-76695 (_throw (_+ ''Match fail in anonymous against: '' anything-else-76695))))) for value ")+(JSON.stringify(G76697))));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  });
                returnValueminus76690 = actualFunminus76692.apply(this, arguments);
                while (recurP76693(returnValueminus76690))                  {
                  returnValueminus76690 = actualFunminus76692.apply(this, returnValueminus76690.args);
                  };
                return returnValueminus76690;
                }), this.visRadii);
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76682))))              {
              return G76682;
              };
            G76682 = (function (arguments)              {
              var matchValminus76705 = G76683;
              var anythingElseminus76681 = matchValminus76705;
              throw ((("Match fail in update-radii against: ")+anythingElseminus76681));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76682))))              {
              return G76682;
              };
            throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: time] (set! (@ vis-radii) (map (lambda ([: r d]) (comment (console\.log ''update radii'' [: r d] '', '' goal-radius '', '' (>= r goal-radius) '', bounce '' (bounce\? r 0 goal-radius))) (if (bounce\? r 0 goal-radius) (set! d (- d))) [: (circle-clamp (+ r (* time d)) 0 goal-radius) (clamp (+ d (random-normal)) -10 10)]) (@ vis-radii)))) (anything-else-76681 (_throw (_+ ''Match fail in update-radii against: '' anything-else-76681))))) for value ")+(JSON.stringify(G76683))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          });
        returnValueminus76676 = actualFunminus76678.apply(this, arguments);
        while (recurP76679(returnValueminus76676))          {
          returnValueminus76676 = actualFunminus76678.apply(this, returnValueminus76676.args);
          };
        return returnValueminus76676;
        });
      defineToObjectminus76620.updateRadii = updateRadii;
      return defineToObjectminus76620;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus76711 = actorExtension;
      var drawOneCircle = (function (r)        {
        var matchVar76727 = this.position;
        var x = matchVar76727.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) this\.position) against: ")+matchVar76727));
          };
        var y = matchVar76727.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) this\.position) against: ")+matchVar76727));
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
      defineToObjectminus76711.drawOneCircle = drawOneCircle;
      return defineToObjectminus76711;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus76733 = actorExtension;
      var draw = (function (time)        {
        this._super(time);
        this.updateRadii(time);
        var arrayObject76794 = this.visRadii;
        for (index in (arrayObject76794))          {
          var matchVar76799 = arrayObject76794[index];
          if ((!((("object")===((typeof matchVar76799))))))            {
            throw ((("Match error in var-match ([: r d] [array-object76794 index]) against: ")+matchVar76799));
            };
          if ((!((2===matchVar76799.length))))            {
            throw ((("Match error in var-match ([: r d] [array-object76794 index]) against: ")+matchVar76799));
            };
          var r = matchVar76799[0];
          var d = matchVar76799[1];
          ;
          this.drawOneCircle(r);
          };
        ;
        });
      defineToObjectminus76733.draw = draw;
      return defineToObjectminus76733;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus76809 = actorExtension;
      var pointInside = (function (worldX, worldY)        {
        var fixture = this.fixture;
        var physicsX = gamvas.physics.toWorld(worldX), physicsY = gamvas.physics.toWorld(worldY);
        return fixture.TestPoint((new (Box2D.Common.Math.b2Vec2)(physicsX, physicsY)));
        });
      defineToObjectminus76809.pointInside = pointInside;
      return defineToObjectminus76809;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    currentModuleminus76493.Goal = gamvas.Actor.extend(actorExtension);
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus76493;
  }))