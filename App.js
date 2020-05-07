/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {CheckUserInfor} from 'module-native-sv';

function App() {
  // const smcb = e => {
  //   console.warn(e);
  // };
  // const config = {
  //   colorButtonLogin: '#111',
  //   colorButtonFacebook: '#111',
  //   Redireact: '#111',
  // };
  // const config = {
  //   mgTop:50,
  //   hrzt:15,
  //   bdColor:"#ccc",
  //   pdlInput:15,
  //   mgtInput:10,
  //   clSmButton:"#ffffff",
  //   bkgSmButton:"red",
  //   mgtSmButton:15,
  //   colorTT:"#222222",
  //   mgbTT:20,
  // }
  return (
    <>
      {/* <CheckUserInfor config={config} callback={e => smcb(e)} url="api" /> */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            paddingHorizontal: 15,
          }}>
          <View style={{flex:5,justifyContent:"center"}}>
            <View>
              <Text style={styles.lbOldPw}>Old Password</Text>
              <TextInput
                style={styles.ipPw}
                secureTextEntry={true}
                placeholder="Input old password here"
              />
            </View>
            <View>
              <Text style={styles.lbPw}>New Password</Text>
              <TextInput
                style={styles.newPw}
                secureTextEntry={true}
                placeholder="Must use english, number, special character 8~16 length"
              />
            </View>
            <View>
              <Text style={styles.lbCheckPw}>Check new Password</Text>
              <TextInput
                style={styles.checkPw}
                secureTextEntry={true}
                placeholder="Must use english, number, special character 8~16 length"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.submitChange}>
            <Text style={styles.submitChangeIp}>Change password</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  lbOldPw: {
    color: '#ccc',
  },
  ipPw: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#cccccc',
    height: 40,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 15,
  },
  lbPw: {
    color: '#ccc',
    marginTop: 20,
    marginBottom: 10,
  },
  newPw: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#cccccc',
    height: 40,
    borderRadius: 5,
    paddingLeft: 15,
  },
  lbCheckPw: {
    color: '#ccc',
    marginTop: 20,
    marginBottom: 10,
  },
  checkPw: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#cccccc',
    height: 40,
    borderRadius: 5,
    paddingLeft: 15,
  },
  submitChangeIp:{
    color:"#fff",
    fontSize:18
  },
  submitChange: {
    flex:5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginHorizontal: 15,
    marginBottom: 10,
    backgroundColor:"red",
    height:50,
    borderRadius:5,
  },
});

export default App;
