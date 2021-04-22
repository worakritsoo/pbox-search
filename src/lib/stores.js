import { writable, readable } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

function toggleCtrl() {
	const { set, subscribe, update } = writable(false);

	return {
		subscribe,
		toggle: () => update((n) => !n)
	};
}

export const toggle = toggleCtrl();
