import { numberWithCommas } from "./numberWithCommas";

describe("numberWithCommas", () => {
  test("should keep numbers less than one thousand the same", () => {
    const hundredsNumber = 500;
    const hundredsString = "500";
    const expectedHundredsNumberWithCommas = "500";

    expect(numberWithCommas(hundredsNumber)).toBe(
      expectedHundredsNumberWithCommas
    );
    expect(numberWithCommas(hundredsString)).toBe(
      expectedHundredsNumberWithCommas
    );
  });

  test("should add commas to numbers in the thousands ranges", () => {
    const thousandsNumber = 1234;
    const thousandsString = "1234";
    const expectedThousandsNumberWithCommas = "1,234";

    expect(numberWithCommas(thousandsNumber)).toBe(
      expectedThousandsNumberWithCommas
    );
    expect(numberWithCommas(thousandsString)).toBe(
      expectedThousandsNumberWithCommas
    );

    const tenThousandsNumber = 12345;
    const tenThousandsString = "12345";
    const expectedTenThousandsNumberWithCommas = "12,345";

    expect(numberWithCommas(tenThousandsNumber)).toBe(
      expectedTenThousandsNumberWithCommas
    );
    expect(numberWithCommas(tenThousandsString)).toBe(
      expectedTenThousandsNumberWithCommas
    );

    const hundredThousandsNumber = 123456;
    const hundredThousandsString = "123456";
    const expectedHundredThousandsNumberWithCommas = "123,456";

    expect(numberWithCommas(hundredThousandsNumber)).toBe(
      expectedHundredThousandsNumberWithCommas
    );
    expect(numberWithCommas(hundredThousandsString)).toBe(
      expectedHundredThousandsNumberWithCommas
    );
  });

  test("should add commas to numbers in the millions ranges", () => {
    const millionsNumber = 1234567;
    const millionsString = "1234567";
    const expectedMillionsNumberWithCommas = "1,234,567";

    expect(numberWithCommas(millionsNumber)).toBe(
      expectedMillionsNumberWithCommas
    );
    expect(numberWithCommas(millionsString)).toBe(
      expectedMillionsNumberWithCommas
    );

    const tenMillionsNumber = 12345678;
    const tenMillionsString = "12345678";
    const expectedTenMillionsNumberWithCommas = "12,345,678";

    expect(numberWithCommas(tenMillionsNumber)).toBe(
      expectedTenMillionsNumberWithCommas
    );
    expect(numberWithCommas(tenMillionsString)).toBe(
      expectedTenMillionsNumberWithCommas
    );

    const hundredMillionsNumber = 123456789;
    const hundredMillionsString = "123456789";
    const expectedHundredMillionsNumberWithCommas = "123,456,789";

    expect(numberWithCommas(hundredMillionsNumber)).toBe(
      expectedHundredMillionsNumberWithCommas
    );
    expect(numberWithCommas(hundredMillionsString)).toBe(
      expectedHundredMillionsNumberWithCommas
    );
  });

  test("should add commas to numbers in the billions ranges", () => {
    const billionsNumber = 1234567890;
    const billionsString = "1234567890";
    const expectedBillionsNumberWithCommas = "1,234,567,890";

    expect(numberWithCommas(billionsNumber)).toBe(
      expectedBillionsNumberWithCommas
    );
    expect(numberWithCommas(billionsString)).toBe(
      expectedBillionsNumberWithCommas
    );

    const tenBillionsNumber = 12345678901;
    const tenBillionsString = "12345678901";
    const expectedTenBillionsNumberWithCommas = "12,345,678,901";

    expect(numberWithCommas(tenBillionsNumber)).toBe(
      expectedTenBillionsNumberWithCommas
    );
    expect(numberWithCommas(tenBillionsString)).toBe(
      expectedTenBillionsNumberWithCommas
    );

    const hundredBillionsNumber = 123456789012;
    const hundredBillionsString = "123456789012";
    const expectedHundredBillionsNumberWithCommas = "123,456,789,012";

    expect(numberWithCommas(hundredBillionsNumber)).toBe(
      expectedHundredBillionsNumberWithCommas
    );
    expect(numberWithCommas(hundredBillionsString)).toBe(
      expectedHundredBillionsNumberWithCommas
    );
  });
});
