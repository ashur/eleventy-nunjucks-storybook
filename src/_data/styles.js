const CleanCSS = require( "clean-css" );
const glob = require( "glob" );

/*
 * CUBE CSS pattern, which is awesome
 * https://cube.fyi/
 */
let sources = [
	{
		name: "global",
		path: [
			"./src/styles/reset.css",
			"./src/styles/global.css",
		],
	},
	{
		name: "composition",
		path: "./src/styles/composition.css",
	},
	{
		name: "utilities",
		path: "./src/styles/utilities.css",
	},
	{
		name: "blocks",
		path: [
			...glob.sync( "./src/styles/blocks/*.css" ),
			...glob.sync( "./src/_includes/components/**/*.css" )
		],
	},
];

/* CleanCSS options */
let cleanCss = new CleanCSS( {} );

let styles = {};

sources.forEach( source =>
{
	let sourcePath = Array.isArray( source.path ) ? source.path : [source.path];
	let result = cleanCss.minify( sourcePath )

	if( result.warnings.length > 0 )
	{
		// ...
	}

	if( result.errors.length > 0 )
	{
		// ...
	}

	styles[source.name] = result.styles;
});

module.exports = styles;

console.dir( styles, { depth: 3 } );
