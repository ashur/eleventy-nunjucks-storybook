module.exports = eleventyConfig =>
{
	return {
		dir: {
			input: "src",
			output: "dist",
			layouts: "_layouts",
		},

		htmlTemplateEngine: "njk",
	};
};
