
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Card = (props) => {

    return(
        <View style={styles.container}>
            {props.children}
        </View>
    );

}

export default Card;

const styles = StyleSheet.create({

  	container: {
  		borderWidth: 1,
      borderRadius: 2,
      borderColor: "#ddd",
      borderBottomWidth: 0,

      shadowColor: "#000",
      shadowOffset: {width: 0 , height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 5,

      elevation: 1,
      marginRight: 5,
      marginLeft: 5,
      marginTop: 30
  	}

});
