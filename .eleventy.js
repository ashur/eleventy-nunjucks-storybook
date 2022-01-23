module.exports = eleventyConfig =>
{
	eleventyConfig.addWatchTarget( "./src/styles/" );

	return {
		dir: {
			input: "src",
			output: "dist",
			layouts: "_layouts",
		},

		htmlTemplateEngine: "njk",
	};
};
