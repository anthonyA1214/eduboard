import { View } from "react-native";
import { Button } from "heroui-native/button";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Button onPress={() => alert("You pressed a button!")}>
        Get started!
      </Button>
    </View>
  );
}
