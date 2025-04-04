import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, ScrollView } from 'react-native';

export default function App() {
  const [timeOfDay, setTimeOfDay] = useState('');
  const [mealSuggestion, setMealSuggestion] = useState('');
  const [mealImage, setMealImage] = useState(null);

  const handleSuggest = () => {
    const input = timeOfDay.trim().toLowerCase();
    switch (input) {
      case 'morning':
        setMealSuggestion('Oats with Blue Berries');
        setMealImage(require('./assets/Oats with Berries.jpg'));
        break;
      case 'mid-morning':
        setMealSuggestion('Toasted bread with peanut butter and sliced banana');
        setMealImage(require('./assets/Toasted Bread Snack.png'));
        break;
      case 'afternoon':
        setMealSuggestion('Grilled chicken salad with avo and boiled eggs');
        setMealImage(require('./assets/Lunch Salad.jpg'));
        break;
      case 'mid-afternoon':
        setMealSuggestion('Fruit Platter of Choice');
        setMealImage(require('./assets/Fruit Snack.png'));
        break;
      case 'dinner':
        setMealSuggestion('Couscous served with fried pumpkin,broccoli and mince');
        setMealImage(require('./assets/Fried Dinner.png'));
        break;
      case 'after dinner':
        setMealSuggestion('Baked oat pie with cream');
        setMealImage(require('./assets/Oat Pie Dessert.png'));
        break;
      default:
        Alert.alert('Invalid input', 'Please enter a valid time of day (e.g., Morning, Afternoon, Dinner).');
        setMealSuggestion('');
        setMealImage(null);
    }
  };

  const handleReset = () => {
    setTimeOfDay('');
    setMealSuggestion('');
    setMealImage(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Meal Suggester</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter time of day (e.g. Morning)"
        value={timeOfDay}
        onChangeText={setTimeOfDay}
      />
      <View style={styles.buttonContainer}>
        <Button title="Suggest Meal" onPress={handleSuggest} />
        <Button title="Reset" onPress={handleReset} color="gray" />
      </View>
      {mealSuggestion ? <Text style={styles.suggestion}>{mealSuggestion}</Text> : null}
      {mealImage ? <Image source={mealImage} style={styles.image} /> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  suggestion: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
  },
});
