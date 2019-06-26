var express = require('express');
var app = express();



var customerController=function (req, res) {
  console.log("CAlling rest api");
  var customers=[
            {Name:'aaa',product:'vegetable',age:43},
            {Name:'bbb',product:'mobilephones',age:43},
            {Name:'ccc',product:'television',age:28},
            {Name:'ddd',product:'furitures',age:25},
            {Name:'monika',product:'stationary',age:23}
      ];
  res.send(customers);
};


app.get('/customers',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})