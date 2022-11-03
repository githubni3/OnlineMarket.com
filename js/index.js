

// food page
var product = document.getElementsByClassName("product");
var i=0;
var str;

function show_product(str){
    for(i=0;i<product.length;i++){
        product[i].style.display="none";
    }

    var item = document.getElementsByClassName(str);
    for(i=0;i<item.length;i++){
        item[i].style.display="flex";
    }
}

