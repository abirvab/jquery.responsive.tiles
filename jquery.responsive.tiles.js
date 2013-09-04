(function ($) {

    $.fn.tiles = function (options) {
        var settings = $.extend({
            selector: this.children(),
            column: 3.0,
            marginTop: 20
        }, options);
        var items = this.children(settings.selector);
            $(items).css({ display: 'inline-table',verticalAlign : 'top' , clear: "both",width: ((100-(2*settings.column))/settings.column)+"%", marginLeft: "2%" });
            this.children(settings.selector+":nth-child("+settings.column+"n+1)").css("margin-left","0px");
            var rowCount = Math.ceil(items.length / settings.column);
            for (var i = 1; i < rowCount; i++) {
                for (var j = 0; j < settings.column; j++) {
                    var columnHeights = new Array(settings.column);
                    // compute summation of rows subtract the max number with row number assign that to margin 
                    for (var k = 0; k < settings.column; k++) {
                        columnHeights[k] = 0;
                        for (var l = 0; l < i; l++) {
                            columnHeights[k] += $(items[settings.column * l + k]).height();
                        }
                    }
                    var maxColumnHeight = 0;
                    for (var m = 0; m < settings.column; m++) {
                        if (columnHeights[m] >= maxColumnHeight)
                            maxColumnHeight = columnHeights[m];
                    }
                    var margin = -(maxColumnHeight - columnHeights[j]) + settings.marginTop;
                    $(items[settings.column * i + j]).css("margin-top", margin + "px");
                }
            }
        
        return this;

    }; 

} (jQuery));
