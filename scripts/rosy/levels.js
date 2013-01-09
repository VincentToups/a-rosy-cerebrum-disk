define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "rosy/wall", "rosy/ball", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, moduleB147560188, moduleC4807d4439, gamvas)  {
  var currentModuleminus44750 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus44750 = value;
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
    var wallCount = 0;
    var wtimes = (function (x, y, w, h)      {
      wallCount = moduleminus58c4bce870.plus(1, wallCount);
      return (new moduleB147560188.Wall(moduleminus58c4bce870.plus("wall-", wallCount, JSON.stringify([x, y, w, h])), x, y, w, h));
      });
    currentModuleminus44750.testBed = (function ()      {
      return {        
        geometry:[wtimes(0, 80, 220, 10)],
        initialPosition:[12, 20]
      };
      });
    }))();
  return currentModuleminus44750;
  }))