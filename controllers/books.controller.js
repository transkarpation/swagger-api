const knex = require('../knex')

module.exports = {
    create: async (req, res) => {
        const {title, author} = req.body;
        const {id} = req.user
        const result = await knex('books')
            .returning(['id', 'title', 'author', 'user_id', 'created_at', 'updated_at'])
            .insert({
                title,
                author,
                user_id: id
            })
        res.send(result)
    },

    get: async (req, res) => {
        let { startAt, maxResults } = req.query

        startAt  = Number.isInteger(+startAt) ? Math.abs(startAt) : 0;
        maxResults = Number.isInteger(+maxResults) ? Math.abs(maxResults) : 10;

        let results = await knex('books').count('id as total')
        const total = results[0].total
        const values = await knex.select('*').from('books').orderBy('title').limit(maxResults).offset(startAt)

        const response = {
            startAt: startAt,
            maxResults: maxResults,
            total: +total,
            values
        }
        // const result = await knex.select().table('books')
        return res.send(response)
    },

    getId: async (req, res) => {
        const {id} = req.params;
        const results = await knex('books').where({ id })
        const book = results[0]
        if (book) {
            return res.send(book)
        }

        return res.status(404).end()
    },

    update: async (req, res) => {
        const {id} = req.params
        const {title, author} = req.body
        let author2;

        const results = await knex('books').where({ id }).update({
            title,
            author,
            updated_at: new Date()
        }, ['id', 'author', 'title', 'created_at', 'updated_at', 'user_id'])

        res.send(results[0])
    }, 

    delete: async (req, res) => {
        const {id} = req.params;
        const results = await knex('books').where('id', id).delete(['id'])
        if (results.length) {
            return res.send(results[0])
        }
        return res.status(404).end()
    }
}