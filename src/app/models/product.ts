export class Product {

    id:number;
    name:string;
    description:string;
    price:number;
    imageUrl:string;



    constructor(id:number,name:string,description:string = '',price:number = 0,imageUrl:string = 'https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg') {

    this.id = id;
    this.name=name;
    this.description = description;
    this.price=price;
    this.imageUrl = imageUrl;


    }
}
