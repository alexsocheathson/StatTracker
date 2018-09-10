import React, { Component } from 'react'
import { View, Text, StyleSheet }  from 'react-native'

async function getStatsFromApiAsync() {
    try {
        let response = await fetch(url, {
            headers: {
                'TRN-Api-Key': 'af63ebdd-8afa-42ba-b1d6-2053de4e607b',
            }
        })
        let responseJson = await response.json();
        return responseJson.stats;
    } catch (error) {
        console.error(error);
    }
}

class Detail extends Component {
    static navigationOptions = {
        title: 'Squad Details',
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

        const { navigation } = this.props;
        const username = navigation.getParam('user', 'No user name supplied')
        const platform = navigation.getParam('platform', 'No console selected')

        this.state = {
            username: username,
            platform: platform,
            userStats: null,
        }

        this.requestUrl = () => {
            url = 'https://api.fortnitetracker.com/v1/profile/' + this.state.platform + '/' + this.state.username
            return url;
            
        } 
    }

    componentDidMount() {
        this.getStats()
    }

    getStats = async () => {
        const userStats = await getStatsFromApiAsync()
        this.setState(() => ({userStats: userStats}))
    }

    render() {
        this.requestUrl()
        console.log(this.state.userStats)
        
        return(
            <View style={styles.container} >
                <Text style={styles.text}>Welcome {this.state.username}!</Text>
                {/* <Text>{this.state.platform}</Text> */}
                {/* <Text>{this.requestUrl()}</Text> */}
                {this.state.userStats &&
                    <View>
                        <Text style={styles.detailText}>You have played {this.state.userStats.p2.matches.valueInt} solo matches in your lifetime with and average kd ratio of {this.state.userStats.p2.kd.valueDec}. </Text>
                        <Text style={styles.detailText}>You have played {this.state.userStats.p9.matches.valueInt} duo matches in your lifetime with and average kd ratio of {this.state.userStats.p9.kd.valueDec}. </Text>
                        <Text style={styles.detailText}>You have played {this.state.userStats.p10.matches.valueInt} squad matches in your lifetime with and average kd ratio of {this.state.userStats.p10.kd.valueDec}. </Text>
                    </View>
                }
            </View>
        )
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
    detailText: {
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
    }
  });
  

export default Detail