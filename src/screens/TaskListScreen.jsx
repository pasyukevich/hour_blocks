import React from 'react';
import { ScrollView, Text } from 'native-base';

export default function TaskListsScreen() {
    return (
        <ScrollView>
            {/* Render the tasks. This can be fetched from the Recoil state. */}
            <Text>Task 1</Text>
            <Text>Task 2</Text>
            {/* ... */}
        </ScrollView>
    );
}
