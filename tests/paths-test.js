const tape = require('tape');
const d3 = require('d3-selection');
const textures = require('../dist/textures');
const jsdom = require('./jsdom');

const template = () => {
	const texture = textures.paths();
	const document = jsdom('<svg></svg>');
	const svg = d3.select(document).select('svg');
	const defs = svg.append('defs');
	return {svg, defs, texture};
};

tape(
	'defs.call(texture) append a node <defs>',
	t => {
		const {svg, defs, texture} = template();
		defs.call(texture);
		t.ok(!svg.select('defs').empty());
		t.end();
	}
);

tape(
	'defs.call(texture) append a node <pattern>',
	t => {
		const {svg, defs, texture} = template();
		defs.call(texture);
		t.ok(!svg.select('defs').select('pattern').empty());
		t.end();
	}
);

tape(
	'defs.call(texture) append a node <pattern> with the id attribute',
	t => {
		const {svg, defs, texture} = template();
		defs.call(texture);
		t.notEqual(svg.select('defs').select('pattern').attr('id'), '');
		t.end();
	}
);

tape(
	'defs.call(texture) append a node <pattern> with the patternUnits attribute set to userSpaceOnUse',
	t => {
		const {svg, defs, texture} = template();
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').attr('patternUnits'), 'userSpaceOnUse');
		t.end();
	}
);

tape(
	'defs.call(texture) append a node <pattern> with the attributes width and height set to 20',
	t => {
		const {svg, defs, texture} = template();
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').attr('width'), '20');
		t.equal(svg.select('defs').select('pattern').attr('height'), '20');
		t.end();
	}
);

tape(
	'texture.lines() append a node <path> with some default attributes',
	t => {
		const {svg, defs, texture} = template();
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('stroke-width'), '2');
		t.equal(path.attr('stroke'), '#343434');
		t.equal(path.attr('shape-rendering'), 'auto');
		t.equal(path.attr('stroke-linecap'), 'square');
		t.equal(path.attr('d'), 'M 5,15l5,-10l5,10');
		t.end();
	}
);

tape(
	'texture.heavier() doubles the strokeWidth',
	t => {
		const {svg, defs, texture} = template();
		texture.heavier();
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').select('path').attr('stroke-width'), '4');
		t.end();
	}
);

tape(
	'texture.heavier(3) changes strokeWidth to strokeWidth * 2 * 3',
	t => {
		const {svg, defs, texture} = template();
		texture.heavier(3);
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').select('path').attr('stroke-width'), '12');
		t.end();
	}
);

tape(
	'texture.lighter() divides the strokeWidth by 2',
	t => {
		const {svg, defs, texture} = template();
		texture.lighter();
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').select('path').attr('stroke-width'), '1');
		t.end();
	}
);

tape(
	'texture.lighter(2) changes radius to strokeWidth / (2 * 2)',
	t => {
		const {svg, defs, texture} = template();
		texture.lighter(2);
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').select('path').attr('stroke-width'), '0.5');
		t.end();
	}
);

tape(
	'texture.thinner() doubles the size',
	t => {
		const {svg, defs, texture} = template();
		texture.thinner();
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').attr('width'), '40');
		t.end();
	}
);

tape(
	'texture.thinner(3) changes size to size * 2 * 3',
	t => {
		const {svg, defs, texture} = template();
		texture.thinner(3);
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').attr('width'), '120');
		t.end();
	}
);

tape(
	'texture.thicker() divides the size by 2',
	t => {
		const {svg, defs, texture} = template();
		texture.thicker();
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').attr('width'), '10');
		t.end();
	}
);

tape(
	'texture.thicker(2) changes size to size / (2 * 2)',
	t => {
		const {svg, defs, texture} = template();
		texture.thicker(2);
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').attr('width'), '5');
		t.end();
	}
);

tape(
	'texture.background("firebrick") append a node <rect> with attribute fill equal to "firebrick"',
	t => {
		const {svg, defs, texture} = template();
		texture.background('firebrick');
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').select('rect').attr('fill'), 'firebrick');
		t.end();
	}
);

tape(
	'texture.size(40) set size to 40',
	t => {
		const {svg, defs, texture} = template();
		texture.size(40);
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 10,30l10,-20l10,20');
		t.end();
	}
);

tape(
	'texture.shapeRendering("crispEdges") set shape-rendering to crispEdges',
	t => {
		const {svg, defs, texture} = template();
		texture.shapeRendering('crispEdges');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('shape-rendering'), 'crispEdges');
		t.end();
	}
);

tape(
	'texture.stroke("red") set stroke to red',
	t => {
		const {svg, defs, texture} = template();
		texture.stroke('red');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('stroke'), 'red');
		t.end();
	}
);

tape(
	'texture.strokeWidth(4) set stroke-width to 4',
	t => {
		const {svg, defs, texture} = template();
		texture.strokeWidth(4);
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('stroke-width'), '4');
		t.end();
	}
);

tape(
	'texture.id("xyz") set pattern id to xyz',
	t => {
		const {svg, defs, texture} = template();
		texture.id('xyz');
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').attr('id'), 'xyz');
		t.end();
	}
);

tape(
	'texture.url() returns a string with the pattern id',
	t => {
		const {defs, texture} = template();
		texture.id('xyz');
		defs.call(texture);
		t.equal(texture.url(), 'url(#xyz)');
		t.end();
	}
);

tape(
	'texture.stroke("black").strokeWidth(5) set stroke to black and strokeWidth to 5',
	t => {
		const {svg, defs, texture} = template();
		texture.stroke('black').strokeWidth(5);
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('stroke'), 'black');
		t.equal(path.attr('stroke-width'), '5');
		t.end();
	}
);

tape(
	'texture.d("squares") set squared path',
	t => {
		const {svg, defs, texture} = template();
		texture.d('squares');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 5 5 l 10 0 l 0 10 l -10 0 Z');
		t.end();
	}
);

tape(
	'texture.size(80).d("caps") set caps path',
	t => {
		const {svg, defs, texture} = template();
		texture.size(80).d('caps');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 20,60l20,-40l20,40');
		t.end();
	}
);

tape(
	'texture.d("hexagons") set hexagons path and set width and height',
	t => {
		const {svg, defs, texture} = template();
		texture.d('hexagons');
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').attr('width'), '60');
		t.end();
	}
);

tape(
	'texture.opacity(0.3) set opacity for everything to 0.3',
	t => {
		const {svg, defs, texture} = template();
		texture.opacity(0.3);
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('fill-opacity'), '0.3');
		t.equal(path.attr('stroke-opacity'), '0.3');
		t.end();
	}
);

tape(
	'texture.fillOpacity(0.3) set opacity for fill to 0.3, but not stroke',
	t => {
		const {svg, defs, texture} = template();
		texture.fillOpacity(0.3);
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('fill-opacity'), '0.3');
		t.notEqual(path.attr('stroke-opacity'), '0.3');
		t.end();
	}
);

tape(
	'texture.strokeOpacity(0.3) set opacity for stroke to 0.3, but not fill',
	t => {
		const {svg, defs, texture} = template();
		texture.strokeOpacity(0.3);
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.notEqual(path.attr('fill-opacity'), '0.3');
		t.equal(path.attr('stroke-opacity'), '0.3');
		t.end();
	}
);

tape(
	'texture.backgroundOpacity(0.4) append a node <rect> with background fill and fillOpacity attr',
	t => {
		const {svg, defs, texture} = template();
		texture.background('firebrick');
		texture.backgroundOpacity(0.4);
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').select('rect').attr('fill-opacity'), '0.4');
		t.end();
	}
);
