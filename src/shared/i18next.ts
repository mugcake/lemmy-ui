import i18next, { i18nTyped } from "i18next";
import { getLanguage } from "./utils";
import { en } from "./translations/en";
import { el } from "./translations/el";
import { eu } from "./translations/eu";
import { eo } from "./translations/eo";
import { es } from "./translations/es";
import { de } from "./translations/de";
import { fr } from "./translations/fr";
import { sv } from "./translations/sv";
import { ru } from "./translations/ru";
import { zh } from "./translations/zh";
import { nl } from "./translations/nl";
import { it } from "./translations/it";
import { fi } from "./translations/fi";
import { ca } from "./translations/ca";
import { fa } from "./translations/fa";
import { hi } from "./translations/hi";
import { pl } from "./translations/pl";
import { pt_BR } from "./translations/pt_BR";
import { ja } from "./translations/ja";
import { ka } from "./translations/ka";
import { gl } from "./translations/gl";
import { tr } from "./translations/tr";
import { hu } from "./translations/hu";
import { uk } from "./translations/uk";
import { sq } from "./translations/sq";
import { km } from "./translations/km";
import { ga } from "./translations/ga";
import { sr_Latn } from "./translations/sr_Latn";
import { da } from "./translations/da";
import { oc } from "./translations/oc";
import { hr } from "./translations/hr";
import { th } from "./translations/th";
import { bg } from "./translations/bg";
import { ar } from "./translations/ar";
import { ko } from "./translations/ko";

// https://github.com/nimbusec-oss/inferno-i18next/blob/master/tests/T.test.js#L66
const resources = {
  en,
  el,
  eu,
  eo,
  es,
  ka,
  hi,
  de,
  zh,
  fr,
  sv,
  ru,
  nl,
  it,
  fi,
  ca,
  fa,
  pl,
  pt_BR,
  ja,
  gl,
  tr,
  hu,
  uk,
  sq,
  km,
  ga,
  sr_Latn,
  da,
  oc,
  hr,
  th,
  bg,
  ar,
  ko
};

function format(value: any, format: any): any {
  return format === "uppercase" ? value.toUpperCase() : value;
}

i18next.init({
  debug: false,
  // load: 'languageOnly',

  // initImmediate: false,
  lng: getLanguage(),
  fallbackLng: "en",
  resources,
  interpolation: { format },
});

export const i18n = i18next as i18nTyped;

export { resources };
