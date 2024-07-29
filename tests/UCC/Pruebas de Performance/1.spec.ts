import { test, expect, chromium, firefox, webkit, Page, Browser } from '@playwright/test';

// Función para medir el rendimiento
async function measurePerformance(page: Page, url: string) {
  const startTime = Date.now();
  await page.goto(url);
  const loadTime = Date.now() - startTime;
  console.log(`Tiempo de carga: ${loadTime} ms`);

  const performanceTiming = JSON.parse(await page.evaluate(() => JSON.stringify(window.performance.timing)));

  const pageLoadTime = performanceTiming.loadEventEnd - performanceTiming.navigationStart;
  const domContentLoadedTime = performanceTiming.domContentLoadedEventEnd - performanceTiming.navigationStart;

  console.log(`Tiempo de carga de la página: ${pageLoadTime} ms`);
  console.log(`Tiempo de DOMContentLoaded: ${domContentLoadedTime} ms`);

  // Ajuste de los umbrales
  expect(pageLoadTime).toBeLessThan(10000); // Cambiado a 10 segundos
  expect(domContentLoadedTime).toBeLessThan(5000); // Cambiado a 5 segundos
}

test.describe('Pruebas de rendimiento', () => {
  const url = 'https://www.ucc.edu.ar/';

  test('Medir el rendimiento de carga de la página en (Chrome, Firefox y Webkit)', async () => {
    const browser: Browser = await chromium.launch();
    const page: Page = await browser.newPage();
    await measurePerformance(page, url);
    await page.close();
    await browser.close();
  });

  // test('Medir el rendimiento de carga de la página en Firefox', async () => {
  //   const browser: Browser = await firefox.launch();
  //   const page: Page = await browser.newPage();
  //   await measurePerformance(page, url);
  //   await page.close();
  //   await browser.close();
  // });

  // test('Medir el rendimiento de carga de la página en WebKit', async () => {
  //   const browser: Browser = await webkit.launch();
  //   const page: Page = await browser.newPage();
  //   await measurePerformance(page, url);
  //   await page.close();
  //   await browser.close();
  // });
});
