import IMAGES from "../../theme/images";

const fakeProduct = () => {
    const listCategories = [
        {
            idCategory: 1,
            nameCategory: "Món ăn cho cả nhà",
            avatarCategory: IMAGES.dishCaBienKko,
            type: 'món ăn'
        },
        {
            idCategory: 2,
            nameCategory: "Món ăn khai vị và tráng miệng",
            avatarCategory: IMAGES.dishCaBienKko,
            type: 'món ăn'
        },
        {
            idCategory: 3,
            nameCategory: "Công thức pha nước chấm",
            avatarCategory: IMAGES.dishCaBienKko,
            type: 'công thức'
        },
        {
            idCategory: 4,
            nameCategory: "Công thức các món canh ngon",
            avatarCategory: IMAGES.dishCaBienKko,
            type: 'món ăn'
        },
        {
            idCategory: 5,
            nameCategory: "Các món cơm chiên",
            avatarCategory: IMAGES.dishCaBienKko,
            type: 'món ăn'
        },
        {
            idCategory: 6,
            nameCategory: "Món ăn chơi",
            avatarCategory: IMAGES.dishCaBienKko,
            type: 'món ăn'
        },
        {
            idCategory: 7,
            nameCategory: "Món xào",
            avatarCategory: IMAGES.dishCaBienKko,
            type: 'món ăn'
        },
        {
            idCategory: 8,
            nameCategory: "Các món lẩu",
            avatarCategory: IMAGES.dishCaBienKko,
            type: 'món ăn'
        },
        {
            idCategory: 9,
            nameCategory: "Các món bún, miến",
            avatarCategory: IMAGES.dishCaBienKko,
            type: 'món ăn'
        },
        {
            idCategory: 10,
            nameCategory: "Trà, cafe",
            avatarCategory: IMAGES.dishCaBienKko,
            type: '(công thức)'
        },
        {
            idCategory: 11,
            nameCategory: "Sinh tố, kem",
            avatarCategory: IMAGES.dishCaBienKko,
            type: '(công thức)'
        },
        {
            idCategory: 12,
            nameCategory: "Công thức pha rượu, cốc tai",
            avatarCategory: IMAGES.dishCaBienKko,
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
            category: listCategories[0], // Đã sửa lại để truyền đúng category
            description: "Cơm ngon",
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
            description: "canh ngon",
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
            description: "canh ngon",
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
            description: "canh ngon",
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
            description: "canh ngon",
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
            description: "canh ngon",
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
            description: "canh ngon",
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
            description: "canh ngon",
        },


    ];
    return {
        listProduct,
        listCategories: listCategories
    }
}
export default fakeProduct();
