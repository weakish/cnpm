/**!
 * cnpm - parse_argv.js
 *
 * Copyright(c) cnpmjs.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 *  dead_horse <dead_horse@qq.com> (http://deadhorse.me)
 */

'use strict';

/**
 * Module dependencies.
 */

var program = require('commander');
var config = require('./config');

var argv;
module.exports = function () {
  if (argv) {
    return argv;
  }
  argv = program
    .option('-r, --registry [registry]', 'registry url, default is ' + config.cnpmRegistry)
    .option('--disturl [disturl]', 'dist url for node-gyp, default is ' + config.disturl)
    .option('-w, --registryweb [registryweb]', 'website url, default is ' + config.cnpmHost)
    .option('-c, --cache [cache]', 'cache folder, default is ' + config.cache)
    .option('-u, --userconfig [userconfig]', 'userconfig file, default is ' + config.userconfig)
    .option('-y, --yes', 'yes all confirm')
    .parse(process.argv);

  argv.registry = argv.registry || config.cnpmRegistry;
  argv.disturl = argv.disturl || config.disturl;
  argv.registryweb = argv.registryweb || config.cnpmHost;
  argv.cache = argv.cache || config.cache;
  argv.userconfig = argv.userconfig || config.userconfig;
  return argv;
};
