import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://age.ucc.edu.ar/web/siuccweb_php/login.php');
  await page.getByLabel('Clave UCC').click();
  await page.getByLabel('Clave UCC').fill('2457207');
  await page.getByLabel('Contraseña').click();
  await page.getByLabel('Contraseña').press('CapsLock');
  await page.getByLabel('Contraseña').fill('SantiG2120');
  await page.getByRole('button', { name: 'INGRESAR' }).click();
  page.close();
});