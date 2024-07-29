import { test, expect } from '@playwright/test';

test('Univeridad Jesuita', async ({ page }) => {
  await page.goto('https://www.ucc.edu.ar/');

  //Validar que la página cargó correctamente
  await expect(page).toHaveURL('https://www.ucc.edu.ar/');
  await expect(page).toHaveTitle(/Universidad Católica de Córdoba/);

  //Validaciones del Selector de Universidad Jesuita
  await page.getByRole('button', { name: 'Universidad Jesuita' }).click();
  await page.getByRole('link', { name: 'La Católica en números' }).click();
  await expect(page).toHaveURL(/catolica-numeros/);
  await expect(page.locator('h2')).toHaveText('La Católica en números');
  await page.getByRole('link', { name: 'UCC', exact: true }).click();

  await page.getByRole('button', { name: 'Universidad Jesuita' }).click();
  await page.getByRole('link', { name: 'Reseña histórica' }).click();
  await expect(page).toHaveURL(/resena-historica/);
  await expect(page.locator('h2.title-secondary')).toHaveText('Reseña histórica');
  await page.getByRole('link', { name: 'UCC', exact: true }).click();

  await page.getByRole('button', { name: 'Universidad Jesuita' }).click();
  await page.getByRole('link', { name: 'Misión y objetivo fundacional' }).click();
  await expect(page).toHaveURL(/mision-objetivo/);
  await expect(page.locator('h2')).toHaveText('Misión y objetivo fundacional');
  await page.getByRole('link', { name: 'UCC', exact: true }).click();

  await page.getByRole('button', { name: 'Universidad Jesuita' }).click();
  await page.getByRole('link', { name: 'Plan de Desarrollo' }).click();
  await expect(page).toHaveURL(/plan-desarrollo/);
  await expect(page.locator('h5.title-secondary')).toHaveText('Plan de Desarrollo Institucional 2021-2026');
  await page.getByRole('link', { name: 'UCC', exact: true }).click();

  await page.getByRole('button', { name: 'Universidad Jesuita' }).click();
  await page.getByRole('link', { name: 'Paradigma educativo' }).click();
  await expect(page).toHaveURL(/paradigma-educativo/);
  await expect(page.locator('h2')).toHaveText('Paradigma educativo');
  await page.getByRole('link', { name: 'UCC', exact: true }).click();

  await page.getByRole('button', { name: 'Universidad Jesuita' }).click();
  await page.getByRole('link', { name: 'Doctorados Honoris causa' }).click();
  await expect(page).toHaveURL(/doctorados-hc/);
  await expect(page.locator('h2')).toHaveText('Doctorados Honoris Causa');
  await page.getByRole('link', { name: 'UCC', exact: true }).click();

  await page.getByRole('button', { name: 'Universidad Jesuita' }).click();
  await page.getByRole('link', { name: 'Compañía de Jesús' }).click();
  await expect(page).toHaveURL(/compania-jesus/);
  await expect(page.locator('h2')).toHaveText('Compañía de Jesús');
  await page.getByRole('link', { name: 'UCC', exact: true }).click();

  await page.getByRole('button', { name: 'Universidad Jesuita' }).click();
  await page.getByRole('link', { name: 'Reporte de Impacto' }).click();
  await expect(page).toHaveURL(/reporte-impacto/);
  await expect(page.locator('h5.title-secondary')).toHaveText('Reporte de Impacto 2023');
  await page.getByRole('link', { name: 'UCC', exact: true }).click();

  await page.getByRole('button', { name: 'Universidad Jesuita' }).click();
  await page.getByRole('link', { name: 'Oración de la Universidad' }).click();
  await expect(page).toHaveURL(/oracion-universidad/);
  await expect(page.locator('h2')).toHaveText('ORACIÓN DE LA UNIVERSIDAD');
  await page.getByRole('link', { name: 'UCC', exact: true }).click();
  
  page.close();
});