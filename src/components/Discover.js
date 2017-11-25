import React, { Component } from 'react'
import { FlatList, Image, View, StyleSheet } from 'react-native'
import { Text, ListItem, Left, Body, Icon, Right, Title } from 'native-base'
import { SearchBar } from 'react-native-elements'

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
})

class Discover extends Component {

  constructor() {
      super();
      this.state = {
        data: [
          { name: "Looking for Brunch?", header: true },
          { id: "1", name: "Brunch", image: require("../images/item/brunch.jpg"), username: "popyummy_mag", header: false },

          { name: "Looking for Proper Meal?", header: true },
          { id: "3", name: "Taiwanese Food", image: require("../images/item/taiwanese.jpg"), username: "popyummy_mag", header: false },
          { id: "4", name: "Risotto", image: require("../images/item/risotto.jpg"), username: "popyummy_mag", header: false },
          { id: "5", name: "Crab Porridge", image: require("../images/item/crab.jpg"), username: "popyummy_mag", header: false },
          { id: "6", name: "Dim Sum", image: require("../images/item/dimsum.jpg"), username: "4foodie", header: false },
          { id: "7", name: "Korean Barbecue", image: require("../images/item/koreanbarbecue.jpg"), username: "4foodie", header: false },
          { id: "8", name: "Seafood Platter",  image: require("../images/item/seafood.jpg"), username: "4foodie", header: false },
          { id: "9", name: "Curry Rice", image: require("../images/item/curry.jpg"), username: "popyummy_mag", header: false },
          { id: "10", name: "Yakitori Set", image: require("../images/item/yakitori.jpg"), username: "popyummy_mag", header: false },

          { name: "Looking for Cafe?", header: true },
          { id: "11", name: "Cala Cafe", image: require("../images/item/cala.jpg"), username: "popyummy_mag", header: false },
          { id: "12", name: "Brown Sugar Latte", image: require("../images/item/cof.jpg"), username: "popyummy_mag", header: false },
          { id: "13", name: "Moomin Cafe", image: require("../images/item/moomin.jpg"), username: "popyummy_mag", header: false },
          { id: "14", name: "Latte", image: require("../images/item/latte.jpg"), username: "popyummy_mag", header: false },

          { name: "Looking for Snacks?", header: true },
          { id: "16", name: "Roatsed Beef Sandwich", image: require("../images/item/roastedbeef.jpg"), username: "4foodie", header: false },
          { id: "17", name: "Churro", image: require("../images/item/churro.jpg"), username: "popyummy_mag", header: false },
          { id: "18", name: "Bubble Tea", image: require("../images/item/bubbletea.jpg"), username: "popyummy_mag", header: false },
          { id: "19", name: "Fruit Shake", image: require("../images/item/fruitshake.jpg"), username: "popyummy_mag", header: false },
          { id: "20", name: "Colorful Shake", image: require("../images/item/shake.jpg"), username: "popyummy_mag", header: false },
          { id: "21", name: "Taiwanese Pastry", image: require("../images/item/pastry.jpg"), username: "popyummy_mag", header: false },

          { name: "Looking for Sweets?", header: true },
          { id: "22", name: "Matcha Sweets", image: require("../images/item/matcha.jpg"), username: "finalefinale", header: false },
          { id: "23", name: "Pancakes", image: require("../images/item/pancakes.jpg"), username: "4foodie", header: false },
          { id: "24", name: "Balck Ice Cream", image: require("../images/item/blackice.jpg"), username: "finalefinale", header: false },
          { id: "25", name: "Matcha Cake", image: require("../images/item/matchacake.jpg"), username: "popyummy_mag", header: false },
          { id: "26", name: "Patisserie", image: require("../images/item/patisserie.jpg"), username: "popyummy_mag", header: false },
          { id: "27", name: "Tiramisu", image: require("../images/item/tiramisu.jpg"), username: "popyummy_mag", header: false },
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
          <ListItem itemDivider>
            <Left />
            <Body style={{  marginRight: 300, paddingTop: 20 }}>
              <Text style={{ fontWeight: "bold", alignSelf: 'center', marginLeft: 300  }}>
                {item.name}
              </Text>
            </Body>
            <Right />
          </ListItem>
        );
      } else if (!item.header) {
        return (
          <ListItem style={{ marginLeft: 0 }}>
            <Body >
              <Text style={{ alignSelf: 'center'}}>{item.name} </Text>
              <Image style={ styles.img } source={item.image}/>
              <Text style={{ alignSelf: 'center'}}>credit: {item.username}</Text>
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
      keyExtractor={item => item.id}
      stickyHeaderIndices={this.state.stickyHeaderIndices}
    />
    </View>
  );
}
}

export default Discover;
