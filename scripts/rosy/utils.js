define(["hooves/operator-functions", "hooves/lisp-idioms"], (function (moduleminus58c4bce870, moduleminus295baa4e1e)  {
  var currentModuleminus44603 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus44603 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" :all)
    ;
    currentModuleminus44603.modsignTripleEqualminus0 = (function (n, m)      {
      return moduleminus58c4bce870.TripleEqualminus(0, moduleminus58c4bce870.modsign(n, m));
      });
    currentModuleminus44603.random = (function ()      {
      var returnValueminus44658 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus44657",
          args:arguments
        };
        });
      var recurP44661 = (function (valminus44662)        {
        if ((("undefined")===((typeof valminus44662))))          {
          return false;
          };
        return (valminus44662.recurSigil===("recurSigilminus44657"));
        });
      var actualFunminus44660 = (function ()        {
        return (function (arguments)          {
          var G44664 = undefined;
          var G44665 = Array.prototype.slice.apply(arguments);
          G44664 = (function (arguments)            {
            var matchValminus44666 = G44665;
            if ((!((1===matchValminus44666.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus44666[0];
            return moduleminus58c4bce870.times(magnitude, Math.random());
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44664))))            {
            return G44664;
            };
          G44664 = (function (arguments)            {
            var matchValminus44667 = G44665;
            if ((!((2===matchValminus44667.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus44667[0];
            var offset = matchValminus44667[1];
            return moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44664))))            {
            return G44664;
            };
          G44664 = (function (arguments)            {
            var matchValminus44668 = G44665;
            var anythingElseminus44663 = matchValminus44668;
            throw ((("Match fail in rosy/utils-random against: ")+anythingElseminus44663));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44664))))            {
            return G44664;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: magnitude] (* magnitude (Math\.random))) ([: magnitude offset] (+ offset (* magnitude (Math\.random)))) (anything-else-44663 (_throw (_+ ''Match fail in rosy/utils-random against: '' anything-else-44663))))) for value ")+(JSON.stringify(G44665))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus44658 = actualFunminus44660.apply(this, arguments);
      while (recurP44661(returnValueminus44658))        {
        returnValueminus44658 = actualFunminus44660.apply(this, returnValueminus44658.args);
        };
      return returnValueminus44658;
      });
    currentModuleminus44603.randomInt = (function ()      {
      var returnValueminus44699 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus44698",
          args:arguments
        };
        });
      var recurP44702 = (function (valminus44703)        {
        if ((("undefined")===((typeof valminus44703))))          {
          return false;
          };
        return (valminus44703.recurSigil===("recurSigilminus44698"));
        });
      var actualFunminus44701 = (function ()        {
        return (function (arguments)          {
          var G44705 = undefined;
          var G44706 = Array.prototype.slice.apply(arguments);
          G44705 = (function (arguments)            {
            var matchValminus44707 = G44706;
            if ((!((1===matchValminus44707.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus44707[0];
            return Math.round(moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44705))))            {
            return G44705;
            };
          G44705 = (function (arguments)            {
            var matchValminus44708 = G44706;
            if ((!((2===matchValminus44708.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus44708[0];
            var offset = matchValminus44708[1];
            return Math.round(moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random())));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44705))))            {
            return G44705;
            };
          G44705 = (function (arguments)            {
            var matchValminus44709 = G44706;
            var anythingElseminus44704 = matchValminus44709;
            throw ((("Match fail in rosy/utils-random-int against: ")+anythingElseminus44704));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44705))))            {
            return G44705;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: magnitude] (Math\.round (* magnitude (Math\.random)))) ([: magnitude offset] (Math\.round (+ offset (* magnitude (Math\.random))))) (anything-else-44704 (_throw (_+ ''Match fail in rosy/utils-random-int against: '' anything-else-44704))))) for value ")+(JSON.stringify(G44706))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus44699 = actualFunminus44701.apply(this, arguments);
      while (recurP44702(returnValueminus44699))        {
        returnValueminus44699 = actualFunminus44701.apply(this, returnValueminus44699.args);
        };
      return returnValueminus44699;
      });
    }))();
  return currentModuleminus44603;
  }))