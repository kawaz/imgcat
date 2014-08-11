#!/usr/bin/env node
var tc = require('ansi-canvas');
//var Canvas = require('canvas');
var Canvas = require('ansi-canvas/node_modules/canvas');
var Image = Canvas.Image;

// create terminal <canvas>
var canvas = tc();
var ctx = canvas.getContext('2d');

var imageFile = process.argv[2] || "/dev/stdin";
var image = require('fs').readFileSync(imageFile);
var img = new Image();
img.src = image;

var scale = 1 / Math.max(img.width/canvas.width, img.height/canvas.height);
var w = Math.floor(img.width * scale);
var h = Math.floor(img.height * scale);

//console.log([img, typeof img, img instanceof Canvas.Image]); process.exit(0);

ctx.drawImage(img, 0, 0, w, h);

canvas.render();
