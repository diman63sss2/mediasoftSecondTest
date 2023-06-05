function filterByProperty(array, property) {
    return array.sort(function(a,b){
        switch (property.sort) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'price':
                return a.price - b.price;
            case 'rate':
                return a.rating.rate - b.rating.rate;
            case 'popular':
                return a.rating.count - b.rating.count;
        }
    }).filter(product=>{
        if(property.category === null){
            return  product
        }else{
            if(property.category === product.category){
                return  product
            }
        }
    });
}



export default filterByProperty;