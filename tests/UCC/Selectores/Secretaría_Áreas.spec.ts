import { test, expect } from '@playwright/test';

test('Secretarías y Áreas', async ({ page }) => {
    await page.goto('https://www.ucc.edu.ar/');

    //Validar que la página cargo correctamente
    await expect(page).toHaveURL('https://www.ucc.edu.ar/');
    await expect(page).toHaveTitle(/Universidad Católica de Córdoba/);

    //Validaciones del Selector Secretarías y Áreas
    await page.getByRole('button', { name: 'Secretarías y áreas'}).click();
    await page.getByRole('link', { name: 'Secretaría Académica' }).click();
    await expect(page).toHaveURL(/academica/, { timeout: 10000 });
    await expect(page.locator('h1')).toHaveText('Secretaría Académica');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    page.close();
});