import {sqlConnect, sql} from '../utils/sql.js';
// import {getItems} from '../controllers/items.controllers.js';

export const getItems = async (req, res) => {
    const pool = await sqlConnect();
    const data = await pool.request().query('SELECT * FROM items');
    // console.log(data.recordset);
    res.json(data.recordset);
}

export const getItem = async (req, res) => {
    const pool = await sqlConnect();
    const data = await pool.request().input("myId",sql.Int,req.params.id).query('SELECT * FROM items WHERE id = @myId');
    // console.log(data.recordset);
    res.json(data.recordset);
}

export const postItem = async (req, res) => {
    const pool = await sqlConnect();
    const data = await pool.request()
    .input("itemName",sql.VarChar,req.body.itemName)
    .input("price",sql.Int,req.body.price)
    .query('Insert into items(itemName,price) values(@itemName,@price)');
    // console.log(data.recordset);
    res.status(200).json({message: 'Item added'});
}

export const putItem = async (req, res) => {
    const pool = await sqlConnect();
    const data = await pool.request()
    .input("Id",sql.Int,req.params.id)
    .input("itemName",sql.VarChar,req.body.itemName)
    .input("price",sql.Int,req.body.price)
    .query('UPDATE items SET itemName = @itemName, price = @price WHERE id = @id');
    // console.log(data.recordset);
    res.status(200).json({message: 'Item added'});
}

export const deleteItem = async (req, res) => {
    const pool = await sqlConnect();
    const data = await pool.request()
    .input("Id",sql.Int,req.params.id)
    .query('delete from items WHERE id = @id');
    // console.log(data.recordset);
    res.status(200).json({message: 'Item added'});
}