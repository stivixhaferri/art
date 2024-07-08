import mongoose from "mongoose";


const carSchema  = new mongoose.Schema({
    make:{
        type:String,
        required:true
    },
    model: {
        type:String,
        required: true
    },
    year:{
        type:String,
        required: true
    },
    seats:{
        type:Number,
        required: true
    },
    transmision:{
        type:String,
        required:true
    },
    fuel:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    cover:{
        type:String,
        required:true
    },
    images:{
        type:[String],
        required:true
    },
    userId:{
        type:String,
        required:true
    }

    
})


const CarModel = mongoose.model("Cars", carSchema);

export default CarModel;