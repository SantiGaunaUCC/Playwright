import { test, expect } from '@playwright/test';

test('Institucional', async ({ page }) => {
  await page.goto('https://www.ucc.edu.ar/');
  console.log('Página cargada');

  //Validar que la página cargó correctamente
  await expect(page).toHaveURL('https://www.ucc.edu.ar/');
  await expect(page).toHaveTitle(/Universidad Católica de Córdoba/);
  console.log('Título y URL validados');

   // Obtener tamaño del viewport
   const viewportSize = await page.viewportSize();
   const isMobile = viewportSize && viewportSize.width <= 767;
 
   // Si la prueba se está ejecutando en un dispositivo móvil, haz clic en el menú hamburguesa
   if (isMobile) {
     console.log('En dispositivo móvil, intentando hacer clic en el menú hamburguesa');
     const menuButton = await page.$('span.navbar-toggler-icon'); // Usar el selector correcto del botón del menú hamburguesa
     if (menuButton) {
       await menuButton.click();
       console.log('Menú hamburguesa clickeado');
     } else {
       console.log('Botón del menú hamburguesa no encontrado.');
     }
   } else {
     console.log('No es un dispositivo móvil, omitiendo clic en el menú hamburguesa.');
   }



  //Validaciones del Selector Institucional
  if (isMobile) {
    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Autoridades' }).click();
    await expect(page).toHaveURL(/autoridades/);
    await expect(page.locator('h2')).toHaveText('AUTORIDADES');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.locator('span.navbar-toggler-icon').click();

    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Calendario Académico' }).click();
    await expect(page).toHaveURL(/calendario/);
    await expect(page.locator('h5.title-secondary')).toHaveText('Calendario Académico 2024');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.locator('span.navbar-toggler-icon').click();

    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Digesto' }).click();
    await expect(page).toHaveURL(/digesto/);
    await expect(page.locator('h2.title-secondary').nth(0)).toHaveText('Digesto');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.locator('span.navbar-toggler-icon').click();

    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Institucional UCC' }).click();
    await expect(page).toHaveURL(/institucional-ucc/);
    await expect(page.locator('h3')).toHaveText('Estudiar en la Católica');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.locator('span.navbar-toggler-icon').click();

    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Identidad Visual' }).click();
    await expect(page).toHaveURL(/comunicacion-institucional\/comunicacion-institucional-identidad/);
    await expect(page.locator('h2')).toHaveText('Identidad Visual');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.locator('span.navbar-toggler-icon').click();

    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Comisión de Bienestar Universitario' }).nth(2).click();
    await expect(page).toHaveURL(/bienestar-universitario/);
    await expect(page.locator('h2').nth(0)).toHaveText('Comisión de Bienestar Universitario');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.locator('span.navbar-toggler-icon').click();

    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Plan de Economía Circular' }).click();
    await expect(page).toHaveURL(/proyeccion-responsabilidad-social\/responsabilidad-social-ecologia-integral/);
    await expect(page.locator('h2').nth(0)).toHaveText('Ecología Integral');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.locator('span.navbar-toggler-icon').click();

    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Cómo llegar a la Católica' }).click();
    await expect(page).toHaveURL(/como-venir/);
    await expect(page.locator('h2').nth(0)).toHaveText('Cómo venir a la Católica');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();

    await page.locator('span.navbar-toggler-icon').click();

    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Contactos UCC' }).click();
    await expect(page).toHaveURL(/contactos/);
    await expect(page.locator('h2')).toHaveText('CONTACTANOS');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();
  }
  else{
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
  
    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Comisión de Bienestar Universitario' }).nth(2).click();
    await expect(page).toHaveURL(/bienestar-universitario/);
    await expect(page.locator('h2').nth(0)).toHaveText('Comisión de Bienestar Universitario');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();
  
    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Plan de Economía Circular' }).click();
    await expect(page).toHaveURL(/proyeccion-responsabilidad-social\/responsabilidad-social-ecologia-integral/);
    await expect(page.locator('h2').nth(0)).toHaveText('Ecología Integral');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();
  
    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Cómo llegar a la Católica' }).click();
    await expect(page).toHaveURL(/como-venir/);
    await expect(page.locator('h2').nth(0)).toHaveText('Cómo venir a la Católica');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();
  
    await page.getByRole('button', { name: 'Institucional' }).click();
    await page.getByRole('link', { name: 'Contactos UCC' }).click();
    await expect(page).toHaveURL(/contactos/);
    await expect(page.locator('h2')).toHaveText('CONTACTANOS');
    await page.getByRole('link', { name: 'UCC', exact: true }).click();
  }

  page.close();

});