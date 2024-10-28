/*//conectamos mongodb a la dependencia
const mongoose = require('mongoose');

//configurar esquema
const adminSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

//configurar respuesta usuario 
userSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        
    }
    
})

//registrar el modelo
const User = mongoose.model('User', userSchema);

//exportamos
module.exports = User;*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }
});

// Configurar respuesta usuario
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('User', userSchema);