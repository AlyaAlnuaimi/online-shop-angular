export interface Product {
    _id: string;
    name:string;
    image:string;
    category_id:number;
    price:number;
    discount:number;
    rating:number;
    rating_cout:number;
    is_featured: boolean;
    is_recent:boolean;
    description:string;
    color:string;
    size:string;
}
