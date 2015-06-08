define([
    "jwebkit",    
    "jwebdesk",
], function(jwk, jwebdesk) {

    function instalar_plugin(launchbar) {

        // console.error('->launchbar.add_component("donate")');
        launchbar.add_component("donate", {
            "ui_type": "panel"
        }).done(function (tree) {
            // console.error("----> volvio el tree!!!!", [tree]);
            tree.on("render", function (){                                
                
var parte_1 = '<form  action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----\n">';

var parte_2 = '<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1"></form>';
                
                tree.container().html(parte_1 + parte_2);
                
                
                launchbar.adjust_size("donate", 80);
            })
                    
        });
    }
    
    jwebdesk.wait_app("jwebdesk~jwebdesk-launchbar@alpha-0.5").done(function (proxy) {        
        instalar_plugin(proxy.instance)
    });
    
});