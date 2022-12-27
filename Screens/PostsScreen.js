import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BackArrow from "../Navigation/BackArrow";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";
import Home from "./Home";

const PostsStack = createStackNavigator();

const PostsScreen = () => {
  return (
    <PostsStack.Navigator initialRouteName="Home" backBehavior="history">
      <PostsStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <PostsStack.Screen
        name="Комментарии"
        component={CommentsScreen}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrow navigation={navigation} />,
        })}
      />
      <PostsStack.Screen
        name="Карта"
        component={MapScreen}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrow navigation={navigation} />,
        })}
      />
    </PostsStack.Navigator>
  );
};

export default PostsScreen;
