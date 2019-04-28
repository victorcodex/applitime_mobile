import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, View, Content, List, ListItem, Button, Text, Icon, Left, Body, Right, Fab } from 'native-base';

class Ticket extends Component {

    state = {
        username: '',
        active: 'true'
    };

    componentDidMount = () => {
        AsyncStorage.getItem('username').then((value) => {
            this.setState({
                'username': value
            });
            console.log('username ', this.state.username);
        });
    };

    goToAbout = () => {
        Actions.ticket_details();
    };

    render() {
        return (
            <Container style={styles.Container}>
                <Content>
                    <ListItem icon onPress = {this.goToAbout}>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="star" />
                            </Button>
                        </Left>
                        <Body>
                        <Text style={styles.ListItemText}>Portare cosi pesto per Valeria</Text>
                        </Body>
                        <Right>
                            <Icon active name="star" />
                        </Right>
                    </ListItem>
                    <ListItem icon onPress = {this.goToAbout}>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="eye" />
                            </Button>
                        </Left>
                        <Body>
                        <Text style={styles.ListItemText}>Pulire cassa dell'acqua</Text>
                        </Body>
                        <Right>
                            <Icon active name="star" />
                        </Right>
                    </ListItem>
                    <ListItem icon onPress = {this.goToAbout}>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="star" />
                            </Button>
                        </Left>
                        <Body>
                        <Text style={styles.ListItemText}>Coca lattina / bottigilia</Text>
                        </Body>
                        <Right>
                            <Icon active name="star" />
                        </Right>
                    </ListItem>
                    <ListItem icon onPress = {this.goToAbout}>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="eye" />
                            </Button>
                        </Left>
                        <Body>
                        <Text style={styles.ListItemText}>Buste posa</Text>
                        </Body>
                        <Right>
                            <Icon active name="star" />
                        </Right>
                    </ListItem>
                    <ListItem icon onPress = {this.goToAbout}>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="star" />
                            </Button>
                        </Left>
                        <Body>
                        <Text style={styles.ListItemText}>Caffè</Text>
                        </Body>
                        <Right>
                            <Icon active name="star" />
                        </Right>
                    </ListItem>
                    <ListItem icon onPress = {this.goToAbout}>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="eye" />
                            </Button>
                        </Left>
                        <Body>
                        <Text style={styles.ListItemText}>Palettine</Text>
                        </Body>
                        <Right>
                            <Icon active name="star" />
                        </Right>
                    </ListItem>
                    <ListItem icon onPress = {this.goToAbout}>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="star" />
                            </Button>
                        </Left>
                        <Body>
                        <Text style={styles.ListItemText}>Oreo</Text>
                        </Body>
                        <Right>
                            <Icon active name="star" />
                        </Right>
                    </ListItem>
                    <ListItem icon onPress = {this.goToAbout}>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="eye" />
                            </Button>
                        </Left>
                        <Body>
                        <Text style={styles.ListItemText}>Snack salati</Text>
                        </Body>
                        <Right>
                            <Icon active name="star" />
                        </Right>
                    </ListItem>
                </Content>
                <Fab
                    active={this.state.active}
                    direction="up"
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="plus" />
                </Fab>
            </Container>
        );
    }

}

const styles = {
    Container : {
        backgroundColor: '#211f1f'
    },
    ListItemText : {
        color: '#ffffff'
    }
};

export default Ticket;