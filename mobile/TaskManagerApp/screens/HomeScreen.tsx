import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import TaskList from '../components/TaskList';
import { Task } from '../types';
import { loadTasks, saveTasks } from '../storage/StorageHelper';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadStoredTasks = async () => {
      const storedTasks = await loadTasks();
      setTasks(storedTasks);
    };

    loadStoredTasks();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (newTask: Task) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <View style={styles.container}>
      <TaskList tasks={tasks} />
      <Button title="Add Task" onPress={() => navigation.navigate('Task', { addTask })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
