# interesting.md

this file contains interesting litterature or commands



## react

https://fr.reactjs.org/docs/faq-structure.html


### Unicode data url :

https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt

and for keys :
https://gist.github.com/bwoods/e5bd964fc360ba5e920e

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

```js
function processData(data) {
  // taking care of data
}

function handler() {
  if(this.status == 200 &&
    this.responseXML != null &&
    this.responseXML.getElementById('test').textContent) {
    // success!
    processData(this.responseXML.getElementById('test').textContent);
  } else {
    // something went wrong
    …
  }
}

var client = new XMLHttpRequest();
client.onload = handler;
client.open("GET", "unicorn.xml");
client.send();
```
from https://xhr.spec.whatwg.org/ 

```js
const getData=()=>{
     fetch('data.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
         }
        )
         .then(function(response){
            console.log(response)
            return response.json();
          })
           .then(function(myJson) {
              console.log(myJson);
            });
      }
      useEffect(()=>{
        getData()
      },[])
```
from https://stackoverflow.com/a/64195120/7162648