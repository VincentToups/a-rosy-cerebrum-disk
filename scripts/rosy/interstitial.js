define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, gamvas)  {
  var currentModuleminus25399 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus25399 = value;
    });
  ((function ()    {
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
    currentModuleminus25399.makeMessage = (function (str)      {
      return moduleminus295baa4e1e.map((function (x)        {
        return [x];
        }), str.split(" "));
      });
    var makeInit = (function ()      {
      var returnValueminus25425 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus25424",
          args:arguments
        };
        });
      var recurP25428 = (function (valminus25429)        {
        if ((("undefined")===((typeof valminus25429))))          {
          return false;
          };
        return (valminus25429.recurSigil===("recurSigilminus25424"));
        });
      var actualFunminus25427 = (function ()        {
        return (function (arguments)          {
          var G25431 = undefined;
          var G25432 = Array.prototype.slice.apply(arguments);
          G25431 = (function (arguments)            {
            var matchValminus25433 = G25432;
            if ((!((matchValminus25433.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus25434 = Array.prototype.slice.call(matchValminus25433, 0, 1);
            if ((!((1===matchArraySimplePartminus25434.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var messages = matchArraySimplePartminus25434[0];
            var matchArrayTailPartminus25435 = Array.prototype.slice.call(matchValminus25433, 1);
            var matchTempminus25436 = matchArrayTailPartminus25435[0];
            if ((("undefined")===((typeof matchTempminus25436))))              {
              matchTempminus25436 = {                
                
              };
              };
            var matchObjectTempminus25437 = matchTempminus25436.doneCallback;
            var previousMatchSucceededminus25446 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus25437))))                {
                previousMatchSucceededminus25446 = false;
                };
              var doneCallback = matchObjectTempminus25437;
              if (previousMatchSucceededminus25446)                {
                break;
                };
              previousMatchSucceededminus25446 = true;
              case 1:
              var fResult25447 = ((function (x)                {
                return (function ()                  {
                  return undefined;
                  });
                }))(matchObjectTempminus25437);
              if ((fResult25447===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus25446 = false;
                };
              var doneCallback = fResult25447;
              if (previousMatchSucceededminus25446)                {
                break;
                };
              previousMatchSucceededminus25446 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus25438 = matchTempminus25436.fontSize;
            var previousMatchSucceededminus25448 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus25438))))                {
                previousMatchSucceededminus25448 = false;
                };
              var fontSize = matchObjectTempminus25438;
              if (previousMatchSucceededminus25448)                {
                break;
                };
              previousMatchSucceededminus25448 = true;
              case 1:
              var fResult25449 = ((function (x)                {
                return 10;
                }))(matchObjectTempminus25438);
              if ((fResult25449===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus25448 = false;
                };
              var fontSize = fResult25449;
              if (previousMatchSucceededminus25448)                {
                break;
                };
              previousMatchSucceededminus25448 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus25439 = matchTempminus25436.fontStyle;
            var previousMatchSucceededminus25450 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus25439))))                {
                previousMatchSucceededminus25450 = false;
                };
              var fontStyle = matchObjectTempminus25439;
              if (previousMatchSucceededminus25450)                {
                break;
                };
              previousMatchSucceededminus25450 = true;
              case 1:
              var fResult25451 = ((function (x)                {
                return "bold";
                }))(matchObjectTempminus25439);
              if ((fResult25451===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus25450 = false;
                };
              var fontStyle = fResult25451;
              if (previousMatchSucceededminus25450)                {
                break;
                };
              previousMatchSucceededminus25450 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus25440 = matchTempminus25436.fontName;
            var previousMatchSucceededminus25452 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus25440))))                {
                previousMatchSucceededminus25452 = false;
                };
              var fontName = matchObjectTempminus25440;
              if (previousMatchSucceededminus25452)                {
                break;
                };
              previousMatchSucceededminus25452 = true;
              case 1:
              var fResult25453 = ((function (x)                {
                return "sans-serif";
                }))(matchObjectTempminus25440);
              if ((fResult25453===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus25452 = false;
                };
              var fontName = fResult25453;
              if (previousMatchSucceededminus25452)                {
                break;
                };
              previousMatchSucceededminus25452 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus25441 = matchTempminus25436.dwellTime;
            var previousMatchSucceededminus25454 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus25441))))                {
                previousMatchSucceededminus25454 = false;
                };
              var dwellTime = matchObjectTempminus25441;
              if (previousMatchSucceededminus25454)                {
                break;
                };
              previousMatchSucceededminus25454 = true;
              case 1:
              var fResult25455 = ((function (x)                {
                return 1.5;
                }))(matchObjectTempminus25441);
              if ((fResult25455===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus25454 = false;
                };
              var dwellTime = fResult25455;
              if (previousMatchSucceededminus25454)                {
                break;
                };
              previousMatchSucceededminus25454 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus25442 = matchTempminus25436.zoomFactor;
            var previousMatchSucceededminus25456 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus25442))))                {
                previousMatchSucceededminus25456 = false;
                };
              var zoomFactor = matchObjectTempminus25442;
              if (previousMatchSucceededminus25456)                {
                break;
                };
              previousMatchSucceededminus25456 = true;
              case 1:
              var fResult25457 = ((function (x)                {
                return 0.75;
                }))(matchObjectTempminus25442);
              if ((fResult25457===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus25456 = false;
                };
              var zoomFactor = fResult25457;
              if (previousMatchSucceededminus25456)                {
                break;
                };
              previousMatchSucceededminus25456 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus25443 = matchTempminus25436.jitter;
            var previousMatchSucceededminus25458 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus25443))))                {
                previousMatchSucceededminus25458 = false;
                };
              var jitter = matchObjectTempminus25443;
              if (previousMatchSucceededminus25458)                {
                break;
                };
              previousMatchSucceededminus25458 = true;
              case 1:
              var fResult25459 = ((function (x)                {
                return 3;
                }))(matchObjectTempminus25443);
              if ((fResult25459===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus25458 = false;
                };
              var jitter = fResult25459;
              if (previousMatchSucceededminus25458)                {
                break;
                };
              previousMatchSucceededminus25458 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus25444 = matchTempminus25436.fillRgba;
            var previousMatchSucceededminus25460 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus25444))))                {
                previousMatchSucceededminus25460 = false;
                };
              var fillRgba = matchObjectTempminus25444;
              if (previousMatchSucceededminus25460)                {
                break;
                };
              previousMatchSucceededminus25460 = true;
              case 1:
              var fResult25461 = ((function (x)                {
                return "rgba(255, 0, 0, 0.4)";
                }))(matchObjectTempminus25444);
              if ((fResult25461===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus25460 = false;
                };
              var fillRgba = fResult25461;
              if (previousMatchSucceededminus25460)                {
                break;
                };
              previousMatchSucceededminus25460 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus25445 = matchTempminus25436.deadTime;
            var previousMatchSucceededminus25462 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus25445))))                {
                previousMatchSucceededminus25462 = false;
                };
              var deadTime = matchObjectTempminus25445;
              if (previousMatchSucceededminus25462)                {
                break;
                };
              previousMatchSucceededminus25462 = true;
              case 1:
              var fResult25463 = ((function (x)                {
                return 1.0;
                }))(matchObjectTempminus25445);
              if ((fResult25463===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus25462 = false;
                };
              var deadTime = fResult25463;
              if (previousMatchSucceededminus25462)                {
                break;
                };
              previousMatchSucceededminus25462 = true;
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
                var G25531 = undefined;
                var G25532 = gamvas.getCanvasDimension();
                G25531 = (function (arguments)                  {
                  var matchValminus25533 = G25532;
                  var w = matchValminus25533.w;
                  if ((("undefined")===((typeof w))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var h = matchValminus25533.h;
                  if ((("undefined")===((typeof h))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  this.w = w;
                  this.h = h;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25531))))                  {
                  return G25531;
                  };
                throw ((("match-fail at ((match (gamvas\.get-canvas-dimension) (({} w w h h) (set! (@ w) w) (set! (@ h) h)))) for value ")+(JSON.stringify(G25532))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              this.fontString = moduleminus58c4bce870.plus(fontStyle, " ", fontSize, "px ", fontName);
              this.yScale = moduleminus58c4bce870.times(zoomFactor, moduleminus58c4bce870.divide(this.h, fontSize));
              this.subState = "start";
              return console.log("In interstitial init, got ", this.messages, " and ", this.options);
              });
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25431))))            {
            return G25431;
            };
          G25431 = (function (arguments)            {
            var matchValminus25566 = G25432;
            var anythingElseminus25430 = matchValminus25566;
            throw ((("Match fail in make-init against: ")+anythingElseminus25430));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25431))))            {
            return G25431;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: messages :- (options{} (done-callback (lambda nil undefined)) (font-size 10) (font-style ''bold'') (font-name ''sans-serif'') (dwell-time 1.5) (zoom-factor 0.75) (jitter 3) (fill-rgba (quote (rgba 255 0 0 0.4))) (dead-time 1.0))] (lambda (init) (set! (@ messages) messages) (set! (@ messages-remaining) messages) (set! (@ options) (collect{} done-callback font-size font-style font-name dwell-time zoom-factor jitter fill-rgba dead-time)) (match (gamvas\.get-canvas-dimension) (({} w w h h) (set! (@ w) w) (set! (@ h) h))) (set! (@ font-string) (+ font-style '' '' font-size ''px '' font-name)) (set! (@ y-scale) (* zoom-factor (/ (@ h) font-size))) (set! (@ sub-state) :start) (console\.log ''In interstitial init, got '' (@ messages) '' and '' (@ options)))) (anything-else-25430 (_throw (_+ ''Match fail in make-init against: '' anything-else-25430))))) for value ")+(JSON.stringify(G25432))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus25425 = actualFunminus25427.apply(this, arguments);
      while (recurP25428(returnValueminus25425))        {
        returnValueminus25425 = actualFunminus25427.apply(this, returnValueminus25425.args);
        };
      return returnValueminus25425;
      });
    var nextMessage = (function ()      {
      return (function (arguments)        {
        var G25623 = undefined;
        var G25624 = this.messagesRemaining;
        G25623 = (function (arguments)          {
          var matchValminus25629 = G25624;
          if ((!((matchValminus25629.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus25630 = Array.prototype.slice.call(matchValminus25629, 0, 1);
          if ((!((1===matchArraySimplePartminus25630.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus25631 = matchArraySimplePartminus25630[0];
          var currentMessage = matchTempminus25631;
          var matchTempminus25632 = matchTempminus25631[0];
          var message = matchTempminus25632;
          var matchArrayTailPartminus25633 = Array.prototype.slice.call(matchValminus25629, 1);
          var rest = matchArrayTailPartminus25633;
          this.messagesRemaining = rest;
          this.xScale = moduleminus58c4bce870.times(this.options.zoomFactor, moduleminus58c4bce870.divide(this.w, this.c.measureText(message).width));
          this.subState = ["message", currentMessage, 0];
          return console.log("Interstitial switch: ", this.subState, this.c.measureText(message), this.xScale, this.yScale);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25623))))          {
          return G25623;
          };
        G25623 = (function (arguments)          {
          var matchValminus25674 = G25624;
          if ((!((0===matchValminus25674.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          console.log("Interstitial done, calling callback.");
          return this.options.doneCallback();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25623))))          {
          return G25623;
          };
        throw ((("match-fail at ((match (@ messages-remaining) ([: (and current-message [:- message]) (tail rest)] (set! (@ messages-remaining) rest) (set! (@ x-scale) (* (@ options zoom-factor) (/ (@ w) (\.\. (\.\. (@ c) (measure-text message)) width)))) (set! (@ sub-state) [: :message current-message 0]) (console\.log ''Interstitial switch: '' (@ sub-state) (\.\. (@ c) (measure-text message)) (@ x-scale) (@ y-scale))) ([:] (console\.log ''Interstitial done, calling callback.'') ((@ options done-callback))))) for value ")+(JSON.stringify(G25624))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var drawStart = (function (time)      {
      this.tAcc = moduleminus58c4bce870.plus(this.tAcc, time);
      return ((moduleminus4745e9d952.emptyPredicate(this.messagesRemaining))?(this.options.doneCallback()) : (this.nextMessage()));
      });
    var drawMessage = (function (time)      {
      var c = this.c;
      return (function (arguments)        {
        var G25775 = undefined;
        var G25776 = this.subState;
        G25775 = (function (arguments)          {
          var matchValminus25781 = G25776;
          if ((!((3===matchValminus25781.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus25782 = matchValminus25781[0];
          var matchTempminus25783 = matchValminus25781[1];
          var matchTempminus25784 = matchValminus25781[2];
          if ((!(("message"===matchTempminus25782))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var wholeMessage = matchTempminus25783;
          if ((!((matchTempminus25783.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus25785 = Array.prototype.slice.call(matchTempminus25783, 0, 1);
          if ((!((1===matchArraySimplePartminus25785.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var messageText = matchArraySimplePartminus25785[0];
          var matchArrayTailPartminus25786 = Array.prototype.slice.call(matchTempminus25783, 1);
          var matchTempminus25787 = matchArrayTailPartminus25786[0];
          var matchTempminus25788 = matchArrayTailPartminus25786[1];
          var previousMatchSucceededminus25789 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus25787))))              {
              previousMatchSucceededminus25789 = false;
              };
            var messageDwell = matchTempminus25787;
            if (previousMatchSucceededminus25789)              {
              break;
              };
            previousMatchSucceededminus25789 = true;
            case 1:
            var fResult25790 = ((function (x)              {
              return 1.5;
              }))(matchTempminus25787);
            if ((fResult25790===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus25789 = false;
              };
            var messageDwell = fResult25790;
            if (previousMatchSucceededminus25789)              {
              break;
              };
            previousMatchSucceededminus25789 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var previousMatchSucceededminus25791 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus25788))))              {
              previousMatchSucceededminus25791 = false;
              };
            var deadDwell = matchTempminus25788;
            if (previousMatchSucceededminus25791)              {
              break;
              };
            previousMatchSucceededminus25791 = true;
            case 1:
            var fResult25792 = ((function (x)              {
              return 1;
              }))(matchTempminus25788);
            if ((fResult25792===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus25791 = false;
              };
            var deadDwell = fResult25792;
            if (previousMatchSucceededminus25791)              {
              break;
              };
            previousMatchSucceededminus25791 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var elapsed = matchTempminus25784;
          (function (arguments)            {
            var context25798 = c;
            context25798.save();
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
              context25798.restore();
              };
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          return ((moduleminus58c4bce870.greaterThan(elapsed, messageDwell))?(this.toDeadTime()) : (this.subState = ["message", wholeMessage, moduleminus58c4bce870.plus(elapsed, time)]));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25775))))          {
          return G25775;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :message (and whole-message [: message-text (tail [:- (opt message-dwell 1.5) (opt dead-dwell 1)])]) elapsed] (save-excursion c (set! c\.font (@ font-string)) (set! c\.text-align ''center'') (set! c\.text-baseline ''middle'') (set! c\.fill-style (@ options fill-rgba)) (this\.camera\.set-zoom (@ x-scale) (@ y-scale)) (comment (c\.scale (@ x-scale) (@ y-scale))) (with-jitter this\.c 10 (/ (@ options jitter) (@ x-scale)) (lambda (c) (c\.fill-text message-text 0 0)))) (if (> elapsed message-dwell) (@ (to-dead-time)) (set! (@ sub-state) [: :message whole-message (+ elapsed time)]))))) for value ")+(JSON.stringify(G25776))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var toDeadTime = (function ()      {
      this.subState = (function (arguments)        {
        var G25857 = undefined;
        var G25858 = this.subState;
        G25857 = (function (arguments)          {
          var matchValminus25863 = G25858;
          if ((!((3===matchValminus25863.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus25864 = matchValminus25863[0];
          var matchTempminus25865 = matchValminus25863[1];
          var matchTempminus25866 = matchValminus25863[2];
          if ((!(("message"===matchTempminus25864))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchTempminus25865.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus25867 = Array.prototype.slice.call(matchTempminus25865, 0, 1);
          if ((!((1===matchArraySimplePartminus25867.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var messageText = matchArraySimplePartminus25867[0];
          var matchArrayTailPartminus25868 = Array.prototype.slice.call(matchTempminus25865, 1);
          var matchTempminus25869 = matchArrayTailPartminus25868[0];
          var matchTempminus25870 = matchArrayTailPartminus25868[1];
          var previousMatchSucceededminus25871 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus25869))))              {
              previousMatchSucceededminus25871 = false;
              };
            var messageDwell = matchTempminus25869;
            if (previousMatchSucceededminus25871)              {
              break;
              };
            previousMatchSucceededminus25871 = true;
            case 1:
            var fResult25872 = ((function (x)              {
              return 1.5;
              }))(matchTempminus25869);
            if ((fResult25872===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus25871 = false;
              };
            var messageDwell = fResult25872;
            if (previousMatchSucceededminus25871)              {
              break;
              };
            previousMatchSucceededminus25871 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var previousMatchSucceededminus25873 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus25870))))              {
              previousMatchSucceededminus25873 = false;
              };
            var deadDwell = matchTempminus25870;
            if (previousMatchSucceededminus25873)              {
              break;
              };
            previousMatchSucceededminus25873 = true;
            case 1:
            var fResult25874 = ((function (x)              {
              return 1;
              }))(matchTempminus25870);
            if ((fResult25874===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus25873 = false;
              };
            var deadDwell = fResult25874;
            if (previousMatchSucceededminus25873)              {
              break;
              };
            previousMatchSucceededminus25873 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var elapsed = matchTempminus25866;
          return ["deadTime", deadDwell, elapsed];
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25857))))          {
          return G25857;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :message [: message-text (tail [:- (opt message-dwell 1.5) (opt dead-dwell 1)])] elapsed] [: :dead-time dead-dwell elapsed]))) for value ")+(JSON.stringify(G25858))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var drawDeadTime = (function (time)      {
      return (function (arguments)        {
        var G25893 = undefined;
        var G25894 = this.subState;
        G25893 = (function (arguments)          {
          var matchValminus25899 = G25894;
          if ((!((3===matchValminus25899.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus25900 = matchValminus25899[0];
          var matchTempminus25901 = matchValminus25899[1];
          var matchTempminus25902 = matchValminus25899[2];
          if ((!(("deadTime"===matchTempminus25900))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var deadDwell = matchTempminus25901;
          var elapsed = matchTempminus25902;
          return ((moduleminus58c4bce870.greaterThan(elapsed, deadDwell))?(this.nextMessage()) : (this.subState = ["deadTime", deadDwell, moduleminus58c4bce870.plus(elapsed, time)]));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25893))))          {
          return G25893;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :dead-time dead-dwell elapsed] (if (> elapsed dead-dwell) (@ (next-message)) (set! (@ sub-state) [: :dead-time dead-dwell (+ elapsed time)]))))) for value ")+(JSON.stringify(G25894))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var draw = (function (time)      {
      return (function (arguments)        {
        var G25938 = undefined;
        var G25939 = this.subState;
        G25938 = (function (arguments)          {
          var matchValminus25944 = G25939;
          if ((!(("start"===matchValminus25944))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return this.nextMessage();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25938))))          {
          return G25938;
          };
        G25938 = (function (arguments)          {
          var matchValminus25949 = G25939;
          if ((!((matchValminus25949.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus25950 = Array.prototype.slice.call(matchValminus25949, 0, 1);
          if ((!((1===matchArraySimplePartminus25950.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus25951 = matchArraySimplePartminus25950[0];
          if ((!(("message"===matchTempminus25951))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArrayTailPartminus25952 = Array.prototype.slice.call(matchValminus25949, 1);
          var _ = matchArrayTailPartminus25952;
          return this.drawMessage(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25938))))          {
          return G25938;
          };
        G25938 = (function (arguments)          {
          var matchValminus25957 = G25939;
          if ((!((matchValminus25957.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus25958 = Array.prototype.slice.call(matchValminus25957, 0, 1);
          if ((!((1===matchArraySimplePartminus25958.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus25959 = matchArraySimplePartminus25958[0];
          if ((!(("deadTime"===matchTempminus25959))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArrayTailPartminus25960 = Array.prototype.slice.call(matchValminus25957, 1);
          var _ = matchArrayTailPartminus25960;
          return this.drawDeadTime(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G25938))))          {
          return G25938;
          };
        throw ((("match-fail at ((match (@ sub-state) (:start (@ (next-message))) ([: :message (tail _)] (@ (draw-message time))) ([: :dead-time (tail _)] (@ (draw-dead-time time))))) for value ")+(JSON.stringify(G25939))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus25399.makeInterstitial = (function (messages, options)      {
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
    }))();
  return currentModuleminus25399;
  }))