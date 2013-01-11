define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/utils"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleC47fa390df)  {
  var currentModuleminus58450 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus58450 = value;
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
    currentModuleminus58450.withJitter = (function (context, n, magnitude, thunk)      {
      for (var i = 0;moduleminus58c4bce870.lessThan(i, n);i = moduleminus58c4bce870.plus(i, 1))        {
        (function (arguments)          {
          var context58636 = context;
          context58636.save();
          try            {
            context.translate(moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(magnitude, 2), moduleC47fa390df.random(magnitude)), moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(magnitude, 2), moduleC47fa390df.random(magnitude)));
            thunk(context);
            }finally             {
            context58636.restore();
            };
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        };
      return context;
      });
    }))();
  return currentModuleminus58450;
  }))