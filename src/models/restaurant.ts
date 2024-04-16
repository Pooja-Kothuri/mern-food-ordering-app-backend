import mongoose from "mongoose";

const menuItemSchema=new mongoose.Schema({
name: { type: String, required: true},
price: { type: Number, required: true},
});


const restaurantSchema=new mongoose.Schema({
    //refering to user who is creating a restaurant
    //ref is used to link docs of one collection with docs of other collections ,this is called population
    user: { type:mongoose.Schema.Types.ObjectId, ref: "User" },//user objectid is _id of user in User collection
    restaurantName: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},
    deliveryPrice: {type: Number, required: true},
    estimatedDeliveryTime: {type: Number, required: true},
    cuisines: [{type: String, required: true}],//array of strings
    menuItems: [menuItemSchema],
    imageFile: {type: String, required: true},
    lastUpdated: {type: Date, required: true},
});

const Restaurant=mongoose.model("Restaurant",restaurantSchema);
export default Restaurant;

