const express = require('express')
const router = express.Router()
const axios = require('axios')
const registry = require('./registry.json')

router.all('/:apiName/:path', (req, res) => {
    if (registry.services[req.params.apiName]) {
        if (req.params.path === "trips") {
            let keyword = req.query.keyword;
            axios({
                method: req.method,
                url: registry.services[req.params.apiName].url + req.params.path,
                headers: req.headers,
                data: req.body
            }).then((respond) => {
                let data = respond.data;
                let data_filter = data.filter(element => element.title.includes(keyword) || element.description.includes(keyword) || element.tags.includes(keyword))
                res.status(200).send(data_filter)
            })
            .catch((err) => {
                res.send(err)
            })
        } else {
            res.send("Path Name doesn't Exist")
        }
    } else {
        res.send("API Name doesn't Exist")
    }
})

module.exports = router