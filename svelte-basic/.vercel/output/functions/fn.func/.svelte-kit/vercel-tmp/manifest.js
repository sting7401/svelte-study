export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.c375808e.js","app":"_app/immutable/entry/app.22e1e084.js","imports":["_app/immutable/entry/start.c375808e.js","_app/immutable/chunks/index.5df5f97f.js","_app/immutable/chunks/singletons.e8453d8c.js","_app/immutable/chunks/index.29d8812d.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/entry/app.22e1e084.js","_app/immutable/chunks/index.5df5f97f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js'),
			() => import('../output/server/nodes/16.js'),
			() => import('../output/server/nodes/17.js'),
			() => import('../output/server/nodes/18.js'),
			() => import('../output/server/nodes/19.js'),
			() => import('../output/server/nodes/20.js'),
			() => import('../output/server/nodes/21.js'),
			() => import('../output/server/nodes/22.js'),
			() => import('../output/server/nodes/23.js'),
			() => import('../output/server/nodes/24.js'),
			() => import('../output/server/nodes/25.js'),
			() => import('../output/server/nodes/26.js'),
			() => import('../output/server/nodes/27.js'),
			() => import('../output/server/nodes/28.js'),
			() => import('../output/server/nodes/29.js'),
			() => import('../output/server/nodes/30.js'),
			() => import('../output/server/nodes/31.js'),
			() => import('../output/server/nodes/32.js'),
			() => import('../output/server/nodes/33.js'),
			() => import('../output/server/nodes/34.js'),
			() => import('../output/server/nodes/35.js'),
			() => import('../output/server/nodes/36.js'),
			() => import('../output/server/nodes/37.js'),
			() => import('../output/server/nodes/38.js'),
			() => import('../output/server/nodes/39.js'),
			() => import('../output/server/nodes/40.js'),
			() => import('../output/server/nodes/41.js'),
			() => import('../output/server/nodes/42.js'),
			() => import('../output/server/nodes/43.js'),
			() => import('../output/server/nodes/44.js'),
			() => import('../output/server/nodes/45.js'),
			() => import('../output/server/nodes/46.js'),
			() => import('../output/server/nodes/47.js'),
			() => import('../output/server/nodes/48.js'),
			() => import('../output/server/nodes/49.js'),
			() => import('../output/server/nodes/50.js'),
			() => import('../output/server/nodes/51.js'),
			() => import('../output/server/nodes/52.js'),
			() => import('../output/server/nodes/53.js'),
			() => import('../output/server/nodes/54.js'),
			() => import('../output/server/nodes/55.js'),
			() => import('../output/server/nodes/56.js'),
			() => import('../output/server/nodes/57.js'),
			() => import('../output/server/nodes/58.js'),
			() => import('../output/server/nodes/59.js'),
			() => import('../output/server/nodes/60.js'),
			() => import('../output/server/nodes/61.js'),
			() => import('../output/server/nodes/62.js'),
			() => import('../output/server/nodes/63.js')
		],
		routes: [
			{
				id: "/(tutorial)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(tutorial)/address",
				pattern: /^\/address\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/api/comments",
				pattern: /^\/api\/comments\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/comments/_server.js')
			},
			{
				id: "/api/comments/[commentId]",
				pattern: /^\/api\/comments\/([^/]+?)\/?$/,
				params: [{"name":"commentId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/comments/_commentId_/_server.js')
			},
			{
				id: "/api/current-time",
				pattern: /^\/api\/current-time\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/current-time/_server.js')
			},
			{
				id: "/api/postcodes",
				pattern: /^\/api\/postcodes\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/postcodes/_server.js')
			},
			{
				id: "/(form)/auth-modal",
				pattern: /^\/auth-modal\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(form)/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 31 },
				endpoint: () => import('../output/server/entries/endpoints/(form)/auth/_server.ts.js')
			},
			{
				id: "/(app)/basic10",
				pattern: /^\/basic10\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(app)/basic11",
				pattern: /^\/basic11\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(app)/basic12",
				pattern: /^\/basic12\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(app)/basic2",
				pattern: /^\/basic2\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(app)/basic3",
				pattern: /^\/basic3\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(app)/basic4",
				pattern: /^\/basic4\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(app)/basic5",
				pattern: /^\/basic5\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(app)/basic6",
				pattern: /^\/basic6\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(app)/basic7",
				pattern: /^\/basic7\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(app)/basic8",
				pattern: /^\/basic8\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(app)/basic9",
				pattern: /^\/basic9\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(app)/basic",
				pattern: /^\/basic\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(form)/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(app)/database1",
				pattern: /^\/database1\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/demo-api",
				pattern: /^\/demo-api\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/demo-api/_server.js')
			},
			{
				id: "/(tutorial)/docs/[...slug]",
				pattern: /^\/docs(?:\/(.*))?\/?$/,
				params: [{"name":"slug","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(tutorial)/first",
				pattern: /^\/first\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/(tutorial)/json-list",
				pattern: /^\/json-list\/?$/,
				params: [],
				page: { layouts: [0,6,7,], errors: [1,,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/(tutorial)/json-list/[id]",
				pattern: /^\/json-list\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,7,8,], errors: [1,,,9,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/(tutorial)/marketing/[[lang]]",
				pattern: /^\/marketing(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/(form)/news",
				pattern: /^\/news\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(app)/parentStore",
				pattern: /^\/parentStore\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(auth)/password/forgot",
				pattern: /^\/password\/forgot\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(auth)/password/info",
				pattern: /^\/password\/info\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(auth)/password/reset",
				pattern: /^\/password\/reset\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(tutorial)/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/(tutorial)/products/[productNumber]",
				pattern: /^\/products\/([^/]+?)\/?$/,
				params: [{"name":"productNumber","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/(tutorial)/products/[productNumber]/reviews/[reviewId]",
				pattern: /^\/products\/([^/]+?)\/reviews\/([^/]+?)\/?$/,
				params: [{"name":"productNumber","optional":false,"rest":false,"chained":false},{"name":"reviewId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/start/basic10",
				pattern: /^\/start\/basic10\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/start/basic11",
				pattern: /^\/start\/basic11\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/start/basic12",
				pattern: /^\/start\/basic12\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/start/basic2",
				pattern: /^\/start\/basic2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/start/basic3",
				pattern: /^\/start\/basic3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/start/basic4",
				pattern: /^\/start\/basic4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/start/basic5",
				pattern: /^\/start\/basic5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/start/basic6",
				pattern: /^\/start\/basic6\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/start/basic7",
				pattern: /^\/start\/basic7\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/start/basic8",
				pattern: /^\/start\/basic8\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/start/basic9",
				pattern: /^\/start\/basic9\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/start/basic",
				pattern: /^\/start\/basic\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/start/database1",
				pattern: /^\/start\/database1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/start/parentStore",
				pattern: /^\/start\/parentStore\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/start/step01",
				pattern: /^\/start\/step01\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/start/step02",
				pattern: /^\/start\/step02\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/start/test02",
				pattern: /^\/start\/test02\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/(app)/step01",
				pattern: /^\/step01\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(app)/step02",
				pattern: /^\/step02\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(tutorial)/stock",
				pattern: /^\/stock\/?$/,
				params: [],
				page: { layouts: [0,6,10,], errors: [1,,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/(app)/test02",
				pattern: /^\/test02\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(tutorial)/tutorial",
				pattern: /^\/tutorial\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 46 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
