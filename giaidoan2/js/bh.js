let danhSachHangHoa = [
  {name: "Border Land 2", dongia: 200},
  {name: "ARK: survival evoled", dongia: 300},
  {name: "Dark soul III", dongia: 400},
  {name: "Final Fantasy VII", dongia: 200},
  {name: "God of war", dongia: 100},
  {name: "Hades", dongia: 600},
  {name: "Grand theft auto V", dongia: 1200},

]
const mucgiaList = ["Tất cả", "100 - 500", "500 - 1000", ">1000"];
const mucGiaSelect = document.getElementById("mucGiaSelect");
mucgiaList.forEach(mucgia => {
  const option = document.createElement("option");
  option.value = mucgia;
  option.text = mucgia;
  mucGiaSelect.appendChild(option);
})


// Lấy thẻ tbody trong bảng
const tableBody = document.getElementById("tableBody");

// Lặp qua danh sách hàng hóa và tạo dòng trong bảng
danhSachHangHoa.forEach((hangHoa) => {
  const row = document.createElement("tr");

  // Tạo cột checkbox
  const checkboxCell = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  checkboxCell.appendChild(checkbox);
  row.appendChild(checkboxCell);

  // Tạo cột tên hàng hóa
  const nameCell = document.createElement("td");
  nameCell.textContent = hangHoa.name;
  row.appendChild(nameCell);

  // Tạo cột đơn giá
  const priceCell = document.createElement("td");
  priceCell.textContent = hangHoa.dongia;
  row.appendChild(priceCell);

  // Tạo cột số lượng
  const quantityCell = document.createElement("td");
  const quantityInput = document.createElement("input");
  quantityInput.disabled = true;
  quantityInput.type = "number";
  quantityInput.className = "soluong";
  quantityCell.appendChild(quantityInput);
  hangHoa.soluong = quantityInput.value;
  row.appendChild(quantityCell);
  

  // Tạo cột thành tiền
  const totalCell = document.createElement("td");
  totalCell.textContent = 0;
  totalCell.className = "thanhtien";
  hangHoa.thanhtien = totalCell.textContent;
  row.appendChild(totalCell);

  // Thêm dòng vào tbody
  tableBody.appendChild(row);
});


mucGiaSelect.addEventListener("change", function () {
  const selectedMucGia = mucGiaSelect.value;
  filterProductsByMucGia(selectedMucGia);
});


function filterProductsByMucGia(selectedMucGia) {
  const rows = document.querySelectorAll("table tr"); // Lấy tất cả các dòng trong bảng
  rows.forEach((row, index) => {
    if (index === 0) return; // Bỏ qua dòng tiêu đề

    const donGiaCell = row.querySelector("td:nth-child(3)");
    if (!donGiaCell) return; // Bỏ qua các dòng không có ô don gia

    const donGia = parseInt(donGiaCell.textContent);

    switch (selectedMucGia) {
      case "100 - 500":
        row.style.display = donGia >= 100 && donGia <= 500 ? "" : "none";
        break;
      case "500 - 1000":
        row.style.display = donGia >= 500 && donGia <= 1000 ? "" : "none";
        break;
      case ">1000":
        row.style.display = donGia > 1000 ? "" : "none";
        break;
      default:
        row.style.display = ""; // Hiển thị tất cả các sản phẩm khi chọn "tat ca"
    }
  });
}

const checkboxList = document.querySelectorAll(".checkbox");
const quantityList = document.querySelectorAll(".soluong");

checkboxList.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    // Nếu checkbox được chọn, vô hiệu hóa input số lượng tương ứng
    if(checkbox.checked){
      quantityList[index].disabled = false;
    } else {
      quantityList[index].disabled = true;
    }
  });
})

const thanhtienList = document.querySelectorAll(".thanhtien");
const tongtien = document.getElementById("tongtien");
function tinhtien (index) {
  tongtien.innerText = 0;
  danhSachHangHoa[index].thanhtien = danhSachHangHoa[index].dongia * danhSachHangHoa[index].soluong;
  thanhtienList[index].textContent = danhSachHangHoa[index].thanhtien;
  danhSachHangHoa.forEach((hanghoa) => {
    tongtien.innerText = Number(tongtien.innerText) + Number(hanghoa.thanhtien);
  })
  console.log(tongtien.innerText);
}

quantityList.forEach((price, index) => {
  price.addEventListener('keyup', () => {
    tinhtien(index);
    console.log(danhSachHangHoa[index].soluong);
  })
  price.addEventListener('input', () => {
    danhSachHangHoa[index].soluong = price.value;
  })
})

