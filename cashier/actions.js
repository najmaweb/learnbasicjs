(function($){
    $('#btnAddProduct').click(function(){
        let selected = $('#masterProduct :selected').val();
        $('#mainscreen tbody').append(getProduct(selected));
        reCalculateNumber();
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
        reCalculateNumber()
    })
    reCalculateNumber = function(){
        let c = 0;
        $('#mainscreen tbody tr').each(function(){
            $(this).find('.ordernum').html(c);
            c+=1;
        });
    }
}(jQuery))