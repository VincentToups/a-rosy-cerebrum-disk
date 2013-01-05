define(["hooves/operator-functions", "hooves/lisp-idioms"], (function (moduleminus58c4bce870, moduleminus295baa4e1e)  {
  var currentModuleminus81077 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus81077 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" :all)
    ;
    currentModuleminus81077.random = (function ()      {
      var returnValueminus81110 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus81109",
          args:arguments
        };
        });
      var recurP81113 = (function (valminus81114)        {
        return (valminus81114.recurSigil===("recurSigilminus81109"));
        });
      var actualFunminus81112 = (function ()        {
        return (function (arguments)          {
          var G81116 = undefined;
          var G81117 = Array.prototype.slice.apply(arguments);
          G81116 = (function (arguments)            {
            var G81118 = G81117;
            return ((function ()              {
              if ((!((((G81118 instanceof Array))&&((G81118.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, magnitude)                  {
                  return (function (arguments, G81120)                    {
                    return ((function ()                      {
                      if ((!((((G81120 instanceof Array))&&((G81120.length===0))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        } else                         {
                        return moduleminus58c4bce870.times(magnitude, Math.random());
                        };
                      }))();
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), Array.prototype.slice.call(G81118, 1));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G81118[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G81116))))            {
            return G81116;
            };
          G81116 = (function (arguments)            {
            var G81121 = G81117;
            return ((function ()              {
              if ((!((((G81121 instanceof Array))&&((G81121.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, magnitude)                  {
                  return (function (arguments)                    {
                    var G81123 = Array.prototype.slice.call(G81121, 1);
                    return ((function ()                      {
                      if ((!((((G81123 instanceof Array))&&((G81123.length>0))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        } else                         {
                        return (function (arguments, offset)                          {
                          return (function (arguments, G81125)                            {
                            return ((function ()                              {
                              if ((!((((G81125 instanceof Array))&&((G81125.length===0))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                } else                                 {
                                return moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random()));
                                };
                              }))();
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), Array.prototype.slice.call(G81123, 1));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G81123[0]);
                        };
                      }))();
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G81121[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G81116))))            {
            return G81116;
            };
          G81116 = (function (arguments, anythingElseminus81115)            {
            throw ((("Match fail in rosy/utils-random against: ")+anythingElseminus81115));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G81117);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G81116))))            {
            return G81116;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array magnitude) (* magnitude (Math\.random))) ((array magnitude offset) (+ offset (* magnitude (Math\.random)))) (anything-else-81115 (_throw (_+ ''Match fail in rosy/utils-random against: '' anything-else-81115))))) for value ")+G81117));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus81110 = actualFunminus81112.apply(this, arguments);
      while (recurP81113(returnValueminus81110))        {
        returnValueminus81110 = actualFunminus81112.apply(this, returnValueminus81110.args);
        };
      return returnValueminus81110;
      });
    currentModuleminus81077.randomInt = (function ()      {
      var returnValueminus81156 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus81155",
          args:arguments
        };
        });
      var recurP81159 = (function (valminus81160)        {
        return (valminus81160.recurSigil===("recurSigilminus81155"));
        });
      var actualFunminus81158 = (function ()        {
        return (function (arguments)          {
          var G81162 = undefined;
          var G81163 = Array.prototype.slice.apply(arguments);
          G81162 = (function (arguments)            {
            var G81164 = G81163;
            return ((function ()              {
              if ((!((((G81164 instanceof Array))&&((G81164.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, magnitude)                  {
                  return (function (arguments, G81166)                    {
                    return ((function ()                      {
                      if ((!((((G81166 instanceof Array))&&((G81166.length===0))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        } else                         {
                        return Math.round(moduleminus58c4bce870.times(magnitude, Math.random()));
                        };
                      }))();
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), Array.prototype.slice.call(G81164, 1));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G81164[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G81162))))            {
            return G81162;
            };
          G81162 = (function (arguments)            {
            var G81167 = G81163;
            return ((function ()              {
              if ((!((((G81167 instanceof Array))&&((G81167.length>0))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                } else                 {
                return (function (arguments, magnitude)                  {
                  return (function (arguments)                    {
                    var G81169 = Array.prototype.slice.call(G81167, 1);
                    return ((function ()                      {
                      if ((!((((G81169 instanceof Array))&&((G81169.length>0))))))                        {
                        return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                        } else                         {
                        return (function (arguments, offset)                          {
                          return (function (arguments, G81171)                            {
                            return ((function ()                              {
                              if ((!((((G81171 instanceof Array))&&((G81171.length===0))))))                                {
                                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                                } else                                 {
                                return Math.round(moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random())));
                                };
                              }))();
                            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), Array.prototype.slice.call(G81169, 1));
                          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G81169[0]);
                        };
                      }))();
                    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G81167[0]);
                };
              }))();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G81162))))            {
            return G81162;
            };
          G81162 = (function (arguments, anythingElseminus81161)            {
            throw ((("Match fail in rosy/utils-random-int against: ")+anythingElseminus81161));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G81163);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G81162))))            {
            return G81162;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array magnitude) (Math\.round (* magnitude (Math\.random)))) ((array magnitude offset) (Math\.round (+ offset (* magnitude (Math\.random))))) (anything-else-81161 (_throw (_+ ''Match fail in rosy/utils-random-int against: '' anything-else-81161))))) for value ")+G81163));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus81156 = actualFunminus81158.apply(this, arguments);
      while (recurP81159(returnValueminus81156))        {
        returnValueminus81156 = actualFunminus81158.apply(this, returnValueminus81156.args);
        };
      return returnValueminus81156;
      });
    }))();
  return currentModuleminus81077;
  }))