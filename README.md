# generator-wordpress

> Yeoman generator for [Genesis WordPress][1].


## Dependencies

- [Yeoman][2]

```
$ npm install -g yo
```


## Installation

```
$ npm install -g generator-genesis-wordpress
```

*If you get EMFILE issues, try running: `ulimit -n 4096`*


## Getting Started

**The full documentation can be found with [Genesis WordPress][1].**


## Changelog

- v0.1.6 – Use `WP_ENV` instead of `Genesis::isDebug()`
- v0.1.5 – Use [Genesis WordPress][1]#`0.1.*`
- v0.1.4 – Use existing `deploy_to` path on staging
- v0.1.3 – Screw it. Reverted and just renamed any `.`-prefixed file
- v0.1.1 – Add *another* `.npmignore` (isaacs/npm#1862)
- v0.1.1 – Add `.npmignore`
- v0.1.0 – Initial release


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[1]: https://github.com/genesis/wordpress/
[2]: http://yeoman.io/
