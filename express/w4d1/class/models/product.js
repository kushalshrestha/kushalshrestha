module.exports = class Product{
    constructor(name, description, price, image){
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    toString(){
        return this.name + ": " + this.description + ". Price: $" + this.price; 
    }
}