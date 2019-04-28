import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
    Icon
} from "native-base";
const routes = ["Ticket", "Change Password", "Logout"];

class SideMenu extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <Image
                        source={require('../images/drawer-cover.png')}
                        style={styles.drawerCoverBackground}
                    />
                    <Image
                        square
                        style={styles.drawerCoverImage}
                        source={require('../images/logo.png')}
                    />
                    <List
                        dataArray={routes}
                        contentContainerStyle={{ marginTop: 120 }}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}
                                >
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }

}

const styles = {
    drawerCoverBackground: {
        height: 120,
        width: "100%",
        alignSelf: "stretch",
        position: "absolute"
    },
    drawerCoverImage: {
        height: 80,
        width: 70,
        position: "absolute",
        alignSelf: "center",
        top: 35
    }
};

export default SideMenu;