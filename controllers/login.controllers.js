import {sqlConnect, sql} from '../utils/sql.js';
import { verifyPassword } from '../utils/passwordUtils.js';

export const login = async (req, res) => {
    try {
        const pool = await sqlConnect();
        const data = await pool.request()
            .input("userName", sql.VarChar, req.body.userName)
            .query('SELECT * FROM usuario WHERE userName = @userName');
        
        if (data.recordset.length === 0) {
            return res.status(200).json({ isLogin: false, user: {} });
        }

        const user = data.recordset[0];
        const isLogin = verifyPassword(req.body.password, user.passwordd, user.salt);
        
        if (isLogin) {
            res.status(200).json({ isLogin: isLogin, user: user });
        } else {
            res.status(200).json({ isLogin: false, user: {} });
        }
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
}