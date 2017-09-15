'use strict'

const express = require('express');
const router = express.Router();
const path = require('path');

var rootPath = path.join(__dirname, '..', '..');
var browserPath = path.join('client');
var buildPath = path.join(rootPath, 'build');
var nodeModulesPath = path.join('node_modules');

router.use(express.static(browserPath));
router.use(express.static(buildPath));
router.use(express.static(nodeModulesPath));

module.exports = router;
