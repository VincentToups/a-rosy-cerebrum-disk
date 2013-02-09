define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, gamvas)  {
  var currentModuleminus76969 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus76969 = value;
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
    currentModuleminus76969.makeMessage = (function (str)      {
      return moduleminus295baa4e1e.map((function (x)        {
        return [x];
        }), str.split(" "));
      });
    var makeInit = (function ()      {
      var returnValueminus76995 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus76994",
          args:arguments
        };
        });
      var recurP76998 = (function (valminus76999)        {
        if ((("undefined")===((typeof valminus76999))))          {
          return false;
          };
        return (valminus76999.recurSigil===("recurSigilminus76994"));
        });
      var actualFunminus76997 = (function ()        {
        return (function (arguments)          {
          var G77001 = undefined;
          var G77002 = Array.prototype.slice.apply(arguments);
          G77001 = (function (arguments)            {
            var matchValminus77003 = G77002;
            if ((!((("object")===((typeof matchValminus77003))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus77003.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus77004 = Array.prototype.slice.call(matchValminus77003, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus77004))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus77004.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var messages = matchArraySimplePartminus77004[0];
            var matchArrayTailPartminus77005 = Array.prototype.slice.call(matchValminus77003, 1);
            var matchTempminus77006 = matchArrayTailPartminus77005[0];
            if ((("undefined")===((typeof matchTempminus77006))))              {
              matchTempminus77006 = {                
                
              };
              };
            var matchObjectTempminus77007 = matchTempminus77006.doneCallback;
            var previousMatchSucceededminus77016 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus77007))))                {
                previousMatchSucceededminus77016 = false;
                };
              var doneCallback = matchObjectTempminus77007;
              if (previousMatchSucceededminus77016)                {
                break;
                };
              previousMatchSucceededminus77016 = true;
              case 1:
              var fResult77017 = ((function (x)                {
                return (function ()                  {
                  return undefined;
                  });
                }))(matchObjectTempminus77007);
              if ((fResult77017===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus77016 = false;
                };
              var doneCallback = fResult77017;
              if (previousMatchSucceededminus77016)                {
                break;
                };
              previousMatchSucceededminus77016 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus77008 = matchTempminus77006.fontSize;
            var previousMatchSucceededminus77018 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus77008))))                {
                previousMatchSucceededminus77018 = false;
                };
              var fontSize = matchObjectTempminus77008;
              if (previousMatchSucceededminus77018)                {
                break;
                };
              previousMatchSucceededminus77018 = true;
              case 1:
              var fResult77019 = ((function (x)                {
                return 10;
                }))(matchObjectTempminus77008);
              if ((fResult77019===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus77018 = false;
                };
              var fontSize = fResult77019;
              if (previousMatchSucceededminus77018)                {
                break;
                };
              previousMatchSucceededminus77018 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus77009 = matchTempminus77006.fontStyle;
            var previousMatchSucceededminus77020 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus77009))))                {
                previousMatchSucceededminus77020 = false;
                };
              var fontStyle = matchObjectTempminus77009;
              if (previousMatchSucceededminus77020)                {
                break;
                };
              previousMatchSucceededminus77020 = true;
              case 1:
              var fResult77021 = ((function (x)                {
                return "bold";
                }))(matchObjectTempminus77009);
              if ((fResult77021===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus77020 = false;
                };
              var fontStyle = fResult77021;
              if (previousMatchSucceededminus77020)                {
                break;
                };
              previousMatchSucceededminus77020 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus77010 = matchTempminus77006.fontName;
            var previousMatchSucceededminus77022 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus77010))))                {
                previousMatchSucceededminus77022 = false;
                };
              var fontName = matchObjectTempminus77010;
              if (previousMatchSucceededminus77022)                {
                break;
                };
              previousMatchSucceededminus77022 = true;
              case 1:
              var fResult77023 = ((function (x)                {
                return "sans-serif";
                }))(matchObjectTempminus77010);
              if ((fResult77023===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus77022 = false;
                };
              var fontName = fResult77023;
              if (previousMatchSucceededminus77022)                {
                break;
                };
              previousMatchSucceededminus77022 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus77011 = matchTempminus77006.dwellTime;
            var previousMatchSucceededminus77024 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus77011))))                {
                previousMatchSucceededminus77024 = false;
                };
              var dwellTime = matchObjectTempminus77011;
              if (previousMatchSucceededminus77024)                {
                break;
                };
              previousMatchSucceededminus77024 = true;
              case 1:
              var fResult77025 = ((function (x)                {
                return 1.5;
                }))(matchObjectTempminus77011);
              if ((fResult77025===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus77024 = false;
                };
              var dwellTime = fResult77025;
              if (previousMatchSucceededminus77024)                {
                break;
                };
              previousMatchSucceededminus77024 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus77012 = matchTempminus77006.zoomFactor;
            var previousMatchSucceededminus77026 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus77012))))                {
                previousMatchSucceededminus77026 = false;
                };
              var zoomFactor = matchObjectTempminus77012;
              if (previousMatchSucceededminus77026)                {
                break;
                };
              previousMatchSucceededminus77026 = true;
              case 1:
              var fResult77027 = ((function (x)                {
                return 0.75;
                }))(matchObjectTempminus77012);
              if ((fResult77027===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus77026 = false;
                };
              var zoomFactor = fResult77027;
              if (previousMatchSucceededminus77026)                {
                break;
                };
              previousMatchSucceededminus77026 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus77013 = matchTempminus77006.jitter;
            var previousMatchSucceededminus77028 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus77013))))                {
                previousMatchSucceededminus77028 = false;
                };
              var jitter = matchObjectTempminus77013;
              if (previousMatchSucceededminus77028)                {
                break;
                };
              previousMatchSucceededminus77028 = true;
              case 1:
              var fResult77029 = ((function (x)                {
                return 3;
                }))(matchObjectTempminus77013);
              if ((fResult77029===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus77028 = false;
                };
              var jitter = fResult77029;
              if (previousMatchSucceededminus77028)                {
                break;
                };
              previousMatchSucceededminus77028 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus77014 = matchTempminus77006.fillRgba;
            var previousMatchSucceededminus77030 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus77014))))                {
                previousMatchSucceededminus77030 = false;
                };
              var fillRgba = matchObjectTempminus77014;
              if (previousMatchSucceededminus77030)                {
                break;
                };
              previousMatchSucceededminus77030 = true;
              case 1:
              var fResult77031 = ((function (x)                {
                return "rgba(255, 0, 0, 0.4)";
                }))(matchObjectTempminus77014);
              if ((fResult77031===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus77030 = false;
                };
              var fillRgba = fResult77031;
              if (previousMatchSucceededminus77030)                {
                break;
                };
              previousMatchSucceededminus77030 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus77015 = matchTempminus77006.deadTime;
            var previousMatchSucceededminus77032 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus77015))))                {
                previousMatchSucceededminus77032 = false;
                };
              var deadTime = matchObjectTempminus77015;
              if (previousMatchSucceededminus77032)                {
                break;
                };
              previousMatchSucceededminus77032 = true;
              case 1:
              var fResult77033 = ((function (x)                {
                return 1.0;
                }))(matchObjectTempminus77015);
              if ((fResult77033===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus77032 = false;
                };
              var deadTime = fResult77033;
              if (previousMatchSucceededminus77032)                {
                break;
                };
              previousMatchSucceededminus77032 = true;
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
                var G77101 = undefined;
                var G77102 = gamvas.getCanvasDimension();
                G77101 = (function (arguments)                  {
                  var matchValminus77103 = G77102;
                  var w = matchValminus77103.w;
                  if ((("undefined")===((typeof w))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var h = matchValminus77103.h;
                  if ((("undefined")===((typeof h))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  this.w = w;
                  this.h = h;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77101))))                  {
                  return G77101;
                  };
                throw ((("match-fail at ((match (gamvas\.get-canvas-dimension) (({} w w h h) (set! (@ w) w) (set! (@ h) h)))) for value ")+(JSON.stringify(G77102))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              this.fontString = moduleminus58c4bce870.plus(fontStyle, " ", fontSize, "px ", fontName);
              this.yScale = moduleminus58c4bce870.times(zoomFactor, moduleminus58c4bce870.divide(this.h, fontSize));
              this.subState = "start";
              return console.log("In interstitial init, got ", this.messages, " and ", this.options);
              });
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77001))))            {
            return G77001;
            };
          G77001 = (function (arguments)            {
            var matchValminus77136 = G77002;
            var anythingElseminus77000 = matchValminus77136;
            throw ((("Match fail in make-init against: ")+anythingElseminus77000));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77001))))            {
            return G77001;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: messages :- (options{} (done-callback (lambda nil undefined)) (font-size 10) (font-style ''bold'') (font-name ''sans-serif'') (dwell-time 1.5) (zoom-factor 0.75) (jitter 3) (fill-rgba (quote (rgba 255 0 0 0.4))) (dead-time 1.0))] (lambda (init) (set! (@ messages) messages) (set! (@ messages-remaining) messages) (set! (@ options) (collect{} done-callback font-size font-style font-name dwell-time zoom-factor jitter fill-rgba dead-time)) (match (gamvas\.get-canvas-dimension) (({} w w h h) (set! (@ w) w) (set! (@ h) h))) (set! (@ font-string) (+ font-style '' '' font-size ''px '' font-name)) (set! (@ y-scale) (* zoom-factor (/ (@ h) font-size))) (set! (@ sub-state) :start) (console\.log ''In interstitial init, got '' (@ messages) '' and '' (@ options)))) (anything-else-77000 (_throw (_+ ''Match fail in make-init against: '' anything-else-77000))))) for value ")+(JSON.stringify(G77002))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus76995 = actualFunminus76997.apply(this, arguments);
      while (recurP76998(returnValueminus76995))        {
        returnValueminus76995 = actualFunminus76997.apply(this, returnValueminus76995.args);
        };
      return returnValueminus76995;
      });
    var nextMessage = (function ()      {
      return (function (arguments)        {
        var G77193 = undefined;
        var G77194 = this.messagesRemaining;
        G77193 = (function (arguments)          {
          var matchValminus77199 = G77194;
          if ((!((("object")===((typeof matchValminus77199))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchValminus77199.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus77200 = Array.prototype.slice.call(matchValminus77199, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus77200))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus77200.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus77201 = matchArraySimplePartminus77200[0];
          var currentMessage = matchTempminus77201;
          var matchTempminus77202 = matchTempminus77201[0];
          var message = matchTempminus77202;
          var matchArrayTailPartminus77203 = Array.prototype.slice.call(matchValminus77199, 1);
          var rest = matchArrayTailPartminus77203;
          this.messagesRemaining = rest;
          this.xScale = moduleminus58c4bce870.times(this.options.zoomFactor, moduleminus58c4bce870.divide(this.w, this.c.measureText(message).width));
          this.subState = ["message", currentMessage, 0];
          return console.log("Interstitial switch: ", this.subState, this.c.measureText(message), this.xScale, this.yScale);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77193))))          {
          return G77193;
          };
        G77193 = (function (arguments)          {
          var matchValminus77244 = G77194;
          if ((!((("object")===((typeof matchValminus77244))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((0===matchValminus77244.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          console.log("Interstitial done, calling callback.");
          return this.options.doneCallback();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77193))))          {
          return G77193;
          };
        throw ((("match-fail at ((match (@ messages-remaining) ([: (and current-message [:- message]) (tail rest)] (set! (@ messages-remaining) rest) (set! (@ x-scale) (* (@ options zoom-factor) (/ (@ w) (\.\. (\.\. (@ c) (measure-text message)) width)))) (set! (@ sub-state) [: :message current-message 0]) (console\.log ''Interstitial switch: '' (@ sub-state) (\.\. (@ c) (measure-text message)) (@ x-scale) (@ y-scale))) ([:] (console\.log ''Interstitial done, calling callback.'') ((@ options done-callback))))) for value ")+(JSON.stringify(G77194))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var drawStart = (function (time)      {
      this.tAcc = moduleminus58c4bce870.plus(this.tAcc, time);
      return ((moduleminus4745e9d952.emptyPredicate(this.messagesRemaining))?(this.options.doneCallback()) : (this.nextMessage()));
      });
    var drawMessage = (function (time)      {
      var c = this.c;
      return (function (arguments)        {
        var G77345 = undefined;
        var G77346 = this.subState;
        G77345 = (function (arguments)          {
          var matchValminus77351 = G77346;
          if ((!((("object")===((typeof matchValminus77351))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((3===matchValminus77351.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus77352 = matchValminus77351[0];
          var matchTempminus77353 = matchValminus77351[1];
          var matchTempminus77354 = matchValminus77351[2];
          if ((!(("message"===matchTempminus77352))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var wholeMessage = matchTempminus77353;
          if ((!((("object")===((typeof matchTempminus77353))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchTempminus77353.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus77355 = Array.prototype.slice.call(matchTempminus77353, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus77355))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus77355.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var messageText = matchArraySimplePartminus77355[0];
          var matchArrayTailPartminus77356 = Array.prototype.slice.call(matchTempminus77353, 1);
          var matchTempminus77357 = matchArrayTailPartminus77356[0];
          var matchTempminus77358 = matchArrayTailPartminus77356[1];
          var previousMatchSucceededminus77359 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus77357))))              {
              previousMatchSucceededminus77359 = false;
              };
            var messageDwell = matchTempminus77357;
            if (previousMatchSucceededminus77359)              {
              break;
              };
            previousMatchSucceededminus77359 = true;
            case 1:
            var fResult77360 = ((function (x)              {
              return 1.5;
              }))(matchTempminus77357);
            if ((fResult77360===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus77359 = false;
              };
            var messageDwell = fResult77360;
            if (previousMatchSucceededminus77359)              {
              break;
              };
            previousMatchSucceededminus77359 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var previousMatchSucceededminus77361 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus77358))))              {
              previousMatchSucceededminus77361 = false;
              };
            var deadDwell = matchTempminus77358;
            if (previousMatchSucceededminus77361)              {
              break;
              };
            previousMatchSucceededminus77361 = true;
            case 1:
            var fResult77362 = ((function (x)              {
              return 1;
              }))(matchTempminus77358);
            if ((fResult77362===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus77361 = false;
              };
            var deadDwell = fResult77362;
            if (previousMatchSucceededminus77361)              {
              break;
              };
            previousMatchSucceededminus77361 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var elapsed = matchTempminus77354;
          (function (arguments)            {
            var context77368 = c;
            context77368.save();
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
              context77368.restore();
              };
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          return ((moduleminus58c4bce870.greaterThan(elapsed, messageDwell))?(this.toDeadTime()) : (this.subState = ["message", wholeMessage, moduleminus58c4bce870.plus(elapsed, time)]));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77345))))          {
          return G77345;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :message (and whole-message [: message-text (tail [:- (opt message-dwell 1.5) (opt dead-dwell 1)])]) elapsed] (save-excursion c (set! c\.font (@ font-string)) (set! c\.text-align ''center'') (set! c\.text-baseline ''middle'') (set! c\.fill-style (@ options fill-rgba)) (this\.camera\.set-zoom (@ x-scale) (@ y-scale)) (comment (c\.scale (@ x-scale) (@ y-scale))) (with-jitter this\.c 10 (/ (@ options jitter) (@ x-scale)) (lambda (c) (c\.fill-text message-text 0 0)))) (if (> elapsed message-dwell) (@ (to-dead-time)) (set! (@ sub-state) [: :message whole-message (+ elapsed time)]))))) for value ")+(JSON.stringify(G77346))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var toDeadTime = (function ()      {
      this.subState = (function (arguments)        {
        var G77427 = undefined;
        var G77428 = this.subState;
        G77427 = (function (arguments)          {
          var matchValminus77433 = G77428;
          if ((!((("object")===((typeof matchValminus77433))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((3===matchValminus77433.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus77434 = matchValminus77433[0];
          var matchTempminus77435 = matchValminus77433[1];
          var matchTempminus77436 = matchValminus77433[2];
          if ((!(("message"===matchTempminus77434))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((("object")===((typeof matchTempminus77435))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchTempminus77435.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus77437 = Array.prototype.slice.call(matchTempminus77435, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus77437))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus77437.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var messageText = matchArraySimplePartminus77437[0];
          var matchArrayTailPartminus77438 = Array.prototype.slice.call(matchTempminus77435, 1);
          var matchTempminus77439 = matchArrayTailPartminus77438[0];
          var matchTempminus77440 = matchArrayTailPartminus77438[1];
          var previousMatchSucceededminus77441 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus77439))))              {
              previousMatchSucceededminus77441 = false;
              };
            var messageDwell = matchTempminus77439;
            if (previousMatchSucceededminus77441)              {
              break;
              };
            previousMatchSucceededminus77441 = true;
            case 1:
            var fResult77442 = ((function (x)              {
              return 1.5;
              }))(matchTempminus77439);
            if ((fResult77442===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus77441 = false;
              };
            var messageDwell = fResult77442;
            if (previousMatchSucceededminus77441)              {
              break;
              };
            previousMatchSucceededminus77441 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var previousMatchSucceededminus77443 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus77440))))              {
              previousMatchSucceededminus77443 = false;
              };
            var deadDwell = matchTempminus77440;
            if (previousMatchSucceededminus77443)              {
              break;
              };
            previousMatchSucceededminus77443 = true;
            case 1:
            var fResult77444 = ((function (x)              {
              return 1;
              }))(matchTempminus77440);
            if ((fResult77444===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus77443 = false;
              };
            var deadDwell = fResult77444;
            if (previousMatchSucceededminus77443)              {
              break;
              };
            previousMatchSucceededminus77443 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var elapsed = matchTempminus77436;
          return ["deadTime", deadDwell, elapsed];
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77427))))          {
          return G77427;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :message [: message-text (tail [:- (opt message-dwell 1.5) (opt dead-dwell 1)])] elapsed] [: :dead-time dead-dwell elapsed]))) for value ")+(JSON.stringify(G77428))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var drawDeadTime = (function (time)      {
      return (function (arguments)        {
        var G77463 = undefined;
        var G77464 = this.subState;
        G77463 = (function (arguments)          {
          var matchValminus77469 = G77464;
          if ((!((("object")===((typeof matchValminus77469))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((3===matchValminus77469.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus77470 = matchValminus77469[0];
          var matchTempminus77471 = matchValminus77469[1];
          var matchTempminus77472 = matchValminus77469[2];
          if ((!(("deadTime"===matchTempminus77470))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var deadDwell = matchTempminus77471;
          var elapsed = matchTempminus77472;
          return ((moduleminus58c4bce870.greaterThan(elapsed, deadDwell))?(this.nextMessage()) : (this.subState = ["deadTime", deadDwell, moduleminus58c4bce870.plus(elapsed, time)]));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77463))))          {
          return G77463;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :dead-time dead-dwell elapsed] (if (> elapsed dead-dwell) (@ (next-message)) (set! (@ sub-state) [: :dead-time dead-dwell (+ elapsed time)]))))) for value ")+(JSON.stringify(G77464))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var draw = (function (time)      {
      return (function (arguments)        {
        var G77508 = undefined;
        var G77509 = this.subState;
        G77508 = (function (arguments)          {
          var matchValminus77514 = G77509;
          if ((!(("start"===matchValminus77514))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return this.nextMessage();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77508))))          {
          return G77508;
          };
        G77508 = (function (arguments)          {
          var matchValminus77519 = G77509;
          if ((!((("object")===((typeof matchValminus77519))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchValminus77519.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus77520 = Array.prototype.slice.call(matchValminus77519, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus77520))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus77520.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus77521 = matchArraySimplePartminus77520[0];
          if ((!(("message"===matchTempminus77521))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArrayTailPartminus77522 = Array.prototype.slice.call(matchValminus77519, 1);
          var _ = matchArrayTailPartminus77522;
          return this.drawMessage(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77508))))          {
          return G77508;
          };
        G77508 = (function (arguments)          {
          var matchValminus77527 = G77509;
          if ((!((("object")===((typeof matchValminus77527))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchValminus77527.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus77528 = Array.prototype.slice.call(matchValminus77527, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus77528))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus77528.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus77529 = matchArraySimplePartminus77528[0];
          if ((!(("deadTime"===matchTempminus77529))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArrayTailPartminus77530 = Array.prototype.slice.call(matchValminus77527, 1);
          var _ = matchArrayTailPartminus77530;
          return this.drawDeadTime(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77508))))          {
          return G77508;
          };
        throw ((("match-fail at ((match (@ sub-state) (:start (@ (next-message))) ([: :message (tail _)] (@ (draw-message time))) ([: :dead-time (tail _)] (@ (draw-dead-time time))))) for value ")+(JSON.stringify(G77509))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus76969.makeInterstitial = (function (messages, options)      {
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
  return currentModuleminus76969;
  }))