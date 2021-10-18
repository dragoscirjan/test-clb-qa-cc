import config from '../../config/config';
import SearchObjects from '../../page-objects/search';
import { ClientFunction } from 'testcafe';

const searchObjects = new SearchObjects();
const getLocation = ClientFunction(() => document.location.href.toString());


fixture`Search functionality`
  .page`${config.E2E_BASE_URL}`
test('Use search to find exact text', async (t) => {
  await t
    .click(searchObjects.searchIcon)
    .typeText(
      searchObjects.searchInputField,
      config.E2E_SEARCH_TEXT,
    )
    .click(searchObjects.searchSubmitButton)
    .wait(2000)
    .click(searchObjects.privacyPopUp)
    .expect(searchObjects.searchTextResult.textContent).contains(config.E2E_SEARCH_TEXT)
    .expect(getLocation()).contains(config.E2E_SEARCH_TEXT);
});
