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
    ee: "ኤ",
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
    ee: "ሄ",
    o: "ሆ",
    ua: "ኋ",
    wa: "ኋ",
    wi: "ኊ",
    we: "ኈ",
    wee: "ኌ",
    wu: "ኍ",
    wei: "ኍ",
  },
  ኃ: {
    e: "ኃ",
    u: "ኁ",
    i: "ኂ",
    a: "ኃ",
    ee: "ኄ",
    o: "ኆ",
  },
  ል: {
    e: "ለ",
    u: "ሉ",
    i: "ሊ",
    a: "ላ",
    ee: "ሌ",
    o: "ሎ",
    wa: "ሏ",
    ua: "ሏ",
  },
  ም: {
    e: "መ",
    u: "ሙ",
    i: "ሚ",
    a: "ማ",
    ee: "ሜ",
    o: "ሞ",
    ua: "ሟ",
    wa: "ሟ",
  },
  ር: {
    e: "ረ",
    u: "ሩ",
    i: "ሪ",
    a: "ራ",
    ee: "ሬ",
    o: "ሮ",
    ua: "ሯ",
    wa: "ሯ",
  },
  ስ: {
    e: "ሰ",
    u: "ሱ",
    i: "ሲ",
    a: "ሳ",
    ee: "ሴ",
    o: "ሶ",
    ua: "ሷ",
    wa: "ሷ",
  },
  ሽ: {
    e: "ሸ",
    u: "ሹ",
    i: "ሺ",
    a: "ሻ",
    ee: "ሼ",
    o: "ሾ",
    ua: "ሿ",
    wa: "ሿ",
  },
  ቅ: {
    e: "ቀ",
    u: "ቁ",
    i: "ቂ",
    a: "ቃ",
    ee: "ቄ",
    o: "ቆ",
    ua: "ቋ",
    wa: "ቋ",
    wi: "ቊ",
    waa: "ቋ",
    we: "ቈ",
    wee: "ቌ",
    wu: "ቍ",
    wei: "ቍ",
  },
  ብ: {
    e: "በ",
    u: "ቡ",
    i: "ቢ",
    a: "ባ",
    ee: "ቤ",
    o: "ቦ",
    ua: "ቧ",
    wa: "ቧ",
  },
  ት: {
    e: "ተ",
    u: "ቱ",
    i: "ቲ",
    a: "ታ",
    ee: "ቴ",
    o: "ቶ",
    ua: "ቷ",
    wa: "ቷ",
  },
  ች: {
    e: "ቸ",
    u: "ቹ",
    i: "ቺ",
    a: "ቻ",
    ee: "ቼ",
    o: "ቾ",
    ua: "ቿ",
    wa: "ቿ",
  },
  ን: {
    e: "ነ",
    u: "ኑ",
    i: "ኒ",
    a: "ና",
    ee: "ኔ",
    o: "ኖ",
    ua: "ኗ",
    wa: "ኗ",
  },
  ኝ: {
    e: "ኘ",
    u: "ኙ",
    i: "ኚ",
    a: "ኛ",
    ee: "ኜ",
    o: "ኞ",
    ua: "ኟ",
    wa: "ኟ",
  },
  ክ: {
    e: "ከ",
    u: "ኩ",
    i: "ኪ",
    a: "ካ",
    ee: "ኬ",
    o: "ኮ",
    ua: "ኳ",
    wa: "ኳ",
    wi: "ኲ",
    waa: "ኳ",
    we: "ኰ",
    wee: "ኴ",
    wu: "ኵ",
    wei: "ኵ",
  },
  ው: {
    e: "ወ",
    u: "ዉ",
    i: "ዊ",
    a: "ዋ",
    ee: "ዌ",
    o: "ዎ",
    ua: "",
  },
  ዝ: {
    e: "ዘ",
    u: "ዙ",
    i: "ዚ",
    a: "ዛ",
    ee: "ዜ",
    o: "ዞ",
    ua: "ዟ",
    wa: "ዟ",
  },
  ዥ: {
    e: "ዠ",
    u: "ዡ",
    i: "ዢ",
    a: "ዣ",
    ee: "ዤ",
    o: "ዦ",
    ua: "ዧ",
    wa: "ዧ",
  },
  ይ: {
    e: "የ",
    u: "ዩ",
    i: "ዪ",
    a: "ያ",
    ee: "ዬ",
    o: "ዮ",
  },
  ጅ: {
    e: "ጀ",
    u: "ጁ",
    i: "ጂ",
    a: "ጃ",
    ee: "ጄ",
    o: "ጆ",
    ua: "ጇ",
    wa: "ጇ",
  },
  ድ: {
    e: "ደ",
    u: "ዱ",
    i: "ዲ",
    a: "ዳ",
    ee: "ዴ",
    o: "ዶ",
    ua: "ዷ",
    wa: "ዷ",
  },
  ግ: {
    e: "ገ",
    u: "ጉ",
    i: "ጊ",
    a: "ጋ",
    ee: "ጌ",
    o: "ጎ",
    ua: "ጓ",
    wa: "ጓ",
    wi: "ጒ",
    waa: "ጓ",
    we: "ጐ",
    wee: "ጔ",
    wu: "ጕ",
    wei: "ጕ",
  },
  ጥ: {
    e: "ጠ",
    u: "ጡ",
    i: "ጢ",
    a: "ጣ",
    ee: "ጤ",
    o: "ጦ",
    ua: "ጧ",
    wa: "ጧ",
  },
  ጭ: {
    e: "ጨ",
    u: "ጩ",
    i: "ጪ",
    a: "ጫ",
    ee: "ጬ",
    o: "ጮ",
    ua: "ጯ",
    wa: "ጯ",
  },
  ጵ: {
    e: "ጰ",
    u: "ጱ",
    i: "ጲ",
    a: "ጳ",
    ee: "ጴ",
    o: "ጶ",
    ua: "ጷ",
    wa: "ጷ",
  },
  ጽ: {
    e: "ጸ",
    u: "ጹ",
    i: "ጺ",
    a: "ጻ",
    ee: "ጼ",
    o: "ጾ",
    ua: "ጿ",
    wa: "ጿ",
  },
  ፍ: {
    e: "ፈ",
    u: "ፉ",
    i: "ፊ",
    a: "ፋ",
    ee: "ፌ",
    o: "ፎ",
    ua: "ፏ",
    wa: "ፏ",
  },
  ፕ: {
    e: "ፐ",
    u: "ፑ",
    i: "ፒ",
    a: "ፓ",
    ee: "ፔ",
    o: "ፖ",
    ua: "ፗ",
    wa: "ፗ",
  },
  ቭ: {
    e: "ቨ",
    u: "ቩ",
    i: "ቪ",
    a: "ቫ",
    ee: "ቬ",
    o: "ቮ",
    ua: "ቯ",
    wa: "ቯ",
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
  ă: "ኧ",
  ñwa: "ኟ",
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
