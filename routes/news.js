var express = require("express");
var mongoose = require("mongoose");
var ejs = require("ejs");
var router = express.Router();

var News = new mongoose.Schema({
    title: String, //新闻标题
    author: String, //新闻左转
    source: String, //来源
    ctime: String, //创建时间
    content: String //新闻内容
});
var NewsModel = mongoose.model("DocNews", News); //News集合下的 文档docNews 模型，用于新增
var NewsQueryModel = mongoose.model("DocNews");

router.get('/newsadd', function (req, res) {
    res.render('newsadd.ejs');
});
mongoose.connect("mongodb://47.101.199.141:27017/mynews", {
    useNewUrlParser: true
}, function (err) {
    var p = new Promise(function (resolve, reject) {
        if (!err) {
            console.log("connected to Mongodb");
            //如果连接成功，则向控制台输出connected to Mongodb
            resolve();
        } else {
            throw err; //如果连接失败，则抛出异常
        }

    });
    return p;

}).then(function () {
    //用于查询的模型
    router.post("/newsadd", function (req, res) {
        var tbtitle = req.body.tbtitle; //接收标题
        var tbcontent = req.body.tbcontent; //接收内容
        var tbsource = req.body.tbsource; //接收来源
        var tbauthor = req.body.tbauthor; //接收作者
        var instance1 = new NewsModel(); //模型实例

        instance1.title = tbtitle; //给模型赋值标题
        instance1.content = tbcontent;
        instance1.source = tbsource;
        instance1.author = tbauthor;

        //获取系统时间赋值给模型
        instance1.ctime = new Date().toLocaleDateString();
        console.log(instance1.tbauthor);
        //本地日期
        instance1.save(function (err) { //执行保存任务
            if (err) {
                console.log('保存失败');
                return;
            }
            console.log(111);
            res.redirect("/news/list"); //保存完毕之后跳转到list
        });
    });
});
router.get('/list', function (req, res) {
    NewsQueryModel.find({}, function (err, docs) {
        // {}表示查询所有数据，回调函数参数docs就是查询出来的结果，把结果作为newsdata的value
        // 用它去渲染模板newlist.ejs 
        res.render('newslist.ejs', { title: '新闻列表', newsdata: docs });
    });
});
router.get("/edit/:id", function (req, res) {
    var id = req.params.id;
    NewsQueryModel.findById(id, function (err, doc) {
        res.render('newsedit.ejs', { title: '新闻编辑', newsdata: doc });
    });
});
router.post("/newsedit", function (req, res) {
    var id = req.body.id;
    var tbtitle = req.body.tbtitle;
    var tbauthor = req.body.tbauthor;
    var tbsource = req.body.tbsource;
    var tbcontent = req.body.tbcontent;
    NewsQueryModel.findById(id, function (err, doc) {
        doc.title = tbtitle;
        doc.author = tbauthor;
        doc.source = tbsource;
        doc.content = tbcontent;
        doc.save(function (err) {
            if (!err) {
                res.redirect("/news/list");
            } else {
                throw err;
            }
        });
    });
});
router.get("/delete/:id", function (req, res) {
    var id = req.params.id;
    NewsQueryModel.findById(id, function (err, doc) {
        if (!doc) {
            return next(new NotFound("Doc not found"))
        } else {
            doc.remove(function () {
                res.redirect("/news/list");
            })
        }
    });
});
router.get('/newsview/:id', function (req, res) {
    var id = req.params.id; //接收参数
    NewsQueryModel.findById(id, function (err, doc) {
        res.render('newsview.ejs', { title: '新闻详细页面', newsdata: doc });//渲染模板
    });
});

module.exports = router;
