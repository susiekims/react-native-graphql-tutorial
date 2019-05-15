import React, { Component } from "react";

import { View, Text } from "react-native";

import navStyles from "./styles/navigationStyle";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Post extends Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  };

  render() {
    console.log(this.props);
    const { Post, loading } = this.props;
    if (loading) return null;
    return (
      <View>
        <Text>{Post.id}</Text>
        <Text>{Post.title}</Text>
      </View>
    );
  }
}

const postQuery = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
    }
  }
`;

export default graphql(postQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.id
    }
  })
})(Post);
