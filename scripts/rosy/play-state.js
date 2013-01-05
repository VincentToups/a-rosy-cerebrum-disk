define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, gamvas)  {
  var currentModuleminus84824 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus84824 = value;
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
        return (function (arguments)          {
          var G84918 = undefined;
          var G84919 = level();
          G84918 = (function (arguments)            {
            var G84923 = undefined;
            var G84924 = [];
            G84923 = (function (arguments, G84925)              {
              return ((function ()                {
                if ((!((((G84925 instanceof Array))&&((G84925.length===0))))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  } else                   {
                  var matchObjectValueminus84920 = G84919;
                  return (function (arguments)                    {
                    var G84926 = [matchObjectValueminus84920.geometry, matchObjectValueminus84920.initialPosition];
                    return ((function ()                      {
                      if ((!((((G84926 instanceof Array))&&((G84926.length>0))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        } else                         {
                        return (function (arguments)                          {
                          var G84931 = undefined;
                          var G84932 = [];
                          G84931 = (function (arguments, G84933)                            {
                            return ((function ()                              {
                              if ((!((((G84933 instanceof Array))&&((G84933.length===0))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                } else                                 {
                                var matchDefinedminus84928 = G84926[0];
                                if ((("undefined")===((typeof matchDefinedminus84928))))                                  {
                                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                  };
                                return (function (arguments, g)                                  {
                                  return (function (arguments)                                    {
                                    var G84934 = Array.prototype.slice.call(G84926, 1);
                                    return ((function ()                                      {
                                      if ((!((((G84934 instanceof Array))&&((G84934.length>0))))))                                        {
                                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                        } else                                         {
                                        return (function (arguments)                                          {
                                          var G84939 = undefined;
                                          var G84940 = [];
                                          G84939 = (function (arguments, G84941)                                            {
                                            return ((function ()                                              {
                                              if ((!((((G84941 instanceof Array))&&((G84941.length===0))))))                                                {
                                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                                } else                                                 {
                                                var matchDefinedminus84936 = G84934[0];
                                                if ((("undefined")===((typeof matchDefinedminus84936))))                                                  {
                                                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                                  };
                                                return (function (arguments)                                                  {
                                                  var G84942 = matchDefinedminus84936;
                                                  return ((function ()                                                    {
                                                    if ((!((((G84942 instanceof Array))&&((G84942.length>0))))))                                                      {
                                                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                                      } else                                                       {
                                                      return (function (arguments, px)                                                        {
                                                        return (function (arguments)                                                          {
                                                          var G84944 = Array.prototype.slice.call(G84942, 1);
                                                          return ((function ()                                                            {
                                                            if ((!((((G84944 instanceof Array))&&((G84944.length>0))))))                                                              {
                                                              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                                              } else                                                               {
                                                              return (function (arguments, py)                                                                {
                                                                return (function (arguments, G84946)                                                                  {
                                                                  return ((function ()                                                                    {
                                                                    if ((!((((G84946 instanceof Array))&&((G84946.length===0))))))                                                                      {
                                                                      return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                                                      } else                                                                       {
                                                                      return (function (arguments, G84947)                                                                        {
                                                                        return ((function ()                                                                          {
                                                                          if ((!((((G84947 instanceof Array))&&((G84947.length===0))))))                                                                            {
                                                                            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                                                            } else                                                                             {
                                                                            for (i in (g))                                                                              {
                                                                              self.addActor(g[i]);
                                                                              };
                                                                            return self.addActor((new moduleC4807d4439.Ball("Player", px, py)));
                                                                            };
                                                                          }))();
                                                                        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), Array.prototype.slice.call(G84934, 1));
                                                                      };
                                                                    }))();
                                                                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), Array.prototype.slice.call(G84944, 1));
                                                                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G84944[0]);
                                                              };
                                                            }))();
                                                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                                                        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G84942[0]);
                                                      };
                                                    }))();
                                                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                                                };
                                              }))();
                                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G84940);
                                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G84939))))                                            {
                                            return G84939;
                                            };
                                          G84939 = (function (arguments, G84938)                                            {
                                            throw ((("Match error in ")+("(let nil (_var match-defined-84936 [G84934 0]) (_if (_=== \"undefined\" (_typeof match-defined-84936)) ((_return \"match-fail-e1aa3b7e7ce9731266013c178de842b5\"))) (match1 [: px py] match-defined-84936 (match1 [:] (_\. Array prototype slice (call G84934 1)) (for (i :in g) (self\.add-actor [g i])) (self\.add-actor (new Ball \"Player\" px py)))))")));
                                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G84940);
                                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G84939))))                                            {
                                            return G84939;
                                            };
                                          throw ((("match-fail at ((match [:] ([:] (_var match-defined-84936 [G84934 0]) (_if (_=== ''undefined'' (_typeof match-defined-84936)) ((_return ''match-fail-e1aa3b7e7ce9731266013c178de842b5''))) (match1 [: px py] match-defined-84936 (match1 [:] (_\. Array prototype slice (call G84934 1)) (for (i :in g) (self\.add-actor [g i])) (self\.add-actor (new Ball ''Player'' px py))))) (G84938 (_throw (_+ ''Match error in '' ''(let nil (_var match-defined-84936 [G84934 0]) (_if (_=== \''undefined\'' (_typeof match-defined-84936)) ((_return \''match-fail-e1aa3b7e7ce9731266013c178de842b5\''))) (match1 [: px py] match-defined-84936 (match1 [:] (_\\. Array prototype slice (call G84934 1)) (for (i :in g) (self\\.add-actor [g i])) (self\\.add-actor (new Ball \''Player\'' px py)))))''))))) for value ")+G84940));
                                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                                        };
                                      }))();
                                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), matchDefinedminus84928);
                                };
                              }))();
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G84932);
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G84931))))                            {
                            return G84931;
                            };
                          G84931 = (function (arguments, G84930)                            {
                            throw ((("Match error in ")+("(let nil (_var match-defined-84928 [G84926 0]) (_if (_=== \"undefined\" (_typeof match-defined-84928)) ((_return \"match-fail-e1aa3b7e7ce9731266013c178de842b5\"))) (match1 g match-defined-84928 (match1 [: (defined [: px py])] (_\. Array prototype slice (call G84926 1)) (for (i :in g) (self\.add-actor [g i])) (self\.add-actor (new Ball \"Player\" px py)))))")));
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G84932);
                          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G84931))))                            {
                            return G84931;
                            };
                          throw ((("match-fail at ((match [:] ([:] (_var match-defined-84928 [G84926 0]) (_if (_=== ''undefined'' (_typeof match-defined-84928)) ((_return ''match-fail-e1aa3b7e7ce9731266013c178de842b5''))) (match1 g match-defined-84928 (match1 [: (defined [: px py])] (_\. Array prototype slice (call G84926 1)) (for (i :in g) (self\.add-actor [g i])) (self\.add-actor (new Ball ''Player'' px py))))) (G84930 (_throw (_+ ''Match error in '' ''(let nil (_var match-defined-84928 [G84926 0]) (_if (_=== \''undefined\'' (_typeof match-defined-84928)) ((_return \''match-fail-e1aa3b7e7ce9731266013c178de842b5\''))) (match1 g match-defined-84928 (match1 [: (defined [: px py])] (_\\. Array prototype slice (call G84926 1)) (for (i :in g) (self\\.add-actor [g i])) (self\\.add-actor (new Ball \''Player\'' px py)))))''))))) for value ")+G84932));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                        };
                      }))();
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  };
                }))();
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G84924);
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G84923))))              {
              return G84923;
              };
            G84923 = (function (arguments, G84922)              {
              throw ((("Match error in ")+("(let nil (_var match-object-value-84920 G84919) (match1 [: (defined g) (defined [: px py])] [: (_\. match-object-value-84920 geometry) (_\. match-object-value-84920 initial-position)] (for (i :in g) (self\.add-actor [g i])) (self\.add-actor (new Ball \"Player\" px py))))")));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G84924);
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G84923))))              {
              return G84923;
              };
            throw ((("match-fail at ((match [:] ([:] (_var match-object-value-84920 G84919) (match1 [: (defined g) (defined [: px py])] [: (_\. match-object-value-84920 geometry) (_\. match-object-value-84920 initial-position)] (for (i :in g) (self\.add-actor [g i])) (self\.add-actor (new Ball ''Player'' px py)))) (G84922 (_throw (_+ ''Match error in '' ''(let nil (_var match-object-value-84920 G84919) (match1 [: (defined g) (defined [: px py])] [: (_\\. match-object-value-84920 geometry) (_\\. match-object-value-84920 initial-position)] (for (i :in g) (self\\.add-actor [g i])) (self\\.add-actor (new Ball \''Player\'' px py))))''))))) for value ")+G84924));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G84918))))            {
            return G84918;
            };
          throw ((("match-fail at ((match (level) (({} geometry g initial-position [: px py]) (for (i :in g) (self\.add-actor [g i])) (self\.add-actor (new Ball ''Player'' px py))))) for value ")+G84919));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      });
    var draw = (function (time)      {
      ((((gamvas.key.isPressed(gamvas.key.PAGE_UP))&&(moduleminus58c4bce870.lessThan(this.camera.zoomFactor, 1.5))))?(this.camera.zoom(moduleminus58c4bce870.times(time, 0.7))) : (undefined));
      ((((gamvas.key.isPressed(gamvas.key.PAGE_DOWN))&&(moduleminus58c4bce870.greaterThan(this.camera.zoomFactor, 0.1))))?(this.camera.zoom(moduleminus58c4bce870.times(time, -0.7))) : (undefined));
      ((gamvas.key.isPressed(gamvas.key.UP))?(this.camera.move(0, moduleminus58c4bce870.times(time, -70))) : (undefined));
      ((gamvas.key.isPressed(gamvas.key.DOWN))?(this.camera.move(0, moduleminus58c4bce870.times(time, 70))) : (undefined));
      ((gamvas.key.isPressed(gamvas.key.LEFT))?(this.camera.move(moduleminus58c4bce870.times(time, -70), 0)) : (undefined));
      ((gamvas.key.isPressed(gamvas.key.RIGHT))?(this.camera.move(moduleminus58c4bce870.times(time, 70), 0)) : (undefined));
      var vec = (new gamvas.Vector2D(0, 9.8));
      return gamvas.physics.setGravity(vec);
      });
    currentModuleminus84824.createPlayState = (function (params)      {
      return gamvas.State.extend({        
        init:makeInit(params),
        draw:draw
      });
      });
    }))();
  return currentModuleminus84824;
  }))