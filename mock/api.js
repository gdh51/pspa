import Mock from 'mockjs';

Mock.setup({
  timeout: 3000
})
//主页数据
Mock.mock('./infototals','get', {
    "docs": {
      "tags": 1,
      "archives": 2,
      "categories": 3,
      "view": 4
    }
});

//主页文章数据
Mock.mock('./archives','get', {
    "docs": [
      {
        "totalPage": 1,
        "time": "2018-8",
        "title": 'asdasd',
        "path": "/article?title=helloworld",
        "content": [
          "<p>test</p>",
          "这只是一个测试"
        ],
        "type": {
          "name": 'Vue',
          "path": 'have'
        },
        "tags": [
          {
            "tag": 'Vue',
            "path": 'none',
          }
        ]
      }
    ]
});


//左侧标签数据
Mock.mock('./tags', 'get',{
    "docs": [
      {
        "_id": 1,
        "path": './././',
        "tag": "study"
      }
    ]
});

Mock.mock("./article?title=helloworld", 'get', {
  docs: {
    content: {
      h1: {
          title:'Hello World',
          text:'<p>现在我们来看看吧</p>'
        },
      h2: {
          title: 'Hello World',
          text: '<p>现在我们来看看吧</p>'
        },
      h3: {
          title: 'Hello World',
          text: '<p>现在我们来看看吧</p>'
        },
      h4: {
          title: 'Hello World',
          text: '<p>现在我们来看看吧</p>'
        },
      h5:{
          title: 'Hello World',
          text: '<p>现在我们来看看吧</p>'
        },
      h6: {
          title: 'Hello World',
          text: '<p>现在我们来看看吧</p>'
        },
    },
    tags: [{
      tag: 'Vue',
      path: 'none'
    }]
  }
});