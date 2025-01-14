# playwright-typescript-pom-tesut

## Automatización de Checkout en Sauce Demo usando Playwright

#### **Objetivo**

Automatizar el proceso de compra en Sauce Demo utilizando el patrón  **Page Object Model (POM)**  con Playwright.

#### **Requisitos**

1.  **Acceder a Sauce Demo**:

    -   Iniciar sesión con las credenciales:
        -   **Username:**  `standard_user`
        -   **Password:**  `secret_sauce`
2.  **Flujo de Compra**:

    -   Buscar un producto y añadirlo al carrito.
    -   Proceder al checkout y rellenar la información de envío:
        -   **First Name:**  `John`
        -   **Last Name:**  `Doe`
        -   **Postal Code:**  `90210`
    -   Finalizar el checkout y verificar el mensaje de éxito:  `"THANK YOU FOR YOUR ORDER"`.
3.  **Estructura del código**:

    -   Crear un  **Page Object Model (POM)**  con funciones para:
        -   Login
        -   Añadir al carrito
        -   Proceder al checkout
        -   Finalizar la compra
4.  **Test en Playwright**:

    -   Escribir un test utilizando el POM para automatizar el flujo completo de compra.