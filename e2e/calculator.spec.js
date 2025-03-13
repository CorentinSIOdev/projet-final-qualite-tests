const { test, expect } = require('@playwright/test');
const path = require('path');

test('Interaction utilisateur complète : saisir calcul, voir résultat et historique', async ({ page }) => {
    await page.goto("http://localhost:3000");

    // Entre deux nombres
    await page.locator('#num1').click();
    await page.fill('#num1', '5');

    await page.locator('#num2').click();
    await page.fill('#num2', '3');

    // Selectionne une opération dans le menu déroulant
    await page.selectOption('#operation', '+');

    // Clique sur le bouton pour calculer
    await page.click('button');

    // Affiche le résultat
    await expect(page.locator('#result')).toContainText('8');

    // Vérifie l'historique
    const lastHistoryItem = page.locator('#history li').last();
    await expect(lastHistoryItem).toContainText('5 + 3 = 8');
});
