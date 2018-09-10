import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Picker } from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Stat Tracker',
        headerStyle: {
            backgroundColor: '#30CD9A',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
  constructor(props) {
    super(props);
    this.state = { 
        user: 'No Username Entered',
        platform:'psn',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Enter your username below and select your console to see your stats!</Text>
        <TextInput
          style={styles.username}
          placeholder='Username'
          onChangeText={(user) => this.setState({user})}
          />
        <Picker
          selectedValue={this.state.platform}
          style={{ height: 25, width: 200, marginBottom: 250}}
          onValueChange={(itemValue) => this.setState({platform: itemValue})}>
          <Picker.Item label="Playstation" value="psn" />
          <Picker.Item label="Xbox" value="xbl" />
          <Picker.Item label="PC" value="pc" />
        </Picker>
        <Button
          style={styles.search}
          onPress={this.submitUser}
          title='Search'
          color='#30CD9A' />
      </View>
    );
  }

  submitUser = () => {
    this.props.navigation.navigate('Details', {
        user: this.state.user,
        platform: this.state.platform,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 50,
    marginTop: 90,
    marginLeft: 30,
    marginRight: 30,
    color: '#30CD9A',
  },
  username: {
    textAlign: 'center',
    fontSize: 20,
  },
  search: {
    marginTop: 60,
    fontSize: 40,
  },
});

export default HomeScreen 