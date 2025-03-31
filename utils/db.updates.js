import {sqlConnect, sql} from '../utils/sql.js';
import { generateSalt, hashPassword } from '../utils/passwordUtils.js';

async function updatePasswords() {
    try {
        const pool = await sqlConnect();
        
        // Obtener todos los usuarios con sus contraseñas en texto plano
        const result = await pool.request().query('SELECT id, passwordd FROM usuario');
        
        for (const user of result.recordset) {
            const salt = generateSalt();  // Genera nueva sal
            const hashedPassword = hashPassword(user.passwordd, salt);  // Hashea la contraseña
            
            // Actualiza el registro con el hash y la sal
            await pool.request()
                .input("id", sql.Int, user.id)
                .input("password", sql.VarChar, hashedPassword)
                .input("salt", sql.VarChar, salt)
                .query('UPDATE usuario SET passwordd = @password, salt = @salt WHERE id = @id');
            
            console.log(`Usuario ${user.id} actualizado`);
        }
        
        console.log('Todas las contraseñas han sido actualizadas');
    } catch (error) {
        console.error('Error al actualizar contraseñas:', error);
    }
}

updatePasswords();