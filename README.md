# GrapesJS Drupal/Rest remote content block

Remote content newsletter component for GrapesJS Editor

<p align="center"><img src="https://artf.github.io/grapesjs/img/remoteItemList.gif" alt="GrapesJS" align="center"/></p>
<br/>

# [Demo](http://grapesjs.com/demo.html)




## Summary

* Plugin name: `gjs-component-remoteItemList`
* Components: `remoteItemList`
* Blocks: `remoteItemList`



## Options

* `blocks` Which blocks to add, default: `['remoteItemList']` (all)
* `defaultStyle` Add default style to blocks, default: true
* `feedUrl` The url where to find the articles to create a newsletter for eg. 'https://my-newsletter-feed.com/feed.json', default: ''


## Download

* `npm i grapesjs-block-drupal-content-feed` or `yarn add grapesjs-block-drupal-content-feed`





## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-block-drupal-content-feed.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      plugins: ['grapesjs-block-drupal-content-feed'],
      pluginsOpts: {
        'grapesjs-block-drupal-content-feed': {/* ...options */}
      }
  });
</script>
```





## Development

Clone the repository

```sh
$ git clone https://github.com/artf/grapesjs-component-countdown.git
$ cd grapesjs-component-countdown
```

Install it

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build before the commit. This will also increase the patch level version of the package

```sh
$ npm run build
```





## License

BSD 3-Clause
