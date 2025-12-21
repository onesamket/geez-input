/**
 * Base consonant characters in Geez script
 * Maps Latin phonetic characters to their corresponding Geez consonants (6th form/ስድስት)
 *
 * @example
 * \`\`\`ts
 * CONSONANTS['h'] // returns 'ህ'
 * CONSONANTS['sh'] // returns 'ሽ'
 * \`\`\`
 */
export const CONSONANTS: Record<string, string> = {
  h: "ህ",
  l: "ል",
  m: "ም",
  r: "ር",
  s: "ስ",
  rR: "ር",
  sh: "ሽ",
  q: "ቅ",
  b: "ብ",
  t: "ት",
  ch: "ች",
  n: "ን",
  gn: "ኝ",
  N: "ኝ",
  k: "ክ",
  w: "ው",
  z: "ዝ",
  zh: "ዥ",
  y: "ይ",
  d: "ድ",
  j: "ጅ",
  g: "ግ",
  T: "ጥ",
  C: "ጭ",
  P: "ጵ",
  S: "ጽ",
  f: "ፍ",
  p: "ፕ",
  v: "ቭ",
  x: "ኽ",
  H: "ኃ",
  a: "አ",
  u: "ኡ",
  i: "ኢ",
  e: "እ",
  o: "ኦ",
  A: "ኣ",
  E: "ኤ",
  O: "ዖ",
};

/**
 * Syllable forms for each consonant with vowel modifications
 * Each consonant base has multiple forms based on the following vowel
 *
 * Vowel order (traditional):
 * - a/e (ግዕዝ/Geez) - base form
 * - u (ካዕብ/Kaeb) - u modification
 * - i (ሳልስ/Salis) - i modification
 * - aa/A (ራብዕ/Rabee) - aa modification
 * - ee/E (ኃምስ/Hamis) - ee modification
 * - o (ሳድስ/Sadis) - o modification
 * - ua (ሳብዕ/Sabe) - ua modification (not available for all)
 *
 * @example
 * \`\`\`ts
 * SYLLABLES['ህ']['a'] // returns 'ሀ'
 * SYLLABLES['ል']['ua'] // returns 'ሏ'
 * \`\`\`
 */
export const SYLLABLES: Record<string, Record<string, string>> = {
  አ: {
    e: "አ",
    u: "ኡ",
    i: "ኢ",
    a: "ኣ",
    ie: "ኤ",
    o: "ኦ",
  },
  ኧ: {
    å: "ኧ",
  },
  ህ: {
    e: "ሀ",
    u: "ሁ",
    i: "ሂ",
    a: "ሃ",
    ie: "ሄ",
    o: "ሆ",
    ua: "ኋ",
    wa: "ኈ",
    wi: "ኊ",
    we: "ኌ",
    wei: "ኍ"
  },
  ኃ: {
    e: "ኃ",
    u: "ኁ",
    i: "ኂ",
    a: "ኃ",
    ie: "ኄ",
    o: "ኆ",
  },
  ል: {
    e: "ለ",
    u: "ሉ",
    i: "ሊ",
    a: "ላ",
    ie: "ሌ",
    o: "ሎ",
    wa: "ሏ",
  },
  ም: {
    e: "መ",
    u: "ሙ",
    i: "ሚ",
    a: "ማ",
    ie: "ሜ",
    o: "ሞ",
    ua: "ሟ",
  },
  ር: {
    e: "ረ",
    u: "ሩ",
    i: "ሪ",
    a: "ራ",
    ie: "ሬ",
    o: "ሮ",
    ua: "ሯ",
  },
  ስ: {
    e: "ሰ",
    u: "ሱ",
    i: "ሲ",
    a: "ሳ",
    ie: "ሴ",
    o: "ሶ",
    ua: "ሷ",
  },
  ሽ: {
    e: "ሸ",
    u: "ሹ",
    i: "ሺ",
    a: "ሻ",
    ie: "ሼ",
    o: "ሾ",
    ua: "ሿ",
  },
  ቅ: {
    e: "ቀ",
    u: "ቁ",
    i: "ቂ",
    a: "ቃ",
    ie: "ቄ",
    o: "ቆ",
    ua: "ቋ",
    wa: "ቈ",
    wi: "ቊ",
    waa: "ቋ",
    we: "ቌ",
    wei: "ቍ",
  },
  ብ: {
    e: "በ",
    u: "ቡ",
    i: "ቢ",
    a: "ባ",
    ie: "ቤ",
    o: "ቦ",
    ua: "ቧ",
  },
  ት: {
    e: "ተ",
    u: "ቱ",
    i: "ቲ",
    a: "ታ",
    ie: "ቴ",
    o: "ቶ",
    ua: "ቷ",
  },
  ች: {
    e: "ቸ",
    u: "ቹ",
    i: "ቺ",
    a: "ቻ",
    ie: "ቼ",
    o: "ቾ",
    ua: "ቿ",
  },
  ን: {
    e: "ነ",
    u: "ኑ",
    i: "ኒ",
    a: "ና",
    ie: "ኔ",
    o: "ኖ",
    ua: "ኗ",
  },
  ኝ: {
    e: "ኘ",
    u: "ኙ",
    i: "ኚ",
    a: "ኛ",
    ie: "ኜ",
    o: "ኞ",
    ua: "ኟ",
  },
  ክ: {
    e: "ከ",
    u: "ኩ",
    i: "ኪ",
    a: "ካ",
    ie: "ኬ",
    o: "ኮ",
    ua: "ኳ",
    wa: "ኰ",
    wi: "ኲ",
    waa: "ኳ",
    we: "ኴ",
    wei: "ኵ",
  },
  ው: {
    e: "ወ",
    u: "ዉ",
    i: "ዊ",
    a: "ዋ",
    ie: "ዌ",
    o: "ዎ",
    ua: ""

  },
  ዝ: {
    e: "ዘ",
    u: "ዙ",
    i: "ዚ",
    a: "ዛ",
    ie: "ዜ",
    o: "ዞ",
    ua: "ዟ",
  },
  ዥ: {
    e: "ዠ",
    u: "ዡ",
    i: "ዢ",
    a: "ዣ",
    ie: "ዤ",
    o: "ዦ",
    ua: "ዧ",
  },
  ይ: {
    e: "የ",
    u: "ዩ",
    i: "ዪ",
    a: "ያ",
    ie: "ዬ",
    o: "ዮ",
  },
  ጅ: {
    e: "ጀ",
    u: "ጁ",
    i: "ጂ",
    a: "ጃ",
    ie: "ጄ",
    o: "ጆ",
    ua: "ጇ",
  },
  ድ: {
    e: "ደ",
    u: "ዱ",
    i: "ዲ",
    a: "ዳ",
    ie: "ዴ",
    o: "ዶ",
    ua: "ዷ",
  },
  ግ: {
    e: "ገ",
    u: "ጉ",
    i: "ጊ",
    a: "ጋ",
    ie: "ጌ",
    o: "ጎ",
    ua: "ጓ",
    wa: "ጐ",
    wi: "ጒ",
    waa: "ጓ",
    we: "ጔ",
    wei: "ጕ",
  },
  ጥ: {
    e: "ጠ",
    u: "ጡ",
    i: "ጢ",
    a: "ጣ",
    ie: "ጤ",
    o: "ጦ",
    ua: "ጧ",
  },
  ጭ: {
    e: "ጨ",
    u: "ጩ",
    i: "ጪ",
    a: "ጫ",
    ie: "ጬ",
    o: "ጮ",
    ua: "ቿ",
  },
  ጵ: {
    e: "ጰ",
    u: "ጱ",
    i: "ጲ",
    a: "ጳ",
    ie: "ጴ",
    o: "ጶ",
    ua: "ፗ",
  },
  ጽ: {
    e: "ጸ",
    u: "ጹ",
    i: "ጺ",
    a: "ጻ",
    ie: "ጼ",
    o: "ጾ",
    ua: "ጿ",
  },
  ፍ: {
    e: "ፈ",
    u: "ፉ",
    i: "ፊ",
    a: "ፋ",
    ie: "ፌ",
    o: "ፎ",
    ua: "ፏ",
  },
  ፕ: {
    e: "ፐ",
    u: "ፑ",
    i: "ፒ",
    a: "ፓ",
    ie: "ፔ",
    o: "ፖ",
    ua: "ፗ",
  },
  ቭ: {
    e: "ቨ",
    u: "ቩ",
    i: "ቪ",
    a: "ቫ",
    ie: "ቬ",
    o: "ቮ",
    ua: "ቯ",
  },
};

/**
 * Multi-character consonant combinations
 * Handles digraphs and special character sequences
 *
 * @example
 * \`\`\`ts
 * MULTI_CONSONANTS['ስh'] // returns 'ሽ' (sh sound)
 * \`\`\`
 */
// Special combinations with 'y' and 'r'
export const SPECIAL_COMBINATIONS: Record<string, string> = {
  'ă': 'ኧ',
  'ñwa': 'ኟ',
};

export const MULTI_CONSONANTS: Record<string, string> = {
  ስh: "ሽ",
  ችh: "ች",
  ንy: "ኝ",
  ዝh: "ዥ",
  ጽh: "ፁ",
};

/**
 * Punctuation mark mappings from Latin to Geez
 * Supports sequential input for different punctuation forms
 *
 * @example
 * \`\`\`ts
 * PUNCTUATION[':'] // returns '፡' (word separator)
 * PUNCTUATION['፡:'] // returns '።' (sentence ending)
 * \`\`\`
 */
export const PUNCTUATION: Record<string, string> = {
  ":": "፡",
  "፡:": "።",
  "።:": "፡",
  ",": "፣",
  "፣,": "፤",
  ";": "፤",
};
