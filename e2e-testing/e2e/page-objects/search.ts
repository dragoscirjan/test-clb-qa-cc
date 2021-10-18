import { Selector, t } from 'testcafe';
import config from '../config/config';

export default class SearchObjects {
  searchIcon: Selector;
  searchInputField: Selector;
  searchSubmitButton: Selector;
  searchTextResult: Selector;
  privacyPopUp: Selector;

  constructor() {
    this.searchIcon = Selector('#h_search');
    this.searchInputField = Selector('#h_search_input');
    this.searchSubmitButton = Selector('#searchsubmit');
    this.searchTextResult = Selector('.scl-h2');
    this.privacyPopUp = Selector('#adroll_allow_all');
  }
}
