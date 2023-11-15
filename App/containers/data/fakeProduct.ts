import IMAGES from "../../theme/images";

const fakeProduct = () => {
    const listCategories = [
        {
            idCategory: 1,
            nameCategory: "Món ăn cho cả nhà",
            avatarCategory: IMAGES.CTGMonAnChoCaNha,
            type: 'món ăn'
        },
        {
            idCategory: 2,
            nameCategory: "Món ăn khai vị và tráng miệng",
            avatarCategory: IMAGES.CTGMonKhaiVi,
            type: 'món ăn'
        },
        {
            idCategory: 3,
            nameCategory: "Công thức pha nước chấm",
            avatarCategory: IMAGES.CTGNuocCham,
            type: 'công thức'
        },
        {
            idCategory: 4,
            nameCategory: "Công thức các món canh ngon",
            avatarCategory: IMAGES.CTGMonCanh,
            type: 'món ăn'
        },
        {
            idCategory: 5,
            nameCategory: "Các món cơm chiên",
            avatarCategory: IMAGES.CTGComChien,
            type: 'món ăn'
        },
        {
            idCategory: 6,
            nameCategory: "Món ăn chơi",
            avatarCategory: IMAGES.CTGMonAnVat,
            type: 'món ăn'
        },
        {
            idCategory: 7,
            nameCategory: "Món xào",
            avatarCategory: IMAGES.CTGMonXao,
            type: 'món ăn'
        },
        {
            idCategory: 8,
            nameCategory: "Các món lẩu",
            avatarCategory: IMAGES.CTGMonLau,
            type: 'món ăn'
        },
        {
            idCategory: 9,
            nameCategory: "Các món bún, miến",
            avatarCategory: IMAGES.CTGMonBun,
            type: 'món ăn'
        },
        {
            idCategory: 10,
            nameCategory: "Trà, cafe",
            avatarCategory: IMAGES.CTGTraCafe,
            type: '(công thức)'
        },
        {
            idCategory: 11,
            nameCategory: "Sinh tố, kem",
            avatarCategory: IMAGES.CTGSinhTo,
            type: '(công thức)'
        },
        {
            idCategory: 12,
            nameCategory: "Công thức pha rượu, cốc tai",
            avatarCategory: IMAGES.CTGRuouCocTai,
            type: '(công thức)'
        },
    ]

    const listProduct = [
        {
            id: 1,
            nameProduct: 'Cơm hến Huế',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishComHenHue,
                },
            ],
            category: listCategories[0],
            description: [
                {
                    name: 'Cơm hến không chỉ là đặc sản của người dân xứ Huế mà còn là món ngon nổi tiếng khắp cả nước,' +
                        ' thậm chí hấp dẫn cả du khách nước ngoài.\n' +
                        '\n' +
                        ' Món ăn mộc mạc mà đủ đầy hương vị ngọt thanh của nước dùng hến hòa quyện cùng mắm ruốc sống,' +
                        ' da heo chiên giòn, đậu phộng bùi, thịt hến đậm đà, ăn kèm rau sống ngon đúng điệu ',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: 'Hến tươi: 2kg'},
                            {2: 'Gạo tẻ ngon: 400g'},
                            {3: 'Da heo sấy khô: 50g'},
                            {4: 'Đậu phộng: 150g'},
                            {5: 'Khế: 2 quả'},
                            {6: 'Bạc hà (dọc mùng): 200g'},
                            {7: 'Rau răm: 15g'},
                            {8: 'Hành, tỏi băm: 30g'},
                            {9: 'Mắm ruốc Huế: 2 muỗng canh'},
                            {10: 'Gia vị: muối, nước mắm, dầu ăn, hạt nêm'},
                            {11: 'Rau ăn kèm: hoa chuối, lõi cây chuối non bào, húng lủi, giá sống, ngò rí, ớt xiêm'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Nấu cơm',
                                content: 'Chọn loại gạo tẻ ngon dẻo, mang đi vo sạch rồi đổ nước vào nấu chín. Cơm chín, để nguội rồi đánh cho tơi hạt.',
                                image: IMAGES.dishComHenHueComTrang
                            },
                            {
                                name: '2. Sơ chế hến và nguyên liệu khác',
                                content: 'Hến tươi ngâm với nước vo gạo trong 30 phút rồi rửa sạch. ' +
                                    'Bắc một nồi nước lên bếp, khi nước gần sôi (khoảng 80 độ C) thì cho hến vào luộc.\n' +
                                    '\n' +
                                    'Dùng đũa hoặc muỗng khuấy đảo đều để thịt hến tách ra khỏi vỏ, sau đó đãi hến lấy phần thịt. ' +
                                    'Để yên nồi nước luộc một lúc cho cát lắng xuống dưới đáy rồi gạn lọc lấy phần nước màu trắng đục.\n' +
                                    '\n' +
                                    'Bạc hà tước vỏ, rửa sạch, rồi bào thành sợi mỏng.\n' +
                                    '\n' +
                                    'Đậu phộng cho vào chảo rang với 2 muỗng canh dầu màu điều, 1/2 muỗng cà phê muối. Rang đều tay với lửa nhỏ đến khi thấy đậu phộng lên màu đỏ cam đẹp mắt là được.\n' +
                                    '\n' +
                                    'Da heo cắt thành những miếng vuông vừa ăn rồi chiên ngập dầu đến khi phồng, giòn.\n' +
                                    '\n' +
                                    'Các loại rau ăn kèm rửa sạch, để ráo. Rau răm cắt nhỏ, để riêng.\n' +
                                    '\n' +
                                    'Khế rửa sạch, cắt bỏ riềm rồi cắt sợi nhỏ hoặc cắt lát đều được.',
                                image: IMAGES.dishComHenHueSoChe
                            },
                            {
                                name: '3. Xào hến',
                                content: 'Đun nóng chảo, phi thơm hành và tỏi băm với 2 muỗng canh dầu ăn rồi cho phần thịt hến vào xào nhanh với lửa lớn.\n' +
                                    '\n' +
                                    ' Nêm vào chảo hến 1 muỗng canh nước mắm, 1/2 muỗng canh đường,' +
                                    ' 1/2 muỗng canh bột ngọt, 1/2 muỗng cà phê tiêu xay và rau răm cắt nhỏ.\n' +
                                    '\n' +
                                    ' Xào đều tay đến khi hến thấm gia vị và dậy mùi rau răm thơm nồng thì tắt bếp.',
                                image: IMAGES.dishComHenHueXaoHen
                            },
                            {
                                name: '4. Nấu nước hến',
                                content: 'Nước luộc hến cho vào nồi đun sôi cùng với vài lát gừng và 1/2 muỗng canh hạt nêm rồi khuấy đều.' +
                                    ' Gừng sẽ giúp cân bằng lại tính hàn của hến.' +
                                    ' Đun sôi nước canh và giữ nóng đến khi dùng.',
                                image: IMAGES.dishComHenHueNuocHen
                            },
                            {
                                name: '5. Xào mắm ruốc ăn kèm',
                                content: 'Đun nóng 2 muỗng canh dầu ăn, cho tỏi và ớt băm vào phi thơm. ' +
                                    'Tiếp theo, cho 2 muỗng canh mắm ruốc vào chảo, dùng muỗng tán cho ruốc tan ra.\n' +
                                    '\n' +
                                    'Sau đó thêm vào 3 muỗng canh nước luộc hến và 1 muỗng canh đường để làm dịu vị mắm ruốc,' +
                                    ' khuấy đều rồi đun sôi lên là được.',
                                image: IMAGES.dishComHenHueManRuoc
                            },
                            {
                                name: '6. Thành phẩm & thưởng thức',
                                content: 'Cơm xới ra tô, xúc vào vài muỗng hến xào, cho lần lượt bạc hà, rau sống, rau thơm, khế, da heo chiên giòn,' +
                                    ' rắc thêm đậu phộng rang, rưới mắm ruốc lên trên, trộn đều rồi thưởng thức.\n' +
                                    '\n' +
                                    ' Dọn kèm chén nước canh hến nóng hổi để chan vào cơm hay ăn riêng đều được.' +
                                    ' Bạn có thể cho thêm chanh, ớt chưng tùy sở thích.',
                                image: IMAGES.dishComHenHueDone
                            },

                        ]
                    }

                }
            ]

        },

        {
            id: 2,
            nameProduct: 'Canh ghẹ rau muống',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishCanhGheRauMuong,
                },
            ],
            category: listCategories[3],
            description: [
                {
                    name: 'Bạn đã từng nghe qua món canh lạ miệng này nhưng cách nấu canh ghẹ rau muống thì chắc hẳn nhiều người chưa biết đến.\n' +
                        '\n' +
                        ' Món canh tuy đơn giản mà ngon ngọt, bắt mắt với màu xanh ngắt của rau muống cùng thịt ghẹ đỏ tươi, ' +
                        'trưa nắng mà húp muỗng nước canh trong vắt, ngọt lịm thì bao nhiêu mệt nhọc cũng đều tan biến.',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: 'Ghẹ tươi: 3 con (khoảng 600 – 800g)'},
                            {2: 'Rau muống: 1 bó'},
                            {3: 'Hành tím: 2 củ'},
                            {4: 'Gia vị: hạt nêm, bột ngọt, nước mắm, muối, dầu ăn'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Sơ chế nguyên liệu',
                                content: 'Ghẹ sống mua về bạn khoan hãy tháo dây buộc, mà dùng kéo hay mũi dao nhọn chọc thẳng vào phần chóp dưới yếm ghẹ cho đến khi các càng và chân duỗi thẳng ra.\n' +
                                    '\n' +
                                    'Tiếp đến, bạn dùng bàn chải chà sạch lớp vỏ bên ngoài, rồi cắt bỏ phần yếm, tách mai và bỏ phần nang mềm. Nếu là ghẹ cái, bạn lấy hết phần gạch ở mai ghẹ, cho vào chén.\n' +
                                    '\n' +
                                    'Rau muống nhặt lấy phần ngọn non, bỏ bớt lá rồi rửa sạch, vặn thành từng khúc ngắn vừa ăn.\n' +
                                    '\n' +
                                    'Hành tím bóc vỏ, rửa sạch, băm nhỏ.'
                                ,
                                image: IMAGES.dishCanhGheRauMuongSoChe
                            },
                            {
                                name: '2. Nấu canh',
                                content: 'Bắc nồi lên bếp, thêm vào 1 muỗng canh dầu ăn rồi cho hành tím băm nhỏ vào phi vàng. ' +
                                    'Khi hành đã dậy mùi thơm, nhanh tay cho ghẹ vào xào, nêm vào 1 muỗng cà phê hạt nêm. ' +
                                    'Ở bước này, nếu có gạch thì bạn cho gạch vào xào trước rồi sau đó mới cho ghẹ.\n' +
                                    '\n' +
                                    'Xào đến khi ghẹ chuyển sang màu đỏ thì cho vào nồi một lượng nước đủ dùng, mở lửa lớn.' +
                                    ' Khi nước sôi và thịt ghẹ đã chín, nêm nếm lại với nước mắm, hạt nêm cho vừa miệng.\n' +
                                    '\n' +
                                    'Cho rau muống vào, đợi nước sôi lại nêm thêm 1/2 muỗng cà phê bột ngọt rồi tắt bếp.',
                                image: IMAGES.dishCanhGheRauMuongNauCanh
                            },
                            {
                                name: '3. Trình bày và thưởng thức',
                                content: 'Múc canh ra tô, trang trí theo ý thích, vậy là món canh ghẹ rau muống đã hoàn thành.\n' +
                                    '\n' +
                                    'Vị ngọt thơm tự nhiên từ thịt ghẹ kết hợp với rau muống xanh giòn ' +
                                    'và nước dùng ngọt thanh mang lại cho người thưởng thức món canh cảm giác thích thú và lạ miệng.\n' +
                                    '\n' +
                                    'Canh ghẹ nấu rau muống nên dùng khi còn nóng, ăn kèm với bún hay cơm trắng đều ngon. ' +
                                    'Đừng quên chuẩn bị chén muối tiêu chanh chấm thịt ghẹ để tăng thêm vị ngon ngọt cho món ăn.',
                                image: IMAGES.dishCanhGheRauMuongDone
                            },
                        ]
                    }

                }
            ]

        },

        {
            id: 3,
            nameProduct: 'Chả bò',
            price: 100000.0,
            quantity: 30,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishChaBo,
                },
            ],
            category: listCategories[0],
            description: [
                {
                    name: 'Chả bò là món ngon mỗi ngày quen thuộc của ngừời dân Việt Nam trong những dịp lễ Tết. ' +
                        'Với hương vị thơm ngon, hấp dẫn, chả bò đã dần trở nên phổ biến hơn trong các bữa ăn hằng ngày với mức tiêu thụ lớn.\n' +
                        '\n' +
                        'Chính vì vậy mà đã có không ít người săn lùng cách làm chả bò đơn giản để tự phục vụ gia đình hoặc kinh doanh.',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: '1kg thịt nạc bò'},
                            {2: '200g mỡ heo'},
                            {3: '1 muỗng canh tiêu đen'},
                            {4: '15g tỏi'},
                            {5: 'Khế: 2 quả'},
                            {6: '10g thì là'},
                            {7: 'Lá chuối'},
                            {8: 'Gia vị: Đường, bột ngọt, nước mắm, tinh bột khoai tây, bột nổi,…'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Sơ chế thịt bò, mỡ heo',
                                content: 'Thịt bò mua về làm sạch, cắt nhỏ, rửa với nước đá lạnh rồi lau thật khô và cho ngay vào ngăn đông tủ lạnh trong 1 tiếng.\n' +
                                    '\n' +
                                    'Mỡ heo làm sạch, lấy 150g cắt nhỏ rồi cho vào tủ đông đá trong 1 tiếng.\n' +
                                    '\n' +
                                    ' Phần mỡ còn lại đem đi luộc trong 3 phút rồi vớt ra cắt hạt lựu, ướp với 1 muỗng canh đường và trộn đều.',
                                image: IMAGES.dishChaBoSoChe
                            },
                            {
                                name: '2. Làm giò sống',
                                content: 'Thịt bò, mỡ heo sau khi được đông lạnh, bạn cho vào cối xay công suất lớn và xay nhuyễn trong 20 giây.' +
                                    'Sau đó, bạn nêm vào 2 muỗng canh nước mắm ngon (40 độ đạm), ' +
                                    '1 muỗng cà phê đường cùng ½ muỗng cà phê bột ngọt và xay thêm 1 lần nữa khoảng 30 giây.\n' +
                                    '\n' +
                                    'Dùng 2 viên nước đá nhỏ (40 – 45g), đập nhuyễn rồi cho vào cối xay, ' +
                                    'tiến hành xay thịt trong 10 giây rồi dùng đũa trộn đều 1 lần, làm lần lượt như vậy 3 lần, bạn sẽ thấy thịt quánh dẻo.\n' +
                                    '\n' +
                                    'Lúc này, bạn nhanh tay cho 1 muỗng canh tinh bột khoai tây, ½ muỗng cà phê bột nổi vào thịt và tiếp tục xay 10 giây, tắt máy trộn đều, làm 2 lần như vậy. Sau đó, bạn tăng tốc máy và xay thêm 30 giây.\n' +
                                    '\n' +
                                    'Thịt sau khi xay xong, bạn trải đều ra màng bọc thực phẩm, gói lại và đặt trong ngăn đông để làm lạnh.',
                                image: IMAGES.dishChaBoXayThit
                            },
                            {
                                name: '3. Sơ chế các nguyên liệu khác',
                                content: 'Tiêu đem đi giã sơ, tỏi bóc vỏ và băm nhuyễn. Thì là làm sạch và cắt thật nhuyễn.\n' +
                                    '\n' +
                                    'Lá chuối bạn rửa sạch, trụng sơ qua nước sôi và lau khô.\n' +
                                    '\n' +
                                    'Xay giò sống thêm một lần nữa\n' +
                                    'Giò bò sau khi làm lạnh trở lại, bạn lấy ra và cho vào cối cùng tiêu, tỏi đã sơ chế, xay thêm 1 phút.\n' +
                                    '\n' +
                                    'Sau đó, bạn trút tất cả ra âu và cho thì là cùng mỡ heo cắt nhỏ ướp đường vào, trộn đều.',
                                image: IMAGES.dishChaBoSoCheKhac
                            },
                            {
                                name: '4. Gói chả bò',
                                content: 'Giò bò sau khi đã được xay quánh mịn và trộn đều cùng các gia vị, bạn cho ngay ra lá chuối và gói chặt tay.',
                                image: IMAGES.dishChaBoGoiCha
                            },
                            {
                                name: '5. Luộc chả',
                                content: 'Chả sau khi gói xong bạn cho vào nồi luộc khoảng 35 phút, vớt ra để nguội là có thể thưởng thức.',
                                image: IMAGES.dishChaBoDone
                            },

                        ]
                    }

                }
            ]

        },

        {
            id: 4,
            nameProduct: 'Chả lụa siêu dễ',
            price: 100000.0,
            quantity: 30,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishChaLua,
                },
            ],
            category: listCategories[0],
            description: [
                {
                    name: 'Chả lụa là món ngon phổ biến trong ngày Tết, không những thế,' +
                        ' món ăn này còn xuất hiện nhiều trong các dịp lễ, hỏi, cưới xin,…\n' +
                        '\n' +
                        ' Với hiện trạng pha tạp chất như hiện nay,' +
                        ' nhiều người đã tìm cách làm chả lụa tại nhà để đảm bảo vệ sinh an toàn thực phẩm.' +
                        ' Vì vậy hãy cùng xem cách làm chả lụa ngon được hướng dẫn dưới đây',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: '800g thịt heo'},
                            {2: 'Lá chuối'},
                            {3: 'Gia vị: Bột nêm gà, nước mắm, tiêu trắng, nước mắm, dầu ăn, tinh bột khoai tây, bột nổi,…'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Sơ chế nguyên liệu',
                                content: 'Thịt heo bạn nên mua loại có thêm ít mỡ để chả lụa có vị béo ngon hấp dẫn hơn. ' +
                                    'Thịt đem về chà xát với muối cho bớt hôi tanh rồi rửa sạch. Sau đó cho thịt vào cối xay, xay nhuyễn.\n' +
                                    '\n' +
                                    'Lá chuối rửa sạch, lau khô.',
                                image: '',
                            },
                            {
                                name: '2. Pha chế gia vị nêm thịt',
                                content: 'Cho vào chén lần lượt các gia vị gồm: 4 muỗng cà phê đường,' +
                                    ' 2 muỗng cà phê bột nêm gà, ½ muỗng cà phê bột nổi, 2,5 muỗng canh tinh bột khoai tây,\n' +
                                    '\n' +
                                    ' 5 muỗng canh nước lạnh, 2 muỗng canh nước mắm, 4 muỗng canh dầu ăn, khuấy đều để hỗn hợp đồng nhất.',
                                image: IMAGES.dishChaLuaPhaChe
                            },
                            {
                                name: '3. Ướp thịt',
                                content: 'Thịt sau khi xay nhuyễn bạn cho vào 1 cái túi rồi đổ hỗn hợp nước gia vị ở bước 2 vào và bóp đều tay,' +
                                    ' cách làm này sẽ giúp thịt được hài hòa gia vị hơn.' +
                                    ' Sau đó, bạn dàn thịt ra cho mỏng trong túi nilon rồi cất vào tủ đá 4 tiếng.',
                                image: IMAGES.dishChaLuaUopThit
                            },
                            {
                                name: '4. Quết thịt',
                                content: 'Thịt sau khi làm đông, bạn lấy ra, bẻ thành từng miếng nhỏ cho vào máy quết.' +
                                    ' 2 phút đầu quết với tốc độ thấp, 5 phút sau quết với tốc độ trung bình và thêm 5 phút quết với tốc độ cao.\n' +
                                    '\n' +
                                    ' Sau đó bạn cho vào 1 muỗng cà phê bột hành cùng ¼ muỗng cà phê tiêu trắng, tiếp tục quết thịt với tốc độ cao thêm 1 phút.',
                                image: IMAGES.dishChaLuaQuetThit
                            },
                            {
                                name: '5. Gói thịt và đem hấp',
                                content: 'Thịt sau khi quết xong bạn xúc ra màng bọc thực phẩm để định hình, sau đó đặt vào lá chuối và quấn chặt 1 – 2 lớp. ' +
                                    'Tiếp tục quấn thêm một lớp giấy bạc bên ngoài rồi bạn cho vào nồi hấp chín khoảng 40 phút.',
                                image: IMAGES.dishChaLuaGoiThit
                            },
                            {
                                name: '6. Hoàn thành và thưởng thức',
                                content: 'Giò lụa sau khi hấp xong bạn có thể sử dụng ngay hoặc bảo quản để dùng dần.',
                                image: IMAGES.dishChaLuaDone
                            },

                        ]
                    }

                }
            ]

        },

        {
            id: 5,
            nameProduct: 'Cháo cá phô mai',
            price: 60000.0,
            quantity: 30,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishChaoCaPhoMai,
                },
            ],
            category: listCategories[0],
            description: [
                {
                    name: 'Nếu như bạn đang gặp khó khăn trong việc nấu cháo cho bé ăn dặm thì với cách nấu cháo cá hồi phô mai dưới đây,' +
                        ' mọi việc sẽ trở nên dễ dàng.' +
                        ' Đây là món cháo chứa nhiều chất dinh dưỡng như DHA, DPA, protein, vitamin D,… ' +
                        'rất tốt cho sự phát triển trí não của bé.',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: 'Cá hồi: 200g'},
                            {2: 'Gạo lứt xay nhỏ: 150g'},
                            {3: 'Phô mai: 15g'},
                            {4: 'Nấm hương: 50g'},
                            {5: 'Hành ngò: 5g'},
                            {6: 'Dầu mè: 1 muỗng cà phê'},
                        ]
                    },
                    makeFood: {
                        name: 'Cách nấu cháo',
                        detail: [
                            {
                                name: '1. Sơ chế cá hồi',
                                content: 'Cá hồi mua về rửa sạch với nước muối pha loãng, hoặc nếu có thời gian bạn ngâm cá trong sữa tươi không đường khoảng 20 phút, rồi rửa lại bằng nước gừng để khử mùi tanh. Dùng khăn thấm khô cá.\n' +
                                    '\n' +
                                    'Tiếp đến, bạn lọc hết xương cá để tránh mắc nghẹn hay bị hóc khi cho bé ăn.\n' +
                                    '\n' +
                                    ' Sau đó, cho cá vào máy xay, xay nhuyễn. Thêm vào 2 muỗng canh nước lọc rồi đem cá đi hấp chín.',
                                image: IMAGES.dishChaoCaPhoMaiCaHoi
                            },
                            {
                                name: '2. Sơ chế các nguyên liệu khác',
                                content: 'Gạo đem vo sạch rồi ngâm với nước từ 30 phút đến 1 tiếng để khi nấu cháo sẽ nhanh nhừ hơn.\n' +
                                    '\n' +
                                    'Nấm hương ngâm với nước muối trong khoảng 1 giờ, rồi vớt ra rửa sạch. Bạn cắt bỏ chân nấm rồi băm nhuyễn, xong cũng đem đi hấp chín.\n' +
                                    '\n' +
                                    'Hành ngò nhặt bỏ gốc và lá vàng úa, rửa sạch, cắt nhuyễn',
                                image: IMAGES.dishChaoCaPhoMaiSoChe
                            },
                            {
                                name: '3. Nấu cháo',
                                content: 'Cho gạo vào nồi cùng với một lượng nước vừa đủ, bật bếp đun sôi rồi hạ lửa nhỏ để cháo chín nhừ. ' +
                                    'Trong quá trình nấu, thỉnh thoảng khuấy đều để cháo không bị khê, vớt hết bọt nổi phía trên.',
                                image: IMAGES.dishChaoCaPhoMaiNauChao
                            },
                            {
                                name: '4. Hoàn thành & thưởng thức',
                                content: 'Khi cháo đã nhừ, bạn cho nấm hương và cá hồi đã hấp chín vào nồi, khuấy đều cho hỗn hợp hòa quyện.' +
                                    ' Thêm 1 muỗng canh dầu mè vào cháo để tăng thêm hương vị và dinh dưỡng cho bé. \n' +
                                    '\n' +
                                    'Cuối cùng, cho phô mai vào rồi nêm nếm lại gia vị cho vừa miệng.' +
                                    ' Trước khi tắt bếp bạn cho hành ngò đã chuẩn bị vào, món cháo sẽ bắt mắt và hấp dẫn hơn.',
                                image: IMAGES.dishChaoCaPhoMaiDone
                            },

                        ]
                    }
                }
            ]

        },

        {
            id: 6,
            nameProduct: 'Gỏi dưa leo',
            price: 100000.0,
            quantity: 30,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishGoiDuaLeo,
                },
            ],
            category: listCategories[1],
            description: [
                {
                    name: 'Khô cá sặc mặn mà kết hợp với dưa leo giòn mát, đậu phộng thơm bùi ' +
                        'và vị chua ngọt đậm đà của nước trộn gỏi vô cùng lạ miệng sẽ khiến bạn ăn hoài mà không ngán. \m' +
                        '\n' +
                        'Nguyên liệu dễ tìm, chế biến lại đơn giản, nhanh chóng, ' +
                        'bạn đừng ngần ngại mà hãy học ngay cách làm gỏi dưa leo khô cá sặc cho bữa ăn cuối tuần thêm tròn vị, ' +
                        'bổ sung vào thực đơn món ngon mỗi ngày thêm phong phú và đa dạng.',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: 'Khô cá sặc: 3 con'},
                            {2: 'Dưa leo: 5 quả'},
                            {3: 'Tỏi: 1 củ'},
                            {4: 'Chanh: 1 quả'},
                            {5: 'Ớt: 4 quả'},
                            {6: 'Các loại rau thơm: hành lá, húng cây, rau mùi, diếp cá, tía tô,…'},
                            {7: 'Gia vị: đường, nước mắm, bột ngọt'},
                        ]
                    },
                    makeFood: {
                        name: 'Cách thực hiện',
                        detail: [
                            {
                                name: '1. Sơ chế nguyên liệu',
                                content: 'Dưa leo rửa sạch, gọt bớt vỏ rồi cắt khoanh tròn mỏng.\n' +
                                    '\n' +
                                    'Tỏi bóc vỏ, băm nhỏ.\n' +
                                    '\n' +
                                    'Ớt tươi rửa sạch, 2 quả cắt lát để trộn gỏi, 2 quả giã hoặc băm nhỏ làm nước trộn.\n' +
                                    '\n' +
                                    'Hành lá và các loại rau thơm nhặt sạch, ngâm với nước muối loãng rồi vớt ra, để ráo, sau đó cắt khúc.',
                                image: IMAGES.dishGoiDuaLeoSoChe
                            },
                            {
                                name: '2. Nướng khô',
                                content: 'Chuẩn bị bếp nướng, đặt vỉ nướng lên bếp rồi cho khô lên trên, nướng đến khi cá xém vàng và dậy mùi thơm là được.' +
                                    ' Trong quá trình nướng nhớ trở hai mặt để cá chín đều. Bạn nướng khô cá trên bếp than sẽ thơm ngon hơn nướng bằng bếp gas.\n' +
                                    '\n' +
                                    'Khô cá nướng xong bạn gỡ bỏ xương rồi xé thành từng miếng nhỏ vừa ăn.',
                                image: IMAGES.dishGoiDuaLeoNuongCa
                            },
                            {
                                name: '3. Làm nước mắm trộn gỏi',
                                content: 'Hòa tan 1 muỗng canh nước lọc và 2 muỗng cà phê đường, khuấy đều cho đường tan hết. ' +
                                    'Thêm vào 1 muỗng canh nước mắm và nước cốt 1/2 quả chanh. Sau đó cho tỏi và ớt băm nhỏ vào là xong.\n' +
                                    '\n' +
                                    ' Bạn có thể gia giảm lượng nước mắm, đường, nước cốt chanh sao cho vừa khẩu vị.',
                                image: IMAGES.dishGoiDuaLeoLamMamTron
                            },
                            {
                                name: '4. Hoàn thành gỏi dưa leo khô cá sặc',
                                content: 'Cho dưa leo, hành lá, rau thơm và 1/2 cá sặc đã xé nhỏ vào tô, rưới thêm nước mắm rồi trộn đều.\n' +
                                    '\n' +
                                    'Gắp gỏi ra dĩa, cho phần cá còn lại lên trên, rắc thêm đậu phộng rang hoặc hành phi nếu thích. Trang trí với rau mùi và vài lát ớt tươi cho bắt mắt.\n' +
                                    '\n' +
                                    'Khi ăn, bạn có thể chấm thêm nước mắm chua ngọt, dùng kèm với bánh phồng tôm hay bánh tráng mè nướng lại càng hấp dẫn.',
                                image: IMAGES.dishGoiDuaLeoDone
                            },
                        ]
                    }

                }
            ]

        },

        {
            id: 7,
            nameProduct: 'Kem Overnight Oat',
            price: 100000.0,
            quantity: 30,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishOvernightOat,
                },
            ],
            category: listCategories[5],
            description: [
                {
                    name: 'Overnight oats được biết đến là yến mạch ngâm qua đêm cùng sữa, sữa chua, hoa quả,… tạo thành hỗn hợp thực phẩm cực kỳ tiện lợi,' +
                        ' dễ ăn và chứa đầy đủ dưỡng chất như xơ, tinh bột, đạm, béo,…',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: 'Dâu tây, các loại hạt dinh dưỡng'},
                            {2: '½ chén yến mạch cán dẹt'},
                            {3: '1 muỗng canh hạt chiaDa heo sấy khô: 50g'},
                            {4: '1 muỗng canh sữa chua thực vật'},
                            {5: '100ml sữa đậu nành không đường'},
                            {6: '1 muỗng canh mật ong'},
                            {7: '1 muỗng canh bơ đậu phộng không đường'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Các bước làm overnight oats truyề thống',
                                content: 'Lấy 5 trái dâu tây cho vào tô và nghiền nhỏ.\n' +
                                    '\n' +
                                    'Lần lượt cho yến mạch, sữa chua, sữa đậu nành, hạt chia, mật ong, bơ đậu phộng đã chuẩn bị vào tô dâu tây nghiền, trộn đều.\n' +
                                    '\n' +
                                    'Đặt hỗn hợp vào ngăn mát tủ lạnh và để qua đêm.',
                                image: IMAGES.dishOvernightOatSoChe
                            },
                            {
                                name: '2. Thành phẩm',
                                content: 'Hôm sau, khi muốn thưởng thức món ăn này, bạn chỉ cần lấy ra dùng ngay hoặc cho thêm dâu tây cùng các loại hạt dinh dưỡng là được.',
                                image: IMAGES.dishOvernightOatThanhPham
                            },
                        ]
                    }

                }
            ]

        },

        {
            id: 8,
            nameProduct: 'Phở xào',
            price: 100000.0,
            quantity: 30,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishPhoXao,
                },
            ],
            category: listCategories[6],
            description: [
                {
                    name: 'Phở xào là món ăn yêu thích, món ngon của nhiều người vì có cách làm đơn giản và dễ biến tấu cùng nhiều nguyên liệu như nấm, thịt bò, rau cải,…{\n}' +
                        'Tuy nhiên, để đảm bảo món ăn không bị dính, nát khi thực hiện, bạn hãy tham khảo cách làm phở xào thịt bò ngon khó cưỡng được chia sẻ dưới đây',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: '150g bánh phở khô (loại có chiều rộng là 1mm)'},
                            {2: '150g nấm đông cô'},
                            {3: '150g cà rốt'},
                            {4: '300g cải thìa'},
                            {5: '70g hành tây'},
                            {6: '3 cọng hành lá'},
                            {7: '3 tép tỏi'},
                            {8: '2 củ hành tím'},
                            {9: 'Gia vị: Dầu hào, nước tương, hạt nêm, dầu mè, tiêu xay,…'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Chuẩn bị nguyên liệu',
                                content: 'Tỏi, hành tím bóc vỏ, băm nhuyễn.' +
                                    ' Thịt bò chà xát muối, rửa sạch nhiều lần, để ráo và cắt thành từng miếng nhỏ vừa ăn.' +
                                    ' Sau đó cho thịt vào âu ướp với chút tỏi, hành tím băm, 1,5 muỗng canh dầu hào, 1 muỗng canh nước tương, 1 muỗng cà phê hạt nêm, ½ muỗng cà phê dầu mè, 1 muỗng canh dầu ăn, chút tiêu xay, trộn đều và để khoảng 20 phút cho thịt ngấm gia vị.' +
                                    'Hành lá làm sạch, cắt khúc xéo. ' +
                                    'Hành tây bóc vỏ, cắt múi cau. ' +
                                    'Nấm làm sạch, cắt đôi. ' +
                                    'Cà rốt gọt bỏ vỏ, cắt thành từng lát xéo mỏng. Cải thìa làm sạch, cắt đôi.',
                                image: IMAGES.dishPhoXaoCachLam,
                            },
                            {
                                name: '2. Pha chế xốt xào',
                                content: 'Cho vào chén các gia vị gồm: 2 muỗng canh nước tương (hoặc 1 muỗng canh hắc xì dầu), 2 muỗng canh dầu hào, 1 muỗng cà phê đường, 1 muỗng canh dầu ăn, một ít tiêu xay, trộn đều để hỗn hợp đồng nhất.',
                                image: IMAGES.dishPhoXaoXot,
                            },
                            {
                                name: '3 .Xào thịt bò và các loại rau củ',
                                content: 'Đặt chảo chống dính lên bếp, đun nóng dầu ăn và phi thơm ít tỏi, hành tím băm. Cho thịt bò đã ướp vào xào chín tái, trút ra dĩa. ' +
                                    'Tiếp tục sử dụng lại chảo vừa rồi, đun nóng ít dầu ăn và phi thơm tỏi, hành tím băm. ' +
                                    'Lần lượt cho nấm và cà rốt vào cùng 2 muỗng canh xốt xào, trộn đều. ' +
                                    'Khi thấy 2 nguyên liệu đã chín, bạn tiếp tục cho cải thìa vào và xào chín, trút tất cả ra âu, để riêng.',
                                image: IMAGES.dishPhoXaoThitBoChinTai,
                            },
                            {
                                name: '4 .Làm phở xào bò',
                                content: 'Cho bánh phở vào âu nước nóng 70 độ C, ngâm khoảng 5 phút, sau đó vớt ra, bỏ nước và ngâm lại với nước nóng 70 độ C thêm một lần nữa. Lúc này, sợi phở đã mềm, bạn dùng đũa khuấy cho tơi rồi trút ra, rửa sạch với nước lạnh và để ráo. Cho bánh phở vào âu, trộn đều cùng phần xốt xào còn lại. ' +
                                    'Đặt chảo chống dính lên bếp, đun nóng ít dầu ăn và xào thơm hành lá, hành tây. Sau đó, bạn tiếp tục cho phở đã trộn xốt vào chảo, đảo đều với lửa lớn. ' +
                                    'Khi thấy sợi phở đã chín mềm, bạn cho rau cải, thịt bò đã làm ở bước 3 vào, trộn đều. Xào thêm 3 phút là có thể tắt bếp.',
                                image: IMAGES.dishPhoXaoAll,
                            },
                            {
                                name: '5 .Trình bày và thưởng thức',
                                content: 'Sau khi thực hiện xong, bạn cho PHỞ XÀO bò ra dĩa, rắc thêm ít tiêu xay lên trên là có thể thưởng thức. Nên dùng ngay khi còn nóng để đảm bảo hương vị cho món ăn bạn nhé!',
                                image: IMAGES.dishPhoXaoDone,
                            },

                        ]
                    }

                }
            ]
        },

        {
            id: 9,
            nameProduct: 'Cá biển kho',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishCaBienKko,
                },
            ],
            category: listCategories[0],
            description: [
                {
                    name: 'Với cách kho cá biển ngon từ Disney Cooking, bạn sẽ có ngay một món ngon đầy hấp dẫn,' +
                        ' tươi ngọt tự nhiên để đổi gió khẩu vị hoặc làm phong phú thêm thực đơn kinh doanh. \n' +
                        '\n' +
                        'Không chỉ mang đến hương vị đậm đà, món cá biển kho còn trông rất bắt mắt,' +
                        ' kích thích thị giác khiến thực khách chỉ muốn thưởng thức ngay từ cái nhìn đầu tiên!',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: '500g cá biển cắt khứa'},
                            {2: '100g thịt ba chỉ'},
                            {3: '1 trái ớt sừng'},
                            {4: 'Hành lá, tỏi, hành tím'},
                            {5: 'Gia vị: bột canh, tiêu, nước mắm, tương ớt, hạt nêm, đường…'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước thực hiện',
                        detail: [
                            {
                                name: '1. Sơ chế nguyên liệu',
                                content: 'Cá biển bạn có thể mua nguyên con, đem về làm sạch rồi cắt khứa hoặc nhờ người bán làm sẵn nhé!\n' +
                                    '\n' +
                                    'Tỏi, hành tím bóc vỏ, băm nhuyễn.\n' +
                                    '\n' +
                                    'Thịt heo làm sạch, cắt thành từng miếng vừa ăn.\n' +
                                    '\n' +
                                    'Hành lá làm sạch, cắt nhỏ. Ớt bỏ hạt, băm nhuyễn.',
                                image: ''
                            },
                            {
                                name: '2. Ướp cá và thịt heo',
                                content: 'Cho cá vào tô và ướp với 3 muỗng canh nước mắm, ½ muỗng canh hạt nêm, \n' +
                                    '\n' +
                                    '½ muỗng canh bột canh, 1,5 muỗng canh tương ớt,' +
                                    ' 1 ít tiêu, hành tím, tỏi, ớt băm, trộn đều và để khoảng 10 phút cho cá ngấm gia vị.\n' +
                                    '\n' +
                                    'Về phần thịt heo, bạn đem ướp với 1 ít bột canh và hạt nêm, trộn đều.',
                                image: IMAGES.dishCaBienKkoSoChe
                            },
                            {
                                name: '3. Kho cá',
                                content: 'Đặt nồi lên bếp và đun nóng ít dầu ăn, cho 1 muỗng canh đường vào để phi nước màu. Khi thấy đường tan có màu nâu cánh gián,\n' +
                                    '\n' +
                                    ' bạn tiến hành cho cá, thịt đã ướp vào nấu khoảng 2 phút và tiếp tục cho 300 – 500ml nước sôi vào.',
                                image: IMAGES.dishCaBienKkoBaChi
                            },
                            {
                                name: '4. Thành phẩm & thưởng thức',
                                content: 'Kho cá với lửa vừa đến khi cá chín và nước keo lại sền sệt là được. Trước khi tắt bếp, bạn nhớ cho hành lá cắt nhỏ vào nhé.\n ' +
                                    '\n' +
                                    ' Vậy là món cá biển kho của chúng ta đã hoàn thành rồi!',
                                image: IMAGES.dishCaBienKkoDone
                            },

                        ]
                    }

                }
            ]

        },

        {
            id: 10,
            nameProduct: 'Cá trê lai kho tiêu',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishComHenHue,
                },
            ],
            category: listCategories[0],
            description: [
                {
                    name: 'Cơm hến không chỉ là đặc sản của người dân xứ Huế mà còn là món ngon nổi tiếng khắp cả nước,' +
                        ' thậm chí hấp dẫn cả du khách nước ngoài.\n' +
                        '\n' +
                        ' Món ăn mộc mạc mà đủ đầy hương vị ngọt thanh của nước dùng hến hòa quyện cùng mắm ruốc sống,' +
                        ' da heo chiên giòn, đậu phộng bùi, thịt hến đậm đà, ăn kèm rau sống ngon đúng điệu ',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: 'Hến tươi: 2kg'},
                            {2: 'Gạo tẻ ngon: 400g'},
                            {3: 'Da heo sấy khô: 50g'},
                            {4: 'Đậu phộng: 150g'},
                            {5: 'Khế: 2 quả'},
                            {6: 'Bạc hà (dọc mùng): 200g'},
                            {7: 'Rau răm: 15g'},
                            {8: 'Hành, tỏi băm: 30g'},
                            {9: 'Mắm ruốc Huế: 2 muỗng canh'},
                            {10: 'Gia vị: muối, nước mắm, dầu ăn, hạt nêm'},
                            {11: 'Rau ăn kèm: hoa chuối, lõi cây chuối non bào, húng lủi, giá sống, ngò rí, ớt xiêm'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Nấu cơm',
                                content: 'Chọn loại gạo tẻ ngon dẻo, mang đi vo sạch rồi đổ nước vào nấu chín. Cơm chín, để nguội rồi đánh cho tơi hạt.',
                                image: IMAGES.dishComHenHueComTrang
                            },
                            {
                                name: '2. Sơ chế hến và nguyên liệu khác',
                                content: 'Hến tươi ngâm với nước vo gạo trong 30 phút rồi rửa sạch. ' +
                                    'Bắc một nồi nước lên bếp, khi nước gần sôi (khoảng 80 độ C) thì cho hến vào luộc.\n' +
                                    '\n' +
                                    'Dùng đũa hoặc muỗng khuấy đảo đều để thịt hến tách ra khỏi vỏ, sau đó đãi hến lấy phần thịt. ' +
                                    'Để yên nồi nước luộc một lúc cho cát lắng xuống dưới đáy rồi gạn lọc lấy phần nước màu trắng đục.\n' +
                                    '\n' +
                                    'Bạc hà tước vỏ, rửa sạch, rồi bào thành sợi mỏng.\n' +
                                    '\n' +
                                    'Đậu phộng cho vào chảo rang với 2 muỗng canh dầu màu điều, 1/2 muỗng cà phê muối. Rang đều tay với lửa nhỏ đến khi thấy đậu phộng lên màu đỏ cam đẹp mắt là được.\n' +
                                    '\n' +
                                    'Da heo cắt thành những miếng vuông vừa ăn rồi chiên ngập dầu đến khi phồng, giòn.\n' +
                                    '\n' +
                                    'Các loại rau ăn kèm rửa sạch, để ráo. Rau răm cắt nhỏ, để riêng.\n' +
                                    '\n' +
                                    'Khế rửa sạch, cắt bỏ riềm rồi cắt sợi nhỏ hoặc cắt lát đều được.',
                                image: IMAGES.dishComHenHueSoChe
                            },
                            {
                                name: '3. Xào hến',
                                content: 'Đun nóng chảo, phi thơm hành và tỏi băm với 2 muỗng canh dầu ăn rồi cho phần thịt hến vào xào nhanh với lửa lớn.\n' +
                                    '\n' +
                                    ' Nêm vào chảo hến 1 muỗng canh nước mắm, 1/2 muỗng canh đường,' +
                                    ' 1/2 muỗng canh bột ngọt, 1/2 muỗng cà phê tiêu xay và rau răm cắt nhỏ.\n' +
                                    '\n' +
                                    ' Xào đều tay đến khi hến thấm gia vị và dậy mùi rau răm thơm nồng thì tắt bếp.',
                                image: IMAGES.dishComHenHueXaoHen
                            },
                            {
                                name: '4. Nấu nước hến',
                                content: 'Nước luộc hến cho vào nồi đun sôi cùng với vài lát gừng và 1/2 muỗng canh hạt nêm rồi khuấy đều.' +
                                    ' Gừng sẽ giúp cân bằng lại tính hàn của hến.' +
                                    ' Đun sôi nước canh và giữ nóng đến khi dùng.',
                                image: IMAGES.dishComHenHueNuocHen
                            },
                            {
                                name: '5. Xào mắm ruốc ăn kèm',
                                content: 'Đun nóng 2 muỗng canh dầu ăn, cho tỏi và ớt băm vào phi thơm. ' +
                                    'Tiếp theo, cho 2 muỗng canh mắm ruốc vào chảo, dùng muỗng tán cho ruốc tan ra.\n' +
                                    '\n' +
                                    'Sau đó thêm vào 3 muỗng canh nước luộc hến và 1 muỗng canh đường để làm dịu vị mắm ruốc,' +
                                    ' khuấy đều rồi đun sôi lên là được.',
                                image: IMAGES.dishComHenHueManRuoc
                            },
                            {
                                name: '6. Thành phẩm & thưởng thức',
                                content: 'Cơm xới ra tô, xúc vào vài muỗng hến xào, cho lần lượt bạc hà, rau sống, rau thơm, khế, da heo chiên giòn,' +
                                    ' rắc thêm đậu phộng rang, rưới mắm ruốc lên trên, trộn đều rồi thưởng thức.\n' +
                                    '\n' +
                                    ' Dọn kèm chén nước canh hến nóng hổi để chan vào cơm hay ăn riêng đều được.' +
                                    ' Bạn có thể cho thêm chanh, ớt chưng tùy sở thích.',
                                image: IMAGES.dishComHenHueDone
                            },

                        ]
                    }

                }
            ]

        },
        
        {
            id: 11,
            nameProduct: 'Bò nấu đậu chay',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishBoNauDauChay,
                },
            ],
            category: listCategories[0],
            description: [
                {
                    name: 'Bò nấu đậu chay là món ăn không chỉ thơm ngon mà còn rất bổ dưỡng. ' +
                        'Món ăn được nấu từ những nguyên liệu rau củ tự nhiên kết hợp với nhau' +
                        ' bằng phương pháp hầm sẽ giúp lấy được toàn bộ chất dinh dưỡng của thực phẩm. \n' +
                        '\n' +
                        'Nếu chưa biết cách làm bò nấu đậu chay ngon cho những ngày chay hoặc bổ sung vào thực đơn ăn kiêng, ' +
                        'kinh doanh, bạn hãy nhanh tay ghi lại công thức ngay dưới đây nhé!',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: 'Đậu trắng, đậu ngự, đậu thận đỏ, đậu tibo, đậu ván mỗi loại 100g'},
                            {2: 'Nấm mỡ, nấm hương, nấm đông cô, nấm linh chi mỗi loại 50g'},
                            {3: 'Cà rốt, bí ngòi xanh, bí ngòi vàng mỗi loại 50g'},
                            {4: 'Khoai tây: 200g'},
                            {5: 'Thịt bò chay: 100g'},
                            {6: 'Mướp tây baby: 5 trái'},
                            {7: 'Hành tây: 1 củ'},
                            {8: 'Bơ thực vật: 40g'},
                            {9: 'Tương cà chua cô đặc: 40g'},
                            {10: 'Nước dừa: 1 lít'},
                            {11: 'Lá thyme: 2 nhánh'},
                            {12: 'Bột mì: 20g'},
                            {13: 'Lá nguyệt quế: 3 lá'},
                            {14: 'Gia vị gồm: hạt nêm chay, dầu hào chay, nước tương, bột ngọt, muối, tiêu'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Sơ chế nguyên liệu',
                                content: 'Bỏ gốc các loại nấm, rửa sạch, để ráo nước. Với nấm mỡ, nếu bạn muốn đẹp mắt hơn có thể khứa chữ thập trên đầu.\n' +
                                    '\n' +
                                    'Bí ngòi xanh, vàng và cà rốt rửa sạch, cắt thành miếng vừa ăn. ' +
                                    'Nếu bạn muốn tạo hình đẹp mắt hơn cho chúng có thể dùng đồ múc tròn để tạo thành những viên tròn. \n' +
                                    '\n' +
                                    'Mướp tây baby cắt bỏ cuống, rửa sạch. Khoai tây cắt thành miếng vuông vừa ăn hoặc có thể cắt hình trái trám cho đẹp mắt. ' +
                                    'Sau đó, bạn ngâm tất cả các loại rau củ này vào âu nước đá để giữ màu sắc.\n' +
                                    '\n' +
                                    'Hành tây bóc bỏ vỏ, rửa sạch, cắt múi cau lớn.\n' +
                                    '\n' +
                                    'Đậu ngự, đậu trắng ngâm trong nước lạnh khoảng 30 phút cho hạt đậu nở mềm sau đó bóc bỏ vỏ.\n' +
                                    '\n' +
                                    'Thịt bò chay cũng ngâm trong nước lạnh khoảng 30 phút cho nở rồi mang đi vắt kiệt nước.',
                                image: IMAGES.dishBoNauDauChaySoChe
                            },
                            {
                                name: '2. Chế biến các loại rau củ',
                                content: 'Bắc chảo lên bếp cho vào 20g bơ. Khi bơ đã tan chảy, bạn lần lượt cho hành tây, 4 loại nấm, bí ngòi xanh, ' +
                                    'bí ngòi vàng, cà rốt, khoai tây, mướp tây baby vào chảo đảo nhanh tay. \n' +
                                    '\n' +
                                    'Sau đó, cho tiếp thịt bò chay vào, đảo nhanh tay hỗn hợp và tắt bếp. ' +
                                    'Lưu ý là không xào quá chín các loại rau củ.',
                                image: IMAGES.dishBoNauDauChayRauCu
                            },
                            {
                                name: '3. Làm hỗn hợp tạo sánh',
                                content: 'Bắc chảo lên bếp cho vào 20g bơ đun tan chảy sau đó tiếp tục cho vào 20g bột mì,' +
                                    ' khuấy liên tục để tạo thành hỗn hợp sánh sệt.',
                                image: IMAGES.dishBoNauDauChayHonHop
                            },
                            {
                                name: '4. Nấu thịt bò chay cùng đậu',
                                content: 'Cho hỗn hợp rau củ xào cùng thịt bò chay ở trên vào nồi cùng với 40g tương cà chua cô đặc và 1 lít nước dừa, \n' +
                                    '\n' +
                                    '2 nhánh thyme, 20g hạt nêm chay, 40ml dầu hào chay, 40ml nước tương, 30g đường, 10g bột ngọt đảo đều và đun sôi lên.\n' +
                                    '\n' +
                                    'Khi hỗn hợp sôi lên, bạn cho đậu trắng, đậu tibo, đậu thận đỏ, đậu ngự vào để hầm cho đến lúc mềm.\n' +
                                    '\n' +
                                    'Khi đậu đã chín mềm, ' +
                                    'bạn đổ hỗn hợp tạo sánh cùng 3 lá nguyệt quế, đậu ván vào, nêm nếm lại gia vị cho vừa ăn và tắt bếp.',
                                image: IMAGES.dishBoNauDauChayThitBo
                            },
                            {
                                name: '5. Thưởng thức món ăn',
                                content: 'Với cách làm bò nấu đậu chay thơm ngon theo phong cách ẩm thực Âu, bạn sẽ có ngay một ăn vừa ngon vừa bổ dưỡng. \n' +
                                    '\n' +
                                    'Trình bày ra đĩa đẹp mắt từ cái nhìn đầu tiên!',
                                image: IMAGES.dishBoNauDauChayDone
                            },


                        ]
                    }

                }
            ]

        },
        {
            id: 12,
            nameProduct: 'Cua rang muối ớt',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishCuaRangMuoiOt,
                },
            ],
            category: listCategories[0],
            description: [
                {
                    name: 'Bạn có thể chế biến rất nhiều món ngon mỗi ngày từ cua nhưng cách làm cua rang muối ớt kiểu Hồng Kông' +
                        ' sẽ đem đến cho bạn một món ăn hấp dẫn và mới lạ. \n' +
                        "\n" +
                        'Bạn hãy lưu lại công thức với hướng dẫn tỉ mỉ và chi tiết dưới đây để trổ tài ngay nhé!',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: '800gr cua biển'},
                            {2: '50gr tôm khô'},
                            {3: '5gr bột ớt'},
                            {4: '50gr chà bông'},
                            {5: '10gr ngũ vị hương'},
                            {6: '100gr hành tây'},
                            {7: '100gr ớt chuông'},
                            {8: '25gr hạt điều'},
                            {9: '50gr tỏi'},
                            {10: 'Hành lá'},
                            {11: 'Hành khô'},
                            {12: 'Bột chiên xù'},
                            {13: 'Gia vị: muối, hạt nêm, bột ngọt, tiêu, đường'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Sơ chế nguyên liệu',
                                content: 'Cua khi mua về nếu vẫn còn dây cột bạn nên để nguyên dây, sau đó lật yếm cua có hình tam giác dưới bụng lên, ' +
                                    'dùng mũi dao chọc thẳng vào chỗ hõm dưới bụng cho chân và càng cua duỗi ra. \n' +
                                    '\n' +
                                    'Khi thấy chân và càng cua đã duỗi ra hoàn toàn thì dùng kéo hoặc dao cắt bỏ hết dây buộc.\n' +
                                    '\n' +
                                    'Dùng bàn chải chà sạch xung quanh, đặc biệt là phần hai bên hông cua, đây là nơi bám rong rêu nhiều nhất do đó cần chà kỹ.\n' +
                                    '\n' +
                                    'Dùng tay tách bỏ phần yếm cua và các lông cua phía bên trong yếm.\n' +
                                    '\n' +
                                    'Tách mai cua ra khỏi thân, loại bỏ hết chất bẩn trong thịt cua, cắt thân cua làm đôi. Gỡ càng cua ra và đập dập tùy thích.\n' +
                                    '\n' +
                                    'Hành tím, tỏi bóc vỏ, rửa sạch rồi băm nhuyễn.\n' +
                                    '\n' +
                                    'Hành lá bỏ gốc, rửa sạch, cắt khúc.\n' +
                                    '\n' +
                                    'Ớt rửa sạch, cắt khúc nhỏ.\n' +
                                    '\n' +
                                    'Hành tây bóc vỏ, rửa sạch, cắt nhỏ.',
                                image: '',
                            },
                            {
                                name: '2. Ướp và chiên cua',
                                content: 'Cho muối, hạt nêm, bột ngọt, tiêu, tỏi băm và hành tím băm nhuyễn vào ướp với cua, trộn đều để ngấm gia vị.\n' +
                                    '\n' +
                                    'Ướp từ 10-15 phút thì đem cua đi tẩm với bột chiên.\n' +
                                    '\n' +
                                    'Bắc chảo lên bếp, chiên cua trong chảo ngập dầu đến khi cua vàng đều thì vớt ra để ráo dầu. \n' +
                                    '\n' +
                                    'Lưu ý dầu phải thật nóng già để cua nhanh chín ở bên trong và bên ngoài thì vàng giòn, ' +
                                    'như vậy cua sẽ đẹp mắt mà vẫn có mùi thơm rất đặc trưng.',
                                image: IMAGES.dishCuaRangMuoiOtChienCua
                            },
                            {
                                name: '3. Làm muối ớt rang cua',
                                content: 'Trong một chảo sạch cho tôm khô, hạt điều và 1/2 chén bột chiên xù vào rang sơ qua.\n' +
                                    '\n' +
                                    'Trút ra tô cho chà bông, muối, hạt nêm, bột ngọt, đường, tiêu, ngũ vị hương, bột ớt vào, trộn đều. Cho hết tất cả vào máy xay nhuyễn.',
                                image: '',
                            },
                            {
                                name: '4. Rang cua với muối ớt',
                                content: 'Đổ dầu vào chảo nóng, thêm hành tím, tỏi băm, hành tây, hành lá, ớt chuông vào xào thơm.\n' +
                                    '\n' +
                                    'Cho cua và muối rang đã xay nhuyễn vào, trộn đều cho thấm gia vị. Tiếp tục xào thêm khoảng 10 phút với lửa lớn thì tắt bếp.\n' +
                                    '\n' +
                                    'Trút cua ra đĩa và trang trí theo ý.',
                                image: IMAGES.dishCuaRangMuoiOtDone,
                            },
                        ]
                    }

                }
            ]
        },
        {
            id: 13,
            nameProduct: 'Bò kho bánh mì',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishBoKhoBanhMi,
                },
            ],
            category: listCategories[0],
            description: [
                {
                    name: 'Bò kho bánh mì là món ngon mỗi ngày thơm ngon, bổ dưỡng có hương vị đăc trưng khác biệt nên chinh phục được rất đông đảo thực khách hiện nay. \n' +
                        '\n' +
                        'Không chỉ thế, nhiều người còn đi học và tìm hiểu về cách nấu bò kho bánh mì chuẩn vị miền trung ngon để mở quán kinh doanh hoặc để nấu thưởng thức tại nhà.\n' +
                        '\n' +
                        'Món thịt bò kho thơm ngon, bổ dưỡng và lôi cuốn người ăn nhờ vào những miếng thịt bò mềm thơm kết hợp cùng các loại rau củ tươi ngon, giàu dưỡng chất hòa quyện cùng nước xốt đậm đà mà không quá béo.\n' +
                        '\n' +
                        'Cách nấu bánh mì bò kho ngon không quá khó nhưng cũng không đơn giản nếu bạn thực hiện không đúng các kỹ thuật trong quá trình chế biến.\n' +
                        '\n' +
                        'Do đó, khi tự nấu bò kho, nhiều người thường gặp vấn đề như: thịt bò quá dai hoặc nát, nước sốt quá nhạt hoặc quá béo… \n' +
                        '\n' +
                        'Nếu bạn vẫn chưa biết nấu bò kho bánh mì, đừng bỏ qua cách nấu bò kho bánh mì chuẩn vị miền Trung dưới đây để sắn sàng vào bếp trổ tài nhé.',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: '600g thịt bò'},
                            {2: '2 củ cà rốt'},
                            {3: '4 cây sả'},
                            {4: '2 nhánh gừng nhỏ'},
                            {5: '1 củ hành tím khô'},
                            {6: '1 củ tỏi'},
                            {7: '10g hoa hồi'},
                            {8: '1 nhánh quế'},
                            {9: '500ml nước dừa'},
                            {10: '30ml rượu trắng'},
                            {11: 'Gia vị:1 thìa canh bột bò kho, 1 thìa cà phê muối, 1 thìa cà phê đường, 1 thìa cà phê hạt nêm'},
                            {12: '3 thìa cà phê dầu điều, ½ thìa cà phê tiêu, 1 thìa canh bột năng.'},
                        ]
                    },
                    makeFood: {
                        name: 'Cách làm bò kho bánh mì chuẩn vị miền trung',
                        detail: [
                            {
                                name: '1. Sơ chế các nguyên liệu nấu bò kho',
                                content: 'Hành, tỏi bóc vỏ, đập dập, băm nhuyễn.\n' +
                                    '\n' +
                                    'Gừng bạn cạo vỏ, rửa sạch. Sau đó lấy 1 nhánh băm nhuyễn để riêng, nhánh còn lại giã nhuyễn rồi trộn với rượu trắng để sơ chế thịt bò.\n' +
                                    '\n' +
                                    'Cà rốt gọt vỏ, rửa sạch, có thể tỉa hoa cho đẹp măt rồi cắt thành các miếng dày khoảng 0,5cm. Nếu muốn đơn giản thì bạn có thể cắt miếng bình thường.\n' +
                                    '\n' +
                                    'Sả rửa sạch, bóc bỏ phần vỏ già, cắt bỏ gốc, cắt khúc rồi đập dập.\n' +
                                    '\n' +
                                    'Hoa hồi và quế cho vào chảo rang thơm.',
                                image: '',
                            },
                            {
                                name: '2. Sơ chế thịt bò',
                                content: 'Thịt bò rửa bằng nước lọc cho sạch, sau đó lấy hỗn hợp rượu gừng vừa chuẩn bị chà lên khắp miếng thịt để khử mùi hôi, sau đó rửa lại lần nữa cho sạch rồi đem chần qua nước sôi khoảng 5 phút. Không nên chần quá lâu sẽ làm thịt chín và bị dai.\n' +
                                    '\n' +
                                    'Để thịt cho ráo khô thì thái miếng vuông to và dày hơn thông thường một chút. Tiếp đó, bạn cho thịt vào tô, thêm các gia vị vào gồm:\n' +
                                    '\n' +
                                    ' 2 thìa cà phê muối, 1 thìa cà phê đường, 1 thìa canh bột bò kho, 1 thìa canh màu dầu điều và ½ thìa cà phê tiêu. \n' +
                                    '\n' +
                                    'Trộn thật đều các gia vị với thịt bò rồi để ướp trong khoảng 30 phút cho ngấm.',
                                image: IMAGES.dishBoKhoBanhMiSoChe,
                            },
                            {
                                name: '3. Tiến hành nấu',
                                content: 'Bắc nồi náu bò kho lên bếp, cho vào 1 thìa canh dầu ăn đun nóng thì cho hành, tỏi và gừng băm vào phi thơm.  \n' +
                                    '\n' +
                                    'Tiếp theo trút hết phần thịt bò đã ướp vào xào đều tay cho đến khi thịt bò săn lại.  \n' +
                                    '\n' +
                                    'Lúc này bạn cho tiếp sả đập dập, quế và hồi vào xào tiếp cho thơm thì cho nước dừa vào xâm xấp mặt thịt, ' +
                                    'đậy nắp nồi lại rồi đun với lửa vừa trong khoảng 30 phút.\n' +
                                    '\n' +
                                    'Đun tới khi thịt bò chín mềm thì bạn lấy bột năng hòa với chút nước lạnh  cho tan rồi từ từ đổ vào nồi, \n' +
                                    '\n' +
                                    ' vừa đổ vừa khuấy đều để tạo độ sánh cho nước sốt. Tiếp đó, bạn cho cà rốt vào nấu thêm khoảng 5 – 10 phút cho cà rốt chín mềm thì tắt bếp.  \n' +
                                    '\n' +
                                    'Không nấu lâu quá sẽ làm thịt bò và cà rốt bị mềm, nát.',
                                image: IMAGES.dishBoKhoBanhMiTongHop
                            },
                            {
                                name: '4. Trình bày và thưởng thức',
                                content: 'Múc bò kho ra tô hoặc đĩa lòng sâu, sau đó bạn rắc thêm chút tiêu và rau ngò gai lên trên cho đẹp mắ và thơm ngon hơn. Có thể ăn bò kho với bún, bánh mì hoặc cơm nóng đều ngon. \n' +
                                    '\n' +
                                    'Bò kho bánh mì được rất nhiều người yêu thích vì hương vị đặc trưng thơm ngon khó lẫn với bất kỳ món ăn nào. \n' +
                                    '\n' +
                                    'Chỉ cần lúc đói bụng, được thưởng thức chén bò kho nóng hổi thì hẳn bạn sẽ ngất ngây với hương vị của món ăn này đến khó cưỡng.  \n' +
                                    '\n' +
                                    'Hy vọng cách nấu bò kho bánh mì trên đây đã giúp bạn có thêm bí quyết nấu món ngon cho mình và gia đình cùng thưởng thức rồi.  \n' +
                                    '\n' +
                                    'Chúc bạn thực hiện thành công!',
                                image: ''
                            },
                        ]
                    }

                }
            ]
        },
        {
            id: 14,
            nameProduct: 'Cơm rang dưa bò',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishComRangDuaBo,
                },
            ],
            category: listCategories[4],
            description: [
                {
                    name: 'Phở, bún cá, bánh cuốn, bún thang, bún ốc, … đều là những món ngon mỗi ngày, nức tiếng của Hà Nội.\n' +
                        '\n' +
                        ' Và hương vị món ngon đất Hà Thành sẽ không trọn vẹn nếu bạn chưa trải nghiệm với món cơm rang dưa bò quen thuộc, \n' +
                        '\n' +
                        'đầy dân dã. Nếu là một tín đồ ẩm thực đang khám phá nền ẩm thực Hà Nội, bạn không nên bỏ qua cách làm cơm rang dưa bò trong bài viết này.\n' +
                        '\n' +
                        'Đĩa cơm rang dưa bò có màu vàng ươm bắt mắt cuốn hút người ăn cùng một chút giòn giòn của dưa chua, dai dai của miếng thịt bò thấm vị đậm đà đã để thương để nhớ cho lòng thực khách thưởng thức qua. Làm cơm rang dưa bò chuẩn vị Hà Nội không quá phức tạp nhưng đòi hỏi bạn phải chuẩn xác trong từng thao tác từ lựa chọn nguyên liệu, sơ chế, nêm nếm gia vị, cách rang cơm, trình bày đẹp mắt. Đừng lo lắng, tất cả đều sẽ trở nên đơn giản hơn nếu bạn nắm trong tay bí quyết chế biến.',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: '200g thịt bò'},
                            {2: '1 quả trứng gà'},
                            {3: '150g dưa chua'},
                            {4: '2 chén cơm trắng'},
                            {5: '½ quả cà chua'},
                            {6: '1 củ hành (đã bóc vỏ, thái nhỏ)'},
                            {7: '4 tép tỏi (đã bóc vỏ, đập dập)'},
                            {8: '1 vài cọng ngò'},
                            {9: 'Một số loại gia vị cần thiết khác: Muối, đường, hạt nêm, dầu hào, xì dầu (nước tương), …'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Sơ chế nguyên liệu',
                                content: 'Đầu tiên, bạn rửa sạch miếng thịt bò, thái thành lát mỏng. ' +
                                    'Bạn cho thịt bò vào trong bát lớn, ướp cùng một ít chút gia vị theo tỉ lệ: \n' +
                                    '\n' +
                                    '15g hạt nêm, 8g đường, 8g muối, 15ml xì dầu, 15ml dầu hào và trộn đều. \n' +
                                    '\n' +
                                    'Bạn để yên bát thịt bò, ướp trong vòng khoảng 30 phút để thịt thấm gia vị.\n' +
                                    '\n' +
                                    'Đây cũng là cách làm cơm rang bò ngon đậm đà. ' +
                                    'Tiếp đó, bạn rửa sạch cà chua với nước muối pha loãng, thái thành hạt lựu. \n' +
                                    '\n' +
                                    'Với dưa chua, bạn rửa nhiều lần với nước để loại sạch bụi bẩn cũng như giảm bớt vị chua, rồi cắt thành khúc ngắn.',
                                image: IMAGES.dishComRangDuaBoSoChe
                            },
                            {
                                name: '2. Tạo màu cho cơm',
                                content: 'Để thành phẩm món cơm rang thịt bò bắt mắt, cuốn hút, bạn nên đặc biệt chú trọng đến công đoạn tạo màu cho cơm.\n' +
                                    '\n' +
                                    'Bạn cho cơm ra bát, xới cho thật tơi. Tiếp theo, bạn đập 1 quả trứng gà vào bát, đánh đều. Bạn đổ từ từ bát trứng gà vào phần cơm, trộn đều.',
                                image: IMAGES.dishComRangDuaBoMauCom
                            },
                            {
                                name: '3. Xào cà chua, dưa chua và thịt bò',
                                content: 'Sau đó, bạn bắc chảo có sẵn 2 thìa dầu ăn lên bếp đun sôi. \n' +
                                    '\n' +
                                    'Khi dầu nóng, bạn cho ½ số hành, tỏi băm nhỏ vào phi thơm. Lúc này, ' +
                                    'bạn cho cà chua vào xào rồi cho dưa chua vào xào cùng trong khoảng 3 phút.\n' +
                                    '\n' +
                                    ' Bạn tiến hành nêm nếm dầu hào, xì dầu, hạt nêm để vừa ăn hơn.' +
                                    'Tiếp theo, bạn cho thịt bò vào chảo xào cùng. Cách làm món cơm rang dưa bò ngon là bạn nên bật lửa lớn, đảo nhanh tay ở thao tác này. \n' +
                                    '\n' +
                                    'Quan sát thịt bò chín tái, bạn tắt bếp, trút cà đồ xào ra đĩa.',
                                image: IMAGES.dishComRangDuaBoXaoDua
                            },
                            {
                                name: '4. Cách rang cơm dưa bò',
                                content: 'Kế đến, bạn bắc chảo lên bếp cùng 1 ít dầu ăn rồi cho số hành, tỏi còn lại vào phi thơm. Dầu nóng, bạn đổ cơm trộn trứng vào chảo để rang. Bí quyết trong cách rang cơm dưa bò để cơm giòn, vàng đều là bạn nên đảo thật nhanh và đều tay.\n' +
                                    '\n' +
                                    'Khi cơm bắt đầu khô lại, bạn nêm 1 muỗng hạt nêm rồi cho dưa chua, cà chua, thịt bò đã xào vào nồi cơm, đảo đều, tắt bếp.',
                                image: IMAGES.dishComRangDuaBoRangCom
                            },
                            {
                                name: '5. Hoàn thành và trình bày',
                                content: 'Cuối cùng, bạn múc cơm rang thịt bò dưa chua ra đĩa, rắc thêm lên trên một ít tiêu xay và cọng ngò để món ăn thêm bắt mắt.',
                                image: IMAGES.dishComRangDuaBoDone
                            },
                        ]
                    }

                }
            ]
        },
        {
            id: 15,
            nameProduct: 'Canh chua cá lóc',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishCanhChuaCaLoc,
                },
            ],
            category: listCategories[3],
            description: [
                {
                    name: 'Canh chua cá lóc (cá quả) là món ngon mỗi ngày dân dã, quen thuộc ở những miền quê, sông nước Việt Nam.' +
                        ' Món canh này có nhiều cách chế biến tùy theo đặc trưng của từng vùng miền.\n' +
                        '\n' +
                        ' Tuy nhiên, để món ăn được hấp dẫn, chuẩn vị hơn mà không bị hôi tanh mùi cá,' +
                        ' hãy tham khảo cách làm canh chua cá lóc thanh mát ngày được chia sẻ dưới đây nhé!',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: '1 con cá lóc khoảng 700g'},
                            {2: '3 trái cà chua'},
                            {3: '2 cây dọc mùng'},
                            {4: '5 trái sấu cỡ vừa'},
                            {5: '2 củ hành tím băm'},
                            {6: '1 miếng nghệ giã nhỏ'},
                            {7: 'Các loại rau: thì là, mùi tàu, hành lá'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1.  Sơ chế cá lóc và các nguyên liệu khác',
                                content: 'Cá lóc cần được cạo sạch vảy và làm sạch bụng. Sau đó xát muối và rửa sạch, cắt thành từng khứa vừa ăn.\n' +
                                    '\n' +
                                    'Đem cá ướp với 2 muỗng cà phê bột canh, ½ muỗng cà phê đường, ¼ muỗng cà phê nước mắm, 1 ít hành tím băm, nghệ giã nhỏ.',
                                image: '',
                            },
                        ]
                    }

                }
            ]

        },
        {
            id: 16,
            nameProduct: 'Canh rong biển',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishCanhRongBien,
                },
            ],
            category: listCategories[3],
            description: [
                {
                    name: 'Canh rong biển món ngon mỗi ngày có xuất xứ từ Hàn Quốc thanh mát có tính giải nhiệt cao nên được rất nhiều người yêu thích.' +
                        ' Tuy cách nấu canh rong biển đơn giản nhưng không phải ai cũng biết cách tạo nên thành phẩm thơm ngon, không có mùi tanh.\n' +
                        '\n' +
                        ' Nếu cũng đang loay hoay tìm cách nấu canh rong biển thịt bò ngon thì bạn có thể tham khảo bài viết dưới đây.',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: '150g rong biển khô'},
                            {2: '150g thịt bò'},
                            {3: '½ chén rượu trắng'},
                            {4: '½ chén nước tương'},
                            {5: '4 tép tỏi (đã bóc vỏ, đập dập)'},
                            {6: '2 thìa tiêu xay'},
                            {7: '1 nhánh gừng tươi (gọt vỏ, rửa sạch, đập dập)'},
                            {8: 'Một vài miếng đậu phụ non (đã cắt nhỏ)'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Xử lý thịt bò',
                                content: 'Đầu tiên, bạn rửa sạch thịt bò mua nhiều lần với nước, dùng giấy thấm khô rồi thái thành lát mỏng vừa ăn.\n' +
                                    '\n' +
                                    'Sau đó, bạn cho thịt bò vào trong bát, cho thêm 1 thìa cà phê nước tương, 1 thìa rượu trắng,' +
                                    ' 1/3 thìa cà phê tiêu xay, trộn đều và ướp trong vòng khoảng 30 phút.\n' +
                                    '\n' +
                                    ' Công đoạn ướp thịt bò nhằm đảm bảo món canh rong biển thịt bò đậu phụ thu về đạt hương vị đậm đà, hấp dẫn.',
                                image: '',
                            },

                        ]
                    }

                }
            ]

        },
        {
            id: 17,
            nameProduct: 'Canh ngao chua',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishCanhNgaoChua,
                },
            ],
            category: listCategories[3],
            description: [
                {
                    name: 'Trong những ngày nắng nóng, oi bức, canh ngao nấu sấu trở thành món ăn  mỗi ngày ngon  thanh mát tuyệt vời cho bữa cơm gia đình.' +
                        ' Cùng vào bếp với cách nấu canh ngao chua với sấu cực ngon sau đây nhé.',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: '1 kg ngao'},
                            {2: '5 – 7 quả sấu xanh'},
                            {3: '½ quả dứa'},
                            {4: '2 quả cà chua chín'},
                            {5: 'Hành lá, hành tím, rau răm'},
                            {6: 'Gia vị: hạt nêm, nước mắm, bột ngọt'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Sơ chế nguyên liệu',
                                content: 'Ngao mua về ngâm với nước muối pha loãng và vài lát ớt cho ngao nhả sạch nhớt và cát, sau đó rửa sạch nhiều lần với nước.\n' +
                                    '\n' +
                                    ' Cho ngao vào nồi ngập nước, đun sôi trên bếp cho đến khi ngao mở hết miệng thì vớt ra,' +
                                    ' nhặt lấy phần thịt ngao. Những con ngao sau khi luộc vẫn không mở miệng thì bạn nên loại bỏ vì sẽ gây đau bụng.',
                                image: '',
                            },
                        ]
                    }

                }
            ]

        },
        {
            id: 18,
            nameProduct: 'Mắm kho quẹt',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishMamKhoQuet,
                },
            ],
            category: listCategories[2],
            description: [
                {
                    name: 'Mắm kho quẹt là món ngon mỗi ngày, món ăn dân dã, quen thuộc với người dân miền Nam Bộ. \n' +
                        '\n' +
                        'Nếu từng thưởng thức qua dù chỉ một lần, chắn hẳn bạn cũng đã xiêu lòng trước vị mặn, ngọt, cay hòa quyện trong bát mắm.',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: '200g thịt ba chỉ'},
                            {2: '50g tôm khô'},
                            {3: '200g nước mắm'},
                            {4: '50g đường cát'},
                            {5: '5g tiêu đen'},
                            {6: '10g tiêu xanh'},
                            {7: '50g nước sôi'},
                            {8: '30g hành tím (bóc vỏ, băm nhỏ)'},
                            {9: '1 ít hành lá (rửa sạch, thái nhỏ)'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Sơ chế nguyên liệu',
                                content: 'Đầu tiên, bạn rửa sạch thịt ba chỉ mua về với nước muối pha loãng rồi thái thành lát thật mỏng.\n' +
                                    '\n' +
                                    ' Sau đó, bạn bắc chảo lên bếp, cho thịt ba chỉ vào xào với lửa vừa.' +
                                    ' Đây là cách làm mắm kho quẹt bằng tóp mỡ đơn giản tại nhà được rất nhiều người áp dụng.',
                                image: '',
                            },
                        ]
                    }

                }
            ]

        },
        {
            id: 19,
            nameProduct: 'Salad cá ngừ',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishSalaCaNgu,
                },
            ],
            category: listCategories[1],
            description: [
                {
                    name: 'Món salad cá ngừ (tuna salad) thường được rất nhiều người yêu thích và dùng làm món khai vị trong các bữa ăn.\n' +
                        '\n' +
                        ' Cách làm salad cá ngừ lại đơn giản, trong cá ngừ có chứa nguồn Protein dồi dào,' +
                        ' nhiều loại Vitamin và khoáng chất có lợi cho cơ thể, lại ít béo nên rất ngon và bổ dưỡng.\n' +
                        '\n' +
                        ' Chính vì thế mà món salad cá ngừ được xem là món ngon mỗi ngày,' +
                        ' giàu dinh dưỡng và còn thích hợp cho những người đang có nhu cầu giảm cân, giữ dáng hoặc ăn kiêng vì sức khoẻ.',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: 'Cá ngừ hộp: 1 hộp'},
                            {2: 'Rau xà lách: 100g'},
                            {3: 'Cà chua bi: 150g'},
                            {4: 'Hành tây: 1 củ'},
                            {5: 'Dưa leo: 2 trái'},
                            {6: 'Xốt mayonnaise.'},
                            {7: 'Gia vị gồm: đường, muối, hạt nêm, hạt tiêu'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Sơ chế các nguyên liệu.',
                                content: 'Rau xà lách tách lá, cắt bỏ những chỗ bị dập nát, rửa sạch, ngâm với nước muối loãng trong khoảng 5 phút. Sau đó, vớt ra rổ để ráo nước rồi thái thành từng miếng vừa ăn.\n' +
                                    '\n' +
                                    'Cà chua bi rửa sạch, ngâm với nước muối loãng trong khoảng 5 -10 phút, để ráo, bổ làm hai (hoặc để nguyên quả nếu thích).\n' +
                                    '\n' +
                                    'Dưa leo rửa sạch, gọt vỏ, cắt bỏ hai đầu rồi chà sạch hai đầu cho ra hết nhựa đắng, thái lát mỏng hoặc cắt hạt lựu. Tuỳ theo sở thích mà bạn có thể chọn cách gọt vỏ hay để nguyên vỏ.\n' +
                                    '\n' +
                                    'Hành tây rửa sạch, thái lát mỏng và ngâm trong nước đá lạnh trong vòng 5 -10 phút để hành bớt hăng. Nếu thích hành đậm đà hương vị, có thể ngâm hành trước trong nước giấm đường 30 phút. Sau đó vớt ra để ráo nước.',
                                image: ''
                            },
                        ]
                    }

                }
            ]

        },
        {
            id: 20,
            nameProduct: 'Salad dưa hấu',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishSalaDuaHau,
                },
            ],
            category: listCategories[1],
            description: [
                {
                    name: 'Cùng giải nhiệt những cơn nóng mùa hè với món salad dưa hấu mát lạnh (Watermelon Arugula Salad).\n' +
                        '\n' +
                        ' Hoặc bạn có thể áp dụng vào thực đơn ăn kiêng hay đơn giản là món ngon mỗi ngày làm món khai vị cho bữa tiệc nhé!',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            {1: '800g dưa hấu'},
                            {2: '45ml dầu olive'},
                            {3: '15ml nước cốt chanh'},
                            {4: '60g bạc hà, húng quế, mùi tây, thì là'},
                            {5: '100g phô mai'},
                            {6: '50g mâm xôi'},
                            {7: '1 muỗng canh rượu vang'},
                            {8: 'Gia vị: tiêu, muối'},
                        ]
                    },
                    makeFood: {
                        name: 'Các bước làm',
                        detail: [
                            {
                                name: '1. Sơ chế',
                                content: 'Rửa sạch các nguyên liệu',
                                image: ''
                            },
                            {
                                name: '2. Cho mâm xôi vào cối xay nhuyễn để làm nước xốt',
                                content: 'a',
                                image: ''
                            },
                        ]
                    }

                }
            ]

        },

        // {
        //     id: 1,
        //     nameProduct: 'aaaaaaaaaaa',
        //     price: 100000.0,
        //     quantity: 20,
        //     imageProduct: [
        //         {
        //             idIMG: 1,
        //             urlImage: IMAGES.dishComHenHue,
        //         },
        //     ],
        //     category: listCategories[0],
        //     description: [
        //         {
        //             name: 'aaaaaaaaaaaaaaaaaaa',
        //             ingredient: {
        //                 name: 'Nguyên liệu',
        //                 detail: [
        //                     {1: 'aaaaaaaaaaaaaaa'},
        //                     {2: 'aaaaaaaaaaaaaaa'},
        //                     {3: 'aaaaaaaaaaaaaaa'},
        //                     {4: 'aaaaaaaaaaaaaaa'},
        //                     {5: 'Kaaaaaaaaaaaaaaa'},
        //                     {6: 'Bạaaaaaaaaaaaaaaa'},
        //                     {7: 'Raaaaaaaaaaaaaaaa'},
        //                     {8: 'Hànaaaaaaaaaaaaaaa'},
        //                     {9: 'Mắaaaaaaaaaaaaaaa'},
        //                     {10: 'Giaaaaaaaaaaaaaaa'},
        //                     {11: 'Raaaaaaaaaaaaaaaa'},
        //                 ]
        //             },
        //             makeFood: {
        //                 name: 'Các bước làm',
        //                 detail: [
        //                     {
        //                         name: '1. aaaaaaaaaaaaaaa',
        //                         content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        //                         image: IMAGES.dishComHenHueComTrang
        //                     },
        //                     {
        //                         name: '2. aaaaaaaaaaaaaaaaaaa',
        //                         content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        //                         image: IMAGES.dishComHenHueSoChe
        //                     },
        //                     {
        //                         name: '3. aaaaaaaaaaaaaaa',
        //                         content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        //                         image: IMAGES.dishComHenHueXaoHen
        //                     },
        //                     {
        //                         name: '4. aaaaaaaaaaaaaaa',
        //                         content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        //                         image: IMAGES.dishComHenHueNuocHen
        //                     },
        //                     {
        //                         name: '5. aaaaaaaaaaaaaaa',
        //                         content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        //                         image: IMAGES.dishComHenHueManRuoc
        //                     },
        //                     {
        //                         name: '6. aaaaaaaaaaaaaaa',
        //                         content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        //                         image: IMAGES.dishComHenHueDone
        //                     },
        //
        //                 ]
        //             }
        //
        //         }
        //     ]
        //
        // },


    ];
    return {
        listProduct,
        listCategories: listCategories
    }
}
export default fakeProduct();
