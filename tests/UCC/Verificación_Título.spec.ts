import { test, expect } from '@playwright/test';

test('Obtiene el título', async ({page}) => {
    await page.goto('https://www.ucc.edu.ar/');
    await expect(page).toHaveTitle(/Universidad Católica de Córdoba | UCC/);
    page.close();
});
