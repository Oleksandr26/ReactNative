import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Home = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.userBlock}>
        <Image
          style={styles.userAvatar}
          source={require("../assets/icon.png")}
        />
        <View>
          <Text style={styles.userLogin}>Oleksndr</Text>
          <Text style={styles.userEmail}>oleksandr@gmail.com</Text>
        </View>
      </View>

      <FlatList
        style={{ marginTop: 34 }}
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postBlock}>
            <Image source={{ uri: item.photo }} style={styles.postImage} />
            <Text style={styles.postTitle}>{item.title}</Text>
            <View style={styles.postPlaceContainer}>
              <TouchableOpacity
                style={styles.postPlaceBlock}
                onPress={() =>
                  navigation.navigate("Комментарии", {
                    postId: item.id,
                  })
                }
              >
                <Feather
                  name="message-circle"
                  size={24}
                  color="#BDBDBD"
                  style={styles.icon}
                />
                <Text style={styles.commentsCounter}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.postPlaceBlock}
                onPress={() =>
                  navigation.navigate("Карта", {
                    location: item.location,
                    title: item.title,
                  })
                }
              >
                <Feather
                  name="map-pin"
                  size={24}
                  color="#BDBDBD"
                  style={styles.icon}
                />
                <Text style={styles.postPlace}>{item.place}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  userBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    height: 60,
    width: 60,
    marginRight: 8,
    borderRadius: 8,
  },
  userLogin: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: "#212121CC",
  },
  postBlock: {
    marginBottom: 34,
    width: "100%",
  },
  postImage: {
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  postTitle: {
    fontSize: 16,
    color: "#212121",
    marginBottom: 11,
  },
  postPlaceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 9,
  },
  postPlaceBlock: {
    flexDirection: "row",
  },
  commentsCounter: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  postPlace: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    borderBottomWidth: 1,
    borderColor: "#212121",
  },
});

export default Home;
