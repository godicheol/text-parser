# text-parser

```javascript
    var str = "abc{k}efg";
    var parsedStr = textParser.parse(str, obj);
    // [
    //     {
    //         "isParsed": false,
    //         "text": "abc"
    //     },
    //     {
    //         "isParsed": true,
    //         "text": "k"
    //     },
    //     {
    //         "isParsed": false,
    //         "text": "efg"
    //     }
    // ]

    var obj = {
        k: "d"
    }
    var joinedStr = textParser.join(parsedStr, obj);
    // 
    // abc_d_efg
    // 

```