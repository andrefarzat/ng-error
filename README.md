ng-error
========

Angular ngError directive

### Install via bower and usage in browser

```sh
bower install ng-error --save
```

Add a `<script>` to your html

```html
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/ng-error/ng-error.js"></script>
...
<script>
// add 'ngError' as dependency to your module
var yourModule = angular.module("yourModule", ['ngError']);
</script>
```

### Install via npm and usage with browserify

```sh
npm install ng-error --save
```

```js
// Require it in your module
require('ng-error/ng-error');

// Then use with a angular
var yourModule = angular.module('yourModule', ['ngError']);
```

### Usage
```html
<!-- You can add the `ng-error` directive in `<img>` tags -->
<img src="beautifulImage.jpg" ng-error="someFunction()" alt="" />
```

If you intend to use it with video/audio:

```html
<video ng-src="{{someUrl}}">
  <source src="dynamicsearch.mp4" type="video/mp4"></source>
  <!-- on the only/last source -->
  <source src="otherdynamicsearch.avi" type="video/avi" ng-error="handleError()"></source>
</video>
```
