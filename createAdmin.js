import fs from 'fs';
import bcrypt from 'bcryptjs';
import path from 'path';

const dataDir = path.join('./data');
const dataFile = path.join(dataDir, 'users.json');

async function createAdmin() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }

  const passwordHash = await bcrypt.hash('123', 10); // <-- password is now 123

  const adminUser = {
    name: 'Admin',
    email: 'admin@njohmu.com',
    password: passwordHash,
    role: 'admin'
  };

  fs.writeFileSync(dataFile, JSON.stringify([adminUser], null, 2));
  console.log('Admin user created successfully!');
}

createAdmin();
