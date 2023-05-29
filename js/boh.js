console.log("buongiorno prof");

var primoP = document.getElementById("primoP");
var secondoP = document.getElementById("secondoP");
var terzoP = document.getElementById("terzoP");
var quartoP = document.getElementById("quartoP");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btnVieri = document.getElementById("btnVieriSpecial");


btn1.addEventListener('click', function() {

    img1.src = 'img/Ivreageo.jpg';
    img2.src = 'img/storiaivrea.jpg';
    img3.src = 'img/castello.png';
    img4.src = 'img/ivreaalto.png';

    primoP.innerHTML = '<br><span style="font-weight: bold; text-align: center;">Posizione geografica</span> <br><br> Situata ai piedi delle maestose Alpi italiane, la città di Ivrea si estende sulle rive del fiume Dora Baltea. Circondata da una cornice mozzafiato di montagne e colline, Ivrea offre uno spettacolo naturale di straordinaria bellezza. La sua posizione strategica la rende un punto di partenza ideale per esplorare le Alpi e godere delle attività all aperto come escursioni, arrampicate e sci ';
    secondoP.innerHTML = '<span style="font-weight: bold; text-align: center;">Storia</span> <br><br>Ivrea vanta una storia millenaria che affonda le sue radici nell epoca romana. Tuttavia, è nel XX secolo che la città ha raggiunto il massimo splendore come centro industriale. Grazie alla presenza di importanti fabbriche, tra cui la celebre Olivetti, Ivrea divenne un simbolo dell industria italiana e un punto di riferimento per l innovazione e la produzione tecnologica. ';
    terzoP.innerHTML = '<br><span style="font-weight: bold; text-align: center;">Monumenti</span> <br><br>Ivrea è una città ricca di tesori architettonici e storici. Uno dei principali punti di riferimento è il Castello di Ivrea, che risale al IX secolo e domina l intera città con la sua imponenza. Altri luoghi di interesse includono la Cattedrale di Santa Maria Assunta, un gioiello di architettura romanica, e la Sinagoga di Ivrea, testimonianza della vibrante comunità ebraica che una volta animava la città.';
    quartoP.innerHTML = '<span style="font-weight: bold; text-align: center;">Il fascino di Ivrea</span> <br><br>Oggi, Ivrea continua ad affascinare i visitatori con la sua combinazione unica di storia, natura e cultura. La città è stata riconosciuta come Patrimonio dell Umanità dell UNESCO grazie al suo ricco patrimonio industriale e alla sua architettura modernista. Oltre a ciò, Ivrea ospita anche eventi culturali e festival che attirano turisti da tutto il mondo, come la famosa Battaglia delle Arance, un antica tradizione locale che coinvolge una grande guerra di arance per le strade della città.';



});

btn2.addEventListener('click' , function() {

    img1.src = 'img/eporedia.jpg';
    img2.src = 'img/marchesato di ivrea.jpg';
    img3.src = 'img/olivettivecchia.jpg';
    img4.src = 'img/ivreaunesco.jpg';

    primoP.innerHTML = '<br><span style="font-weight: bold; text-align: center;">Origini antiche e dominio romano</span> <br><br>Le origini di Ivrea risalgono all epoca romana, quando la città era nota come Eporedia. Fondata nel corso del III secolo a.C., Eporedia divenne un importante centro strategico e commerciale lungo la Via Augusta, una delle principali vie di comunicazione dell Impero Romano. Durante il dominio romano, Ivrea prosperò come centro agricolo e militare, testimoniato dai resti archeologici e dalle rovine ancora presenti nella zona.';
    secondoP.innerHTML = '<span style="font-weight: bold; text-align: center;">Medioevo e il Marchesato d Ivrea</span> <br><br>Nel periodo medievale, Ivrea divenne il centro di un importante marchesato. Nel 1002, la città ottenne lo status di sede della Marca d Ivrea, un territorio governato da una dinastia locale. Uno dei personaggi più noti legati al Marchesato d Ivrea fu Arduino d Ivrea, che riuscì a brevi periodi a diventare Re d Italia. Durante questo periodo, Ivrea si sviluppò come un importante centro politico e culturale, con la costruzione di imponenti edifici e fortificazioni.';
    terzoP.innerHTML = '<br><span style="font-weight: bold; text-align: center;">Rivoluzione industriale e Olivetti</span> <br><br>Nel corso del XIX secolo, Ivrea entrò nell era della rivoluzione industriale. La città vide una rapida crescita grazie all industria tessile e alla produzione di macchine. Tuttavia, il vero impulso economico arrivò con la fondazione dell azienda Olivetti nel 1908. L azienda, specializzata nella produzione di macchine per scrivere e calcolatori, trasformò Ivrea in un importante polo industriale e tecnologico, attirando lavoratori da tutto il paese. Olivetti contribuì anche alla realizzazione di progetti di architettura modernista, lasciando un impronta indelebile sulla città.';
    quartoP.innerHTML = '<span style="font-weight: bold; text-align: center;">Trasformazione contemporanea e turismo</span> <br><br>Negli ultimi decenni, Ivrea ha vissuto una trasformazione dalla città industriale a una destinazione turistica. L importanza storica e architettonica di Ivrea è stata riconosciuta nel 2018, quando è stata inserita nella lista del Patrimonio Mondiale dell UNESCO come sito industriale del XX secolo. La città attrae turisti con le sue architetture uniche, come il celebre edificio Olivetti, e con eventi culturali come il Carnevale di Ivrea e la Battaglia delle Arance, un affascinante tradizione locale. Oggi, Ivrea rappresenta una fusione affascinante tra passato industriale e bellezze naturali circostanti, offrendo ai visitatori una combinazione unica di storia, cultura e paesaggi incantevoli.';

});

btn3.addEventListener('click' , function() {

    img1.src = 'img/camillo olivetti.jpg';
    img2.src = 'img/olivettifabbrica.jpg';
    img3.src = 'img/colonia olivetti.jpg';
    img4.src = 'img/olivetti.png';

    primoP.innerHTML = '<br><span style="font-weight: bold; text-align: center;">Fondazione e visione di Adriano Olivetti</span> <br><br>L Olivetti fu fondata nel 1908 da Camillo Olivetti a Ivrea, in Piemonte. Tuttavia, è suo figlio, Adriano Olivetti, a trasformare l azienda in un icona dell industria italiana. Adriano aveva una visione innovativa per l Olivetti, vedendola non solo come un azienda di produzione, ma anche come un entità sociale. Sotto la sua guida, l Olivetti divenne famosa per la sua attenzione al design, alla qualità e al benessere dei suoi dipendenti.';
    secondoP.innerHTML = '<span style="font-weight: bold; text-align: center;">Innovazione e design:</span> <br><br>L Olivetti si distinse per l innovazione tecnologica e il design all avanguardia. L azienda fu pioniera nello sviluppo di macchine per scrivere e calcolatori meccanici. Grazie alla sua attenzione al design, le macchine Olivetti divennero vere opere d arte, con forme eleganti e curate. Designers di fama internazionale come Marcello Nizzoli e Ettore Sottsass contribuirono alla creazione di prodotti iconici che ancora oggi vengono apprezzati per il loro stile senza tempo.';
    terzoP.innerHTML ='<br><span style="font-weight: bold; text-align: center;">Impatto sociale e ambientale</span> <br><br>Adriano Olivetti credeva che l azienda dovesse svolgere un ruolo sociale attivo nella comunità. Olivetti introdusse un ampia gamma di benefici per i suoi dipendenti, tra cui asili nido, servizi medici e abitazioni per il personale. L azienda promosse anche la formazione e la cultura, con la creazione di una biblioteca, un teatro e una scuola di architettura. L Olivetti si preoccupava anche dell ambiente, investendo in programmi di sviluppo sostenibile e nella riduzione dell impatto ambientale delle sue attività.';
    quartoP.innerHTML = '<span style="font-weight: bold; text-align: center;">Eredità e influenza</span> <br><br>L eredità dell Olivetti è ancora visibile oggi. L azienda ha influenzato profondamente il design industriale e il pensiero imprenditoriale in tutto il mondo. Il suo approccio integrato tra design, tecnologia e benessere sociale ha aperto la strada a una nuova concezione dell industria moderna. L Olivetti ha lasciato un segno indelebile nella città di Ivrea, dove molti degli edifici dell azienda sono diventati simboli del design e dell architettura del XX secolo. L azienda è anche considerata una pietra miliare nella storia dell industria italiana e ha lasciato un eredità di innovazione e creatività che continua ad ispirare generazioni successive.';

});

btn4.addEventListener('click' , function() {

    img1.src = 'img/arduinodev.jpg';
    img2.src = 'img/arduinoscheda.jpg';
    img3.src = 'img/arduinocom.png';
    img4.src = 'img/arduino.jpg';

    primoP.innerHTML = '<br><span style="font-weight: bold; text-align: center;">Origini e sviluppo</span> <br><br>Arduino è stato creato nel 2005 da un gruppo di studenti dell Interaction Design Institute di Ivrea, in Italia. Il loro obiettivo era quello di fornire un modo semplice e accessibile per i principianti e gli hobbisti di sperimentare con l elettronica e la programmazione. La prima scheda di sviluppo Arduino, chiamata "Arduino Uno", combinava un microcontrollore ATmega328P con un ambiente di sviluppo integrato (IDE) facile da usare. Questo ha permesso a chiunque di programmare il microcontrollore e creare progetti interattivi senza la necessità di conoscenze approfondite di elettronica.';
    secondoP.innerHTML = '<span style="font-weight: bold; text-align: center;">Caratteristiche e flessibilità</span> <br><br>Arduino ha guadagnato popolarità grazie alle sue caratteristiche e alla sua flessibilità. Le schede Arduino sono dotate di numerose porte di input e output che consentono di collegare una vasta gamma di sensori, attuatori e dispositivi esterni. Inoltre, l ambiente di sviluppo Arduino fornisce una vasta libreria di codice predefinita che semplifica il processo di programmazione. Ciò ha reso Arduino adatto per una varietà di progetti, come robotica, domotica, arte interattiva e molto altro ancora.';
    terzoP.innerHTML = '<br><span style="font-weight: bold; text-align: center;">Comunità e condivisione</span> <br><br>Un aspetto distintivo di Arduino è la sua comunità di appassionati e sviluppatori. La comunità Arduino è conosciuta per la sua mentalità di condivisione e collaborazione. Gli utenti possono condividere i propri progetti, codice e risorse attraverso il sito ufficiale di Arduino e vari forum online. Questo spirito di apertura ha contribuito alla crescita e all evoluzione costante di Arduino, portando a una vasta gamma di schede e moduli compatibili prodotti da terze parti.';
    quartoP.innerHTML = '<span style="font-weight: bold; text-align: center;">Impatto e applicazioni</span> <br><br>Arduino ha avuto un impatto significativo in molti settori, dall educazione alla ricerca, dall industria all arte. La sua facilità d uso e la sua versatilità hanno permesso a un numero sempre crescente di persone di avvicinarsi all elettronica e alla programmazione. Arduino è stato utilizzato per realizzare progetti come monitoraggio e controllo ambientale, dispositivi indossabili, droni, strumenti musicali e molto altro ancora. Inoltre, Arduino ha aperto la strada all Internet delle cose (IoT), consentendo di connettere i dispositivi fisici a Internet e creando nuove opportunità nel campo dell automazione e della domotica.';

});

btnVieriSpecial.addEventListener('click', function() {

    window.open('https://youtu.be/BGCCMXUXue0', '_blank');

});