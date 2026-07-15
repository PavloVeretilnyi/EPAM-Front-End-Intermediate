export function isElementVisible(element) {
  
  if (!element) {
    return false;
  }

  return element.offsetHeight > 0 || element.offsetWidth > 0;
}

