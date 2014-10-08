# fats

### 介绍

fats是一套前端自动化工具系统（Front-end automation tools system），它主要包括以下命令：

* fats init
* fats server
* fats release
* fats install

#### init

命令可以使用模板初始化一个本地项目。

	cd /root/home    
	fats init

#### server 

命令可以启动一个本地web服务器用于预览fats release产出前后的项目。

	cd /root/home/demo    
	fats server start

该调试服务器拥有以下特点：

* 代码修改，保存后多浏览器自动刷新
* 可以在html页面中include子模板（基于`artTemplate`，使用简洁版语法）
* SSI支持(计划)

#### release (开发中)

命令用于编译并发布的你的项目，程序通过读取目录下`Fatsfile.js`中的配置参数进行编译发布操作。

	cd /root/home/demo    
	fats server release

#### install (计划)
 
命令安装fats仓库提供的各种组件、框架、示例、素材、配置等开发资源。

------------------------------------
    
### 下载安装

	npm install -g fats

依赖环境：`Node.js`、`npm`

> 部分操作系统在安装 `fats` 时可能会出现 `(node-gyp rebuild 2> builderror.log) || (exit 0)` 等错误信息，这是由 `ws` 模块内部导致，并不影响最终的安装结果。

------------------------------------

### 命令行参数

### fats init

init 命令使用交互式询问方式，需要等待用户输入

	? Project name: myProject
	? Has branches [yes/no]?: no
	? Template: default

### fats server &lt;command&gt; [option]

Commands:
	
**start**  

	fats server start
	fats server start --port 3000 --root /path/to/dir --watch off

**restart**  

	fats server restart

**stop**  

	fats server stop

Options

**--root, -r**  : web服务器指向的根目录 `--root /path/to/dir`，如果不传递该参数，则使用当前执行目录作为根目录  
**--hostname, -n**  : 服务器使用的主机名，如果不传递该参数，则使用 `ip` 作为主机名     
**--port, -p**  : web服务器使用的端口 `--port 8080`，`(default 3000)`   
**--watch, -w**  : 修改代码后浏览器自动刷新 `--watch on`，`(default off)`

-----------------------------------------------

### 升级日志

* ...

