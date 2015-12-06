var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/')); 

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i=0; i < customers.length; i++){
        if(customers[i].id === customerId) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
});

app.get('/customers', function(req, res) {
    res.json(customers); 
    //res.json(500, {error: 'An error has occurred!'});
});

app.get('/orders', function(req, res) {
    var orders = [];
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].orders) {
            for (var j=0,ordersLen=customers[i].orders.length;j<ordersLen;j++) {
                orders.push(customers[i].orders[j]);   
            }
        }
    }  
    res.json(orders);
});

app.delete('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           customers.splice(i,1);
           data = { status: true };
           break;
        }
    }  
    res.json(data);
});

app.listen(9087);

console.log('Express listening on port 9087');

var customers = [
    {
        id: 1,
        joined: '2015-11-03', 
        name: 'Bala', 
        city: 'Fairfax', 
        orderTotal: 9.9567,
        orders: [
            {
                id: 1,
                product: 'Shoes',
                total: 9.9567
            }
        ]
    },
    {
        id: 2,
        joined: '2014-12-23', 
        name: 'Amal', 
        city: 'McLean', 
        orderTotal: 19.4067,
        orders: [
            {
                id: 1,
                product: 'Shirts',
                total: 19.4067
            }
        ]
    },
    {
        id: 3,
        joined: '2011-01-17', 
        name: 'Manu', 
        city: 'Gaithersburg', 
        orderTotal: 69.67,
        orders: [
            {
                id: 1,
                product: 'Watches',
                total: 69.67
            }
        ]
    },
    {
        id: 4,
        joined: '2013-08-25', 
        name: 'Alex', 
        city: 'Washington', 
        orderTotal: 23.153,
        orders: [
            {
                id: 1,
                product: 'Accessories',
                total: 23.153
            }
        ]
    }
];