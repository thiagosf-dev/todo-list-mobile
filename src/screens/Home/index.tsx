import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Task } from "../../components/Task";
import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [task, setTask] = useState('')
  const [totalTasksCompleted, setTotalTasksCompleted] = useState(0)

  function handleTaskAdd() {
    const validTask = task.trim();

    if (!validTask) return

    if (tasks.includes(validTask)) {
      return Alert.alert(
        'Tarefa duplicada',
        'Já existe uma tarefa com a descrição informada!'
      )
    }

    setTasks(prevState => [...prevState, validTask])
    setTask('')
  }

  function handleTaskRemove(task: string) {
    Alert.alert(
      'Remover tarefa',
      `Tem certeza que deseja remover a Tarefa ${task} ?`,
      [
        {
          text: 'Sim',
          onPress: () => {
            removeConfirm(task)
            setTotalTasksCompleted(0)
            Alert.alert('', 'A tarefa foi removida com sucesso!')
          },
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ]
    )
  }

  function removeConfirm(name: string) {
    setTasks(prevState => prevState.filter(taskName => taskName !== name))
  }

  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Icon
          color="#cfb1ff"
          name="add-task"
          size={42}
        />
        <Text style={styles.title}>
          To Do List
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          keyboardType={'default'}
          onChangeText={setTask}
          placeholder={'Descrição da tarefa...'}
          placeholderTextColor={'#1f104f'}
          value={task}
          cursorColor={'#1f104f'}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleTaskAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      {
        tasks && tasks.length > 0 &&
        <Text style={styles.totalText}>
          {totalTasksCompleted}
          {' de '}
          {tasks.length}
          {' '}
          {`tarefa${totalTasksCompleted > 1 ? 's ' : ' '}`}
          {`concluída${totalTasksCompleted > 1 ? 's ' : ' '}`}
        </Text>
      }

      <FlatList
        keyExtractor={item => item}
        data={tasks}
        renderItem={({ item }) => (
          <Task
            key={item}
            name={item}
            onCheck={
              (value) => setTotalTasksCompleted(value ?
                totalTasksCompleted + 1 :
                totalTasksCompleted - 1)
            }
            onRemove={() => handleTaskRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não existe nenhuma tarefa registrada até o momento!
          </Text>
        )}
      />

    </View>
  )
}
