import React, {Component} from 'react';
// import { TextInput, View, Text } from 'react-native';
import Button from './Button';
import CardSection from './CardSection';
import Card from './Card';
import  InputField from './InputField';

class LoginForm extends Component {
  state = {email: ''};

  render() {
    return(
      <Card>
        <CardSection />
        <InputField
        placeholder='gfys@gmail.com'
        label='Email Baby'
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
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
