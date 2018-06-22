// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//         <Text>This is an app that does not work.</Text>
//       </View>
//     );
//   }
// }
//

import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '', platform:'' };
  }

  render() {
    let pic = {
      url : 'https://upload.wikimedia.org/wikipedia/en/d/dd/Fortnite_cover_art%28PC%29.jpg'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text style={styles.text}>Welcome the the beginings of an open source stat tracker for fortnite players. Enter your username below to see your stats!</Text>
        <TextInput
          placeholder='Username'
          onChangeText={(user) => this.setState({user})}
          />
        {/*<Text style={styles.text}>{this.state.user}</Text>*/}
        <TextInput
          placeholder='Platform'
          onChangeText={(platform) => this.setState({platform})}
          />
        {/*}<Text style={styles.text}>{this.state.platform}</Text>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    // marginTop: '10%',
  }
});
