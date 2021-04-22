import { ssr } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "..\\..\\src\\hooks.ts";

const template = ({ head, body }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" baseurl=\"./static/favicon.ico\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t<script\r\n\t\t\ttype=\"module\"\r\n\t\t\tsrc=\"https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js\"\r\n\t\t></script>\r\n\t\t<script nomodule src=\"https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js\"></script>\r\n\t\t<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css\" />\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body>\r\n\t\t<div id=\"svelte\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n";

let options = null;

// allow paths to be overridden in svelte-kit start
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-de2920b5.js",
			css: ["/./_app/assets/start-0826e215.css"],
			js: ["/./_app/start-de2920b5.js","/./_app/chunks/index-00155216.js"]
		},
		fetched: undefined,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"person-outline.svg","size":513,"type":"image/svg+xml"},{"file":"robots.txt","size":70,"type":"text/plain"},{"file":"svelte-welcome.png","size":360807,"type":"image/png"},{"file":"svelte-welcome.webp","size":115470,"type":"image/webp"}],
	layout: "src/routes/$layout.svelte",
	error: ".svelte/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/search\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/search/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/about.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/login\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/login/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\.json$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\todos\\index.json.ts")
					},
		{
						type: 'page',
						pattern: /^\/todos\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/todos/index.svelte"],
						b: [".svelte/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\/([^/]+?)\.json$/,
						params: (m) => ({ uid: d(m[1])}),
						load: () => import("..\\..\\src\\routes\\todos\\[uid].json.ts")
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getContext: hooks.getContext || (() => ({})),
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/$layout.svelte": () => import("..\\..\\src\\routes\\$layout.svelte"),".svelte/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/search/index.svelte": () => import("..\\..\\src\\routes\\search\\index.svelte"),"src/routes/about.svelte": () => import("..\\..\\src\\routes\\about.svelte"),"src/routes/login/index.svelte": () => import("..\\..\\src\\routes\\login\\index.svelte"),"src/routes/todos/index.svelte": () => import("..\\..\\src\\routes\\todos\\index.svelte")
};

const metadata_lookup = {"src/routes/$layout.svelte":{"entry":"/./_app/pages/$layout.svelte-d69c0be4.js","css":["/./_app/assets/pages/$layout.svelte-74cc7894.css"],"js":["/./_app/pages/$layout.svelte-d69c0be4.js","/./_app/chunks/index-00155216.js"],"styles":null},".svelte/build/components/error.svelte":{"entry":"/./_app/error.svelte-b729e92a.js","css":[],"js":["/./_app/error.svelte-b729e92a.js","/./_app/chunks/index-00155216.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-1eb4b63b.js","css":["/./_app/assets/pages/index.svelte-252481cb.css"],"js":["/./_app/pages/index.svelte-1eb4b63b.js","/./_app/chunks/index-00155216.js"],"styles":null},"src/routes/search/index.svelte":{"entry":"/./_app/pages/search/index.svelte-ff917db2.js","css":[],"js":["/./_app/pages/search/index.svelte-ff917db2.js","/./_app/chunks/index-00155216.js"],"styles":null},"src/routes/about.svelte":{"entry":"/./_app/pages/about.svelte-e7b9811c.js","css":["/./_app/assets/pages/about.svelte-51ba7a34.css"],"js":["/./_app/pages/about.svelte-e7b9811c.js","/./_app/chunks/index-00155216.js"],"styles":null},"src/routes/login/index.svelte":{"entry":"/./_app/pages/login/index.svelte-76848fd3.js","css":[],"js":["/./_app/pages/login/index.svelte-76848fd3.js","/./_app/chunks/index-00155216.js"],"styles":null},"src/routes/todos/index.svelte":{"entry":"/./_app/pages/todos/index.svelte-63ae0439.js","css":["/./_app/assets/pages/todos/index.svelte-e503477f.css"],"js":["/./_app/pages/todos/index.svelte-63ae0439.js","/./_app/chunks/index-00155216.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return ssr({ ...request, host }, options, { prerender });
}