const mongoose = require('mongoose');
const {
    isEmail
} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter email address'],
        unique: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
    name: {
        type: String,
        required: [true, 'Please enter name']
    },
    username: {
        type: String,
        required: [true, 'Please enter username'],
        unique: true
    },
    address: {
        type: String,
        required: [true, 'Please enter address']
    },
    state: {
        type: String,
        required: [true, 'Please enter state']
    },
    country: {
        type: String,
        required: [true, 'Please enter country']
    },
    pan: {
        type: String,
        required: [true, 'Please enter pan'],
        unique: true
    },
    phone: {
        type: Number,
        required: [true, 'Please enter contact number'],
        minlength: [10, 'Minimum 10 digits are required'],
        maxlength: [10, 'Maximum 10 digits are required']
    },
    dob: {
        type: Date,
        required: [true, 'Please enter date of birth']
    },
    accType: {
        type: String,
        required: [true, 'Please enter account type']
    }
})

//fire a function after a doc is saved to the database
userSchema.post('save', function (doc, next) {
    console.log('new user has been registered', doc);
    next();
})

//fire a function before a doc is saved to the database
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

//static method to login user
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({
        email
    });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        } else {
            throw Error('password is incorrect');
        }
    } else {
        throw Error('email is incorrect');
    }

}

const User = mongoose.model('user', userSchema);
module.exports = User;