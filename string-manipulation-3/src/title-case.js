/* exported titleCase */
function titleCase(title) {
  var split = title.split(' ');
  var finalArray = [];
  for (var i = 0; i < split.length; i++) {
    var index = split[i];
    var final = '';
    for (var e = 0; e < index.length; e++) {
      if ((e === 0 && index.length > 3) || (i === 0 && e === 0)) {
        var upperCase = index[e].toUpperCase();
        final += upperCase;
      } else {
        final += index[e];
      }
    }
    finalArray.push(final);
  }
  return finalArray.join(' ');
}

function checkDash(finalArray) {

}

// Capitalize the first word of the title and of any subtitle.
// Capitalize all “major” words(nouns, verbs, adjectives, adverbs, and pronouns) in the title, including the second part of hyphenated major words(e.g., Self - Report not Self - report).
// Capitalize all words of four letters or more.

// HARD CODE
// JavaScript is always cased JavaScript.
// API is a "known" acronym.
