import { test, expect } from '@playwright/test';

test('Medición de tiempos de carga y métricas de rendimiento', async ({ page }) => {
  // Inicia la medición del tiempo
  const startTime = Date.now();

  // Navega a la página deseada
  await page.goto('https://www.ucc.edu.ar/');

  // Calcula el tiempo de carga total
  const loadTime = Date.now() - startTime;
  console.log(`Tiempo de carga: ${loadTime}ms`);

  // Espera hasta que se complete la carga de la red con un mayor tiempo de espera
  await page.waitForLoadState('networkidle', { timeout: 60000 });

  // Obtén las métricas de rendimiento
  const metrics = await page.evaluate(() => JSON.parse(JSON.stringify(window.performance)));

  // Extrae métricas específicas
  const fcp = metrics.timing.domContentLoadedEventEnd - metrics.timing.navigationStart;
  const tti = metrics.timing.loadEventEnd - metrics.timing.navigationStart;

  // Imprime las métricas de rendimiento
  console.log(`First Contentful Paint (FCP): ${fcp}ms`); //mide el tiempo desde que la navegación comienza 
  //hasta que cualquier contenido (texto, imagen, SVG, etc.) se renderiza por primera vez en la pantalla.
  // Esto es importante porque le da al usuario una señal visual de que la página está comenzando a cargarse.


  console.log(`Time to Interactive (TTI): ${tti}ms`); //mide el tiempo desde que la navegación comienza hasta
  // que la página se vuelve completamente interactiva. Esto significa que la página ha cargado lo suficiente
  //como para responder a la interacción del usuario en un tiempo razonable.

  page.close();
});
