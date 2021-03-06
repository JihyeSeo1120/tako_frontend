import React, { useContext , useEffect}  from 'react';
import BottomButton from '../Button/BottomButton';
import {Card, CardItem, Body, Text, Badge } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function StoreItem({title, address, time, description, thumbnail, type, index, onDelete, isFavScreen }) {
    const navigation = useNavigation();
    const moveModifyStore = () => {
        navigation.navigate('ModifyStoreScreen',{
            index: index
        });
    }
    const moveModifyMenu = () => {
        navigation.navigate('ModifyMenuScreen');
    }

    useEffect(()=>{
        console.log(type)
    },[type]);
    return (
        <Card>
            <CardItem header bordered>
                <Text>{title}</Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>{index}</Text>
                </Body>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>{address}</Text>
                </Body>
            </CardItem>
            <CardItem bordered>
                <Text>{time}</Text>
            </CardItem>
            <CardItem bordered>
                <Text>{description}</Text>
            </CardItem>
            <CardItem bordered>
                <Text>{thumbnail}</Text>
            </CardItem>
            <CardItem bordered>
                {type.map((item)=><Badge primary><Text>{item}</Text></Badge>)}
            </CardItem>
            <BottomButton 
            screenName="Delete" 
            onPress={onDelete}
            />
            {!isFavScreen && <BottomButton screenName="ModifyStoreList" onPress={moveModifyStore}/>}
            {!isFavScreen && <BottomButton screenName="ModifyMenuList" onPress={moveModifyMenu}/>}
        </Card>
    );
}