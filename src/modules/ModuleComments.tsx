import { useEffect, useState } from "react";
import { deleteCarComment, deleteUserComment, getReviewCars, getReviewUsers } from "../api/requestsAPI";
import { Comment } from "../api/description";
import Loading from "../ui/Loading";
import DataTable from 'react-data-table-component';
import { Button } from "react-bootstrap";

function ModuleComments() {

    const [carComments, setCarComments] = useState<Comment[]>();
    const [userComments, setUserComments] = useState<Comment[]>();

    const columnCar = [
        {
            name: 'Отправитель',
            grow: 2,
            selector: row => row.nameSender
        },
        {
            name: 'Машина',
            selector: row => row.make
        },
        {
            name: 'Модель',
            selector: row => row.model
        },
        {
            name: 'События',
            button: true,
            cell: (row) => <Button style={{backgroundColor: "#8d2626"}} onClick={ () => removeCarComment(row.id)}>remove</Button>
        },
    ]



    const columnsUser = [
        {
            name: 'Отправитель',
            selector: row => row.nameSender,
        },
        {
            name: 'На кого',
            selector: row => row.nameRecipient,
        },
        {
            name: 'События',
            button: true,
            cell: (row) => <Button style={{backgroundColor: "#8d2626"}} onClick={ () => removeUserComment(row.id)}>remove</Button>
        },
    ];

    const dataCar = [];

    const dataUser = [];

    if (userComments) {
        userComments.forEach((comment => {
            dataUser.push({
                id: comment.id,
                nameSender: comment.userByUserFrom.fio,
                nameRecipient: comment.userByUserTo.fio,
                emailSender: comment.userByUserFrom.email,
                emailRecipient: comment.userByUserTo.email,
                message: comment.comment,

            })
        }))
    }

    if (carComments) {
        carComments.forEach((comment => {
            dataCar.push({
                id: comment.id,
                nameSender: comment.userByUserFrom.fio,
                emailSender: comment.userByUserFrom.email,
                message: comment.comment,
                make: comment.carByCarTo.make,
                model: comment.carByCarTo.model,
                numberCar: comment.carByCarTo.licensePlate

            })
        }))
    }

    const removeCarComment = (id) => {
        deleteCarComment(id);
    }

    const removeUserComment = (id) => {
        deleteUserComment(id);
    }

    const updateComments = () => {
        const resultCarComments = getReviewCars();
        const resultUserComments = getReviewUsers();
        resultUserComments.then(res => {
            setUserComments(res as Comment[]);

        });
        resultCarComments.then(res => {
            setCarComments(res as Comment[]);
        });

    }
    const ExpandedComponentUser = ({data}) => {
        return (
            <div style={{width: 400, overflowWrap: "break-word", marginLeft: 50,  marginTop: 10}}>
                <p>Почта отправителя: {data.emailSender}</p>
                <p>Почта адресата: {data.emailRecipient}</p>
                <p>Сообщение: {data.message}</p>
            </div>
        )
    }

    const ExpandedComponentCar = ({data}) => {
        return (
            <div style={{width: 400, overflowWrap: "break-word", marginLeft: 50, marginTop: 5}}>
                <p>Почта отправителя: {data.emailSender}</p>
                <p>Номер машины: {data.numberCar}</p>
                <p>Модель машины: {data.model}</p>
                <p>Сообщение: {data.message}</p>
            </div>
        )

    }

    useEffect(() => {
        updateComments();
    }, []);

    if (!userComments || !carComments) {
        return <Loading/>;
    } else {
        return (
            <div style={{display: "flex", flexDirection: "row", marginTop: 100, marginLeft: 100, fontSize: 20}}>
                <div style={{width: 700}}>
                    <text style={{width: 700, textAlign: "center"}}>Таблица отзывов на юзеров</text>
                    <DataTable customStyles={customStyles} data={dataUser}
                               columns={columnsUser} expandableRows={true} expandableRowsComponent={ExpandedComponentUser}/>
                </div>
                <div style={{width: 700, marginLeft: 100}}>
                    <text style={{textAlign: "center"}}>Таблица отзывов на юзеров</text>
                    <DataTable customStyles={customStyles} data={dataCar}
                               columns={columnCar} expandableRows={true} expandableRowsComponent={ExpandedComponentCar}/>
                </div>
            </div>

        );
    }

}

const customStyles = {
    rows: {
        style: {
            backgroundColor:  "#212529",
            fontSize: 15,
            color: "#ffffff"
        },

    },
    headRow: {
        style: {
            fontSize: 18,
            backgroundColor:  "#2d353d",
            color: "#ffffff"
        },

    },
    expanderRow: {
        style: {
            backgroundColor:  "#31383d",
            fontSize: 15,
            color: "#ffffff"
        },
    },
    expanderButton: {
        style: {
            '&:focus': {
                outline: 'none',
                backgroundColor:  "#2f2929",
            },
            backgroundColor:  "#8d2626",
        },

    }
}

export default ModuleComments;