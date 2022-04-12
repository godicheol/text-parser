(function() {
    'use strict';

    var separators = {
        "{}": ["{", "}"],
        "[]": ["[", "]"],
        "()": ["(", ")"],
    }

    var parseString = function(str, sep) {
        var parsedWords = [],
            start,
            end = 0,
            startChar = "{",
            endChar = "}",
            state = 1; // 1: start 2: end
            
        if (typeof(seq) !== "undefined") {
            var _sep = Object.keys(separators).find(function(el) {
                return el.indexOf(sep) > -1;
            });
    
            if (!_sep) {
                console.error("Separator not found");
                return false;
            }
    
            startChar = separators[_sep][0];
            endChar = separators[_sep][1];
        }

       
        
        for (var i = 0; i < str.length; i++) {
            var char = str[i];
            var isStart = char == startChar;
            var isEnd = char == endChar;

            if (state == 1 && isStart) {
                start = i;
                state = 2;
            }
            if (state == 2 && isStart) {
                start = i;
                state = 2;
            }
            if (state == 2 && isEnd) {
                parsedWords.push({
                    isParsed: false,
                    text: str.slice(end, start)
                });
                parsedWords.push({
                    isParsed: true,
                    text: str.slice(start + 1, i)
                });

                start = undefined;
                end = i + 1;
                state = 1;
            }
        }

        if (end < str.length) {
            parsedWords.push({
                isParsed: false,
                text: str.slice(end, str.length)
            });
        }

        return parsedWords;
    }

    var joinArray = function(parsedArr, keyObj) {
        var joinedString = "";
        for (var i = 0; i < parsedArr.length; i++) {
            var { text, isParsed } = parsedArr[i];

            if (!isParsed) {
                joinedString += text;
                continue;
            }

            if (typeof(keyObj[text]) !== "undefined") {
                joinedString += keyObj[text];
            }
        }

        return joinedString;
    }

    var exports = {
        parse: parseString,
        join: joinArray
    }

    if (typeof(window.textParser) === "undefined") {
        window.textParser = exports;
    }
})();