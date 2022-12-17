export interface Category {
    _id:string;
    name:string;
    image:string;
    // ? : mean can be null
    productCount?:number;
}
