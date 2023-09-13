/*
TODOS LOS COMANDOS SE ECUENTRA EN LA PAGINA DE JON MIRCHA
 COMANDOS QUE SE ME HACEN MAS IMPORTANTES 

--global => instalacion para todo el sistema opertaivo

git config --list => "listar las configuracion global"

git config --global -e =>  "abrir configuracion en VSC"

git config --global core.autocrlf true 

    - para estandarizar los saltos de línea en windows 
    -sirve para que no encuentre problemas a la hora de trabajar con alguien de linux o ios

git help config 
    - abre la documentacion en el navegador aun sin tener internet 

mkdir nombre-de-la-carpeta 
    -Crear una carpeta


archivo redme.md 
    -explicacion y documentacion de cada proyecto libreria, fremwork, 
    -crear un archivo touch README.md

touch .gitignore => crear un archivo .gitignore para ignorar archivos que le sean señalados

git init - inicializar un proyecto por primera ves y solo se jecuta 1 vez

FLUJO BASICO DE GIT 
    -Consta de 4 estados 
        - 3 de ellos son locales.
        - 1 mas en GitHub o plataforma 

    -Estados
        modified = modificado        
        staged = estar traqueado por git 
        commited =  la cabeza ya tiene los cambios localmente
        remote = se sube el codigo a la plataforma 

    working Directory 
        - directorio de trabajao 
        - es cualquier carpeta 

    git pull => descaragar del remoto al  direcotrio de trabajo las actualizaciones 

    revisar carpeta img flujo git.jpg

    git commit => modificas el archivo "COMMIT_EDITMSG" en vsc 

    CREAR RAMAS

    git branch => muestra las ramas existentes

    git branch un-nombre => crear una rama 
    
    git checkout nombre-de-la-rama => cambiar de rama

    git checkout -b nombre-de-la rama => crear y cambiar de rama

    git branch -d nombre-de-la-rama => borrar la rama

    cunado esta strabjanaod en otra roma y no estra creada para poder pusharlo 

        git push --set-upstream origin html  
                        o
            git push -u origin html =>  //mejor opcion 
              |
              |-->//siempre usar este comnado cuando no se este trabajando en la rama main 


    FUSION DE RAMAS 

        -Hay que posicionarnos en la rama principal siempre que vallamso a realizar esta accion 

        existen 2 resultados a la hora de fusionar 
            -Fast-Foward: La fusion se hace automaticamnete, no hay conflictos por resolver.
            -Manual Merge: La fusion hay que hacerla manual, para resolver conflictos de duplicacion de contenido.


        marge => comando para fusionar rama secundaria

            sin conflictos es una FAST-FOWART 

                -git merge nombre-rama-secundaria




        git branch -d nombre-de-la-rama => borrar la rama local
        git push origin --delete css ==> borra la rama en el local  y tambien del remoto ( GitHub )


        ***no es necesario tener todas las ramas en el  remoto 


        MANUAL MERGE
        



*/


/*
COMANDOS DE CONSOLA 

ls -a = mostrara todos los archivos hasta los ocultos





*/