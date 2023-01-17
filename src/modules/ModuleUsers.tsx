import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { getUsers, GLOBAL_URL, verification } from "../api/requestsAPI";
import { UserInfo } from "../api/description";
import Loading from "../ui/Loading";
const routeSRC = "/attachment/get/file/"; // путь к картиночке
// const routeSRC = "/images/";

function ModuleUsers() {
    const [listUser, setListUsers] = useState<UserInfo[]>();
    const [profilePhoto, setProfilePhoto] = useState("");
    const [passportPhoto, setPassportPhoto] = useState("");
    const [driverLicensePhoto, setDriverLicensePhoto] = useState("");
    const [id, setID] = useState(0);

    const updateUsers = () => {
        const result = getUsers();
        result.then(users => {
            setListUsers(users as UserInfo[])
            setProfilePhoto((users as UserInfo[])[0].profilePhoto);
            setPassportPhoto((users as UserInfo[])[0].passportPhoto);
            setDriverLicensePhoto((users as UserInfo[])[0].driverLicensePhoto);
            setID((users as UserInfo[])[0].user.id);
        })
    }

    const actionVerification = async () => {
        if (id === 0) {
            alert("Вы не выбрали юзера для верификации");
        } else {
            const message = verification(id);
            message.then(res => {
                alert(res.message);
            })

        }
    }

    const userClick = (profile, passport, driver, id) => {
        setPassportPhoto(passport);
        setProfilePhoto(profile);
        setDriverLicensePhoto(driver);
        setID(id);
    }

    useEffect(() => {
        updateUsers();
    }, [])
    if (!listUser) {
        return <Loading/>
    } else {
        return (
            <div style={{display: "flex", flexDirection: "row"}}>
                <div>
                    <Alert variant={"dark"} style={{marginLeft: 200, width: 600, marginTop: 50, overflowY: "scroll", maxHeight: 800}}>
                        {listUser.map(user => {
                            return (
                                <Alert onClick={() => userClick(user.profilePhoto, user.passportPhoto, user.driverLicensePhoto, user.user.id)} style={{cursor: "pointer" ,backgroundColor: "#212529", color: "white", display: "flex", flexDirection: "column"}}>
                                    <text>ФИО: {user.user.fio}</text>
                                    <text>Элетронная почта: {user.user.email}</text>
                                    <text>Номер телефона: {user.user.phone}</text>
                                    <text>Номер пасопрта: {user.user.passportNumber}</text>
                                    <text>Номер прав: {user.user.driverLicenseNumber}</text>
                                </Alert>
                            );
                        })}
                    </Alert>
                </div>
                <Alert style={{marginLeft: 300, width: 400, marginTop: 50, backgroundColor: "#212529", color: "white", textAlign: "center"}}>
                    <div style={{marginLeft: 30, marginRight: 30}}>
                        <div style={{display: "flex", flexDirection: "column", textAlign: "center", margin: "0 auto"}}>
                            <text>Фото паспорта</text>
                            <img style={{width: 300, height: 200}} src={GLOBAL_URL + routeSRC +  passportPhoto}></img>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", textAlign: "center", marginTop: 20}}>
                            <text>Фото лица</text>
                            <img style={{width: 300, height: 200}} src={GLOBAL_URL + routeSRC + profilePhoto}></img>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", textAlign: "center", marginTop: 20}}>
                            <text>Фото прав</text>
                            <img style={{width: 300, height: 200}} src={GLOBAL_URL + routeSRC + driverLicensePhoto}></img>
                        </div>
                        <Button onClick={actionVerification} style={{marginTop: 20, textAlign: "center"}} variant={"light"}>Верефицировать</Button>
                    </div>

                </Alert>
            </div>
        );
    }

}

export default ModuleUsers;