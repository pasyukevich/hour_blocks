import React from 'react';
import { View, Text, Button } from 'native-base';

export default function DashboardScreen({ navigation }) {
    return (
        <View style={{ backgroundColor: 'black' }}>
            <Text>Dashboard</Text>
            {/* Render your hour blocks here */}
            <Button onPress={() => navigation.navigate('TaskDetail')}>+ Add Task</Button>
        </View>
    );
}
