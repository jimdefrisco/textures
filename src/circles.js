import rand from './random';

export default () => {
	let size = 20;
	let background = '';
	let backgroundOpacity = 1.0;
	let radius = 2;
	let complement = false;
	let fill = '#343434';
	let fillOpacity = 1.0;
	let stroke = '#343434';
	let strokeOpacity = 1.0;
	let strokeWidth = 0;
	let id = rand();

	const $ = selection => {
		const group = selection
			.append('pattern')
				.attr('id', id)
				.attr('patternUnits', 'userSpaceOnUse')
				.attr('width', size)
				.attr('height', size);

		if (background) {
			group
				.append('rect')
					.attr('width', size)
					.attr('height', size)
					.attr('fill', background)
					.attr('fill-opacity', backgroundOpacity);
		}

		group
			.append('circle')
				.attr('cx', size / 2)
				.attr('cy', size / 2)
				.attr('r', radius)
				.attr('fill', fill)
				.attr('fill-opacity', fillOpacity)
				.attr('stroke', stroke)
				.attr('stroke-opacity', strokeOpacity)
				.attr('stroke-width', strokeWidth);

		if (complement) {
			[[0, 0], [0, size], [size, 0], [size, size]]
				.forEach(corner => {
					group
						.append('circle')
							.attr('cx', corner[0])
							.attr('cy', corner[1])
							.attr('r', radius)
							.attr('fill', fill)
							.attr('fill-opacity', fillOpacity)
							.attr('stroke', stroke)
							.attr('stroke-opacity', strokeOpacity)
							.attr('stroke-width', strokeWidth);
				});
		}
	};

	$.heavier = function (_) {
		if (arguments.length === 0) {
			radius *= 2;
		} else {
			radius *= 2 * _;
		}
		return $;
	};

	$.lighter = function (_) {
		if (arguments.length === 0) {
			radius /= 2;
		} else {
			radius /= 2 * _;
		}
		return $;
	};

	$.thinner = function (_) {
		if (arguments.length === 0) {
			size *= 2;
		} else {
			size *= 2 * _;
		}
		return $;
	};

	$.thicker = function (_) {
		if (arguments.length === 0) {
			size /= 2;
		} else {
			size /= 2 * _;
		}
		return $;
	};

	$.background = function (_) {
		background = _;
		return $;
	};

	$.backgroundOpacity = function (_) {
		backgroundOpacity = _;
		return $;
	};

	$.size = function (_) {
		size = _;
		return $;
	};

	$.complement = function (_) {
		if (arguments.length === 0) {
			complement = true;
		} else {
			complement = _;
		}
		return $;
	};

	$.radius = function (_) {
		radius = _;
		return $;
	};

	$.fill = function (_) {
		fill = _;
		return $;
	};

	$.fillOpacity = function (_) {
		fillOpacity = _;
		return $;
	};

	$.stroke = function (_) {
		stroke = _;
		return $;
	};

	$.strokeOpacity = function (_) {
		strokeOpacity = _;
		return $;
	};

	$.strokeWidth = function (_) {
		strokeWidth = _;
		return $;
	};

	$.opacity = function (_) {
		backgroundOpacity = _;
		fillOpacity = _;
		strokeOpacity = _;
		return $;
	};

	$.id = function (_) {
		if (arguments.length === 0) {
			return id;
		}
		id = _;
		return $;
	};

	$.url = function () {
		return `url(#${id})`;
	};

	return $;
};
