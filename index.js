'use strict';

const Router = require('find-my-way');

module.exports = class KoaRouter extends Router {
    _on(method, path, opts, handler, store) {
        return super._on(method, path, opts, function (req, res, params, store) {
            const { ctx, next } = this;

            ctx.params = params;
            ctx.store = store;

            return handler(ctx, next);
        }, store);
    }

    _defaultRoute(req, res, { ctx, next }) {
        if (this.defaultRoute) {
            return this.defaultRoute(ctx, next);
        }

        return next();
    }

    lookup() {
        const lookup = super.lookup.bind(this);
        return function (ctx, next) {
            return lookup(ctx.req, ctx.res, { ctx, next });
        }
    }
}
