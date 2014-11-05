# fats init

该命令是一个脚手架工具，可以使用模板快速初始化一个本地项目。

	cd /workspace    
	fats init

此时需要等待用户输入

	? Project name: myProject
	? Has branches [yes/no]?: no
	? Template: default

此时会在 `/workspace` 目录下生成一个 `myProject` 目录，其中包含一个项目前端开发阶段的基础文件。

### **[Q&A]**

**Q: 如何使用自定义模板初始化项目？**

A: 目前 `fats` 还不支持命令行方式安装自定义模板，如果自带的 default 模板无法满足你的需要，可以手动添加自定义模板：  
1. 找到 `fats` 的安装目录;  
2. 打开 `/lib/templates` 目录，将 `default` 目录拷贝一份，并重命名为你的模板名称如 `myTemplate`；    
3. 将 `myTemplate` 目录下的文件和初始化后的项目文件对比，可以发现：其实 `fats init` 的主要工作是将模板文件拷贝并将相关文件名及文件内字符替换，所以你大概知道该怎么做了吧？

模板中可以使用的字符串变量：

	{name}           // 项目名称      
	{APP_NAME}       // 工具名称，即 fats    
	{APP_VERSION}    // 工具版本号    
	{CREATE_TIME}    // 项目创建时间，格式为： YYYY-MM-DD hh:mm:ss
	{CREATE_DATE}    // 项目创建日期，格式为： YYYY-MM-DD

这些变量可以使用在文件名中，或者文本类型文件内容中。