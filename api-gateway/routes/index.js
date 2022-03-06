const express = require('express')
const router = express.Router()
const axios = require('axios')
const registry = require('./registry.json')

router.all('/:apiName/:path', (req, res) => {
    try {
        if (registry.services[req.params.apiName]) {
            if (req.params.path === "trips") {
                const keyword = req.query.keyword || "";
                axios({
                    method: req.method,
                    url: registry.services[req.params.apiName].url + req.params.path,
                    headers: req.headers,
                    data: req.body
                }).then((respond) => {
                    const data = respond.data;
                    const data_filter = data.filter(element => element.title.includes(keyword) || element.description.includes(keyword) || element.tags.includes(keyword))
                    res.status(200).send(data_filter)
                })
                .catch((err) => {
                    res.status(400).send(err)
                })
            } else {
                res.status(404).send("Path Name Doesn't Exist");
            }
        } else {
            res.status(404).send("API Name Doesn't Exist");
        }
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router