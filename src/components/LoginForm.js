import React, {Component} from 'react';
// import { TextInput, View, Text } from 'react-native';
import Button from './Button';
import CardSection from './CardSection';
import Card from './Card';
import  InputField from './InputField';

class LoginForm extends Component {
  state = {text: ''};

  render() {
    return(
      <Card>
        <CardSection />
        <InputField
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        />
        <CardSection />
        <CardSection>
          <Button>
          Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
