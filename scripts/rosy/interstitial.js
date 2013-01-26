define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, gamvas)  {
  var currentModuleminus268396 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus268396 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" :all)
    ;
    // ("hooves/hooves" :all)
    ;
    // ("rosy/drawing" :all)
    ;
    // ("rosy/utils" :all)
    ;
    // ((js "gamvas/gamvas-module" gamvas))
    ;
    currentModuleminus268396.makeMessage = (function (str)      {
      return moduleminus295baa4e1e.map((function (x)        {
        return [x];
        }), str.split(" "));
      });
    var makeInit = (function ()      {
      var returnValueminus268422 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus268421",
          args:arguments
        };
        });
      var recurP268425 = (function (valminus268426)        {
        if ((("undefined")===((typeof valminus268426))))          {
          return false;
          };
        return (valminus268426.recurSigil===("recurSigilminus268421"));
        });
      var actualFunminus268424 = (function ()        {
        return (function (arguments)          {
          var G268428 = undefined;
          var G268429 = Array.prototype.slice.apply(arguments);
          G268428 = (function (arguments)            {
            var matchValminus268430 = G268429;
            if ((!((("object")===((typeof matchValminus268430))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus268430.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus268431 = Array.prototype.slice.call(matchValminus268430, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus268431))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus268431.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var messages = matchArraySimplePartminus268431[0];
            var matchArrayTailPartminus268432 = Array.prototype.slice.call(matchValminus268430, 1);
            var matchTempminus268433 = matchArrayTailPartminus268432[0];
            if ((("undefined")===((typeof matchTempminus268433))))              {
              matchTempminus268433 = {                
                
              };
              };
            var matchObjectTempminus268434 = matchTempminus268433.doneCallback;
            var previousMatchSucceededminus268443 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus268434))))                {
                previousMatchSucceededminus268443 = false;
                };
              var doneCallback = matchObjectTempminus268434;
              if (previousMatchSucceededminus268443)                {
                break;
                };
              previousMatchSucceededminus268443 = true;
              case 1:
              var fResult268444 = ((function (x)                {
                return (function ()                  {
                  return undefined;
                  });
                }))(matchObjectTempminus268434);
              if ((fResult268444===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus268443 = false;
                };
              var doneCallback = fResult268444;
              if (previousMatchSucceededminus268443)                {
                break;
                };
              previousMatchSucceededminus268443 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus268435 = matchTempminus268433.fontSize;
            var previousMatchSucceededminus268445 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus268435))))                {
                previousMatchSucceededminus268445 = false;
                };
              var fontSize = matchObjectTempminus268435;
              if (previousMatchSucceededminus268445)                {
                break;
                };
              previousMatchSucceededminus268445 = true;
              case 1:
              var fResult268446 = ((function (x)                {
                return 10;
                }))(matchObjectTempminus268435);
              if ((fResult268446===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus268445 = false;
                };
              var fontSize = fResult268446;
              if (previousMatchSucceededminus268445)                {
                break;
                };
              previousMatchSucceededminus268445 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus268436 = matchTempminus268433.fontStyle;
            var previousMatchSucceededminus268447 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus268436))))                {
                previousMatchSucceededminus268447 = false;
                };
              var fontStyle = matchObjectTempminus268436;
              if (previousMatchSucceededminus268447)                {
                break;
                };
              previousMatchSucceededminus268447 = true;
              case 1:
              var fResult268448 = ((function (x)                {
                return "bold";
                }))(matchObjectTempminus268436);
              if ((fResult268448===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus268447 = false;
                };
              var fontStyle = fResult268448;
              if (previousMatchSucceededminus268447)                {
                break;
                };
              previousMatchSucceededminus268447 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus268437 = matchTempminus268433.fontName;
            var previousMatchSucceededminus268449 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus268437))))                {
                previousMatchSucceededminus268449 = false;
                };
              var fontName = matchObjectTempminus268437;
              if (previousMatchSucceededminus268449)                {
                break;
                };
              previousMatchSucceededminus268449 = true;
              case 1:
              var fResult268450 = ((function (x)                {
                return "sans-serif";
                }))(matchObjectTempminus268437);
              if ((fResult268450===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus268449 = false;
                };
              var fontName = fResult268450;
              if (previousMatchSucceededminus268449)                {
                break;
                };
              previousMatchSucceededminus268449 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus268438 = matchTempminus268433.dwellTime;
            var previousMatchSucceededminus268451 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus268438))))                {
                previousMatchSucceededminus268451 = false;
                };
              var dwellTime = matchObjectTempminus268438;
              if (previousMatchSucceededminus268451)                {
                break;
                };
              previousMatchSucceededminus268451 = true;
              case 1:
              var fResult268452 = ((function (x)                {
                return 1.5;
                }))(matchObjectTempminus268438);
              if ((fResult268452===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus268451 = false;
                };
              var dwellTime = fResult268452;
              if (previousMatchSucceededminus268451)                {
                break;
                };
              previousMatchSucceededminus268451 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus268439 = matchTempminus268433.zoomFactor;
            var previousMatchSucceededminus268453 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus268439))))                {
                previousMatchSucceededminus268453 = false;
                };
              var zoomFactor = matchObjectTempminus268439;
              if (previousMatchSucceededminus268453)                {
                break;
                };
              previousMatchSucceededminus268453 = true;
              case 1:
              var fResult268454 = ((function (x)                {
                return 0.75;
                }))(matchObjectTempminus268439);
              if ((fResult268454===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus268453 = false;
                };
              var zoomFactor = fResult268454;
              if (previousMatchSucceededminus268453)                {
                break;
                };
              previousMatchSucceededminus268453 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus268440 = matchTempminus268433.jitter;
            var previousMatchSucceededminus268455 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus268440))))                {
                previousMatchSucceededminus268455 = false;
                };
              var jitter = matchObjectTempminus268440;
              if (previousMatchSucceededminus268455)                {
                break;
                };
              previousMatchSucceededminus268455 = true;
              case 1:
              var fResult268456 = ((function (x)                {
                return 3;
                }))(matchObjectTempminus268440);
              if ((fResult268456===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus268455 = false;
                };
              var jitter = fResult268456;
              if (previousMatchSucceededminus268455)                {
                break;
                };
              previousMatchSucceededminus268455 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus268441 = matchTempminus268433.fillRgba;
            var previousMatchSucceededminus268457 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus268441))))                {
                previousMatchSucceededminus268457 = false;
                };
              var fillRgba = matchObjectTempminus268441;
              if (previousMatchSucceededminus268457)                {
                break;
                };
              previousMatchSucceededminus268457 = true;
              case 1:
              var fResult268458 = ((function (x)                {
                return "rgba(255, 0, 0, 0.4)";
                }))(matchObjectTempminus268441);
              if ((fResult268458===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus268457 = false;
                };
              var fillRgba = fResult268458;
              if (previousMatchSucceededminus268457)                {
                break;
                };
              previousMatchSucceededminus268457 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus268442 = matchTempminus268433.deadTime;
            var previousMatchSucceededminus268459 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus268442))))                {
                previousMatchSucceededminus268459 = false;
                };
              var deadTime = matchObjectTempminus268442;
              if (previousMatchSucceededminus268459)                {
                break;
                };
              previousMatchSucceededminus268459 = true;
              case 1:
              var fResult268460 = ((function (x)                {
                return 1.0;
                }))(matchObjectTempminus268442);
              if ((fResult268460===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus268459 = false;
                };
              var deadTime = fResult268460;
              if (previousMatchSucceededminus268459)                {
                break;
                };
              previousMatchSucceededminus268459 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            return (function (init)              {
              this.messages = messages;
              this.messagesRemaining = messages;
              this.options = {                
                doneCallback:doneCallback,
                fontSize:fontSize,
                fontStyle:fontStyle,
                fontName:fontName,
                dwellTime:dwellTime,
                zoomFactor:zoomFactor,
                jitter:jitter,
                fillRgba:fillRgba,
                deadTime:deadTime
              };
              (function (arguments)                {
                var G268528 = undefined;
                var G268529 = gamvas.getCanvasDimension();
                G268528 = (function (arguments)                  {
                  var matchValminus268530 = G268529;
                  var w = matchValminus268530.w;
                  if ((("undefined")===((typeof w))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var h = matchValminus268530.h;
                  if ((("undefined")===((typeof h))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  this.w = w;
                  this.h = h;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G268528))))                  {
                  return G268528;
                  };
                throw ((("match-fail at ((match (gamvas\.get-canvas-dimension) (({} w w h h) (set! (@ w) w) (set! (@ h) h)))) for value ")+(JSON.stringify(G268529))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              this.fontString = moduleminus58c4bce870.plus(fontStyle, " ", fontSize, "px ", fontName);
              this.yScale = moduleminus58c4bce870.times(zoomFactor, moduleminus58c4bce870.divide(this.h, fontSize));
              this.subState = "start";
              return console.log("In interstitial init, got ", this.messages, " and ", this.options);
              });
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G268428))))            {
            return G268428;
            };
          G268428 = (function (arguments)            {
            var matchValminus268563 = G268429;
            var anythingElseminus268427 = matchValminus268563;
            throw ((("Match fail in make-init against: ")+anythingElseminus268427));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G268428))))            {
            return G268428;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: messages :- (options{} (done-callback (lambda nil undefined)) (font-size 10) (font-style ''bold'') (font-name ''sans-serif'') (dwell-time 1.5) (zoom-factor 0.75) (jitter 3) (fill-rgba (quote (rgba 255 0 0 0.4))) (dead-time 1.0))] (lambda (init) (set! (@ messages) messages) (set! (@ messages-remaining) messages) (set! (@ options) (collect{} done-callback font-size font-style font-name dwell-time zoom-factor jitter fill-rgba dead-time)) (match (gamvas\.get-canvas-dimension) (({} w w h h) (set! (@ w) w) (set! (@ h) h))) (set! (@ font-string) (+ font-style '' '' font-size ''px '' font-name)) (set! (@ y-scale) (* zoom-factor (/ (@ h) font-size))) (set! (@ sub-state) :start) (console\.log ''In interstitial init, got '' (@ messages) '' and '' (@ options)))) (anything-else-268427 (_throw (_+ ''Match fail in make-init against: '' anything-else-268427))))) for value ")+(JSON.stringify(G268429))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus268422 = actualFunminus268424.apply(this, arguments);
      while (recurP268425(returnValueminus268422))        {
        returnValueminus268422 = actualFunminus268424.apply(this, returnValueminus268422.args);
        };
      return returnValueminus268422;
      });
    var nextMessage = (function ()      {
      return (function (arguments)        {
        var G268620 = undefined;
        var G268621 = this.messagesRemaining;
        G268620 = (function (arguments)          {
          var matchValminus268626 = G268621;
          if ((!((("object")===((typeof matchValminus268626))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchValminus268626.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus268627 = Array.prototype.slice.call(matchValminus268626, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus268627))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus268627.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus268628 = matchArraySimplePartminus268627[0];
          var currentMessage = matchTempminus268628;
          var matchTempminus268629 = matchTempminus268628[0];
          var message = matchTempminus268629;
          var matchArrayTailPartminus268630 = Array.prototype.slice.call(matchValminus268626, 1);
          var rest = matchArrayTailPartminus268630;
          this.messagesRemaining = rest;
          this.xScale = moduleminus58c4bce870.times(this.options.zoomFactor, moduleminus58c4bce870.divide(this.w, this.c.measureText(message).width));
          this.subState = ["message", currentMessage, 0];
          return console.log("Interstitial switch: ", this.subState, this.c.measureText(message), this.xScale, this.yScale);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G268620))))          {
          return G268620;
          };
        G268620 = (function (arguments)          {
          var matchValminus268671 = G268621;
          if ((!((("object")===((typeof matchValminus268671))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((0===matchValminus268671.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          console.log("Interstitial done, calling callback.");
          return this.options.doneCallback();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G268620))))          {
          return G268620;
          };
        throw ((("match-fail at ((match (@ messages-remaining) ([: (and current-message [:- message]) (tail rest)] (set! (@ messages-remaining) rest) (set! (@ x-scale) (* (@ options zoom-factor) (/ (@ w) (\.\. (\.\. (@ c) (measure-text message)) width)))) (set! (@ sub-state) [: :message current-message 0]) (console\.log ''Interstitial switch: '' (@ sub-state) (\.\. (@ c) (measure-text message)) (@ x-scale) (@ y-scale))) ([:] (console\.log ''Interstitial done, calling callback.'') ((@ options done-callback))))) for value ")+(JSON.stringify(G268621))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var drawStart = (function (time)      {
      this.tAcc = moduleminus58c4bce870.plus(this.tAcc, time);
      return ((moduleminus4745e9d952.emptyPredicate(this.messagesRemaining))?(this.options.doneCallback()) : (this.nextMessage()));
      });
    var drawMessage = (function (time)      {
      var c = this.c;
      return (function (arguments)        {
        var G268772 = undefined;
        var G268773 = this.subState;
        G268772 = (function (arguments)          {
          var matchValminus268778 = G268773;
          if ((!((("object")===((typeof matchValminus268778))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((3===matchValminus268778.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus268779 = matchValminus268778[0];
          var matchTempminus268780 = matchValminus268778[1];
          var matchTempminus268781 = matchValminus268778[2];
          if ((!(("message"===matchTempminus268779))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var wholeMessage = matchTempminus268780;
          if ((!((("object")===((typeof matchTempminus268780))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchTempminus268780.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus268782 = Array.prototype.slice.call(matchTempminus268780, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus268782))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus268782.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var messageText = matchArraySimplePartminus268782[0];
          var matchArrayTailPartminus268783 = Array.prototype.slice.call(matchTempminus268780, 1);
          var matchTempminus268784 = matchArrayTailPartminus268783[0];
          var matchTempminus268785 = matchArrayTailPartminus268783[1];
          var previousMatchSucceededminus268786 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus268784))))              {
              previousMatchSucceededminus268786 = false;
              };
            var messageDwell = matchTempminus268784;
            if (previousMatchSucceededminus268786)              {
              break;
              };
            previousMatchSucceededminus268786 = true;
            case 1:
            var fResult268787 = ((function (x)              {
              return 1.5;
              }))(matchTempminus268784);
            if ((fResult268787===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus268786 = false;
              };
            var messageDwell = fResult268787;
            if (previousMatchSucceededminus268786)              {
              break;
              };
            previousMatchSucceededminus268786 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var previousMatchSucceededminus268788 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus268785))))              {
              previousMatchSucceededminus268788 = false;
              };
            var deadDwell = matchTempminus268785;
            if (previousMatchSucceededminus268788)              {
              break;
              };
            previousMatchSucceededminus268788 = true;
            case 1:
            var fResult268789 = ((function (x)              {
              return 1;
              }))(matchTempminus268785);
            if ((fResult268789===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus268788 = false;
              };
            var deadDwell = fResult268789;
            if (previousMatchSucceededminus268788)              {
              break;
              };
            previousMatchSucceededminus268788 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var elapsed = matchTempminus268781;
          (function (arguments)            {
            var context268795 = c;
            context268795.save();
            try              {
              c.font = this.fontString;
              c.textAlign = "center";
              c.textBaseline = "middle";
              c.fillStyle = this.options.fillRgba;
              this.camera.setZoom(this.xScale, this.yScale);
              // (c\.scale (@ x-scale) (@ y-scale))
              ;
              moduleminus6acd260b96.withJitter(this.c, 10, moduleminus58c4bce870.divide(this.options.jitter, this.xScale), (function (c)                {
                return c.fillText(messageText, 0, 0);
                }));
              }finally               {
              context268795.restore();
              };
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          return ((moduleminus58c4bce870.greaterThan(elapsed, messageDwell))?(this.toDeadTime()) : (this.subState = ["message", wholeMessage, moduleminus58c4bce870.plus(elapsed, time)]));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G268772))))          {
          return G268772;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :message (and whole-message [: message-text (tail [:- (opt message-dwell 1.5) (opt dead-dwell 1)])]) elapsed] (save-excursion c (set! c\.font (@ font-string)) (set! c\.text-align ''center'') (set! c\.text-baseline ''middle'') (set! c\.fill-style (@ options fill-rgba)) (this\.camera\.set-zoom (@ x-scale) (@ y-scale)) (comment (c\.scale (@ x-scale) (@ y-scale))) (with-jitter this\.c 10 (/ (@ options jitter) (@ x-scale)) (lambda (c) (c\.fill-text message-text 0 0)))) (if (> elapsed message-dwell) (@ (to-dead-time)) (set! (@ sub-state) [: :message whole-message (+ elapsed time)]))))) for value ")+(JSON.stringify(G268773))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var toDeadTime = (function ()      {
      this.subState = (function (arguments)        {
        var G268854 = undefined;
        var G268855 = this.subState;
        G268854 = (function (arguments)          {
          var matchValminus268860 = G268855;
          if ((!((("object")===((typeof matchValminus268860))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((3===matchValminus268860.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus268861 = matchValminus268860[0];
          var matchTempminus268862 = matchValminus268860[1];
          var matchTempminus268863 = matchValminus268860[2];
          if ((!(("message"===matchTempminus268861))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((("object")===((typeof matchTempminus268862))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchTempminus268862.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus268864 = Array.prototype.slice.call(matchTempminus268862, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus268864))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus268864.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var messageText = matchArraySimplePartminus268864[0];
          var matchArrayTailPartminus268865 = Array.prototype.slice.call(matchTempminus268862, 1);
          var matchTempminus268866 = matchArrayTailPartminus268865[0];
          var matchTempminus268867 = matchArrayTailPartminus268865[1];
          var previousMatchSucceededminus268868 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus268866))))              {
              previousMatchSucceededminus268868 = false;
              };
            var messageDwell = matchTempminus268866;
            if (previousMatchSucceededminus268868)              {
              break;
              };
            previousMatchSucceededminus268868 = true;
            case 1:
            var fResult268869 = ((function (x)              {
              return 1.5;
              }))(matchTempminus268866);
            if ((fResult268869===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus268868 = false;
              };
            var messageDwell = fResult268869;
            if (previousMatchSucceededminus268868)              {
              break;
              };
            previousMatchSucceededminus268868 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var previousMatchSucceededminus268870 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus268867))))              {
              previousMatchSucceededminus268870 = false;
              };
            var deadDwell = matchTempminus268867;
            if (previousMatchSucceededminus268870)              {
              break;
              };
            previousMatchSucceededminus268870 = true;
            case 1:
            var fResult268871 = ((function (x)              {
              return 1;
              }))(matchTempminus268867);
            if ((fResult268871===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus268870 = false;
              };
            var deadDwell = fResult268871;
            if (previousMatchSucceededminus268870)              {
              break;
              };
            previousMatchSucceededminus268870 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var elapsed = matchTempminus268863;
          return ["deadTime", deadDwell, elapsed];
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G268854))))          {
          return G268854;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :message [: message-text (tail [:- (opt message-dwell 1.5) (opt dead-dwell 1)])] elapsed] [: :dead-time dead-dwell elapsed]))) for value ")+(JSON.stringify(G268855))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var drawDeadTime = (function (time)      {
      return (function (arguments)        {
        var G268890 = undefined;
        var G268891 = this.subState;
        G268890 = (function (arguments)          {
          var matchValminus268896 = G268891;
          if ((!((("object")===((typeof matchValminus268896))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((3===matchValminus268896.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus268897 = matchValminus268896[0];
          var matchTempminus268898 = matchValminus268896[1];
          var matchTempminus268899 = matchValminus268896[2];
          if ((!(("deadTime"===matchTempminus268897))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var deadDwell = matchTempminus268898;
          var elapsed = matchTempminus268899;
          return ((moduleminus58c4bce870.greaterThan(elapsed, deadDwell))?(this.nextMessage()) : (this.subState = ["deadTime", deadDwell, moduleminus58c4bce870.plus(elapsed, time)]));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G268890))))          {
          return G268890;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :dead-time dead-dwell elapsed] (if (> elapsed dead-dwell) (@ (next-message)) (set! (@ sub-state) [: :dead-time dead-dwell (+ elapsed time)]))))) for value ")+(JSON.stringify(G268891))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var draw = (function (time)      {
      return (function (arguments)        {
        var G268935 = undefined;
        var G268936 = this.subState;
        G268935 = (function (arguments)          {
          var matchValminus268941 = G268936;
          if ((!(("start"===matchValminus268941))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return this.nextMessage();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G268935))))          {
          return G268935;
          };
        G268935 = (function (arguments)          {
          var matchValminus268946 = G268936;
          if ((!((("object")===((typeof matchValminus268946))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchValminus268946.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus268947 = Array.prototype.slice.call(matchValminus268946, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus268947))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus268947.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus268948 = matchArraySimplePartminus268947[0];
          if ((!(("message"===matchTempminus268948))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArrayTailPartminus268949 = Array.prototype.slice.call(matchValminus268946, 1);
          var _ = matchArrayTailPartminus268949;
          return this.drawMessage(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G268935))))          {
          return G268935;
          };
        G268935 = (function (arguments)          {
          var matchValminus268954 = G268936;
          if ((!((("object")===((typeof matchValminus268954))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchValminus268954.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus268955 = Array.prototype.slice.call(matchValminus268954, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus268955))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus268955.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus268956 = matchArraySimplePartminus268955[0];
          if ((!(("deadTime"===matchTempminus268956))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArrayTailPartminus268957 = Array.prototype.slice.call(matchValminus268954, 1);
          var _ = matchArrayTailPartminus268957;
          return this.drawDeadTime(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G268935))))          {
          return G268935;
          };
        throw ((("match-fail at ((match (@ sub-state) (:start (@ (next-message))) ([: :message (tail _)] (@ (draw-message time))) ([: :dead-time (tail _)] (@ (draw-dead-time time))))) for value ")+(JSON.stringify(G268936))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus268396.makeInterstitial = (function (messages, options)      {
      return gamvas.State.extend({        
        init:makeInit(messages, options),
        draw:draw,
        nextMessage:nextMessage,
        drawStart:drawStart,
        drawMessage:drawMessage,
        toDeadTime:toDeadTime,
        drawDeadTime:drawDeadTime
      });
      });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus268396;
  }))