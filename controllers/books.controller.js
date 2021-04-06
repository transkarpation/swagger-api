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
        try {
            // const results = await knex('books as b')
            //     .join('users as u', 'u.id', 'b.user_id')
            //     .select('b.id', 'u.email as creator_email', 'b.title', 'b.author')
            const response = {
                startAt: 0,
                maxResults: 10,
                isLast: false,
                total: 200,
                values: []
            }
            // const result = await knex.select().table('books')
            return res.send(response)
        } catch (e) {
            return res.status(500).end()
        }
        
    },

    getId: async (req, res) => {
        const {id} = req.params;
        const results = await knex.where({ id })
        const book = results[0]
        res.send(book)
    },

    update: (req, res) => {
        res.send('tasks update')
    },

    delete: (req, res) => {
        res.send('tasks delete')
    }
}