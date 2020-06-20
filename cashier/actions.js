(function($){
    $('#btnAddProduct').click(function(){
        let selected = $('#masterProduct :selected').val();
        $('#mainscreen tbody').append(getProduct(selected));
    });
    products.forEach(product => {
        $('#masterProduct').append('<option value='+product.value+'>'+product.name+'</option>');        
    });
    $('#mainscreen tbody').on('click','td.btnRemove',function(){
        $(this).parent().remove();
    })
}(jQuery))