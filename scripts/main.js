((require))(["hooves/operator-functions", "hooves/lisp-idioms", "jquery/jquery", "rosy/drawing"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleA31d161fe8, moduleminus6acd260b96)  {
  return (((function ()    {
    "(\"hooves/operator-functions\" :all)";
    "(\"hooves/lisp-idioms\" (:with-prefix idioms- :all))";
    "(\"jquery/jquery\" (:as $))";
    "(\"rosy/drawing\" :all)";
    (console.log)("Hello World");
    var canvas = ((moduleA31d161fe8.$)("#canvas"))[0];
    (console.log)(canvas);
    var context = (canvas.getContext)("2d");
    context.font = "20pt Arial";
    context.fillStyle = "cornflowerblue";
    context.strokeStyle = "blue";
    (context.fillText)("A ROSY CEREBRUM DISK", 20, 20);
    var strokeFatalFarm = (function (context)      {
      return ((function (arguments)        {
        var G99692 = undefined;
        var G99693 = [20, 20];
        G99692 = (function (arguments)          {
          var aMatchArray99694 = G99693;
          if ((((!(((aMatchArray99694.length)===2))))||((!((aMatchArray99694 instanceof Array))))))            {
            return ("match-fail-e1aa3b7e7ce9731266013c178de842b5");
            };
          var x = aMatchArray99694[0];
          var y = aMatchArray99694[1];
          return ((context.strokeText)("A ROSY CEREBRUM DISK", x, y));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99692))))          {
          return (G99692);
          };
        G99692 = (function (arguments, G99691)          {
          throw ((("Match error in ")+("(let ((x 20) (y 20)) (context\.stroke-text \"A ROSY CEREBRUM DISK\" x y))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)), G99693);
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G99692))))          {
          return (G99692);
          };
        throw ((("match-fail at ((match [: 20 20] ([: x y] (context\.stroke-text ''A ROSY CEREBRUM DISK'' x y)) (G99691 (_throw (_+ ''Match error in '' ''(let ((x 20) (y 20)) (context\\.stroke-text \''A ROSY CEREBRUM DISK\'' x y))''))))) for value ")+G99693));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments))));
      });
    return ((moduleminus6acd260b96.withJitter)(context, 10, 3, strokeFatalFarm));
    }))());
  }));
