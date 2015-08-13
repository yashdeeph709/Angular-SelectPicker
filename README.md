
# Angular-SelectPicker

Responsive, beautiful SELECT for [AngularJS](http://angularjs.org) applications.
Try a [demo](http://yashdeeph709.github.io/Angular-SelectPicker)

# Getting started

### Dependencies

This repository contains **native AngularJS directives** to render a select face. The **only required dependencies** are: 

*   [AngularJS](http://angularjs.org) (tested with 1.3.14 although it probably works with older versions)

### Installation

Files can be downloaded [downloaded from Github](https://github.com/yashdeeph709/Angular-SelectPicker).
and copy the files from `dist/`. Then add the sources to your code (adjust paths as needed) after 
adding the dependencies for Angular first:

```html
<script src="angular/angular.min.js"></script>
<script src="dist/Angular-SelectPicker.js"></script>
```

The good news is that the overall size is very small: &lt; 1kb for all directives (~1kb with gzip compression!)


As soon as you've got all the files downloaded and included in your page you just need to declare a dependency on the `Angular-SelectPicker` [module](http://docs.angularjs.org/guide/module):   

```javascript
angular.module('myModule', ['Angular-SelectPicker']);
```

### CSS

You need to include a link to the css file in your page.

```html
<link rel="stylesheet" href="css/bootstrap-select.css">
```

### Options

There are several options that you can set as attributes on the directive element

1.  `data-options` : options to be shown for select picker options
2.  `data-livesearch` : true for making livesearch on
3.  `data-catagories` : options in options array that are catagory marker
4.  `data-multi` : it makes this control as select with multiple attribute
5.  `data-maxopt`: it tells how many items canbe selected in a multi based select picker.

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
 
Please check if issue exists and otherwise open issue in [github](https://github.com/yashdeeph709/Angular-SelectPicker/issues?state=open)

**Please add a link to a plunker, jsbin, or equivalent also discuss the usecase.** 

# Contributing
 
Pull requests welcome!

1. Fork the repo
2. Make your changes
3. Submit pull request

## Contributors
Thank you!

# Author

Designed and built by [Yashdeep Hinge](https://github.com/jtblin)

[Issues](https://github.com/yashdeeph709/Angular-SelectPicker/issues?state=open)

Inspired from [this demo](http://silviomoreto.github.io/bootstrap-select/).

# License

selectv2.js is available under the [MIT license](http://opensource.org/licenses/MIT).
