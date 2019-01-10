const tape = require('tape');
const d3 = require('d3-selection');
const textures = require('../dist/textures');
const jsdom = require('./jsdom');

const template = () => {
	const texture = textures.circles();
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
	'texture.circles() append a node <circle> with some default attributes',
	t => {
		const {svg, defs, texture} = template();
		defs.call(texture);
		const circle = svg.select('defs').select('pattern').select('circle');
		t.equal(circle.attr('fill'), '#343434');
		t.equal(circle.attr('stroke'), '#343434');
		t.equal(circle.attr('strokeWidth'), null);
		t.equal(circle.attr('r'), '2');
		t.equal(circle.attr('cx'), '10');
		t.equal(circle.attr('cy'), '10');
		t.end();
	}
);

tape(
	'texture.heavier() doubles the radius',
	t => {
		const {svg, defs, texture} = template();
		texture.heavier();
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').select('circle').attr('r'), '4');
		t.end();
	}
);

tape(
	'texture.heavier(3) changes radius to radius * 2 * 3',
	t => {
		const {svg, defs, texture} = template();
		texture.heavier(3);
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').select('circle').attr('r'), '12');
		t.end();
	}
);

tape(
	'texture.lighter() divides the radius by 2',
	t => {
		const {svg, defs, texture} = template();
		texture.lighter();
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').select('circle').attr('r'), '1');
		t.end();
	}
);

tape(
	'texture.lighter(2) changes radius to radius / (2 * 2)',
	t => {
		const {svg, defs, texture} = template();
		texture.lighter(2);
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').select('circle').attr('r'), '0.5');
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
		const circle = svg.select('defs').select('pattern').select('circle');
		t.equal(circle.attr('cx'), '20');
		t.equal(circle.attr('cy'), '20');
		t.end();
	}
);

tape(
	'texture.complement() append 4 more nodes <circles>',
	t => {
		const {svg, defs, texture} = template();
		texture.complement();
		defs.call(texture);
		t.equal(svg.select('defs').select('pattern').selectAll('circle').size(), 5);
		t.end();
	}
);

tape(
	'texture.radius(5) set radius to 5',
	t => {
		const {svg, defs, texture} = template();
		texture.radius(5);
		defs.call(texture);
		const circle = svg.select('defs').select('pattern').select('circle');
		t.equal(circle.attr('r'), '5');
		t.end();
	}
);

tape(
	'texture.fill("red") set fill to red',
	t => {
		const {svg, defs, texture} = template();
		texture.fill('red');
		defs.call(texture);
		const circle = svg.select('defs').select('pattern').select('circle');
		t.equal(circle.attr('fill'), 'red');
		t.end();
	}
);

tape(
	'texture.stroke("red") set stroke to red',
	t => {
		const {svg, defs, texture} = template();
		texture.stroke('red');
		defs.call(texture);
		const circle = svg.select('defs').select('pattern').select('circle');
		t.equal(circle.attr('stroke'), 'red');
		t.end();
	}
);

tape(
	'texture.strokeWidth(2) set stroke-width to 2',
	t => {
		const {svg, defs, texture} = template();
		texture.strokeWidth(2);
		defs.call(texture);
		const circle = svg.select('defs').select('pattern').select('circle');
		t.equal(circle.attr('stroke-width'), '2');
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
	'texture.size(30).radius(5) set size to 30 and radius to 5',
	t => {
		const {svg, defs, texture} = template();
		texture.size(30).radius(5);
		defs.call(texture);
		const circle = svg.select('defs').select('pattern').select('circle');
		t.equal(circle.attr('r'), '5');
		t.equal(circle.attr('cx'), '15');
		t.end();
	}
);

tape(
	'texture.opacity(0.3) set opacity for everything to 0.3',
	t => {
		const {svg, defs, texture} = template();
		texture.opacity(0.3);
		defs.call(texture);
		const circle = svg.select('defs').select('pattern').select('circle');
		t.equal(circle.attr('fill-opacity'), '0.3');
		t.equal(circle.attr('stroke-opacity'), '0.3');
		t.end();
	}
);

tape(
	'texture.fillOpacity(0.3) set opacity for fill to 0.3, but not stroke',
	t => {
		const {svg, defs, texture} = template();
		texture.fillOpacity(0.3);
		defs.call(texture);
		const circle = svg.select('defs').select('pattern').select('circle');
		t.equal(circle.attr('fill-opacity'), '0.3');
		t.notEqual(circle.attr('stroke-opacity'), '0.3');
		t.end();
	}
);

tape(
	'texture.strokeOpacity(0.3) set opacity for stroke to 0.3, but not fill',
	t => {
		const {svg, defs, texture} = template();
		texture.strokeOpacity(0.3);
		defs.call(texture);
		const circle = svg.select('defs').select('pattern').select('circle');
		t.notEqual(circle.attr('fill-opacity'), '0.3');
		t.equal(circle.attr('stroke-opacity'), '0.3');
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
