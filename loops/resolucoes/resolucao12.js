// 12. Um filtro só com produtos que tem seguro

const haveInsurance = {

    products: produtos.filter(product => product.assurance).map(product => product.name)
}

console.log(haveInsurance);

// truthy , true, > 0, [], {}

// falsy = 0, '', null, undefined, NaN, false;