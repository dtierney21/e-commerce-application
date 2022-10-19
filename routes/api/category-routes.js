const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    const categoryData = await Category.findAll({
        include: [
            {
                model: Product,
            },
        ],
    }).catch((err) => {
        res.json(err);
    });
    res.json(categoryData);
});

router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    const category = await Category.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Product,
            },
        ],
    }).catch((err) => {
        res.json(err);
    });
    res.json(category);
});

router.post('/', (req, res) => {
    // create a new category
    Category.create(req.body)
        .then((category) => {
            // if there's product tags, we need to create pairings to bulk create in the ProductTag model
            if (req.body.tagIds.length) {
                const productTagIdArr = req.body.tagIds.map((tag_id) => {
                    return {
                        product_id: product.id,
                        tag_id,
                    };
                });
                return ProductTag.bulkCreate(productTagIdArr);
            }
            // if no product tags, just respond
            res.status(200).json(category);
        })
        .then((productTagIds) => res.status(200).json(productTagIds))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Category.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id,
        },
    })
        .then((dbCategoryData) => {
            if (!dbCategoryData[0]) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }
            res.json(dbCategoryData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Category.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((dbCategoryData) => {
            if (!dbCategoryData) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }
            res.json(dbCategoryData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
