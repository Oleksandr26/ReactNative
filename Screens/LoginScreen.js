import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";

const LoginScreen = () => {
  const [isHidePass, setIsHidePass] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [focused, setFocused] = useState();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsShowKeyboard(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const showPass = () => {
    setIsHidePass((state) => !state);
  };

  const submitForm = () => {
    const userData = { email, password };
    console.log("userData: ", userData);
    setEmail("");
    setPassword("");
    setFocused(null);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={s.image}
          source={require("../assets/img/bg.jpg")}
        >
          <StatusBar style="auto" />
          <View
            style={{
              ...s.container,
              marginBottom: isShowKeyboard ? -260 : 0,
            }}
          >
            <Text style={s.title}>Войти</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                style={{
                  ...s.input,
                  borderColor: focused === "email" ? "#FF6C00" : "#E8E8E8",
                  backgroundColor: focused === "email" ? "#FFffff" : "#F6F6F6",
                }}
                value={email}
                onChangeText={setEmail}
                onFocus={() => setFocused("email")}
                placeholder="Адрес электронной почты"
                placeholderTextColor="#BDBDBD"
              />
              <View style={s.passBox}>
                <TextInput
                  style={{
                    ...s.input,
                    borderColor: focused === "password" ? "#FF6C00" : "#E8E8E8",
                    backgroundColor:
                      focused === "password" ? "#FFffff" : "#F6F6F6",
                  }}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setFocused("password")}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={isHidePass}
                />
                <Text style={s.showPass} onPress={showPass}>
                  {isHidePass ? "Показать" : "Скрыть"}
                </Text>
              </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
              style={s.btn}
              activeOpacity={0.7}
              onPress={submitForm}
            >
              <Text style={s.btnText}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.btn2} activeOpacity={0.7}>
              <Text style={s.btnText2}>Нет аккаунта? Зарегестрироваться</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const s = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },

  container: {
    backgroundColor: "#ffffff",
    justifyContent: "flex-end",
    paddingTop: 32,
    paddingBottom: 144,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  title: {
    fontFamily: "Roboto-Bold",
    marginBottom: 33,
    fontSize: 30,
    lineHeight: 36,
    textAlign: "center",
    letterSpacing: 0.14,

    color: "#212121",
  },

  input: {
    marginBottom: 16,
    marginHorizontal: 16,
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderRadius: 8,
  },

  passBox: {
    position: "relative",
  },

  showPass: {
    position: "absolute",
    right: 32,
    top: 22,
    textAlign: "right",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  btn: {
    marginTop: 43,
    marginHorizontal: 16,
    padding: 16,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
  },

  btnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#ffffff",
    textAlign: "center",
  },

  btn2: {
    marginHorizontal: 16,
    padding: 16,
    height: 50,
    backgroundColor: "transparent",
  },

  btnText2: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    textAlign: "center",
  },
});

export default LoginScreen;
