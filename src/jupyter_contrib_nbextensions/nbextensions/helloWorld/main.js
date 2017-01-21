define([
    'base/js/namespace',
    'jquery',
    'require',
    'base/js/events',
    'base/js/utils',
    'codemirror/addon/search/search',
    'codemirror/addon/search/searchcursor',

], function( Jupyter, $, require, events, configmod, utils) {
    "use strict";


    var load_extension = function() {

        Jupyter.toolbar.add_buttons_group([
                        {
                            'label': 'trigger Hello World',
                            'icon' : 'fa fa-thumbs-up',
                            'callback' : function (){
                                // here you handle what you need to do when clicking the button
                                alert("Hello World ....");
                            }
                        }
                    ], 'triggerHelloWorld')

    };



    var extension = {

        load_jupyter_extension : load_extension,
        load_ipython_extension : load_extension
    };
    return extension;
});