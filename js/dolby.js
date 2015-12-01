/*!
 * Dolby Digital Plus Feature Detect v1.1.0 (http://developer.dolby.com)
 * Copyright 2011-2015 Dolby, Inc.
 * Licensed under the MIT license
 */

var Dolby = Dolby || {};

(function () {

    'use strict';

    Dolby.supportDDPlus = false;

    if( navigator.userAgent.indexOf('Safari') != -1 
        && navigator.userAgent.indexOf('Version/9.0') != -1 
        && navigator.userAgent.indexOf('Mac OS X 10_11') != -1 ) {
            Dolby.supportDDPlus = true;
    } 
    if( navigator.userAgent.indexOf('Edge') != -1 ) {
        Dolby.supportDDPlus = true;
    } 

    Dolby.checkDDPlus = function() {
        return Dolby.supportDDPlus;
    }

}());
