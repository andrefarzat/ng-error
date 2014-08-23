ng-error
========

Angular ngError directive


### Installing

Install via `bower`

```sh
bower install ng-error --save
```

Add a `<script>` to your html

```html
<script src="bower_components/ng-error/ng-error.js"></script>
```

### Usage

```js
// add 'ngError' as dependency to your module
var yourModule = angular.module("yourModule", ['ngError']);
```

You can add the `ng-error` directive in `<img>` tags
```html
<img src="beautifulImage.jpg" ng-error="someFunction()" alt="" />
```
