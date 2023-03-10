let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 30000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1.In ra thông tin các sản phẩm trong giỏ hàng:
function info(products){
    for(let i= 0; i < products.length; i++){
        console.log(`${products[i]['name']} - ${products[i]['price']} - ${products[i]['brand']} - ${products[i]['count']}`);
    }
}
info(products);

// 2.Tính tổng tiền tất cả sản phẩm trong giỏ hàng:

let a = 0;
for(let i= 0; i < products.length; i++){
    a += products[i]['price'] * products[i]['count'];
}
console.log(a);

// 3. Tìm các sản phẩm của thuơng hiệu "Apple": 

for(let i= 0; i < products.length; i++){
    if(products[i]['brand']=='Apple'){
    console.log(`${products[i]['name']} - ${products[i]['price']} - ${products[i]['brand']} - ${products[i]['count']}`);
    }
}

// 4.Tìm các sản phẩm có giá > 20000000:

for(let i= 0; i < products.length; i++){
    if(products[i]['price'] > 20000000){
    console.log(`${products[i]['name']} - ${products[i]['price']} - ${products[i]['brand']} - ${products[i]['count']}`);
    }
}

//5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)


for(let i= 0; i < products.length; i++){
    if(products[i].name.toLocaleLowerCase().includes('pro')){
    console.log(`${products[i]['name']} - ${products[i]['price']} - ${products[i]['brand']} - ${products[i]['count']}`);
    }
}

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product:

let Iphone6s = {}
Iphone6s.name = "IPhone 6s"
Iphone6s.price =  4000000
Iphone6s.brand = "Apple"
Iphone6s.count = 5
products.push(Iphone6s);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng:

for(let i= 0; i < products.length; i++){
    if(products[i]['brand']=='Samsung'){
        products.splice(i, 1);
    }
}
info(products);

// 8. Sắp xếp giỏ hàng theo price tăng dần:

products.sort(function(a, b){
    return a.price - b.price;
});
info(products);


// 9. Sắp xếp giỏ hàng theo count giảm dần:

products.sort(function(b, a){
    return a.count - b.count;
});
info(products);

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng:







