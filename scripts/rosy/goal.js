define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module", "gamvas/box-2d-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, gamvas, Box2D)  {
  var currentModuleminus295380 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus295380 = value;
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
      var defineToObjectminus295388 = stateExtension;
      var doCollide = (function (a, c, om)        {
        return false;
        });
      defineToObjectminus295388.doCollide = doCollide;
      return defineToObjectminus295388;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus295408 = stateExtension;
      var update = (function (time)        {
        return ((moduleminus4745e9d952.definedPredicate(this.actor.ball))?((function (arguments)          {
          var matchVar295442 = this.actor.ball.position;
          var x = matchVar295442.x;
          if ((("undefined")===((typeof x))))            {
            throw ((("Match error in var-match (({} x x y y) this\.actor\.ball\.position) against: ")+matchVar295442));
            };
          var y = matchVar295442.y;
          if ((("undefined")===((typeof y))))            {
            throw ((("Match error in var-match (({} x x y y) this\.actor\.ball\.position) against: ")+matchVar295442));
            };
          ;
          return ((this.actor.pointInside(x, y))?((function (arguments)            {
            this.actor.ball.cancelGravityNextUpdate(0);
            var matchVar295448 = this.actor.ball.body.GetWorldCenter();
            var ballCenter = matchVar295448;
            var bx = matchVar295448.x;
            if ((("undefined")===((typeof bx))))              {
              throw ((("Match error in var-match ((and ball-center ({} x bx y by)) (this\.actor\.ball\.body\.GetWorldCenter)) against: ")+matchVar295448));
              };
            var by = matchVar295448.y;
            if ((("undefined")===((typeof by))))              {
              throw ((("Match error in var-match ((and ball-center ({} x bx y by)) (this\.actor\.ball\.body\.GetWorldCenter)) against: ")+matchVar295448));
              };
            ;
            var matchVar295449 = this.actor.body.GetWorldCenter();
            var gx = matchVar295449.x;
            if ((("undefined")===((typeof gx))))              {
              throw ((("Match error in var-match (({} x gx y gy) (this\.actor\.body\.GetWorldCenter)) against: ")+matchVar295449));
              };
            var gy = matchVar295449.y;
            if ((("undefined")===((typeof gy))))              {
              throw ((("Match error in var-match (({} x gx y gy) (this\.actor\.body\.GetWorldCenter)) against: ")+matchVar295449));
              };
            ;
            var bToG = (new (gamvas.Vector2D)(moduleminus58c4bce870.minus(gx, bx), moduleminus58c4bce870.minus(gy, by)));
            var r = bToG.length();
            var matchVar295450 = bToG.normalized();
            var fx = matchVar295450.x;
            if ((("undefined")===((typeof fx))))              {
              throw ((("Match error in var-match (({} x fx y fy) (b->g\.normalized)) against: ")+matchVar295450));
              };
            var fy = matchVar295450.y;
            if ((("undefined")===((typeof fy))))              {
              throw ((("Match error in var-match (({} x fx y fy) (b->g\.normalized)) against: ")+matchVar295450));
              };
            ;
            this.actor.ball.addDampingNextUpdate(moduleminus58c4bce870.divide(1, r));
            return this.actor.ball.addForce(vec(moduleminus58c4bce870.times(fx, moduleminus58c4bce870.times(5, r, r, r, r)), moduleminus58c4bce870.times(fy, moduleminus58c4bce870.times(5, r, r, r, r))), ballCenter);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
        });
      defineToObjectminus295408.update = update;
      return defineToObjectminus295408;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    var GoalState = gamvas.ActorState.extend(stateExtension);
    (function (arguments)      {
      var defineToObjectminus295456 = actorExtension;
      var create = (function ()        {
        var returnValueminus295472 = undefined;
        var recur = (function ()          {
          return {            
            recurSigil:"recurSigilminus295471",
            args:arguments
          };
          });
        var recurP295475 = (function (valminus295476)          {
          if ((("undefined")===((typeof valminus295476))))            {
            return false;
            };
          return (valminus295476.recurSigil===("recurSigilminus295471"));
          });
        var actualFunminus295474 = (function ()          {
          return (function (arguments)            {
            var G295478 = undefined;
            var G295479 = Array.prototype.slice.apply(arguments);
            G295478 = (function (arguments)              {
              var matchValminus295480 = G295479;
              if ((!((("object")===((typeof matchValminus295480))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((matchValminus295480.length>=3))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArraySimplePartminus295481 = Array.prototype.slice.call(matchValminus295480, 0, 3);
              if ((!((("object")===((typeof matchArraySimplePartminus295481))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((3===matchArraySimplePartminus295481.length))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var name = matchArraySimplePartminus295481[0];
              var cx = matchArraySimplePartminus295481[1];
              var cy = matchArraySimplePartminus295481[2];
              var matchArrayTailPartminus295482 = Array.prototype.slice.call(matchValminus295480, 3);
              var matchTempminus295483 = matchArrayTailPartminus295482[0];
              var ball = matchTempminus295483;
              this._super(name, cx, cy);
              var matchVar295484 = this.position;
              var cx = matchVar295484.x;
              if ((("undefined")===((typeof cx))))                {
                throw ((("Match error in var-match (({} x cx y cy) this\.position) against: ")+matchVar295484));
                };
              var cy = matchVar295484.y;
              if ((("undefined")===((typeof cy))))                {
                throw ((("Match error in var-match (({} x cx y cy) this\.position) against: ")+matchVar295484));
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
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295478))))              {
              return G295478;
              };
            G295478 = (function (arguments)              {
              var matchValminus295493 = G295479;
              var anythingElseminus295477 = matchValminus295493;
              throw ((("Match fail in create against: ")+anythingElseminus295477));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295478))))              {
              return G295478;
              };
            throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name cx cy :- ball] (this\._super name cx cy) (var-match ({} x cx y cy) this\.position) (this\.body-circle cx cy goal-radius gamvas\.physics\.STATIC) (set! (@ vis-radii) (range 0 1 number-of-circles (lambda nil [: (random-normal (/ goal-radius 2)) 0]))) (this\.add-state (new Goal-State :goal-state)) (this\.set-state :goal-state) (set! (@ ball) ball) (console\.log ''In goal create using color '' (goal-color\.to-string) '' ball is '' ball)) (anything-else-295477 (_throw (_+ ''Match fail in create against: '' anything-else-295477))))) for value ")+(JSON.stringify(G295479))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          });
        returnValueminus295472 = actualFunminus295474.apply(this, arguments);
        while (recurP295475(returnValueminus295472))          {
          returnValueminus295472 = actualFunminus295474.apply(this, returnValueminus295472.args);
          };
        return returnValueminus295472;
        });
      defineToObjectminus295456.create = create;
      return defineToObjectminus295456;
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
      var defineToObjectminus295499 = actorExtension;
      var updateRadii = (function ()        {
        var returnValueminus295555 = undefined;
        var recur = (function ()          {
          return {            
            recurSigil:"recurSigilminus295554",
            args:arguments
          };
          });
        var recurP295558 = (function (valminus295559)          {
          if ((("undefined")===((typeof valminus295559))))            {
            return false;
            };
          return (valminus295559.recurSigil===("recurSigilminus295554"));
          });
        var actualFunminus295557 = (function ()          {
          return (function (arguments)            {
            var G295561 = undefined;
            var G295562 = Array.prototype.slice.apply(arguments);
            G295561 = (function (arguments)              {
              var matchValminus295563 = G295562;
              if ((!((("object")===((typeof matchValminus295563))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((1===matchValminus295563.length))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var time = matchValminus295563[0];
              this.visRadii = moduleminus295baa4e1e.map((function ()                {
                var returnValueminus295569 = undefined;
                var recur = (function ()                  {
                  return {                    
                    recurSigil:"recurSigilminus295568",
                    args:arguments
                  };
                  });
                var recurP295572 = (function (valminus295573)                  {
                  if ((("undefined")===((typeof valminus295573))))                    {
                    return false;
                    };
                  return (valminus295573.recurSigil===("recurSigilminus295568"));
                  });
                var actualFunminus295571 = (function ()                  {
                  return (function (arguments)                    {
                    var G295575 = undefined;
                    var G295576 = Array.prototype.slice.apply(arguments);
                    G295575 = (function (arguments)                      {
                      var matchValminus295577 = G295576;
                      if ((!((("object")===((typeof matchValminus295577))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        };
                      if ((!((1===matchValminus295577.length))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        };
                      var matchTempminus295578 = matchValminus295577[0];
                      if ((!((("object")===((typeof matchTempminus295578))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        };
                      if ((!((2===matchTempminus295578.length))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        };
                      var r = matchTempminus295578[0];
                      var d = matchTempminus295578[1];
                      return [circleClamp(moduleminus58c4bce870.plus(r, moduleminus58c4bce870.times(time, d)), 0, goalRadius), clamp(moduleminus58c4bce870.plus(d, moduleC47fa390df.randomNormal()), -10, 10)];
                      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295575))))                      {
                      return G295575;
                      };
                    G295575 = (function (arguments)                      {
                      var matchValminus295579 = G295576;
                      var anythingElseminus295574 = matchValminus295579;
                      throw ((("Match fail in anonymous against: ")+anythingElseminus295574));
                      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                    if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295575))))                      {
                      return G295575;
                      };
                    throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: [: r d]] [: (circle-clamp (+ r (* time d)) 0 goal-radius) (clamp (+ d (random-normal)) -10 10)]) (anything-else-295574 (_throw (_+ ''Match fail in anonymous against: '' anything-else-295574))))) for value ")+(JSON.stringify(G295576))));
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  });
                returnValueminus295569 = actualFunminus295571.apply(this, arguments);
                while (recurP295572(returnValueminus295569))                  {
                  returnValueminus295569 = actualFunminus295571.apply(this, returnValueminus295569.args);
                  };
                return returnValueminus295569;
                }), this.visRadii);
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295561))))              {
              return G295561;
              };
            G295561 = (function (arguments)              {
              var matchValminus295584 = G295562;
              var anythingElseminus295560 = matchValminus295584;
              throw ((("Match fail in update-radii against: ")+anythingElseminus295560));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295561))))              {
              return G295561;
              };
            throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: time] (set! (@ vis-radii) (map (lambda ([: r d]) [: (circle-clamp (+ r (* time d)) 0 goal-radius) (clamp (+ d (random-normal)) -10 10)]) (@ vis-radii)))) (anything-else-295560 (_throw (_+ ''Match fail in update-radii against: '' anything-else-295560))))) for value ")+(JSON.stringify(G295562))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          });
        returnValueminus295555 = actualFunminus295557.apply(this, arguments);
        while (recurP295558(returnValueminus295555))          {
          returnValueminus295555 = actualFunminus295557.apply(this, returnValueminus295555.args);
          };
        return returnValueminus295555;
        });
      defineToObjectminus295499.updateRadii = updateRadii;
      return defineToObjectminus295499;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus295590 = actorExtension;
      var drawOneCircle = (function (r)        {
        var matchVar295606 = this.position;
        var x = matchVar295606.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) this\.position) against: ")+matchVar295606));
          };
        var y = matchVar295606.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) this\.position) against: ")+matchVar295606));
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
      defineToObjectminus295590.drawOneCircle = drawOneCircle;
      return defineToObjectminus295590;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus295612 = actorExtension;
      var draw = (function (time)        {
        this._super(time);
        this.updateRadii(time);
        var arrayObject295673 = this.visRadii;
        for (index in (arrayObject295673))          {
          var matchVar295678 = arrayObject295673[index];
          if ((!((("object")===((typeof matchVar295678))))))            {
            throw ((("Match error in var-match ([: r d] [array-object295673 index]) against: ")+matchVar295678));
            };
          if ((!((2===matchVar295678.length))))            {
            throw ((("Match error in var-match ([: r d] [array-object295673 index]) against: ")+matchVar295678));
            };
          var r = matchVar295678[0];
          var d = matchVar295678[1];
          ;
          this.drawOneCircle(r);
          };
        ;
        });
      defineToObjectminus295612.draw = draw;
      return defineToObjectminus295612;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus295688 = actorExtension;
      var pointInside = (function (worldX, worldY)        {
        var fixture = this.fixture;
        var physicsX = gamvas.physics.toWorld(worldX), physicsY = gamvas.physics.toWorld(worldY);
        return fixture.TestPoint((new (Box2D.Common.Math.b2Vec2)(physicsX, physicsY)));
        });
      defineToObjectminus295688.pointInside = pointInside;
      return defineToObjectminus295688;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    currentModuleminus295380.Goal = gamvas.Actor.extend(actorExtension);
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus295380;
  }))