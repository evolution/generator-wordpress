# generator-wordpress

> Yeoman generator for [Genesis WordPress][1].


## Documentation

**See [Genesis WordPress][1].**


## Generator Options

### `genesis-path`

*Defaults to `~/.cache/yeoman/genesis/wordpress/{{ tag }}`*

Location of local [Genesis WordPress][1] library to use generators from.
This is useful when wanting to work on [Genesis WordPress][1]'s generators
locally.

```
$ yo genesis-wordpress --genesis-path=~/Sites/genesis/wordpress
```


### `genesis-version`

*Defaults to latest version of [Genesis WordPress][1]*

```
$ yo genesis-wordpress --genesis-version=v0.2.39
```

## Changelog

- v1.0.5 - Updated github-latest args after organization move
- v1.0.4 - Moved across organizations in github and updated urls
- v1.0.3 – Add `genesis-path` and `genesis-version` options
- v1.0.2 – Fix issue with `this.resolved` path in downloaded generator
- v1.0.1 – Cleanup old files
- v1.0.0 – **Auto-updating** based on [Genesis WordPress](https://github.com/genesis/wordpress)!
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

[1]: https://github.com/evolution/genesis-wordpress/
[2]: http://yeoman.io/
[3]: http://nodejs.org/
[4]: http://bower.io/
[5]: https://help.github.com/articles/create-a-repo
