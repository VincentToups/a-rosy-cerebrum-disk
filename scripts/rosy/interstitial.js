define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, gamvas)  {
  var currentModuleminus45722 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus45722 = value;
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
    currentModuleminus45722.makeMessage = (function (str)      {
      return moduleminus295baa4e1e.map((function (x)        {
        return [x];
        }), str.split(" "));
      });
    var makeInit = (function ()      {
      var returnValueminus45748 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus45747",
          args:arguments
        };
        });
      var recurP45751 = (function (valminus45752)        {
        if ((("undefined")===((typeof valminus45752))))          {
          return false;
          };
        return (valminus45752.recurSigil===("recurSigilminus45747"));
        });
      var actualFunminus45750 = (function ()        {
        return (function (arguments)          {
          var G45754 = undefined;
          var G45755 = Array.prototype.slice.apply(arguments);
          G45754 = (function (arguments)            {
            var matchValminus45756 = G45755;
            if ((!((matchValminus45756.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus45757 = Array.prototype.slice.call(matchValminus45756, 0, 1);
            if ((!((1===matchArraySimplePartminus45757.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var messages = matchArraySimplePartminus45757[0];
            var matchArrayTailPartminus45758 = Array.prototype.slice.call(matchValminus45756, 1);
            var matchTempminus45759 = matchArrayTailPartminus45758[0];
            if ((("undefined")===((typeof matchTempminus45759))))              {
              matchTempminus45759 = {                
                
              };
              };
            var matchObjectTempminus45760 = matchTempminus45759.doneCallback;
            var previousMatchSucceededminus45769 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus45760))))                {
                previousMatchSucceededminus45769 = false;
                };
              var doneCallback = matchObjectTempminus45760;
              if (previousMatchSucceededminus45769)                {
                break;
                };
              previousMatchSucceededminus45769 = true;
              case 1:
              var fResult45770 = ((function (x)                {
                return (function ()                  {
                  return undefined;
                  });
                }))(matchObjectTempminus45760);
              if ((fResult45770===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus45769 = false;
                };
              var doneCallback = fResult45770;
              if (previousMatchSucceededminus45769)                {
                break;
                };
              previousMatchSucceededminus45769 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus45761 = matchTempminus45759.fontSize;
            var previousMatchSucceededminus45771 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus45761))))                {
                previousMatchSucceededminus45771 = false;
                };
              var fontSize = matchObjectTempminus45761;
              if (previousMatchSucceededminus45771)                {
                break;
                };
              previousMatchSucceededminus45771 = true;
              case 1:
              var fResult45772 = ((function (x)                {
                return 10;
                }))(matchObjectTempminus45761);
              if ((fResult45772===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus45771 = false;
                };
              var fontSize = fResult45772;
              if (previousMatchSucceededminus45771)                {
                break;
                };
              previousMatchSucceededminus45771 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus45762 = matchTempminus45759.fontStyle;
            var previousMatchSucceededminus45773 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus45762))))                {
                previousMatchSucceededminus45773 = false;
                };
              var fontStyle = matchObjectTempminus45762;
              if (previousMatchSucceededminus45773)                {
                break;
                };
              previousMatchSucceededminus45773 = true;
              case 1:
              var fResult45774 = ((function (x)                {
                return "bold";
                }))(matchObjectTempminus45762);
              if ((fResult45774===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus45773 = false;
                };
              var fontStyle = fResult45774;
              if (previousMatchSucceededminus45773)                {
                break;
                };
              previousMatchSucceededminus45773 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus45763 = matchTempminus45759.fontName;
            var previousMatchSucceededminus45775 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus45763))))                {
                previousMatchSucceededminus45775 = false;
                };
              var fontName = matchObjectTempminus45763;
              if (previousMatchSucceededminus45775)                {
                break;
                };
              previousMatchSucceededminus45775 = true;
              case 1:
              var fResult45776 = ((function (x)                {
                return "sans-serif";
                }))(matchObjectTempminus45763);
              if ((fResult45776===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus45775 = false;
                };
              var fontName = fResult45776;
              if (previousMatchSucceededminus45775)                {
                break;
                };
              previousMatchSucceededminus45775 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus45764 = matchTempminus45759.dwellTime;
            var previousMatchSucceededminus45777 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus45764))))                {
                previousMatchSucceededminus45777 = false;
                };
              var dwellTime = matchObjectTempminus45764;
              if (previousMatchSucceededminus45777)                {
                break;
                };
              previousMatchSucceededminus45777 = true;
              case 1:
              var fResult45778 = ((function (x)                {
                return 1.5;
                }))(matchObjectTempminus45764);
              if ((fResult45778===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus45777 = false;
                };
              var dwellTime = fResult45778;
              if (previousMatchSucceededminus45777)                {
                break;
                };
              previousMatchSucceededminus45777 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus45765 = matchTempminus45759.zoomFactor;
            var previousMatchSucceededminus45779 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus45765))))                {
                previousMatchSucceededminus45779 = false;
                };
              var zoomFactor = matchObjectTempminus45765;
              if (previousMatchSucceededminus45779)                {
                break;
                };
              previousMatchSucceededminus45779 = true;
              case 1:
              var fResult45780 = ((function (x)                {
                return 0.75;
                }))(matchObjectTempminus45765);
              if ((fResult45780===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus45779 = false;
                };
              var zoomFactor = fResult45780;
              if (previousMatchSucceededminus45779)                {
                break;
                };
              previousMatchSucceededminus45779 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus45766 = matchTempminus45759.jitter;
            var previousMatchSucceededminus45781 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus45766))))                {
                previousMatchSucceededminus45781 = false;
                };
              var jitter = matchObjectTempminus45766;
              if (previousMatchSucceededminus45781)                {
                break;
                };
              previousMatchSucceededminus45781 = true;
              case 1:
              var fResult45782 = ((function (x)                {
                return 1.5;
                }))(matchObjectTempminus45766);
              if ((fResult45782===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus45781 = false;
                };
              var jitter = fResult45782;
              if (previousMatchSucceededminus45781)                {
                break;
                };
              previousMatchSucceededminus45781 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus45767 = matchTempminus45759.fillRgba;
            var previousMatchSucceededminus45783 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus45767))))                {
                previousMatchSucceededminus45783 = false;
                };
              var fillRgba = matchObjectTempminus45767;
              if (previousMatchSucceededminus45783)                {
                break;
                };
              previousMatchSucceededminus45783 = true;
              case 1:
              var fResult45784 = ((function (x)                {
                return "rgba(255, 0, 0, 0.4)";
                }))(matchObjectTempminus45767);
              if ((fResult45784===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus45783 = false;
                };
              var fillRgba = fResult45784;
              if (previousMatchSucceededminus45783)                {
                break;
                };
              previousMatchSucceededminus45783 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus45768 = matchTempminus45759.deadTime;
            var previousMatchSucceededminus45785 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus45768))))                {
                previousMatchSucceededminus45785 = false;
                };
              var deadTime = matchObjectTempminus45768;
              if (previousMatchSucceededminus45785)                {
                break;
                };
              previousMatchSucceededminus45785 = true;
              case 1:
              var fResult45786 = ((function (x)                {
                return 1.0;
                }))(matchObjectTempminus45768);
              if ((fResult45786===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus45785 = false;
                };
              var deadTime = fResult45786;
              if (previousMatchSucceededminus45785)                {
                break;
                };
              previousMatchSucceededminus45785 = true;
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
                var G45854 = undefined;
                var G45855 = gamvas.getCanvasDimension();
                G45854 = (function (arguments)                  {
                  var matchValminus45856 = G45855;
                  var w = matchValminus45856.w;
                  if ((("undefined")===((typeof w))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var h = matchValminus45856.h;
                  if ((("undefined")===((typeof h))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  this.w = w;
                  this.h = h;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G45854))))                  {
                  return G45854;
                  };
                throw ((("match-fail at ((match (gamvas\.get-canvas-dimension) (({} w w h h) (set! (@ w) w) (set! (@ h) h)))) for value ")+(JSON.stringify(G45855))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              this.fontString = moduleminus58c4bce870.plus(fontStyle, " ", fontSize, "px ", fontName);
              this.yScale = moduleminus58c4bce870.times(zoomFactor, moduleminus58c4bce870.divide(this.h, fontSize));
              this.subState = "start";
              return console.log("In interstitial init, got ", this.messages, " and ", this.options);
              });
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G45754))))            {
            return G45754;
            };
          G45754 = (function (arguments)            {
            var matchValminus45889 = G45755;
            var anythingElseminus45753 = matchValminus45889;
            throw ((("Match fail in make-init against: ")+anythingElseminus45753));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G45754))))            {
            return G45754;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: messages :- (options{} (done-callback (lambda nil undefined)) (font-size 10) (font-style ''bold'') (font-name ''sans-serif'') (dwell-time 1.5) (zoom-factor 0.75) (jitter 1.5) (fill-rgba (quote (rgba 255 0 0 0.4))) (dead-time 1.0))] (lambda (init) (set! (@ messages) messages) (set! (@ messages-remaining) messages) (set! (@ options) (collect{} done-callback font-size font-style font-name dwell-time zoom-factor jitter fill-rgba dead-time)) (match (gamvas\.get-canvas-dimension) (({} w w h h) (set! (@ w) w) (set! (@ h) h))) (set! (@ font-string) (+ font-style '' '' font-size ''px '' font-name)) (set! (@ y-scale) (* zoom-factor (/ (@ h) font-size))) (set! (@ sub-state) :start) (console\.log ''In interstitial init, got '' (@ messages) '' and '' (@ options)))) (anything-else-45753 (_throw (_+ ''Match fail in make-init against: '' anything-else-45753))))) for value ")+(JSON.stringify(G45755))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus45748 = actualFunminus45750.apply(this, arguments);
      while (recurP45751(returnValueminus45748))        {
        returnValueminus45748 = actualFunminus45750.apply(this, returnValueminus45748.args);
        };
      return returnValueminus45748;
      });
    var nextMessage = (function ()      {
      return (function (arguments)        {
        var G45946 = undefined;
        var G45947 = this.messagesRemaining;
        G45946 = (function (arguments)          {
          var matchValminus45952 = G45947;
          if ((!((matchValminus45952.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus45953 = Array.prototype.slice.call(matchValminus45952, 0, 1);
          if ((!((1===matchArraySimplePartminus45953.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus45954 = matchArraySimplePartminus45953[0];
          var currentMessage = matchTempminus45954;
          var matchTempminus45955 = matchTempminus45954[0];
          var message = matchTempminus45955;
          var matchArrayTailPartminus45956 = Array.prototype.slice.call(matchValminus45952, 1);
          var rest = matchArrayTailPartminus45956;
          this.messagesRemaining = rest;
          this.xScale = moduleminus58c4bce870.times(this.options.zoomFactor, moduleminus58c4bce870.divide(this.w, this.c.measureText(message).width));
          this.subState = ["message", currentMessage, 0];
          return console.log("Interstitial switch: ", this.subState, this.c.measureText(message), this.xScale, this.yScale);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G45946))))          {
          return G45946;
          };
        G45946 = (function (arguments)          {
          var matchValminus45997 = G45947;
          if ((!((0===matchValminus45997.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          console.log("Interstitial done, calling callback.");
          return this.options.doneCallback();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G45946))))          {
          return G45946;
          };
        throw ((("match-fail at ((match (@ messages-remaining) ([: (and current-message [:- message]) (tail rest)] (set! (@ messages-remaining) rest) (set! (@ x-scale) (* (@ options zoom-factor) (/ (@ w) (\.\. (\.\. (@ c) (measure-text message)) width)))) (set! (@ sub-state) [: :message current-message 0]) (console\.log ''Interstitial switch: '' (@ sub-state) (\.\. (@ c) (measure-text message)) (@ x-scale) (@ y-scale))) ([:] (console\.log ''Interstitial done, calling callback.'') ((@ options done-callback))))) for value ")+(JSON.stringify(G45947))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var drawStart = (function (time)      {
      this.tAcc = moduleminus58c4bce870.plus(this.tAcc, time);
      return ((moduleminus4745e9d952.emptyPredicate(this.messagesRemaining))?(this.options.doneCallback()) : (this.nextMessage()));
      });
    var drawMessage = (function (time)      {
      var c = this.c;
      return (function (arguments)        {
        var G46094 = undefined;
        var G46095 = this.subState;
        G46094 = (function (arguments)          {
          var matchValminus46100 = G46095;
          if ((!((3===matchValminus46100.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus46101 = matchValminus46100[0];
          var matchTempminus46102 = matchValminus46100[1];
          var matchTempminus46103 = matchValminus46100[2];
          if ((!(("message"===matchTempminus46101))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var wholeMessage = matchTempminus46102;
          if ((!((matchTempminus46102.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus46104 = Array.prototype.slice.call(matchTempminus46102, 0, 1);
          if ((!((1===matchArraySimplePartminus46104.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var messageText = matchArraySimplePartminus46104[0];
          var matchArrayTailPartminus46105 = Array.prototype.slice.call(matchTempminus46102, 1);
          var matchTempminus46106 = matchArrayTailPartminus46105[0];
          var matchTempminus46107 = matchArrayTailPartminus46105[1];
          var previousMatchSucceededminus46108 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus46106))))              {
              previousMatchSucceededminus46108 = false;
              };
            var messageDwell = matchTempminus46106;
            if (previousMatchSucceededminus46108)              {
              break;
              };
            previousMatchSucceededminus46108 = true;
            case 1:
            var fResult46109 = ((function (x)              {
              return 1.5;
              }))(matchTempminus46106);
            if ((fResult46109===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus46108 = false;
              };
            var messageDwell = fResult46109;
            if (previousMatchSucceededminus46108)              {
              break;
              };
            previousMatchSucceededminus46108 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var previousMatchSucceededminus46110 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus46107))))              {
              previousMatchSucceededminus46110 = false;
              };
            var deadDwell = matchTempminus46107;
            if (previousMatchSucceededminus46110)              {
              break;
              };
            previousMatchSucceededminus46110 = true;
            case 1:
            var fResult46111 = ((function (x)              {
              return 1;
              }))(matchTempminus46107);
            if ((fResult46111===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus46110 = false;
              };
            var deadDwell = fResult46111;
            if (previousMatchSucceededminus46110)              {
              break;
              };
            previousMatchSucceededminus46110 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var elapsed = matchTempminus46103;
          (function (arguments)            {
            var context46117 = c;
            context46117.save();
            try              {
              c.font = this.fontString;
              c.textAlign = "center";
              c.textBaseline = "middle";
              c.fillStyle = this.options.fillRgba;
              this.camera.setZoom(this.xScale, this.yScale);
              // (c\.scale (@ x-scale) (@ y-scale))
              ;
              moduleminus6acd260b96.withJitter(this.c, 10, this.options.jitter, (function (c)                {
                return c.fillText(messageText, 0, 0);
                }));
              }finally               {
              context46117.restore();
              };
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          return ((moduleminus58c4bce870.greaterThan(elapsed, messageDwell))?(this.toDeadTime()) : (this.subState = ["message", wholeMessage, moduleminus58c4bce870.plus(elapsed, time)]));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G46094))))          {
          return G46094;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :message (and whole-message [: message-text (tail [:- (opt message-dwell 1.5) (opt dead-dwell 1)])]) elapsed] (save-excursion c (set! c\.font (@ font-string)) (set! c\.text-align ''center'') (set! c\.text-baseline ''middle'') (set! c\.fill-style (@ options fill-rgba)) (this\.camera\.set-zoom (@ x-scale) (@ y-scale)) (comment (c\.scale (@ x-scale) (@ y-scale))) (with-jitter this\.c 10 (@ options jitter) (lambda (c) (c\.fill-text message-text 0 0)))) (if (> elapsed message-dwell) (@ (to-dead-time)) (set! (@ sub-state) [: :message whole-message (+ elapsed time)]))))) for value ")+(JSON.stringify(G46095))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var toDeadTime = (function ()      {
      this.subState = (function (arguments)        {
        var G46172 = undefined;
        var G46173 = this.subState;
        G46172 = (function (arguments)          {
          var matchValminus46178 = G46173;
          if ((!((3===matchValminus46178.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus46179 = matchValminus46178[0];
          var matchTempminus46180 = matchValminus46178[1];
          var matchTempminus46181 = matchValminus46178[2];
          if ((!(("message"===matchTempminus46179))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchTempminus46180.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus46182 = Array.prototype.slice.call(matchTempminus46180, 0, 1);
          if ((!((1===matchArraySimplePartminus46182.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var messageText = matchArraySimplePartminus46182[0];
          var matchArrayTailPartminus46183 = Array.prototype.slice.call(matchTempminus46180, 1);
          var matchTempminus46184 = matchArrayTailPartminus46183[0];
          var matchTempminus46185 = matchArrayTailPartminus46183[1];
          var previousMatchSucceededminus46186 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus46184))))              {
              previousMatchSucceededminus46186 = false;
              };
            var messageDwell = matchTempminus46184;
            if (previousMatchSucceededminus46186)              {
              break;
              };
            previousMatchSucceededminus46186 = true;
            case 1:
            var fResult46187 = ((function (x)              {
              return 1.5;
              }))(matchTempminus46184);
            if ((fResult46187===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus46186 = false;
              };
            var messageDwell = fResult46187;
            if (previousMatchSucceededminus46186)              {
              break;
              };
            previousMatchSucceededminus46186 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var previousMatchSucceededminus46188 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus46185))))              {
              previousMatchSucceededminus46188 = false;
              };
            var deadDwell = matchTempminus46185;
            if (previousMatchSucceededminus46188)              {
              break;
              };
            previousMatchSucceededminus46188 = true;
            case 1:
            var fResult46189 = ((function (x)              {
              return 1;
              }))(matchTempminus46185);
            if ((fResult46189===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus46188 = false;
              };
            var deadDwell = fResult46189;
            if (previousMatchSucceededminus46188)              {
              break;
              };
            previousMatchSucceededminus46188 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var elapsed = matchTempminus46181;
          return ["deadTime", deadDwell, elapsed];
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G46172))))          {
          return G46172;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :message [: message-text (tail [:- (opt message-dwell 1.5) (opt dead-dwell 1)])] elapsed] [: :dead-time dead-dwell elapsed]))) for value ")+(JSON.stringify(G46173))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var drawDeadTime = (function (time)      {
      return (function (arguments)        {
        var G46208 = undefined;
        var G46209 = this.subState;
        G46208 = (function (arguments)          {
          var matchValminus46214 = G46209;
          if ((!((3===matchValminus46214.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus46215 = matchValminus46214[0];
          var matchTempminus46216 = matchValminus46214[1];
          var matchTempminus46217 = matchValminus46214[2];
          if ((!(("deadTime"===matchTempminus46215))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var deadDwell = matchTempminus46216;
          var elapsed = matchTempminus46217;
          return ((moduleminus58c4bce870.greaterThan(elapsed, deadDwell))?(this.nextMessage()) : (this.subState = ["deadTime", deadDwell, moduleminus58c4bce870.plus(elapsed, time)]));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G46208))))          {
          return G46208;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :dead-time dead-dwell elapsed] (if (> elapsed dead-dwell) (@ (next-message)) (set! (@ sub-state) [: :dead-time dead-dwell (+ elapsed time)]))))) for value ")+(JSON.stringify(G46209))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var draw = (function (time)      {
      return (function (arguments)        {
        var G46253 = undefined;
        var G46254 = this.subState;
        G46253 = (function (arguments)          {
          var matchValminus46259 = G46254;
          if ((!(("start"===matchValminus46259))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return this.nextMessage();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G46253))))          {
          return G46253;
          };
        G46253 = (function (arguments)          {
          var matchValminus46264 = G46254;
          if ((!((matchValminus46264.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus46265 = Array.prototype.slice.call(matchValminus46264, 0, 1);
          if ((!((1===matchArraySimplePartminus46265.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus46266 = matchArraySimplePartminus46265[0];
          if ((!(("message"===matchTempminus46266))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArrayTailPartminus46267 = Array.prototype.slice.call(matchValminus46264, 1);
          var _ = matchArrayTailPartminus46267;
          return this.drawMessage(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G46253))))          {
          return G46253;
          };
        G46253 = (function (arguments)          {
          var matchValminus46272 = G46254;
          if ((!((matchValminus46272.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus46273 = Array.prototype.slice.call(matchValminus46272, 0, 1);
          if ((!((1===matchArraySimplePartminus46273.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus46274 = matchArraySimplePartminus46273[0];
          if ((!(("deadTime"===matchTempminus46274))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArrayTailPartminus46275 = Array.prototype.slice.call(matchValminus46272, 1);
          var _ = matchArrayTailPartminus46275;
          return this.drawDeadTime(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G46253))))          {
          return G46253;
          };
        throw ((("match-fail at ((match (@ sub-state) (:start (@ (next-message))) ([: :message (tail _)] (@ (draw-message time))) ([: :dead-time (tail _)] (@ (draw-dead-time time))))) for value ")+(JSON.stringify(G46254))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus45722.makeInterstitial = (function (messages, options)      {
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
  return currentModuleminus45722;
  }))