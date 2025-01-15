let arr2 = [250,645,300,900,50];
let discountPercent = 10;
for (let i=0; i<arr2.length; i++) {
    console.log(arr2[i]);
    let discount = (arr2[i]*discountPercent)/100;
    let discountedPrice = (arr2[i]-discount)
    console.log("Discount: "+discount);
    console.log("Dicounted Price: "+discountedPrice);
    console.log("------------");
}
