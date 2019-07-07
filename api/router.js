let {fnQuery,view}=require('./db.js');
module.exports=function (app) {
  app.get("/:name", function (req, res) {
    if(req.path=='/favicon.ico')return;
    if (req.path == '/infototals') {
      view(function (docs) {
        res.json({
          docs
        })
      });
    }else{
      fnQuery(req.path, req.query, function (docs) {
        res.json({
          docs
        });
      });
    }
  });
  app.get("/:name/:type", function (req, res) {
    let obj = req.params.name == 'categories' ? {
        type: req.params.type
      } : {
      tag:req.params.type
    }
    fnQuery('/'+req.params.name,obj, function (docs) {
      res.json({
        docs
      });
    });
  });
}