const userSchema = new mongoose.Schema ({
    email: {
        required: true,
        type: String,
        unique: true,
        trim:true,
    },
    password: {
        required: true,
        type: String,
        minLenght: 6,
    },
    user: {
        required: true,
        type: String,
        trim: true,
    }
});
module.exports = User = mongose.model('user', userSchema);