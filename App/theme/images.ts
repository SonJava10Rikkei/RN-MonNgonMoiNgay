const IMAGES = {
    backgroundHistory: require('../assets/Img/Background/backgroundHistory.jpg'),
    BGTet: require('../assets/Img/Background/hinh-nen-tet-cho-dien-thoai-8.jpg'),

    dishComHenHue: require('../assets/Img/Products/Dish/ComHenHue/com-hen-hue.jpg'),
    dishComHenHueComTrang: require('../assets/Img/Products/Dish/ComHenHue/cach-nau-com-hen.jpg'),
    dishComHenHueSoChe: require('../assets/Img/Products/Dish/ComHenHue/cach-lam-com-hen-hue-ngon.jpg'),
    dishComHenHueXaoHen: require('../assets/Img/Products/Dish/ComHenHue/cach-nau-com-hen-quang-ngai.jpg'),
    dishComHenHueNuocHen: require('../assets/Img/Products/Dish/ComHenHue/cong-thuc-nau-com-hen.jpg'),
    dishComHenHueManRuoc: require('../assets/Img/Products/Dish/ComHenHue/quan-com-hen-ngon.jpg'),
    dishComHenHueDone: require('../assets/Img/Products/Dish/ComHenHue/day-cach-nau-com-hen.jpg'),

    dishCanhGheRauMuong: require('../assets/Img/Products/Dish/CanhGheRauMuong/canh-ghe-rau-muong.jpg'),
    dishCanhGheRauMuongSoChe: require('../assets/Img/Products/Dish/CanhGheRauMuong/cach-nau-canh-ghe-rau-muong.jpg'),
    dishCanhGheRauMuongNauCanh: require('../assets/Img/Products/Dish/CanhGheRauMuong/ghe-sua-nau-rau-muong-ca-chua.jpg'),
    dishCanhGheRauMuongDone: require('../assets/Img/Products/Dish/CanhGheRauMuong/ghe-nau-canh-rau-muong-ngon.jpg'),

    dishChaBo: require('../assets/Img/Products/Dish/ChaBo/cha-bo.jpg'),
    dishChaBoSoChe: require('../assets/Img/Products/Dish/ChaBo/cach-lam-cha-bo.jpg'),
    dishChaBoXayThit: require('../assets/Img/Products/Dish/ChaBo/quet-thit-va-chu-y-den-nhiet-do-cua-gio.jpg'),
    dishChaBoSoCheKhac: require('../assets/Img/Products/Dish/ChaBo/gio-bo-duoc-tron-deu-cung-mo-rau-thi-la.jpg'),
    dishChaBoGoiCha: require('../assets/Img/Products/Dish/ChaBo/goi-gio-bang-la-chuoi.jpg'),
    dishChaBoDone: require('../assets/Img/Products/Dish/ChaBo/thanh-pham-sau-thi-duoc-luoc-chin.jpg'),

    dishChaLua: require('../assets/Img/Products/Dish/ChaLua/cha-lua.jpg'),
    dishChaLuaPhaChe: require('../assets/Img/Products/Dish/ChaLua/cach-lam-cha-lua.jpg'),
    dishChaLuaUopThit: require('../assets/Img/Products/Dish/ChaLua/cach-lam-cha-lua-hue.jpg'),
    dishChaLuaQuetThit: require('../assets/Img/Products/Dish/ChaLua/cach-lam-cha-lua-tai-nha.jpg'),
    dishChaLuaGoiThit: require('../assets/Img/Products/Dish/ChaLua/cach-lam-cha-lua-de-ban.jpg'),
    dishChaLuaDone: require('../assets/Img/Products/Dish/ChaLua/cha-lua-thit-heo.jpg'),

    dishChaoCaPhoMai: require('../assets/Img/Products/Dish/ChaoCaPhoMai/chao-ca-hoi-pho-mai-mon-chao-an-dam-dinh-duong-cho-tre.jpg'),
    dishChaoCaPhoMaiCaHoi: require('../assets/Img/Products/Dish/ChaoCaPhoMai/cach-nau-chao-ca-hoi-pho-mai.jpg'),
    dishChaoCaPhoMaiSoChe: require('../assets/Img/Products/Dish/ChaoCaPhoMai/chao-ruoc-ca-hoi-pho-mai-cho-be-an-dam.jpg'),
    dishChaoCaPhoMaiNauChao: require('../assets/Img/Products/Dish/ChaoCaPhoMai/chao-ca-hoi-bi-do-pho-mai.jpg'),
    dishChaoCaPhoMaiDone: require('../assets/Img/Products/Dish/ChaoCaPhoMai/chao-ca-hoi-cai-bo-xoi-pho-mai.jpg'),

    dishGoiDuaLeo: require('../assets/Img/Products/Dish/GoiDuaLeo/goi-dua-leo-kho-ca-sac.jpg'),
    dishGoiDuaLeoSoChe: require('../assets/Img/Products/Dish/GoiDuaLeo/goi-dua-le-kho-ca-sac.jpg'),
    dishGoiDuaLeoNuongCa: require('../assets/Img/Products/Dish/GoiDuaLeo/cach-lam-goi-dua-leo-kho-ca-sac.jpg'),
    dishGoiDuaLeoLamMamTron: require('../assets/Img/Products/Dish/GoiDuaLeo/lam-nuoc-tron-goi.jpg'),
    dishGoiDuaLeoDone: require('../assets/Img/Products/Dish/GoiDuaLeo/goi-kho-ca-sac-thom-ngon-hap-dan.jpg'),


    dishOvernightOat: require('../assets/Img/Products/Dish/KemOvernightOat/overnight-oat.jpg'),
    dishOvernightOatSoChe: require('../assets/Img/Products/Dish/KemOvernightOat/overnight-oats-la-gi.jpg'),
    dishOvernightOatThanhPham: require('../assets/Img/Products/Dish/KemOvernightOat/overnight-oats-cach-lam.jpg'),

    dishPhoXao: require('../assets/Img/Products/Dish/PhoXao/pho-xao.jpg'),
    dishPhoXaoCachLam: require('../assets/Img/Products/Dish/PhoXao/cach-lam-pho-xao.jpg'),
    dishPhoXaoXot: require('../assets/Img/Products/Dish/PhoXao/lam-xot-xao-pho.jpg'),
    dishPhoXaoThitBoChinTai: require('../assets/Img/Products/Dish/PhoXao/xao-thit-bo-chin-tai.jpg'),
    dishPhoXaoAll: require('../assets/Img/Products/Dish/PhoXao/cho-tat-ca-nguyen-lieu-vao-xao-roi-tat-bep.jpg'),
    dishPhoXaoDone: require('../assets/Img/Products/Dish/PhoXao/thanh-pham-xao-gion-khong-nat.jpg'),

    dishCaBienKko: require('../assets/Img/Products/Dish/CaBienKho/ca-bien-kho.jpg'),
    dishCaBienKkoSoChe: require('../assets/Img/Products/Dish/CaBienKho/cach-kho-ca-bien-ngon.jpg'),
    dishCaBienKkoBaChi: require('../assets/Img/Products/Dish/CaBienKho/cach-kho-thit-ba-chi-voi-ca-bien.jpg'),
    dishCaBienKkoDone: require('../assets/Img/Products/Dish/CaBienKho/cach-kho-ngon-don-gian-tai-nha.jpg'),

    dishBoNauDauChay: require('../assets/Img/Products/Dish/BoNauDauChay/bo-nau-dau-chay.jpg'),
    dishBoNauDauChaySoChe: require('../assets/Img/Products/Dish/BoNauDauChay/cong-thuc-ngam-thit-bo-chay-trong-nuoc-lanh.jpg'),
    dishBoNauDauChayRauCu: require('../assets/Img/Products/Dish/BoNauDauChay/xao-so-qua-cac-loai-rau-cu-va-bo-chay.jpg'),
    dishBoNauDauChayHonHop: require('../assets/Img/Products/Dish/BoNauDauChay/lam-hop-hop-xot-sanh-tu-bo-va-bot-mi.jpg'),
    dishBoNauDauChayThitBo: require('../assets/Img/Products/Dish/BoNauDauChay/cho-hon-hop-vao-nau-cung.jpg'),
    dishBoNauDauChayDone: require('../assets/Img/Products/Dish/BoNauDauChay/hoc-nau-cac-mon-ham-chay.jpg'),

    dishCuaRangMuoiOt: require('../assets/Img/Products/Dish/CuaRangMuoiOt/cach-lam-cua-rang-muoi-ot-kieu-hong-kong.jpg'),
    dishCuaRangMuoiOtChienCua: require('../assets/Img/Products/Dish/CuaRangMuoiOt/cach-lam-cua-rang-muoi-hong-kong.jpg'),
    dishCuaRangMuoiOtDone: require('../assets/Img/Products/Dish/CuaRangMuoiOt/cach-lam-cua-rang-muoi-ot.jpg'),

    dishBoKhoBanhMi: require('../assets/Img/Products/Dish/BoKhoBanhMi/cach-nau-bo-kho-banh-mi.jpg'),
    dishBoKhoBanhMiSoChe: require('../assets/Img/Products/Dish/BoKhoBanhMi/cach-lam-bo-kho-banh-mi.jpg'),
    dishBoKhoBanhMiTongHop: require('../assets/Img/Products/Dish/BoKhoBanhMi/cach-nau-bo-kho-banh-mi-ngon.jpg'),

    dishComRangDuaBo: require('../assets/Img/Products/Dish/ComRangDuaBo/com-rang-dua-bo.jpg'),
    dishComRangDuaBoSoChe: require('../assets/Img/Products/Dish/ComRangDuaBo/cach-lam-com-rang-dua-bo.jpg'),
    dishComRangDuaBoMauCom: require('../assets/Img/Products/Dish/ComRangDuaBo/lam-com-rang-dua-bo.jpg'),
    dishComRangDuaBoXaoDua: require('../assets/Img/Products/Dish/ComRangDuaBo/com-rang-cai-bo.jpg'),
    dishComRangDuaBoRangCom: require('../assets/Img/Products/Dish/ComRangDuaBo/cach-nau-com-rang-dua-bo-ngon.jpg'),
    dishComRangDuaBoDone: require('../assets/Img/Products/Dish/ComRangDuaBo/com-rang-bo.png'),











    CTGMonAnChoCaNha: require('../assets/Img/Products/Categories/mon-an-cho-ca-nha.jpg'),
    CTGMonKhaiVi: require('../assets/Img/Products/Categories/salad-ca-ngu.jpg'),
    CTGNuocCham: require('../assets/Img/Products/Categories/cach-lma-nuoc-mam-gung-an-bun-mang-vit.jpg'),
    CTGMonCanh: require('../assets/Img/Products/Categories/canh-ngao-chua-nau-sau.jpg'),
    CTGComChien: require('../assets/Img/Products/Categories/com-rang-dua-bo.jpg'),
    CTGMonAnVat: require('../assets/Img/Products/Categories/banh-trang-tron-chay-cach-lam-mon-an-vat-chay.jpg'),
    CTGMonXao: require('../assets/Img/Products/Categories/thit-de-xao-cu-hanh.jpg'),
    CTGMonLau: require('../assets/Img/Products/Categories/cach-nau-lau-ca-keo-la-giang.jpg'),
    CTGMonBun: require('../assets/Img/Products/Categories/bun-mang-vit.jpg'),
    CTGTraCafe: require('../assets/Img/Products/Categories/tra-sua-tran-chau-duong-den.jpg'),
    CTGSinhTo: require('../assets/Img/Products/Categories/uong-nuoc-ep-ca-chua-moi-ngay.jpg'),
    CTGRuouCocTai: require('../assets/Img/Products/Categories/nuoc-ep-oi.jpg'),

};
export default IMAGES;
