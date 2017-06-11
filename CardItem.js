
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CardItem = (props) => {

    return(
        <View style={styles.container}>
            {props.children}
        </View>
    );

}

export default CardItem;

const styles = StyleSheet.create({

  	container: {
      borderColor: "#ddd",
      borderBottomWidth: 1,

      padding: 5,
      backgroundColor: "#383838",
      justifyContent: "flex-start",
      flexDirection: "row",
      position: "relative"
  	}

});
