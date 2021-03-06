const tape = require('tape');
const d3 = require('d3-selection');
const textures = require('../dist/textures');
const jsdom = require('./jsdom');

const template = () => {
	const texture = textures.lines();
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
		t.equal(path.attr('d'), 'M 0,20 l 20,-20 M -5,5 l 10,-10 M 15,25 l 10,-10');
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
		t.equal(path.attr('d'), 'M 0,40 l 40,-40 M -10,10 l 20,-20 M 30,50 l 20,-20');
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
	'texture.size(40).strokeWidth(5) set size to 30 and strokeWidth to 5',
	t => {
		const {svg, defs, texture} = template();
		texture.size(40).strokeWidth(5);
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 0,40 l 40,-40 M -10,10 l 20,-20 M 30,50 l 20,-20');
		t.equal(path.attr('stroke-width'), '5');
		t.end();
	}
);

tape(
	'texture.orientation("vertical") set orientation to vertical',
	t => {
		const {svg, defs, texture} = template();
		texture.orientation('vertical');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 10, 0 l 0, 20');
		t.end();
	}
);

tape(
	'texture.orientation("0/8") set orientation to 0/8',
	t => {
		const {svg, defs, texture} = template();
		texture.orientation('0/8');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 10, 0 l 0, 20');
		t.end();
	}
);

tape(
	'texture.orientation("1/8") set orientation to 1/8',
	t => {
		const {svg, defs, texture} = template();
		texture.size(40).orientation('1/8');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 10,0 l 20,40 M -10,0 l 20,40 M 30,0 l 20,40');
		t.end();
	}
);

tape(
	'texture.orientation("2/8") set orientation to 2/8',
	t => {
		const {svg, defs, texture} = template();
		texture.size(80).orientation('2/8');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 0,80 l 80,-80 M -20,20 l 40,-40 M 60,100 l 40,-40');
		t.end();
	}
);

tape(
	'texture.orientation("diagonal") set orientation to diagonal',
	t => {
		const {svg, defs, texture} = template();
		texture.size(80).orientation('diagonal');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 0,80 l 80,-80 M -20,20 l 40,-40 M 60,100 l 40,-40');
		t.end();
	}
);

tape(
	'texture.orientation("3/8") set orientation to 3/8',
	t => {
		const {svg, defs, texture} = template();
		texture.size(40).orientation('3/8');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 0,30 l 40,-20 M 0,10 l 40,-20 M 0,50 l 40,-20');
		t.end();
	}
);

tape(
	'texture.orientation("4/8") set orientation to 4/8',
	t => {
		const {svg, defs, texture} = template();
		texture.size(40).orientation('4/8');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 0,20 l 40,0');
		t.end();
	}
);

tape(
	'texture.orientation("horizontal") set orientation to horizontal',
	t => {
		const {svg, defs, texture} = template();
		texture.size(20).orientation('horizontal');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 0,10 l 20,0');
		t.end();
	}
);

tape(
	'texture.orientation("5/8") set orientation to 5/8',
	t => {
		const {svg, defs, texture} = template();
		texture.size(40).orientation('5/8');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 0,-10 l 40,20M 0,10 l 40,20 M 0,30 l 40,20');
		t.end();
	}
);

tape(
	'texture.orientation("6/8") set orientation to 6/8',
	t => {
		const {svg, defs, texture} = template();
		texture.size(40).orientation('6/8');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 0,0 l 40,40 M -10,30 l 20,20 M 30,-10 l 20,20');
		t.end();
	}
);

tape(
	'texture.orientation("7/8") set orientation to 7/8',
	t => {
		const {svg, defs, texture} = template();
		texture.size(40).orientation('7/8');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M -10,0 l 20,40 M 10,0 l 20,40 M 30,0 l 20,40');
		t.end();
	}
);

tape(
	'texture.orientation("xxx") defaults to vertical',
	t => {
		const {svg, defs, texture} = template();
		texture.size(40).orientation('xxx');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 20, 0 l 0, 40');
		t.end();
	}
);

tape(
	'texture.orientation("3/8", "7/8") add a couple of nodes <path>',
	t => {
		const {svg, defs, texture} = template();
		texture.size(40).orientation('3/8', '7/8');
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').selectAll('path').size(), 2);
		t.end();
	}
);

tape(
	'texture.orientation() defaults to diagonal',
	t => {
		const {svg, defs, texture} = template();
		texture.size(80).orientation();
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('d'), 'M 0,80 l 80,-80 M -20,20 l 40,-40 M 60,100 l 40,-40');
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
		t.equal(path.attr('stroke-opacity'), '0.3');
		t.end();
	}
);

tape(
	'texture.strokeOpacity(0.3) set opacity for stroke to 0.3m, but not background',
	t => {
		const {svg, defs, texture} = template();
		texture.strokeOpacity(0.3);
		texture.background('firebrick');
		defs.call(texture);
		const path = svg.select('defs').select('pattern').select('path');
		t.equal(path.attr('stroke-opacity'), '0.3');
		t.notEqual(svg.select('defs').select('pattern').select('rect').attr('fill-opacity'), '0.4');
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

