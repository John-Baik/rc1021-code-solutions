/* exported titleCase */
function titleCase(title) {
  const split = title.split(' ');
  const mapArray = split.map(string => {
    if (string.toLowerCase().includes('javascript')) {
      if (string.includes(':')) {
        string = 'JavaScript:';
      } else {
        string = 'JavaScript';
        return string;
      }
    } else if (string.toLowerCase() === 'web') {
      string = 'Web';
      return string;

    } else if (string.includes('-') === true) {
      const dashSplit = string.split('-');
      const dashFirstIndex = dashSplit[0];
      const dashSecondIndex = dashSplit[1];
      const firstLetterUppercase = dashFirstIndex[0].toUpperCase();
      const secondLetterUppercase = dashSecondIndex[0].toUpperCase();
      const firstIndexUppercase = dashFirstIndex.replace(dashFirstIndex[0], firstLetterUppercase);
      const secondIndexUppercase = dashSecondIndex.replace(dashSecondIndex[0], secondLetterUppercase);
      const concatString = `${firstIndexUppercase}-${secondIndexUppercase}`;
      return concatString;
    } else if (string.toLowerCase() === 'api') {
      string = 'API';
    } else if (string.length > 3) {
      const upperCase = string[0].toUpperCase();
      const slice = string.slice(1);
      return upperCase + slice;
    }
    return string;
  });
  for (let i = 0; i < mapArray.length; i++) {
    if (mapArray[i].includes(':')) {
      const firstWord = mapArray[i + 1];
      const firstLetterUppercase = firstWord[0].toUpperCase();
      const firstWordUppercase = firstWord.replace(firstWord[0], firstLetterUppercase);
      mapArray[i + 1] = firstWordUppercase;
    }
  }
  const firstIndex = mapArray[0];
  const upperCase = firstIndex[0].toUpperCase();
  const upperCaseFirstIndex = firstIndex.replace(firstIndex[0], upperCase);
  mapArray[0] = upperCaseFirstIndex;
  const finalString = mapArray.join(' ');
  return finalString;
}
