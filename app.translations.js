export default function translations($translateProvider) {
  $translateProvider.translations('de', {
    APP_HEADLINE: 'AngularJs ES Template',
    WELCOME: 'Willkommen',
    INCLUDED: 'Integriert',
    LANGUAGES: {
      en: 'Englisch',
      de: 'Deutsch'
    },
    STATES: {
      HOME: 'Home'
    }
  });

  $translateProvider.translations('en', {
    APP_HEADLINE: 'AngularJs ES Template',
    WELCOME: 'Welcome',
    INCLUDED: 'Included',
    LANGUAGES: {
      en: 'English',
      de: 'German'
    },
    STATES: {
      HOME: 'Home'
    }
  });

  $translateProvider
    .useSanitizeValueStrategy("sanitizeParameters")
    .determinePreferredLanguage()
    .preferredLanguage("en")
    .fallbackLanguage("en");
}
translations.$inject = ['$translateProvider'];