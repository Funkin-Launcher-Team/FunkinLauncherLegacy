ace.define("ace/mode/cuttlefish_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{token:["text","comment"],regex:/^([ \t]*)(#.*)$/},{token:["text","keyword","text","string","text","comment"],regex:/^([ \t]*)(include)([ \t]*)([A-Za-z0-9-\_\.\*\/]+)([ \t]*)(#.*)?$/},{token:["text","keyword","text","operator","text","string","text","comment"],regex:/^([ \t]*)([A-Za-z0-9-_]+(?:\.[A-Za-z0-9-_]+)*)([ \t]*)(=)([ \t]*)([^ \t#][^#]*?)([ \t]*)(#.*)?$/},{defaultToken:"invalid"}]},this.normalizeRules()};s.metaData={fileTypes:["conf"],keyEquivalent:"^~C",name:"Cuttlefish",scopeName:"source.conf"},r.inherits(s,i),t.CuttlefishHighlightRules=s}),ace.define("ace/mode/cuttlefish",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/cuttlefish_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,s=e("./cuttlefish_highlight_rules").CuttlefishHighlightRules,o=function(){this.HighlightRules=s,this.foldingRules=null,this.$behaviour=this.$defaultBehaviour};r.inherits(o,i),function(){this.lineCommentStart="#",this.blockComment=null,this.$id="ace/mode/cuttlefish"}.call(o.prototype),t.Mode=o});                (function() {
                    ace.require(["ace/mode/cuttlefish"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            