import express, { Router } from 'express';
const router: Router = express.Router();
import client from '../psqlClient'

router.get('/',(req,res)=>{
    res.status(201).send({
        success: true,
        data: "psql"
    })
})


// get all the users fromdb
router.get('/users', async (req,res)=>{
    try {
        const {rows} = await (await client).query('select * from users');
        res.send(rows);
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
})

export {
    router
};