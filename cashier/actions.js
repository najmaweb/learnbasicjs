(function($){
    $('#btnAddProduct').click(function(){
        let selected = $('#masterProduct :selected').val();
        $('#mainscreen tbody').append(getProduct(selected));
    });
    products.forEach(product => {
        $('#masterProduct').append('<option value='+product.value+'>'+product.name+'</option>');
    });
    $('#mainscreen tbody').on('click','td.btnRemove',function(productval){
        product = $(this).parent();
        amount = product.find('.amount').html();
        price = product.find('.price').html().replace(',','');
        $('#total').html((parseInt($('#total').html().replace(',',''))-parseInt(amount)*parseInt(price)).toLocaleString());
        $(this).parent().remove();
    })
}(jQuery))