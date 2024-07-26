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

    await page.getByRole('button', { name: 'Secretarías y áreas'}).click();
    await page.getByRole('link', { name: 'Secretaría de Asuntos Económicos' }).click();
    await expect(page).toHaveURL(/asuntos-economicos/, { timeout: 10000 });
    await expect(page.locator('h1')).toHaveText('Secretaría de Asuntos Económicos');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.getByRole('button', { name: 'Secretarías y áreas'}).click();
    await page.getByRole('link', { name: 'Secretaría de Asuntos Internacionales' }).click();
    await expect(page).toHaveURL(/asuntos-internacionales/, { timeout: 10000 });
    await expect(page.locator('h1').nth(0)).toHaveText('Secretaría de Asuntos Internacionales');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.getByRole('button', { name: 'Secretarías y áreas'}).click();
    await page.getByRole('link', { name: 'Secretaría de Comunicación Institucional' }).click();
    await expect(page).toHaveURL(/comunicacion-institucional/, { timeout: 10000 });
    await expect(page.locator('h1').nth(0)).toHaveText('Secretaría de Comunicación Institucional');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.getByRole('button', { name: 'Secretarías y áreas'}).click();
    await page.getByRole('link', { name: 'Secretaría de Investigación y Vinculación Tecnológica' }).click();
    await expect(page).toHaveURL(/investigacion-vinculacion/, { timeout: 10000 });
    await expect(page.locator('h1').nth(0)).toHaveText('Secretaría de Investigación y Vinculación Tecnológica');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.getByRole('button', { name: 'Secretarías y áreas'}).click();
    await page.getByRole('link', { name: 'Secretaría de Pedagogía Universitaria' }).click();
    await expect(page).toHaveURL(/pedagogia-universitaria/, { timeout: 10000 });
    await expect(page.locator('h1').nth(0)).toHaveText('Secretaría de Pedagogía Universitaria');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.getByRole('button', { name: 'Secretarías y áreas'}).click();
    await page.getByRole('link', { name: 'Secretaría de Proyección y Responsabilidad Social Universitaria' }).click();
    await expect(page).toHaveURL(/proyeccion-responsabilidad-social/, { timeout: 10000 });
    await expect(page.locator('h1').nth(0)).toHaveText('Secretaría de Proyección y Responsabilidad Social Universitaria');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.getByRole('button', { name: 'Secretarías y áreas'}).click();
    await page.getByRole('link', { name: 'Departamento de Formación Humanística' }).click();
    await expect(page).toHaveURL(/formacion-humanistica/, { timeout: 10000 });
    await expect(page.locator('h1').nth(0)).toHaveText('Departamento de Formación Humanística');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.getByRole('button', { name: 'Secretarías y áreas'}).click();
    await page.getByRole('link', { name: 'Coordinación de Desarrollo' }).click();
    await expect(page).toHaveURL(/desarrollo/, { timeout: 10000 });
    await expect(page.locator('h1').nth(1)).toHaveText('Coordinación de Desarrollo');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();


    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Secretarías y áreas'}).click();
    await page.getByRole('link', { name: 'Sistema de Bibliotecas' }).nth(0).click();
    const page2 = await page2Promise;
    await expect(page2).toHaveURL('https://biblioteca.ucc.edu.ar/', { timeout: 10000 });
    page2.close();


    page.close();
});