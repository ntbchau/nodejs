//import connection from "./configs/connectDB";
import pool from '../configs/connectDB'

let getHomepage = async (req, res) => {

    const [rows, fields] = await pool.execute('SElECT * FROM users');
    return res.render('index.ejs', { dataUser: rows });

}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let user = await pool.execute('select * from users where id = ?', [userId]);

    return res.send(JSON.stringify(user[0]));
}
let createNewUser = async (req, res) => {
    console.log(req.body);
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('insert into users (firstName, lastName, email, address) values (?,?,?,?)', [firstName, lastName, email, address]);

    return res.redirect('/');
}
module.exports = {

    getHomepage,
    getDetailPage,
    createNewUser
}      