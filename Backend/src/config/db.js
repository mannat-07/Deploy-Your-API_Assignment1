const {connect} = require('mongoose')

const connectToDb = async(url)=>{
    return await connect(url)
}

module.exports = connectToDb