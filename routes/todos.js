const {Router} = require('express')
const Todo = require('../models/Todo')
const router = Router()

router.get('/', async (req,res) => {
    const todos = await Todo.find({})
    res.render('index', {
        title: 'Todos List',
        isIndex: true,
        todos
    })
})

router.get('/create', (req,res) => {
res.render('create',{
    title: 'Create to do',
    isCreate: true
})
})

module.exports = router