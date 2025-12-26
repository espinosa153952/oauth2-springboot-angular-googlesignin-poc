# Política de Privacidad (Cumplimiento RGPD)

**Última actualización:** 26 de diciembre de 2025

Esta aplicación utiliza el servicio de autenticación de **Google Sign-In**. Al utilizar nuestro servicio, usted acepta el tratamiento de sus datos conforme a esta política.

## 1. Datos que Recopilamos
A través del flujo de OAuth2/OpenID Connect, accedemos a los siguientes datos de su cuenta de Google:
- **Identificador único de Google (Subject ID).**
- **Nombre y apellidos.**
- **Dirección de correo electrónico.**
- **URL de la imagen de perfil.**

## 2. Finalidad del Tratamiento
Los datos se utilizan exclusivamente para:
- Autenticar su identidad en la plataforma.
- Gestionar roles de acceso (ROLE_USER, ROLE_ADMIN) dentro de nuestro servidor de recursos.
- Personalizar la experiencia de usuario en el frontend Angular.

**Base legal:** El consentimiento explícito del usuario al hacer clic en "Iniciar sesión con Google".

## 3. Almacenamiento y Seguridad
- **Persistencia:** Los datos del perfil de Google se almacenan en nuestra base de datos MySQL (Tabla `google_user`) para facilitar sesiones futuras.
- **Seguridad:** Los tokens de acceso (JWT) se emiten siguiendo el estándar OAuth2 y se transmiten de forma cifrada. 
- **CIA:** Aplicamos cifrado en reposo para datos sensibles y auditorías periódicas de acceso.

## 4. Derechos del Usuario (Derechos ARCO)
Según el RGPD, usted tiene derecho a:
- **Acceso:** Saber qué datos tenemos de usted.
- **Rectificación:** Corregir datos inexactos.
- **Supresión (Derecho al olvido):** Solicitar la eliminación total de su cuenta y sus datos de Google de nuestra base de datos.
- **Portabilidad:** Solicitar una copia de sus datos en formato estructurado (proporcionado mediante el SBOM del usuario).

Para ejercer estos derechos, contacte con nuestro Delegado de Protección de Datos en: `privacy@tu-dominio.com`.

## 5. Transferencias a Terceros
No vendemos ni compartimos sus datos personales con terceras partes ajenas al ecosistema de autenticación de Google.