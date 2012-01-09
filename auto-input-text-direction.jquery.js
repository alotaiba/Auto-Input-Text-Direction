/**
 * Auto Input Text Direction is a little JavaScript function that detects the input language,
 * on html forms, and changes the input direction based on the language, i.e., right to left
 * for the Arabic language.
 * Copyright (C) 2010  Abdulrahman Alotaiba <http://www.mawqey.com/>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
 
 /**
 * Converted to a jQuery plugin by Abd Allah Diab
 * http://mpcabd.igeex.biz
 * mpcabd@gmail.com
 */

//Arabic - Range:
//0600–06FF
var rtlChars		= '\u0600-\u06FF';

//Arabic Supplement - Range:
//0750–077F
rtlChars		+= '\u0750-\u077F';

//Arabic Presentation Forms-A - Range:
//FB50–FDFF
rtlChars		+= '\uFB50-\uFDFF';

//Arabic Presentation Forms-B - Range:
//FE70–FEFF
rtlChars		+= '\uFE70-\uFEFF';

//ASCII Punctuation - Range:
//0000-0020
var controlChars = '\u0000-\u0020';

//General Punctuation - Range
//2000-200D
controlChars 	+= '\u2000-\u200D';

//Start Regular Expression magic
var reRTL     = new RegExp('[' + rtlChars + ']', 'g');
var reNotRTL = new RegExp('[^' + rtlChars + controlChars + ']', 'g');

$.fn.automaticDirection = function () {
    for (var i = 0; i < this.length; i++) {
        var value = $(this[i]).val();
        if (value == '')
            value = $(this[i]).text();
        if (value != '') {
            var rtls = value.match(reRTL);
            if (rtls != null)
                rtls = rtls.length;
            else
                rtls = 0;

            var notrtls = value.match(reNotRTL);
            if (notrtls != null)
                notrtls = notrtls.length;
            else
                notrtls = 0;

            if (rtls > notrtls)
                $(this[i]).css('direction', 'rtl').css('text-align', 'right');
            else
                $(this[i]).css('direction', 'ltr').css('text-align', 'left');
        }
    }
};
