# interesting.md

this file contains interesting litterature or commands

### Unicode data url :

https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt


### fetch a local txt in js

```js
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

```
from https://stackoverflow.com/a/14446538/7162648