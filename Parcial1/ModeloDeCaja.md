# MODELO DE CAJA 

### En CSS, en general, hay dos tipos de cajas: **cajas en bloque** y **cajas en linea**. 
### Estas caracteristicas se refieren al modo como se comporta la caja en terminos de flujo de pagina y en relacion con otras cajas de la pagina:  

<br> 

### *Si una caja se define como un bloque, se comportara de las maneras siguientes:* 
> * La caja fuerza una salto de linea al llegar al final de la linea 
> * La caja se extendera en la direccion de la linea para llenar todo el espacion disponible que haya en su contenedor. En la mayoria de los casos, esto significa que la caja sera tan anccha como su contenedor, y se llenara el 100% del espacion disponible.
> * Se respetan las propiedades **width** y **height**.  
> * El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja. 

<br>
<br>

### A menos que decidamos cambiar el tipo de visualizacion a en linea, elementos como los encabezados (por ejemplo, h1) y todos los elementos p usan por defecto *block* como tipo de visualizacion externa. 

<br>

### Si una caja tiene una visualizacion externa de tipo **inline**, entonces: 
> * La caja no fuerza ningun salto de linea al llegar al final de la linea. 
> * Las propiedades **width** y **heigth** nno se aplican. 
> * Se aplican relleno, margen y bordes verticales, pero no mantienen alejadas otras cajas en linea. 
> * Se aplican relleno, margen y bordes horizontales, y mantienen alejadas otras cajas en linea. 

<br>
<br>
<br>

# ¿QUE ES EL MODELO DE CAJAS CSS? 

<br>

### El modelo de cajas CSS completo se aplica a cajas que presentan comportamiento en bloque; las cajas con comportamiento en linea solo usan una parte del comportamiento definido en el modelo de cajas.El modelo define como funcionan juntas las diferentes partes de una caja (margen, borde, relleno y contenido) para crear una caja que puedas ver en tu pagina. Para complicarlo un poco mas, hay un modelo de cajas estandar y un modelo de cajas alternativo. 

<br>
<br>

## PARTES DE UNA CAJA. 

### Alhacer una caja de tipo bloque en CSS tenemos los elementos siguientes: 

<br>

> * El **contenido de la caja** (o *context box*): El area donde se muestra el contenido, cuyo tamaño puede cambiarse utilizando propiedades como *width* y *heigth*. 
> * El **relleno de la caja** (o *padding box*): El relleno es espacio en blanco alrededor del contenido; es posible controlar su tamaño usando la propiedad **padding** y otras propiedades relacionadas. 
> * El **borde de la caja** (o *border box*): El borde de la caja envuelve el contenido y el de relleno. Es posible controlar su tamaño y estio utilizando la propiedad *border* y otras propiedades relacionadas. 
> El **margen de la caja** (o *margin box*): El margen es la capa mas externa. Envuelve el contenido, el relleno y el borde como espacion en blanco entre la caja y otros elementos. Es posible controlar su tamaño usando la propiedad *margin* y otras propiedades relacionadas. 

<br>
<br>
<br>

## EL MODELO DE CAJAS CSS ESTANDAR 

<br>

### En el modelo de cajas estandar, cuando estableces los atribbutos *width* y *heigth* para una caja, defines el ancho y el alto del contenido de la caja. Cualquier area de relleno y borde se añade a ese ancho y alto para obtener el tamaño total que ocupa la caja. 

<br>
<br>

## MODELO DE CAJAS CSS ALTERNATIVO 

<br>

### Con este modelo, cualquier ancho es el ancho de la caja visible en la pagina, por lo tanto, el ancho del area de contenido es ese ancho menor el ancho para el relleno y el borde.