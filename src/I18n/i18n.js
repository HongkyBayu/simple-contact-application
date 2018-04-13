import I18n from 'react-native-i18n';
import en from '../I18n/en';
import id from '../I18n/id';

I18n.fallbacks = true;

I18n.translations = {
  en,
  id
};

export default I18n;