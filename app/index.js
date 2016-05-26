'use strict';

var async   = require('async');
var chalk   = require('chalk');
var latest  = require('github-latest');
var path    = require('path');
var util    = require('util');
var yeoman  = require('yeoman-generator');


var WordpressGenerator = function(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(WordpressGenerator, yeoman.generators.Base);

WordpressGenerator.prototype.getGenesisVersion = function() {
  if (this.options['genesis-version']) {
    this.log.info('Defaulting Genesis version to ' + chalk.yellow(this.options['genesis-version']));

    return false;
  }

  var done = this.async();

  latest('evolution', 'genesis-wordpress', function(err, tag) {
    if (err) {
      throw err;
    }

    this.options['genesis-version'] = tag;

    done();
  }.bind(this));
};

WordpressGenerator.prototype.downloadLatest = function() {
  if (this.options['genesis-path']) {
    return false;
  }

  var done = this.async();

  this.log.info('Downloading Genesis WordPress (' + chalk.yellow(this.options['genesis-version']) + ')...');

  this.remote('genesis', 'wordpress', this.options['genesis-version'], function(err, remote) {
    if (err) {
      throw err;
    }

    this.options['genesis-path'] = remote.cachePath;

    done();
  }.bind(this));
};

WordpressGenerator.prototype.normalizeCachePath = function() {
  this.options['genesis-path'] = path.normalize(this.options['genesis-path']);

  this.log.info('Using Genesis WordPress at ' + chalk.yellow(this.options['genesis-path']) + '...');
};

WordpressGenerator.prototype.installLatest = function() {
  var done  = this.async();
  var cwd   = process.cwd();

  this.log.info('Installing dependencies...');

  process.chdir(this.options['genesis-path']);

  this.npmInstall(this.options['genesis-path'], ['--quiet'], function() {
    process.chdir(cwd);
    done();
  });
};

WordpressGenerator.prototype.runLatest = function() {
  var Genesis = require(this.options['genesis-path']);
  var options = this.options;

  options.resolved = require.resolve(this.options['genesis-path']);

  this.log.info('Running generator...');

  new Genesis(this.args, this.options, this.config).run();
};

module.exports = WordpressGenerator;
