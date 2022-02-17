import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NativeModules
} from 'react-native';

const App = () => {

  const openAlert = () => {
    const {MeetupModule} = NativeModules //MEETUPINFO: import module from NativeModules
    MeetupModule.ShowAlert("Show alert from native code (:", 4000) //MEETUPINFO: call bridge function
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={openAlert} style={styles.button}>
          <Text style={styles.text}>Show Native Alert</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1572A1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  text: {
    color: '#FFFFFF'
  }
});

export default App;
