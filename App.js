import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Images, Profiles } from './App/Themes';
import { Feather } from '@expo/vector-icons';


export default function App() {
  this.profile = Profiles.random()
  return (
    <View style={styles.container}>

      <View style={styles.navbarTop}>
        <TouchableOpacity>
          <View style={{ marginTop: 20, marginLeft: 10 }}>
            <Feather name="settings" size={30} color="#C5C5C5" />
          </View>
        </TouchableOpacity>

        <View style={{ marginTop: 20 }}>
          <Image source={Images.logo} style={{ width: 80, height: 33.2 }} />
        </View>

        <TouchableOpacity>
          <View style={{ marginRight: 10 }}>
            <Image source={Images.chat} style={{ width: 40, height: 40, tintColor: "#C5C5C5", alignSelf: 'flex-start' }}/>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.infoMiddle}>

        <Image source={this.profile.image} style={{ maxWidth: 275, height: 275 }} />
        <View style={styles.profileText}>
          <Text style={{ fontSize: 24, padding: 5 }}><Text style={{ fontWeight: 'bold' }}>{this.profile.name}</Text>, #{this.profile.id}</Text>
          <Text style={{ fontSize: 16, padding: 5, color: '#C5C5C5' }}>{this.profile.location}</Text>
        </View>

      </View>

      <View style={styles.iconsBottom}>

        <View style={styles.smaller}>
          <Image source={Images.rewind} style={{ width: 21.95, height: 25.6 }} />
        </View>
        <View style={styles.bigger}>
          <Image source={Images.nope} style={{ width: 30, height: 30 }} />
        </View>
        <View style={styles.smaller}>
          <Image source={Images.boost} style={{ width: 13.9636, height: 25.6 }} />
        </View>
        <View style={styles.bigger}>
          <Image source={Images.like} style={{ width: 30, height: 25 }} />
        </View>
        <View style={styles.smaller}>
          <Image source={Images.superLike} style={{ width: 25, height: 23.8 }} />
        </View>


      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff0f1'
  },

  navbarTop: {
    flex: 0.3,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C5C5C5',

    ...Platform.select({
      ios: {
        height: 56
      },
      android: {
        height: 44
      },
      default: {
        height: 56
      }
    })
  },

  topLine: {
    borderWidth: 0.5,
    borderColor: '#C5C5C5'
  },

  infoMiddle: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    marginTop: 30
  },

  iconsBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  smaller: {
    backgroundColor: 'white',
    borderRadius: 17.5,
    margin: 5,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },

  bigger: {
    backgroundColor: 'white',
    borderRadius: 25,
    margin: 5,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }

})