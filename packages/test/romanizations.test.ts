import { describe, it, expect } from "vitest";
import { GeezEngine } from "../core/engine";

describe("WA-Series Romanizations", () => {
  describe("K-series (ከ) - labialized forms", () => {
    it("should convert kwa to ኳ", () => {
      const step1 = GeezEngine.transform("", "", "k");
      expect(step1.transformedValue).toBe("ክ");

      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ኳ");
    });

    it("should convert kwi to ኲ", () => {
      const step1 = GeezEngine.transform("", "", "k");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "i");
      expect(step3.transformedValue).toBe("ኲ");
    });

    it("should convert kwe to ኰ", () => {
      const step1 = GeezEngine.transform("", "", "k");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "e");
      expect(step3.transformedValue).toBe("ኰ");
    });

    it("should convert kwee to ኴ", () => {
      const step1 = GeezEngine.transform("", "", "k");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "e");
      const step4 = GeezEngine.transform(step3.transformedValue, "", "e");
      expect(step4.transformedValue).toBe("ኴ");
    });

    it("should convert kwu to ኵ", () => {
      const step1 = GeezEngine.transform("", "", "k");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "u");
      expect(step3.transformedValue).toBe("ኵ");
    });
  });

  describe("Q-series (ቀ) - labialized forms", () => {
    it("should convert qwa to ቋ", () => {
      const step1 = GeezEngine.transform("", "", "q");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ቋ");
    });

    it("should convert qwi to ቊ", () => {
      const step1 = GeezEngine.transform("", "", "q");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "i");
      expect(step3.transformedValue).toBe("ቊ");
    });

    it("should convert qwe to ቈ", () => {
      const step1 = GeezEngine.transform("", "", "q");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "e");
      expect(step3.transformedValue).toBe("ቈ");
    });

    it("should convert qwee to ቌ", () => {
      const step1 = GeezEngine.transform("", "", "q");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "e");
      const step4 = GeezEngine.transform(step3.transformedValue, "", "e");
      expect(step4.transformedValue).toBe("ቌ");
    });

    it("should convert qwu to ቍ", () => {
      const step1 = GeezEngine.transform("", "", "q");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "u");
      expect(step3.transformedValue).toBe("ቍ");
    });
  });

  describe("G-series (ገ) - labialized forms", () => {
    it("should convert gwa to ጓ", () => {
      const step1 = GeezEngine.transform("", "", "g");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ጓ");
    });

    it("should convert gwi to ጒ", () => {
      const step1 = GeezEngine.transform("", "", "g");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "i");
      expect(step3.transformedValue).toBe("ጒ");
    });

    it("should convert gwe to ጐ", () => {
      const step1 = GeezEngine.transform("", "", "g");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "e");
      expect(step3.transformedValue).toBe("ጐ");
    });

    it("should convert gwee to ጔ", () => {
      const step1 = GeezEngine.transform("", "", "g");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "e");
      const step4 = GeezEngine.transform(step3.transformedValue, "", "e");
      expect(step4.transformedValue).toBe("ጔ");
    });

    it("should convert gwu to ጕ", () => {
      const step1 = GeezEngine.transform("", "", "g");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "u");
      expect(step3.transformedValue).toBe("ጕ");
    });
  });

  describe("H-series (ሀ) - labialized forms", () => {
    it("should convert hwa to ኋ", () => {
      const step1 = GeezEngine.transform("", "", "h");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ኋ");
    });

    it("should convert hwi to ኊ", () => {
      const step1 = GeezEngine.transform("", "", "h");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "i");
      expect(step3.transformedValue).toBe("ኊ");
    });

    it("should convert hwe to ኈ", () => {
      const step1 = GeezEngine.transform("", "", "h");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "e");
      expect(step3.transformedValue).toBe("ኈ");
    });

    it("should convert hwee to ኌ", () => {
      const step1 = GeezEngine.transform("", "", "h");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "e");
      const step4 = GeezEngine.transform(step3.transformedValue, "", "e");
      expect(step4.transformedValue).toBe("ኌ");
    });

    it("should convert hwu to ኍ", () => {
      const step1 = GeezEngine.transform("", "", "h");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "u");
      expect(step3.transformedValue).toBe("ኍ");
    });
  });

  describe("L-series (ለ) - labialized forms", () => {
    it("should convert lwa to ሏ", () => {
      const step1 = GeezEngine.transform("", "", "l");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ሏ");
    });
  });

  describe("M-series (መ) - labialized forms", () => {
    it("should convert mwa to ሟ", () => {
      const step1 = GeezEngine.transform("", "", "m");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ሟ");
    });
  });

  describe("R-series (ረ) - labialized forms", () => {
    it("should convert rwa to ሯ", () => {
      const step1 = GeezEngine.transform("", "", "r");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ሯ");
    });
  });

  describe("S-series (ሰ) - labialized forms", () => {
    it("should convert swa to ሷ", () => {
      const step1 = GeezEngine.transform("", "", "s");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ሷ");
    });
  });

  describe("SH-series (ሸ) - labialized forms", () => {
    it("should convert shwa to ሿ", () => {
      const step1 = GeezEngine.transform("", "", "s");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "h");
      expect(step2.transformedValue).toBe("ሽ");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "w");
      const step4 = GeezEngine.transform(step3.transformedValue, "", "a");
      expect(step4.transformedValue).toBe("ሿ");
    });
  });

  describe("B-series (በ) - labialized forms", () => {
    it("should convert bwa to ቧ", () => {
      const step1 = GeezEngine.transform("", "", "b");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ቧ");
    });
  });

  describe("T-series (ተ) - labialized forms", () => {
    it("should convert twa to ቷ", () => {
      const step1 = GeezEngine.transform("", "", "t");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ቷ");
    });
  });

  describe("CH-series (ቸ) - labialized forms", () => {
    it("should convert chwa to ቿ", () => {
      const step1 = GeezEngine.transform("", "", "c");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "h");
      expect(step2.transformedValue).toBe("ች");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "w");
      const step4 = GeezEngine.transform(step3.transformedValue, "", "a");
      expect(step4.transformedValue).toBe("ቿ");
    });
  });

  describe("N-series (ነ) - labialized forms", () => {
    it("should convert nwa to ኗ", () => {
      const step1 = GeezEngine.transform("", "", "n");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ኗ");
    });
  });

  describe("NY-series (ኘ) - labialized forms", () => {
    it("should convert Nwa to ኟ (using capital N)", () => {
      const step1 = GeezEngine.transform("", "", "N");
      expect(step1.transformedValue).toBe("ኝ");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ኟ");
    });
  });

  describe("Z-series (ዘ) - labialized forms", () => {
    it("should convert zwa to ዟ", () => {
      const step1 = GeezEngine.transform("", "", "z");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ዟ");
    });
  });

  describe("ZH-series (ዠ) - labialized forms", () => {
    it("should convert zhwa to ዧ", () => {
      const step1 = GeezEngine.transform("", "", "z");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "h");
      expect(step2.transformedValue).toBe("ዥ");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "w");
      const step4 = GeezEngine.transform(step3.transformedValue, "", "a");
      expect(step4.transformedValue).toBe("ዧ");
    });
  });

  describe("D-series (ደ) - labialized forms", () => {
    it("should convert dwa to ዷ", () => {
      const step1 = GeezEngine.transform("", "", "d");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ዷ");
    });
  });

  describe("J-series (ጀ) - labialized forms", () => {
    it("should convert jwa to ጇ", () => {
      const step1 = GeezEngine.transform("", "", "j");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ጇ");
    });
  });

  describe("T-ejective series (ጠ) - labialized forms", () => {
    it("should convert Twa to ጧ", () => {
      const step1 = GeezEngine.transform("", "", "T");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ጧ");
    });
  });

  describe("CH-ejective series (ጨ) - labialized forms", () => {
    it("should convert Cwa to ጯ", () => {
      const step1 = GeezEngine.transform("", "", "C");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ጯ");
    });
  });

  describe("P-ejective series (ጰ) - labialized forms", () => {
    it("should convert Pwa to ጷ", () => {
      const step1 = GeezEngine.transform("", "", "P");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ጷ");
    });
  });

  describe("S-ejective series (ጸ) - labialized forms", () => {
    it("should convert Swa to ጿ", () => {
      const step1 = GeezEngine.transform("", "", "S");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ጿ");
    });
  });

  describe("F-series (ፈ) - labialized forms", () => {
    it("should convert fwa to ፏ", () => {
      const step1 = GeezEngine.transform("", "", "f");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ፏ");
    });
  });

  describe("P-series (ፐ) - labialized forms", () => {
    it("should convert pwa to ፗ", () => {
      const step1 = GeezEngine.transform("", "", "p");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ፗ");
    });
  });

  describe("V-series (ቨ) - labialized forms", () => {
    it("should convert vwa to ቯ", () => {
      const step1 = GeezEngine.transform("", "", "v");
      const step2 = GeezEngine.transform(step1.transformedValue, "", "w");
      const step3 = GeezEngine.transform(step2.transformedValue, "", "a");
      expect(step3.transformedValue).toBe("ቯ");
    });
  });
});
