let loi = [];
const countryList = ["Việt Nam", "Mỹ", "Trung Quốc", "Ấn Độ", "Nhật Bản"];

const selectCountry = document.getElementById("selectCountry");
countryList.forEach(country => {
  const option = document.createElement("option");
  option.value = country;
  option.text = country;
  selectCountry.appendChild(option);
});

function hienLoi(color){
  loi.forEach(index => {
    const inputElement = document.getElementsByName(index)[0];
    inputElement.style.backgroundColor = color;
  })
}

function isValidEmail(email) {
  // Mẫu regex để kiểm tra định dạng email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function kiemTraCheckBox(){
  const checkboxes = document.querySelectorAll('input[type="checkbox"][name="sothich[]"]');
  let atLeastOneChecked = false;
  checkboxes.forEach(checkbox => {
    if (checkbox.checked){
      atLeastOneChecked = true;
    }
  })
  if (atLeastOneChecked)
    return true;
  else 
    return false;
}

function kiemtra(){
  hienLoi("white");
  loi = [];
  let mssv = document.frm1.ms.value;
  let hoten = document.frm1.fullname.value;
  let email = document.frm1.email.value;
  let gioitinh = document.frm1.gioitinh.value;
  let quoctich = document.frm1.quoctich.value;
  let ghichu = document.frm1.ghichu.value;
  
  if (mssv==""){
    loi.push("ms");
  }

  if (hoten == ""){
    loi.push("fullname");
  }

  if (email == "" || !isValidEmail(email)){
    loi.push("email")
  }

  if (gioitinh == ""){
    loi.push("gioitinh")
  } 

  if (!kiemTraCheckBox()){
    loi.push("sothich");
  }

  if (quoctich == ""){
    loi.push("quoctich");
  }

  if (ghichu.length > 200){
    loi.push("ghichu");
  }
  hienLoi("red");
  if (loi.length===0){
    return true;
  }
  else  {
    return false;
  }
    
}
