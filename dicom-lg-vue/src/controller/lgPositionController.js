import axios from "axios"

class LgPositionControler {
    constructor() { }

    async getPosition(path) {
        const res = await axios.get(path).catch(err => {
            throw new Error('New error message', { cause: err })
        })
        console.log(res.data)
        return await res.data
    }

    async getImages(path) {
        const res = await axios.get(path).catch(err => {
            throw new Error('New error message', { cause: err })
        })
        return await res.data
    }
}


export default LgPositionControler;