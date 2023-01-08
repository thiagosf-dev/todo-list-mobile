import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";

type TaskProps = {
  name: string
  onCheck: (isChecked: boolean) => void
  onRemove: (name: string) => void
}

export const Task = ({
  name,
  onCheck,
  onRemove,
}: TaskProps) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <View style={styles.wrapper}>

      <TouchableOpacity
        onPress={() => {
          setIsChecked(!isChecked)
          onCheck(!isChecked)
        }}
        style={
          isChecked ?
            styles.checkButtonNo :
            styles.checkButtonYes
        }
      >
        {
          isChecked ?
            (
              <Icon
                color="#1f104f"
                size={16}
                name="checkbox-blank-circle-outline"
              />
            )
            :
            (
              <Icon
                name="text-box-check-outline"
                color="#fefefe"
                size={16}
              />
            )
        }
      </TouchableOpacity>

      <View style={styles.container}>
        <Text
          style={
            isChecked ?
              styles.nameUnchecked :
              styles.nameChecked
          }
        >
          {name}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => onRemove(name)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          X
        </Text>
      </TouchableOpacity>

    </View >
  )
}
