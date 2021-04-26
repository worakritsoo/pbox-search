import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "..\\..\\src\\hooks.ts";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<script\n\t\t\ttype=\"module\"\n\t\t\tsrc=\"https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js\"\n\t\t></script>\n\t\t<script nomodule src=\"https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js\"></script>\n\t\t<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css\" />\n\t\t" + head + "\n\t</head>\n\t<body class=\"bg-gray-400\">\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-362498c8.js",
			css: ["/./_app/assets/start-0826e215.css"],
			js: ["/./_app/start-362498c8.js","/./_app/chunks/vendor-a24f1eef.js"]
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
	assets: [{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"robots.txt","size":70,"type":"text/plain"},{"file":"svelte-welcome.png","size":360807,"type":"image/png"},{"file":"svelte-welcome.webp","size":115470,"type":"image/webp"}],
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
						type: 'endpoint',
						pattern: /^\/graphql\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\graphql.ts")
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
						type: 'page',
						pattern: /^\/posts\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/posts/index.svelte"],
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
	"src/routes/$layout.svelte": () => import("..\\..\\src\\routes\\$layout.svelte"),".svelte/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/search/index.svelte": () => import("..\\..\\src\\routes\\search\\index.svelte"),"src/routes/about.svelte": () => import("..\\..\\src\\routes\\about.svelte"),"src/routes/login/index.svelte": () => import("..\\..\\src\\routes\\login\\index.svelte"),"src/routes/posts/index.svelte": () => import("..\\..\\src\\routes\\posts\\index.svelte"),"src/routes/todos/index.svelte": () => import("..\\..\\src\\routes\\todos\\index.svelte")
};

const metadata_lookup = {"src/routes/$layout.svelte":{"entry":"/./_app/pages/$layout.svelte-ddb3f0f2.js","css":["/./_app/assets/pages/$layout.svelte-9ec6679e.css"],"js":["/./_app/pages/$layout.svelte-ddb3f0f2.js","/./_app/chunks/vendor-a24f1eef.js"],"styles":null},".svelte/build/components/error.svelte":{"entry":"/./_app/error.svelte-7b653855.js","css":[],"js":["/./_app/error.svelte-7b653855.js","/./_app/chunks/vendor-a24f1eef.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-02a48971.js","css":[],"js":["/./_app/pages/index.svelte-02a48971.js","/./_app/chunks/vendor-a24f1eef.js"],"styles":null},"src/routes/search/index.svelte":{"entry":"/./_app/pages/search/index.svelte-7ec510f6.js","css":["/./_app/assets/pages/search/index.svelte-1816ad23.css"],"js":["/./_app/pages/search/index.svelte-7ec510f6.js","/./_app/chunks/vendor-a24f1eef.js"],"styles":null},"src/routes/about.svelte":{"entry":"/./_app/pages/about.svelte-345a8d46.js","css":[],"js":["/./_app/pages/about.svelte-345a8d46.js","/./_app/chunks/vendor-a24f1eef.js"],"styles":null},"src/routes/login/index.svelte":{"entry":"/./_app/pages/login/index.svelte-33884492.js","css":[],"js":["/./_app/pages/login/index.svelte-33884492.js","/./_app/chunks/vendor-a24f1eef.js"],"styles":null},"src/routes/posts/index.svelte":{"entry":"/./_app/pages/posts/index.svelte-11057af4.js","css":["/./_app/assets/pages/posts/index.svelte-26385cd8.css"],"js":["/./_app/pages/posts/index.svelte-11057af4.js","/./_app/chunks/vendor-a24f1eef.js"],"styles":null},"src/routes/todos/index.svelte":{"entry":"/./_app/pages/todos/index.svelte-59f26a61.js","css":[],"js":["/./_app/pages/todos/index.svelte-59f26a61.js","/./_app/chunks/vendor-a24f1eef.js"],"styles":null}};

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
	return respond({ ...request, host }, options, { prerender });
}