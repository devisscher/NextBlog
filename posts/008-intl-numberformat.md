---
date: 1512572774105
title: "JavaScript: Intl.NumberFormat"
file: "007-intl-numberformat.md"
number: 008
draft: false
tags: 
    - JavaScript
---

A little bit of JavaScript never hurt anyone. Or has it? 

`Intl.NumberFormat` is a built in constructor. `Intl` has a gambit of format methods which help with special cases where locale changes the way strings, numbers or dates should be displayed. 

There are many ways to use `Intl` but I want to focus on the following: 

1. Getting locale from the browser
2. Setting correct options for different styles and precision levels 
3. Finally displaying to the page. 

## Getting the locale from the browser

[w3c states](https://www.w3.org/International/questions/qa-accept-lang-locales):

> For a first contact, using the Accept-Language value to infer regional settings may be a good starting point, but be sure to allow them to change the language as needed and specify their cultural settings more exactly if necessary. Store the results in a database or a cookie for later visits. 

First of all lets get the users locale. There are different ways to obtain this and certain browsers have different methods available. So to get the most accurate you can use the following: 

```JavaScript
var language = navigator.languages
            ? navigator.languages[0]
            : (navigator.language || navigator.userLanguage)

```

## Options
Once we get the language we need to provide the method with an options object, we'll use `{style: percent, maximumFractionDigits: 1}`, this indicates that we want a number as a percentage and that we want the maximum number of digits after the decimal to be 1. So our value will display 50.1% if .1 is present.

## Usage

With this you can use `Intl.NumberFormat` like so:

```JavaScript
new Intl.NumberFormat(language, { style: 'percent', maximumFractionDigits: 1 }).format(percentage)
```

Now you can safely display numbers to users in any locale. But as per W3C's statement, you should allow your users to change the language as needed. To do this you could use `localStorage` perhaps.

```

```

## References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
- https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language