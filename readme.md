# v-news

### ��Ŀ���
```  
node+express+mongoose+MongoDBʵ�ֵ���С���ź�̨ϵͳ����ɾ�Ĳ飩
``` 
github��ַ:https://github.com/Nconsolate/news   
  
gitee��ַ:https://gitee.com/Nconsolate/news 


## 1����װ
 
 **git clone git@github.com:Nconsolate/news.git**  
   
 ����  
 
 **git clone git@gitee.com:Nconsolate/news.git**

## 2��ʹ��
**���Ȱ�װ����npm i**
>* ����1�����������ҵ�mongoDB������Ҫ���룬���ţ�
���ӷ�������mongoDB 
 mongodb://47.101.199.141:27017/mynews  
npm start ����
���� http://127.0.0.1:3003/news/list
<br/>
>* ����2�� ���ӱ���mongoDB
    ���ȱ��ذ�װmongoDB   
    ���ؽ���mynews���ϣ�������Ҳ�У�����mongodb����Ӧ����       ������ 
    �޸�Դ���е�routes>news>news.js�µ�mongoose.connect
    ��"mongodb://47.101.199.141:27017/mynews"
    �ĳ�"mongodb://127.0.0.1:27017/mynews"
    npm start ����
    ���� http://127.0.0.1:3003/news/list
    

##### ���߲鿴��ַ��  http://47.101.199.141:3003/news/list


## ����
* mongooseģ���ʹ�á�
* ʹ�� express-generator����express���
* mongoDB�Ľ������ӣ���ɾ�Ĳ�Ȼ���������
* ejs�﷨��

##### **����** ���� 
```flow
st=>start: PC
op=>operation: web������
e=>end: mongoDB������

st->op
op->e
e->e
```
<br/>


##### **����** ����Ҫ�ǲ��𵽷����������⣬���ص�ûʲô���⣩
<br/>
>* **������Ŀ�ϴ��Ʒ��������ܴ��**
    ����ָ�� û�д����ָ���������
    ֱ�ӽ���Ҫ�����������ѹ�������Ʒ��������ˡ�
    �������ⲻ��
>* **��Ŀ�޷�����**
�ڷ�������װ��PM2ʹ��PM2�Ľ����ػ�����
���������ʹ��PM2������Ŀ
>* **mongoDB�����Ʒ������޷�����**
    û�п���mongodbԶ�����ӡ�
    bindIpĬ��Ϊ127.0.0.1�޸�bindIpΪ0.0.0.0
    Ȼ�����̨������27017�˿�
    �ڷ�����/etc/ssh�µ�sshd_config�ļ�������һ�С�AllowTcpForarding yes��
    �����£��㶨��
    
    
<br/>
###### **����ʵ��**  

͵���� ����ʽ��д�ˡ�����




## Ŀ¼
```
��  app.js                     ��Ŀ���ļ�����Ŀ��Դͳһ����
��  package.json               ��Ŀ�����ļ�
��  readme.md
��  
����bin                       ��ִ���ļ�Ŀ¼
��      www                  �������
��      
����public                    ��̬��Դ�ļ�
��  ����images
��  ����javascripts
��  ����stylesheets
��          style.css
��          
����routes                    ·��Ŀ¼       
��      index.js             
��      news.js
��      users.js
��      
����views                     ��ͼģ��Ŀ¼
        error.ejs           
        index.ejs
        newsadd.ejs
        newsedit.ejs
        newslist.ejs
        newsview.ejs
```


