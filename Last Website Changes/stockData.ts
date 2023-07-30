// import { axios } from 'axios';
import axios from 'axios';

export const getStockData = async () => {
    console.log("hello")
    const response = await axios.get('https://query1.finance.yahoo.com/v8/finance/chart/aapl?&interval=1wk&range=1y');
    console.log(response.data);
    return response.data;
}

// getStockData();
// export default getStockData;
