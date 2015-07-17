/**
 * Created by vitali.nalivaika on 17.07.2015.
 */

require(["jquery", "../application"], function ($, Application) {
    $(document).ready(function() {
        var myApplication = new Application();

        myApplication.init();
    });
});