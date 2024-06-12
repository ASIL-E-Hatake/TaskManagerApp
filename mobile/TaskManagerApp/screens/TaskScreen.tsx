import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Task } from '../types';

const TaskScreen: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      const newTask: Task = { id: Math.random().toString(), title: task.trim() };
      route.params.addTask(newTask);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New Task"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default TaskScreen;
