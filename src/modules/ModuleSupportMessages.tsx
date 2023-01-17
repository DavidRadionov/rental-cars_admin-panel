import { useEffect, useState } from "react";
import { getSupportList } from "../api/requestsAPI";
import { Comment } from "../api/description";
import DataTable from 'react-data-table-component';
import Loading from "../ui/Loading";

function ModuleSupportMessages () {
    const [messages, setMessages] = useState<Comment[]>();

    const dataUser = [];

    const columnsUser = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Отправитель',
            grow: 2,
            selector: row => row.nameSender,
        },
        {
            name: 'Почта',
            grow: 2,
            selector: row => row.emailSender,
        },
    ];
    if (messages) {
        console.log(messages);
        messages.forEach(message => {
            dataUser.push({
                id: message.id,
                nameSender: message?.userByUserId.fio,
                emailSender: message?.userByUserId.email,
                message: message?.message
            })
        })
    }

    const update = () => {
        const result = getSupportList();
        result.then(res => {
            setMessages(res as Comment[]);
        });
    };
    useEffect(() => {
        update();
    }, []);

    const ExpandedComponentUser = ({data}) => {
        return (
            <div style={{width: 600, overflowWrap: "break-word", marginLeft: 50,  marginTop: 10}}>
                {/*<p>Почта отправителя: {data.emailSender}</p>*/}
                {/*<p>Почта адресата: {data.emailRecipient}</p>*/}
                <p>Сообщение: {data.message}</p>
            </div>
        )
    }

    if (!messages) {
        return <Loading/>
    } else {
        return (
            <div style={{width: "70%", marginLeft: 300, marginTop: 200}}>
                <DataTable customStyles={customStyles} data={dataUser}
                           columns={columnsUser} expandableRows={true} expandableRowsComponent={ExpandedComponentUser}/>
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

export default ModuleSupportMessages;