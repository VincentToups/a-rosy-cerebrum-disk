define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, gamvas)  {
  var currentModuleminus69965 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus69965 = value;
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
    currentModuleminus69965.makeMessage = (function (str)      {
      return moduleminus295baa4e1e.map((function (x)        {
        return [x];
        }), str.split(" "));
      });
    var makeInit = (function ()      {
      var returnValueminus69991 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus69990",
          args:arguments
        };
        });
      var recurP69994 = (function (valminus69995)        {
        if ((("undefined")===((typeof valminus69995))))          {
          return false;
          };
        return (valminus69995.recurSigil===("recurSigilminus69990"));
        });
      var actualFunminus69993 = (function ()        {
        return (function (arguments)          {
          var G69997 = undefined;
          var G69998 = Array.prototype.slice.apply(arguments);
          G69997 = (function (arguments)            {
            var matchValminus69999 = G69998;
            if ((!((("object")===((typeof matchValminus69999))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus69999.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus70000 = Array.prototype.slice.call(matchValminus69999, 0, 1);
            if ((!((("object")===((typeof matchArraySimplePartminus70000))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchArraySimplePartminus70000.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var messages = matchArraySimplePartminus70000[0];
            var matchArrayTailPartminus70001 = Array.prototype.slice.call(matchValminus69999, 1);
            var matchTempminus70002 = matchArrayTailPartminus70001[0];
            if ((("undefined")===((typeof matchTempminus70002))))              {
              matchTempminus70002 = {                
                
              };
              };
            var matchObjectTempminus70003 = matchTempminus70002.doneCallback;
            var previousMatchSucceededminus70012 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus70003))))                {
                previousMatchSucceededminus70012 = false;
                };
              var doneCallback = matchObjectTempminus70003;
              if (previousMatchSucceededminus70012)                {
                break;
                };
              previousMatchSucceededminus70012 = true;
              case 1:
              var fResult70013 = ((function (x)                {
                return (function ()                  {
                  return undefined;
                  });
                }))(matchObjectTempminus70003);
              if ((fResult70013===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus70012 = false;
                };
              var doneCallback = fResult70013;
              if (previousMatchSucceededminus70012)                {
                break;
                };
              previousMatchSucceededminus70012 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus70004 = matchTempminus70002.fontSize;
            var previousMatchSucceededminus70014 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus70004))))                {
                previousMatchSucceededminus70014 = false;
                };
              var fontSize = matchObjectTempminus70004;
              if (previousMatchSucceededminus70014)                {
                break;
                };
              previousMatchSucceededminus70014 = true;
              case 1:
              var fResult70015 = ((function (x)                {
                return 10;
                }))(matchObjectTempminus70004);
              if ((fResult70015===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus70014 = false;
                };
              var fontSize = fResult70015;
              if (previousMatchSucceededminus70014)                {
                break;
                };
              previousMatchSucceededminus70014 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus70005 = matchTempminus70002.fontStyle;
            var previousMatchSucceededminus70016 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus70005))))                {
                previousMatchSucceededminus70016 = false;
                };
              var fontStyle = matchObjectTempminus70005;
              if (previousMatchSucceededminus70016)                {
                break;
                };
              previousMatchSucceededminus70016 = true;
              case 1:
              var fResult70017 = ((function (x)                {
                return "bold";
                }))(matchObjectTempminus70005);
              if ((fResult70017===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus70016 = false;
                };
              var fontStyle = fResult70017;
              if (previousMatchSucceededminus70016)                {
                break;
                };
              previousMatchSucceededminus70016 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus70006 = matchTempminus70002.fontName;
            var previousMatchSucceededminus70018 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus70006))))                {
                previousMatchSucceededminus70018 = false;
                };
              var fontName = matchObjectTempminus70006;
              if (previousMatchSucceededminus70018)                {
                break;
                };
              previousMatchSucceededminus70018 = true;
              case 1:
              var fResult70019 = ((function (x)                {
                return "sans-serif";
                }))(matchObjectTempminus70006);
              if ((fResult70019===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus70018 = false;
                };
              var fontName = fResult70019;
              if (previousMatchSucceededminus70018)                {
                break;
                };
              previousMatchSucceededminus70018 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus70007 = matchTempminus70002.dwellTime;
            var previousMatchSucceededminus70020 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus70007))))                {
                previousMatchSucceededminus70020 = false;
                };
              var dwellTime = matchObjectTempminus70007;
              if (previousMatchSucceededminus70020)                {
                break;
                };
              previousMatchSucceededminus70020 = true;
              case 1:
              var fResult70021 = ((function (x)                {
                return 1.5;
                }))(matchObjectTempminus70007);
              if ((fResult70021===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus70020 = false;
                };
              var dwellTime = fResult70021;
              if (previousMatchSucceededminus70020)                {
                break;
                };
              previousMatchSucceededminus70020 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus70008 = matchTempminus70002.zoomFactor;
            var previousMatchSucceededminus70022 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus70008))))                {
                previousMatchSucceededminus70022 = false;
                };
              var zoomFactor = matchObjectTempminus70008;
              if (previousMatchSucceededminus70022)                {
                break;
                };
              previousMatchSucceededminus70022 = true;
              case 1:
              var fResult70023 = ((function (x)                {
                return 0.75;
                }))(matchObjectTempminus70008);
              if ((fResult70023===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus70022 = false;
                };
              var zoomFactor = fResult70023;
              if (previousMatchSucceededminus70022)                {
                break;
                };
              previousMatchSucceededminus70022 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus70009 = matchTempminus70002.jitter;
            var previousMatchSucceededminus70024 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus70009))))                {
                previousMatchSucceededminus70024 = false;
                };
              var jitter = matchObjectTempminus70009;
              if (previousMatchSucceededminus70024)                {
                break;
                };
              previousMatchSucceededminus70024 = true;
              case 1:
              var fResult70025 = ((function (x)                {
                return 3;
                }))(matchObjectTempminus70009);
              if ((fResult70025===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus70024 = false;
                };
              var jitter = fResult70025;
              if (previousMatchSucceededminus70024)                {
                break;
                };
              previousMatchSucceededminus70024 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus70010 = matchTempminus70002.fillRgba;
            var previousMatchSucceededminus70026 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus70010))))                {
                previousMatchSucceededminus70026 = false;
                };
              var fillRgba = matchObjectTempminus70010;
              if (previousMatchSucceededminus70026)                {
                break;
                };
              previousMatchSucceededminus70026 = true;
              case 1:
              var fResult70027 = ((function (x)                {
                return "rgba(255, 0, 0, 0.4)";
                }))(matchObjectTempminus70010);
              if ((fResult70027===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus70026 = false;
                };
              var fillRgba = fResult70027;
              if (previousMatchSucceededminus70026)                {
                break;
                };
              previousMatchSucceededminus70026 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus70011 = matchTempminus70002.deadTime;
            var previousMatchSucceededminus70028 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus70011))))                {
                previousMatchSucceededminus70028 = false;
                };
              var deadTime = matchObjectTempminus70011;
              if (previousMatchSucceededminus70028)                {
                break;
                };
              previousMatchSucceededminus70028 = true;
              case 1:
              var fResult70029 = ((function (x)                {
                return 1.0;
                }))(matchObjectTempminus70011);
              if ((fResult70029===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus70028 = false;
                };
              var deadTime = fResult70029;
              if (previousMatchSucceededminus70028)                {
                break;
                };
              previousMatchSucceededminus70028 = true;
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
                var G70097 = undefined;
                var G70098 = gamvas.getCanvasDimension();
                G70097 = (function (arguments)                  {
                  var matchValminus70099 = G70098;
                  var w = matchValminus70099.w;
                  if ((("undefined")===((typeof w))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var h = matchValminus70099.h;
                  if ((("undefined")===((typeof h))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  this.w = w;
                  this.h = h;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G70097))))                  {
                  return G70097;
                  };
                throw ((("match-fail at ((match (gamvas\.get-canvas-dimension) (({} w w h h) (set! (@ w) w) (set! (@ h) h)))) for value ")+(JSON.stringify(G70098))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              this.fontString = moduleminus58c4bce870.plus(fontStyle, " ", fontSize, "px ", fontName);
              this.yScale = moduleminus58c4bce870.times(zoomFactor, moduleminus58c4bce870.divide(this.h, fontSize));
              this.subState = "start";
              return console.log("In interstitial init, got ", this.messages, " and ", this.options);
              });
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69997))))            {
            return G69997;
            };
          G69997 = (function (arguments)            {
            var matchValminus70132 = G69998;
            var anythingElseminus69996 = matchValminus70132;
            throw ((("Match fail in make-init against: ")+anythingElseminus69996));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69997))))            {
            return G69997;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: messages :- (options{} (done-callback (lambda nil undefined)) (font-size 10) (font-style ''bold'') (font-name ''sans-serif'') (dwell-time 1.5) (zoom-factor 0.75) (jitter 3) (fill-rgba (quote (rgba 255 0 0 0.4))) (dead-time 1.0))] (lambda (init) (set! (@ messages) messages) (set! (@ messages-remaining) messages) (set! (@ options) (collect{} done-callback font-size font-style font-name dwell-time zoom-factor jitter fill-rgba dead-time)) (match (gamvas\.get-canvas-dimension) (({} w w h h) (set! (@ w) w) (set! (@ h) h))) (set! (@ font-string) (+ font-style '' '' font-size ''px '' font-name)) (set! (@ y-scale) (* zoom-factor (/ (@ h) font-size))) (set! (@ sub-state) :start) (console\.log ''In interstitial init, got '' (@ messages) '' and '' (@ options)))) (anything-else-69996 (_throw (_+ ''Match fail in make-init against: '' anything-else-69996))))) for value ")+(JSON.stringify(G69998))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus69991 = actualFunminus69993.apply(this, arguments);
      while (recurP69994(returnValueminus69991))        {
        returnValueminus69991 = actualFunminus69993.apply(this, returnValueminus69991.args);
        };
      return returnValueminus69991;
      });
    var nextMessage = (function ()      {
      return (function (arguments)        {
        var G70189 = undefined;
        var G70190 = this.messagesRemaining;
        G70189 = (function (arguments)          {
          var matchValminus70195 = G70190;
          if ((!((("object")===((typeof matchValminus70195))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchValminus70195.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus70196 = Array.prototype.slice.call(matchValminus70195, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus70196))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus70196.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus70197 = matchArraySimplePartminus70196[0];
          var currentMessage = matchTempminus70197;
          var matchTempminus70198 = matchTempminus70197[0];
          var message = matchTempminus70198;
          var matchArrayTailPartminus70199 = Array.prototype.slice.call(matchValminus70195, 1);
          var rest = matchArrayTailPartminus70199;
          this.messagesRemaining = rest;
          this.xScale = moduleminus58c4bce870.times(this.options.zoomFactor, moduleminus58c4bce870.divide(this.w, this.c.measureText(message).width));
          this.subState = ["message", currentMessage, 0];
          return console.log("Interstitial switch: ", this.subState, this.c.measureText(message), this.xScale, this.yScale);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G70189))))          {
          return G70189;
          };
        G70189 = (function (arguments)          {
          var matchValminus70240 = G70190;
          if ((!((("object")===((typeof matchValminus70240))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((0===matchValminus70240.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          console.log("Interstitial done, calling callback.");
          return this.options.doneCallback();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G70189))))          {
          return G70189;
          };
        throw ((("match-fail at ((match (@ messages-remaining) ([: (and current-message [:- message]) (tail rest)] (set! (@ messages-remaining) rest) (set! (@ x-scale) (* (@ options zoom-factor) (/ (@ w) (\.\. (\.\. (@ c) (measure-text message)) width)))) (set! (@ sub-state) [: :message current-message 0]) (console\.log ''Interstitial switch: '' (@ sub-state) (\.\. (@ c) (measure-text message)) (@ x-scale) (@ y-scale))) ([:] (console\.log ''Interstitial done, calling callback.'') ((@ options done-callback))))) for value ")+(JSON.stringify(G70190))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var drawStart = (function (time)      {
      this.tAcc = moduleminus58c4bce870.plus(this.tAcc, time);
      return ((moduleminus4745e9d952.emptyPredicate(this.messagesRemaining))?(this.options.doneCallback()) : (this.nextMessage()));
      });
    var drawMessage = (function (time)      {
      var c = this.c;
      return (function (arguments)        {
        var G70341 = undefined;
        var G70342 = this.subState;
        G70341 = (function (arguments)          {
          var matchValminus70347 = G70342;
          if ((!((("object")===((typeof matchValminus70347))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((3===matchValminus70347.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus70348 = matchValminus70347[0];
          var matchTempminus70349 = matchValminus70347[1];
          var matchTempminus70350 = matchValminus70347[2];
          if ((!(("message"===matchTempminus70348))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var wholeMessage = matchTempminus70349;
          if ((!((("object")===((typeof matchTempminus70349))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchTempminus70349.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus70351 = Array.prototype.slice.call(matchTempminus70349, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus70351))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus70351.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var messageText = matchArraySimplePartminus70351[0];
          var matchArrayTailPartminus70352 = Array.prototype.slice.call(matchTempminus70349, 1);
          var matchTempminus70353 = matchArrayTailPartminus70352[0];
          var matchTempminus70354 = matchArrayTailPartminus70352[1];
          var previousMatchSucceededminus70355 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus70353))))              {
              previousMatchSucceededminus70355 = false;
              };
            var messageDwell = matchTempminus70353;
            if (previousMatchSucceededminus70355)              {
              break;
              };
            previousMatchSucceededminus70355 = true;
            case 1:
            var fResult70356 = ((function (x)              {
              return 1.5;
              }))(matchTempminus70353);
            if ((fResult70356===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus70355 = false;
              };
            var messageDwell = fResult70356;
            if (previousMatchSucceededminus70355)              {
              break;
              };
            previousMatchSucceededminus70355 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var previousMatchSucceededminus70357 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus70354))))              {
              previousMatchSucceededminus70357 = false;
              };
            var deadDwell = matchTempminus70354;
            if (previousMatchSucceededminus70357)              {
              break;
              };
            previousMatchSucceededminus70357 = true;
            case 1:
            var fResult70358 = ((function (x)              {
              return 1;
              }))(matchTempminus70354);
            if ((fResult70358===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus70357 = false;
              };
            var deadDwell = fResult70358;
            if (previousMatchSucceededminus70357)              {
              break;
              };
            previousMatchSucceededminus70357 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var elapsed = matchTempminus70350;
          (function (arguments)            {
            var context70364 = c;
            context70364.save();
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
              context70364.restore();
              };
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          return ((moduleminus58c4bce870.greaterThan(elapsed, messageDwell))?(this.toDeadTime()) : (this.subState = ["message", wholeMessage, moduleminus58c4bce870.plus(elapsed, time)]));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G70341))))          {
          return G70341;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :message (and whole-message [: message-text (tail [:- (opt message-dwell 1.5) (opt dead-dwell 1)])]) elapsed] (save-excursion c (set! c\.font (@ font-string)) (set! c\.text-align ''center'') (set! c\.text-baseline ''middle'') (set! c\.fill-style (@ options fill-rgba)) (this\.camera\.set-zoom (@ x-scale) (@ y-scale)) (comment (c\.scale (@ x-scale) (@ y-scale))) (with-jitter this\.c 10 (/ (@ options jitter) (@ x-scale)) (lambda (c) (c\.fill-text message-text 0 0)))) (if (> elapsed message-dwell) (@ (to-dead-time)) (set! (@ sub-state) [: :message whole-message (+ elapsed time)]))))) for value ")+(JSON.stringify(G70342))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var toDeadTime = (function ()      {
      this.subState = (function (arguments)        {
        var G70423 = undefined;
        var G70424 = this.subState;
        G70423 = (function (arguments)          {
          var matchValminus70429 = G70424;
          if ((!((("object")===((typeof matchValminus70429))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((3===matchValminus70429.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus70430 = matchValminus70429[0];
          var matchTempminus70431 = matchValminus70429[1];
          var matchTempminus70432 = matchValminus70429[2];
          if ((!(("message"===matchTempminus70430))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((("object")===((typeof matchTempminus70431))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchTempminus70431.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus70433 = Array.prototype.slice.call(matchTempminus70431, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus70433))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus70433.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var messageText = matchArraySimplePartminus70433[0];
          var matchArrayTailPartminus70434 = Array.prototype.slice.call(matchTempminus70431, 1);
          var matchTempminus70435 = matchArrayTailPartminus70434[0];
          var matchTempminus70436 = matchArrayTailPartminus70434[1];
          var previousMatchSucceededminus70437 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus70435))))              {
              previousMatchSucceededminus70437 = false;
              };
            var messageDwell = matchTempminus70435;
            if (previousMatchSucceededminus70437)              {
              break;
              };
            previousMatchSucceededminus70437 = true;
            case 1:
            var fResult70438 = ((function (x)              {
              return 1.5;
              }))(matchTempminus70435);
            if ((fResult70438===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus70437 = false;
              };
            var messageDwell = fResult70438;
            if (previousMatchSucceededminus70437)              {
              break;
              };
            previousMatchSucceededminus70437 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var previousMatchSucceededminus70439 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus70436))))              {
              previousMatchSucceededminus70439 = false;
              };
            var deadDwell = matchTempminus70436;
            if (previousMatchSucceededminus70439)              {
              break;
              };
            previousMatchSucceededminus70439 = true;
            case 1:
            var fResult70440 = ((function (x)              {
              return 1;
              }))(matchTempminus70436);
            if ((fResult70440===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus70439 = false;
              };
            var deadDwell = fResult70440;
            if (previousMatchSucceededminus70439)              {
              break;
              };
            previousMatchSucceededminus70439 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var elapsed = matchTempminus70432;
          return ["deadTime", deadDwell, elapsed];
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G70423))))          {
          return G70423;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :message [: message-text (tail [:- (opt message-dwell 1.5) (opt dead-dwell 1)])] elapsed] [: :dead-time dead-dwell elapsed]))) for value ")+(JSON.stringify(G70424))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var drawDeadTime = (function (time)      {
      return (function (arguments)        {
        var G70459 = undefined;
        var G70460 = this.subState;
        G70459 = (function (arguments)          {
          var matchValminus70465 = G70460;
          if ((!((("object")===((typeof matchValminus70465))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((3===matchValminus70465.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus70466 = matchValminus70465[0];
          var matchTempminus70467 = matchValminus70465[1];
          var matchTempminus70468 = matchValminus70465[2];
          if ((!(("deadTime"===matchTempminus70466))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var deadDwell = matchTempminus70467;
          var elapsed = matchTempminus70468;
          return ((moduleminus58c4bce870.greaterThan(elapsed, deadDwell))?(this.nextMessage()) : (this.subState = ["deadTime", deadDwell, moduleminus58c4bce870.plus(elapsed, time)]));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G70459))))          {
          return G70459;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :dead-time dead-dwell elapsed] (if (> elapsed dead-dwell) (@ (next-message)) (set! (@ sub-state) [: :dead-time dead-dwell (+ elapsed time)]))))) for value ")+(JSON.stringify(G70460))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var draw = (function (time)      {
      return (function (arguments)        {
        var G70504 = undefined;
        var G70505 = this.subState;
        G70504 = (function (arguments)          {
          var matchValminus70510 = G70505;
          if ((!(("start"===matchValminus70510))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return this.nextMessage();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G70504))))          {
          return G70504;
          };
        G70504 = (function (arguments)          {
          var matchValminus70515 = G70505;
          if ((!((("object")===((typeof matchValminus70515))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchValminus70515.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus70516 = Array.prototype.slice.call(matchValminus70515, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus70516))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus70516.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus70517 = matchArraySimplePartminus70516[0];
          if ((!(("message"===matchTempminus70517))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArrayTailPartminus70518 = Array.prototype.slice.call(matchValminus70515, 1);
          var _ = matchArrayTailPartminus70518;
          return this.drawMessage(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G70504))))          {
          return G70504;
          };
        G70504 = (function (arguments)          {
          var matchValminus70523 = G70505;
          if ((!((("object")===((typeof matchValminus70523))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchValminus70523.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus70524 = Array.prototype.slice.call(matchValminus70523, 0, 1);
          if ((!((("object")===((typeof matchArraySimplePartminus70524))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((1===matchArraySimplePartminus70524.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus70525 = matchArraySimplePartminus70524[0];
          if ((!(("deadTime"===matchTempminus70525))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArrayTailPartminus70526 = Array.prototype.slice.call(matchValminus70523, 1);
          var _ = matchArrayTailPartminus70526;
          return this.drawDeadTime(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G70504))))          {
          return G70504;
          };
        throw ((("match-fail at ((match (@ sub-state) (:start (@ (next-message))) ([: :message (tail _)] (@ (draw-message time))) ([: :dead-time (tail _)] (@ (draw-dead-time time))))) for value ")+(JSON.stringify(G70505))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus69965.makeInterstitial = (function (messages, options)      {
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
  return currentModuleminus69965;
  }))