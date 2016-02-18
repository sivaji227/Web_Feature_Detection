/*!
 * Dolby Digital Plus Feature Detect v1.1.0 (http://developer.dolby.com)
 * Copyright 2011-2015 Dolby, Inc.
 * Licensed under the MIT license
 *
 * Author: Titus Blair
 * Updated: 2/18/2016
 *
 */

var Dolby = Dolby || {};

(function () {

    'use strict';

    Dolby.supportDDPlus = false;

    // create audio element to test Dolby Digital Plus playback
    var audio = new Audio();

    // check to see if EC-3 (Dolby Digital Plus) can be played
    if (audio.canPlayType('audio/mp4;codecs="ec-3"') != '') {
        
        if( navigator.userAgent.indexOf('Safari') != -1 && 
            navigator.userAgent.indexOf('Mac OS X 10_11') != -1 && 
            navigator.userAgent.indexOf('Version/9') != -1 ) {
                // everything checks out so we can play Dolby Digital Plus
                Dolby.supportDDPlus = true;            
        }

        if( navigator.userAgent.indexOf('Edge') != -1 ) {
            Dolby.supportDDPlus = true;
        } 
    
    }

    // method to return whether Dolby Digital Plus is supported
    Dolby.checkDDPlus = function() {
        return Dolby.supportDDPlus;
    }

}());
