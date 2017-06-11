
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ListView, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import VideoDetail from './VideoDetail';
import Communications from 'react-native-communications';

const background = require("./background.jpg")

export default class SearchPage extends Component {

  constructor(props) {
      super(props);
      this.state = {
        query: '',
        videos: []
      }
  }

  renderVideos(){
      return this.state.videos.map(video =>
        <VideoDetail key={video.videoID} videoObj={video}/>
      )
  }

  search = () => {

    query = this.state.query;
    this.setState({query: ''})

    firstPart = "https://www.googleapis.com/youtube/v3/search?q="
    secondPart = "&maxResults=25&type=video&part=snippet&key=AIzaSyB7DOTKN_O-lyxXj4umpvjpIECS4Vmjyws"

    url = firstPart + query + secondPart

    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {

          var videosList = [];
          for (i = 0; i < responseJson.items.length; i++) {
              title = responseJson.items[i].snippet.title;
              videoID = responseJson.items[i].id.videoId;
              imgURL = "https://img.youtube.com/vi/" + videoID + "/0.jpg";

              videosList.push({
                "title" : title,
                "videoID" : videoID,
                "imgURL" : imgURL,
                "videoURL" : "https://www.youtube.com/watch?v=" + videoID
              });
          }

          this.setState({
            videos: videosList
          })

          //console.log(this.state.videos);

      })
      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    return (
      <Image
            style={[styles.background, styles.container]}
            source={background}
            resizeMode={"cover"}>

            <View style={styles.wrapper}>

               <View style={styles.inputWrap}>

                  <TextInput
                    placeholder="Search for videos"
                    style={styles.input}
                    value={this.state.query}
                    onChangeText={currentQuery => this.setState({query: currentQuery})}
                    underlineColorAndroid={"transparent"}
                  />

               </View>

               <TouchableOpacity activeOpacity={0.5} onPress={this.search}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Search</Text>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity activeOpacity={0.5} onPress={ () => Actions.popTo('LoginPage') }>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                  </View>
               </TouchableOpacity>

               <ScrollView>
                   {this.renderVideos()}
               </ScrollView>

            </View>

      </Image>
    )
  }

}

const styles = StyleSheet.create({

	container: {
		flex: 1
	},

	background: {
		width: null ,
		height: null
	},

  inputWrap: {
    flexDirection: "row",
    marginVertical: 2,
    height: 40,
    backgroundColor: "transparent"
  },

  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#FFF"
  },

  wrapper: {
    paddingHorizontal: 15,
    marginVertical: 80
  },

  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#808080"
  },

  icon: {
    height: 20,
    width: 20
  },

  button: {
    backgroundColor: "#808080",
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center"
  },

  buttonText: {
    color:"#FFF",
    fontSize: 18
  }

});
