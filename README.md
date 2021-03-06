# anicode

> unicode lexicon

## use

### to find unicode characters

To access gui3/anicode, just follow the white rabbit :

🐰🐰 https://gui3.github.io/lexi-code/ 🐰🐰

gui3/anicode is just a static web page
on which you can search 
[the unicode official character database (UCD)](https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt)
using keywords to find specific unicode characters.

If you want to know more about unicode in general,
here's a [worthy lecture about unicode by Dmitri Pavlutin (on his blog)](https://dmitripavlutin.com/what-every-javascript-developer-should-know-about-unicode/)

### to see how it's made

gui3/anicode uses the UCD data,
but since it's a static web page
it cannot fetch the data by itself (cross-origin, bla bla bla)

So you will find a .bat (windows, sorry) script in the `scripts` folder
that pulls the raw data from https://www.unicode.org
and saves it in this text file : `public/data/ucd.txt`

Then, the static page's javascript (in `public/js/getData.js`)
will locally fetch the above text file
and parse it into json

Then ... some magic in `public/js/search.js` and VOILA,
you get the unicode lexicon.


## diclaimer

There is already at least one project
with the same name as the present project ([igalic/anicode](https://github.com/igalic/anicode))

The present project (gui3/anicode)
is just a little static page **made for fun
and for the sake of learning**,
with no intent on cutting anyone's grass under one's feet.

I doubt there will be any problem about such a little project,
but in any case of complains, please contact me.
