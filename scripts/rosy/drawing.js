define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/utils"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleC47fa390df)  {
  var currentModuleminus8668 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus8668 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" :all)
    ;
    // ("rosy/utils" :all)
    ;
    var saveExcursion = "macro - no dynamic value.";
    currentModuleminus8668.withJitter = (function (context, n, magnitude, thunk)      {
      for (var i = 0;moduleminus58c4bce870.lessThan(i, n);i = moduleminus58c4bce870.plus(i, 1))        {
        (function (arguments)          {
          var context9073 = context;
          context9073.save();
          try            {
            context.translate(moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(magnitude, 2), moduleC47fa390df.random(magnitude)), moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(magnitude, 2), moduleC47fa390df.random(magnitude)));
            thunk(context);
            }finally             {
            context9073.restore();
            };
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        };
      return context;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus8668;
  }))