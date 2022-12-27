// import { GoBackIcon } from "../svgComponents";
import { Text, TouchableOpacity } from "react-native";

const BackArrow = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{
        marginLeft: 20,
      }}
      onPress={() => navigation.goBack()}
    >
      <Text>Back</Text>
      {/* <GoBackIcon /> */}
    </TouchableOpacity>
  );
};

export default BackArrow;
