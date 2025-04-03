import { generateSalt, hashPassword } from '../utils/password.utils.js';

function runTests() {
    console.log("=== Iniciando pruebas de hashing ===");
    
    // Prueba 1: Mismo texto con misma sal produce mismo hash
    const salt1 = generateSalt();
    const password1 = "miContraseñaSegura123";
    const hash1 = hashPassword(password1, salt1);
    const hash2 = hashPassword(password1, salt1);
    console.log("\nPrueba 1 - Mismo texto misma sal:");
    console.log("Hash 1:", hash1);
    console.log("Hash 2:", hash2);
    console.log("Resultado:", hash1 === hash2 ? "Exito" : "Fallo");
    
    // Prueba 2: Texto ligeramente diferente
    const password2 = "miContraseñaSegura124"; // Cambio de 123 a 124
    const hash3 = hashPassword(password2, salt1);
    console.log("\nPrueba 2 - Texto similar:");
    console.log("Hash original:", hash1.substring(0, 20)    + "...");
    console.log("Hash modificado:", hash3.substring(0, 20) + "...");
    console.log("Resultado:", hash1 !== hash3 ? "Exito" : "Fallo");
    
    // Prueba 3: Mismo texto con diferente sal
    const salt2 = generateSalt();
    const hash4 = hashPassword(password1, salt2);
    console.log("\nPrueba 3 - Mismo texto diferente sal:");
    console.log("Hash con sal 1:", hash1.substring(0, 20) + "...");
    console.log("Hash con sal 2:", hash4.substring(0, 20) + "...");
    console.log("Resultado:", hash1 !== hash4 ? "Exito" : "Fallo");
    
    // Prueba 4: Verificación de contraseña
    const isVerified = (hashPassword(password1, salt1) === hash1);
    console.log("\nPrueba 4 - Verificación:");
    console.log("Contraseña verificada:", isVerified ? "Exito" : "Fallo");
}

runTests();