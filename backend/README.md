Backend de app No Country, por ahora sin nombre :)

## Ejecutar proyecto

Para arrancar el proyecto por primera vez se necesita tener instalado lando (https://lando.dev)

Una vez instalado ejecutar

`lando start`

Esto creará en el entorno para poder trabajar

Finalizado este proceso, podremos arrancar el proyecto quedara iniciado y podremos volver a arrancar el proyecto de nuevo usando el mismo comando

Para parar lando usaremos

`lando stop`

## Uso diario

Lando te crea un entorno de trabajo equivalente a tener todo instalado localmente, por lo que todo lo que necesitemos ejecutar, como comandos de artisan, scripts de php o acceder a la base de datos, lo haremos a través del comando `lando`

e.g.

Crear un controller

`lando artisan make:controller TestController`

Acceder a la base de datos

`lando mysql`

Ejecutar un script custom de php

`lando php folder/folder2/test.php`

---

Podes ver todos los demás comandos ejecutando `lando`

# Endpoints:

Las rutas tienen la misma estructura la mayoría:

## Bookings

#### GET

Obtener todas las reservas

`api/bookings`

#### GET

Obtener una reserva individual

`api/bookings/{booking-id}`

#### POST

Agregar una reserva

`api/bookings`

body:

```json
{
    "product_id": "12"    // "required|integer",
    "client_id": "32"     // "required|integer",
    "state": "1"         // "required|in:1,2,3", 1. New, 2. Pending, 3. Accepted
}
```

#### PUT/PATCH

Actualizar una reserva individual

`api/bookings/{booking-id}`

body:

```json
{
    "product_id": "12"    // "required|integer",
    "client_id": "32"     // "required|integer",
    "state": "1"         // "required|in:1,2,3", 1. New, 2. Pending, 3. Accepted
}
```

#### DELETE

Borrar una reserva

`api/bookings/{booking-id}`

---

## Vendors

#### GET

Obtener todas los vendedores

`api/vendors`

#### GET

Obtener un vendedor(Este esta relacionado directamente con un usuario) y los productos que esté vendiendo

`api/vendors/{user-id}`

#### POST

Agregar un vendedor

`api/vendors`

body:

```json
{
    "user_id": "10"    // "required|integer",
    "product_id": "20"     // "required|integer",
}
```

#### PUT/PATCH

Actualizar un vendedor(Aqui si va el id del vendedor)

`api/vendors/{vendor-id}`

body:

```json
{
    "user_id": "10"    // "required|integer",
    "product_id": "20"     // "required|integer",
}
```

#### DELETE

Borrar un vendedor solo si es de rol admin([1,2])

`api/vendors/{vendors-id}`

## Carousels

#### GET

Obtener todos los carruseles

`api/carousels`

#### GET

Obtener un carrusel individual

`api/carousels/{id}`

#### POST

Crear un nuevo carrusel

`api/carousels`

body:

```JSON
{
    "image_name": "image_name",
    "type": "type",
    "link": "link",
}
```

#### PUT/PATCH

Actualizar un carrusel individual

`api/carousels/{id}`

body:

```JSON
{
    "image_name": "image_name",
    "type": "type",
    "link": "link",
}
```

#### DELETE

Borrar un carrusel

`api/carousels/{id}`

## City

#### GET

Obtener todas las ciudades

`api/cities`

#### GET

Obtener una ciudad individual

`api/cities/{id}`

POST
Crear una nueva ciudad

`api/cities`

body:

```JSON
{
    "city_name": "City Name",
    "country_name": "Country Name",
    "post_code": "Post Code",
}
```

PUT/PATCH
Actualizar una ciudad individual

`api/cities/{id}`

body:

```JSON
{
    "city_name": "City Name",
    "country_name": "Country Name",
    "post_code": "Post Code",
}
```

#### DELETE

Borrar una ciudad

`api/cities/{id}`

## Clients

#### GET

Obtener todos los clientes

`api/clients`

#### GET

Obtener un cliente individual

`api/clients/{id}`

#### POST

Crear un nuevo cliente

`api/clients`

body:

```JSON
{
    "user_id": "User ID",
    "product_id": "Product ID",
    "phone_number": "Phone Number",
}
```

#### PUT/PATCH

Actualizar un cliente individual

`api/clients/{id}`

body:

```JSON
{
    "user_id": "User ID",
    "product_id": "Product ID",
    "phone_number": "Phone Number",
}
```

#### DELETE

Borrar un cliente

`api/clients/{id}`

## Products

#### GET

Obtener todos los productos

`api/products`

#### Query Parameters:

year: Filtrar por año.
brand: Filtrar por marca.
price: Filtrar por precio.
is_offer: Filtrar por si está en oferta o no.
is_trend: Filtrar por si es tendencia o no.
condition: Filtrar por condición.
city: Filtrar por ciudad.
country: Filtrar por país.
calification: Filtrar por calificación.

#### GET

Obtener un producto individual

`api/products/{id}`

#### POST

Crear un nuevo producto

`api/products`

body:

```JSON
{
    "name": "Product Name",
    "description": "Product Description",
    "year": "2023",
    "brand": "Brand Name",
    "price": "100.00",
    "is_offer": false,
    "is_trend": false,
    "condition": "New",
    "city_id": 1,
    "country_id": 1,
    "calification": 5,
}
```

#### PUT/PATCH

Actualizar un producto individual

`api/products/{id}`

body:

```JSON
{
    "name": "Product Name",
    "description": "Product Description",
    "year": "2023",
    "brand": "Brand Name",
    "price": "100.00",
    "is_offer": false,
    "is_trend": false,
    "condition": "New",
    "city_id": 1,
    "country_id": 1,
    "calification": 5,
}
```

#### DELETE

Borrar un producto

`api/products/{id}`

## Sale

#### GET

Obtener todas las ventas

`api/sales`

#### GET

Obtener una venta individual

`api/sales/{id}`

#### POST

Crear una nueva venta

`api/sales`

body:

```JSON
{
    "booking_id": "Booking ID",
    "product_id": "Product ID",
    "comment": "Comment",
}
```

#### PUT/PATCH

Actualizar una venta individual

`api/sales/{id}`

body:

```JSON
{
    "booking_id": "Booking ID",
    "product_id": "Product ID",
    "comment": "Comment",
}
```

#### DELETE

Borrar una venta

`api/sales/{id}`

## User

#### GET

Obtener todos los usuarios

`api/users`

#### GET

Obtener un usuario individual

`api/users/{id}`

#### POST

Crear un nuevo usuario

`api/users`

body:

```JSON
{
    "name": "Name",
    "lastname": "Lastname",
    "email": "Email",
    "password": "Password",
    "role": "1|2|3|4",
    "document": "Document",
}
```

#### PUT/PATCH

Actualizar un usuario individual

`api/users/{id}`

body:

```JSON
{
    "name": "Name",
    "lastname": "Lastname",
    "email": "Email",
    "password": "Password",
    "role": "1|2|3|4",
    "document": "Document",
}
```

#### DELETE

Borrar un usuario

`api/users/{id}`


## Testimonials

#### GET

Obtener todos los testimonios

`api/testimonials`

#### GET

Obtener un testimonio individual

`api/testimonials/{id}`

#### POST

Crear un nuevo testimonio

`api/testimonials`

body:

```JSON
{
    "client_id": "5", // "required|integer",
    "company": "name_company",// "required",
    "icon_company": "url del icono",// "required",
    "comment": "testimonio del cliente",// "required",
    "avatar": "url del avatar del cliente",// "required",
    "position": "CEO|COO|Customer|otro",// "required",
}
```

#### PUT/PATCH

Actualizar un usuario individual

`api/testimonials/{id}`

body:

```JSON
{
    "client_id": "5", // "required|integer",
    "company": "name_company",// "required",
    "icon_company": "url del icono",// "required",
    "comment": "testimonio del cliente",// "required",
    "avatar": "url del avatar del cliente",// "required",
    "position": "CEO|COO|Customer|otro",// "required",
}
```

#### DELETE

Borrar un testimonio

`api/testimonials/{id}`
