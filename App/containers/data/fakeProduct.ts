import IMAGES from "../../theme/images";

const fakeProduct = () => {
    const categories = [
        {
            idCategory: 1,
            nameCategory: "Món ăn cho cả nhà",
            avatarCategory: IMAGES.dishCaBienKko,
        },
        {
            idCategory: 2,
            nameCategory: "Món ăn khai vị và tráng miệng",
            avatarCategory: IMAGES.dishCaBienKko,
        },
        {
            idCategory: 3,
            nameCategory: "Công thức pha nước chấm",
            avatarCategory: IMAGES.dishCaBienKko,
        },
        {
            idCategory: 4,
            nameCategory: "Công thức các món canh ngon",
            avatarCategory: IMAGES.dishCaBienKko,
        },
        {
            idCategory: 5,
            nameCategory: "Các món cơm chiên",
            avatarCategory: IMAGES.dishCaBienKko,
        },
        {
            idCategory: 6,
            nameCategory: "Món ăn chơi",
            avatarCategory: IMAGES.dishCaBienKko,
        },
        {
            idCategory: 7,
            nameCategory: "Món xào",
            avatarCategory: IMAGES.dishCaBienKko,
        },
        {
            idCategory: 8,
            nameCategory: "Các món lẩu",
            avatarCategory: IMAGES.dishCaBienKko,
        },
        {
            idCategory: 9,
            nameCategory: "Các món bún, miến",
            avatarCategory: IMAGES.dishCaBienKko,
        },
        {
            idCategory: 10,
            nameCategory: "Trà, cafe",
            avatarCategory: IMAGES.dishCaBienKko,
        },
        {
            idCategory: 11,
            nameCategory: "Sinh tố, kem",
            avatarCategory: IMAGES.dishCaBienKko,
        },
        {
            idCategory: 12,
            nameCategory: "Công thức pha rượu, cốc tai",
            avatarCategory: IMAGES.dishCaBienKko,
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
                }
            ],
            category: categories[0],
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
            category: categories[4],
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
            category: categories[1],
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
            category: categories[0],
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
            category: categories[0],
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
            category: categories[1],
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
            category: categories[5],
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
            category: categories[6],
            description: "canh ngon",
        },


    ];
    return {
        listProduct,
        categories
    }
}
export default fakeProduct();
