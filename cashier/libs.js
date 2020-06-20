products = [
    {name:'Sabun Lifebuoy',price:5000,value:0},
    {name:'Sabun Lux',price:6000,value:1},
    {name:'Shampoo Rejoice',price:15000,value:2},
    {name:'Shampoo Lifebuoy',price:18000,value:3},
    {name:'Indomie Goreng',price:5000,value:4},
    {name:'Terasi ABC',price:7500,value:5},
    {name:'Kopi ABC',price:2000,value:6},
    {name:'Pepsodent',price:8000,value:7},
    {name:'Potabee',price:4500,value:8},
    {name:'Kwaci Bunga Matahari',price:15000,value:9},
    {name:'Samyang Green',price:5500,value:10},
]
getProduct = function(productval){
    product = products[productval];
    cnt = $('#mainscreen tbody tr').length;
    out = '<tr><td>'+cnt+'.</td><td>'+product.name+'</td><td class="amount">'+$('#txtAmount').val()+'</td><td class="price">'+(product.price).toLocaleString()+'</td><td>'+(parseInt($('#txtAmount').val())*parseInt(product.price)).toLocaleString()+'</td><td class="btnRemove">X</td></tr>'
    $('#total').html((parseInt($('#total').html().replace(',',''))+parseInt($('#txtAmount').val())*parseInt(product.price)).toLocaleString());
    return out;
}
countTotal = function(){
    $('#mainscreen tbody tr').each(function(a,b){
        console.log('Bb',b);
    })
    $('#total').html()
}
