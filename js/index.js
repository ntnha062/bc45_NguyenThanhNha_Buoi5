
//Bài 1

function tinhDiemUuTien(khuVuc, doiTuong){
    var diemUuTien = 0;
    var diemKhuVuc = 0;
    var diemDoiTuong = 0;

    switch(khuVuc){
        case "A":{
            diemKhuVuc += 2;
            break;
        }
        case "B":{
            diemKhuVuc += 1;
            break;
        }
        case "C":{
            diemKhuVuc += 0.5;
            break;
        }
        default:{
            diemKhuVuc += 0;
        }
    }

    switch(doiTuong){
        case 1:{
            diemDoiTuong += 2.5;
            break;
        }
        case 2:{
            diemDoiTuong += 1.5;
            break;
        }
        case 3:{
            diemDoiTuong += 1;
            break;
        }
        default:{
            diemDoiTuong += 0;
        }
    }

    diemUuTien = diemKhuVuc + diemDoiTuong;

    return diemUuTien;
}

function tinhDiemMonHoc(toan, ly, hoa){
    var dTong = 0;

    dTong += (toan + ly + hoa);

    return dTong;
}


document.getElementById('xac-nhan-1').onclick = function(){
    var dToan = +document.getElementById('toan').value;
    var dLy = +document.getElementById('ly').value;
    var dHoa = +document.getElementById('hoa').value;
    var khuVuc = document.getElementById('khu-vuc').value;
    var doiTuong = +document.getElementById('doi-tuong').value;
    var dTongKet = 0;
    var dChuan = 16.5;
    var danhGia = '';

    var dTongKet = tinhDiemUuTien(khuVuc, doiTuong) + tinhDiemMonHoc(dToan, dLy, dHoa);
   
    if(dToan*dLy*dHoa >= 0){
        if(dTongKet >= dChuan && dToan*dLy*dHoa != 0){
            danhGia = `Đạt , Điểm: ${dTongKet}`;
        }else{
            danhGia = `Rớt , Điểm: ${dTongKet}`;
        }
    }else{
        danhGia = 'Điểm nhập vào không hợp lệ!';
    }


    document.getElementById('kq-thi').innerHTML = danhGia;
};

//Bài 2

function tinhTienDien(soDien){
    var soTien =  0;
    if(soDien <= 50){
        soTien += soDien*500;
    }else if(soDien <= 100 && soDien > 50){
        soTien += 50*500 + 650*(soDien - 50)
    }else if(soDien <= 200 && soDien > 100){
        soTien += 50*500 + 50*650 + 850*(soDien - 100)
    }else if(soDien <= 350 && soDien > 200){
        soTien += 50*500 + 50*650 + 100*850 + 1100*(soDien - 200)
    }else if(soDien > 350){
        soTien += 50*500 + 50*650 + 100*850 + 1100*150 + 1300*(soDien - 350)
    }

    return soTien
}

document.getElementById('xac-nhan-2').onclick = function(){
    var tenNguoiDung = document.getElementById('ten').value;
    var soDien = +document.getElementById('soKw').value;
    var vndFomat = new Intl.NumberFormat('vn-VN');

    var soTien = tinhTienDien(soDien)

    document.getElementById('tong-tien').innerHTML = `
        Họ tên: ${tenNguoiDung} ; Tiền điện: ${vndFomat.format(soTien)} vnđ
    `;

}

//Bài 3

function tinhThuNhapChiuThue(tongThuNhap, nguoiPhuThuoc){
    var thuNhapChiuThue = 0;
    thuNhapChiuThue = tongThuNhap - 4e+6 - nguoiPhuThuoc *1.6e+6;
    return thuNhapChiuThue
}

function tinhThueThuNhap(thuNhapChiuThue){
    var thueThuNhap = 0;
    if(thuNhapChiuThue >= 0){
        if(thuNhapChiuThue <= 60e+6){
            thueThuNhap += thuNhapChiuThue *0.05;
        }else if(thuNhapChiuThue <= 120e+6){
            thueThuNhap += 60e+6 *0.05;
            thuNhapChiuThue -= 60e+6;
            thueThuNhap += thuNhapChiuThue *0.1;
        }else if(thuNhapChiuThue <= 210e+6){
            thueThuNhap += 60e+6 *0.05;
            thueThuNhap += 120e+6 *0.1;
            thuNhapChiuThue -= (60e+6 + 120e+6);
            thueThuNhap += thuNhapChiuThue *0.15;
        }else if(thuNhapChiuThue <= 384e+6){
            thueThuNhap += 60e+6 *0.05;
            thueThuNhap += 120e+6 *0.1;
            thueThuNhap += 210e+6 *0.15;
            thuNhapChiuThue -= (60e+6 + 120e+6 + 210e+6);
            thueThuNhap += thuNhapChiuThue *0.2;
        }else if(thuNhapChiuThue <= 624e+6){
            thueThuNhap += 60e+6 *0.05;
            thueThuNhap += 120e+6 *0.1;
            thueThuNhap += 210e+6 *0.15;
            thueThuNhap += 384e+6 *0.2;
            thuNhapChiuThue -= (60e+6 + 120e+6 + 210e+6 + 384e+6);
            thueThuNhap += thuNhapChiuThue *0.25;
        }else if(thuNhapChiuThue <= 960e+6){
            thueThuNhap += 60e+6 *0.05;
            thueThuNhap += 120e+6 *0.1;
            thueThuNhap += 210e+6 *0.15;
            thueThuNhap += 384e+6 *0.2;
            thueThuNhap += 624e+6 *0.25;
            thuNhapChiuThue -= (60e+6 + 120e+6 + 210e+6 + 384e+6 + 624e+6);
            thueThuNhap += thuNhapChiuThue *0.3;
        }else if(thuNhapChiuThue > 960e+6){
            thueThuNhap += 60e+6 *0.05;
            thueThuNhap += 120e+6 *0.1;
            thueThuNhap += 210e+6 *0.15;
            thueThuNhap += 384e+6 *0.2;
            thueThuNhap += 624e+6 *0.25;
            thueThuNhap += 960e+6 *0.3;
            thuNhapChiuThue -= (60e+6 + 120e+6 + 210e+6 + 384e+6 + 624e+6 + 960e+6);
            thueThuNhap += thuNhapChiuThue *0.35;
        }
    }else{
        alert('Số tiền thu nhập không hợp lệ');
    }

    return thueThuNhap;
}

document.getElementById('xac-nhan-3').onclick = function(){
    var hoTen = document.getElementById('hoTen').value;
    var tongThuNhap = +document.getElementById('thuNhap').value;
    var nguoiPhuThuoc = +document.getElementById('nguoiPhuThuoc').value;
    var vndFomat = new Intl.NumberFormat('vn-VN');

    thuNhapChiuThue = tinhThuNhapChiuThue(tongThuNhap, nguoiPhuThuoc);

    thueThuNhap = tinhThueThuNhap(thuNhapChiuThue);

    document.getElementById('thong-tin-thue').innerHTML = `
    Họ tên: ${hoTen} ; Thuế thu nhập: ${vndFomat.format(thueThuNhap)} vnđ
    `;
}


//Bài 4
document.getElementById('loaiKH').onchange = function(){
    var loaiKh = document.getElementById('loaiKH').value;
    if(loaiKh == "DN"){
        document.getElementById('ket-noi-DN').className = '';
    }else{
        document.getElementById('ket-noi-DN').className = 'd-none';
    }
}

function tinhTienCap(loaiKh, soKenhCc, soKetNoi){
    var phiKenhCc = 0;
    var phiXuLyHD = 15;
    var phiDVCB = 75;
    var tongTien = 0;

    if(loaiKh == "DN"){
        phiDVCB = 75;
        if(soKetNoi>10){
            phiDVCB += (soKetNoi-10)*5;
        }
        phiXuLyHD = 15;
        phiKenhCc = soKenhCc*50;

        tongTien = phiDVCB + phiXuLyHD + phiKenhCc;
    }else{
        phiDVCB = 20.5;
        phiXuLyHD = 4.5;
        phiKenhCc = soKenhCc*7.5;

        tongTien = phiDVCB + phiXuLyHD + phiKenhCc;
    }

    return tongTien; 
}

document.getElementById('xac-nhan-4').onclick = function(){
    var mskh = document.getElementById('MSKH').value;
    var loaiKh = document.getElementById('loaiKH').value;
    var soKenhCc = +document.getElementById('soKenhCC').value;
    var soKetNoi = +document.getElementById('soKN').value;
    var usdFomat = new Intl.NumberFormat();

    var tongTien = tinhTienCap(loaiKh, soKenhCc, soKetNoi);

    document.getElementById('tien-cap').innerHTML = `
        Mã khách hàng: ${mskh} ; Tiền cáp: ${usdFomat.format(tongTien)}$
    `;
}


