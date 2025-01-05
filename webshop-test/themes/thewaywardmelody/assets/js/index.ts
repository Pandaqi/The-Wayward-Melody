import loadExternalProducts from "./externalProducts"
import loadBundledProducts from "./bundledProducts"
import activateDynamicSections from "./dynamicSections";
import applySearchFilters from "./search";

loadExternalProducts();
loadBundledProducts();
activateDynamicSections();
applySearchFilters();