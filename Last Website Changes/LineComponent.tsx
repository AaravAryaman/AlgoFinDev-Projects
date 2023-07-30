import React, { useEffect, useState } from "react";
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { Select, Option } from "@mui/joy";

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};
const LineComponent = ({stockName, set30DayDifference}) => {
    const [selectedStock, setSelectedStock] = useState<any>('ADANIENT.NS');
    const [stocksList, setStocksList] = useState<any>([]);
    const [tableData, setTableData] = useState<any>({
        labels: [],
        datasets: [
            {
                label: 'RELIANCE.BSE',
                data: [],
                backgroundColor: '#59ddaa',
            },
        ],
    });
    var labelsTemp:any = [];
    var dataTemp:any = [];
    var stocksListTemp:any = [];
    const fetchData = async (stock:string) => {
        await getDocs(collection(db, "stocks")).then((querySnapshot:any) => {
            querySnapshot.forEach((doc:any) => {
                stocksListTemp.push(doc.id);
                if(doc.id == stock){
                    var data = doc.data().data;
                    for (let i = 0; i < data.length; i++) {
                        labelsTemp.push(data[i].date.split('T')[0]);
                        dataTemp.push(data[i].close);
                    }
                    setTableData({
                        labels: labelsTemp,
                        datasets: [
                            {
                                label: selectedStock,
                                data: dataTemp,
                                backgroundColor: '#59ddaa',
                            },
                        ],
                    });
                }
            });
            setStocksList(stocksListTemp);
            set30DayDifference(parseInt(Number(dataTemp[dataTemp.length-1]-dataTemp[0])));
        }).catch((error:any) => {
            console.log("error", error);
        });
    }

    const handleChange = (
        event: React.SyntheticEvent | null,
        newValue: string
      ) => {
        setSelectedStock(newValue);
        fetchData(newValue);
      };

    useEffect(() => {
        fetchData(selectedStock);
    }, [selectedStock]);

    return (
        <div>
            <Select defaultValue="hello" placeholder="Choose one…" onChange={handleChange}>
            {stocksList.map((stock:any) => {
                return <Option key={stock} value={stock}>{stock}</Option>
            })}
            </Select>
            <Line data={tableData} options={options} />
        </div>
    );
}

export default LineComponent;
