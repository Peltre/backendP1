import crypto from 'crypto';

// Genera una sal aleatoria
function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

// Crea un hash SHA-256 de la contraseña con la sal
function hashPassword(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha256').toString('hex');
}

// Verifica si la contraseña proporcionada coincide con el hash almacenado
function verifyPassword(password, storedHash, salt) {
    const hash = hashPassword(password, salt);
    return hash === storedHash;
}

export { generateSalt, hashPassword, verifyPassword };