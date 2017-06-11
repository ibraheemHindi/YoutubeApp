
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, WebView, Linking } from 'react-native';

import Card from "./Card"
import CardItem from "./CardItem"
import Communications from 'react-native-communications';


const VideoDetail = (props) => {

    videoTitle = props.videoObj.title;
    videoURL = props.videoObj.videoURL;
    imgURL = props.videoObj.imgURL;

    return(
        <Card>

            <CardItem>
                <Text style={styles.title}> {videoTitle} </Text>
            </CardItem>

            <CardItem>
                <Image
                  style={styles.image}
                  source={{uri: imgURL}}
                />
            </CardItem>

            <CardItem>
                <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => Communications.web(videoURL)}>

                   <View style={styles.button}>
                     <Text style={styles.buttonText}>Play</Text>
                   </View>

                </TouchableOpacity>
            </CardItem>

            <CardItem>
                <TouchableOpacity activeOpacity={0.5}>
                   <View style={styles.button}>
                     <Text style={styles.buttonText}>Add to favorits</Text>
                   </View>
                </TouchableOpacity>
            </CardItem>

        </Card>
    );

}

export default VideoDetail;

const styles = StyleSheet.create({

	image: {
		height: 120,
    width: 270
	},

  title: {
    color:"#FFF",
    fontSize: 15,
    fontWeight: "bold"
  },

  button: {
    backgroundColor: "#808080",
    width: 250,
    paddingVertical: 15,
    marginVertical: 15,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  buttonText: {
    color:"#FFF",
    fontSize: 16
  }

});
