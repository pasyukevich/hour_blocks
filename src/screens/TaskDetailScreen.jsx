import React from 'react';
import { View, Text, Button, Input, Select, VStack } from 'native-base';

export default function TaskDetailScreen() {
    return (
        <VStack>
            <Text>Task Details</Text>
            <Input placeholder="Title" />
            <Select
                selectedValue="1hr"
                minWidth={200}
                accessibilityLabel="Select duration"
                placeholder="Select duration"
                onValueChange={(value) => console.log(value)}
            >
                <Select.Item label="1hr" value="1hr" />
                <Select.Item label="30min" value="30min" />
                <Select.Item label="15min" value="15min" />
            </Select>
            <Input placeholder="Task Description" />
            <Button>Save</Button>
        </VStack>
    );
}
