import React, {Component} from 'react';
import {View} from 'react-native';
import Button from './Button';
import CardSection from './CardSection';
import Card from './Card';


class LoginForm extends Component {
  render() {
    return(
      <Card>
        <CardSection />
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
