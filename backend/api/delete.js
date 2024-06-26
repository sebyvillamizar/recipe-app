const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { username, recipeName } = req.body;
    try {  
        const query = 
            'DELETE FROM recipedb.recipes WHERE recipe_name = $1 AND username = $2';
        const { queryDatabase } = require('../server');
        await queryDatabase(query, [recipeName, username]);
        
        res.status(201).json({ message: 'Recipe deleted successfully!' });
    } catch (error) {
        console.error('Error deleting recipe:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;