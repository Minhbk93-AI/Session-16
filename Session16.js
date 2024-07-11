// [Bài tập] Luyện tập tạo và sử dụng hàm 01
// BAI 1:
// function alertMessage() {
//   alert("Xin chao");
// }

// BÀI 2:
// function increment(number) {
//   return number + 1;
// }

// // Gọi hàm và hiển thị kết quả lên màn hình
// function displayResult() {
//   let Number = parseInt(prompt("Nhập vào một số:"));
//   let result = increment(Number);
//   document.getElementById("result").innerText =
//     "Kết quả sau khi tăng: " + result;
// }

// BÀI 3:

// function nameTS(a, b) {
//   if (a > b) {
//     alert(`Số ${a} lớn hơn ${b}`);
//   } else {
//     return a + b;
//   }
// }
// console.log(nameTS(5, 6));

//BÀI 4:
// function addNumbers() {
//   console.log(result);
//   firstNum = 4;
//   secondNum = 8;
//   result = firstNum + secondNum;
//   return result;
// }

// result = 0;
// result = addNumbers();
// console.log(result);

//BÀI 5:

// let A = [
//   "Polaris",
//   " Aldebaran",
//   "Deneb",
//   "Vega",
//   "Altair",
//   " Dubhe",
//   "Regulus",
// ];
// let B = [
//   "Ursa Minor",
//   "Tarurus",
//   "Cygnus",
//   "Lyra, Aquila",
//   "Ursa Major",
//   "Leo",
// ];
// let star = "Polaris";
// function sTAR(a) {
//   let c;
//   for (let i = 0; i <= A.length - 1; i++) {
//     if (A[i] == a) {
//       c = B[i];
//     }
//   }
//   return c;
// }
// console.log(sTAR(star));
// console.log(sTAR);

//TH2:
// let A = [
//   "Polaris",
//   " Aldebaran",
//   "Deneb",
//   "Vega",
//   "Altair",
//   " Dubhe",
//   "Regulus",
// ];
// let B = [
//   "Ursa Minor",
//   "Tarurus",
//   "Cygnus",
//   "Lyra, Aquila",
//   "Ursa Major",
//   "Leo",
// ];
// let N = prompt("Mời bạn nhập tên ngôi sao");
// function sTAR(a) {
//   let c;
//   for (let i = 0; i <= A.length - 1; i++) {
//     if (A[i] == a) {
//       c = B[i];
//     }
//   }
//   return c;
// }
// console.log(sTAR(N));

// 2.[Bài tập] Luyện tập tạo và sử dụng hàm 02
// function binhPhuong(a) {
//   let bPhuong = a ** 2;
//   return bPhuong;
// }
// console.log(binhPhuong(3));

//3.

// function dienTich(a, b) {
//   let S = a * b;
//   return S;
// }

// console.log(dienTich(3, 4));

// BAI 3:
// function giaiThua(a) {
//   let gThua = 1;
//   for (let i = 1; i <= a; i++) {
//     gThua = gThua * i;
//   }
//   return gThua;
// }
// console.log(giaiThua(6));

//BÀI 4:
// let N = prompt("Nhập vào ký tự bất kì");

// function kiemTra(a) {
//   let check = false;
//   if (a % 1 == 0) {
//     return (check = true);
//   } else {
//     return (check = false);
//   }
// }
// console.log(kiemTra(N));

//BÀI 5:
// function soNguyen(a, b, c) {
//   let C = [];
//   C.push(a);
//   C.push(b);
//   C.push(c);
//   let min = C[0];
//   for (i = 0; i <= C.length - 1; i++) {
//     if (min > C[i]) {
//       min = C[i];
//     }
//   }
//   return min;
// }
// console.log(soNguyen(5, 2, 4));

// BAI 6:
// function kiemTra(a) {
//   if (a > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(kiemTra(5));

// BAI 7:
// function soNguyen(a, b) {
//   sapxep = a;
//   a = b;
//   b = sapxep;
//   return { a, b };
// }
// console.log(soNguyen(1, 2));

// BAI 8:
// let A = [1, 2, 4, 3, 5, 6, 5, 8];
// function daoNguocMang() {
//   for (let i = 0; i <= (A.length - 1) / 2; i++) {
//     let sapxep = A[i];
//     A[i] = A[A.length - 1 - i];
//     A[A.length - 1 - i] = sapxep;
//   }
//   return A;
// }
// console.log(daoNguocMang(A));

// BAI 9:
// function kiemTraKiTuThuocMang(a, arr) {
//   for (let i = 1; i <= arr.length - 1; i++) {
//     let dem = 1;
//     if ((arr[i] = a)) {
//       dem = dem + 1;
//       return dem;
//     } else {
//       return -1;
//     }
//   }
// }
// console.log(kiemTraKiTuThuocMang(1, [1, 2, 3, 4, 1]));

// [Bài tập] LUYỆN TẬP VỚI HÀM (Cơ bản)
// Bài1: function tinhTong(a, b) {
//   return a + b;
// }
// console.log(tinhTong(4, 5));

// BÀI2:

// function dienTich(banKinh) {
//   let S = Math.PI * banKinh ** 2;
//   return S;
// }

// console.log(dienTich(3));

// BAI 3:
// let N = prompt("Nhập vào ký tự bất kì");

// function kiemTra(a) {
//   let check = false;
//   if (a % 1 == 0) {
//     return (check = true);
//   } else {
//     return (check = false);
//   }
// }
// console.log(kiemTra(N));

//BAI 4:
// function kiemTra(a) {
//   if (a > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(kiemTra(5));

//BAI 5
// function soNguyen(a, b) {
//   sapxep = a;
//   a = b;
//   b = sapxep;
//   return { a, b };
// }
// console.log(soNguyen(1, 2));

// [Bài tập] LUYỆN TẬP VỚI HÀM (Tổng hợp)
// let a = +prompt("NHập vào số thứ nhất");
// let b = +prompt("NHập vào số thứ hai");
// let c = +prompt("NHập vào số thứ ba");
// function timMin(a1, b1, c1) {
//   let min;
//   if (c1 < a1 && c1 < b1) {
//     return (min = c1);
//   } else if (b1 < a1) {
//     return (min = b1);
//   } else {
//     return (min = c1);
//   }
// }
// console.log(timMin(a, b, c));

//Kiểm tra số nguyên tố
// let a = +prompt("Nhập vào một số");
// function soNguyenTo(b) {
//   if (a <= 2 && a !== 0) {
//     return false;
//   }

//   for (let i = 2; i < a; i++) {
//     if (a % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// if (soNguyenTo(a)) {
//   alert(`Số ${a} là số nguyên tố`);
// } else {
//   alert(`Số ${a} không là số nguyên tố`);
// }

//BAI 3
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function findWithSumTen(array) {
//   let A = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === 10) {
//         A.push([array[i], array[j]]);
//       }
//     }
//   }
//   return A;
// }

// let result = findWithSumTen(arr);
// console.log("Các cặp số có tổng bằng 10 là:", result);

// Bài4:
// let input = prompt("Nhập vào chuỗi kí tự(VD: Hello word)");
// arr = input.toLowerCase();
// function tanXuat(mang) {
//   let c = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     for (let j = i + 1; j <= arr.length - 1; j++) {
//       let dem = 1;

//       if (arr[i] === arr[j] && !c.includes(arr[j])) {
//         c.push(arr[j]);
//         dem = dem + 1;
//       }
//       return `${arr[j]} xuất hiện ${dem} lần`;
//     }
//   }
// }
// console.log(tanXuat(arr));

// BAI 5:
// function giaiThua(a) {
//   let gThua = 1;
//   for (let i = 1; i <= a; i++) {
//     gThua = gThua * i;
//   }
//   return gThua;
// }
// console.log(giaiThua(6));

//BÀI 6:
// let A = [1, 3, 2, 6, 5, 8, 9, 9];
// function sapXep(mang) {
//   for (let i = 0; i < A.length - 1; i++) {
//     for (let j = i + 1; j <= A.length - 1; j++) {
//       if (A[i] > A[j]) {
//         let vitri = A[i];
//         A[i] = A[j];
//         A[j] = vitri;
//       }
//     }
//   }
//   return A;
// }
// console.log(sapXep(A));

//BÀI 7:
function isLeapYear(year) {
  // Kiểm tra nếu năm chia hết cho 4
  if (year % 4 === 0) {
    // Kiểm tra nếu năm chia hết cho 100
    if (year % 100 === 0) {
      // Kiểm tra nếu năm chia hết cho 400
      if (year % 400 === 0) {
        return true; // Năm chia hết cho 400 là năm nhuận
      } else {
        return false; // Năm chia hết cho 100 nhưng không chia hết cho 400 không phải là năm nhuận
      }
    } else {
      return true; // Năm chia hết cho 4 nhưng không chia hết cho 100 là năm nhuận
    }
  } else {
    return false; // Năm không chia hết cho 4 không phải là năm nhuận
  }
}

// Lấy năm từ người dùng
let year = parseInt(prompt("Nhập vào năm cần kiểm tra:"));

// Gọi hàm kiểm tra năm nhuận và hiển thị kết quả
if (isLeapYear(year)) {
  console.log(year + " là năm nhuận.");
} else {
  console.log(year + " không phải là năm nhuận.");
}
