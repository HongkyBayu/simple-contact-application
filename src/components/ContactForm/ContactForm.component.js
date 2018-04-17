import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import actionType from '../../reducers/ActionTypes/actionTypes'
import NameTextField from './NameTextField.component';
import I18n from '../../I18n/i18n';
import EmailTextField from './EmailTextField.component';

let ContactForm = props => {

  const { isIndo } = props;

  const buttonSumbitData = () => {
    const { nameValue, emailValue } = props;
    props.onSaveContact(nameValue, emailValue);
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Field
          name={'contactName'}
          component={NameTextField}
        />
        <Field
          name={'contactEmail'}
          component={EmailTextField}
        />
      </View>
      <Button
        onPress={buttonSumbitData}
        title={I18n.t('SubmitButtonText', { locale: isIndo ? 'id' : 'en' })}
      />
    </View>
  );
};

ContactForm = reduxForm({
  form: 'contactForm'  // a unique identifier for this form
})(ContactForm)

const selector = formValueSelector('contactForm');

mapStateToProps = state => {
  const nameValue = selector(state, 'contactName');
  const emailValue = selector(state, 'contactEmail');
  return {
    nameValue,
    emailValue,
    isIndo: state.translation,
  }
};

const mapDispatchToProps = dispatch => ({
  onSaveContact: (name, email) => {
    dispatch({
      type: actionType.CONTACT.ADD_CONTACT,
      payload: {
        name,
        email,
      },
    });
    dispatch({
      type: actionType.CONTACT.CONTACT_SAVE_SUCCESS
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
});