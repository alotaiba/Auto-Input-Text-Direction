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
var reRTL     = new RegExp('^[' + controlChars + ']*[' + rtlChars + ']');
var reControl = new RegExp('^[' + controlChars + ']*$');

function detectDirection(input)
{
	//Get the value of the input text
	var value = input.value;

	//Change the direction to rtl if the value matches one of the Arabic characters
	if ( value.match(reRTL) )
	{
		input.dir = 'rtl';
	}

	//Don't do anything for control and punctuation characters
	else if( value.match(reControl) )
	{
		return false;
	}

	//Change the direction to ltr for any other character that is not Arabic, or control.
	else
	{
		input.dir = 'ltr';
	}
}
