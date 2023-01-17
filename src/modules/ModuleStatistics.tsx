import { useEffect, useRef, useState } from "react";
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { getStatistics } from "../api/requestsAPI";
import Loading from "../ui/Loading";
import { Statistic } from "../api/description"; // ADD THIS

function ModuleStatistics() {
    const ref = useRef();
    const [statistic, setStatistic] = useState<Statistic>();

    const barChartData = {
        labels: [],
        datasets: [
            {
                label: "Количество",
                data: [1, 2, 5, 6],
                borderColor: "#3333ff",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                fill: true
            },
        ]

    };

    const pieChartData = {
        labels: [],
        datasets: [
            {
                label: "Количество",
                data: [],
                backgroundColor: [],
                fill: true
            },
        ]

    };

    if (statistic) {

        statistic.qtyCarsByMake.forEach(car => {
            barChartData.labels.push(car.string);
            barChartData.datasets[0].data.push(car.count);
        });

        statistic.qtyAdvertisementsByLocation.forEach(advertisement => {
            pieChartData.labels.push(advertisement.string);
            pieChartData.datasets[0].data.push(advertisement.count);
            pieChartData.datasets[0].backgroundColor.push('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase());
        })

    }


    useEffect(() => {
        const states = getStatistics();
        states.then(result => {
            setStatistic(result as Statistic);
        })
    }, []);

    if (!statistic) {
        return <Loading/>
    }
    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", marginTop: "10%", marginLeft: "10%"}}>
                <div style={{width: 650, height: 500, textAlign: "center"}}>
                    <text style={{fontSize: 20}}>Распределение автомобилей по маркам</text>
                    <Bar style={{marginTop: 20, marginBottom: 30}} ref={ref} data={barChartData}/>

                </div>
                <div style={{ marginLeft: 300, marginTop: - 10, width: 500, height: 350, textAlign: "center"}}>
                    <text style={{fontSize: 20, marginLeft: -140}}>Распределение объявлений по местоположению</text>
                    <Pie style={{marginTop: 10, marginBottom: 30}} ref={ref} data={pieChartData}/>
                </div>
            </div>
            <div style={{fontSize: 25, marginLeft: "10%"}}>
                <text>Зарегистрированных в сервисе пользователей: {statistic.totalUsers}</text>
                <text style={{marginLeft: 350}}>Количество объявлений: {statistic.totalAdvertisements}</text>
            </div>
        </div>


    );
}

export default ModuleStatistics;