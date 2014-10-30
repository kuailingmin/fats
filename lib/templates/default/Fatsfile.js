/*
 * 此文件为fats系统自动化构建时读取的配置文件
 * 配置参数见：https://github.com/pangnate/fats
 * */
module.exports = function (fats) {

	fats.taskConfig({

		pkg: fats.util.readJSON('package.json'),

		// 校验css文件
		csslint: {
			task: {
				files: 'css/*.css'
			}
		},

		// 校验js文件
		jslint: {
			task: {
				files: 'js/*.js'
			}
		},

		// 合并、压缩css文件
		cleancss: {
			task: {
				options: {
					banner: '/*! ' +
						'<%= pkg.name %> v<%= pkg.version %> ' +
						'<%= fats.template.today("YYYY-MM-DD hh:mm:ss") %> ' +
						'*/\n'
				},
				group: {
					'css/<%= pkg.name %>.min.css': 'css/*.css'
				}
			}
		},

		// 合并、压缩js文件
		uglify: {

			task: {
				options: {
					banner: '/*! ' +
						'<%= pkg.name %> v<%= pkg.version %> ' +
						'<%= fats.template.today("YYYY-MM-DD hh:mm:ss") %> ' +
						'*/\n'
				},
				group: {
					src: 'js/(?!.*(jquery|min)).*.js',  // 合并所有非jquery及min文件
					dest: 'js/<%= pkg.name %>.min.js'
				}
			}
		}

	});

	fats.registerTask();

};