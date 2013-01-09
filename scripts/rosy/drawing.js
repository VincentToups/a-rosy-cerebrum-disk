define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/utils"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleC47fa390df)  {
  var currentModuleminus44600 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus44600 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" :all)
    ;
    // ("rosy/utils" :all)
    ;
    var saveExcursion = "macro - no dynamic value.";
    currentModuleminus44600.withJitter = (function (context, n, magnitude, thunk)      {
      for (var i = 0;moduleminus58c4bce870.lessThan(i, n);i = moduleminus58c4bce870.plus(i, 1))        {
        (function (arguments)          {
          var context44749 = context;
          context44749.save();
          try            {
            context.translate(moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(magnitude, 2), moduleC47fa390df.random(magnitude)), moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(magnitude, 2), moduleC47fa390df.random(magnitude)));
            thunk(context);
            }finally             {
            context44749.restore();
            };
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        };
      return context;
      });
    }))();
  return currentModuleminus44600;
  }))