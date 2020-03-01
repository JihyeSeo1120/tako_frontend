import React from 'react';
import { Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function ModifyButton({screenName}) {
    const navigation = useNavigation();
    const _title = {
        'ModifyStoreScreen' : '수정',
        'ModifyMenuScreen' : '메뉴편집',
        'ModifyMenuFormScreen' : '수정'
    }

    return (
        <Button bordered full onPress={() => navigation.navigate(screenName)}>
            <Text>{_title[screenName]}</Text>
        </Button>
    )
}