# koa-find-my-way

[Router](https://github.com/delvedor/find-my-way) middleware for [koa](https://github.com/koajs/koa).

## Installation

```sh
$ npm install koa-find-my-way
```

## Usage

```js
const Koa = require('koa');
const Router = require('koa-find-my-way');

const app = new Koa();
const router = new Router();

router.get('/:name', async (ctx, next) => {
    const { params, store } = ctx;
    ctx.body = 'Hello ' . (params['name'] || 'World');
});

app.use(router.lookup());

app.listen(3000);

```

## License

This software is under the MIT license. See the complete license in:

```
LICENSE
```
