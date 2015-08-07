# Select Version 2

Responsive, beautiful SELECT for [AngularJS](http://angularjs.org) applications.


# Getting started

### Dependencies

This repository contains **native AngularJS directives** to render a select face. The **only required dependencies** are: 

*   [AngularJS](http://angularjs.org) (tested with 1.3.14 although it probably works with older versions)

### Installation

Files can be downloaded [downloaded from Github](https://github.com/yashdeeph709/selectv2).
and copy the files from `dist/`. Then add the sources to your code (adjust paths as needed) after 
adding the dependencies for Angular first:

```html
<script src="angular/angular.min.js"></script>
<script src="dist/selectv2.js"></script>
```

The good news is that the overall size is very small: &lt; 1kb for all directives (~1kb with gzip compression!)


As soon as you've got all the files downloaded and included in your page you just need to declare a dependency on the `SelectV2` [module](http://docs.angularjs.org/guide/module):   

```javascript
angular.module('myModule', ['SelectV2']);
```

### CSS

You need to include a link to the css file in your page.

```html
<link rel="stylesheet" href="css/bootstrap-select.css">
```

<!---### Options

There are several options that you can set as attributes on the directive element

1.  `start-time` : init clock with specific time in milliseconds, (default: `undefined`)
2.  `digital-format` : digital clock format in [angular date filter format](https://docs.angularjs.org/api/ng/filter/date) (default: `'HH-mm-ss'`). Pass as string enclosed in single quate
3.  `gmt-offset` : shows time for the given [GMT offset](http://en.wikipedia.org/wiki/List_of_UTC_time_offsets) in clock, (default: `false`, shows local time) example: India -> 5.30, Singapore -> 8 , venezula -> -4.30, Nepal -> 5.45
4.  `show-digital`: shows digital clock, (default: `true` if both show-analog &show-digital are not set)
5.  `show-analog` : shows analog clock, (default: `true` if both show-analog &show-digital are not set)
6.  `show-gmt-info` : shows GMT offset value, (default: `false`)
7.  `theme` : analog clockface theme, (default: `light`)
--->

## Browser compatibility

For IE8 and older browsers, you will need SVG polyfills and Shims


# Example
In the below code options variable should be an array of strings in your current scope
## Markup

```html
<selectv2 data-options="options"></selectv2>
```

## Reactive & Responsive

angular clock widget is reactive and fully responsive


# Issues
 
Please check if issue exists and otherwise open issue in [github](https://github.com/yashdeeph709/selectv2/issues?state=open)

**Please add a link to a plunker, jsbin, or equivalent.** 

<!---# Contributing
 
Pull requests welcome!

1. Fork the repo
2. Make your changes
3. Write unit tests under test directory
4. Update examples under examples directory
5. Run tests: `npm test`, `gulp test`
6. Submit pull request
--->
## Contributors

Thank you!


# Author

Designed and built by [Yashdeep Hinge](https://github.com/jtblin)

[Issues](https://github.com/yashdeeph709/selectv2/issues?state=open)

Inspired from [this demo](http://silviomoreto.github.io/bootstrap-select/).

# License

selectv2.js is available under the [MIT license](http://opensource.org/licenses/MIT).
