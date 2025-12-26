# Política de Seguridad - AG Prueba Project

## Propósito
Este documento define el compromiso del proyecto con la tríada **CIA** (Confidencialidad, Integridad y Disponibilidad) según los estándares de la norma **ISO 27001**.

## Versiones Soportadas
Solo las versiones que se encuentran en la rama `main` reciben actualizaciones de seguridad activas.

| Versión | Soportada |
| ------- | --------- |
| 1.0.x   | ✅ Sí      |
| < 1.0   | ❌ No      |

## Notificación de Vulnerabilidades
**No abras un issue público para reportar una vulnerabilidad.** 

Si descubres un fallo de seguridad, por favor envía un correo a: `security-reports@tu-dominio.com`. 
Nuestro equipo responderá en un plazo máximo de 48 horas con un plan de mitigación.

## Controles Técnicos Implementados (Cumplimiento OKR)
Para reducir el riesgo de brechas de seguridad, este repositorio integra:
1. **Detección de Secretos (CIA):** Uso de Gitleaks en el pipeline para evitar la fuga de claves API o credenciales.
2. **Control de Software (Integridad):** Generación de **SBOM** (Software Bill of Materials) en cada build para auditar la cadena de suministro.
3. **Escaneo de Contenedores:** Análisis post-build con **Trivy** para detectar vulnerabilidades en las imágenes Docker.
4. **Protección de Identidad:** Implementación de PKCE para el flujo de OAuth2 en el frontend Angular.

## Directrices para Desarrolladores
- Nunca subas archivos `.env` o secretos al repositorio.
- Todas las dependencias deben ser escaneadas antes de ser promovidas a producción.
- Se requiere el uso de MFA (Multi-Factor Authentication) para cualquier acceso administrativo al servidor de autorización.