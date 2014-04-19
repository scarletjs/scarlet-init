lite
======================

> Awesome Scarlet Plugin

##Install

  `npm install lite`

## Getting Started
This plugin requires Scarlet `~0.5.11`

If you haven't used [Scarlet](https://github.com/scarletjs/scarlet) before, be sure to check out the [Documentation](https://github.com/scarletjs/scarlet).  To use this plugin perform the following:

Install scarlet
```shell
npm install scarlet --save
```

Install plugin
```shell
npm install lite --save
```

Once the plugin has been installed, you can use it in your application as follows:

```js
//load scarlet
var Scarlet = require('scarlet');

//Initialize scarlet with the plugin
var scarlet = new Scarlet('lite');
var lite = scarlet.plugins.lite;
```
