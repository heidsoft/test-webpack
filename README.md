# test-webpack
test-webpack

```
http://zhizhi.betahouse.us/2015/09/27/yi-webpackde-demos/
npm install babel-loader babel-core babel-preset-es2015 --save-dev
```

##一个入口文件
```
<html>
  <body>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
</html>

// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};

```

##多个入口文件
```
// main1.js
document.write('<h1>Hello World</h1>');

// main2.js
document.write('<h2>Hello Webpack</h2>');


<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <!--<script type="text/javascript" src="bundle.js" charset="utf-8"></script>-->
        <script type="text/javascript" src="bundle1.js" charset="utf-8"></script>
        <script type="text/javascript" src="bundle2.js" charset="utf-8"></script>
    </body>
</html>

module.exports = {
    entry: {
        bundle1: './main1.js',
        bundle2: './main2.js'
    },
    output: {
        filename: '[name].js'   //  name 是 entry 的key值
    }
};

```