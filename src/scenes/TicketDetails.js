import React, { Component } from 'react';
import { View, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Item, Input, Textarea, Icon } from 'native-base';


class TicketDetails extends Component {

    state = {
        username: ''
    };

    componentDidMount = () => {
        AsyncStorage.getItem('username').then((value) => {
            this.setState({
                'username': value
            });
            console.log('username ', this.state.username);
        });
    };


    render () {
        return (
            <Container style={styles.Container}>
                <Content>

                    <Item>
                        <Icon active name='home'  style={{ color: "#FFFFFF" }} />
                        <Input placeholder='Aggiungi sottoattività'/>
                    </Item>

                    <Item>
                        <Icon active name='lightbulb-o'  style={{ color: "#FFFFFF" }} />
                        <Input placeholder='Aggiungi a La mia giornata'/>
                    </Item>

                    <Item>
                        <Icon active name='stopwatch'  style={{ color: "#FFFFFF" }} />
                        <Input placeholder='Promemoria'/>
                    </Item>

                    <Item>
                        <Icon active name='home'  style={{ color: "#FFFFFF" }} />
                        <Input placeholder='Ripeti'/>
                    </Item>

                    <Item>
                        <Icon active name='ios-attach'  style={{ color: "#FFFFFF" }} />
                        <Input placeholder='Aggiungi un file'/>
                    </Item>

                    <Textarea rowSpan={5} bordered placeholder="Aggiungi una nota" />

                </Content>
            </Container>
        )
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

export default TicketDetails;