import React from 'react'
import { StyleSheet, Text, View,Button,TextInput,TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'

class Home extends React.Component {
  state = { name: '' }
render() {
return (
<View >
<Text style={styles.title}>Enter Your Name..</Text>
<TextInput placeholder='Shubham Babbar' style={styles.nameInput} onChangeText={(text)=>{this.setState({name:text})}} value={this.state.name}></TextInput>
<TouchableOpacity onPress={()=> {
  //navigate to second screen and pass it the name
  Actions.chat({name: this.state.name})
}}>
  <Text style={styles.buttontext}>Next</Text>
  </TouchableOpacity>
</View>
)
}
}

const styles = StyleSheet.create({
  title: {
    marginRight: 20,
    marginLeft: 20,
    fontSize:20
  },
  nameInput : {
    padding:5,
      height:40,
      borderWidth:2,
      borderColor:'black',
      margin:20,
      borderRadius: 5

  },
  buttontext: {
    marginLeft: 20,
    fontSize:20
  },
});

export default Home

