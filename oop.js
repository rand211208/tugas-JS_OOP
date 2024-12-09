// soal 1

// function person(firstName, lastName, age) {
//     this.firstName = firstName;      
//     this.lastName = lastName;    
//     this.age = age;    

//     this.sayHello = function (name) {
//         console.log(`Hello ${name}, my name is ${this.firstName}, ${this.lastName}, im years old ${this.age}`);
//     } 
// }

// const ridwan = new person("ridwan", "basandid", "99");
// ridwan.sayHello("dika");

// const kiki = new person("kiki", "elsa", "100");
// kiki.sayHello("dika");

// soal 2

// function persegipanjang(panjang,lebar){
//     this.panjang = panjang;
//     this.lebar = lebar;

//     this.luas = function () {
//         console.log(this.panjang * this.lebar);
//     }
//     this.keliling = function () {
//         console.log(2 * (this.panjang + this.lebar));
//     }
  
// }
// let persegipanjang1 = new persegipanjang(10, 10);
// persegipanjang1.luas();
// persegipanjang1.keliling();

// soal 1

// class person {
//     constructor(firstname,lastname,age) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }
//     showdetails(name) {
//         console.log(`hello ${name}, my name is ${this.firstname}, ${this.lastname}, im years old ${this.age}`);
//     }
// }

// const kiki= new person("subi", "basandid", "100");
// kiki.showdetails("kiki"), ("my name is");

// const mahmud= new person("subi", "basandid", "100");
// kiki.showdetails("mahmud"), ("my name is");

// soal 2

// class persegipanjang{
//     constructor(panjang, lebar){
//         this.panjang = panjang;
//         this.lebar = lebar;
//     }
//     luas() {
//         console.log(this.panjang * this.lebar);
//         };
//     keliling () {
//         console.log(2*(this.panjang + this.lebar));
//         };
// } 
// const persegipanjang2 = new persegipanjang(5, 5);
// persegipanjang2.luas();
// persegipanjang2.keliling();

//soal 3

// class rekening {
//     constructor (norek, saldo){
//         this.saldo = saldo;
//         this.norek = norek;
//     }

//     setorTunai(nominal){
//         return(this.saldo = nominal + this.saldo)
//     }
//     tarikTunai(nominal){
//         return(this.saldo = nominal + this.saldo)
//     }
// }

// let o = new rekening (123456, 50000);
// console.log(o.setorTunai(10000));
// console.log(o.tarikTunai(20000));

// let p = new rekening (123456, 1000000);
// console.log(o.setorTunai(10000));
// console.log(o.tarikTunai(20000));

// let r = new rekening (123456, 2000000);
// console.log(o.setorTunai(10000));
// console.log(o.tarikTunai(20000));

// soal 5

// class book {
//     constructor(title, authour, year) {
//     this.title = title;
//     this.authour = authour;
//     this.year = year;
//  }
//  bookDetails() {
//     return(`judul: ${this.title}, penulis: ${this.authour}, tanggal dibikin: ${this.year}`);
//  }
// } 
// class ebook extends book {
//     constructor(title, authour, year,price){
//         super(title,authour,year);
//         this.price = price;
//     }
//     bookDetails() {
//         super.bookDetails();
//         return `${super.bookDetails()},harga: ${this.price}`;
//     }
// }
// const Buku = new ebook ("Matrial God", "dikatampan", "2024", "10000000");
// console.log(Buku.bookDetails());

// soal 6

// class emloyee{
//     constructor(nama,gaji){
//         this.nama = nama;
//         this.gaji = gaji;
//     }
//     hitunglahGajiTahunan(){
//         return`${this.nama} ${this.gaji}*12`;
//     }
// }
// class manager extends emloyee{
//     constructor(nama,gaji,departemen){
//         super(nama, gaji);
//         this.departemen = departemen;
//     }
//     hitungGajiTahunan(){
//         return`nama karyawan: ${this.nama}, gaji bulanan:${this.gaji} nama manager: ${this.nama} departemen: ${this.departemen} bonus: 10% total gaji: ${this.gaji * 12 + (this.gaji / 10)}`;

//     }
// }
// let dika = new manager('dika','60000','bumn');
// console.log(dika.hitungGajiTahunan())
// let karyawan2 = new manager('ridwan',40000,'kominfo');
// console.log(karyawan2.hitungGajiTahunan())

// soal 7

// Mendefinisikan class Produk
// class Produk {
//     constructor(idProduk, nama, harga) {
//         this.idProduk = idProduk;
//         this.nama = nama;
//         this.harga = harga; 
//     }

    
//     hitungTotalHarga(kuantitas) {
//         return this.harga * kuantitas; 
               
//     }
// }


// class ElectronicProduk extends Produk {
//     constructor(idProduk, nama, harga, masaGaransi) {
//         super(idProduk, nama, harga); 
//         this.masaGaransi = masaGaransi; 
//     }

//     hitungTotalHarga(kuantitas) {
//       super(idProduk, nama, harga + this.masaGaransi);
//       return  + this.masaGaransi; 
// }
// }

// const produk1 = new ElectronicProduk(1, "Iphone", 10000, "2");


// const kuantitas = 2;
// console.log(`${produk1.idProduk}. Nama Produk: ${produk1.nama}`);
// console.log(`Harga Total untuk ${kuantitas} unit: Rp${produk1.hitungTotalHarga(kuantitas)}`);

//soal 8

// class RekeningBank {
//     constructor(nomorRekening, saldo = 0) {
//         this.nomorRekening = nomorRekening;
//         this.saldo = saldo;
//     }

//     setorUang(jumlah) {
//         if (jumlah > 0) {
//             this.saldo += jumlah;
//             console.log(`Setor uang sebesar Rp${jumlah}. Saldo saat ini: Rp${this.saldo}.`);
//         } else {
//             console.log("Jumlah setor harus lebih dari 0.");
//         }
//     }

//     tarikUang(jumlah) {
//         if (jumlah > 0 && jumlah <= this.saldo) {
//             this.saldo -= jumlah;
//             console.log(`Tarik uang sebesar Rp${jumlah}. Saldo saat ini: Rp${this.saldo}.`);
//         } else if (jumlah > this.saldo) {
//             console.log("Saldo tidak mencukupi untuk penarikan.");
//         } else {
//             console.log("Jumlah tarik harus lebih dari 0.");
//         }
//     }

//     tampilkanSaldo() {
//         console.log(`Saldo saat ini di rekening ${this.nomorRekening}: Rp${this.saldo}.`);
//     }
// }

// let rekening1 = new RekeningBank('1234567890', 0);
// let rekening2 = new RekeningBank('0987654321', 0);
// let rekening3 = new RekeningBank('2387653258', 0);

// rekening1.setorUang(50000);
// rekening1.tarikUang(30000);
// rekening1.tampilkanSaldo();
 
// rekening2.setorUang(20000);
// rekening2.tarikUang(5000);
// rekening2.tampilkanSaldo();
// rekening3.setorUang(75000);
// rekening3.tarikUang(25000);
// rekening3.tampilkanSaldo();