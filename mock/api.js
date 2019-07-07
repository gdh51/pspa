import Mock from 'mockjs';

Mock.mock('./infototals','get', {
    "docs": {
      "tags": 1,
      "archives": 2,
      "categories": 3,
      "view": 4
    }
});

Mock.mock('./archives','get', {
    "docs": [
      {
        "totalPage": 1,
        "time": new Date().toDateString(),
        "title": 'asdasd',
        "path": '././././',
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

Mock.mock('./tags', 'get',{
    "docs": [
      {
        "_id": 1,
        "path": './././',
        "tag": "study"
      }
    ]
});