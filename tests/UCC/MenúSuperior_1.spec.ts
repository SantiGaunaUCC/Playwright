import { test, expect } from '@playwright/test';

test('Prueba del Menú Superiror 1', async ({ page }) => {
  await page.goto('https://www.ucc.edu.ar/');
  
  // Validar que la página cargó correctamente
  await expect(page).toHaveURL('https://www.ucc.edu.ar/');
  await expect(page).toHaveTitle(/Universidad Católica de Córdoba/);

  //Validaciones de Botones Modo claro/oscuro, Idioma
  await page.getByRole('navigation').locator('button').nth(1).click();
  await expect(page.getByRole('navigation').locator('button').nth(1)).toBeVisible();
  await page.getByRole('navigation').locator('button').nth(1).click();
  await page.locator('.svg-inline--fa').first().click();
  await page.locator('.svg-inline--fa > path').first().click();

  // Validar navegación al Buscador
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.nav-link').first().click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/buscador/); // Reemplazar con la URL esperada
  page1.close();

  // Validar navegación de "CONTACTANOS"
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'CONTACTANOS', exact: true }).click();
  const page2 = await page2Promise;
  await expect(page2).toHaveURL('https://api.whatsapp.com/send/?phone=5493512012536&text&type=phone_number&app_absent=0'); // Reemplazar con la URL esperada
  page2.close();

  // Navegar y validar otros enlaces
  await page.getByRole('link', { name: 'INGRESO' }).click();
  await expect(page).toHaveURL(/ingreso/);
  
  await page.getByRole('link', { name: 'UCC', exact: true }).click();
  await expect(page).toHaveURL('https://www.ucc.edu.ar/');

  await page.getByRole('link', { name: 'CAMPUS UCC RÍO CUARTO' }).click();
  await expect(page).toHaveURL(/campus-ucc-rio-cuarto/); 

  await page.getByRole('link', { name: 'UCC', exact: true }).click();
  await expect(page).toHaveURL('https://www.ucc.edu.ar/');

  await page.getByRole('navigation').getByRole('link', { name: 'ALUMNI UCC' }).click();
  await expect(page).toHaveURL(/alumni/); 

  await page.getByRole('link', { name: 'UCC', exact: true }).click();
  await expect(page).toHaveURL('https://www.ucc.edu.ar/');

  await page.getByRole('button', { name: 'MI UCC' }).click();
  
  // Validar navegación de "AUTOGESTIÓN"
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'AUTOGESTIÓN' }).click();
  const page3 = await page3Promise;
  await expect(page3).toHaveURL('https://age.ucc.edu.ar/web/siuccweb_php/login.php'); 
  page3.close();

  await page.getByRole('button', { name: 'MI UCC' }).click();
  
  // Validar navegación de "CAMPUS VIRTUAL"
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'CAMPUS VIRTUAL', exact: true }).click();
  const page4 = await page4Promise;
  await expect(page4).toHaveURL(/campus-virtual/); 
  page4.close();

  page.close();
});
