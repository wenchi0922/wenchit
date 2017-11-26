import React, { Component } from 'react'
import { FlatList, Image, View, StyleSheet } from 'react-native'
import { Text, ListItem, Left, Body, Icon, Right, Title } from 'native-base'
import { SearchBar } from 'react-native-elements'

const styles = StyleSheet.create({
  img: {
    width: 350,
    height: 350,
    alignSelf: 'center'
  }
})

class Discover extends Component {

  constructor() {
      super();
      this.state = {
        data: [
          { name: "Looking for Brunch?", header: true },
          { name: "#BenedictEgg", image: require("../images/item/brunch.jpg"), username: "popyummy_mag", header: false },
          { name: "#Scone", image: require("../images/item/scone.jpg"), username: "lesleslin", header: false },
          { name: "#Croissant", image: require("../images/item/croissant.jpg"), username: "lesleslin", header: false },

          { name: "Looking for Proper Meal?", header: true },
          { name: "#TaiwaneseFood", image: require("../images/item/taiwanese.jpg"), username: "popyummy_mag", header: false },
          { name: "#Risotto", image: require("../images/item/risotto.jpg"), username: "popyummy_mag", header: false },
          { name: "#Crab #Porridge", image: require("../images/item/crab.jpg"), username: "popyummy_mag", header: false },
          { name: "#DimSum", image: require("../images/item/dimsum.jpg"), username: "4foodie", header: false },
          { name: "#Korean #Barbecue", image: require("../images/item/koreanbarbecue.jpg"), username: "4foodie", header: false },
          { name: "#SeafoodPlatter",  image: require("../images/item/seafood.jpg"), username: "4foodie", header: false },
          { name: "#CurryRice", image: require("../images/item/curry.jpg"), username: "popyummy_mag", header: false },
          { name: "#Yakitori Set", image: require("../images/item/yakitori.jpg"), username: "popyummy_mag", header: false },

          { name: "Looking for Cafe?", header: true },
          { name: "#Cala #Cafe", image: require("../images/item/cala.jpg"), username: "popyummy_mag", header: false },
          { name: "#BrownSugarLatte", image: require("../images/item/cof.jpg"), username: "popyummy_mag", header: false },
          { name: "#Moomin #Cafe", image: require("../images/item/moomin.jpg"), username: "popyummy_mag", header: false },
          { name: "#Latte", image: require("../images/item/latte.jpg"), username: "popyummy_mag", header: false },

          { name: "Looking for Snacks?", header: true },
          { name: "#Roatsed Beef #Sandwich", image: require("../images/item/roastedbeef.jpg"), username: "4foodie", header: false },
          { name: "#Churro", image: require("../images/item/churro.jpg"), username: "popyummy_mag", header: false },
          { name: "#BubbleTea", image: require("../images/item/bubbletea.jpg"), username: "popyummy_mag", header: false },
          { name: "#Frui #Shake", image: require("../images/item/fruitshake.jpg"), username: "popyummy_mag", header: false },
          { name: "#Colorful #Shake", image: require("../images/item/shake.jpg"), username: "popyummy_mag", header: false },
          { name: "#Taiwanese #Pastry", image: require("../images/item/pastry.jpg"), username: "popyummy_mag", header: false },

          { name: "Looking for Sweets?", header: true },
          { name: "#Matcha #Sweets", image: require("../images/item/matcha.jpg"), username: "finalefinale", header: false },
          { name: "#Pancakes", image: require("../images/item/pancakes.jpg"), username: "4foodie", header: false },
          { name: "#Balck #IceCream", image: require("../images/item/blackice.jpg"), username: "finalefinale", header: false },
          { name: "#Matcha #Cake", image: require("../images/item/matchacake.jpg"), username: "popyummy_mag", header: false },
          { name: "#Patisserie", image: require("../images/item/patisserie.jpg"), username: "popyummy_mag", header: false },
          { name: "#Tiramisu", image: require("../images/item/tiramisu.jpg"), username: "popyummy_mag", header: false },
        ],
        stickyHeaderIndices: [],
      };
    }
    componentWillMount() {
      var arr = [];
      this.state.data.map(obj => {
        if (obj.header) {
          arr.push(this.state.data.indexOf(obj));
        }
      });
      arr.push(0);
      this.setState({
        stickyHeaderIndices: arr
      });
    }

    renderItem = ({ item }) => {
      if (item.header) {
        return (
          <ListItem itemDivider key={item.name}>
            <Left />
            <Body style={{  marginRight: 300, paddingTop: 20 }}>
              <Text style={{ fontWeight: "bold", alignSelf: 'center', marginLeft: 300, color:'slategray'  }}>
                {item.name}
              </Text>
            </Body>
            <Right />
          </ListItem>
        );
      } else if (!item.header) {
        return (
          <ListItem style={{ marginLeft: 0 }} key={item.name}>
            <Body >
              <Text style={{ alignSelf: 'center', marginBottom: 10, fontWeight: 'bold', fontFamily: 'AvenirNext-Bold'}}>{item.name} </Text>
              <Image style={ styles.img } source={item.image}/>
              <Text style={{ alignSelf: 'center', marginTop: 10, fontFamily: 'AvenirNext-Regular'}}>Credit: {item.username}</Text>
            </Body>
          </ListItem>
        );
      }
    };
    render() {
    return (

      <View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.name}
          stickyHeaderIndices={this.state.stickyHeaderIndices}
        />

      </View>
    );
}
}

export default Discover;
