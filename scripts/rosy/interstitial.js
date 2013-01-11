define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, gamvas)  {
  var currentModuleminus56575 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus56575 = value;
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
    currentModuleminus56575.makeMessage = (function (str)      {
      return moduleminus295baa4e1e.map((function (x)        {
        return [x];
        }), str.split(" "));
      });
    var makeInit = (function ()      {
      var returnValueminus56748 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus56747",
          args:arguments
        };
        });
      var recurP56751 = (function (valminus56752)        {
        if ((("undefined")===((typeof valminus56752))))          {
          return false;
          };
        return (valminus56752.recurSigil===("recurSigilminus56747"));
        });
      var actualFunminus56750 = (function ()        {
        return (function (arguments)          {
          var G56754 = undefined;
          var G56755 = Array.prototype.slice.apply(arguments);
          G56754 = (function (arguments)            {
            var matchValminus56756 = G56755;
            if ((!((matchValminus56756.length>=1))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus56757 = Array.prototype.slice.call(matchValminus56756, 0, 1);
            if ((!((1===matchArraySimplePartminus56757.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var messages = matchArraySimplePartminus56757[0];
            var matchArrayTailPartminus56758 = Array.prototype.slice.call(matchValminus56756, 1);
            var matchTempminus56759 = matchArrayTailPartminus56758[0];
            if ((("undefined")===((typeof matchTempminus56759))))              {
              matchTempminus56759 = {                
                
              };
              };
            var matchObjectTempminus56760 = matchTempminus56759.doneCallback;
            var previousMatchSucceededminus56769 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus56760))))                {
                previousMatchSucceededminus56769 = false;
                };
              var doneCallback = matchObjectTempminus56760;
              if (previousMatchSucceededminus56769)                {
                break;
                };
              previousMatchSucceededminus56769 = true;
              case 1:
              var fResult56770 = ((function (x)                {
                return (function ()                  {
                  return undefined;
                  });
                }))(matchObjectTempminus56760);
              if ((fResult56770===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus56769 = false;
                };
              var doneCallback = fResult56770;
              if (previousMatchSucceededminus56769)                {
                break;
                };
              previousMatchSucceededminus56769 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus56761 = matchTempminus56759.fontSize;
            var previousMatchSucceededminus56771 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus56761))))                {
                previousMatchSucceededminus56771 = false;
                };
              var fontSize = matchObjectTempminus56761;
              if (previousMatchSucceededminus56771)                {
                break;
                };
              previousMatchSucceededminus56771 = true;
              case 1:
              var fResult56772 = ((function (x)                {
                return 10;
                }))(matchObjectTempminus56761);
              if ((fResult56772===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus56771 = false;
                };
              var fontSize = fResult56772;
              if (previousMatchSucceededminus56771)                {
                break;
                };
              previousMatchSucceededminus56771 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus56762 = matchTempminus56759.fontStyle;
            var previousMatchSucceededminus56773 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus56762))))                {
                previousMatchSucceededminus56773 = false;
                };
              var fontStyle = matchObjectTempminus56762;
              if (previousMatchSucceededminus56773)                {
                break;
                };
              previousMatchSucceededminus56773 = true;
              case 1:
              var fResult56774 = ((function (x)                {
                return "bold";
                }))(matchObjectTempminus56762);
              if ((fResult56774===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus56773 = false;
                };
              var fontStyle = fResult56774;
              if (previousMatchSucceededminus56773)                {
                break;
                };
              previousMatchSucceededminus56773 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus56763 = matchTempminus56759.fontName;
            var previousMatchSucceededminus56775 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus56763))))                {
                previousMatchSucceededminus56775 = false;
                };
              var fontName = matchObjectTempminus56763;
              if (previousMatchSucceededminus56775)                {
                break;
                };
              previousMatchSucceededminus56775 = true;
              case 1:
              var fResult56776 = ((function (x)                {
                return "sans-serif";
                }))(matchObjectTempminus56763);
              if ((fResult56776===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus56775 = false;
                };
              var fontName = fResult56776;
              if (previousMatchSucceededminus56775)                {
                break;
                };
              previousMatchSucceededminus56775 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus56764 = matchTempminus56759.dwellTime;
            var previousMatchSucceededminus56777 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus56764))))                {
                previousMatchSucceededminus56777 = false;
                };
              var dwellTime = matchObjectTempminus56764;
              if (previousMatchSucceededminus56777)                {
                break;
                };
              previousMatchSucceededminus56777 = true;
              case 1:
              var fResult56778 = ((function (x)                {
                return 1.5;
                }))(matchObjectTempminus56764);
              if ((fResult56778===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus56777 = false;
                };
              var dwellTime = fResult56778;
              if (previousMatchSucceededminus56777)                {
                break;
                };
              previousMatchSucceededminus56777 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus56765 = matchTempminus56759.zoomFactor;
            var previousMatchSucceededminus56779 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus56765))))                {
                previousMatchSucceededminus56779 = false;
                };
              var zoomFactor = matchObjectTempminus56765;
              if (previousMatchSucceededminus56779)                {
                break;
                };
              previousMatchSucceededminus56779 = true;
              case 1:
              var fResult56780 = ((function (x)                {
                return 0.75;
                }))(matchObjectTempminus56765);
              if ((fResult56780===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus56779 = false;
                };
              var zoomFactor = fResult56780;
              if (previousMatchSucceededminus56779)                {
                break;
                };
              previousMatchSucceededminus56779 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus56766 = matchTempminus56759.jitter;
            var previousMatchSucceededminus56781 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus56766))))                {
                previousMatchSucceededminus56781 = false;
                };
              var jitter = matchObjectTempminus56766;
              if (previousMatchSucceededminus56781)                {
                break;
                };
              previousMatchSucceededminus56781 = true;
              case 1:
              var fResult56782 = ((function (x)                {
                return 3;
                }))(matchObjectTempminus56766);
              if ((fResult56782===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus56781 = false;
                };
              var jitter = fResult56782;
              if (previousMatchSucceededminus56781)                {
                break;
                };
              previousMatchSucceededminus56781 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus56767 = matchTempminus56759.fillRgba;
            var previousMatchSucceededminus56783 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus56767))))                {
                previousMatchSucceededminus56783 = false;
                };
              var fillRgba = matchObjectTempminus56767;
              if (previousMatchSucceededminus56783)                {
                break;
                };
              previousMatchSucceededminus56783 = true;
              case 1:
              var fResult56784 = ((function (x)                {
                return "rgba(255, 0, 0, 0.4)";
                }))(matchObjectTempminus56767);
              if ((fResult56784===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus56783 = false;
                };
              var fillRgba = fResult56784;
              if (previousMatchSucceededminus56783)                {
                break;
                };
              previousMatchSucceededminus56783 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            var matchObjectTempminus56768 = matchTempminus56759.deadTime;
            var previousMatchSucceededminus56785 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchObjectTempminus56768))))                {
                previousMatchSucceededminus56785 = false;
                };
              var deadTime = matchObjectTempminus56768;
              if (previousMatchSucceededminus56785)                {
                break;
                };
              previousMatchSucceededminus56785 = true;
              case 1:
              var fResult56786 = ((function (x)                {
                return 1.0;
                }))(matchObjectTempminus56768);
              if ((fResult56786===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus56785 = false;
                };
              var deadTime = fResult56786;
              if (previousMatchSucceededminus56785)                {
                break;
                };
              previousMatchSucceededminus56785 = true;
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
                var G56854 = undefined;
                var G56855 = gamvas.getCanvasDimension();
                G56854 = (function (arguments)                  {
                  var matchValminus56856 = G56855;
                  var w = matchValminus56856.w;
                  if ((("undefined")===((typeof w))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var h = matchValminus56856.h;
                  if ((("undefined")===((typeof h))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  this.w = w;
                  this.h = h;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G56854))))                  {
                  return G56854;
                  };
                throw ((("match-fail at ((match (gamvas\.get-canvas-dimension) (({} w w h h) (set! (@ w) w) (set! (@ h) h)))) for value ")+(JSON.stringify(G56855))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              this.fontString = moduleminus58c4bce870.plus(fontStyle, " ", fontSize, "px ", fontName);
              this.yScale = moduleminus58c4bce870.times(zoomFactor, moduleminus58c4bce870.divide(this.h, fontSize));
              this.subState = "start";
              return console.log("In interstitial init, got ", this.messages, " and ", this.options);
              });
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G56754))))            {
            return G56754;
            };
          G56754 = (function (arguments)            {
            var matchValminus56889 = G56755;
            var anythingElseminus56753 = matchValminus56889;
            throw ((("Match fail in make-init against: ")+anythingElseminus56753));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G56754))))            {
            return G56754;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: messages :- (options{} (done-callback (lambda nil undefined)) (font-size 10) (font-style ''bold'') (font-name ''sans-serif'') (dwell-time 1.5) (zoom-factor 0.75) (jitter 3) (fill-rgba (quote (rgba 255 0 0 0.4))) (dead-time 1.0))] (lambda (init) (set! (@ messages) messages) (set! (@ messages-remaining) messages) (set! (@ options) (collect{} done-callback font-size font-style font-name dwell-time zoom-factor jitter fill-rgba dead-time)) (match (gamvas\.get-canvas-dimension) (({} w w h h) (set! (@ w) w) (set! (@ h) h))) (set! (@ font-string) (+ font-style '' '' font-size ''px '' font-name)) (set! (@ y-scale) (* zoom-factor (/ (@ h) font-size))) (set! (@ sub-state) :start) (console\.log ''In interstitial init, got '' (@ messages) '' and '' (@ options)))) (anything-else-56753 (_throw (_+ ''Match fail in make-init against: '' anything-else-56753))))) for value ")+(JSON.stringify(G56755))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus56748 = actualFunminus56750.apply(this, arguments);
      while (recurP56751(returnValueminus56748))        {
        returnValueminus56748 = actualFunminus56750.apply(this, returnValueminus56748.args);
        };
      return returnValueminus56748;
      });
    var nextMessage = (function ()      {
      return (function (arguments)        {
        var G56946 = undefined;
        var G56947 = this.messagesRemaining;
        G56946 = (function (arguments)          {
          var matchValminus56952 = G56947;
          if ((!((matchValminus56952.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus56953 = Array.prototype.slice.call(matchValminus56952, 0, 1);
          if ((!((1===matchArraySimplePartminus56953.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus56954 = matchArraySimplePartminus56953[0];
          var currentMessage = matchTempminus56954;
          var matchTempminus56955 = matchTempminus56954[0];
          var message = matchTempminus56955;
          var matchArrayTailPartminus56956 = Array.prototype.slice.call(matchValminus56952, 1);
          var rest = matchArrayTailPartminus56956;
          this.messagesRemaining = rest;
          this.xScale = moduleminus58c4bce870.times(this.options.zoomFactor, moduleminus58c4bce870.divide(this.w, this.c.measureText(message).width));
          this.subState = ["message", currentMessage, 0];
          return console.log("Interstitial switch: ", this.subState, this.c.measureText(message), this.xScale, this.yScale);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G56946))))          {
          return G56946;
          };
        G56946 = (function (arguments)          {
          var matchValminus56997 = G56947;
          if ((!((0===matchValminus56997.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          console.log("Interstitial done, calling callback.");
          return this.options.doneCallback();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G56946))))          {
          return G56946;
          };
        throw ((("match-fail at ((match (@ messages-remaining) ([: (and current-message [:- message]) (tail rest)] (set! (@ messages-remaining) rest) (set! (@ x-scale) (* (@ options zoom-factor) (/ (@ w) (\.\. (\.\. (@ c) (measure-text message)) width)))) (set! (@ sub-state) [: :message current-message 0]) (console\.log ''Interstitial switch: '' (@ sub-state) (\.\. (@ c) (measure-text message)) (@ x-scale) (@ y-scale))) ([:] (console\.log ''Interstitial done, calling callback.'') ((@ options done-callback))))) for value ")+(JSON.stringify(G56947))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var drawStart = (function (time)      {
      this.tAcc = moduleminus58c4bce870.plus(this.tAcc, time);
      return ((moduleminus4745e9d952.emptyPredicate(this.messagesRemaining))?(this.options.doneCallback()) : (this.nextMessage()));
      });
    var drawMessage = (function (time)      {
      var c = this.c;
      return (function (arguments)        {
        var G57098 = undefined;
        var G57099 = this.subState;
        G57098 = (function (arguments)          {
          var matchValminus57104 = G57099;
          if ((!((3===matchValminus57104.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus57105 = matchValminus57104[0];
          var matchTempminus57106 = matchValminus57104[1];
          var matchTempminus57107 = matchValminus57104[2];
          if ((!(("message"===matchTempminus57105))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var wholeMessage = matchTempminus57106;
          if ((!((matchTempminus57106.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus57108 = Array.prototype.slice.call(matchTempminus57106, 0, 1);
          if ((!((1===matchArraySimplePartminus57108.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var messageText = matchArraySimplePartminus57108[0];
          var matchArrayTailPartminus57109 = Array.prototype.slice.call(matchTempminus57106, 1);
          var matchTempminus57110 = matchArrayTailPartminus57109[0];
          var matchTempminus57111 = matchArrayTailPartminus57109[1];
          var previousMatchSucceededminus57112 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus57110))))              {
              previousMatchSucceededminus57112 = false;
              };
            var messageDwell = matchTempminus57110;
            if (previousMatchSucceededminus57112)              {
              break;
              };
            previousMatchSucceededminus57112 = true;
            case 1:
            var fResult57113 = ((function (x)              {
              return 1.5;
              }))(matchTempminus57110);
            if ((fResult57113===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus57112 = false;
              };
            var messageDwell = fResult57113;
            if (previousMatchSucceededminus57112)              {
              break;
              };
            previousMatchSucceededminus57112 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var previousMatchSucceededminus57114 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus57111))))              {
              previousMatchSucceededminus57114 = false;
              };
            var deadDwell = matchTempminus57111;
            if (previousMatchSucceededminus57114)              {
              break;
              };
            previousMatchSucceededminus57114 = true;
            case 1:
            var fResult57115 = ((function (x)              {
              return 1;
              }))(matchTempminus57111);
            if ((fResult57115===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus57114 = false;
              };
            var deadDwell = fResult57115;
            if (previousMatchSucceededminus57114)              {
              break;
              };
            previousMatchSucceededminus57114 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var elapsed = matchTempminus57107;
          (function (arguments)            {
            var context57121 = c;
            context57121.save();
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
              context57121.restore();
              };
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          return ((moduleminus58c4bce870.greaterThan(elapsed, messageDwell))?(this.toDeadTime()) : (this.subState = ["message", wholeMessage, moduleminus58c4bce870.plus(elapsed, time)]));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G57098))))          {
          return G57098;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :message (and whole-message [: message-text (tail [:- (opt message-dwell 1.5) (opt dead-dwell 1)])]) elapsed] (save-excursion c (set! c\.font (@ font-string)) (set! c\.text-align ''center'') (set! c\.text-baseline ''middle'') (set! c\.fill-style (@ options fill-rgba)) (this\.camera\.set-zoom (@ x-scale) (@ y-scale)) (comment (c\.scale (@ x-scale) (@ y-scale))) (with-jitter this\.c 10 (/ (@ options jitter) (@ x-scale)) (lambda (c) (c\.fill-text message-text 0 0)))) (if (> elapsed message-dwell) (@ (to-dead-time)) (set! (@ sub-state) [: :message whole-message (+ elapsed time)]))))) for value ")+(JSON.stringify(G57099))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var toDeadTime = (function ()      {
      this.subState = (function (arguments)        {
        var G57180 = undefined;
        var G57181 = this.subState;
        G57180 = (function (arguments)          {
          var matchValminus57186 = G57181;
          if ((!((3===matchValminus57186.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus57187 = matchValminus57186[0];
          var matchTempminus57188 = matchValminus57186[1];
          var matchTempminus57189 = matchValminus57186[2];
          if ((!(("message"===matchTempminus57187))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((matchTempminus57188.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus57190 = Array.prototype.slice.call(matchTempminus57188, 0, 1);
          if ((!((1===matchArraySimplePartminus57190.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var messageText = matchArraySimplePartminus57190[0];
          var matchArrayTailPartminus57191 = Array.prototype.slice.call(matchTempminus57188, 1);
          var matchTempminus57192 = matchArrayTailPartminus57191[0];
          var matchTempminus57193 = matchArrayTailPartminus57191[1];
          var previousMatchSucceededminus57194 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus57192))))              {
              previousMatchSucceededminus57194 = false;
              };
            var messageDwell = matchTempminus57192;
            if (previousMatchSucceededminus57194)              {
              break;
              };
            previousMatchSucceededminus57194 = true;
            case 1:
            var fResult57195 = ((function (x)              {
              return 1.5;
              }))(matchTempminus57192);
            if ((fResult57195===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus57194 = false;
              };
            var messageDwell = fResult57195;
            if (previousMatchSucceededminus57194)              {
              break;
              };
            previousMatchSucceededminus57194 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var previousMatchSucceededminus57196 = true;
          switch (1){
                      case 1:
            if ((("undefined")===((typeof matchTempminus57193))))              {
              previousMatchSucceededminus57196 = false;
              };
            var deadDwell = matchTempminus57193;
            if (previousMatchSucceededminus57196)              {
              break;
              };
            previousMatchSucceededminus57196 = true;
            case 1:
            var fResult57197 = ((function (x)              {
              return 1;
              }))(matchTempminus57193);
            if ((fResult57197===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))              {
              previousMatchSucceededminus57196 = false;
              };
            var deadDwell = fResult57197;
            if (previousMatchSucceededminus57196)              {
              break;
              };
            previousMatchSucceededminus57196 = true;
            default :
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            
          };
          var elapsed = matchTempminus57189;
          return ["deadTime", deadDwell, elapsed];
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G57180))))          {
          return G57180;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :message [: message-text (tail [:- (opt message-dwell 1.5) (opt dead-dwell 1)])] elapsed] [: :dead-time dead-dwell elapsed]))) for value ")+(JSON.stringify(G57181))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var drawDeadTime = (function (time)      {
      return (function (arguments)        {
        var G57216 = undefined;
        var G57217 = this.subState;
        G57216 = (function (arguments)          {
          var matchValminus57222 = G57217;
          if ((!((3===matchValminus57222.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus57223 = matchValminus57222[0];
          var matchTempminus57224 = matchValminus57222[1];
          var matchTempminus57225 = matchValminus57222[2];
          if ((!(("deadTime"===matchTempminus57223))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var deadDwell = matchTempminus57224;
          var elapsed = matchTempminus57225;
          return ((moduleminus58c4bce870.greaterThan(elapsed, deadDwell))?(this.nextMessage()) : (this.subState = ["deadTime", deadDwell, moduleminus58c4bce870.plus(elapsed, time)]));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G57216))))          {
          return G57216;
          };
        throw ((("match-fail at ((match (@ sub-state) ([: :dead-time dead-dwell elapsed] (if (> elapsed dead-dwell) (@ (next-message)) (set! (@ sub-state) [: :dead-time dead-dwell (+ elapsed time)]))))) for value ")+(JSON.stringify(G57217))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var draw = (function (time)      {
      return (function (arguments)        {
        var G57261 = undefined;
        var G57262 = this.subState;
        G57261 = (function (arguments)          {
          var matchValminus57267 = G57262;
          if ((!(("start"===matchValminus57267))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          return this.nextMessage();
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G57261))))          {
          return G57261;
          };
        G57261 = (function (arguments)          {
          var matchValminus57272 = G57262;
          if ((!((matchValminus57272.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus57273 = Array.prototype.slice.call(matchValminus57272, 0, 1);
          if ((!((1===matchArraySimplePartminus57273.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus57274 = matchArraySimplePartminus57273[0];
          if ((!(("message"===matchTempminus57274))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArrayTailPartminus57275 = Array.prototype.slice.call(matchValminus57272, 1);
          var _ = matchArrayTailPartminus57275;
          return this.drawMessage(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G57261))))          {
          return G57261;
          };
        G57261 = (function (arguments)          {
          var matchValminus57280 = G57262;
          if ((!((matchValminus57280.length>=1))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArraySimplePartminus57281 = Array.prototype.slice.call(matchValminus57280, 0, 1);
          if ((!((1===matchArraySimplePartminus57281.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus57282 = matchArraySimplePartminus57281[0];
          if ((!(("deadTime"===matchTempminus57282))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchArrayTailPartminus57283 = Array.prototype.slice.call(matchValminus57280, 1);
          var _ = matchArrayTailPartminus57283;
          return this.drawDeadTime(time);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G57261))))          {
          return G57261;
          };
        throw ((("match-fail at ((match (@ sub-state) (:start (@ (next-message))) ([: :message (tail _)] (@ (draw-message time))) ([: :dead-time (tail _)] (@ (draw-dead-time time))))) for value ")+(JSON.stringify(G57262))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus56575.makeInterstitial = (function (messages, options)      {
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
  return currentModuleminus56575;
  }))