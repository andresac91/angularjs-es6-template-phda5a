class ChooseLanguageCtrl {
  static $inject = ['$translate'];
  constructor($translate) {
    this.$translate = $translate;
    this.currentLanguage;
    this.languages;
  }

  $onInit() {
    this.currentLanguage = this.$translate.use();
  }

  update(iso2) {
    this.$translate.use(iso2);
    this.currentLanguage = this.$translate.use();
  }
}

export default {
  bindings: {
    languages: '<'
  },
  templateUrl: 'globals/components/choose-language/choose-language.component.html',
  controller: ChooseLanguageCtrl
}