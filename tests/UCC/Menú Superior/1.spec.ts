import { test, expect } from '@playwright/test';

test('Prueba del Menú Superior 1', async ({ page }) => {
  await page.goto('https://www.ucc.edu.ar/');
  console.log('Página cargada');

  // Validar que la página cargó correctamente
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

  // Validaciones de Botones Modo claro/oscuro, Idioma
  if (isMobile) {
    await page.getByRole('navigation').locator('button').nth(3).click();
    await expect(page.getByRole('navigation').locator('button').nth(3)).toBeVisible();
    await page.getByRole('navigation').locator('button').nth(3).click();
    await page.locator('.svg-inline--fa').nth(3).click();
    await page.locator('.svg-inline--fa > path').nth(3).click();
    console.log('¡Modo claro/oscuro correcto! (Móvil)');
  } else {
    await page.getByRole('navigation').locator('button').nth(1).click();
    await expect(page.getByRole('navigation').locator('button').nth(1)).toBeVisible();
    await page.getByRole('navigation').locator('button').nth(1).click();
    await page.locator('.svg-inline--fa').first().click();
    await page.locator('.svg-inline--fa > path').first().click();
    console.log('¡Modo claro/oscuro correcto! (PC)');
  }






  // Validar navegación al Buscador
  if (isMobile) {
    const page1Promise = page.waitForEvent('popup');
    await page.locator('.d-lg-none > a').first().click();
    const page1 = await page1Promise;
    await expect(page1).toHaveURL(/buscador/); 
    console.log('¡Buscador Correcto! (Móvil)');
    page1.close();
  } 
  else{
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.nav-link').first().click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/buscador/);
  console.log('¡Buscador Correcto! (PC)');
  page1.close();
  }





  // Validar navegación de "CONTACTANOS"
  if (isMobile) {
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'CONTACTANOS', exact: true }).click();
    const page2 = await page2Promise;
    await expect(page2).toHaveURL('https://api.whatsapp.com/send/?phone=5493512012536&text&type=phone_number&app_absent=0', { timeout: 10000 });
    console.log('¡WSP Correcto! (Móvil)');
    page2.close();
  } else {
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'CONTACTANOS', exact: true }).click();
  const page2 = await page2Promise;
  await expect(page2).toHaveURL('https://api.whatsapp.com/send/?phone=5493512012536&text&type=phone_number&app_absent=0', { timeout: 10000 });
  console.log('¡WSP Correcto! (PC)');
  page2.close();
}

  

  // Navegar y validar otros enlaces
  if (isMobile) {
    await page.getByRole('link', { name: 'INGRESO' }).click();
    await expect(page).toHaveURL(/ingreso/, { timeout: 10000 });
    await page.locator('span.navbar-toggler-icon').click();
  
    await page.getByRole('link', { name: 'CAMPUS UCC RÍO CUARTO' }).click();
    await expect(page).toHaveURL(/campus-ucc-rio-cuarto/, { timeout: 10000 });
    await page.locator('span.navbar-toggler-icon').click();
  
    await page.getByRole('navigation').getByRole('link', { name: 'ALUMNI UCC' }).click();
    await expect(page).toHaveURL(/alumni/, { timeout: 10000 });
    await page.locator('span.navbar-toggler-icon').click();
  
    await page.getByRole('button', { name: 'MI UCC' }).click();
    console.log('¡Ingreso, Campus RC y Alumni Correctos! (Móvil)');
  }
  else{
    await page.getByRole('link', { name: 'INGRESO' }).click();
    await expect(page).toHaveURL(/ingreso/, { timeout: 10000 });

    await page.getByRole('link', { name: 'CAMPUS UCC RÍO CUARTO' }).click();
    await expect(page).toHaveURL(/campus-ucc-rio-cuarto/, { timeout: 10000 });

    await page.getByRole('navigation').getByRole('link', { name: 'ALUMNI UCC' }).click();
    await expect(page).toHaveURL(/alumni/, { timeout: 10000 });

    await page.getByRole('button', { name: 'MI UCC' }).click();
    console.log('¡Ingreso, Campus RC y Alumni Correctos! (PC)');
  }



  // Validar navegación de "AUTOGESTIÓN"
  if (isMobile) {
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'AUTOGESTIÓN' }).click();
    const page3 = await page3Promise;
    await expect(page3).toHaveURL('https://age.ucc.edu.ar/web/siuccweb_php/login.php', { timeout: 10000 });
    page3.close();
    await page.getByRole('button', { name: 'MI UCC' }).click();
    console.log('¡Autogestión Correcto! (Móvil)');
  }
  else{
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'AUTOGESTIÓN' }).click();
    const page3 = await page3Promise;
    await expect(page3).toHaveURL('https://age.ucc.edu.ar/web/siuccweb_php/login.php', { timeout: 10000 });
    page3.close();
    await page.getByRole('button', { name: 'MI UCC' }).click();
    console.log('¡Autogestión Correcto! (PC)');
  }




  // Validar navegación de "CAMPUS VIRTUAL"
  if (isMobile) {
    const page4Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'CAMPUS VIRTUAL', exact: true }).click();
    const page4 = await page4Promise;
    await expect(page4).toHaveURL(/campus-virtual/, { timeout: 10000 });
    page4.close();
    await page.close();
    console.log('¡Campus Virtual Correcto! (Móvil)');
  }
  else{
    const page4Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'CAMPUS VIRTUAL', exact: true }).click();
    const page4 = await page4Promise;
    await expect(page4).toHaveURL(/campus-virtual/, { timeout: 10000 });
    page4.close();
    await page.close();
    console.log('¡Campus Virtual Correcto! (PC)');
}
});
