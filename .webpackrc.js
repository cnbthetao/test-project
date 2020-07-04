export default {
	entry: "./src/index.js",
	"env": {
		"development": {
			"extraBabelPlugins": [
				["import", { "style": "css", "libraryName": "antd-mobile", "libraryDirectory": "lib" }]
			],
			"disableCSSModules": true,


		},


	}
}
