# fats release

该命令可以根据项目目录下 `Fatsfile.js` 的配置对本地项目进行编译操作。

	cd /workspace/myProject    
	fats release

## Fatsfile.js

	module.exports = function (fats) {
	
		fats.taskConfig({
			
			// 读取项目基本信息
			pkg: fats.util.readJSON('package.json'),
	
			// 调用任务
			uglify: {
				// 用户自定义分组，名称可任意
				task: {
					options: {
						// 头部注释
						banner: '/*! ' +
							'<%= pkg.name %> v<%= pkg.version %> ' +
							'<%= fats.template.today("YYYY-MM-DD hh:mm:ss") %> ' +
							'*/\n'
					},
					// 用户自定义子分组，名称可任意。多个子分组共用一个 options 项
					task1: {
						'js/<%= pkg.name %>.min.js': 'js/*.js'
					}
				}
			}	
		});
	
		fats.registerTask();
	
	};



Fatsfile.js 可用的任务名称有：
	
	csslint     : 校验css
	jslint      : 校验js
	uglify      : 压缩合并js
	cleancss    : 压缩合并css


### csslint / jslint 任务配置

	// 校验css文件
	csslint: {
		/*
		 * task1、task2 为用户自定义分组名，至少有一个可用分组
		 * 每个自定义任务分组需要一个配置项 files，必需
		 * files 的值可以使一个数组或字符串
		 * 数组项及字符串可以使用通配符匹配文件
		 */
		task1: {
			files: ['css/*.css']
		},
		task2: {
			files: '**/*.css'
		}
	}

### uglify / cleancss 任务配置