import loadExternalProducts from "./externalProducts"
import loadBundledProducts from "./bundledProducts"
import activateDynamicSections from "./dynamicSections";
import applySearchFilters from "./search";
import activateVariantPickers from "./variantPicker";
import { loadLightDarkMode } from "./lightDarkMode";

loadLightDarkMode();
loadExternalProducts();
loadBundledProducts();
activateDynamicSections();
applySearchFilters();
activateVariantPickers();
