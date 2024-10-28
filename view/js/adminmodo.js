const adminSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: { type: String, default: 'admin' }
  });
  
  const Admin = mongoose.model('Admin', adminSchema);