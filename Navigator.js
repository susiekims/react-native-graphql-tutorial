import React from "react";
import { View } from "react-native";
import Post from "./Post";
import Posts from "./Posts";
import { createStackNavigator, createAppContainer } from "react-navigation";
import navStyles from "./styles/navigationStyle";

class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  };

  render() {
    return (
      <View>
        <Posts {...this.props} />
      </View>
    );
  }
}

export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home
    },
    Post: {
      screen: Post
    }
  })
);
