import React from "react";
// import "../../normalize.css";
import '../../index.css';

const aboutContent = `

<body background="../../imgs/Ocean.jpg">
<main class="main">
    <h1>Peces de agua salada</h1>
<span class="linea"></span>
<section class="galeria">
    <a href="#imagen1">
        <img src="../../imgs/cirujano.jpg"/>
    </a>
    <a href="#imagen2">
        <img src="../../imgs/emperador.jpg"/>
    </a>
    <a href="#imagen3">
        <img src="../../imgs/damisela.jpg"/>
    </a>
    <a href="#imagen4">
        <img src="../../imgs/payaso.jpg"/>
    </a>
    <a href="#imagen5">
        <img src="../../imgs/ballesta.jpg"/>
    </a>
    <a href="#imagen6">
        <img src="../../imgs/mariposa.jpg"/>
    </a>
    <a href="#imagen7">
        <img src="../../imgs/leon.jpg"/>
    </a>
    <a href="#imagen8">
        <img src="../../imgs/chromis.jpg"/>
    </a>
    <a href="#imagen9">
        <img src="../../imgs/africano.jpg"/>q
    </a>
    <a href="#imagen10">
        <img src="../../imgs/cardenal.jpg"/>
    </a>
</section>
<article class="light-box" id="imagen1">
    <div class="siguiente">
        <a href="#imagen10"><img src="../../imgs/izquierda.png" width="50"/></a>
    </div>
    <img src="../../imgs/cirujano.jpg"/>
    <div class="descripcion">
        <h2>Pez Cirujano De Sombra Azul</h2>
        <p>El pez cirujano de sombra azul es otro de los ejemplares que los amantes de los peces admiran por su particular colorido. Este pez es solitario y vive en arrecifes. Son de gran tamaño, suelen medir unos 40 centímetros, por este motivo requieren de un tamaño grande, su mantenimiento es exigente ya que requiere de un medio estable y una iluminación intensa. Aunque los cirujanos azules son omnívoros y se sabe que consumen criaturas acuáticas pequeñas como el pláncton, la mayor parte de su alimentación se basa en algas.</p>
    </div>
    <div class="siguiente">
        <a href="#imagen2"><img src="../../imgs/derecha.png" width="50"/></a>
    </div>
    <div class="cerrar">
        <a href="#"><img src="../../imgs/cerrar.png" width="30"/></a>
    </div>
</article>
<article class="light-box" id="imagen2">
    <div class="siguiente">
        <a href="#imagen1"><img src="../../imgs/izquierda.png" width="50"/></a>
    </div>
    <img src="../../imgs/emperador.jpg"/>
    <div class="descripcion">
        <h2>Pez Angel Emperador</h2>
        <p>El pez angel emperador es uno de los ejemplares más hermosos y codiciados. No suelen alcanzar los 30 centímetros. Se trata de un pez solitario que se adapta a la vida en cautividad y que bien cuidado puede llegar a los 10 años de vida. Requiere un acuario mediano - grande y necesitará decoración y rocas por donde pueda moverse libremente. Los peces ángel emperadores son omnívoros, en la naturaleza comen una amplia variedad de esponjas y organismos incrustantes junto con pequeñas cantidades de algas, tunicados, hidroides y bryozoarios.</p>
    </div>
    <div class="siguiente">
        <a href="#imagen3"><img src="../../imgs/derecha.png" width="50"/></a>
    </div>
    <div class="cerrar">
        <a href="#"><img src="../../imgs/cerrar.png" width="30"/></a>
    </div>
</article>
<article class="light-box" id="imagen3">
    <div class="siguiente">
        <a href="#imagen2"><img src="../../imgs/izquierda.png" width="50"/></a>
    </div>
    <img src="../../imgs/damisela.jpg"/>
    <div class="descripcion">
        <h2>Pez Damisela Azul</h2>
        <p>La Damisela Azul es un pez de cuerpo robusto, que alcanzarán solo 7 centímetros de longitud . Al igual que otras especies de Damiselas, su esperanza de vida en la naturaleza será de entre 2 y 6 años. Toleran una amplia gama de  temperaturas, desde los 23 hasta los 29ºC , pero no deben fluctuar, es decir, tendrán que ser lo más estables posibles. Las Damiselas Medio Azules Chrysiptera hemicyanea  son animales omnívoros. En la naturaleza se alimentan de zooplancton, pero también pueden comer algas. En el acuario habrá que aportarles una dieta variada y rica en proteínas.</p>
    </div>
    <div class="siguiente">
        <a href="#imagen4"><img src="../../imgs/derecha.png" width="50"/></a>
    </div>
    <div class="cerrar">
        <a href="#"><img src="../../imgs/cerrar.png" width="30"/></a>
    </div>
</article>
<article class="light-box" id="imagen4">
    <div class="siguiente">
        <a href="#imagen3"><img src="../../imgs/izquierda.png" width="50"/></a>
    </div>
    <img src="../../imgs/payaso.jpg"/>
    <div class="descripcion">
        <h2>Pez Payaso</h2>
        <p>El pez payaso procede de los arrecifes de coral del Indo-Pacíficoel, el tamaño de estos peces tropicales suele oscilar entre los 8 y 16 cm, y siempre las hembras son de mayor tamaño que los machos, los peces payaso son animales omnívoros que basan la mitad de su alimentación en invertebrados y, la otra mitad, en algas, diminutos crustáceos como copépodos e isópodos y zooplancton. Asimismo, su esperanza de vida puede alcanzar los 15 años en su hábitat natural.</p>
    </div>
    <div class="siguiente">
        <a href="#imagen5"><img src="../../imgs/derecha.png" width="50"/></a>
    </div>
    <div class="cerrar">
        <a href="#"><img src="../../imgs/cerrar.png" width="30"/></a>
    </div>
</article>
<article class="light-box" id="imagen5">
    <div class="siguiente">
        <a href="#imagen4"><img src="../../imgs/izquierda.png" width="50"/></a>
    </div>
    <img src="../../imgs/ballesta.jpg"/>
    <div class="descripcion">
        <h2>Pez Ballesta Payaso</h2>
        <p>El pez Ballesta Payaso puede ser uno de los peces más bellos y originales del mundo marino, en libertad son peces que pueden llegar a medir 50 centímetros de largo, pero en el acuario raramente superan los 25 centímetros. Poseen un cuerpo ovalado y comprimido lateralmente. El pez Ballesta Payaso está ampliamente extendido en las aguas tropicales de los Océanos Índico y Pacífico, la temperatura ideal es de entre 24ºC y 26ºC y suelen alimentarse de crustáceos y moluscos, lo hacen, porque tienen poderosos dientes para poder partirlos.</p>
    </div>
    <div class="siguiente">
        <a href="#imagen6"><img src="../../imgs/derecha.png" width="50"/></a>
    </div>
    <div class="cerrar">
        <a href="#"><img src="../../imgs/cerrar.png" width="30"/></a>
    </div>
</article>
<article class="light-box" id="imagen6">
    <div class="siguiente">
        <a href="#imagen5"><img src="../../imgs/izquierda.png" width="50"/></a>
    </div>
    <img src="../../imgs/mariposa.jpg"/>
    <div class="descripcion">
        <h2>Pez Mariposa</h2>
        <p>Principalmente el pez mariposa, son de tamaño muy pequeño midiendo entre 10 – 12 cm de longitud. Sin embargo, algunas especies de peces mariposa pueden llegar a mediar unos 20 cm de longitud. en su hábitat natural, tan sólo viven 7 años. La mayoría de ellos se pueden alimentar dándole algas, esponjas y corales. Deben mantenerse en una temperatura de 28º C, un Ph entre 8 y 9 y una densidad de 15 º C. Algunos pueden alimentarse de pequeños animales y plancton, ya que son omnívoros.</p>
    </div>
    <div class="siguiente">
        <a href="#imagen7"><img src="../../imgs/derecha.png" width="50"/></a>
    </div>
    <div class="cerrar">
        <a href="#"><img src="../../imgs/cerrar.png" width="30"/></a>
    </div>
</article>
<article class="light-box" id="imagen7">
    <div class="siguiente">
        <a href="#imagen6"><img src="../../imgs/izquierda.png" width="50"/></a>
    </div>
    <img src="../../imgs/leon.jpg"/>
    <div class="descripcion">
        <h2>Pez León</h2>
        <p>El pez león posee aracterísticas físicas hermosas y asombrosas, pues está cubierto de peligrosas y vistosas espinas, las cuales algunas de ellas poseen veneno. Su hábitat se encuentra en los arrecifes y áreas rocosas de los océanos Índico y Pacífico. La temperatura recomendable en un acuario si decides tener un pez león, debe ser entre 24 grados a 28 grados. Al ser una brea de agua salada, debe tener un pH de 8.2 a 8.4 y tener una densidad de 1.0 23 a 1.0 26. Este pez se alimenta de pescado, camarones y otros tipos de crustáceos.</p>
    </div>
    <div class="siguiente">
        <a href="#imagen8"><img src="../../imgs/derecha.png" width="50"/></a>
    </div>
    <div class="cerrar">
        <a href="#"><img src="../../imgs/cerrar.png" width="30"/></a>
    </div>
</article>
<article class="light-box" id="imagen8">
    <div class="siguiente">
        <a href="#imagen7"><img src="../../imgs/izquierda.png" width="50"/></a>
    </div>
    <img src="../../imgs/chromis.jpg"/>
    <div class="descripcion">
        <h2>Pez Damisela Verde</h2>
        <p>el pez damisela verde es un pez marino bastante popular debido a que tiene fama de ser bastante fácil de cuidar. Su tamaño oscila entre los 6 y los 8 centímetros, el cuerpo del también llamado chromis viridis, está comprimido de forma lateral y tiene forma ovalada. El pez chromis viridis es originario de los océanos Índico y Pacífico. Es posible encontrarlo en la costa este de África, en la Gran Barrera de coral y en Nueva Caledonia. Este pez se debe mantener con una temperatura entre 23º a 28ºC, un pH de 8.2 a 8.4 y una densidad de sal entre 1023 y 1025. Se alimenta de plancton que recoge de zonas con fuertes corrientes.</p>
    </div>
    <div class="siguiente">
        <a href="#imagen9"><img src="../../imgs/derecha.png" width="50"/></a>
    </div>
    <div class="cerrar">
        <a href="#"><img src="../../imgs/cerrar.png" width="30"/></a>
    </div>
</article>
<article class="light-box" id="imagen9">
    <div class="siguiente">
        <a href="#imagen8"><img src="../../imgs/izquierda.png" width="50"/></a>
    </div>
    <img src="../../imgs/africano.jpg"/>
    <div class="descripcion">
        <h2>Pez Ángel Africano Enano</h2>
        <p>El pez ángel africano enano es una especie de pequeño tamaño dotada de una coloración muy llamativa, puede llegar hasta los 7 cm. Su hábitat se encuentra en  Sudáfrica y Madagascar. Requiere de un Ph entre 8,1 y 8,4. Salinidad entre 1.020 y 1.025. Nitratos por debajo de 5 ppm si mantenemos invertebrados. Nitritos 0. La temperatura debe estar entre 22 y 26º C constantes todo el año. Su dieta principal está compuesta por gusanos, crustáceos y esponjas. No obstante para asegurarnos puede ser una buena idea añadir en su dieta trozos de almeja, gambas o mejillones.</p>
    </div>
    <div class="siguiente">
        <a href="#imagen10"><img src="../../imgs/derecha.png" width="50"/></a>
    </div>
    <div class="cerrar">
        <a href="#"><img src="../../imgs/cerrar.png" width="30"/></a>
    </div>
</article>
<article class="light-box" id="imagen10">
    <div class="siguiente">
        <a href="#imagen9"><img src="../../imgs/izquierda.png" width="50"/></a>
    </div>
    <img src="../../imgs/cardenal.jpg"/>
    <div class="descripcion">
        <h2>Pez Cardenal De Banggai</h2>
        <p>El pez cardenal de Banggai habita las lagunas y los arrecifes exteriores en torno a las 123 islas de las que consta el archipiélago indonesio de Baggai. Los machos sexualmente maduros tienen una estructura maximilar más maciza y, a menudo, las aletas dorsales más largas. Los machos y las hembras miden 8 cm y llegan a vivir 5 años en acuario. Requieren una temperatura que puede estar entre 24 y 31 ºC, la densidad cercana a 1.025 y las tasas de nitrato, nitrito y amonio como máximo a 10, 0 y 0 ppm. Es una especie carnívora que se alimenta en origen de pequeños animales pelágicos: gusanos, moluscos y larvas de peces.</p>
    </div>
    <div class="siguiente">
        <a href="#imagen1"><img src="../../imgs/derecha.png" width="50"/></a>
    </div>
    <div class="cerrar">
        <a href="#"><img src="../../imgs/cerrar.png" width="30"/></a>
    </div>
</article>
</main>
</body>`
;

export const About = () => {

  return (
    <>
    <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
    </>
  );
};
