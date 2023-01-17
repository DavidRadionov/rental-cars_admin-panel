import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Loading from "../ui/Loading";
import ModuleStatistics from "./ModuleStatistics";
import ModuleAdvertisements from "./ModuleAdvertisements";
import ModuleUsers from "./ModuleUsers";
import ModuleComments from "./ModuleComments";
import ModuleSupportMessages from "./ModuleSupportMessages";

function AdminPanel() {
    const [statePage, setStatePage] = useState("");
    // const [user, setUser] = useState<User>(props.employee);
    const toStatePage = (choice: string) => {
        setStatePage(choice);
    }
    const isPage = () => {
        switch (statePage) {
            case "comments": return <ModuleComments/>;
            case "support_messages": return <ModuleSupportMessages/>;
            case "users": return <ModuleUsers/>;
            case "statistics": return <ModuleStatistics/>;
            case "advertisement": return <ModuleAdvertisements/>;
            default: return <ModuleStatistics/>;
        }
    }

    // if (user) {
    return (
        <div>
            <Navbar style={{height: 80}} bg={"dark"} variant={"dark"}>
                <Container>
                    <Nav className="me-lg-auto" style={{fontSize: 20}}>
                        <Nav.Link href={"#users"} onClick={() => toStatePage("users")}>Пользователи</Nav.Link>
                        <Nav.Link style={{marginLeft: 15}} href={"#advertisement"} onClick={() => toStatePage("advertisement")}>Объявления</Nav.Link>
                        <Nav.Link style={{marginLeft: 15}} href={"#comments"} onClick={() => toStatePage("comments")}>Отзывы</Nav.Link>
                    </Nav>
                    <Nav style={{fontSize: 20}}>
                        <Nav.Link href={"#support_messages"} onClick={() => toStatePage("support_messages")}>Сообщения в тех.поддержку</Nav.Link>
                        <Nav.Link style={{marginLeft: 15}} href={"#statistics"} onClick={() => toStatePage("statistics")}>Статистика</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {
                isPage()
            }
        </div>

    );
    // } else {
    //     return <Loading/>;
    // }
}

export default AdminPanel;