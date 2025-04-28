const axios = require('axios');

describe('CBR Currency Rates API', () => {
  const BASE_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

  test('GET /daily_json.js returns valid currency data', async () => {
    const res = await axios.get(BASE_URL);

    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/application\/javascript/);

    const data = res.data;
    expect(data).toHaveProperty('Date');
    expect(data).toHaveProperty('PreviousDate');
    expect(data).toHaveProperty('Timestamp');
    expect(data).toHaveProperty('Valute');

    expect(data.Valute).toHaveProperty('USD');
    expect(data.Valute).toHaveProperty('EUR');

    const usd = data.Valute.USD;
    expect(usd).toHaveProperty('ID');
    expect(usd).toHaveProperty('NumCode');
    expect(usd).toHaveProperty('CharCode');
    expect(usd).toHaveProperty('Nominal');
    expect(usd).toHaveProperty('Name');
    expect(usd).toHaveProperty('Value');
    expect(usd).toHaveProperty('Previous');

    expect(typeof usd.Value).toBe('number');
    expect(usd.Value).toBeGreaterThan(0);

    expect(new Date(data.Date).toString()).not.toBe('Invalid Date');
  });
});
