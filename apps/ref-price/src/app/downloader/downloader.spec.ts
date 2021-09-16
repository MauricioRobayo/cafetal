import { downloadFileWithExponentialBackOff } from './downloader';

beforeEach(() => {
  jest.spyOn(Math, 'random').mockReturnValue(0);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('maxExecutionTime exceeded', () => {
  const maxExecutionTimeMs = 1000;
  const minRndDeltaMs = 25;
  const maxRndDeltaMs = 25;
  const cases = [
    {
      delayFactor: 1,
      expectedDelays: [0, 25, 50, 75, 100, 125, 150, 175, 200],
    },
    {
      delayFactor: 2,
      expectedDelays: [0, 50, 150, 350],
    },
  ];
  it.each(cases)(
    'should exponentially try to download delay factor of $delay',
    async ({ delayFactor, expectedDelays }) => {
      const logSpy = jest
        .spyOn(console, 'log')
        .mockImplementation(() => void null);
      const data = await downloadFileWithExponentialBackOff({
        delayFactor,
        minRndDeltaMs,
        maxRndDeltaMs,
        fetcher: () => new Promise((resolve) => resolve(null)),
        maxExecutionTimeMs,
      });

      expect(logSpy).toBeCalledTimes(expectedDelays.length);
      expect(logSpy.mock.calls).toEqual(
        expectedDelays.map((expectedDelay, index) => [
          'downloadFileWithExponentialBackOff',
          {
            delayMs: expectedDelay,
            elapseTimeMs: expect.any(Number),
            retries: index,
          },
        ])
      );
      expect(data.elapseTimeMs).toBeGreaterThanOrEqual(maxExecutionTimeMs);
      expect(data.maxExecutionExceeded).toBe(true);
      expect(data.retries).toBe(expectedDelays.length - 1);
      expect(data.status).toBe('failed');
    }
  );
});
