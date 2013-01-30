define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, gamvas)  {
  var currentModuleminus9902 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus9902 = value;
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
    currentModuleminus9902.makeMessage = (function (str)      {
      return moduleminus295baa4e1e.map((function (x)        {
        return [x];
        }), str.split(" "));
      });
    var makeInit = (function ()      {
      var returnValueminus9928 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus9927",
          args:arguments
        };
        });
      var recurP9931 = (function (valminus9932)        {
        if ((("undefined")===((typeof valminus9932))))          {
          return false;
          };
        return (valminus9932.recurSigil===("recurSigilminus9927"));
        });
      var actualFunminus9930 = (function ()        {
        return (function (arguments)          {
          var G9934 = undefined;
          var G9935 = Array.prototype.slice.apply(arguments);
          G9934 = (function (arguments)            {
            var matchValminus9936 = G9935;
            if ((!((("object")===((typeof matchValminus9936))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus9936.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus9937 = Array.prototype.slice.call(matchValminus9936, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus9937))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus9937.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var messages = matchArraySimplePartminus9937[0];
            var matchArrayTailPartminus9938 = Array.prototype.slice.call(matchValminus9936, 1);
            var matchTempminus9939 = matchArrayTailPartminus9938[0];
            if ((("undefined")===((typeof matchTempminus9939))))              {
              matchTempminus9939 = {                
                
              };
              };
            var matchObjectTempminus9940 = matchTempminus9939.doneCallback;
            var previousMatchSucceededminus9949 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus9940))))                {
                previousMatchSucceededminus9949 = false;
                };
              var doneCallback = matchObjectTempminus9940;
              if (previousMatchSucceededminus9949)                {
                break;
                };
              previousMatchSucceededminus9949 = true;
              case 1:
              var fResult9950 = ((function (x)                {
                return (function ()                  {
                  return undefined;
                  });
                }))(matchObjectTempminus9940);
              if ((fResult9950===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus9949 = false;
                };
              var doneCallback = fResult9950;
              if (previousMatchSucceededminus9949)                {
                break;
                };
              previousMatchSucceededminus9949 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus9941 = matchTempminus9939.fontSize;
            var previousMatchSucceededminus9951 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus9941))))                {
                previousMatchSucceededminus9951 = false;
                };
              var fontSize = matchObjectTempminus9941;
              if (previousMatchSucceededminus9951)                {
                break;
                };
              previousMatchSucceededminus9951 = true;
              case 1:
              var fResult9952 = ((function (x)                {
                return 10;
                }))(matchObjectTempminus9941);
              if ((fResult9952===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus9951 = false;
                };
              var fontSize = fResult9952;
              if (previousMatchSucceededminus9951)                {
                break;
                };
              previousMatchSucceededminus9951 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus9942 = matchTempminus9939.fontStyle;
            var previousMatchSucceededminus9953 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus9942))))                {
                previousMatchSucceededminus9953 = false;
                };
              var fontStyle = matchObjectTempminus9942;
              if (previousMatchSucceededminus9953)                {
                break;
                };
              previousMatchSucceededminus9953 = true;
              case 1:
              var fResult9954 = ((function (x)                {
                return "bold";
                }))(matchObjectTempminus9942);
              if ((fResult9954===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus9953 = false;
                };
              var fontStyle = fResult9954;
              if (previousMatchSucceededminus9953)                {
                break;
                };
              previousMatchSucceededminus9953 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus9943 = matchTempminus9939.fontName;
            var previousMatchSucceededminus9955 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus9943))))                {
                previousMatchSucceededminus9955 = false;
                };
              var fontName = matchObjectTempminus9943;
              if (previousMatchSucceededminus9955)                {
                break;
                };
              previousMatchSucceededminus9955 = true;
              case 1:
              var fResult9956 = ((function (x)                {
                return "sans-serif";
                }))(matchObjectTempminus9943);
              if ((fResult9956===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus9955 = false;
                };
              var fontName = fResult9956;
              if (previousMatchSucceededminus9955)                {
                break;
                };
              previousMatchSucceededminus9955 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus9944 = matchTempminus9939.dwellTime;
            var previousMatchSucceededminus9957 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus9944))))                {
                previousMatchSucceededminus9957 = false;
                };
              var dwellTime = matchObjectTempminus9944;
              if (previousMatchSucceededminus9957)                {
                break;
                };
              previousMatchSucceededminus9957 = true;
              case 1:
              var fResult9958 = ((function (x)                {
                return 1.5;
                }))(matchObjectTempminus9944);
              if ((fResult9958===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus9957 = false;
                };
              var dwellTime = fResult9958;
              if (previousMatchSucceededminus9957)                {
                break;
                };
              previousMatchSucceededminus9957 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus9945 = matchTempminus9939.zoomFactor;
            var previousMatchSucceededminus9959 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus9945))))                {
                previousMatchSucceededminus9959 = false;
                };
              var zoomFactor = matchObjectTempminus9945;
              if (previousMatchSucceededminus9959)                {
                break;
                };
              previousMatchSucceededminus9959 = true;
              case 1:
              var fResult9960 = ((function (x)                {
                return 0.75;
                }))(matchObjectTempminus9945);
              if ((fResult9960===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus9959 = false;
                };
              var zoomFactor = fResult9960;
              if (previousMatchSucceededminus9959)                {
                break;
                };
              previousMatchSucceededminus9959 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus9946 = matchTempminus9939.jitter;
            var previousMatchSucceededminus9961 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus9946))))                {
                previousMatchSucceededminus9961 = false;
                };
              var jitter = matchObjectTempminus9946;
              if (previousMatchSucceededminus9961)                {
                break;
                };
              previousMatchSucceededminus9961 = true;
              case 1:
              var fResult9962 = ((function (x)                {
                return 3;
                }))(matchObjectTempminus9946);
              if ((fResult9962===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus9961 = false;
                };
              var jitter = fResult9962;
              if (previousMatchSucceededminus9961)                {
                break;
                };
              previousMatchSucceededminus9961 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus9947 = matchTempminus9939.fillRgba;
            var previousMatchSucceededminus9963 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus9947))))                {
                previousMatchSucceededminus9963 = false;
                };
              var fillRgba = matchObjectTempminus9947;
              if (previousMatchSucceededminus9963)                {
                break;
                };
              previousMatchSucceededminus9963 = true;
              case 1:
              var fResult9964 = ((function (x)                {
                return "rgba(255, 0, 0, 0.4)";
                }))(matchObjectTempminus9947);
              if ((fResult9964===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus9963 = false;
                };
              var fillRgba = fResult9964;
              if (previousMatchSucceededminus9963)                {
                break;
                };
              previousMatchSucceededminus9963 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus9948 = matchTempminus9939.deadTime;
            var previousMatchSucceededminus9965 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus9948))))                {
                previousMatchSucceededminus9965 = false;
                };
              var deadTime = matchObjectTempminus9948;
              if (previousMatchSucceededminus9965)                {
                break;
                };
              previousMatchSucceededminus9965 = true;
              case 1:
              var fResult9966 = ((function (x)                {
                return 1.0;
                }))(matchObjectTempminus9948);
              if ((fResult9966===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus9965 = false;
                };
              var deadTime = fResult9966;
              if (previousMatchSucceededminus9965)                {
                break;
                };
              previousMatchSucceededminus9965 = true;
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
                var G10034 = undefined;
                var G10035 = gamvas.getCanvasDimension();
                G10034 = (function (arguments)                  {
                  var matchValminus10036 = G10035;
                  var w = matchValminus10036.w;
                  if ((("undefined")===((typeof w))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var h = matchValminus10036.h;
                  if ((("undefined")===((typeof h))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  this.w = w;
                  this.h = h;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10034))))                  {
                  return G10034;
                  };
                throw ((("match-fail at ((match (gamvas\.get-canvas-dimension) (({} w w h h) (set! (@ w) w) (set! (@ h) h)))) for value ")+(JSON.stringify(G10035))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              this.fontString = moduleminus58c4bce870.plus(fontStyle, " ", fontSize, "px ", fontName);
              this.yScale = moduleminus58c4bce870.times(zoomFactor, moduleminus58c4bce870.divide(this.h, fontSize));
              this.subState = "start";
              return console.log("In interstitial init, got ", this.messages, " and ", this.options);
              });
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9934))))            {
            return G9934;
            };
          G9934 = (function (arguments)            {
            var matchValminus10069 = G9935;
            var anythingElseminus9933 = matchValminus10069;
            throw ((("Match fail in make-init against: ")+anythingElseminus9933));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9934))))            {
            return G9934;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: messages :- (options{} (done-callback (lambda nil undefined)) (font-size 10) (font-style ''bold'') (font-name ''sans-serif'') (dwell-time 1.5) (zoom-factor 0.75) (jitter 3) (fill-rgba (quote (rgba 255 0 0 0.4))) (dead-time 1.0))] (lambda (init) (set! (@ messages) messages) (set! (@ messages-remaining) messages) (set! (@ options) (collect{} done-callback font-size font-style font-name dwell-time zoom-factor jitter fill-rgba dead-time)) (match (gamvas\.get-canvas-dimension) (({} w w h h) (set! (@ w) w) (set! (@ h) h))) (set! (@ font-string) (+ font-style '' '' font-size ''px '' font-name)) (set! (@ y-scale) (* zoom-factor (/ (@ h) font-size))) (set! (@ sub-state) :start) (console\.log ''In interstitial init, got '' (@ messages) '' and '' (@ options)))) (anything-else-9933 (_throw (_+ ''Match fail in make-init against: '' anything-else-9933))))) for value ")+(JSON.stringify(G9935))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus9928 = actualFunminus9930.apply(this, arguments);
      while (recurP9931(returnValueminus9928))        {
        returnValueminus9928 = actualFunminus9930.apply(this, returnValueminus9928.args);
        };
      return returnValueminus9928;
      });
    var nextMessage = (function ()      {
      return (function (arguments)        {
        var G10126 = undefined;
        var G10127 = this.messagesRemaining;
        G10126 = (function (arguments)          {
          var matchValminus10132 = G10127;
          if ((!((("object")===((typeof matchValminus10132))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchValminus10132.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus10133 = Array.prototype.slice.call(matchValminus10132, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus10133))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus10133.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus10134 = matchArraySimplePartminus10133[0];
          var currentMessage = matchTempminus10134;
          var matchTempminus10135 = matchTempminus10134[0];
          var message = matchTempminus10135;
          var matchArrayTailPartminus10136 = Array.prototype.slice.call(matchValminus10132, 1);
          var rest = matchArrayTailPartminus10136;
          this.messagesRemaining = rest;
          this.xScale = moduleminus58c4bce870.times(this.options.zoomFactor, moduleminus58c4bce870.divide(this.w, this.c.measureText(message).width));
          this.subState = ["message", currentMessage, 0];
          return console.log("Interstitial switch: ", this.subState, this.c.measureText(message), this.xScale, this.yScale);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10126))))          {
          return G10126;
          };
        G10126 = (function (arguments)          {
          var matchValminus10177 = G10127;
          if ((!((("object")===((typeof matchValminus10177))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((0===matchValminus10177.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          console.log("Interstitial done, calling callback.");
          return this.options.doneCallback();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10126))))          {
          return G10126;
          };
        throw ((("match-fail at ((match (@ messages-remaining) ([: (and current-message [:- message]) (tail rest)] (set! (@ messages-remaining) rest) (set! (@ x-scale) (* (@ options zoom-factor) (/ (@ w) (\.\. (\.\. (@ c) (measure-text message)) width)))) (set! (@ sub-state) [: :message current-message 0]) (console\.log ''Interstitial switch: '' (@ sub-state) (\.\. (@ c) (measure-text message)) (@ x-scale) (@ y-scale))) ([:] (console\.log ''Interstitial done, calling callback.'') ((@ options done-callback))))) for value ")+(JSON.stringify(G10127))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var drawStart = (function (time)      {
      this.tAcc = moduleminus58c4bce870.plus(this.tAcc, time);
      return ((moduleminus4745e9d952.emptyPredicate(this.messagesRemaining))?(this.options.doneCallback()) : (this.nextMessage()));
      });
    var drawMessage = (function (time)      {
      var c = this.c;
      return (function (arguments)        {
        var G10278 = undefined;
        var G10279 = this.subState;
        G10278 = (function (arguments)          {
          var matchValminus10284 = G10279;
          if ((!((("object")===((typeof matchValminus10284))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((3===matchValminus10284.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus10285 = matchValminus10284[0];
          var matchTempminus10286 = matchValminus10284[1];
          var matchTempminus10287 = matchValminus10284[2];
          if ((!(("message"===matchTempminus10285))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var wholeMessage = matchTempminus10286;
          if ((!((("object")===((typeof matchTempminus10286))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchTempminus10286.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus10288 = Array.prototype.slice.call(matchTempminus10286, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus10288))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus10288.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var messageText = matchArraySimplePartminus10288[0];
          var matchArrayTailPartminus10289 = Array.prototype.slice.call(matchTempminus10286, 1);
          var matchTempminus10290 = matchArrayTailPartminus10289[0];
          var matchTempminus10291 = matchArrayTailPartminus10289[1];
          var previousMatchSucceededminus10292 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus10290))))              {
              previousMatchSucceededminus10292 = false;
              };
            var messageDwell = matchTempminus10290;
            if (previousMatchSucceededminus10292)              {
              break;
              };
            previousMatchSucceededminus10292 = true;
            case 1:
            var fResult10293 = ((function (x)              {
              return 1.5;
              }))(matchTempminus10290);
            if ((fResult10293===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus10292 = false;
              };
            var messageDwell = fResult10293;
            if (previousMatchSucceededminus10292)              {
              break;
              };
            previousMatchSucceededminus10292 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var previousMatchSucceededminus10294 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus10291))))              {
              previousMatchSucceededminus10294 = false;
              };
            var deadDwell = matchTempminus10291;
            if (previousMatchSucceededminus10294)              {
              break;
              };
            previousMatchSucceededminus10294 = true;
            case 1:
            var fResult10295 = ((function (x)              {
              return 1;
              }))(matchTempminus10291);
            if ((fResult10295===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus10294 = false;
              };
            var deadDwell = fResult10295;
            if (previousMatchSucceededminus10294)              {
              break;
              };
            previousMatchSucceededminus10294 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var elapsed = matchTempminus10287;
          (function (arguments)            {
            var context10301 = c;
            context10301.save();
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
              context10301.restore();
              };
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          return ((moduleminus58c4bce870.greaterThan(elapsed, messageDwell))?(this.toDeadTime()) : (this.subState = ["message", wholeMessage, moduleminus58c4bce870.plus(elapsed, time)]));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10278))))          {
          return G10278;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :message (and whole-message [: message-text (tail [:- (opt message-dwell 1.5) (opt dead-dwell 1)])]) elapsed] (save-excursion c (set! c\.font (@ font-string)) (set! c\.text-align ''center'') (set! c\.text-baseline ''middle'') (set! c\.fill-style (@ options fill-rgba)) (this\.camera\.set-zoom (@ x-scale) (@ y-scale)) (comment (c\.scale (@ x-scale) (@ y-scale))) (with-jitter this\.c 10 (/ (@ options jitter) (@ x-scale)) (lambda (c) (c\.fill-text message-text 0 0)))) (if (> elapsed message-dwell) (@ (to-dead-time)) (set! (@ sub-state) [: :message whole-message (+ elapsed time)]))))) for value ")+(JSON.stringify(G10279))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var toDeadTime = (function ()      {
      this.subState = (function (arguments)        {
        var G10360 = undefined;
        var G10361 = this.subState;
        G10360 = (function (arguments)          {
          var matchValminus10366 = G10361;
          if ((!((("object")===((typeof matchValminus10366))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((3===matchValminus10366.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus10367 = matchValminus10366[0];
          var matchTempminus10368 = matchValminus10366[1];
          var matchTempminus10369 = matchValminus10366[2];
          if ((!(("message"===matchTempminus10367))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((("object")===((typeof matchTempminus10368))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchTempminus10368.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus10370 = Array.prototype.slice.call(matchTempminus10368, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus10370))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus10370.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var messageText = matchArraySimplePartminus10370[0];
          var matchArrayTailPartminus10371 = Array.prototype.slice.call(matchTempminus10368, 1);
          var matchTempminus10372 = matchArrayTailPartminus10371[0];
          var matchTempminus10373 = matchArrayTailPartminus10371[1];
          var previousMatchSucceededminus10374 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus10372))))              {
              previousMatchSucceededminus10374 = false;
              };
            var messageDwell = matchTempminus10372;
            if (previousMatchSucceededminus10374)              {
              break;
              };
            previousMatchSucceededminus10374 = true;
            case 1:
            var fResult10375 = ((function (x)              {
              return 1.5;
              }))(matchTempminus10372);
            if ((fResult10375===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus10374 = false;
              };
            var messageDwell = fResult10375;
            if (previousMatchSucceededminus10374)              {
              break;
              };
            previousMatchSucceededminus10374 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var previousMatchSucceededminus10376 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus10373))))              {
              previousMatchSucceededminus10376 = false;
              };
            var deadDwell = matchTempminus10373;
            if (previousMatchSucceededminus10376)              {
              break;
              };
            previousMatchSucceededminus10376 = true;
            case 1:
            var fResult10377 = ((function (x)              {
              return 1;
              }))(matchTempminus10373);
            if ((fResult10377===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus10376 = false;
              };
            var deadDwell = fResult10377;
            if (previousMatchSucceededminus10376)              {
              break;
              };
            previousMatchSucceededminus10376 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var elapsed = matchTempminus10369;
          return ["deadTime", deadDwell, elapsed];
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10360))))          {
          return G10360;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :message [: message-text (tail [:- (opt message-dwell 1.5) (opt dead-dwell 1)])] elapsed] [: :dead-time dead-dwell elapsed]))) for value ")+(JSON.stringify(G10361))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var drawDeadTime = (function (time)      {
      return (function (arguments)        {
        var G10396 = undefined;
        var G10397 = this.subState;
        G10396 = (function (arguments)          {
          var matchValminus10402 = G10397;
          if ((!((("object")===((typeof matchValminus10402))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((3===matchValminus10402.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus10403 = matchValminus10402[0];
          var matchTempminus10404 = matchValminus10402[1];
          var matchTempminus10405 = matchValminus10402[2];
          if ((!(("deadTime"===matchTempminus10403))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var deadDwell = matchTempminus10404;
          var elapsed = matchTempminus10405;
          return ((moduleminus58c4bce870.greaterThan(elapsed, deadDwell))?(this.nextMessage()) : (this.subState = ["deadTime", deadDwell, moduleminus58c4bce870.plus(elapsed, time)]));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10396))))          {
          return G10396;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :dead-time dead-dwell elapsed] (if (> elapsed dead-dwell) (@ (next-message)) (set! (@ sub-state) [: :dead-time dead-dwell (+ elapsed time)]))))) for value ")+(JSON.stringify(G10397))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var draw = (function (time)      {
      return (function (arguments)        {
        var G10441 = undefined;
        var G10442 = this.subState;
        G10441 = (function (arguments)          {
          var matchValminus10447 = G10442;
          if ((!(("start"===matchValminus10447))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return this.nextMessage();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10441))))          {
          return G10441;
          };
        G10441 = (function (arguments)          {
          var matchValminus10452 = G10442;
          if ((!((("object")===((typeof matchValminus10452))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchValminus10452.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus10453 = Array.prototype.slice.call(matchValminus10452, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus10453))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus10453.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus10454 = matchArraySimplePartminus10453[0];
          if ((!(("message"===matchTempminus10454))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArrayTailPartminus10455 = Array.prototype.slice.call(matchValminus10452, 1);
          var _ = matchArrayTailPartminus10455;
          return this.drawMessage(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10441))))          {
          return G10441;
          };
        G10441 = (function (arguments)          {
          var matchValminus10460 = G10442;
          if ((!((("object")===((typeof matchValminus10460))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchValminus10460.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus10461 = Array.prototype.slice.call(matchValminus10460, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus10461))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus10461.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus10462 = matchArraySimplePartminus10461[0];
          if ((!(("deadTime"===matchTempminus10462))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArrayTailPartminus10463 = Array.prototype.slice.call(matchValminus10460, 1);
          var _ = matchArrayTailPartminus10463;
          return this.drawDeadTime(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10441))))          {
          return G10441;
          };
        throw ((("match-fail at ((match (@ sub-state) (:start (@ (next-message))) ([: :message (tail _)] (@ (draw-message time))) ([: :dead-time (tail _)] (@ (draw-dead-time time))))) for value ")+(JSON.stringify(G10442))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus9902.makeInterstitial = (function (messages, options)      {
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
  return currentModuleminus9902;
  }))