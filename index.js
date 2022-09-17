var express = require("express");
// var products = require ("./product.js")
var cors = require('cors')
const products = [
    {name: 'Apple XR', price:45.00, stock:25, rating:8.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/12/f5253aaa-203b-4341-8136-825def7b1631.jpg"},
    {name: 'Xiaomi Note', price:23.00, stock:75, rating:9.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/12/f5253aaa-203b-4341-8136-825def7b1631.jpg"},
    {name: 'Poco F4', price:32.00, stock:45, rating:7.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/12/f5253aaa-203b-4341-8136-825def7b1631.jpg"},
    {name: 'Oppo F Plus', price:52.00, stock:35, rating:8.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/12/f5253aaa-203b-4341-8136-825def7b1631.jpg"},
    {name: 'Vivo Flip', price:21.00, stock:75, rating:6.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/12/f5253aaa-203b-4341-8136-825def7b1631.jpg"},
    {name: 'Samsung S2', price:55.00, stock:74, rating:9.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/12/f5253aaa-203b-4341-8136-825def7b1631.jpg"},
    {name: 'Asus Zenbook 3', price:150.00, stock:5, rating:6.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/25/313245c5-184a-4aa5-8c7c-a81c4e81da26.png"},
    {name: 'Lenovo Ideapad', price:143.00, stock:10, rating:6.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/25/313245c5-184a-4aa5-8c7c-a81c4e81da26.png"},
    {name: 'Lenovo D ThinkBook', price:156.00, stock:12, rating:9.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/25/313245c5-184a-4aa5-8c7c-a81c4e81da26.png"},
    {name: 'Asus X ROG', price:190.00, stock:34, rating:8.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/25/313245c5-184a-4aa5-8c7c-a81c4e81da26.png"},
    {name: 'Lenovo F Thinkpad', price:110.00, stock:15, rating:4.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/25/313245c5-184a-4aa5-8c7c-a81c4e81da26.png"},
    {name: 'Macbook 13 Mini', price:220.00, stock:56, rating:7.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/25/313245c5-184a-4aa5-8c7c-a81c4e81da26.png"},
    {name: 'Asus H Gaming', price:170.00, stock:34, rating:6.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/25/313245c5-184a-4aa5-8c7c-a81c4e81da26.png"},
    {name: 'HP L Pavilion', price:120.00, stock:23, rating:5.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/25/313245c5-184a-4aa5-8c7c-a81c4e81da26.png"},
    {name: 'Polytron 42 Inc', price:70.00, stock:53, rating:7.0, category: "Smart TV", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg"},
    {name: 'LG 23 Inc', price:80.00, stock:60, rating:8.0, category: "Smart TV", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg"},
    {name: 'LG 21 Inc', price:56.00, stock:56, rating:5.0, category: "Smart TV", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg"},
    {name: 'LED Samsung 32 Inc', price:77.00, stock:45, rating:8.0, category: "Smart TV", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg"},
    {name: 'Apple XZ', price:45.00, stock:25, rating:8.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/12/f1250523-7438-4b4b-aede-e10887591cae.jpg"},
    {name: 'Xiaomi Redmi 4', price:23.00, stock:75, rating:9.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/12/f1250523-7438-4b4b-aede-e10887591cae.jpg"},
    {name: 'Poco F3', price:32.00, stock:45, rating:7.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/12/f1250523-7438-4b4b-aede-e10887591cae.jpg"},
    {name: 'Oppo F1', price:52.00, stock:35, rating:8.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/12/f1250523-7438-4b4b-aede-e10887591cae.jpg"},
    {name: 'Vivo Z1', price:21.00, stock:75, rating:6.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/12/f1250523-7438-4b4b-aede-e10887591cae.jpg"},
    {name: 'Samsung S3', price:55.00, stock:74, rating:9.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/12/f1250523-7438-4b4b-aede-e10887591cae.jpg"},
    {name: 'Asus Zenthink', price:150.00, stock:5, rating:6.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/1/ca2acd88-1564-4b87-8603-f658781f4d73.jpg.webp?ect=4g"},
    {name: 'Lenovo M Ideapad', price:143.00, stock:10, rating:6.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/1/ca2acd88-1564-4b87-8603-f658781f4d73.jpg.webp?ect=4g"},
    {name: 'Lenovo Z ThinkBook', price:156.00, stock:12, rating:9.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/1/ca2acd88-1564-4b87-8603-f658781f4d73.jpg.webp?ect=4g"},
    {name: 'Asus Z ROG', price:190.00, stock:34, rating:8.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/1/ca2acd88-1564-4b87-8603-f658781f4d73.jpg.webp?ect=4g"},
    {name: 'Lenovo Thinkpad', price:110.00, stock:15, rating:4.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/1/ca2acd88-1564-4b87-8603-f658781f4d73.jpg.webp?ect=4g"},
    {name: 'Macbook 14 Mini', price:220.00, stock:56, rating:7.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/1/ca2acd88-1564-4b87-8603-f658781f4d73.jpg.webp?ect=4g"},
    {name: 'Asus R Gaming', price:170.00, stock:34, rating:6.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/1/ca2acd88-1564-4b87-8603-f658781f4d73.jpg.webp?ect=4g"},
    {name: 'HP G Pavilion', price:120.00, stock:23, rating:5.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/1/ca2acd88-1564-4b87-8603-f658781f4d73.jpg.webp?ect=4g"},
    {name: 'Polytron 22 Inc', price:70.00, stock:53, rating:7.0, category: "Smart TV", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg"},
    {name: 'LG 67 Inc', price:80.00, stock:60, rating:8.0, category: "Smart TV", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg"},
    {name: 'LG 34 Inc', price:56.00, stock:56, rating:5.0, category: "Smart TV", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg"},
    {name: 'LED Samsung 22 Inc', price:77.00, stock:45, rating:8.0, category: "Smart TV", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg"},
    {name: 'Apple Mini', price:45.00, stock:25, rating:8.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/13/d5deade5-cbff-4e0d-b53c-f8d624fff12b.jpg"},
    {name: 'Xiaomi Redmi', price:23.00, stock:75, rating:9.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/13/d5deade5-cbff-4e0d-b53c-f8d624fff12b.jpg"},
    {name: 'Poco X3', price:32.00, stock:45, rating:7.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/13/d5deade5-cbff-4e0d-b53c-f8d624fff12b.jpg"},
    {name: 'Oppo F2', price:52.00, stock:35, rating:8.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/13/d5deade5-cbff-4e0d-b53c-f8d624fff12b.jpg"},
    {name: 'Vivo Zenfone', price:21.00, stock:75, rating:6.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/13/d5deade5-cbff-4e0d-b53c-f8d624fff12b.jpg"},
    {name: 'Samsung S1', price:55.00, stock:74, rating:9.0, category: "Smartphone", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/13/d5deade5-cbff-4e0d-b53c-f8d624fff12b.jpg"},
    {name: 'Asus Zengone', price:150.00, stock:5, rating:6.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/12/f219d283-81a1-428b-8ecf-5308a5add6bb.png"},
    {name: 'Lenovo X Ideapad', price:143.00, stock:10, rating:6.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/12/f219d283-81a1-428b-8ecf-5308a5add6bb.png"},
    {name: 'Lenovo R ThinkBook', price:156.00, stock:12, rating:9.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/12/f219d283-81a1-428b-8ecf-5308a5add6bb.png"},
    {name: 'Asus T ROG', price:190.00, stock:34, rating:8.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/12/f219d283-81a1-428b-8ecf-5308a5add6bb.png"},
    {name: 'Lenovo Lp Thinkpad', price:110.00, stock:15, rating:4.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/12/f219d283-81a1-428b-8ecf-5308a5add6bb.png"},
    {name: 'Macbook Y Mini', price:220.00, stock:56, rating:7.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/12/f219d283-81a1-428b-8ecf-5308a5add6bb.png"},
    {name: 'Asus C Gaming', price:170.00, stock:34, rating:6.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/12/f219d283-81a1-428b-8ecf-5308a5add6bb.png"},
    {name: 'HP R Pavilion', price:120.00, stock:23, rating:5.0, category: "Laptop", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/12/f219d283-81a1-428b-8ecf-5308a5add6bb.png"},
    {name: 'Polytron 23 Inc', price:70.00, stock:53, rating:7.0, category: "Smart TV", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg"},
    {name: 'LG Led Inc', price:80.00, stock:60, rating:8.0, category: "Smart TV", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg"},
    {name: 'LG Oled 42 Inc', price:56.00, stock:56, rating:5.0, category: "Smart TV", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg"},
    {name: 'LED Samsung 43 Inc', price:77.00, stock:45, rating:8.0, category: "Smart TV", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg"},
    {name: 'Smsung LCD 45 Inc', price:56.00, stock:56, rating:5.0, category: "Smart TV", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg"},
    {name: 'Xiaomi 64 Inc', price:89.00, stock:45, rating:8.0, category: "Smart TV", img:"https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/29/c9363c39-d5c2-44bc-bd48-8a6fcffbda8b.jpg"}
]

var app = express();
app.use(cors())
app.get("/", (req, res, next) => {
    // console.log(products)
    res.json(products);
   });
app.listen(3000, () => {
 console.log("Server running on port 3000");
});