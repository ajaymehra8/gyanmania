import React from 'react';
import {Linking, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View, Image,ScrollView} from 'react-native';
const socialMedias = [
  {
    name: 'Youtube',
    image: 'https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg',
    link: 'https://www.youtube.com/@Gyanmaniaclasses',
  },
  {
    name: 'Whatsapp',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png',
    link: `whatsapp://send?phone=916395449210&text=${encodeURIComponent('hello')}`,
  },
];
const Connect = () => {
  return (
    <View style={styles.contentBox}>
      <Text style={styles.headText}>Connect With Us</Text>
      <ScrollView horizontal>
      {socialMedias.map(social => (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            Linking.openURL(social.link);
          }}>
          <View style={styles.socialCard}>
            <Image source={{uri: social.image}} style={styles.socialImage}/>
            <Text style={styles.socialText}>{social.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  contentBox: {
    minHeight: 130,
    paddingVertical: 10,
    paddingHorizontal: 15,
    paddingBottom: 20,
    backgroundColor: '#fff',
    marginBottom:30,
  },
  headText: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 20,
  },
  socialCard:{
    gap:2,
    marginRight:30,
    justifyContent:'center',
    alignItems:'center',
  },
socialImage:{
    width:60,
    height:60,
    borderRadius:5,
},
socialText:{
    fontSize:13,
},
});
export default Connect;
