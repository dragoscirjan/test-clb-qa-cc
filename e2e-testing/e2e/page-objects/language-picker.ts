import { Selector, t } from 'testcafe';

export default class LanguageObjects {
  languagePickerIcon: Selector;
  languageSpanish: Selector;
  languageFrench: Selector;
  languageGerman: Selector;
  languagePortuguese: Selector;
  pageTitle: Selector;
  
  constructor() {
    this.languagePickerIcon = Selector('.fa.fa-angle-down');
    this.languageFrench = Selector('.lang-item.lang-item-8.lang-item-fr');
    this.languageSpanish = Selector('.lang-item.lang-item-110.lang-item-es');
    this.languageGerman = Selector('.lang-item.lang-item-12.lang-item-de');
    this.languagePortuguese = Selector('.lang-item.lang-item-20.lang-item-pt')
    this.pageTitle = Selector('.m-title');
  }
}
