import axios from "axios"

class LgPositionControler {
    constructor() {

    }

    async getPosition(path) {
        const res = await axios.get(path).catch(err => {
            throw new Error('New error message', { cause: err })
        })
        print(res.data)
        return await res.data
    }
}


export default LgPositionControler;