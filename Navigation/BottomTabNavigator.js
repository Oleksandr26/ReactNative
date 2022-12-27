import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Logout from "./Logout";
import BackArrow from "./BackArrow";
import PostsScreen from "../Screens/PostsScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";

import { Feather, AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

const UserBottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <UserBottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#212121CC",
        tabBarShowLabel: false,
        headerTitleAlign: "center",
      }}
    >
      <UserBottomTab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
          headerRight: () => <Logout />,
        }}
        name="Публикации"
        component={PostsScreen}
      />
      <UserBottomTab.Screen
        options={({ navigation }) => {
          return {
            tabBarIcon: ({ size, color }) => (
              <View
                style={{
                  height: 40,
                  width: 70,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FF6C00",
                }}
              >
                <AntDesign name="plus" size={size} color="#fff" />
              </View>
            ),

            headerLeft: () => <BackArrow navigation={navigation} />,
          };
        }}
        name="Создать публикацию"
        component={CreatePostsScreen}
      />
      <UserBottomTab.Screen
        options={({ navigation }) => {
          return {
            tabBarIcon: ({ size, color }) => (
              <Feather name="user" size={size} color={color} />
            ),
            headerLeft: () => <BackArrow navigation={navigation} />,
          };
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </UserBottomTab.Navigator>
  );
};

export default BottomTabNavigator;
