import axios from "axios";

const BASE_URL = "https://api.chucknorris.io/jokes/random";

const getMessage = async () => {
    const response = await axios.get(`${BASE_URL}`)
    return response
}

export default getMessage;