---
title: 'Requerimientos 📃.'
description: 'Spring Boot es un marco de desarrollo de aplicaciones Java que simplifica la configuración y el desarrollo de aplicaciones'
pubDate: 'Dec 27 2022'
heroImage: '/blog-placeholder-3.jpg'
---

Un proyecto de Spring Boot, necesitan algunas cosas. En este caso, utilizaremos Maven como gestor de dependencias, aunque existen otros gestores de dependencias como Gradle.

## Instalación de Java (20) 🍵.

La descarga de Java en su versión 20 la puedes realizar desde la siguiente [página](https://www.oracle.com/java/technologies/javase/jdk20-archive-downloads.html) 📎, recuerda elegir correctamente tu sistemas Operativo.

- Instalación Linux (Ubuntu).
    
    ```bash
    #El nombre puede variar
    sudo dpkg -i jdk-20.0.2_linux-x64_bin.deb
    ```
    
    Puede que al momento de ejecutar el comando `java —version` nos indique que no esta instalado, para dar solución a este problema, debes de ingresar los siguiente comandos.
    
    ```bash
    # Primer Comando.
    sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk-20/bin/java 1
    # Segundo Comando.
    sudo update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/jdk-20/bin/javac 1
    #Terc
    sudo update-alternatives --install /usr/bin/jar jar /usr/lib/jvm/jdk-20/bin/jar 1er comando.
    ```
    
    Recuerda que debes de cambiar `jdk-20` por la versión que hayas instalado de Java.
    

## Instalación de Maven ⬇️.

Puedes descargar esta herramienta desde la página oficial. Te recomiendo que descargues la última versión disponible, ya que también estamos trabajando con la última versión de Java.

```bash
# Descarga, recuerda que puede cambiar.
wget https://dlcdn.apache.org/maven/maven-3/3.8.8/binaries/apache-maven-3.8.8-bin.tar.gz
```

Ejecuta el siguiente comando para extraer los recursos en la ruta `/opt`.

```bash
sudo tar xzf apache-maven-3.8.8-bin.tar.gz -C /opt
```

Después, navega a la carpeta `/opt` y cambia el nombre de la carpeta. Este paso es necesario, ya que más adelante utilizaremos esa ruta.

```bash
sudo mv apache-maven-3.8.8/ maven/
```

Luego, ve a la siguiente ruta.

```bash
cd /etc/profile.d/
```

Crea el siguiente archivo.

```bash
touch maven.sh
```

Ingresa las siguientes líneas dentro del mismo archivo.

```bash
export M2_HOME=/opt/maven
export PATH=${M2_HOME}/bin:${PATH}
```

[< Post Anterior](/blog/java/que-es-spring-boot) | [Siguiente Post >](/blog/java/creacion-de-un-proyecto)
