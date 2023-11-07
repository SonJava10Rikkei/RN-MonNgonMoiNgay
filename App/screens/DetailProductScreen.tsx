import React from "react";
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import ICONS from "../theme/icon";
import IMAGES from "../theme/images";

const DetailProductScreen = (
    {}: {}
) => {
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
            nameProduct: 'Cơm tấm chân giò',
            price: 100000.0,
            quantity: 20,
            imageProduct: [
                {
                    idIMG: 1,
                    urlImage: IMAGES.dishCaBienKko,
                },
                {
                    idIMG: 2,
                    urlImage: IMAGES.dishCaBienKko,
                },
            ],
            category: listCategories[0],
            description: [
                {
                    name: 'Phở xào là món ăn yêu thích, món ngon của nhiều người vì có cách làm đơn giản và dễ biến tấu cùng nhiều nguyên liệu như nấm, thịt bò, rau cải,… Tuy nhiên, để đảm bảo món ăn không bị dính, nát khi thực hiện, bạn hãy tham khảo cách làm phở xào thịt bò ngon khó cưỡng được chia sẻ dưới đây',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            '150g bánh phở khô (loại có chiều rộng là 1mm)',
                            '150g nấm đông cô',
                            '500g thịt bò',
                            '150g cà rốt',
                            '300g cải thìa',
                            '70g hành tây',
                            '3 cọng hành lá',
                            '3 tép tỏi',
                            '2 củ hành tím',
                            'Gia vị: Dầu hào, nước tương, hạt nêm, dầu mè, tiêu xay,…',
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
                                image: IMAGES.dishPhoXaoCachLam
                            },
                            {
                                name: '2. Pha chế xốt xào',
                                content: 'Cho vào chén các gia vị gồm: 2 muỗng canh nước tương (hoặc 1 muỗng canh hắc xì dầu), 2 muỗng canh dầu hào, 1 muỗng cà phê đường, 1 muỗng canh dầu ăn, một ít tiêu xay, trộn đều để hỗn hợp đồng nhất.',
                                image: IMAGES.dishPhoXaoXot
                            },
                            {
                                name: '3 .Xào thịt bò và các loại rau củ',
                                content: 'Đặt chảo chống dính lên bếp, đun nóng dầu ăn và phi thơm ít tỏi, hành tím băm. Cho thịt bò đã ướp vào xào chín tái, trút ra dĩa. ' +
                                    'Tiếp tục sử dụng lại chảo vừa rồi, đun nóng ít dầu ăn và phi thơm tỏi, hành tím băm. ' +
                                    'Lần lượt cho nấm và cà rốt vào cùng 2 muỗng canh xốt xào, trộn đều. ' +
                                    'Khi thấy 2 nguyên liệu đã chín, bạn tiếp tục cho cải thìa vào và xào chín, trút tất cả ra âu, để riêng.',
                                image: IMAGES.dishPhoXaoThitBoChinTai
                            },
                            {
                                name: '4 .Làm phở xào bò',
                                content: 'Cho bánh phở vào âu nước nóng 70 độ C, ngâm khoảng 5 phút, sau đó vớt ra, bỏ nước và ngâm lại với nước nóng 70 độ C thêm một lần nữa. Lúc này, sợi phở đã mềm, bạn dùng đũa khuấy cho tơi rồi trút ra, rửa sạch với nước lạnh và để ráo. Cho bánh phở vào âu, trộn đều cùng phần xốt xào còn lại. ' +
                                    'Đặt chảo chống dính lên bếp, đun nóng ít dầu ăn và xào thơm hành lá, hành tây. Sau đó, bạn tiếp tục cho phở đã trộn xốt vào chảo, đảo đều với lửa lớn. ' +
                                    'Khi thấy sợi phở đã chín mềm, bạn cho rau cải, thịt bò đã làm ở bước 3 vào, trộn đều. Xào thêm 3 phút là có thể tắt bếp.',
                                image: IMAGES.dishPhoXaoAll
                            },
                            {
                                name: '5 .Trình bày và thưởng thức',
                                content: 'Sau khi thực hiện xong, bạn cho PHỞ XÀO bò ra dĩa, rắc thêm ít tiêu xay lên trên là có thể thưởng thức. Nên dùng ngay khi còn nóng để đảm bảo hương vị cho món ăn bạn nhé!',
                                image: IMAGES.dishPhoXaoDone
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
                    urlImage: IMAGES.dishCanhGheRauMuon,
                },
            ],
            category: listCategories[4],
            description: [
                {
                    name: 'Phở xào là món ăn yêu thích, món ngon của nhiều người vì có cách làm đơn giản và dễ biến tấu cùng nhiều nguyên liệu như nấm, thịt bò, rau cải,… Tuy nhiên, để đảm bảo món ăn không bị dính, nát khi thực hiện, bạn hãy tham khảo cách làm phở xào thịt bò ngon khó cưỡng được chia sẻ dưới đây',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            '150g bánh phở khô (loại có chiều rộng là 1mm)',
                            '150g nấm đông cô',
                            '500g thịt bò',
                            '150g cà rốt',
                            '300g cải thìa',
                            '70g hành tây',
                            '3 cọng hành lá',
                            '3 tép tỏi',
                            '2 củ hành tím',
                            'Gia vị: Dầu hào, nước tương, hạt nêm, dầu mè, tiêu xay,…',
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
                                image: IMAGES.dishPhoXaoCachLam
                            },
                            {
                                name: '2. Pha chế xốt xào',
                                content: 'Cho vào chén các gia vị gồm: 2 muỗng canh nước tương (hoặc 1 muỗng canh hắc xì dầu), 2 muỗng canh dầu hào, 1 muỗng cà phê đường, 1 muỗng canh dầu ăn, một ít tiêu xay, trộn đều để hỗn hợp đồng nhất.',
                                image: IMAGES.dishPhoXaoXot
                            },
                            {
                                name: '3 .Xào thịt bò và các loại rau củ',
                                content: 'Đặt chảo chống dính lên bếp, đun nóng dầu ăn và phi thơm ít tỏi, hành tím băm. Cho thịt bò đã ướp vào xào chín tái, trút ra dĩa. ' +
                                    'Tiếp tục sử dụng lại chảo vừa rồi, đun nóng ít dầu ăn và phi thơm tỏi, hành tím băm. ' +
                                    'Lần lượt cho nấm và cà rốt vào cùng 2 muỗng canh xốt xào, trộn đều. ' +
                                    'Khi thấy 2 nguyên liệu đã chín, bạn tiếp tục cho cải thìa vào và xào chín, trút tất cả ra âu, để riêng.',
                                image: IMAGES.dishPhoXaoThitBoChinTai
                            },
                            {
                                name: '4 .Làm phở xào bò',
                                content: 'Cho bánh phở vào âu nước nóng 70 độ C, ngâm khoảng 5 phút, sau đó vớt ra, bỏ nước và ngâm lại với nước nóng 70 độ C thêm một lần nữa. Lúc này, sợi phở đã mềm, bạn dùng đũa khuấy cho tơi rồi trút ra, rửa sạch với nước lạnh và để ráo. Cho bánh phở vào âu, trộn đều cùng phần xốt xào còn lại. ' +
                                    'Đặt chảo chống dính lên bếp, đun nóng ít dầu ăn và xào thơm hành lá, hành tây. Sau đó, bạn tiếp tục cho phở đã trộn xốt vào chảo, đảo đều với lửa lớn. ' +
                                    'Khi thấy sợi phở đã chín mềm, bạn cho rau cải, thịt bò đã làm ở bước 3 vào, trộn đều. Xào thêm 3 phút là có thể tắt bếp.',
                                image: IMAGES.dishPhoXaoAll
                            },
                            {
                                name: '5 .Trình bày và thưởng thức',
                                content: 'Sau khi thực hiện xong, bạn cho PHỞ XÀO bò ra dĩa, rắc thêm ít tiêu xay lên trên là có thể thưởng thức. Nên dùng ngay khi còn nóng để đảm bảo hương vị cho món ăn bạn nhé!',
                                image: IMAGES.dishPhoXaoDone
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
            category: listCategories[1],
            description: [
                {
                    name: 'Phở xào là món ăn yêu thích, món ngon của nhiều người vì có cách làm đơn giản và dễ biến tấu cùng nhiều nguyên liệu như nấm, thịt bò, rau cải,… Tuy nhiên, để đảm bảo món ăn không bị dính, nát khi thực hiện, bạn hãy tham khảo cách làm phở xào thịt bò ngon khó cưỡng được chia sẻ dưới đây',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            '150g bánh phở khô (loại có chiều rộng là 1mm)',
                            '150g nấm đông cô',
                            '500g thịt bò',
                            '150g cà rốt',
                            '300g cải thìa',
                            '70g hành tây',
                            '3 cọng hành lá',
                            '3 tép tỏi',
                            '2 củ hành tím',
                            'Gia vị: Dầu hào, nước tương, hạt nêm, dầu mè, tiêu xay,…',
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
                                image: IMAGES.dishPhoXaoCachLam
                            },
                            {
                                name: '2. Pha chế xốt xào',
                                content: 'Cho vào chén các gia vị gồm: 2 muỗng canh nước tương (hoặc 1 muỗng canh hắc xì dầu), 2 muỗng canh dầu hào, 1 muỗng cà phê đường, 1 muỗng canh dầu ăn, một ít tiêu xay, trộn đều để hỗn hợp đồng nhất.',
                                image: IMAGES.dishPhoXaoXot
                            },
                            {
                                name: '3 .Xào thịt bò và các loại rau củ',
                                content: 'Đặt chảo chống dính lên bếp, đun nóng dầu ăn và phi thơm ít tỏi, hành tím băm. Cho thịt bò đã ướp vào xào chín tái, trút ra dĩa. ' +
                                    'Tiếp tục sử dụng lại chảo vừa rồi, đun nóng ít dầu ăn và phi thơm tỏi, hành tím băm. ' +
                                    'Lần lượt cho nấm và cà rốt vào cùng 2 muỗng canh xốt xào, trộn đều. ' +
                                    'Khi thấy 2 nguyên liệu đã chín, bạn tiếp tục cho cải thìa vào và xào chín, trút tất cả ra âu, để riêng.',
                                image: IMAGES.dishPhoXaoThitBoChinTai
                            },
                            {
                                name: '4 .Làm phở xào bò',
                                content: 'Cho bánh phở vào âu nước nóng 70 độ C, ngâm khoảng 5 phút, sau đó vớt ra, bỏ nước và ngâm lại với nước nóng 70 độ C thêm một lần nữa. Lúc này, sợi phở đã mềm, bạn dùng đũa khuấy cho tơi rồi trút ra, rửa sạch với nước lạnh và để ráo. Cho bánh phở vào âu, trộn đều cùng phần xốt xào còn lại. ' +
                                    'Đặt chảo chống dính lên bếp, đun nóng ít dầu ăn và xào thơm hành lá, hành tây. Sau đó, bạn tiếp tục cho phở đã trộn xốt vào chảo, đảo đều với lửa lớn. ' +
                                    'Khi thấy sợi phở đã chín mềm, bạn cho rau cải, thịt bò đã làm ở bước 3 vào, trộn đều. Xào thêm 3 phút là có thể tắt bếp.',
                                image: IMAGES.dishPhoXaoAll
                            },
                            {
                                name: '5 .Trình bày và thưởng thức',
                                content: 'Sau khi thực hiện xong, bạn cho PHỞ XÀO bò ra dĩa, rắc thêm ít tiêu xay lên trên là có thể thưởng thức. Nên dùng ngay khi còn nóng để đảm bảo hương vị cho món ăn bạn nhé!',
                                image: IMAGES.dishPhoXaoDone
                            },

                        ]
                    }

                }
            ]

        },
        {
            id: 4,
            nameProduct: 'Chả lụa',
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
                    name: 'Phở xào là món ăn yêu thích, món ngon của nhiều người vì có cách làm đơn giản và dễ biến tấu cùng nhiều nguyên liệu như nấm, thịt bò, rau cải,… Tuy nhiên, để đảm bảo món ăn không bị dính, nát khi thực hiện, bạn hãy tham khảo cách làm phở xào thịt bò ngon khó cưỡng được chia sẻ dưới đây',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            '150g bánh phở khô (loại có chiều rộng là 1mm)',
                            '150g nấm đông cô',
                            '500g thịt bò',
                            '150g cà rốt',
                            '300g cải thìa',
                            '70g hành tây',
                            '3 cọng hành lá',
                            '3 tép tỏi',
                            '2 củ hành tím',
                            'Gia vị: Dầu hào, nước tương, hạt nêm, dầu mè, tiêu xay,…',
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
                                image: IMAGES.dishPhoXaoCachLam
                            },
                            {
                                name: '2. Pha chế xốt xào',
                                content: 'Cho vào chén các gia vị gồm: 2 muỗng canh nước tương (hoặc 1 muỗng canh hắc xì dầu), 2 muỗng canh dầu hào, 1 muỗng cà phê đường, 1 muỗng canh dầu ăn, một ít tiêu xay, trộn đều để hỗn hợp đồng nhất.',
                                image: IMAGES.dishPhoXaoXot
                            },
                            {
                                name: '3 .Xào thịt bò và các loại rau củ',
                                content: 'Đặt chảo chống dính lên bếp, đun nóng dầu ăn và phi thơm ít tỏi, hành tím băm. Cho thịt bò đã ướp vào xào chín tái, trút ra dĩa. ' +
                                    'Tiếp tục sử dụng lại chảo vừa rồi, đun nóng ít dầu ăn và phi thơm tỏi, hành tím băm. ' +
                                    'Lần lượt cho nấm và cà rốt vào cùng 2 muỗng canh xốt xào, trộn đều. ' +
                                    'Khi thấy 2 nguyên liệu đã chín, bạn tiếp tục cho cải thìa vào và xào chín, trút tất cả ra âu, để riêng.',
                                image: IMAGES.dishPhoXaoThitBoChinTai
                            },
                            {
                                name: '4 .Làm phở xào bò',
                                content: 'Cho bánh phở vào âu nước nóng 70 độ C, ngâm khoảng 5 phút, sau đó vớt ra, bỏ nước và ngâm lại với nước nóng 70 độ C thêm một lần nữa. Lúc này, sợi phở đã mềm, bạn dùng đũa khuấy cho tơi rồi trút ra, rửa sạch với nước lạnh và để ráo. Cho bánh phở vào âu, trộn đều cùng phần xốt xào còn lại. ' +
                                    'Đặt chảo chống dính lên bếp, đun nóng ít dầu ăn và xào thơm hành lá, hành tây. Sau đó, bạn tiếp tục cho phở đã trộn xốt vào chảo, đảo đều với lửa lớn. ' +
                                    'Khi thấy sợi phở đã chín mềm, bạn cho rau cải, thịt bò đã làm ở bước 3 vào, trộn đều. Xào thêm 3 phút là có thể tắt bếp.',
                                image: IMAGES.dishPhoXaoAll
                            },
                            {
                                name: '5 .Trình bày và thưởng thức',
                                content: 'Sau khi thực hiện xong, bạn cho PHỞ XÀO bò ra dĩa, rắc thêm ít tiêu xay lên trên là có thể thưởng thức. Nên dùng ngay khi còn nóng để đảm bảo hương vị cho món ăn bạn nhé!',
                                image: IMAGES.dishPhoXaoDone
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
                    name: 'Phở xào là món ăn yêu thích, món ngon của nhiều người vì có cách làm đơn giản và dễ biến tấu cùng nhiều nguyên liệu như nấm, thịt bò, rau cải,… Tuy nhiên, để đảm bảo món ăn không bị dính, nát khi thực hiện, bạn hãy tham khảo cách làm phở xào thịt bò ngon khó cưỡng được chia sẻ dưới đây',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            '150g bánh phở khô (loại có chiều rộng là 1mm)',
                            '150g nấm đông cô',
                            '500g thịt bò',
                            '150g cà rốt',
                            '300g cải thìa',
                            '70g hành tây',
                            '3 cọng hành lá',
                            '3 tép tỏi',
                            '2 củ hành tím',
                            'Gia vị: Dầu hào, nước tương, hạt nêm, dầu mè, tiêu xay,…',
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
                                image: IMAGES.dishPhoXaoCachLam
                            },
                            {
                                name: '2. Pha chế xốt xào',
                                content: 'Cho vào chén các gia vị gồm: 2 muỗng canh nước tương (hoặc 1 muỗng canh hắc xì dầu), 2 muỗng canh dầu hào, 1 muỗng cà phê đường, 1 muỗng canh dầu ăn, một ít tiêu xay, trộn đều để hỗn hợp đồng nhất.',
                                image: IMAGES.dishPhoXaoXot
                            },
                            {
                                name: '3 .Xào thịt bò và các loại rau củ',
                                content: 'Đặt chảo chống dính lên bếp, đun nóng dầu ăn và phi thơm ít tỏi, hành tím băm. Cho thịt bò đã ướp vào xào chín tái, trút ra dĩa. ' +
                                    'Tiếp tục sử dụng lại chảo vừa rồi, đun nóng ít dầu ăn và phi thơm tỏi, hành tím băm. ' +
                                    'Lần lượt cho nấm và cà rốt vào cùng 2 muỗng canh xốt xào, trộn đều. ' +
                                    'Khi thấy 2 nguyên liệu đã chín, bạn tiếp tục cho cải thìa vào và xào chín, trút tất cả ra âu, để riêng.',
                                image: IMAGES.dishPhoXaoThitBoChinTai
                            },
                            {
                                name: '4 .Làm phở xào bò',
                                content: 'Cho bánh phở vào âu nước nóng 70 độ C, ngâm khoảng 5 phút, sau đó vớt ra, bỏ nước và ngâm lại với nước nóng 70 độ C thêm một lần nữa. Lúc này, sợi phở đã mềm, bạn dùng đũa khuấy cho tơi rồi trút ra, rửa sạch với nước lạnh và để ráo. Cho bánh phở vào âu, trộn đều cùng phần xốt xào còn lại. ' +
                                    'Đặt chảo chống dính lên bếp, đun nóng ít dầu ăn và xào thơm hành lá, hành tây. Sau đó, bạn tiếp tục cho phở đã trộn xốt vào chảo, đảo đều với lửa lớn. ' +
                                    'Khi thấy sợi phở đã chín mềm, bạn cho rau cải, thịt bò đã làm ở bước 3 vào, trộn đều. Xào thêm 3 phút là có thể tắt bếp.',
                                image: IMAGES.dishPhoXaoAll
                            },
                            {
                                name: '5 .Trình bày và thưởng thức',
                                content: 'Sau khi thực hiện xong, bạn cho PHỞ XÀO bò ra dĩa, rắc thêm ít tiêu xay lên trên là có thể thưởng thức. Nên dùng ngay khi còn nóng để đảm bảo hương vị cho món ăn bạn nhé!',
                                image: IMAGES.dishPhoXaoDone
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
                    name: 'Phở xào là món ăn yêu thích, món ngon của nhiều người vì có cách làm đơn giản và dễ biến tấu cùng nhiều nguyên liệu như nấm, thịt bò, rau cải,… Tuy nhiên, để đảm bảo món ăn không bị dính, nát khi thực hiện, bạn hãy tham khảo cách làm phở xào thịt bò ngon khó cưỡng được chia sẻ dưới đây',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            '150g bánh phở khô (loại có chiều rộng là 1mm)',
                            '150g nấm đông cô',
                            '500g thịt bò',
                            '150g cà rốt',
                            '300g cải thìa',
                            '70g hành tây',
                            '3 cọng hành lá',
                            '3 tép tỏi',
                            '2 củ hành tím',
                            'Gia vị: Dầu hào, nước tương, hạt nêm, dầu mè, tiêu xay,…',
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
                                image: IMAGES.dishPhoXaoCachLam
                            },
                            {
                                name: '2. Pha chế xốt xào',
                                content: 'Cho vào chén các gia vị gồm: 2 muỗng canh nước tương (hoặc 1 muỗng canh hắc xì dầu), 2 muỗng canh dầu hào, 1 muỗng cà phê đường, 1 muỗng canh dầu ăn, một ít tiêu xay, trộn đều để hỗn hợp đồng nhất.',
                                image: IMAGES.dishPhoXaoXot
                            },
                            {
                                name: '3 .Xào thịt bò và các loại rau củ',
                                content: 'Đặt chảo chống dính lên bếp, đun nóng dầu ăn và phi thơm ít tỏi, hành tím băm. Cho thịt bò đã ướp vào xào chín tái, trút ra dĩa. ' +
                                    'Tiếp tục sử dụng lại chảo vừa rồi, đun nóng ít dầu ăn và phi thơm tỏi, hành tím băm. ' +
                                    'Lần lượt cho nấm và cà rốt vào cùng 2 muỗng canh xốt xào, trộn đều. ' +
                                    'Khi thấy 2 nguyên liệu đã chín, bạn tiếp tục cho cải thìa vào và xào chín, trút tất cả ra âu, để riêng.',
                                image: IMAGES.dishPhoXaoThitBoChinTai
                            },
                            {
                                name: '4 .Làm phở xào bò',
                                content: 'Cho bánh phở vào âu nước nóng 70 độ C, ngâm khoảng 5 phút, sau đó vớt ra, bỏ nước và ngâm lại với nước nóng 70 độ C thêm một lần nữa. Lúc này, sợi phở đã mềm, bạn dùng đũa khuấy cho tơi rồi trút ra, rửa sạch với nước lạnh và để ráo. Cho bánh phở vào âu, trộn đều cùng phần xốt xào còn lại. ' +
                                    'Đặt chảo chống dính lên bếp, đun nóng ít dầu ăn và xào thơm hành lá, hành tây. Sau đó, bạn tiếp tục cho phở đã trộn xốt vào chảo, đảo đều với lửa lớn. ' +
                                    'Khi thấy sợi phở đã chín mềm, bạn cho rau cải, thịt bò đã làm ở bước 3 vào, trộn đều. Xào thêm 3 phút là có thể tắt bếp.',
                                image: IMAGES.dishPhoXaoAll
                            },
                            {
                                name: '5 .Trình bày và thưởng thức',
                                content: 'Sau khi thực hiện xong, bạn cho PHỞ XÀO bò ra dĩa, rắc thêm ít tiêu xay lên trên là có thể thưởng thức. Nên dùng ngay khi còn nóng để đảm bảo hương vị cho món ăn bạn nhé!',
                                image: IMAGES.dishPhoXaoDone
                            },

                        ]
                    }

                }
            ]

        },
        {
            id: 7,
            nameProduct: 'Overnight Oat',
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
                    name: 'Phở xào là món ăn yêu thích, món ngon của nhiều người vì có cách làm đơn giản và dễ biến tấu cùng nhiều nguyên liệu như nấm, thịt bò, rau cải,… Tuy nhiên, để đảm bảo món ăn không bị dính, nát khi thực hiện, bạn hãy tham khảo cách làm phở xào thịt bò ngon khó cưỡng được chia sẻ dưới đây',
                    ingredient: {
                        name: 'Nguyên liệu',
                        detail: [
                            '150g bánh phở khô (loại có chiều rộng là 1mm)',
                            '150g nấm đông cô',
                            '500g thịt bò',
                            '150g cà rốt',
                            '300g cải thìa',
                            '70g hành tây',
                            '3 cọng hành lá',
                            '3 tép tỏi',
                            '2 củ hành tím',
                            'Gia vị: Dầu hào, nước tương, hạt nêm, dầu mè, tiêu xay,…',
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
                                image: IMAGES.dishPhoXaoCachLam
                            },
                            {
                                name: '2. Pha chế xốt xào',
                                content: 'Cho vào chén các gia vị gồm: 2 muỗng canh nước tương (hoặc 1 muỗng canh hắc xì dầu), 2 muỗng canh dầu hào, 1 muỗng cà phê đường, 1 muỗng canh dầu ăn, một ít tiêu xay, trộn đều để hỗn hợp đồng nhất.',
                                image: IMAGES.dishPhoXaoXot
                            },
                            {
                                name: '3 .Xào thịt bò và các loại rau củ',
                                content: 'Đặt chảo chống dính lên bếp, đun nóng dầu ăn và phi thơm ít tỏi, hành tím băm. Cho thịt bò đã ướp vào xào chín tái, trút ra dĩa. ' +
                                    'Tiếp tục sử dụng lại chảo vừa rồi, đun nóng ít dầu ăn và phi thơm tỏi, hành tím băm. ' +
                                    'Lần lượt cho nấm và cà rốt vào cùng 2 muỗng canh xốt xào, trộn đều. ' +
                                    'Khi thấy 2 nguyên liệu đã chín, bạn tiếp tục cho cải thìa vào và xào chín, trút tất cả ra âu, để riêng.',
                                image: IMAGES.dishPhoXaoThitBoChinTai
                            },
                            {
                                name: '4 .Làm phở xào bò',
                                content: 'Cho bánh phở vào âu nước nóng 70 độ C, ngâm khoảng 5 phút, sau đó vớt ra, bỏ nước và ngâm lại với nước nóng 70 độ C thêm một lần nữa. Lúc này, sợi phở đã mềm, bạn dùng đũa khuấy cho tơi rồi trút ra, rửa sạch với nước lạnh và để ráo. Cho bánh phở vào âu, trộn đều cùng phần xốt xào còn lại. ' +
                                    'Đặt chảo chống dính lên bếp, đun nóng ít dầu ăn và xào thơm hành lá, hành tây. Sau đó, bạn tiếp tục cho phở đã trộn xốt vào chảo, đảo đều với lửa lớn. ' +
                                    'Khi thấy sợi phở đã chín mềm, bạn cho rau cải, thịt bò đã làm ở bước 3 vào, trộn đều. Xào thêm 3 phút là có thể tắt bếp.',
                                image: IMAGES.dishPhoXaoAll
                            },
                            {
                                name: '5 .Trình bày và thưởng thức',
                                content: 'Sau khi thực hiện xong, bạn cho PHỞ XÀO bò ra dĩa, rắc thêm ít tiêu xay lên trên là có thể thưởng thức. Nên dùng ngay khi còn nóng để đảm bảo hương vị cho món ăn bạn nhé!',
                                image: IMAGES.dishPhoXaoDone
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
                    name: 'Phở xào là món ăn yêu thích, món ngon của nhiều người vì có cách làm đơn giản và dễ biến tấu cùng nhiều nguyên liệu như nấm, thịt bò, rau cải,… Tuy nhiên, để đảm bảo món ăn không bị dính, nát khi thực hiện, bạn hãy tham khảo cách làm phở xào thịt bò ngon khó cưỡng được chia sẻ dưới đây',
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

    ];

    const detailObject = listProduct[7].description[0].ingredient.detail[1];

    const formattedText = Object.entries(detailObject).map(([key, value]) => `${key}: ${value}`).join('\n');
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent
                title="Detail Product"
                iconLeft={ICONS.iconBackWhite}
                iconRight1={ICONS.iconHeartWhite}
                iconRight2={ICONS.iconNoteWhite}
                activeDetailProduct={true}
                showIconLeft={true}
                showIconRight1={true}
                showIconRight2={true}
            />
            <SafeAreaView>
                <ScrollView
                    style={styles.content}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{marginBottom: 1, paddingBottom: 140}}
                >

                    <View>
                        <Text>{listProduct[7].nameProduct}</Text>
                        <Text>{listProduct[7].description[0].name}</Text>
                        <Image source={listProduct[7].imageProduct[0].urlImage}/>
                        <Text>{listProduct[7].description[0].ingredient.name} :</Text>
                        {listProduct[7].description[0].ingredient.detail.map((item, index) => (
                            <View key={index} style={{padding: 8}}>
                                {Object.entries(item).map(([key, value]) => (
                                    <Text key={key}>{`${key}: ${value}`}</Text>
                                ))}
                            </View>
                        ))}
                    </View>
                    <View>
                        <Text>{listProduct[7].description[0].makeFood.name} :</Text>
                        <View>
                            {listProduct[7].description[0].makeFood.detail.map((item, index) => (
                                <View key={index}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.content}</Text>
                                    <Image source={item.image} style={{width:300,height:300}}/>
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaView>
    )

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 10,

    },

})

export default DetailProductScreen;
