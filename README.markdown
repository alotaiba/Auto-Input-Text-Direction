#    Auto Input Text Direction

A jQuery plugin that gives your input controls the ability to change direction according to the input language by the user, so when he writes Arabic text the input will change its text direction to `rtl` (right to left), and when he writes in any other langugage the input will change its text direction to `ltr` (left to right).

Arabic is not the only language that is written from right to left, you can check this list for [right to left languages](http://en.wikipedia.org/wiki/Right-to-left), and the code can be easily extended to support these languages.

This project is a fork from the original project [here]() that introduces the following changes:
*    Direction will be changed according to the number of characters, so if the Arabic characters are more than other characters the text will change its direction to `rtl`, but if the Arabic characters are less than other characters the text will be `ltr`.
*    A jQuery plugin that makes it easy to use this library with your JavaScript code:

```javascript
$('input.bidirectional').automaticDirection();
```

#    License
This work is licensed under [GNU General Public License v3](http://www.gnu.org/licenses/gpl.txt).

#    Contact
*    Abd Allah Diab (mpcabd)
*    Email: 	mpcabd {AT} G Mail (dot) COM
*    Blog:	http://mpcabd.igeex.biz
