import { numWithCommas } from "./numWithCommas";

describe("numWithCommas", () => {
  test("should keep numbers less than one thousand the same", () => {
    const hundredsNum = 500;
    const hundredsString = "500";
    const expectedHundredsNumWithCommas = "500";

    expect(numWithCommas(hundredsNum)).toBe(expectedHundredsNumWithCommas);
    expect(numWithCommas(hundredsString)).toBe(expectedHundredsNumWithCommas);
  });

  test("should add commas to numbers in the thousands ranges", () => {
    const thousandsNum = 1234;
    const thousandsString = "1234";
    const expectedThousandsNumWithCommas = "1,234";

    expect(numWithCommas(thousandsNum)).toBe(expectedThousandsNumWithCommas);
    expect(numWithCommas(thousandsString)).toBe(expectedThousandsNumWithCommas);

    const tenThousandsNum = 12345;
    const tenThousandsString = "12345";
    const expectedTenThousandsNumWithCommas = "12,345";

    expect(numWithCommas(tenThousandsNum)).toBe(
      expectedTenThousandsNumWithCommas
    );
    expect(numWithCommas(tenThousandsString)).toBe(
      expectedTenThousandsNumWithCommas
    );

    const hundredThousandsNum = 123456;
    const hundredThousandsString = "123456";
    const expectedHundredThousandsNumWithCommas = "123,456";

    expect(numWithCommas(hundredThousandsNum)).toBe(
      expectedHundredThousandsNumWithCommas
    );
    expect(numWithCommas(hundredThousandsString)).toBe(
      expectedHundredThousandsNumWithCommas
    );
  });

  test("should add commas to numbers in the millions ranges", () => {
    const millionsNum = 1234567;
    const millionsString = "1234567";
    const expectedMillionsNumWithCommas = "1,234,567";

    expect(numWithCommas(millionsNum)).toBe(expectedMillionsNumWithCommas);
    expect(numWithCommas(millionsString)).toBe(expectedMillionsNumWithCommas);

    const tenMillionsNum = 12345678;
    const tenMillionsString = "12345678";
    const expectedTenMillionsNumWithCommas = "12,345,678";

    expect(numWithCommas(tenMillionsNum)).toBe(
      expectedTenMillionsNumWithCommas
    );
    expect(numWithCommas(tenMillionsString)).toBe(
      expectedTenMillionsNumWithCommas
    );

    const hundredMillionsNum = 123456789;
    const hundredMillionsString = "123456789";
    const expectedHundredMillionsNumWithCommas = "123,456,789";

    expect(numWithCommas(hundredMillionsNum)).toBe(
      expectedHundredMillionsNumWithCommas
    );
    expect(numWithCommas(hundredMillionsString)).toBe(
      expectedHundredMillionsNumWithCommas
    );
  });

  test("should add commas to numbers in the billions ranges", () => {
    const billionsNum = 1234567890;
    const billionsString = "1234567890";
    const expectedBillionsNumWithCommas = "1,234,567,890";

    expect(numWithCommas(billionsNum)).toBe(expectedBillionsNumWithCommas);
    expect(numWithCommas(billionsString)).toBe(expectedBillionsNumWithCommas);

    const tenBillionsNum = 12345678901;
    const tenBillionsString = "12345678901";
    const expectedTenBillionsNumWithCommas = "12,345,678,901";

    expect(numWithCommas(tenBillionsNum)).toBe(
      expectedTenBillionsNumWithCommas
    );
    expect(numWithCommas(tenBillionsString)).toBe(
      expectedTenBillionsNumWithCommas
    );

    const hundredBillionsNum = 123456789012;
    const hundredBillionsString = "123456789012";
    const expectedHundredBillionsNumWithCommas = "123,456,789,012";

    expect(numWithCommas(hundredBillionsNum)).toBe(
      expectedHundredBillionsNumWithCommas
    );
    expect(numWithCommas(hundredBillionsString)).toBe(
      expectedHundredBillionsNumWithCommas
    );
  });
});
