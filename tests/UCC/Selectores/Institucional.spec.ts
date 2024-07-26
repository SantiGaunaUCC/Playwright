import { test, expect } from '@playwright/test';

test('Prueba del Menú Superior 2', async ({ page }) => {
  await page.goto('https://www.ucc.edu.ar/');

  //Validar que la página cargó correctamente
  await expect(page).toHaveURL('https://www.ucc.edu.ar/');
  await expect(page).toHaveTitle(/Universidad Católica de Córdoba/);

    //Validaciones del Selector Institucional
    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Autoridades' }).click();
    await expect(page).toHaveURL(/autoridades/);
    await expect(page.locator('h2')).toHaveText('AUTORIDADES');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();
  
    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Calendario Académico' }).click();
    await expect(page).toHaveURL(/calendario/);
    await expect(page.locator('h5.title-secondary')).toHaveText('Calendario Académico 2024');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();
  
    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Digesto' }).click();
    await expect(page).toHaveURL(/digesto/);
    await expect(page.locator('h2.title-secondary').nth(0)).toHaveText('Digesto');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();
  
    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Institucional UCC' }).click();
    await expect(page).toHaveURL(/institucional-ucc/);
    await expect(page.locator('h3')).toHaveText('Estudiar en la Católica');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();
  
    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Identidad Visual' }).click();
    await expect(page).toHaveURL(/comunicacion-institucional\/comunicacion-institucional-identidad/);
    await expect(page.locator('h2')).toHaveText('Identidad Visual');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();
   
    page.close();
  });