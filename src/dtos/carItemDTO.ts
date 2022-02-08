export interface CarDTO {
        period: string;
        price: number;
        about: string;
        accessories: Array<{
            id: string;
            name: string;
            type: string;
        }>;
        brand: string;
        fuel_type: string;
        id: string;
        name: string;
        photos: Array<{
            id: string;
            photo: string;
        }>;
        thumbnail: string;
}

export interface CarDTOFlatlist {
    car: {
        period: string;
        price: number;
        about: string;
        accessories: Array<{
            id: string;
            name: string;
            type: string;
        }>;
        brand: string;
        fuel_type: string;
        id: string;
        name: string;
        photos: Array<{
            id: string;
            photo: string;
        }>;
        thumbnail: string;
    }
}