import React from 'react';
import { ScrollView, VStack, HStack, Text, Box, Pressable, Icon, useTheme, Button } from 'native-base';
import { AntDesign } from '@expo/vector-icons'; // Ensure this is installed using expo



export default function HourBlocksScreen({ navigation }) {
  const theme = useTheme();

  // This will represent your data structure for the schedule
  // Replace with your actual data source
  const schedule = [
    { time: '7AM', task: 'Wake Up', iconName: 'upcircle' },
    { time: '8AM', task: 'Have a Coffee', iconName: 'coffee' },
    { time: '9AM', task: 'Writing', iconName: 'edit' },
    // Add more schedule items as needed
  ];

  // Function to render each task item
  const renderTaskItem = (item, index) => (
    <HStack key={index} alignItems="center" justifyContent="space-between" style={hourBlockStyle}>
      <Text color={theme.colors.white} fontSize="md">{item.time}</Text>
      <Text color={theme.colors.white} flex={1} textAlign="left" mx={2}>{item.task}</Text>
      <Icon as={AntDesign} name={item.iconName} size="sm" color={theme.colors.white} />
    </HStack>
  );

  // Style for each hour block
  const hourBlockStyle = {
    backgroundColor: '#191919',
    padding: theme.space[4],
    marginBottom: theme.space[2],
    borderRadius: theme.radii.sm,
  };

  return (
    <ScrollView contentContainerStyle={{ padding: theme.space[6], backgroundColor: 'black' }}>
      <VStack space={4}>
        {schedule.map((item, index) => renderTaskItem(item, index))}
        {/* Render empty slots with a plus icon */}
        {Array.from({ length: 24 - schedule.length }).map((_, index) => (
          <Pressable
            key={index + schedule.length}
            onPress={() => {/* handle the press event to add new task */}}
            style={hourBlockStyle}
          >
            <HStack alignItems="center" justifyContent="space-between">
              <Text color={theme.colors.white} fontSize="md">{`${index + schedule.length + 1}:00`}</Text>
              <Icon as={AntDesign} name="pluscircleo" size="sm" color={theme.colors.white} />
            </HStack>
          </Pressable>
        ))}
      </VStack>
    </ScrollView>
  );
}
