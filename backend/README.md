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
-----------------------------------------------------
Podes ver todos los demás comandos ejecutando `lando`