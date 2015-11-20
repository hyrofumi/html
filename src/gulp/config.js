var path = {
	"public": {
		"http": "../httpdocs/",
		"style": "../httpdocs/assets/styles/",
		// "style": "./",
		"script": "../httpdocs/assets/scripts/"
	},
	"src": {
		"sass": "styles/",
		"scripts": "./scripts/_src/"
	}
};

module.exports = {
	"watch": {
		"path": [  ],
	},
	"compass": {
		"src": path.src.sass + "**/*.scss",
		"confile_file": "./config.rb",
		"comments": false,
		"css": path.public.style,
		"sass": path.src.sass
	}
}
