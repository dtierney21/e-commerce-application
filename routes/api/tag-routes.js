const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
    // find all tags
    // be sure to include its associated Product data
    const tagData = await Tag.findAll({
        include: [
            {
                model: Product,
                through: ProductTag,
                as: 'product_tags',
            },
        ],
    }).catch((err) => {
        res.json(err);
    });
    res.json(tagData);
});

router.get('/:id', async (req, res) => {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    const tag = await Tag.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Product,
                through: ProductTag,
                as: 'product_tags',
            },
        ],
    }).catch((err) => {
        res.json(err);
    });
    res.json(tag);
});

router.post('/', (req, res) => {
    // create a new tag
    Tag.create(req.body)
        .then((tagData) => res.status(200).res.json(tagData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
    Tag.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id,
        },
    })
        .then((tagData) => {
            if (!tagData[0]) {
                res.status(404).json({ message: 'No tag found with this id' });
                return;
            }
            res.json(tagData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
    Tag.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((tagData) => res.json(tagData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
