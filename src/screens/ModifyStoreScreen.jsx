import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import StoreForm from '../components/Form/StoreForm';
import BackButton from '../components/Common/BackButton';

export default function ModifyStoreScreen({route}) {
  const navigation = useNavigation();
  const isRegister = false;
  const {index} = route.params;

  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    )
  });

  return (
    <Container>
      <Content>
        <StoreForm screenName='ModifyStoreScreen' isRegister={isRegister} index={index}/>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});