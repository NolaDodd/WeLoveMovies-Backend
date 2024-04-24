const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const theatersService = require("./theaters.service")

async function list(req, res, next){
    const data = await theatersService.list()
    res.json({data})
}

async function read(req, res){
const { theaterId } = req.params
const data = await theatersService.read(theaterId).first()
res.json({data})
}


module.exports = {
    list: asyncErrorBoundary(list), 
    read: asyncErrorBoundary(read),
}