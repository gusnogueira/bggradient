import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, StyleSheet, Text, Slider} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red1: 126,
      green1: 126,
      blue1: 126,
      red2: 126,
      green2: 126,
      blue2: 126,
    };
  }

  render() {
    var color1 = `#${
      Math.floor(this.state.red1).toString(16).length === 1
        ? `0${Math.floor(this.state.red1).toString(16)}`
        : Math.floor(this.state.red1).toString(16)
    }${
      Math.floor(this.state.green1).toString(16).length === 1
        ? `0${Math.floor(this.state.green1).toString(16)}`
        : Math.floor(this.state.green1).toString(16)
    }${
      Math.floor(this.state.blue1).toString(16).length === 1
        ? `0${Math.floor(this.state.blue1).toString(16)}`
        : Math.floor(this.state.blue1).toString(16)
    }`;

    var color2 = `#${
      Math.floor(this.state.red2).toString(16).length === 1
        ? `0${Math.floor(this.state.red2).toString(16)}`
        : Math.floor(this.state.red2).toString(16)
    }${
      Math.floor(this.state.green2).toString(16).length === 1
        ? `0${Math.floor(this.state.green2).toString(16)}`
        : Math.floor(this.state.green2).toString(16)
    }${
      Math.floor(this.state.blue2).toString(16).length === 1
        ? `0${Math.floor(this.state.blue2).toString(16)}`
        : Math.floor(this.state.blue2).toString(16)
    }`;

    return (
      <>
        <LinearGradient colors={[color1, color2]} style={styles.body}>
          <View style={styles.container}>
            <Text style={styles.title}>Vermelho</Text>
            <Slider
              value={this.state.red1}
              minimumValue={0}
              maximumValue={255}
              onValueChange={(r) => this.setState({red1: r})}
              minimumTrackTintColor="red"
              thumbTintColor="#505050"
            />
            <Text style={styles.title}>Verde</Text>
            <Slider
              value={this.state.green1}
              minimumValue={0}
              maximumValue={255}
              onValueChange={(g) => this.setState({green1: g})}
              minimumTrackTintColor="green"
              thumbTintColor="#505050"
            />
            <Text style={styles.title}>Azul</Text>
            <Slider
              value={this.state.blue1}
              minimumValue={0}
              maximumValue={255}
              onValueChange={(b) => this.setState({blue1: b})}
              minimumTrackTintColor="blue"
              thumbTintColor="#505050"
            />
            <Text style={styles.code}>Código RGB 1: {color1}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Vermelho</Text>
            <Slider
              value={this.state.red2}
              minimumValue={0}
              maximumValue={255}
              onValueChange={(r) => this.setState({red2: r})}
              minimumTrackTintColor="red"
              thumbTintColor="#505050"
            />
            <Text style={styles.title}>Verde</Text>
            <Slider
              value={this.state.green2}
              minimumValue={0}
              maximumValue={255}
              onValueChange={(g) => this.setState({green2: g})}
              minimumTrackTintColor="green"
              thumbTintColor="#505050"
            />
            <Text style={styles.title}>Azul</Text>
            <Slider
              value={this.state.blue2}
              minimumValue={0}
              maximumValue={255}
              onValueChange={(b) => this.setState({blue2: b})}
              minimumTrackTintColor="blue"
              thumbTintColor="#505050"
            />
            <Text style={styles.code}>Código RGB 2: {color2}</Text>
          </View>
        </LinearGradient>
      </>
    );
  }
}

var styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  title: {
    padding: 15,
    fontSize: 18,
    textAlign: 'center',
  },
  code: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 15,
  },
});
