import IMAGES from "../../theme/images";

export type DataCategory = {
    idCategory: number;
    nameCategory: string;
    avatarCategory: string;
    type: string;
}


export const listCategories: DataCategory[] = [
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
];

export type DataProduct = {
    id: number,
    nameProduct: string,
    price: number;
    quantity: number;
    imageProduct: any;
    category: any,
    description: string,
}
export const listProduct: DataProduct[] = [
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

