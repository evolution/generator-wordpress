# generator-wordpress

> Yeoman generator for [Genesis WordPress][1].

## Dependencies

First install [NodeJS][3] **v0.10**, then [Yeoman][2] **v1** & [Bower][4] **v1.2.**:

    $ npm install -g yo bower


*(You can check your versions by running `node --version`, `npm --version`, etc.)*

## Installation

Install [Genesis WordPress Generator][1]:

    $ npm install generator-genesis-wordpress

*If you get EMFILE issues, try running: `ulimit -n 4096`*

## Getting Started

**If you haven't done so already, [create & push your project to Github][5].**

Run the [Genesis WordPress Generator][1]:

    $ yo genesis-wordpress

Follow the prompts, and you'll have a working WordPress install!

Next, see the documentation for [Genesis WordPress][1].**


## Changelog

- v0.2.8 – Fix regex match when sending `no_robots.txt`
- v0.2.7 – *Always* download requested WordPress version
- v0.2.6 – Install `pycurl`
- v0.2.5 – Install both `python-software-properties` and `software-properties-common`
- v0.2.4 – Fix owner (deploy) for id_rsa & id_rsa.pub
- v0.2.3 – Fix bug with copying `id_rsa` and `id_rsa.pub`
- v0.2.2 – Use `fs-extra` to fix recursive copy issue
- v0.2.1 – Remove Wrench because of bugs with overwriting existing folders
- v0.2.0 – use [Genesis WordPress][1]#`0.2.*`
- v0.1.7 – Add `old.rb` template
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
[5]: https://help.github.com/articles/create-a-repo
