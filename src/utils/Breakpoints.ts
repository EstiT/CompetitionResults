import { useBreakpoints as vueUseBreakpoints } from '@vueuse/core';

const breakpoints = vueUseBreakpoints({
	lg: 820,
});
export const mobile = breakpoints.smaller('lg');
export const desktop = breakpoints.greater('lg');
