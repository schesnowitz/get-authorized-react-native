import React, {Component} from 'react';
// import { TextInput, View, Text } from 'react-native';
import Button from './Button';
import CardSection from './CardSection';
import Card from './Card';
import  InputField from './InputField';

class LoginForm extends Component {
  state = {email: '', password: ''};

  render() {
    return(
      <Card>
        <CardSection />
        <InputField
        selectTextOnFocus
        placeholder='gfys@gmail.com'
        label='Email Baby'
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
        />
        <CardSection />
        <CardSection />
        <InputField

        secureTextEntry
        placeholder='Enter your password'
        label='Password'
        value={this.state.password}
        onChangeText={password => this.setState({ password })}
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
