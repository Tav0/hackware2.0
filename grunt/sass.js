module.exports = {
	options: {
            sourceMap: true,
			includePaths: [
				"<%= yeoman.app %>/libraries",
				"<%= yeoman.app %>/libraries/compass-mixins/lib/"
			]
	},
    dist: {
        files: {
            "app/styles/style.css": "app/styles/style.scss"
        }
	}
};