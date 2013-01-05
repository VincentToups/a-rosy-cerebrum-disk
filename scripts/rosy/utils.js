define(["hooves/operator-functions", "hooves/lisp-idioms"], (function (moduleminus58c4bce870, moduleminus295baa4e1e)  {
  var currentModuleminus42964 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus42964 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" :all)
    ;
    currentModuleminus42964.random = (function ()      {
      var returnValueminus42997 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus42996",
          args:arguments
        };
        });
      var recurP43000 = (function (valminus43001)        {
        return (valminus43001.recurSigil===("recurSigilminus42996"));
        });
      var actualFunminus42999 = (function ()        {
        return (function (arguments)          {
          var G43003 = undefined;
          var G43004 = Array.prototype.slice.apply(arguments);
          G43003 = (function (arguments)            {
            var aMatchArray43005 = G43004;
            if ((((!((aMatchArray43005.length===1))))||((!((aMatchArray43005 instanceof Array))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = aMatchArray43005[0];
            return moduleminus58c4bce870.times(magnitude, Math.random());
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43003))))            {
            return G43003;
            };
          G43003 = (function (arguments)            {
            var aMatchArray43006 = G43004;
            if ((((!((aMatchArray43006.length===2))))||((!((aMatchArray43006 instanceof Array))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = aMatchArray43006[0];
            var offset = aMatchArray43006[1];
            return moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43003))))            {
            return G43003;
            };
          G43003 = (function (arguments, anythingElseminus43002)            {
            throw ((("Match fail in rosy/utils-random against: ")+anythingElseminus43002));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G43004);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43003))))            {
            return G43003;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array magnitude) (* magnitude (Math\.random))) ((array magnitude offset) (+ offset (* magnitude (Math\.random)))) (anything-else-43002 (_throw (_+ ''Match fail in rosy/utils-random against: '' anything-else-43002))))) for value ")+G43004));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus42997 = actualFunminus42999.apply(this, arguments);
      while (recurP43000(returnValueminus42997))        {
        returnValueminus42997 = actualFunminus42999.apply(this, returnValueminus42997.args);
        };
      return returnValueminus42997;
      });
    currentModuleminus42964.randomInt = (function ()      {
      var returnValueminus43037 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus43036",
          args:arguments
        };
        });
      var recurP43040 = (function (valminus43041)        {
        return (valminus43041.recurSigil===("recurSigilminus43036"));
        });
      var actualFunminus43039 = (function ()        {
        return (function (arguments)          {
          var G43043 = undefined;
          var G43044 = Array.prototype.slice.apply(arguments);
          G43043 = (function (arguments)            {
            var aMatchArray43045 = G43044;
            if ((((!((aMatchArray43045.length===1))))||((!((aMatchArray43045 instanceof Array))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = aMatchArray43045[0];
            return Math.round(moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43043))))            {
            return G43043;
            };
          G43043 = (function (arguments)            {
            var aMatchArray43046 = G43044;
            if ((((!((aMatchArray43046.length===2))))||((!((aMatchArray43046 instanceof Array))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = aMatchArray43046[0];
            var offset = aMatchArray43046[1];
            return Math.round(moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random())));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43043))))            {
            return G43043;
            };
          G43043 = (function (arguments, anythingElseminus43042)            {
            throw ((("Match fail in rosy/utils-random-int against: ")+anythingElseminus43042));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G43044);
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G43043))))            {
            return G43043;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ((array magnitude) (Math\.round (* magnitude (Math\.random)))) ((array magnitude offset) (Math\.round (+ offset (* magnitude (Math\.random))))) (anything-else-43042 (_throw (_+ ''Match fail in rosy/utils-random-int against: '' anything-else-43042))))) for value ")+G43044));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus43037 = actualFunminus43039.apply(this, arguments);
      while (recurP43040(returnValueminus43037))        {
        returnValueminus43037 = actualFunminus43039.apply(this, returnValueminus43037.args);
        };
      return returnValueminus43037;
      });
    }))();
  return currentModuleminus42964;
  }))