# Proyecto: Sistema de Registro de Usuarios
**Alumno:** Luis Hernández  
**Materia:** Diseño y Arquitectura de Software  
**Fecha:** Abril 2026

---

## ¿Qué problema resuelve mi aplicación?
Esta aplicación permite registrar y autenticar usuarios en una base de datos.

---

## ¿Cuál era el problema del monolito?
Tiene limite muy corto, pocas ejecucuioens.

---

## ¿Qué responsabilidad tiene cada microservicio?
**Servicio A:**  
Recibe las solicitudes de registro del usuario y se encarga de enviarlas al otro servicio para su procesamiento.

**Servicio B:**  
Procesa la información recibida y responde con la confirmación del registro.

---

## ¿Cómo se comunican los servicios?
Con HTTP Post. 

---

---

## ¿Qué pasa si el Servicio B se cae?
Cuando detuve el Servicio B y envié una solicitud, el sistema no falló completamente. El Servicio A respondió indicando que el registro se realizó pero que el Servicio B estaba caído aun guarda los datos. 
---

## Cómo levantar el proyecto
bash
# 1. Clonar el repositorio
git clone https://github.com/oft24/luis-hdz-microservicios.git

# 2. Entrar a la carpeta
cd luis-hdz-microservicios/microservicios

# 3. Configurar las variables de entorno en docker-compose.yml
# (si aplica para base de datos)

# 4. Levantar
docker-compose up --build -d

# 5. Abrir en el navegador
http://54.197.187.202:3000


Reflexión Final
[Un párrafo libre. ¿Qué fue lo más difícil? 
Lo más difícil fue la creacion de los dockers dentro de la carpeta debido que me confundi bastante veces con como vienen las carpetas además de las estructuras de las carpetas por la termial de Linux o en la creación de mkdir, me confundí con algunas carpetas que cree de mas y la estructura quedaba mal.
¿Qué entendieron que antes no entendían? los microservicios aunque también batalle con la terminal de Linux debido que no recordaba bien el funcionamiento de los comandos.
 ¿En qué situación real usarían microservicios?
En la creación de una pagina para evitar que falle o cuando necesito que funcione si o si. 


## Checklist de Autoevaluación

Antes de entregar, el alumno debe marcar cada punto. Si alguno no está marcado, la entrega está incompleta:

MONOLITO  
[x] El código del monolito original está en la carpeta /monolito  
[x] El Dockerfile del monolito existe y es funcional  
[x] Hay captura del docker build sin errores  
[x] Hay captura del docker run con el contenedor corriendo  
[x] Hay captura de Apache Benchmark mostrando saturación  

README  
[x] Explica el dominio de la aplicación  
[x] Explica el problema del monolito con sus propias palabras  
[x] Define la responsabilidad de cada servicio en una oración  
[x] Explica la comunicación entre servicios  
[x] Incluye los comandos para levantar el proyecto  
[x] Incluye la reflexión final  
