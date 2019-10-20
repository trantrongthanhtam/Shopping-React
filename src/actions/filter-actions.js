export const COLOR_FILTER = "COLOR_FILTER";

//action creator
export function colorFilter(colorFilter = "all") {
	return {
		type: COLOR_FILTER,
		itemColorFilter: colorFilter
	};
}
