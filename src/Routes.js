import React from 'react'
import { Router, Scene, Stack, Drawer } from 'react-native-router-flux';
import Login from './scenes/Login.js'
import Ticket from './scenes/Ticket.js'
import TicketDetails from './scenes/TicketDetails.js'
import SideMenu from './scenes/SideMenu.js';

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene
                key="login"
                component={Login}
            />
            <Scene
                key="ticket"
                component={Ticket}
                title="Antonio Profile"
                initial = {true}
            />
            <Scene
                key="ticket_details"
                component={TicketDetails}
                title="TicketDetails"
            />

            <Drawer
                hideNavBar
                key="drawerMenu"
                contentComponent={SideMenu}
                drawerWidth={250}
            >
                <Scene
                    key="ticket"
                    component={Ticket}
                    title="Antonio"
                />
                <Scene
                    key="ticket_details"
                    component={TicketDetails}
                    title="TicketDetails"
                />

            </Drawer>
        </Scene>

    </Router>

);
export default Routes