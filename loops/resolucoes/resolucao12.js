// 12. Um filtro só com produtos que tem seguro

const haveInsurance = {

    products: produtos.filter(product => product.assurance == true).map(product => product.name)
}

console.log(haveInsurance);