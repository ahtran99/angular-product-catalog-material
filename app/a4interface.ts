export interface Company {
    companyName: string;
    companyEmail: string;
    companyTaxCode: number;
    companyPhoto: string;
}

export interface Categories {
    catid: number;
    description: string;
    catimg: string;
}

export interface Products {
    ProductID: number;
    catid: number;
    Name: string;
    Price: number;
    Brand: string;
    Color: string;
    RatingAvg: number;
    InventoryCount: number;
}