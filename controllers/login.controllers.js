import {sqlConnect, sql} from '../utils/sql.js';

export const login = async (req, res) => {
    const pool = await sqlConnect();
    const data = await pool.request()
    .input("userName",sql.VarChar,req.body.userName)
    .query('select * from usuario where userName = @userName');
    // console.log(data.recordset);
    let isLogin = (data.recordset[0].passwordd === req.body.passwordd);
    res.status(200).json({isLogin: isLogin});
}