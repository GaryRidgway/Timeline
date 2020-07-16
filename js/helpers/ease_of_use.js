// Takes a string, a replacement pattern, and the replacement value to insert in place of the replacement pattern.
function replace_pattern_in_string(STRING, PATTERN, VALUE) {
    let regex_pattern = new RegExp(PATTERN, "g");
    return STRING.replace(regex_pattern, VALUE);
  }