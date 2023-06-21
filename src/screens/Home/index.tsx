import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { TextInput } from 'react-native';
import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ['Euler', 'Gabriel', 'João', 'Maria', 'Bianca', 'Fernanda', 'Igor', 'Denis', 'Teresa', 'Paula', 'Alex'];

  const handleParticipantAdd = () => {
    if (participants.includes('Euler')) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome!');
    }

    console.log('Você clicou no botão adicionar');
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!'),
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ]);

    console.log(`Você clicou em remover o participante ${name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
          </Text>
        )}
      />
    </View>
  );
}