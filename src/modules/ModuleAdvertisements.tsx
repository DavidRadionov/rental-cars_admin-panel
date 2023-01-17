import { useEffect, useState } from "react";
import { Advertisements, UserInfo } from "../api/description";
import Loading from "../ui/Loading";
import { getAdvertisement, GLOBAL_URL, verificationAdvertisement } from "../api/requestsAPI";
import { Alert, Button } from "react-bootstrap";
const routeSRC = "/attachment/get/file/"; // путь к картиночке
// const routeSRC = "/images/";

function ModuleAdvertisements () {
    const [advertisements, setAdvertisements] = useState<Advertisements[]>();
    const [first, setFirst] = useState<String>("");
    const [second, setSecond] = useState<String>("");
    const [id, setID] = useState(0);

    const actionVerification = async () => {
        if (id === 0) {
            alert("Вы не выбрали заявку для верификации");
        } else {
            const message = verificationAdvertisement(id);
            message.then(res => {
                alert(res.message);
            })

        }
    }

    const userClick = (first, second, id) => {
        setSecond(first);
        setFirst(second);
        setID(id);
    }

    useEffect(() => {
        const result = getAdvertisement();
        result.then((res) => {
            setAdvertisements(res as Advertisements[]);
            setFirst((res as Advertisements[])[0].photoPaths[0]);
            setSecond((res as Advertisements[])[0].photoPaths[1]);
            setID((res as Advertisements[])[0].advertisement.id);
        })
    }, []);
    if (!advertisements) {
        return <Loading/>
    } else {
        return (
            <div style={{display: "flex", flexDirection: "row"}}>
                <div>
                    <Alert variant={"dark"} style={{marginLeft: 200, width: 600, marginTop: 50, overflowY: "scroll", maxHeight: 800}}>
                        {advertisements.map(advertisement => {
                            return (
                                <Alert onClick={() => userClick(advertisement.photoPaths[0], advertisement.photoPaths[1], advertisement.advertisement.id)} style={{cursor: "pointer" ,backgroundColor: "#212529", color: "white", display: "flex", flexDirection: "column"}}>
                                    <text>Марка машины: {advertisement.car.make}</text>
                                    <text>Модель машины: {advertisement.car.model}</text>
                                    <text>Номер машины: {advertisement.car.licensePlate}</text>
                                    <text>Прайс за день: {advertisement.advertisement.pricePerDay}</text>
                                    <text>Прайс за месяц: {advertisement.advertisement.pricePerWeek}</text>
                                    <text>Прайс за неделю: {advertisement.advertisement.pricePerMonth}</text>
                                    <text>Номер пасопрта: {advertisement.advertisement.pricePerDay}</text>
                                    <text>Город: {advertisement.advertisement.location}</text>
                                    <text>Долгота: {advertisement.advertisement.longitude}</text>
                                    <text>Широта: {advertisement.advertisement.latitude}</text>
                                </Alert>
                            );
                        })}
                    </Alert>
                </div>
                <Alert style={{marginLeft: 300, width: 400, marginTop: 50, backgroundColor: "#212529", color: "white", textAlign: "center"}}>
                    <div style={{marginLeft: 30, marginRight: 30}}>
                        <div style={{display: "flex", flexDirection: "column", textAlign: "center", margin: "0 auto"}}>
                            <text>Фотографии машины</text>
                            <img style={{width: 300, height: 200}} src={GLOBAL_URL + routeSRC +  second}></img>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", textAlign: "center", marginTop: 20}}>
                            <img style={{width: 300, height: 200}} src={GLOBAL_URL + routeSRC + first}></img>
                        </div>

                        <Button onClick={actionVerification} style={{marginTop: 20, textAlign: "center"}} variant={"light"}>Верефицировать</Button>
                    </div>

                </Alert>
            </div>
        );
    }




}

export default ModuleAdvertisements;