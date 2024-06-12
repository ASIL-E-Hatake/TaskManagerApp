import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Task } from '../types';

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <View style={styles.item}>
      <Text>{task.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TaskItem;
