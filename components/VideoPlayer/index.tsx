import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';

interface props {
  _id: string;
}
const TABS = [
  {
    id: 'Lectures',
    label: 'Lectures',
  },
  {
    id: 'More',
    label: 'More',
  },
];
const Index = ({_id}: props) => {
  const [activeTab, setActiveTab] = useState<'Lectures' | 'More'>('Lectures');
  const handleTabPress = (tabId: String) => {
    console.log(tabId);
    setActiveTab(activeTab);
  };
  const course = {
    image:
      'https://i.ytimg.com/vi/wvxQT2RFICg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAWYt8tSOyBGhfOQkITJejM-sM8Ww',
    title:
      'Some application kjlsadj lksdfjal lkjdfsa lkjsdfal of trigonometry class.',
    price: 100,
    discount: 20,
    description: 'This is a test description to check everything is working or not , modify it later',
  };
  console.log(_id);
  return (
    <View style={styles.main}>
      {/* Video player */}
      <View>
        <Video
          source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
          style={{width: '100%', height: 250}}
          controls={true} // shows default native controls
          resizeMode="contain"
          rate={1.0} // playback speed
          volume={1.0}
          muted={false}
          repeat={false}
        />
        <Text style={styles.title}>{course.title}</Text>
        <View style={styles.profile}>
          <Image
            style={styles.profileImg}
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
          />
          <Text style={styles.profileName}>Ajay</Text>
        </View>
      </View>

      {/* Tabs */}
      <View>
        <View style={styles.tabHead}>
          {TABS.map(tab => (
            <TouchableOpacity onPress={() => handleTabPress(tab.id)}>
              {tab.label}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View>
        {activeTab === 'Lectures' && <Text>Lectures</Text>}
        {activeTab === 'More' && <Text>More</Text>}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    gap: 5,
  },
  title: {
    marginLeft: 5,
    marginRight: 3,
    fontSize: 20,
    fontWeight: 500,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    width: '30%',
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginTop: 10,
    gap: 10,
    alignItems: 'center',
  },
  profileImg: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 500,
  },
  tabHead: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
});
export default Index;
