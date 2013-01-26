define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/utils"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleC47fa390df)  {
  var currentModuleminus267353 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus267353 = value;
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
    currentModuleminus267353.withJitter = (function (context, n, magnitude, thunk)      {
      for (var i = 0;moduleminus58c4bce870.lessThan(i, n);i = moduleminus58c4bce870.plus(i, 1))        {
        (function (arguments)          {
          var context267758 = context;
          context267758.save();
          try            {
            context.translate(moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(magnitude, 2), moduleC47fa390df.random(magnitude)), moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(magnitude, 2), moduleC47fa390df.random(magnitude)));
            thunk(context);
            }finally             {
            context267758.restore();
            };
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        };
      return context;
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus267353;
  }))