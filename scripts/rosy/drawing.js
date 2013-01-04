((define))(["hooves/operator-functions", "hooves/lisp-idioms"], (function (moduleminus58c4bce870, moduleminus295baa4e1e)  {
  var currentModuleminus99629 = {    
    
  };
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    "(\"hooves/operator-functions\" :all)";
    "(\"hooves/lisp-idioms\" :all)";
    var saveExcursion = "macro - no dynamic value.";
    var random = (function (m)      {
      return ((moduleminus58c4bce870.times)(m, (Math.random)()));
      });
    currentModuleminus99629.withJitter = (function (context, n, magnitude, thunk)      {
      for (var i = 0;(moduleminus58c4bce870.lessThan)(i, n);i = (moduleminus58c4bce870.plus)(i, 1))        {
        (function (arguments)          {
          var context99674 = context;
          context99674.save();
          try            {
            context.translate((moduleminus58c4bce870.minus)((moduleminus58c4bce870.divide)(magnitude, 2), random(magnitude)), (moduleminus58c4bce870.minus)((moduleminus58c4bce870.divide)(magnitude, 2), random(magnitude)));
            thunk(context);
            }finally             {
            context99674.restore();
            };
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        };
      return (context);
      });
    }))();
  return (currentModuleminus99629);
  }))