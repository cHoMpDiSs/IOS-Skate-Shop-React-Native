import Video from 'react-native-video';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import React, {useState} from 'react'





const SusVideo = () => {
    
    const [shouldShow, setShouldShow] = useState(true);

    return (

        <SafeAreaView>
        <View style={styles.container}>
            {shouldShow ? (
                <Video  
                source={{uri: 'https://susaf.s3.us-west-1.amazonaws.com/static/video/susaf.mp4'}}          // the video file
                paused={false}
                style={styles.backgroundVideo}  
                poster={'/Users/jordonmarchesano/Desktop/susMobile/components/susaf.jpg'}
                onEnd={() => setShouldShow(!shouldShow)}
                />
                
            ) : <View style={styles.imgView}> 
            <Image
            source={{uri: "https://susaf.s3.us-west-1.amazonaws.com/static/sus+af.png"}}
            style={styles.image}
            />
            </View>

            }
      
        </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: 400,
      width: 400
    },
    imgView: {
        marginTop:250,
        width:250,
        height:250
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }
  })

export default SusVideo;