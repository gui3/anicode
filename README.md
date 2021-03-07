# anicode

> unicode lexicon

## use

### to find unicode characters

To access gui3/anicode, just follow the white rabbit :

🐰🐰 ...url not available for now 🐰🐰

gui3/anicode is just a little website
on which you can search 
[the unicode official character database (UCD)](https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt)
using keywords to find specific unicode characters.

If you want to know more about **unicode** in general,
here's a [worthy lecture about unicode by Dmitri Pavlutin (on his blog)](https://dmitripavlutin.com/what-every-javascript-developer-should-know-about-unicode/)

### to see how it's made

The original idea was to make a static web page,
but since the data has to be fetched from an external website
and because cross origin policy bla bla bla ...
It had to get a minimal express server.

This server is in charge of fetching the data 
from https://www.unicode.org,
to process it into a valid json,
and to transfer it to the main page.

I could have done the fetching and processing in a separate script,
since unicode data don't change so often,
but i want to train so let's do it.

## diclaimer

There is already at least one project
with the same name as the present project ([igalic/anicode](https://github.com/igalic/anicode))

The present project (gui3/anicode)
is just a little web page **made for fun
and for the sake of learning**,
with no intent on cutting anyone's grass under one's feet.

I doubt there will be any problem about such a little project,
but in any case of complains, please contact me.
