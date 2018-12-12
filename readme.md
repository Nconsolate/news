# v-news

### 项目简介
```  
node+express+mongoose+MongoDB实现的最小新闻后台系统（增删改查）
``` 
github地址:https://github.com/Nconsolate/news   
  
gitee地址:https://gitee.com/Nconsolate/news 


## 1，安装
 
 **git clone git@github.com:Nconsolate/news.git**  
   
 或者  
 
 **git clone git@gitee.com:Nconsolate/news.git**

## 2，使用
**首先安装依赖npm i**
>* 方法1：可以连接我的mongoDB（不需要密码，开放）
连接服务器端mongoDB 
 mongodb://47.101.199.141:27017/mynews  
npm start 运行
访问 http://127.0.0.1:3003/news/list
<br/>
>* 方法2： 连接本地mongoDB
    首先本地安装mongoDB   
    本地建立mynews集合（其他名也行，连接mongodb做对应处理）       并运行 
    修改源码中的routes>news>news.js下的mongoose.connect
    将"mongodb://47.101.199.141:27017/mynews"
    改成"mongodb://127.0.0.1:27017/mynews"
    npm start 运行
    访问 http://127.0.0.1:3003/news/list
    

##### 在线查看地址：  http://47.101.199.141:3003/news/list


## 技术
* mongoose模块的使用。
* 使用 express-generator创建express框架
* mongoDB的建立连接，增删改查等基础操作。
* ejs语法。

##### **数据** 流向 
```flow
st=>start: PC
op=>operation: web服务器
e=>end: mongoDB服务器

st->op
op->e
e->e
```
<br/>


##### **问题** （主要是部署到服务器的问题，本地到没什么问题）
<br/>
>* **本地项目上传云服务器不能打包**
    查了指令 没有打包的指令。呃呃呃，
    直接将需要代码和依赖都压缩部署到云服务器上了。
    好像问题不大。
>* **项目无法运行**
在服务器上装了PM2使用PM2的进程守护功能
具体操作：使用PM2启动项目
>* **mongoDB架在云服务器无法连接**
    没有开启mongodb远程连接。
    bindIp默认为127.0.0.1修改bindIp为0.0.0.0
    然后控制台开放下27017端口
    在服务器/etc/ssh下的sshd_config文件，增加一行“AllowTcpForarding yes”
    重启下，搞定。
    
    
<br/>
###### **界面实现**  

偷个懒 ，样式不写了。。。




## 目录
```
│  app.js                     项目主文件，项目资源统一配置
│  package.json               项目描述文件
│  readme.md
│  
├─bin                       可执行文件目录
│      www                  启动入口
│      
├─public                    静态资源文件
│  ├─images
│  ├─javascripts
│  └─stylesheets
│          style.css
│          
├─routes                    路由目录       
│      index.js             
│      news.js
│      users.js
│      
└─views                     视图模板目录
        error.ejs           
        index.ejs
        newsadd.ejs
        newsedit.ejs
        newslist.ejs
        newsview.ejs
```


