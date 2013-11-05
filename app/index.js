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

WordpressGenerator.prototype.getTag = function() {
  var done = this.async();

  latest('genesis', 'wordpress', function(err, tag) {
    if (err) {
      throw err;
    }

    this.tag = tag;

    done();
  }.bind(this));
};

WordpressGenerator.prototype.downloadLatest = function() {
  var done = this.async();

  this.log.info('Downloading Genesis WordPress (' + chalk.yellow(this.tag) + ')...');

  this.remote('genesis', 'wordpress', this.tag, function(err, remote) {
    if (err) {
      throw err;
    }

    this.cachePath = remote.cachePath;

    done();
  }.bind(this));
};

WordpressGenerator.prototype.installLatest = function() {
  var done  = this.async();
  var cwd   = process.cwd();

  this.log.info('Installing dependencies...');

  process.chdir(this.cachePath);

  this.npmInstall(this.cachePath, ['--quiet'], function() {
    process.chdir(cwd);
    done();
  });
};

WordpressGenerator.prototype.runLatest = function() {
  var Genesis = require(this.cachePath);
  var options = this.options;

  options.resolved = require.resolve(this.cachePath);

  this.log.info('Running generator...');

  new Genesis(this.args, this.options, this.config).run();
};

module.exports = WordpressGenerator;
