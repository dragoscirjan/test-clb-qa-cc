import config from '../../config/config';
import LanguageObjects from '../../page-objects/language-picker';

const languageObjects = new LanguageObjects();

fixture`Language picker functionality`
  .page`${config.E2E_BASE_URL}`
test('Change language to french', async (t) => {
  await t
    .click(languageObjects.languagePickerIcon)
    .click(languageObjects.languageFrench)
    .expect(languageObjects.pageTitle.textContent).contains(config.E2E_FRENCH_PAGE_TITLE)
});
test('Change language to spanish', async (t) => {
  await t
    .click(languageObjects.languagePickerIcon)
    .click(languageObjects.languageSpanish)
    .expect(languageObjects.pageTitle.textContent).contains(config.E2E_SPANISH_PAGE_TITLE)
});
test('Change language to german', async (t) => {
  await t
    .click(languageObjects.languagePickerIcon)
    .click(languageObjects.languageGerman)
    .expect(languageObjects.pageTitle.textContent).contains(config.E2E_GERMAN_PAGE_TITLE)
});
test('Change language to portuguese', async (t) => {
  await t
    .click(languageObjects.languagePickerIcon)
    .click(languageObjects.languagePortuguese)
    .expect(languageObjects.pageTitle.textContent).contains(config.E2E_PORTUGUESE_PAGE_TITLE)
});

