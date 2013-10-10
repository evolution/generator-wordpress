# generator-wordpress

> Yeoman generator for [Genesis WordPress][1].

## Dependencies

First install [NodeJS][3], then [Yeoman][2] & [Bower][4]:

    $ npm install -g yo bower


## Installation

Install [Genesis WordPress Generator][1]:

    $ npm install generator-genesis-wordpress

*If you get EMFILE issues, try running: `ulimit -n 4096`*

## Getting Started

Run the [Genesis WordPress Generator][1]:

    $ yo genesis-wordpress

Follow the prompts, and you'll have a working WordPress install!

Next, see the documentation for [Genesis WordPress][1].**


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
[3]: http://nodejs.org/
[4]: http://bower.io/
