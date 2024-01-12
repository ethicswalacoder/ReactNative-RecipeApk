import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Appbar, Searchbar, Card, Paragraph} from 'react-native-paper';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState(" ");
  // console.log(meals);
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const getMeals = async function () {
    const response = await fetch(url);
    const data = await response.json();
    setMeals(data.categories);
  };

  useEffect(() => {
    getMeals();
  }, []);

  const onChangeSearch = quary => setSearch(quary);

  return (
    <View style={styles.container}>
      <Appbar style={styles.appbar}>
        <Appbar.Content title="Sahoo Recipe" />
      
      </Appbar>
      <Searchbar style={styles.search} placeholder='Search...' value={search} onChangeText={onChangeSearch}/>
      <ScrollView>
        {
          meals.map((meal)=> (
            <Card key={meal.idCategory}>
              
              <Card.Cover source ={meal.strCategoryThumb}/>
              <Card.Title title={meal.strCategory}/>
              <Card.Content>
              
                <Paragraph >{meal.strCategoryDescription}</Paragraph>
              </Card.Content>
            </Card>
          ))
        }
      </ScrollView>
    </View>
      );
      }

const styles = StyleSheet.create({
  container: {
     display: "flex",
     margin: "auto"

  },
  appbar: {
    backgroundColor: "#FFAA33",
    
  },
 search: {
  marginTop:20,
  marginLeft: 10,
  marginRight:10,
  marginBottom: 20
 }
});

export default App;
