# text-parser

```html
<script src="dist/text-parser.js"></script>
```
```javascript
var separator = "{}";
var str = "abc{k}efg";
var obj = {
    k: "d"
}
var parsedStr = textParser.parse(str, separator); // Array
var joinedStr = textParser.join(parsedStr, obj); // "abcdefg"
```