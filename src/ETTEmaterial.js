//import GameStatsStyle from './gamestats.css';
import "./styles/material.css"
import {
  FaArrowAltCircleRight,
  FaSearch,
  FaBookmark,
  FaBook,
  FaArrowAltCircleDown,
} from "react-icons/fa";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { fireEvent } from "@testing-library/dom";
import sign1 from './images/image002.png';
import sign2 from './images/image003.png';
import sign3 from './images/image004.png';
import sign4 from './images/image005.png';
import sign5 from './images/image006.png';
import sign6 from './images/image007.png';
import sign7 from './images/image008.png';
import sign8 from './images/image009.png';
import sign9 from './images/image010.png';
import sign10 from './images/image011.png';
import sign11 from './images/image012.png';
import sign12 from './images/image013.png';
import sign13 from './images/image014.png';
import sign14 from './images/image015.png';
import sign15 from './images/image016.png';
import sign16 from './images/image017.png';
import sign17 from './images/image018.png';
import sign18 from './images/image019.png';
import sign19 from './images/image020.png';
import sign20 from './images/image021.png';
import sign21 from './images/image022.png';
import sign22 from './images/image023.png';
import sign23 from './images/image024.png';
import sign24 from './images/image025.png';
import sign25 from './images/image026.png';
import sign26 from './images/image027.png';
import sign27 from './images/image028.png';
import sign28 from './images/image029.png';
import sign29 from './images/image030.png';
import sign30 from './images/image031.png';

//import firebase from 'firebase';

function ETTEmaterial() {
  const [firstpartShown, setIsFirstPartShown] = useState(false);
  const [secondpartShown, setIsSecondPartShown] = useState(false);
  const [thirdpartShown, setIsThirdPartShown] = useState(false);
  const [fourthpartShown, setIsFourthPartShown] = useState(false);
  const [fifthpartShown, setIsFifthPartShown] = useState(false);
  const [sixthpartShown, setIsSixthPartShown] = useState(false);
  const [seventhpartShown, setIsSeventhPartShown] = useState(false);
  const [eightpartShown, setIsEightPartShown] = useState(false);
  const [ninthpartShown, setIsNinthPartShown] = useState(false);
  const [tenthpartShown, setIsTenthPartShown] = useState(false);
  const [tapaturmateoriaChecked, setIsTapaturmaTeoriaChecked] = useState(false);
  const [viisiAskeltaChecked, setViisiAskeltaChecked] = useState(false);
  const [oikeudetChecked, setIsOikeudetChecked] = useState(false);
  const [nayttamoChecked, setIsNayttamoChecked] = useState(false);
  const [yleisoChecked, setIsYleisoChecked] = useState(false);
  const [kestavaChecked, setIsKestavaChecked] = useState(false);
  const [varoitusChecked, setIsVaroitusChecked] = useState(false);
  const [kieltoChecked, setIsKieltoChecked] = useState(false);
  const [turvallisuusChecked, setIsTurvallisuusChecked] = useState(false);
  const [nostotChecked, setIsNostotChecked] = useState(false);
  const [ergonomisetChecked, setIsErgonomisetChecked] = useState(false);
  const [valineetChecked, setIsValineetChecked] = useState(false);
  const [quizzess, setQuizzess] = useState([]);

  var isQuizzSelected = false;

  const history = useHistory();

  const isFirstPartShown = () => {
    if (firstpartShown === true) {
      setIsFirstPartShown(false);
    } else {
      setIsFirstPartShown(true);
    }
  };

  const isSecondPartShown = () => {
    if (secondpartShown === true) {
      setIsSecondPartShown(false);
    } else {
      setIsSecondPartShown(true);
    }
  };

  const isThirdPartShown = () => {
    if (thirdpartShown === true) {
      setIsThirdPartShown(false);
    } else {
      setIsThirdPartShown(true);
    }
  };

  const isFourthPartShown = () => {
    if (fourthpartShown === true) {
      setIsFourthPartShown(false);
    } else {
      setIsFourthPartShown(true);
    }
  };

  const isFifthPartShown = () => {
    if (fifthpartShown === true) {
      setIsFifthPartShown(false);
    } else {
      setIsFifthPartShown(true);
    }
  };

  const isSixthPartShown = () => {
    if (sixthpartShown === true) {
      setIsSixthPartShown(false);
    } else {
      setIsSixthPartShown(true);
    }
  };

  const isSeventhPartShown = () => {
    if (seventhpartShown === true) {
      setIsSeventhPartShown(false);
    } else {
      setIsSeventhPartShown(true);
    }
  };

  const isEightPartShown = () => {
    if (eightpartShown === true) {
      setIsEightPartShown(false);
    } else {
      setIsEightPartShown(true);
    }
  };

  const isNinthPartShown = () => {
    if (ninthpartShown === true) {
      setIsNinthPartShown(false);
    } else {
      setIsNinthPartShown(true);
    }
  };

  const isTenthPartShown = () => {
    if (tenthpartShown === true) {
      setIsTenthPartShown(false);
    } else {
      setIsTenthPartShown(true);
    }
  };

  const isTapaturmaTeoriaChecked = () => {
    if (tapaturmateoriaChecked === true) {
      setIsTapaturmaTeoriaChecked(false);
    } else {
      setIsTapaturmaTeoriaChecked(true);
    }
  };

  const isViisiAskeltaChecked = () => {
    if (viisiAskeltaChecked === true) {
      setViisiAskeltaChecked(false);
    } else {
      setViisiAskeltaChecked(true);
    }
  };

  const isOikeudetChecked = () => {
    if (oikeudetChecked === true) {
      setIsOikeudetChecked(false);
    } else {
      setIsOikeudetChecked(true);
    }
  };

  const isNayttamoChecked = () => {
    if (nayttamoChecked === true) {
      setIsNayttamoChecked(false);
    } else {
      setIsNayttamoChecked(true);
    }
  };

  const isYleisoChecked = () => {
    if (yleisoChecked === true) {
      setIsYleisoChecked(false);
    } else {
      setIsYleisoChecked(true);
    }
  };

  const isKestavaChecked = () => {
    if (kestavaChecked === true) {
      setIsKestavaChecked(false);
    } else {
      setIsKestavaChecked(true);
    }
  };

  const isTurvallisuusChecked = () => {
    if (turvallisuusChecked === true) {
      setIsTurvallisuusChecked(false);
    } else {
      setIsTurvallisuusChecked(true);
    }
  };

  const isVaroitusChecked = () => {
    if (varoitusChecked === true) {
      setIsVaroitusChecked(false);
    } else {
      setIsVaroitusChecked(true);
    }
  };

  const isKieltoChecked = () => {
    if (kieltoChecked === true) {
      setIsKieltoChecked(false);
    } else {
      setIsKieltoChecked(true);
    }
  };

  const isNostotChecked = () => {
    if (nostotChecked === true) {
      setIsNostotChecked(false);
    } else {
      setIsNostotChecked(true);
    }
  };

  const isErgonomisetChecked = () => {
    if (ergonomisetChecked === true) {
      setIsErgonomisetChecked(false);
    } else {
      setIsErgonomisetChecked(true);
    }
  };

  const isValineetChecked = () => {
    if (valineetChecked === true) {
      setIsValineetChecked(false);
    } else {
      setIsValineetChecked(true);
    }
  };


  const isChapterChecked = (booleanInQuestion) => {
    if (booleanInQuestion === true) {
      setChapterBoolean(booleanInQuestion, false);
    } else {
      setChapterBoolean(booleanInQuestion, true);
    }
  };

  const setChapterBoolean = (booleanInQuestion, bool) => {
      booleanInQuestion = bool;
  };

  useEffect(() => {
    setQuizzess([]);
  }, []);

  return (
    <div>
      {firstpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>1 Työskentele turvallisesti</h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isFirstPartShown()}
                >
                  <FaArrowAltCircleDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
                Turvallinen työskentely edellyttää, että tiedostat
                esitystuotantoihin liittyvät riskit ja otat ne työssäsi huomioon
                oman turvallisuutesi takaamiseksi.{" "}
              </p>
            </div>
            <div class="chapterBox"
              onClick={() => isTapaturmaTeoriaChecked()}
            >
              <h3>1.1 Tapaturmateoria </h3>
              {tapaturmateoriaChecked ? (
                <div class="chapterText">
                  <p>
                    On tärkeää tiedostaa, <strong>että täydellistä turvallisuutta ei ole
                    olemassa</strong>, ja huolimatta siitä, kuinka turvallisesti pyrimme
                    työskentelemään, <strong>onnettomuuksia tapahtuu. </strong>
                    Turvallisuudessa
                    on aina kyse tasapainosta käytettävyyden ja hyväksyttävissä
                    olevan riskin välillä. Jotta voimme tehdä tasapainoon
                    johtavia valintoja järkevästi, meidän täytyy ymmärtää, miten
                    onnettomuudet tapahtuvat ja minkälaisia mekanismeja niiden
                    takana piilee.</p>
                    <b>Riski</b>
                    <p>Riskissä on kolme osatekijää <strong>1. vaarallinen tilanne tai teko, 2. todennäköisyys, </strong>
                    että jokin menee vikaan sekä tämän tapahtuman <strong>3. seuraukset.</strong> Jokainen
                    vaarallinen tilanne tai teko luo vaaran uhan. Tämä ei
                    kuitenkaan tarkoita, että jokin menee pieleen. Esimerkiksi
                    jos pudotat työkalun, kun ketään ei ole lähistöllä, vahinkoa
                    ei tapahdu. </p>
                    <b>Todennäköisyys </b> 
                    <p>Jokainen vaarallinen tilanne tai teko luo vaaran uhan. 
                    Tämä ei kuitenkaan tarkoita, että
                    jokin menee pieleen. Esimerkiksi jos pudotat työkalun, kun
                    ketään ei ole lähistöllä, vahinkoa ei tapahdu. </p>
                    <b>Seuraus</b>
                    <p>Seurauksen käsite osoittaa vahinkojen mahdollisen vakavuuden
                    tai vaikutuksen työpaikkaan. Esimerkiksi, kun työkalu
                    putoaa, aiheuttaako se pieniä vaurioita vai voiko se tappaa
                    jonkun? </p>
                    <b>Läheltä piti-tilanne </b>
                    <p>Läheltä piti -tilanne on tahaton vaaratilanne, josta ei koidu lainkaan vaurioita tai
                    vammoja tai vauriot ja vammat ovat vähäisiä. Jotain
                    vaarallista siis tapahtui, mutta tilanne päättyi kuitenkin
                    hyvin. Esimerkkejä: Joku pudottaa vasaran korkealta
                    vahingoittamatta ketään tai joku kompastuu kaapeliin, mutta ei
                    kuitenkaan kaadu vaan jatkaa matkaa. </p>
                    <b>Tapaturma </b> 
                    <p>Tapaturma on
                    tahaton tilanne, josta aiheutuu vakavaa vahinkoa tai
                    vammoja. Toisin sanoen tilanne päättyy ikävästi.
                    Esimerkkejä: Joku pudottaa vasaran korkealta ja satuttaa
                    toista ihmistä tai joku kompastuu kaapeliin, kaatuu ja satuttaa
                    itsensä </p>
                    <b>Vahinko tai vamma </b>
                    <p>Vammat ja vauriot ovat <strong>tapaturman
                    seurauksia.</strong> Voimme luokitella ne vakavuuden ja seurausten
                    perusteella.</p>
                    <ul><li><strong>Pienet haaverit,</strong> jotka hoidetaan paikan päällä
                    ensiavun turvin, ei sairauspoissaoloa</li> 
                    <li>Vammat, joista
                    aiheutuu <strong>väliaikainen sairauspoissaolo</strong></li>
                    <li><strong>Pysyvät vammat</strong> (esimerkiksi liikuntarajoitteet)</li>
                    <li><strong> Kuolema</strong> </li></ul> 
                    <p>On tärkeä ymmärtää,
                    että <strong>vahingon aiheuttaja ei ole sama kuin tapaturman
                    aiheuttaja.</strong> Vahingon aiheuttaja on se, joka saa aikaan
                    fyysisen vaurion, esimerkiksi putoava valonheitin tai terävä
                    veitsi. Tapaturman aiheuttaja on se toiminta tai tilanne,
                    joka aiheutti tapaturman, esimerkiksi turvavaijerin puute
                    tai väärä tapa käsitellä veistä. </p>
                    <b>Suhteet </b>
                    <p>Alla oleva kaavio osoittaa
                    miten eri käsitteet suhtautuvat toisiinsa. Vaara,
                    todennäköisyys ja seuraus muodostavat riskin. Riski saattaa
                    aiheuttaa vaaratilanteen. Jos vaaratilanne päättyy huonosti,
                    sattuu tapaturma, joka aiheuttaa vahinkoja. Tapaturmien
                    välttämiseksi yritämme hallita riskitekijöitä, analysoimme
                    riskit ja pidämme kirjaa läheltä piti -tilanteista. </p>
                    <b>Vaarallinen toiminta </b>
                    <p>Tilastot osoittavat, että 80 %
                    tapaturmista johtuu ihmisen toiminnasta. Jos siis haluamme
                    ehkäistä onnettomuudet, ensimmäiseksi pitää tarkastella
                    ihmisen käytöstä. Meidän pitää kysyä, miksi joku käyttäytyy
                    tietyllä tavalla. Syyt vaaralliseen käytökseen voidaan jakaa
                    kolmeen: tietämättömyys, kykenemättömyys ja haluttomuus.</p>
                    <p><strong>Tietämättömyydessä</strong> on useimmiten kyse <strong>tiedon puutteesta. </strong> 
                    Jos ei tiedä vaaran olemassaolosta tai tekojensa seurauksista,
                    riskiä on vaikea välttää. Jos ei tiedä, miten suojata
                    itsensä tai kuinka toimia onnettomuustilanteessa, on vaikea
                    minimoida onnettomuuden seurauksia. </p><p>Ratkaisut
                    tietämättömyyteen ovat yksinkertaisia. Jos joku epäilyttää,
                    kysy. Perehdy laitteisiin, materiaaleihin ja työtapoihin.
                    Ennen kaikkea myönnä, ettet tiedä.</p> <p><strong>Kykenemättömyyteen</strong> voi
                    olla monia syitä. Yksi syy voi olla, että työntekijä ei
                    <strong> fyysisesti</strong> pysty tekemään jotain. Hän ei esimerkiksi ole
                    tarpeeksi vahva tai notkea, häneltä puuttuu kokemusta tai
                    oikeanlaista osaamista työn suorittamiseen tai hänellä ei
                    ole aikaa tehdä työtä kunnolla. Joskus taas työntekijä ei
                    <strong> henkisesti</strong> pysty suorittamaan tehtävää turvallisesti,
                    esimerkiksi koska hän ei pysty keskittymään oman
                    elämäntilanteensa takia tai koska hän pelkää sitä, mitä
                    hänen pitäisi tehdä.</p> <p>Esimerkkejä: Ryhdyt siirtämään
                    kaiuttimia, vaikka ne ovat liian raskaat yksin
                    nostettaviksi tai työskentelet korkealla, vaikka tunnet itsesi
                    sairaaksi. </p> <p>Jotta tilanne voidaan ratkaista, työntekijän
                    täytyy<strong> tuntea ja myöntää rajansa.</strong> Tällä tavalla tunnistamme
                    ongelman ja voimme (ehkä) tehdä sille jotakin. Joka
                    tapauksessa, työntekijä ei saa antaa kenenkään pakottaa
                    itseään tekemään mitään, mihin ei koe kykenevänsä.</p>
                    <p><strong>Haluttomuuteen </strong>onnettomuuden syynä on kaikkein vaikein
                    puuttua, koska se edellyttää ihmisten<strong> asenteiden</strong> muutosta.
                    Voi olla monia syitä, miksi joku ei halua käyttää olemassa
                    olevia turvavälineitä tai työskennellä turvallisesti. Syynä
                    voi olla laiskuus, motivaation puute tai käsitys, että itse
                    tietää asiat paremmin. Useimmissa tapauksissa tällainen
                    käytös juontuu tavoista, joita voi olla vaikea muuttaa tai
                    ammatillisesta sokeudesta. Ammatillinen sokeus tarkoittaa,
                    että pitkän ajan kuluessa tottuu tiettyihin riskeihin ja sen
                    takia aliarvioi ne.</p> <p>Esimerkkejä: Et käytä turvakenkiä, koska
                    olet aina työskennellyt ilman niitä tai kun työskentelet
                    korkealla, et käytä työkaluissa turvavaijeria, koska et
                    halua tuhlata aikaa.</p> <p>Jotta
                    tämäntyyppinen käytös korjaantuisi, meidän pitää ymmärtää
                    muutostarpeen syyt ja motivoida ja tarkkailla toisiamme. </p>
                    <b>Vaaralliset tilanteet </b>
                    <p>Toinen tapaturmanaiheuttajatyyppi
                    muodostuu tilanteista, jotka aiheuttavat riskin
                    työntekijöille tai muille ihmisille. Nämä voidaan jakaa
                    kolmeen lajiin: järjestelyt, tekniikka ja olosuhteet.</p>
                    <p><strong>Järjestelyihin </strong>liittyvät vaaratilanteet aiheutuvat 
                    <strong> tavasta, jolla työ on järjestetty.</strong> Nämä riskit 
                    sisältävät muun muassa aikataulutusongelmat työryhmien tai toimintojen välillä
                    (esimerkiksi esityksen purku on järjestetty samaan aikaan
                    kuin laitteiston siirrot).</p> 
                    <p><strong>Tekniikkaan liittyviä vaaratilanteita </strong>
                    aiheuttavat koneiden, laitteiden ja
                    työkalujen lisäksi muut konkreettiset elementit kuten
                    portaikot ja kulkusillat.</p> 
                    <p><strong>Olosuhteisiin </strong>liittyvät
                    vaaratilanteet viittaavat <strong>ulkoisiin tekijöihin, </strong>
                    jotka eivät ole suoraan yhteydessä toimintaan mutta vaikuttavat siihen.
                    Esimerkiksi rajallinen valaistus, sääolosuhteet tai
                    liiallinen melu vaikuttavat työhön negatiivisesti. </p>
                    <b>Samanaikaisuus </b>
                    <p>Onnettomuudelle ei ole vain yhtä syytä.
                    tapaturma on aina seurausta <strong>olosuhteiden ja toiminnan
                    yhdistelmästä.</strong> Tapaturma sattuu ainoastaan silloin, kun nämä
                    osatekijät tapahtuvat samaan aikaan.</p> 
                    <p>Esimerkki: Työkalu
                    tippuu telineeltä ja osuu alla kulkevaan henkilöön. Jos
                    tutkimme tilannetta tarkkaan, huomaamme, että tapaturmaan
                    liittyy useita erilaisia riskejä: 
                    <ul><li>Rakennustelineellä on
                    työkalu</li><li>Esineitä ei ole suojattu putoamiselta</li><li>Telineellä
                    työskentelee joku</li><li>Joku kulkee telineen alta</li></ul>Mikään näistä
                    riskeistä ei kuitenkaan yksin aiheuta tapaturmaa.</p> 
                    <p>Tapaturman
                    aiheuttaja on: Joku kulkee ohi, kun telineellä työskentelevä
                    henkilö, joka ei ole suojannut työvälineitään putoamiselta,
                    tönäisee työkalunsa alas </p>
                    <p>Jos yksikin riskeistä
                    poistettaisiin, tapaturmaa ei sattuisi. 
                    <ul><li>Jos työkalua ei ole,
                    se ei voi pudota</li><li> Jos työkalussa on turvavaijeri, se ei voi
                    pudota</li><li>Jos kukaan ei työskentele telineellä, työkalua ei voi
                    tönäistä alas</li><li>Jos kukaan ei kulje telineen ohi työkalun
                    pudotessa, sattuisi vain vaaratilanne, ei tapaturmaa.</li></ul>
                    Kaikkia riskejä ei kuitenkaan voi poistaa, muuten työ ei
                    tule tehdyksi. Vaihtoehtona on välttää samanaikaisuutta.
                    Varmistamme, että riskit eivät toteudu samaan aikaan. Toisin
                    sanoen: <ul><li>Jos kukaan ei voi kulkea telineen läheisyydessä, kun
                    joku työskentelee telineellä, tapaturmaa ei voi sattua.</li></ul>
                    Samanaikaisuuden välttämistä käytetään paljon tilanteissa,
                    joissa riskiä ei voida kokonaan poistaa. </p> 
                    <b>Ammattitaudit </b>
                    <p>Ammattitaudit eivät johdu tapaturmista. Fyysiset vahingot
                    eivät ole seurausta yhtäkkisestä tapahtumasta vaan
                    pitkäaikaisesta altistumisesta vaarallisille tai
                    epäterveellisille olosuhteille. Tyypillisiä esimerkkejä ovat
                    kuulovauriot, jotka johtuvat pitkäaikaisesta altistumisesta
                    melulle, toistuvasta nostamisesta johtuvat selkävaivat ja
                    pitkäkestoisesta näyttöpäätetyöskentelystä johtuvat
                    silmäongelmat. Koska vaivat <strong>eivät ole suoraan yhteydessä
                    tiettyyn tapahtumaan</strong>, on vaikea todistaa yhteyttä
                    työtehtäviin ja ehkäistä niitä.</p>
                    <p>Ergonomisemmat työtavat,
                    oikea suojavarustus ja tehtävien monipuolisuus ehkäisevät
                    ammattitauteja parhaiten. </p>
                    <b>Psykososiaaliset riskit</b>
                    <p>Psykososiaaliset riskit ovat <strong>psyykkiseen ja fyysiseen
                    terveyteen liittyviä riskejä</strong>, jotka juontavat juurensa työn
                    sisällöstä tai työn kontekstista. Sisällöllä tarkoitetaan
                    tässä työtehtävien laatua, työmäärää, aikatauluja ja työn
                    olosuhteita (työpaikka, laitteistot jne.). Kontekstilla taas
                    viitataan tässä työntekijän mahdollisuuksiin vaikuttaa
                    työhönsä, työpaikan työkulttuuriin, työyhteisön jäsenten
                    välisiin suhteisiin, etenemismahdollisuuksiin sekä työn ja
                    vapaa-ajan väliseen tasapainoon. Nämä riskit voivat
                    aiheuttaa äärimmäistä stressiä, masennusta, loppuun
                    palamista tai tylsistymistä, mutta myös fyysisiä ongelmia
                    kuten tuki- ja liikuntaelimistön vaivoja tai sydän- ja
                    verisuonitauteja.</p> 
                    <p>Useimmilla työpaikoilla on toimintaohje
                    seksuaalista häirintää, asiatonta käytöstä, kiusaamista ja
                    muita vastaavia tilanteita varten. <strong>Ongelmien esiin ottaminen
                    ajoissa</strong> voi auttaa minimoimaan psykososiaalisten riskien
                    seurauksia.{" "} </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox"
            onClick={() => isViisiAskeltaChecked()}>
              <h3>1.2 Viisi askelta riskien vähentämiseen </h3>
              {viisiAskeltaChecked ? (
                <div class="chapterText">
                  <p>
                  Tapaturmateorian avulla opimme tunnistamaan riskit. Seuraava askel riskienhallinnassa on ryhtyä turvallisuutta lisääviin toimenpiteisiin. Toteuttamistapa riippuu kulloisestakin kokonaistilanteesta. Tilanteen salliessa kohdistamme toimet mahdollisiin tapaturman aiheuttajiin, niin että poistamme riskit tai vältämme riskitekijöiden kasautumisen. Jos tämä ei ole mahdollista, pyrimme minimoimaan seuraukset. 

Periaatteena on, että arvioimme riskin, suoritamme parhaan mahdollisen toimenpiteen ja arvioimme riskin uudelleen niin kauan, että se on hyväksyttävissä rajoissa. On tärkeää tarkastella arvioinnissa koko tilannetta, koska on mahdollista, että yhtä riskitekijää pienentämällä syntyy uusi riski. 

Mahdollisia toimenpiteitä on viittä eri tyyppiä. Jotkut takaavat tilanteen turvallisuuden paremmin kuin toiset, mutta kaikkia toimenpiteitä ei voi soveltaa joka tilanteeseen. Joissain tapauksissa riskin vähentäminen estäisi kokonaan toiminnan, jota yritämme suojata. Oikean toimenpiteen valinta on aina tasapainottelua turvallisuuden ja käytettävyyden välillä. Viisi toimenpidetyyppiä tehokkaimmasta vähiten tehokkaaseen ovat: 

1. Riskin poistaminen 

2. Yleinen suojaaminen 

3. Henkilökohtainen suojautuminen 

4. Koulutus 

5. Tiedottaminen, ilmoittaminen ja varoittaminen 

Riskin poistaminen 

Tehokkain toimenpide on riskin poistaminen. Jos poistamme tapaturman mahdollisen aiheuttajan, ongelmaa ei enää ole. 

Esimerkiksi: 

Näyttämön lattiassa on aukko (luukku, orkesterisyvennys, hissi tms.), jonka takia on olemassa riski, että ihmiset putoavat aukkoon. Aukon sulkeminen poistaa riskin kokonaan. 

Työkalujen ja laitteiden käyttö näyttämöllä on välttämätöntä, mutta voimme poistaa ne 

kulkuväyliltä ja säilyttää niitä kuljetuslaatikoissa tai varastotiloissa. Työkaluihin ja 

laitteisiin kompastumisen riski poistetaan kulkuväyliltä ja riski siirtyy muualle. 

Yleinen suojaaminen 

Jos riskiä ei voida kokonaan poistaa, suoritamme toimenpiteitä, jotka suojaavat kaikkia ihmisiä yleisesti. Kun kehittelemme yhteisiä turvaratkaisuja, meidän täytyy ottaa huomioon käyttäjien väliset erot. Voi olla tarpeen tehdä muutoksia yleiseen suojaukseen lapsia, ikäihmisiä ja vammaisia varten. 

Esimerkiksi: 

Näyttämön lattiassa on aukko (luukku, orkesterisyvennys, hissi tms.), jota tarvitaan juuri nyt. Suoja-aidan pystyttäminen aukon ympärille suojelee kaikkia. Kukaan ei pääse aukon lähelle, joten kukaan ei putoa. Tässä tapauksessa on tärkeää määritellä, ketkä kuuluvat ”kaikkiin”. Jos joukkoon kuuluu myös lapsia, suoja-aidan rakoja täytyy pienentää. 

Valonheittimen ripustaminen tankoon sisältää erityisen putoamisriskin, koska valaisin roikkuu ihmisten päiden päällä. Riskinä on pultin tai kiinnikkeen katkeaminen. Turvavaijeri estää valonheitintä putoamasta ja turvaa alla olevat ihmiset. 

 

Henkilökohtainen suojautuminen 

Useimmiten yleinen suojaaminen ei tule kysymykseen, koska se tekisi esitysteknisen laitteiston käytön mahdottomaksi. Silloin täytyy erikseen suojata henkilöt, jotka työskentelevät laitteiston kanssa. Tämä ei kuitenkaan tee yleistä suojaamista tarpeettomaksi, koska myös muita ihmisiä pitää suojella. Monesti tarvitaan kaksinkertaista suojausta: yleinen suojaus niille, jotka eivät osallistu toimintaan ja henkilökohtainen suojaus niille, jotka käyttävät laitteita. Henkilökohtaisen suojauksen heikkous on siinä, että suojattava henkilö on itse vastuussa sen käytöstä. 

On olemassa kahdenlaista henkilökohtaista suojausta. Suojaus joko estää tapaturmat tai minimoi niiden vaikutukset. 

Esimerkiksi: 

Turvakenkien ansiosta varpaille tippuva valonheitin aiheuttaa minimaalisen vahingon. 

Valjaat, joissa on turvaköysi, estävät joutumisen liian lähelle näyttämöllä olevaa aukkoa. 

 

Koulutus 

Joskus on vaikeaa suojella ihmisiä taiteellisessa työympäristössä. Jotkut turvatoimet eivät sovi yhteen taiteellisen vision kanssa, ne pilaavat esityksen sisällön tai häiritsevät näyttämökuvaa. Näitäkin riskejä voidaan vähentää kouluttamalla ihmisiä. Heillä pitää olla syvä ymmärrys riskitekijöistä ja heidän pitää harjoitella miten ottaa riskit huomioon näyttämöllä ja kuinka toimia, kun jotain sattuu. 

Esimerkiksi: 

Näyttämöllä on aukko katoamistemppua varten. Meidän pitää opastaa näyttelijöitä ja muita näyttämöllä olevia henkilöitä, kuinka näyttämöllä toimitaan, kun näyttämöluukku on auki. 

Näyttelijä pitää opettaa käyttämään asetta niin, että kuulovaurioita ja palovammoja ei 

synny. 

On tilanteita, joissa koulutus on ainoa vaihtoehto. Näiden lisäksi tarvitaan koulutusta yleisen ja henkilökohtaisen suojauksen käyttöön. Toimenpiteet tehoavat vain, jos niitä käytetään oikein 

 

Tieto, tiedottaminen ja varoittaminen 

Viimeinen askel on tiedottaa ja varoittaa kaikkia ihmisiä, joita riskit koskevat. Tiedottaminen ja varoittaminen eivät pienennä riskejä tai tapaturman seurauksia, mutta tiedottamisen ja varoittamisen ansioista ihmiset ovat tietoisia riskeistä.  

Varoitukset sisältävät kaiken tyyppiset opasteet (varoituskyltit ovissa jne.), jotka kiinnittävät ihmisten huomion tietyn ympäristön riskeihin. Kyltit myös kertovat, mitä henkilökohtaista suojausta tietyssä ympäristössä tarvitaan ja mitä turvavälineitä on saatavilla. Konkreettiset riskit tehdään näkyvämmiksi merkitsemällä tai valaisemalla. Ihmisten tiedottaminen auttaa heitä toimimaan tietyissä tilanteissa. Työpisteillä annetaan ohjeet laitteiston turvalliseen käyttöön ja tuotteiden turvaohjeissa kerrotaan, miten niitä pitää käsitellä. 

Toimintaohjeet eli sovittujen toimintojen ja vastuiden selittäminen (talon säännöt) kertovat ihmisille, kuinka toimia eri tilanteissa. Tämäntyyppinen tiedottaminen täytyy toistaa säännöllisin väliajoin. Joissain työpaikoissa tällainen ohjeistus jaetaan päivittäisissä tiedotustilaisuuksissa. 

Esimerkiksi:  

Näyttämön lattiassa oleva aukko tehdään näkyväksi kiinnittämällä sen ympärille LED-nauhoja. 

Ennen esityksen alkua näyttämöhenkilökunnalle kerrotaan, kuinka toimia normaaleissa ja  

poikkeustilanteissa trapetsiesityksen aikana 

Ovilla on teksti, joka varoittaa yleisöä esityksessä käytettävistä välkkyvistä valoista 

 

Keinojen yhdisteleminen 

Useimmiten tarvitsemme useampia turvatoimia pienentääksemme riskit hyväksyttävälle tasolle. Riskien vähentäminen alkaa yllämainituilla viidellä askeleella. Jokaisen askeleen jälkeen arvioimme riskit uudelleen ja suoritamme lisää turvatoimia, kunnes riskit ovat hyväksyttävällä tasolla. 

On tärkeää ottaa huomioon kokonaistilanne kaikkine riskeineen. On mahdollista, että yhden riskitekijän minimoiminen synnyttää uuden riskin. Uusi riski tunnistetaan tilannearviossa. 

Toiminnan kokonaisuuteen voi liittyä useita riskejä. On tärkeää käsitellä niitä yksitellen, jotta toiminta on kokonaisuudessaan turvallinen. 

 

Odottamattomat riskit 

Kaikkia riskejä ei tietenkään voi ennakoida eikä niitä siis yksilöidä riskiarviossa. Tällöin ratkaisuna on viime hetken riskiarvio, jonka työntekijät tekevät itse, kun ongelmia ilmenee. He tekevät nopean tilanneanalyysin ja vähentävät riskiä viiden askeleen periaatteen mukaisesti. 

Varo väärää turvallisuudentunnetta 

Pahinta mitä voi tehdä on antaa ihmisten luulla, että tilanne on turvallinen silloin kun se ei ole. Tästä koituu entistäkin vaarallisempia tilanteita, koska ihmisiltä häviää tietoisuus riskeistä. 

Esimerkiksi:  

Näyttämöllä oleva aukko peitetään ohuella vanerilevyllä. Paikka näyttää nyt turvalliselta, mutta jos aukon päälle astuu, putoaa levyn läpi. 

Riskienarviointi 

Riskienarviointi on prosessi, jossa tunnistetaan riskit ja ehdotetaan toimia terveyden ja turvallisuuden nostamiseksi hyväksyttävälle tasolle. Työympäristössä arvio on muodollinen. Tämä on tarpeen, koska riskit koskevat useita ihmisiä monitahoisessa tilanteessa. Se on osa työpaikan riskienhallinnan kokonaisuutta. Riskiarviointi täytyy dokumentoida, jotta siitä olisi hyötyä koko työyhteisölle. 

Riskiarviointi on työkalu. Se on menetelmä, joka auttaa meitä tunnistamaan riskit, ehdottamaan toimenpiteitä ja dokumentoimaan prosessin. Se ei kuitenkaan ole päämäärä tai tavoite itsessään, vaan päämäärä on luoda turvallisempi työympäristö. 

Riskiarviointia voidaan tehdä eri tasoilla ja eri tilanteita varten. Jotkut arvioinnit ovat staattisia - rakennus seisoo paikallaan pitkän aikaa eikä tilanne juurikaan muutu. Toiset arvioinnit ovat muuttuvampia, koska esitystuotannot vaihtuvat. 

Kaikki riskiarvioinnit täytyy nähdä kokonaisuuksina. On täysin mahdollista tuoda turvallinen esitys turvalliselle näyttämölle ja synnyttää samalla uusia riskejä. Jos tilanteet muuttuvat, riskianalyysi pitää päivittää. Siten riskiarviointi on jatkuva prosessi. Jos työprosessin aikana ilmenee ennakoimattomia riskejä, voi olla tarpeen tehdä viime hetken riskiarvio. Tämän tekevät työntekijät itse välittömästi, kun huolenaihetta ilmenee.  

Riskienhallinnan menetelmiä on paljon ja jokaisella on hyvät ja huonot puolensa. Numeeriset menetelmät määrittävät riskit numeroiden avulla ja laskevat todennäköisyyksiä ja esiintymistiheyksiä sekä koulutuksen tasoja. Tekstilähtöiset taas yhdistävät käsitteet tiettyihin mittareihin. 

Riskienhallinnanjärjestämät auttavat priorisoimaan toimintoja. Ei ole aina mahdollista tai tarpeellista ryhtyä konkreettisiin toimiin yksittäisten riskien suhteen. Riskienhallintajärjestelmä ottaa huomioon työpaikan realiteetit, kuten toimenpiteen kustannukset, suunnittelun, tuotantoajan menetyksen ja määräajat, joiden perusteellä päätetään suoritetaanko toimenpiteet heti vai voidaanko ne lykätä tiettyyn määräpäivään. 

Meidän tehtävämme riskienarviointiprosessissa on olla aktiivinen osallistuja, tiedottaa riskeistä turvallisuusvastaavalle, tehdä viime hetken riskianalyysejä tilanteissa, jotka eivät olleet ennustettavissa ja tietysti noudattaa riskianalyysin tuloksena syntyviä suosituksia.{" "} </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox"
              onClick={() => isOikeudetChecked()}
            >
              <h3>1.3 Oikeudet ja velvollisuudet </h3>
              {oikeudetChecked ? (
                <div class="chapterText">
                  <p>
                  Taatakseen jokaisen EU-maan työntekijän tasavertaisen kohtelun työterveys- ja turvallisuusasioissa, Euroopan unioni on määritellyt perusoikeudet ja -velvollisuudet sekä työnantajille että työntekijöille. Nämä säädökset on sisällytetty jokaisen jäsenmaan kansalliseen tai alueelliseen lainsäädäntöön. Maat voivat tietysti asettaa vaatimuksensa korkeammallekin, mutta kaikkien pitää noudattaa ainakin alla lueteltuja vähimmäis-vaatimuksia. 

Työntekijän täytyy: 

käyttää asianmukaisesti koneita, laitteita, työkaluja, vaarallisia aineita, kuljetuskalustoa, muita tuotantoon liittyviä välineitä ja henkilökohtaisia turvavarusteita. 

tiedottaa työnantajaa välittömästi kaikista tilanteista, joista aiheutuu vakavaa ja välitöntä vaaraa, sekä kaikista puutteista turvajärjestelyissä. 

tehdä yhteistyötä työnantajan kanssa työturvallisuusvaatimusten täyttämiseksi ja työympäristön ja -olosuhteiden turvallisuuden takaamiseksi. 

Työntekijöille pitää taata työterveyspalvelut kansallisen terveysjärjestelmän mukaisesti. Riskiryhmiä pitää suojella vaaroilta, jotka vaikuttavat heihin erityisesti. 

Työnantajan täytyy: 

arvioida kaikki työntekijöiden terveyteen ja turvallisuuteen liittyvät riskit, muun muassa työvälineiden valinnassa, kemiallisten aineiden ja valmisteiden käytössä sekä työpaikkojen järjestelyissä. 

suorittaa toimenpiteitä, jotka parantavat työntekijöiden turvallisuutta ja jotka integroidaan kaikkeen hankkeen ja/tai työpaikan toimintaan ja joita noudatetaan kaikilla hallinnollisilla tasoilla. 

osoittaessaan työntekijälle tehtäviä ottaa huomioon työntekijän kyvyt ja ominaisuudet, jotka vaikuttavat terveyteen ja turvallisuuteen 

kysyä työntekijöiltä neuvoa uuden teknologian käyttöönottoa varten 

nimetä työntekijä/työntekijöitä suorittamaan työturvallisuuteen ja ammatillisten riskien ehkäisyyn liittyviä toimenpiteitä. 

suorittaa tarvittavat toimet, jotta ensiapu, sammutustyöt ja työntekijöiden evakuointi sujuvat ongelmitta vakavassa ja välittömässä vaaratilanteessa. 

dokumentoida työtapaturmat ja laatia vastuullisille viranomaisille raportteja työntekijöille sattuneista työtapaturmista. 

tiedottaa ja kysyä neuvoa työntekijöiltä ja antaa heidän osallistua keskusteluihin kaikista työturvallisuuteen ja -terveyteen liittyvistä asioista. 

varmistaa, että jokainen työntekijä saa riittävän työturvallisuus- ja -terveyskoulutuksen. {" "} </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "lightgray",
              boxShadow: "0px 0px 10px gray",
              height: "5em",
            }}
            onClick={() => setIsFirstPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>1 Työskentele turvallisesti</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <FaArrowAltCircleRight />
              </p>
            </div>
          </div>
        </div>
      )}
  
{secondpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>2 Luo turvallinen ja ympäristöystävällinen työpaikka</h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isSecondPartShown()}
                >
                  <FaArrowAltCircleDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
              Luodaksesi turvallisen ja ympäristöystävällisen työpaikan, sinun täytyy
tiedostaa riskit, jotka syntyvät sinun ja työtovereidesi toiminnasta näyttämöllä ja yleisöalueella
esitys- ja tapahtumatuotannoissa ja toimia niin, että kaikki ovat turvassa.
{" "}
              </p>
            </div>
            <div class="chapterBox"
              onClick={() => isNayttamoChecked()}
            >
              <h3>2.1 Näyttämön riskit </h3>
              {nayttamoChecked ? (
                <div class="chapterText">
                  <p>
                  Tätä ei voi korostaa liikaa: näyttämö on täynnä riskejä. Osa riskeistä täytyy eliminoida rakenteellisesti, mutta hyvin monet riskit voidaan minimoida näyttämötyöntekijöiden hyvillä käytännöillä. Ensimmäinen askel on erilaisten riskien tiedostaminen. 

Siisti näyttämö on turvallinen näyttämö 

Monien ihmisten täytyy olla näyttämöllä pystytyksen, purun, harjoitusten ja esitysten aikana. Heistä kaikki tarvitsevat vapaat kulkureitit työpisteilleen ja tilaa työskennellä. On ensiarvoisen tärkeää, että rakentamisen aikana tarvittavat tavarat ja materiaalit ovat näyttämöllä hyvässä järjestyksessä. Materiaalien tuonti näyttämölle juuri oikeaan paikkaan tehostaa työtä ja parantaa turvallisuutta. Selkeä ja hyvin järjestetty työpiste, olipa se sitten pysyvä tai väliaikainen, varmistaa, että työntekijät voivat liikkua näyttämöllä turvallisesti. 

Työkalut ja materiaalilaatikot laitetaan riviin näyttämön laidalle tai etureunaan. Tällä tavoin on helppo löytää mitä tarvitsee, laatikoita ei tarvitse liikutella ja kulkutiet pysyvät vapaina. Johdot vedetään heti oikeaan kohtaan, pois kävely- tai ajoreiteiltä. Lavasteiden osat tuodaan näyttämölle niin, että niitä ei tarvitse liikutella useaan kertaan pystytysvaiheessa. Ihannetapauksessa ne sijoitetaan näyttämölle samassa järjestyksessä kuin niitä käytetään. Roskat ja jätteet poistetaan näyttämöltä välittömästi. Lavasteet, joita ei käytetä, varastoidaan erikseen ja tyhjät kuljetuslaatikot viedään pois näyttämöltä, jos mahdollista. 

Poistumisteiden täytyy olla esteettömät ja turvavälineisiin täytyy päästä käsiksi kaikkina aikoina.  

Joskus siisteys on ristiriidassa taiteellisten vaatimusten kanssa. Usein likainen näyttämö on osa lavastusta. Tällöin tarvitaan tiettyjä turvatoimia työntekijöiden, laitteiden ja itse näyttämön suojelemiseksi. Näyttämön lattia pitää suojella vaurioilta ja lattian kantokyky pitää varmistaa. 

Meidän pitää välttää materiaalien karkaamista niiden käyttöalueen ulkopuolelle. Tämä on erityisen tärkeää silloin, kun kyse on aineista, jotka voivat valua alapuolella oleviin tiloihin tai leijua ilmassa. 

Valaistusolosuhteet 

Yksi turvallisen työn tärkeimmistä tekijöistä on kunnon valaistus. Kun olemme rakentamassa esitystä, hyvä valaistus auttaa näkemään mitä olemme tekemässä. Esityksen aikana työskentely tapahtuu kuitenkin esitystä varten suunnitellun valaistuksen ehdoilla. Tämän takia tarvitsemme näyttämön sivuille valoja, jotka eivät näy katsomoon mutta mahdollistavat liikkumisen ja työskentelyn. Tähän tarkoitukseen käytetään useimmiten sinistä valoa, joka ei heijastu mustista tai tummansinisistä sivukatteista, mutta auttaa näkemään eteensä kulisseissa. 

Rajallisten valaistusolosuhteiden takia kompastumiset pitää ehkäistä huolellisesti. Portaat, esteet ja kulkuväylät merkitään fosforiteipillä eli jälkiheijastavalla teipillä tai muulla huomiomateriaalilla. 

 

Korkean riskin alueet 

Joihinkin pystytyksen vaiheisiin kuuluu vaarallisia tehtäviä, kuten työskentely avoimella köysiullakolla tai elementtien kokoaminen muiden työntekijöiden yläpuolella. Muita riskitekijöitä ovat lattialuukkujen avaaminen sekä liikkuvat nostolavat, orkesterimontut ja korokkeet. Näissä tapauksissa vaarallinen alue aidataan ja ainoastaan tehtävän edellyttämillä työntekijöillä on pääsy kyseiselle alueelle. Heidän tulee käyttää asiaankuuluvia henkilönsuojaimia riskin minimoimiseksi.  

Harjoitusten ja esitysten aikana taiteellisten syiden takia aidat ja muut turvatoimet täytyy jättää pois. Silloin käytetään vaihtoehtoisia keinoja huomion kiinnittämiseksi riskiin ja työntekijöiden määrän minimoimiseksi korkean riskin alueella. Turvatoimien poiston jälkeen alueelle päästetään ainoastaan ihmisiä, joita tarvitaan näyttämöllä ja jotka on koulutettu kyseistä tilannetta varten.  

 

Erityistilanteet 

Jotkut näyttämöllä suoritettavat tehtävät heikentävät työolosuhteita. Valojen suuntaaminen edellyttää pimeää näyttämöä, jotta tehtävän voi hoitaa kunnolla. Muun toiminnan pitää sopeutua tai pysähtyä siksi aikaa.  

Soundcheck ja kaiutinjärjestelmän säätö edellyttävät joskus järjestelmän käyttöä huomattavan kovaäänisesti tai maksimiteholla. Tämän takia keskusteleminen näyttämöllä on mahdotonta ja riskinä ovat korkeat äänenvoimakkuudet. Vaikutusalueella olevien ihmisten pitää käyttää kuulonsuojaimia. 

Erikoistehosteiden testaamiseen liittyy aina epävarmuustekijöitä. Emme voi koskaan tarkasti tietää tehosteen laatua ja siihen liittyviä riskejä, ennen kuin sitä testataan näyttämöllä täsmälleen samoissa olosuhteissa, joissa sitä tullaan käyttämään. 

Tavoitteena on, että näissä erityistilanteissa näyttämöllä olisi ainostaan ihmisiä, joita tilanne suoranaisesti koskee. 

 

Ala- ja yläpuolella olevat koneet ja laitteet 

Pystytyksen ja purun aikana nostimet ja muu ripustuskalusto liikkuvat ihmisten yläpuolella. Nostoa operoiva henkilö varoittaa kaikkia näyttämöllä olijoita liikkeistä erityisesti silloin, kun liike tapahtuu päiden tasolla. Sinun pitää kuitenkin itsekin tarkkailla, mitä pään yläpuolella tapahtuu. 

Riskejä aiheuttavat myös muut näyttämöllä olevat laitteet ja työntekijöillä on velvollisuus suojata laitteet niin, että ne eivät voi vahingoittaa ihmisiä, ja heidän pitää myös aidata työskentelyalueet, mutta riski on silti aina olemassa. Tapaturmien välttämiseksi on ensiarvoisen tärkeää kiinnittää huomiota alati muuttuvaan työympäristöön. 

Koneiden suojaaminen 

Kun vaarallisiin koneisiin ja laitteisiin on pääsy henkilöillä, joilla ei ole koulutusta eikä lupaa niiden käyttöön, ne täytyy suojata asiatonta käyttöä vastaan. Nostinjärjestelmät, pyrotekniikka, nostolaitteet, henkilönostimet ja sähkölaitteet, kuten myös rautaesiripun käyttöpaneeli täytyy lukita. 

 

Alkoholi, huumeet ja muut työskentelyyn vaikuttavat aineet 

Kaikki aineet, jotka vaikuttavat kykyyn reagoida nopeasti, ajatella kunnolla ja työskennellä tarkasti, pitää kieltää, koska ne aiheuttavat riskin muille näyttämöllä olijoille. Tämä kielto ei koske pelkästään näiden aineiden käyttöä vaan myös vapaa-aikana tapahtuneen käytön vaikutuksia, jotka tuntuvat myös työaikana. 

Kiellettyihin aineisiin kuuluvat: 

alkoholi 

kaikenlaiset huumeet 

lääkkeet, joilla on samankaltaisia vaikutuksia (tarkasta, mitä tuoteselosteessa sanotaan autolla ajamisesta ja koneiden ja laitteiden käytöstä) 

Monet työnantajat noudattavat nollatoleranssia, mutta vähimmäisvaatimuksena on noudattaa samoja rajoituksia kuin autolla ajettaessa. 

 

Enimmäistyöaika 

Aika jolloin ihminen voi työskennellä keskittyneesti on rajallinen. Myös ahkerimmilla työntekijöillä on raja ajalle, jolloin he voivat tehdä työnsä tarkasti ja reagoida nopeasti. Ylittämällä nämä aikarajat he vaarantavat työtoverinsa. 

Tähän asiaan liittyy myös vuorokausilepo eli lepoaika työvuorojen välillä. Lyhyiden öiden ja unien takia ihminen reagoi hitaammin ja vähemmän tarkasti. 

Enimmäistyöaikaa ja vuorokausilepoa koskevat asetukset vaihtelevat maittain. Joissain maissa enimmäistyöajan ylittäminen on rangaistava teko. Suomessa pääsääntönä vuorokausilevossa on, että työntekijälle on annettava jokaisen työvuoron alkamista seuraavan 24 tunnin aikana vähintään 11 tunnin pituinen keskeytymätön vuorokausilepo. Vastaavasti pääsääntönä viikoittaisessa vapaa-ajassa on, että työntekijä saa kerran seitsemän päivän aikana vähintään 35 tuntia kestävän keskeytymättömän lepoajan. Lepoaikoihin on olemassa poikkeuksia esimerkiksi jaksotyössä ja liukuvassa työajassa. Myös eri alojen työehtosopimuksissa on eroja, joten varmista oma lepoaikasi. 

Työskentely kolmansien osapuolten kanssaPystytyksen aikana näyttämöllä voi työskennellä myös tuotannon ulkopuolisia työryhmiä. Lakiasioiden näkökulmasta niitä kutsutaan “kolmansiksi osapuoliksi”. Kolmannet osapuolet eivät saa aloittaa työskentelyä ennen kuin heille on kerrottu paikalliset työhön ja turvallisuuteen liittyvät asiat: 

työn järjestäminen, paikalliset säädökset 

käytettävissä olevat työvälineet, koneet jne. 

olemassa olevat käytännöt 

henkilönsuojainten käyttö 

poistumistiet, turvavälineet, ensiapu 

Toiminnat täytyy myös koordinoida. Täytyy olla selvää, kuka on vastuussa mistäkin työn osaalueesta ja mitä riskejä eri osapuolet aiheuttavat toisilleen. Täytyy myös varmistaa, että kaikki osapuolet ovat päteviä suorittamaan tehtävät turvallisesti. 

Työantaja, joka kantaa kokonaisvastuun, usein delegoi vastuun turvallisuusasioista näyttämömestarille, järjestäjälle, stagemanagerille tai muulle turvallisuusvastaavalle, joka pitää tiedotustilaisuuden ja turvallisuusinfon ja kertoo kaikille laatimansa aikataulun siitä, kuka näyttämöllä tekee mitä ja milläkin hetkellä. 

 

Kun asiat menevät vikaan 

Poikkeustilanteessa tai onnettomuuden sattuessa sinun pitää ensimmäiseksi varmistaa oma turvallisuutesi. Seuraava askel on ilmoittaa tilanteesta turvallisuusvastaavalle ja pyrkiä minimoimaan tapaturmasta aiheutuvat haitat. Pyri siihen, että muut ihmiset eivät altistu riskille. Turvallisuusvastaava käy turvallisuusinfossa läpi esiintymispaikkaan ja kulloiseenkin esitykseen liittyvät toimenpiteet ja vastuunjaon hätätilanteen sattuessa. 

Jos sinun pitää soittaa hätänumeroon, anna tarkat tiedot: 

Kerro, mitä on tapahtunut. 

Kerro tarkka osoite, kunta ja tapahtuma. 

Vastaa sinulle esitettyihin kysymyksiin. 

Toimi annettujen ohjeiden mukaisesti. 

Lopeta puhelu vasta saatuasi siihen luvan. {" "} </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox"
            onClick={() => isYleisoChecked()}>
              <h3>2.2 Yleisöturvallisuus </h3>
              {yleisoChecked ? (
                <div class="chapterText">
                  <p>
                  Ensisijainen vastuu yleisöturvallisuudesta on toiminnanharjoittajalla tai tapahtuman järjestäjällä. Yleisön turvallisuusasioista huolehtimiseen on tuotannossa voitu nimetä erikseen henkilö. Hänen kanssaan pitäisi keskustella aina, kun työskentelet yleisöalueella ja muutamat perusperiaatteet auttavat ehkäisemään riskejä siellä. 

Vaihtoehtoiset tilat 

Viime vuosina yhä useampia esityksiä on tuotettu paikkoihin varsinaisten esitys- tai tapahtumatilojen ulkopuolella. Näissä paikoissa esityksen järjestäjä yleensä rakentaa katsomon ja tekninen henkilökunta osallistuu normaalia enemmän yleisötilan luomiseen. Heidän pitää noudattaa samoja turvaohjeita kuin tavallisessa teatterissa ja pysyttäytyä niissä kompetensseissa, joihin heidät on koulutettu. 

Ulkoilmatapahtumassa tai väliaikaisessa esiintymispaikassa täytyy luoda uusia toimintatapoja. Voi olla tarvetta uudenlaiselle vastuunjaolle, uusille turvallisuussäädöksille, vartioinnin lisäjärjestelyille ja erikoisjärjestelyille yleisön suhteen. 

Maasta riippuen joko paikallinen pelastuslaitos tai aluehallinto tarkastaa, onko kaikki järjestetty säännösten, lupien ja ohjeiden mukaan. 

Varmista kulkuväylät normaalia poistumista ja hätätilanteita varten 

Minimoidaksemme riskit meidän täytyy varmistaa, että mitkään yleisötilaan tehdyt muutokset eivät tuki yleisön kulkuväyliä. Johtojen vedot pitää suunnitella niin, että ne eivät luo kompastumisriskiä. Laitteita, seurantavalonheittimiä, kameroita, henkilökunnan tuoleja tai muuta vastaavaa ei saa sijoittaa yleisön kulkuväylille. Luonnollisesti me emme myöskään saa jättää tilaan roskia, tyhjiä laatikoita tai muuta ylimääräistä. 

Kulkureittien vähimmäisleveydet vaihtelevat maittain ja joskus jopa paikallinen pelastusviranomainen antaa erilliset määräyksensä. Joka tapauksessa on aina olemassa vähimmäisleveys, johon vaikuttavat ihmisten lukumäärä ja se, onko kulkuväylä tasainen, nouseva tai laskeva.  

 

Varmista, että poistumis- ja turvavalot sekä turvamerkit ovat selkeästi näkyvillä 

Yleisötilassa on kahdentyyppistä valaistusta lisäämässä turvallisuutta. Toinen palaa jatkuvasti, jotta katsojat näkevät minne mennä, jos heidän pitää lähteä tilasta esityksen aikana. Näitä valoja kutsutaan poistumisopastevalaistukseksi, jotka useissa tapauksissa yhdistetään poistumistie- ja turvamerkkeihin.  

Toinen valaistustyyppi on turvavalaistus, joka syttyy hätätilanteessa. Sen avulla ihmiset pääsevät poistumaan tilasta, vaikka samaan aikaan olisi sähkökatkos. Turvavalaistuksen valoteho on korkeampi kuin poistumistieopasteiden. 

Arkikielessä poistumisopastevaloista ja turvaloista käytetään usein termiä hätävalot. 

Missään tilanteessa poistumistieopasteita tai turvavalaistusta ei saa peittää tai kytkeä pois päältä, kun yleisö on katsomossa. Jos havaitset minkäänlaisia poikkeamia tai rikkinäisiä laitteita, ota yhteyttä turvallisuuspäällikköön. 

 

Putoamissuojaus 

Kun pystytetään väliaikaisia rakennelmia, joihin yleisöllä on pääsy, putoamissuojaus täytyy hoitaa erityisellä huolella. Korokkeille ja muihin kohtiin, joissa on putoamisvaara, täytyy asentaa kaiteet. Katsomorakenteissa tuolien putoaminen estetään matalilla kaiteilla katsomopalojen reunoilla. Korokkeille nousemista varten täytyy olla myös kunnon portaat. 

 

Näyttämötehosteet 

Näyttämöllä käytettävät tehosteet voivat aiheuttaa riskin yleisölle. 

Äänenvoimakkuudet voivat nousta liian korkeiksi joissain katsomon osissa. 

Laserit voivat vahingoittaa silmiä. 

Strobovalot voivat laukaista epileptisen kohtauksen. 

Savu voi saada ihmiset paniikkiin tai aiheuttaa hengitysoireita. 

Tuli voi saada ihmiset paniikkiin. 

Pyrotekniikka voi vahingoittaa korvia, silmiä ja aiheuttaa palovammoja. 

Blinderit eli häikäisyvalot voivat sokaista silmät joksikin aikaa. 

Tärkeintä on olla altistamatta yleisöä riskille. Estämme yleisöä pääsemästä liian lähelle ja rajoitamme tehosteet turvalliselle tasolle. Jotkut ihmiset ovat kuitenkin herkempiä, ja heitä varten meidän täytyy laittaa sisääntulo-oville varoitukset näistä riskeistä ja muutoin ennakolta informoida yleisöä tehosteiden käytöstä. 

 

Erityisjärjestelyjä erityisryhmille 

Joidenkin katsojien kuten lasten, aisti- ja liikuntarajoitteisten ihmisten sekä ikäihmisten vuoksi täytyy joskus tehdä erityisjärjestelyjä. Tämä voi tarkoittaa pienempiä aukkoja turvakaiteissa, ramppeja tai pyörätuoleille varattuja paikkoja katsomossa. Joissain maissa voidaan edellyttää valvojan nimeämistä erityisryhmiin kohdistuvien riskien minimoimiseksi. 

Työskentely yleisön yläpuolella 

Poikkeustapauksissa meidän täytyy työskennellä yleisön yläpuolella, tällöin tarvitaan ylimääräisiä turvatoimia ja erityistä huomiota kiinnitetään putoaviin esineisiin. Esimerkiksi kaikki yleisön yläpuolella työskentelevät henkilöt tyhjentävät taskunsa ja kaikki työkalut ja muut esineet suojataan putoamisen varalta. 

 

Vaaralliset alueet 

Jos yleisöllä on pääsy näyttämölle tai huoltoalueille, meidän täytyy lukita kaikki vaaralliset alueet, kuten kattoristikko ja sillat, sähkökaapit ja varastot. Tällöin kiinteisiin poistumisteihin voidaan joutua tekemään tilapäisiä muutoksia. Silloin turvallinen toiminta täytyy varmistaa tilanteeseen sopivin erityisjärjestelyin ja varmistaa kaikissa olosuhteissa yleisön turvallisuus. 

 

Toimintatavat 

Menettelytavat täytyy varmistaa missä tahansa teetkin töitä, mutta erityisesti silloin, kun työskentelet yleisöalueella esityksen aikana. Silloin käytännöt täytyy varmistaa yleisöturvallisuudesta vastaavan henkilökunnan kanssa. He kertovat sinulle, miten toimit sekä normaalitilanteissa että hätätilanteen sattuessa. {" "} </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox"
              onClick={() => isKestavaChecked()}
            >
              <h3>2.3 Kestävä kehitys </h3>
              {kestavaChecked ? (
                <div class="chapterText">
                  <p>
                  Kestävän kehityksen täytyy olla osa työtämme. Esitystaide on erittäin kuormittava ala. Me rakennamme lavasteita käytettäviksi pari kertaa, kuljetamme niitä pitkiä matkoja ja myöhemmin heitämme ne pois.  

Vähennä 

Käytä tavaraa, josta syntyy vähän jätettä. 

Vähennä energian käyttöä. 

Vähennä jätettä valitsemalla tuotteita, joissa on mahdollisimman vähän pakkausmateriaaleja, ja jotka voidaan käyttää tehokkaasti hyödyksi ja sitten kierrättää. 

Käytä uudelleen 

Käytä säilytyslaatikot, pakkausmateriaalit ja jätteet uudelleen aina kun mahdollista. 

Kierrätä 

Kierrätä jätteet hyötykäyttöön tai uusiksi tuotteiksi aina kun mahdollista. 

Päivittäisessä työssämme voimme tehdä pieniä mutta tärkeitä tekoja vähentääksemme ympäristönkuormitusta.  

Energiankulutus 

Paras tapa vähentää energiankulutusta on sammuttaa valot ja laitteet, silloin kuin niitä ei käytetä. Esimerkiksi työvalojen käyttö esitysvalojen sijaan vähentää energiankulutuksen puoleen. 

Kulutustavaroiden ja materiaalien käyttö 

Käytämme paljon kulutustavaroita. Joillekin voi löytää vaihtoehtoja ja loput voi kierrättää.  

Teipit voidaan korvata tarranauhoilla tai vastaavilla uudelleen käytettävillä kiinnitystarvikkeilla. Teipin säästämisen lisäksi ne pitävät myös johdot puhtaina. 

Kertakäyttöparistot voi korvata ladattavilla akuilla tai akkuparistoilla 

Värikalvot voi kierrättää, koska monet yritykset ottavat ne pyydettäessä takaisin. 

Paperin voi kierrättää tai paperityöt voi tehdä sähköisesti. 

Jätteiden lajittelu 

Jätteet voit lajitella huolellisesti. Näin perusmateriaalit voidaan kierrättää turvallisesti ja vastuullisesti. Paristot, maalit ja spray-purkit sekä vinyyliteipin voi kierrättää, jos ne lajitellaan erikseen. 

Liikkuminen 

Liikkumisen järjesteleminen ja suunnitteleminen voivat vähentää liikennettä. Yksinkertaiset järjestelyt kuten kimppakyydit voivat puolittaa ajetut kilometrit.  {" "} </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox"
              onClick={() => isTurvallisuusChecked()}
            >
              <h3>2.4 Turvallisuuslainsäädäntö </h3>
              {turvallisuusChecked ? (
                <div class="chapterText">
                  <p>
                  Terveyteen, turvallisuuteen ja kestävään kehitykseen liittyvistä asioista säädetään Euroopan unionin direktiiveissä, suosituksissa ja standardeissa. EU-direktiivit asettavat meille sekä vähimmäisvaatimukset ja perusperiaatteet, kuten ennaltaehkäisy ja riskinarviointi, että määrittelevät työnantajien ja työntekijöiden velvollisuudet. 

Euroopan unionin suositukset pyrkivät helpottamaan direktiivien toimeenpanoa ja eurooppalaisten standardisointijärjestöjen omaksumien standardien noudattamista. Euroopan unionin jäsenvaltiot integroivat direktiivit ja standardit omaan lainsäädäntöönsä ja standardointijärjestelmiinsä. Niillä on kuitenkin vapaus noudattaa kansallisissa laeissaan myös EU:ta tiukempia säännöksiä. 

 

Työturvallisuutta ja työterveyttä koskeva puitedirektiivi (89/391/ETY) 

Kaikkein tärkein asiakirja meidän kannaltamme on Työturvallisuutta ja työterveyttä koskeva puitedirektiivi (89/391/ETY), jossa kuvataan yleiset periaatteet, joiden mukaan työturvallisuus- ja terveysasioita käsitellään ja alan ongelmia ehkäistään. Puitedirektiivi sisältää myös työnantajien ja työntekijöiden velvollisuudet. 

Direktiivissä luetellut ennaltaehkäisyn yleiset periaatteet: 

riskien välttäminen 

riskien arvioiminen 

riskien aiheuttajiin puuttuminen 

työtehtävien mukauttaminen yksilöllisesti 

mukautuminen tekniseen kehitykseen 

vaarallisten elementtien korvaaminen vaarattomilla tai vähemmän vaarallisilla 

yhtenäisen ennaltaehkäisevän toimintamallin kehittäminen 

yleisten suojaamiskeinojen suosiminen (henkilökohtaisen suojakeinojen sijaan) 

tarpeellisten ohjeiden antaminen työntekijöille 

Työnantajien ja työntekijöiden velvollisuudet: 

On työnantajan velvollisuus taata työntekijöiden turvallisuus ja terveys kaikissa työhön liittyvissä asioissa. Työnantaja ei saa velvoittaa työntekijää kattamaan mitään turvallisuuteen ja terveyteen liittyviä kustannuksia. Kun työnantaja sopii töiden suorittamisesta pätevän ulkopuolisen palveluntarjoajan tai henkilön kanssa, tämä ei vapauta työnantajaa työturvallisuuteen ja terveyteen liittyvistä velvoitteista. 

 

Muut direktiivit 

Puitedirektiivistä johdetut direktiivit käsittelevät yksittäisiä asioita. Nämä direktiivit konkretisoivat puitedirektiivin sisältöjä tapauksissa, joissa toiminnan yhtenäistäminen on tarpeen.  

Meidän alaamme eniten koskevat direktiivit: 

Altistuminen fyysisille vaaroille: 

Direktiivi 2003/10/EY – melu 

Työpaikat, laitteet, kyltit, henkilönsuojaimet: 

Direktiivi 2009/104/EY – työvälineiden käyttö 

Direktiivi 92/58/ETY – turvallisuus- ja/tai terveysmerkit 

Direktiivi 89/656/ETY – henkilönsuojainten käyttö 

Direktiivi 89/654/ETY – työpaikkojen vaatimukset 

Taakkoja, ergonomiaa ja psykososiaalisia riskejä koskevat säädökset: 

Direktiivi 90/269/ETY – taakkojen käsittely käsin 

Suositukset 

Suositukset eivät ole sitovia, mutta ne auttavat direktiivien noudattamisessa. Niihin on kerätty hyviä käytänteitä ja konkreettisia esimerkkejä direktiivien tulkinnasta. 

Muut asiaan liittyvät dokumentit 

EU:ssa on myös direktiivejä, jotka käsittelevät muita terveyteen, turvallisuuteen ja kestävään kehitykseen suoraan vaikuttavia asioita. Esimerkiksi direktiivit markkinoille tuotavista laitteista määräävät, mitä vaatimuksia laitteiden täytyy täyttää, kuinka tuotteen valmistajan täytyy dokumentoida tuotteen käyttö jne. 

Seuraavilla direktiiveillä on suora vaikutus meidän alaamme: 

Direktiivi 2001/95 EY - tuoteturvallisuus 

Direktiivi 2006/95/EY - sähkölaitteet 

Direktiivi 2006/42/EY - uusi direktiivi, joka koskee mm. koneita, laitteita ja apuvälineitä 

Direktiivi 89/686/ETY – henkilönsuojaimet 

Standardit 

Yhtenäistetyt standardit konkretisoivat direktiivejä tietyllä alalla tai tietyntyyppisissä laitteissa. Standardit auttavat valmistajia rakentamaan laitteita, jotka vastaavat direktiivien tuotteille asettamia vaatimuksia.  

Standardit eivät kuulu lainsäädännön piiriin, joten jokainen valmistaja joko noudattaa niitä tai on noudattamatta. Jos valmistajat eivät kuitenkaan noudata kyseisiä standardeja, niiden pitää todistaa, että tuotteet eivät ole ristiriidassa EU:n lainsäädännön kanssa. 

Paikalliset lait ja säännöt 

Kansallisten ja EU-lainsäädännön lisäksi paikallinen hallinto, pelastuslaitos tai vakuutusyhtiö voi määrätä tiukempia sääntöjä. Useimmissa esitystiloissa on talon säännöt ja tavat. 

Turvallisuus ja vastuuvelvollisuus 

Työnantajat ja turvallisuusvastaavat korostavat turvallisuusasioiden dokumentoinnin tärkeyttä, koska ne haluavat suojata itsensä ja edustamansa organisaation tapaturmien varalta. Kun jotain tapahtuu, tutkitaan, kuka asiassa on vastuuvelvollinen. {" "} </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox"
              onClick={() => isVaroitusChecked()}
            >
              <h3>2.5 Varoitusmerkit </h3>
              {varoitusChecked ? (
                <div class="chapterText">
                  <p>
                  Varoitusmerkit varoittavat vaarallisista aineista ja tilanteista. Niitä sijoitetaan oviin, työpisteille, laitteisiin ja tuotepakkauksiin. 

Merkit ovat keltaisia kolmioita, joissa on musta reunus ja musta kuvio. </p>

<img src={sign1} alt="varoitusmerkki" ></img>

<p>Yleinen varoitusmerkki 

 

</p>

<img src={sign2} alt="varoitusmerkki" ></img>

<p>

Vaarallinen jännite 

 

</p>

<img src={sign3} alt="varoitusmerkki" ></img>

<p>

Riippuvia taakkoja 

 

</p>

<img src={sign4} alt="varoitusmerkki" ></img>

<p>

Liikkuvia ajoneuvoja 

 

</p>

<img src={sign5} alt="varoitusmerkki" ></img>

<p>

Lasersäteilyä 

 

</p>

<img src={sign6} alt="varoitusmerkki" ></img>

<p>

Optista säteilyä 

 

</p>

<img src={sign7} alt="varoitusmerkki" ></img>

<p>

Myrkyllistä ainetta 

 

</p>

<img src={sign8} alt="varoitusmerkki" ></img>

<p>

Syövyttävää ainetta 

</p>

<img src={sign9} alt="varoitusmerkki" ></img>

<p>

Tulenarkaa ainetta 

 

</p>

<img src={sign10} alt="varoitusmerkki" ></img>

<p>

Hapettavia aineita 

 

</p>

<img src={sign11} alt="varoitusmerkki" ></img>

<p>

Räjähtävää ainetta 

 

Merkinnät 

Varoitusmerkkiten lisäksi mustakeltaista teippiä käytetään joskus merkitsemään kulkuväyliä, jotka täytyy pitää vapaina, tai kiinnittämään huomio portaisiin. Tilanteissa, joissa valaistus on alhainen, portaat voidaan merkitä myös fosforiteipillä, joka hohtaa pimeässä. 

</p>

<img src={sign12} alt="varoitusmerkki" ></img>

<p>

Kun halutaan estää pääsy tietylle alueelle, käytetään usein punavalkoista nauhaa. 
</p>

<img src={sign13} alt="varoitusmerkki" ></img>

<p>

 {" "} </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox"
              onClick={() => isKieltoChecked()}
            >
              <h3>2.6 Kieltomerkit </h3>
              {kieltoChecked ? (
                <div class="chapterText">
                  <p>
                  Kieltomerkit osoittavat, minkälainen käytös aiheuttaa todennäköisesti terveys- tai turvallisuusriskin. Ne näyttävät ainoastaan mitä tai ketä kielto koskee. Merkit sijoitetaan oviin, työpisteille, välineisiin ja laitteisiin tai tuotepakkauksiin. Pyöreissä merkeissä on punainen reunus ja viistottainen viiva valkoista taustaa vasten. Musta merkki ympyrän sisällä osoittaa kielletyn toiminnan. 

 

 
                  </p>

<img src={sign14} alt="varoitusmerkki" ></img>

<p>
Yleinen kieltomerkki 

 

 
</p>

<img src={sign15} alt="varoitusmerkki" ></img>

<p>
Tupakointi kielletty 

 

 

</p>

<img src={sign16} alt="varoitusmerkki" ></img>

<p>

Avotulen teko kielletty 

 

</p>

<img src={sign17} alt="varoitusmerkki" ></img>

<p>

Vedellä sammuttaminen kielletty 

 

 
</p>

<img src={sign18} alt="varoitusmerkki" ></img>

<p>
Älä käytä hissiä tulipalon sattuessa 

 

 
</p>

<img src={sign19} alt="varoitusmerkki" ></img>

<p>
Älä lastaa raskaita kuormia 

 
</p>

<img src={sign20} alt="varoitusmerkki" ></img>

<p>

Ajoneuvoilla ajo kielletty 

 

 
</p>

<img src={sign21} alt="varoitusmerkki" ></img>

<p>
Tavaranjättö kielletty {" "} </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "lightgray",
              boxShadow: "0px 0px 10px gray",
              height: "5em",
            }}
            onClick={() => setIsSecondPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>2 Luo turvallinen ja ympäristöystävällinen työpaikka</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <FaArrowAltCircleRight />
              </p>
            </div>
          </div>
        </div>
      )}

      {thirdpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>3 Työskentele ergonomisesti</h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isThirdPartShown()}
                >
                  <FaArrowAltCircleDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
              Ergonominen työskentely edellyttää, että
noudatat ergonomian periaatteita työjärjestelyissä sekä välineiden ja materiaalien käsin
tapahtuvassa käsittelyssä.
{" "}
              </p>
            </div>
            <div class="chapterBox"
              onClick={() => isNostotChecked()}
            >
              <h3>3.1 Käsin tehtäviin nostoihin ja siirtoihin liittyvät riskit </h3>
              {nostotChecked ? (
                <div class="chapterText">
                  <p>
                  On tärkeää ymmärtää, että taakkojen painon ja käsittelytavan lisäksi myös työtehtävän toistuvuus ja yksipuolisuus voivat aiheuttaa vahinkoa. Satojen pienten tavaroiden siirtely voi aiheuttaa yhtä paljon vahinkoa kuin yksi raskas taakka. 

Tavaroiden käsittely työympäristössä voi aiheuttaa erityyppisiä vaurioita ihmiskeholle. Esittelemme alla kolme päätyyppiä: lyhytkestoiset vaivat, krooniset vaivat ja stressiin liittyvät vaivat. 

Lyhytkestoinen vaiva 

Lyhytkestoisen vaivan aiheuttaja on helppo tunnistaa. Vaiva voi olla akuutti, kuten liukastumisesta tai putoamisesta johtuva nilkan nyrjähdys. Vaiva voi ilmetä myös viiveellä, mutta syyn ja seurauksen välillä on selvä yhteys: paikallinen lihaksen väsyminen ja kivun tunne, yleinen väsymys tai liikkeiden koordinaation huonontuminen ovat tyypillisiä esimerkkejä. 

Krooninen vaiva 

Kroonisten vaivojen aiheuttajaa on vaikeampi tunnistaa. Vaiva on yleensä seurasta pitkäaikaisesta rasituksesta. Kyse on kehon kulumisesta - vauriosta, joka aiheutuu samojen kehonosien vuosia kestävästä (väärin)käytöstä ja ylikuormittamisesta. Taakkojen painon ja käsittelytavan lisäksi merkityksellistä on siis toiminnon toistuvuus.  

Usein vauriota ei huomaa paikan päällä, vaan myöhemmin, esimerkiksi kun keho on lepotilassa. Tämä on tyypillinen esitysteknikon vapaa-ajantauti.  

Kroonisia vaivoja voi aiheutua esimerkiksi polville, lonkille tai olkapäille, mutta esitystekniikan alalla työskentelevien yleisimmät ja vaikeimmat vaivat ovat selän alueella. Näiden vaivojen ymmärtämiseksi täytyy tietää perusasiat selkärangan rakenteesta. 

Selkäranka muodostuu 33 nikamasta, joita erottavat toisistaan tyynymäiset välilevyt. Selkäranka jaetaan neljään osaan. Levein näistä on lanneranka, joka muodostuu viidestä nikamasta alaselän alueella. Sen täytyy kannatella koko yläkehon paino ja samalla sen pitää olla joustava ja kestää suurta rasitusta. 

Selkärangan luuosia eli nikamia erottavat välilevyt, joilla on kaksi päätehtävää: vaimentaa selkään kohdistuvia kuormituksia ja mahdollistaa selkärangan liike. Välilevyjen ansiosta selkäranka pääsee joustamaan ja liikkumaan. Välilevyssä on kaksi osaa. Ulompana on kiinteä sidekudossyinen rengas ja sisällä hyytelömäinen ydin. 

Normaalitilanteessa, esimerkiksi kun seisomme, nikamat ovat kohtisuorassa toisiinsa nähden. Välilevyt kannattelevat rankaan ja nikamiin kohdistuvaa kuormitusta tasaisesti.  

Kun taas kannamme raskaita taakkoja, välilevyihin kohdistuva kuormitus kasvaa. Välilevyt painuvat kasaan, neste puristuu ulos ja välilevy kovenee. Niin kauan kuin välilevyt ovat kohtisuorassa nikamien kanssa, paine ei kasva liian suureksi, vaan välilevyt kannattelevat nikamia ja vaimentavat niihin kohdistuvan kuormituksen. Kun kannettava taakka lasketaan alas, välilevyt palaavat alkuasentoonsa. 

Kun kumarrumme eteenpäin, selkäranka taipuu. Tällöin välilevy puristuu kasaan etupuolelta ja nikamiin kohdistuu epätasainen paine. Epätasainen kuorma rajoittaa välilevyjen iskunvaimennuskykyä, mikä voi nopeuttaa välilevyn rappeutumista. 

Välilevyyn kohdistuvan väännön ja epätasaisesti jakautuvan suuren paineen yhdistelmää pidetään kaikkeen pahimpana selän terveyttä uhkaavana riskinä. 

Välilevyt rappeutuvat ihan tavallisissakin olosuhteissa iän myötä. Suuri kuormitus, väärät toimintatavat ja joissain tapauksissa yksittäiset tapaturmat nopeuttavat tätä prosessia. Oikeat tekniikat ja menetelmät viivästyttävät rappeutumisen vaikutuksia. 

Stressi 

Fyysisten syiden lisäksi psykologiset tekijät voivat aiheuttaa työperäisiä selkäongelmia. Stressitekijöitä on kahta tyyppiä: 

Työn mielekkyyteen liittyvät tekijät, kuten yksitoikkoisuus ja tyytymättömyys työtilanteeseen, esimerkiksi jos työskentelee varastossa, jossa ei koskaan pääse näkemään työnsä tuloksia. 

Työympäristöön suoraan liittyvät stressitekijät, jotka ovat joko aisteihin liittyviä tai ulkoisia 

Aististressin aiheuttaa prosessoitavan tiedon määrä. Kun lyhyessä ajassa pitää prosessoida liikaa informaatiota ja työssä on tiukkoja aikatauluja, työntekijän henkilökohtaiset rajat tulevat vastaan. Tästä voi seurata näkökyvyn alentumista, työnteon ja reagoinnin hidastumista sekä epäjärjestelmällistä toimintaa.  

Ulkoiset tekijät kuten melu ja savu voivat voimistaa stressiä. 

Stressin vaikutuksia on vaikea mitata ja ne ovat yksilöllisiä, mutta tiedon ylikuormituksen vähentäminen, tarkkaamon työrauhan takaaminen ja ulkoisen stressin vähentäminen parantavat työterveyttä ja -hyvinvointia joka tapauksessa. {" "} </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox"
            onClick={() => isErgonomisetChecked()}>
              <h3>3.2 Ergonomiset työtavat </h3>
              {ergonomisetChecked ? (
                <div class="chapterText">
                  <p>
                  Ergonomiset tekniikat ohjeistavat, miten laitteita ja muita taakkoja voi nostaa, siirtää, työntää tai vetää aiheuttamatta akuutteja tai kroonisia vammoja keholle. Tekniikat ovat osa suurempaa, ergonomisen työympäristön kokonaisuutta. Kokonaisuus sisältää työjärjestelyt, fyysisen työympäristön ja laitteiden ja muiden taakkojen siirtämiseen käytettävät apuvälineet. 

Myös harmittomalta vaikuttava toiminta voi aiheuttaa terveyshaittoja, jos työympäristö ei ole sille otollinen. Istuminen ahtaassa tilassa ohjauspöydän ääressä, käytettävien laitteiden sijainti ja korkeuserot, selkärangan kiertyminen näyttämön tapahtumia tarkkailtaessa sekä pitkään jatkuvat toistuvat liikkeet hiirtä käytettäessä voivat aiheuttaa selkä-, nivel- ja lihasvaivoja. 

Samanlaisia vaaroja piilee henkilönsuojainten väärinkäytössä tai käyttämättä jättämisessä. Oikeanlaiset kengät vaimentavat kehoon kohdistuvat iskut, oikeanlaiset käsineet varmistavat paremman otteen jne. 

Ennakoi ja valmistaudu 

On parempi ennakoida mahdolliset ongelmat, kun taakka on vielä vakaasti paikoillaan kuin havaita ongelma noston puolivälissä, kun kuormaa kannatellaan hankalassa asennossa. 

Ennen kuin aloitat, tarkista reitti. Mieti miten kuorma on parasta nostaa ja siirtää. 

Vältä nostamista 

Kaikki, minkä voi siirtää nostamatta, vetämättä tai työntämättä parantaa turvallisuutta. Tämä voidaan tehdä käyttämällä oikeita apuvälineitä tai kallistamistekniikoita. Kallistettaessa taakan paino jätetään maahan ja taakkaa käännetään luonnollista reittiä. 

Tyypillinen esimerkki on kuljetuslaatikon kallistaminen. Laatikko nostetaan kyljelleen, mutta paino pysyy pääasiassa maassa. 

Kallistamista voidaan käyttää myös taakan nostamiseksi korkeammalle tasolle. Silloin tavara tuodaan lähelle korkeampaa tasoa kuten kuljetusauton lastauslavaa tai koroketta. Tavara kallistetaan kohti tason reunaa ja nostetaan niin, että se pysyy koko ajan kiinni tason reunassa. Lopuksi taakka liu’utetaan perille. 

 

Ergonomiset työtavat  

Tässä luvussa esitellään erilaisia periaatteita, työtapoja ja vinkkejä pystysuuntaiseen liikkeeseen (nostaminen ja kantaminen) sekä vaakasuuntaiseen liikkeeseen (vetäminen ja työntäminen). Usein kuorman siirtämiseen ergonomisesti tarvitaan näiden menetelmien yhdistelmää. 

Pidä taakka lähellä kehoasi 

Taakan painon lisäksi selkärangan kuormitukseen vaikuttaa kuorman painopisteen ja kantajan selkärangan välinen etäisyys vyötärön korkeudella. Pidä kuorman raskain puoli kehoasi vasten. Jos kuormaa ei ole mahdollista saada lähelle kehoa, yritä kuitenkin liu’uttaa se kohti kehoasi ennen nostoa. 

Jaa taakka molemmille käsille 

Molempien käsien käyttäminen nostamiseen, vetämiseen ja työntämiseen jakaa kuormituksen tasaisesti selkärangalle ja hartioille. Me teemme tämän automaattisesti raskaiden taakkojen kanssa, mutta on yhtä tärkeää tehdä se pienempien painojen kanssa.  

Seiso vakaasti 

Ennen kuin nostat taakan, varmista että seisoma-asentosi on vakaa. Pidä jalat hieman erillään (korkeintaan hartioiden leveydellä), toinen jalka hieman toisen edessä, jotta tasapaino on helpompi pitää (jalkaterä kuorman laitojen suuntaisesti, jos kuorma on maassa). Varaudu jalkojen siirtämiseen noston aikana vakaan asennon säilyttämiseksi. Varmista, että ainakin toinen jalka on koko ajan tukevasti lattialla. Kun asetat jalkaterät kuorman ympärille, kuorman painopiste pysyy aina jalkojen välisellä tukialueella. Näin seisoma-asento on aina vakaa. 

Käytä jalkoja 

Pidä alaselkä normaalilla S-kaarella ja käytä jalkojasi nostamiseen. Noston alussa on parempi taivuttaa vähän selkää, lanteita ja polvia kuin taittaa pelkkä selkä (kumartua) tai taittaa lonkista ja polvista täysin (kyykistyä). Älä laske selkää noston aikana yhtään alemmas. 

Säilytä selän kaari myös silloin, kun lasket kuorman alas. Selän voi loukata yhtä helposti taakkaa laskiessa kuin sitä nostaessa. Jos taakka täytyy sijoittaa tarkasti tiettyyn asentoon maassa, laske se ensin maahan ja liu’uta sen jälkeen haluttuun paikkaan. Kun vedät tai työnnät kuormia, voima otetaan lattiasta aina jalkojen kautta. 

Käytä ylimääräistä tukipistettä 

Ylimääräisen tukipisteen käyttö esimerkiksi silloin, kun nostat jotain yhdellä kädellä, minimoi selkärangan kuormituksen. Se kasvattaa myös tukipinta-alaa ja tekee nostoasennosta vakaamman. 

Pidä selkä suorana ja pää pystyssä 

Selässä on luonnostaan kolme kaarta: sisäkaari alaselässä, ulkokaari lapaluiden välissä sekä sisäkaari niskassa. Tässä asennossa selkä pystyy parhaiten kannattelemaan taakkaa ja välilevyt kuormittuvat vähiten. Paras tapa säästää selkää on pyrkiä säilyttämään selän luonnollinen kaari koko päivän, myös nostettaessa. 

Pidä myös pää pystyssä, kun nostat tai kannat. Kun olet saanut kuormasta hyvän otteen, katso eteenpäin, älä alas kuormaan. Tämä pitää selkärangan oikeassa asennossa. 

Vältä kiertoa ja vääntöä 

Vältä selän kiertymistä ja nojaamista sivulle, erityisesti silloin kun olet kumartunut alas. Hartiat tulee pitää samalla tasolla ja samaan suuntaan kuin lanteet. Kun olet nostamassa jotakin, on parempi kääntyä liikuttamalla jalkoja kuin kiertämällä selkää. Koska jalkojen liike on suositeltavampaa, kuorman kantomatkaa voi ihan hyvin vähän kasvattaa. 

Vältä tai vähennä dynaamista voimaa 

Jos otat kiinni metrin korkeudelta putoavan kilon painoisen esineen, vaikutus kehoon voi olla yli 15 kiloa. Kiinniotettaessa putoavan esineen liikesuunnan myötäily ja liikkeen hidastaminen vähitellen pienentävät liikevoimaa. Käänteisesti tämä tarkoittaa myös sitä, että yhtäkkiset liikkeelle lähdöt ja pysähdykset kasvattavat kehoon kohdistuvaa terveysriskiä huomattavasti. 

Kun vedät tai työnnät kuormaa, saata kuorma liikkeelle ja pysäytä se rauhallisesti. Nopea kiihdytys ja hidastus moninkertaistavat tarvittavat liikevoimat. Toinen hitaan alun etu on se, että omaa painoa voi käyttää kuorman saamiseksi liikkeelle. 

Pyydä apua 

Nosta ja siirrä tavaroita yksin ainoastaan, jos pystyt tekemään sen helposti. Jos kuorma on liian raskas tai muuten hankala nostettavaksi yksin, pyydä apua. Paikalliset säännöt ja riskiarvio auttavat määrittämään turvallisen noston rajat. 

Kun siirrät jotakin yhdessä toisen henkilön kanssa, on erittäin tärkeää nostaa ja laskea kuorma yhtä aikaa. Muuten toimitte toisianne vastaan ja toinen teistä päätyy kannattelemaan koko kuormaa yksin. Siksi on suositeltavaa, että nostajat ovat suunnilleen samanpituisia tai käyttävät apuna esimerkiksi nostovöitä, jotka varmistavat taakan tasaisen jakaantumisen. Tässä on selvää, että hyvä viestintä on ratkaisevan tärkeää. 

Työntäminen voittaa vetämisen 

Yleisesti ottaen on parempi työntää kuin vetää. Kehon painoa voi käyttää tehokkaammin ja hartiat kuormittuvat vähemmän. Selän säästämiseksi hyvä alkuasento on erittäin tärkeä. Kun jalat ovat vähän harallaan ja toinen jalka on hieman toista edellä, alkuasento on vakaa vetämistä tai työntämistä varten. Jos jalat ovat liian lähellä toisiaan, nostaja voi helposti kaatua eikä pysty käyttämään voimaa. 

Erityishaasteita ja -tilanteita 

Yleisten ergonomisten toimintatapojen jälkeen esittelemme esitystekniikan erityisiä haasteita. 

Yhdellä kädellä nostaminen 

Jos sinun pitää nostaa tai vetää jotain sivulla olevaa, on parasta irrottaa toinen käsi ja näin välttää kehon kiertyminen. 

Korkeat ja litteät kuormat 

Lavastetta on helpointa nostaa tarttumalla päätyihin. Varmista, että sinun ja työkaverisi nosto-ote on peilikuvana samanlainen. Nosta yhdellä kädellä ja työnnä lavastetta hieman poispäin vartalostasi niin, että lavasteesta ja käsivarsistasi syntyy kolmio. Näin pystyt kävelemään vapaasti ja pitämään lavasteen tasapainossa. 

Tekstiilien käsittely 

Taustakankaat ja muut kookkaat tekstiilit ovat raskaita. Suurin ongelma on kuitenkin se, että ne ovat pehmeitä eikä niillä ole pysyvää muotoa. Jos siirtomatka on lyhyt, on parasta vetää tekstiilit lattiaa pitkin. Jos siirtomatka taas on pitkä, tekstiilit pitää rullata tai taitella tiukasti, jotta siirto sujuu mahdollisimman helposti. 

Tavaran nostaminen laatikosta tai häkistä 

Nosto on vaikeaa, koska polvia ei voi koukistaa ja nosto on tehtävä selällä. Yritä seisoa mahdollisimman lähellä nostettavaa taakkaa ja nojata laatikkoon. Näin saat pidettyä taakan mahdollisimman lähellä vartaloasi ja minimoit selkärankaan kohdistuvan kuormituksen. 

Vastapainojen kiinnittäminen 

Teatteripaino pitää nostaa poispäin kehosta ja kiertää kelkan kuormatanko. Yritä välttää kiertoliikettä, kun tuo painot kuormatangon luo. Seiso köysistön edessä ja tuo paino kuormalaatalle kaksin käsin. Säädä köysistön kuorman korkeutta, jos pinosta on tulossa liian korkea. 

Kuljetuslaatikoiden kuljettaminen ramppia pitkin 

Pyörien päällä oleva kuljetuslaatikko rampilla on lähtökohtaisesti epävakaa asetelma. Tilannetta auttaa, jos kuljetuslaatikkoa siirretään tasaisella nopeudella. Varmista, että kulkureitillä ei ole esteitä ja kuljetusautossa tai rampin alla on tilaa, jotta et joudu pysähtymään kaltevalla pinnalla. Käytä työntämiseen kehon painoa ja pidä selkä suorana, kuten aikaisemmin on ohjeistettu. 

Kuljetuslaatikon siirtäminen ramppia pitkin alas tarkoittaa käytännössä sen nopeuden hidastamista, koska muuten se rullaisi alas itsestään. Varmista, että reitti takanasi on vapaa ja työnnä laatikkoa kevyesti, ikään kuin olisit työntämässä sitä ylöspäin. {" "} </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox"
              onClick={() => isValineetChecked()}
            >
              <h3>3.3 Nosto-, kanto- ja siirtovälineet </h3>
              {valineetChecked ? (
                <div class="chapterText">
                  <p>
                  On olemassa satoja erilaisia nosto-, kanto- ja siirtovälineitä, joita käytetään esitystekniseen työskentelyyn. 

Yleiskäyttöön sopivat laitteet ja välineet 

Markkinoilla on paljon erilaisia standardisoituja nosto-, kanto- ja siirtolaitteita ja välineitä, jotka sopivat tavallisimpiin tilanteisiin. Useimmiten niistä voi olla paljon apua myös esitys- ja tapahtumatuotannoissa. 


</p>

<img src={sign22} alt="varoitusmerkki" ></img>

<p>
Kuljetusalusta eli ”dolly” tai ”paukkari” 

Kuljetusalusta on pieni puinen tai muovinen levy, jonka alle on kiinnitetty neljä pyörää. Joissain kuljetusalustoissa on kaksi kiinteää ja kaksi kääntyvää pyörää. Kaikissa alustoissa ei ole jarruja. Alustan päälle voi laittaa laatikoita tai muita tavaroita ja siirtää paikasta toiseen. Kuljetusalustan levyn materiaali synnyttää tarpeeksi kitkaa, niin että kuormaa ja alustaa voidaan työntää yhtenä pakettina. Tarvittaessa kuorma voidaan kiinnittää alustaan hihnoilla. 


</p>

<img src={sign23} alt="varoitusmerkki" ></img>

<p>
Nokkakärry 

Nokkakärry on L-kirjaimen muotoinen työntökärry, jossa on pieni metallinen lastitaso ja työntökahvat tai -aisa. Joissakin kärryissä on molemmilla puolilla kolme pyörää portaissa kulkemista varten. Jotkut kärryt voi helposti taittaa kasaan niin, että niitä on helppo kantaa ja kuljettaa. Nokkakärryillä siirretään raskaita laatikkomaisia kuormia, jotka voidaan pinota päällekkäin. Kun lastitaso on työnnetty kuorman alle, kärryä kallistetaan pyörien varassa, kunnes painopiste on täsmälleen pyörienkohdalla. Näin kuorman siirtämisessä tarvitaan voimaa ainoastaan vaakasuunnassa tapahtuvaan liikkeeseen. 


</p>

<img src={sign24} alt="varoitusmerkki" ></img>

<p>
Lavavaunu 

Lavavaunussa on metallirunko, yleensä puusta tehty lava, jossa on neljä pyörää sekä aisa vaunun työntämistä tai vetämistä varten. Useimmissa vaunuissa on kaksi kiinteää ja kaksi kääntyvää pyörää sekä mahdollisesti jarrut. Lavavaunu on helppokäyttöinen ja vakaa apuväline useiden erimuotoisten ja -tyyppisten tavaroiden siirtämiseen. Jarrut pitää laittaa päälle, kun lavavaunuun lastataan kuormaa. 


</p>

<img src={sign25} alt="varoitusmerkki" ></img>

<p>
Pöytävaunu 

Pöytävaunussa on kaksi yleensä puusta tehtyä tasoa nelipyöräisessä metallirungossa. Useimmissa vaunuissa on kaksi kiinteää ja kaksi kääntyvää pyörää. Useimmissa pöytävaunuissa on jarrut. Pöytävaunua on helppo käyttää muun muassa tietokoneiden, ohjauspöytien ja rekvisiitan siirtämiseen. Pöytävaunun etuna on se, että tavaroita siirretään pöydän korkeudella. 


</p>

<img src={sign26} alt="varoitusmerkki" ></img>

<p>
Levyvaunu eli ”kulissivaunu” 

Levyvaunu on kuljetusväline, jossa on pitkä puinen lava ja korkea metallinen kaide sekä työntöaisa. Levyvaunulla kuljetetaan suuria levyjä pystyasennossa. Pyörien sijoittelun ansiosta vaunun kääntäminen suurten levyjen kanssa on helppoa. Levyvaunussa on yleensä kaksi kiinteää pyörää keskellä ja molemmissa päissä yksi kääntyvä pyörä. Etu- ja takapyörät ovat hieman toisia pyöriä korkeammalla, jotta pienet esteet on helppo ylittää. Levyvaunu on suunniteltu erityisesti suurten liitteiden levyjen ja lavasteiden sekä pitkien palkkien kuljettamiseen. Lastitaso ja kaide ovat kaltevassa kulmassa niin, että levyt pysyvät paikoillaan. Kun vaunu lastataan, levyt voi kääntää vaaka-asentoon. 

 
</p>

<img src={sign27} alt="varoitusmerkki" ></img>

<p>
Haarukkavaunu  

Haarukkavaunu on metallinen kuljetusväline, jonka haarukkaosassa on pienet pyörät. Vaunua ohjaillaan työntöaisalla, jossa on käsipumppumekanismi ja isommat ohjauspyörät. Pumppumekanismilla haarukkaosa nostetaan irti maasta. Haarukkavaunulla nostetaan esimerkiksi kuormalavoja, joissa on (raskaita) kuormia tai muita taakkoja, jotka ovat valmiita nostettavaksi maasta ja kuljetettavaksi jonnekin. Vaunun haarukat rullataan kuormalavan alle ja lava nostetaan pumppaamalla kahvasta ja lasketaan vapauttamalla paine. Kun kuormalava on irti maasta, sitä voidaan liikuttaa paikasta toiseen. 

 


</p>

<img src={sign28} alt="varoitusmerkki" ></img>

<p>
Silmukkanostovyöt 

Joustavissa silmukkanostovöissä on molemmissa päissä lenkit, joita käytetään, kun tarvitaan parempi ote nostettaessa raskaita tai hankalanmallisia tavaroita. Vyöt auttavat saamaan hyvän otteen kuormasta ja tuomaan kuorman painon lähemmäs kehoa. 

Esitystekniikan erityisvälineet 

Esitys- ja tapahtuma-alan ihmiset ovat luovasti kehittäneet olemassa olevia apuvälineitä niin, että niitä pystyy käyttää ergonomisemmin 

 
</p>

<img src={sign29} alt="varoitusmerkki" ></img>

<p>
Flyygelin tai pianon siirtopyörät 

Flyygelin siirtopyörä on pieni vaunu, jonka kolme pyörää jakavat flyygelin jalkojen painon niin, että soitinta on helpompi kuljettaa. Koska flyygelin omat pyörät voivat vahingoittaa lattioita, siirtopyöriä käytetään soittimen siirtämiseen näyttämöllä. Siirtopyörät asetetaan flyygelin omien pienten pyörien alle ja varmistetaan, että soitin kulkee tasaisesti. 

 

 
</p>

<img src={sign30} alt="varoitusmerkki" ></img>

<p>
Ohjauspöydän käännin 

Ohjauspöydän kääntimessä on metallirunko, jonka kaarevan sivun avulla pöytä voidaan kääntää suoraan oikeaan asentoon. Tätä apuvälinettä käytetään lähinnä isojen analogisten äänipöytien kuljettamiseen. Siirtoasennossa pöytä on pitkällä kyljellään. Käyttöä varten se pitää kääntää ja nostaa pöydälle käyttöä varten. Kuljetin kiinnitetään pöydän alle, kun se on pystyasennossa. Sitten runko kallistetaan kaarevan kyljen kautta kuljetusasentoon. 

Vastapainopöytä 

Vastapainopöydät ovat vankkoja pöytiä, joissa on puinen lastitaso, kestävä teräsrunko ja raskaita kuormia varten suunnitellut pyörät. Vastapainopöydällä painot ovat samalla tasolla kuin vastapainoalustat. Näin pystytään paremmin välttämään selän kumartuminen ja kiertyminen yhtä aikaa. Pöytä sijoitetaan tarpeeksi kauas vastapainoalustasta niin, että selän kiertämisen sijaan liikutetaan jalkoja. 

Kuljetuslaatikko eli ”case”, ”keissi” tai ”noppa” 

Kuljetuslaatikko on tukeva laatikko, jonka puiset seinät on liitetty toisiinsa alumiinilistoilla. Useimmissa kuljetuslaatikoissa on kaksi kiinteää ja kaksi kääntyvää pyörää sekä kantokahvat. Joskus pyörissä on myös jarrut. Laatikot on suunniteltu erityisesti esitystekniikan laitteiston turvallista säilyttämistä ja kuljettamista varten. Joskus laatikot tehdään tiettyä laitetta kuten ohjauspöytää tai ketjunostinta varten. 

Osastoitu kuljetuslaatikko 

Osastoiduissa kuljetuslaatikoissa on puiset irrotettavat välilevyt. Osastointi tehostaa työtä.  Tavaroiden käsittelyn ja nostelun vähentäminen estää selän ylikuormittumisen. 

Sähkönostimen kuljetuslaatikko 

Näissä laatikoissa on tarkasti suunniteltu osa, johon nostin sopii täydellisesti ja toinen osa, jossa on tilaa ketjulle. Pystytyksessä ensin kiinnitetään ketju ja sitten nostin nostaa itsensä ylös kuljetuslaatikosta. Purussa sama tehdään toisinpäin. Nostin laskee itsensä suoraan alapuolelle sijoitettuun kuljetuslaatikkoon. Normaalikäytössä nostinta ei tarvitse lainkaan nostella käsin. 

Kuljetuslaatikosta työpisteeksi 

Kuljetuslaatikko voidaan muuttaa työpisteeksi pöytätason avulla. Kaikki työkalut on lajiteltu omiin vetolaatikkoihinsa ja kuljetuslaatikon kannesta tulee pöytätaso. Pöydän avulla saat mukavan, oikeankorkuisen työasennon. Työkalut ovat järjestyksessä, joten niitä ei tarvitse juurikaan nostella ja käsitellä. 

Kaapelilaatikot 

Kaapelilaatikot voidaan laittaa trussin tai nostinputken alle niin, että kaapeleita ei tarvitse purkaa laatikosta. Kun kaapelit on kiinnitetty nostojärjestelmään, ne purkautuvat kun trussi tai putki nousee ylös ja kiertyvät takaisin laatikkoon, kun nostinputki lasketaan alas. Raskaita monijohdinkaapeleita ei siis tarvitse käsin nostella. 

Korokkeiden kuljetusvaunu 

Ergonomisemmissa kuljetusvaunuissa lavat kuljetetaan vaunuilla pystyasennossa lievästi kallistettuina. Nämä vaunut on tehty niin, että lavojen jalat voidaan asentaa, kun lava on vaunun kyydissä. Lava kallistetaan jaloilleen eikä nostelua ja kantelua tarvita. Vaunu lastataan päinvastaisessa järjestyksessä. Lava kallistetaan vaunun päälle ja jalat irrotetaan. 

 

Valojen kuljetusteline eli ”meat rack” 

Valonheitinten varastointia ja kuljetusta varten on olemassa oma metallinen teline, jossa on pyörät alla. Telineeseen voi ripustaa valonheittimiä, joissa on kiinnitin. Joissain telineissä on pysyvät mutta säädettävissä olevat tangot heitinten ripustamista varten. Jotkut telineet on suunniteltu neljän tai kuuden valonheittimen tangolle. Joskus telineen lattialle voi lastata lisävaruste- tai kaapelilaatikoita. 

Tanssimattojen kuljetusvaunu 

Tanssimattojen kuljetusvaunuissa on metallirunko ja neljä pyörää. Ne on suunniteltu raskaiden tanssimattorullien varastoimiseen ja kuljettamiseen. Useimmissa vaunuissa on kääntyvät pyörät. Joissain malleissa on myös toiminto, joka helpottaa mattojen käärimistä ja avaamista. 

 

Tekstiilien kuljetusvaunu 

Näyttämöllä käytettävien verhojen ja muiden pehmeiden tavaroiden kuljetukseen on olemassa oma vaununsa, jossa on metallirunko ja kankainen koriosa. Näiden vaunujen avulla kankaat ja verhot voiottaa alas ja siirtää ilman että ne koskettavat maata. 

 

Rampit 

Ramppi on metallinen kannettava ja kalteva levy, jonka nostetut laidat estävät kuljetusvaunuja putoamasta. Ramppeja käytetään, kun kuljetusreitillä on aukkoja tai tasoeroja. Näin pyörillä kulkevia kuormia ei tarvitse kantaa esteiden yli. Rampin pintamateriaali on liukumista estävää niin, että jaloilla saa hyvän otteen, kun kuormia työnnetään ylöspäin. Yleensä kaltevuus ei saa ylittää 30 % (30 cm per metri). 

Kiinteät ergonomiset apuvälineet 

Väliaikaisessa käytössä olevien, liikuteltavien laitteiden siirtelemiseen on olemassa paljon 

ergonomisia apuvälineitä. Niiden lisäksi on olemassa rakennukseen kiinteästi asennettuja 

ratkaisuja, kuten: 

Katsomoalueen yläpuolella oleva ketjunostin, jolla raskaan miksauspöydän voi siirtää toiseen miksauspaikkaan. 

Nostin valonheitinten nostamiseksi valosillalle. 

Tiivistetyt kuormaussillat, joiden nosto- ja siltapöytien asentoa voi säätää. {" "} </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "lightgray",
              boxShadow: "0px 0px 10px gray",
              height: "5em",
            }}
            onClick={() => setIsThirdPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>3 Työskentele ergonomisesti</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <FaArrowAltCircleRight />
              </p>
            </div>
          </div>
        </div>
      )}
      {fourthpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>4 Käytä henkilösuojaimia</h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isFourthPartShown()}
                >
                  <FaArrowAltCircleDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
                Tulossa myöhemmin.{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "lightgray",
              boxShadow: "0px 0px 10px gray",
              height: "5em",
            }}
            onClick={() => setIsFourthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>4 Käytä henkilösuojaimia</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <FaArrowAltCircleRight />
              </p>
            </div>
          </div>
        </div>
      )}
      {fifthpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>5 Varmista paloturvallisuus esitysympäristössä</h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isFifthPartShown()}
                >
                  <FaArrowAltCircleDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
              Tulossa myöhemmin.{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "lightgray",
              boxShadow: "0px 0px 10px gray",
              height: "5em",
            }}
            onClick={() => setIsFifthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>5 Varmista paloturvallisuus esitysympäristössä</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <FaArrowAltCircleRight />
              </p>
            </div>
          </div>
        </div>
      )}
      {sixthpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>6 Työskentele korkealla turvallisesti</h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isSixthPartShown()}
                >
                  <FaArrowAltCircleDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
              Tulossa myöhemmin.{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "lightgray",
              boxShadow: "0px 0px 10px gray",
              height: "5em",
            }}
            onClick={() => setIsSixthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>6 Työskentele korkealla turvallisesti</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <FaArrowAltCircleRight />
              </p>
            </div>
          </div>
        </div>
      )}
      {seventhpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>7 Käytä esitystekniikan tilapäissähköä turvallisesti</h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isSeventhPartShown()}
                >
                  <FaArrowAltCircleDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
              Tulossa myöhemmin.{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "lightgray",
              boxShadow: "0px 0px 10px gray",
              height: "5em",
            }}
            onClick={() => setIsSeventhPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>7 Käytä esitystekniikan tilapäissähköä turvallisesti</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <FaArrowAltCircleRight />
              </p>
            </div>
          </div>
        </div>
      )}
      {eightpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>8 Käytä työkaluja turvallisesti</h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isEightPartShown()}
                >
                  <FaArrowAltCircleDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
              Tulossa myöhemmin.{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "lightgray",
              boxShadow: "0px 0px 10px gray",
              height: "5em",
            }}
            onClick={() => setIsEightPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>8 Käytä työkaluja turvallisesti</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <FaArrowAltCircleRight />
              </p>
            </div>
          </div>
        </div>
      )}
      {ninthpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>9 Työskentele turvallisesti kemikaalien kanssa</h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isNinthPartShown()}
                >
                  <FaArrowAltCircleDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
              Tulossa myöhemmin.{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "lightgray",
              boxShadow: "0px 0px 10px gray",
              height: "5em",
            }}
            onClick={() => setIsNinthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>9 Työskentele turvallisesti kemikaalien kanssa</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <FaArrowAltCircleRight />
              </p>
            </div>
          </div>
        </div>
      )}
      {tenthpartShown ? (
        <div>
          <div class="materialBox">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>10 Pystytä ja ripusta esitystekniikka turvallisesti</h2>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: "0.5em",
                    fontSize: 40,
                    zIndex: 2,
                    marginLeft: 0,
                    color: "#6603fc",
                    marginBottom: 0,
                  }}
                  onClick={() => isTenthPartShown()}
                >
                  <FaArrowAltCircleDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
              Tulossa myöhemmin.{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "lightgray",
              boxShadow: "0px 0px 10px gray",
              height: "5em",
            }}
            onClick={() => setIsTenthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>10 Pystytä ja ripusta esitystekniikka turvallisesti</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                <FaArrowAltCircleRight />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}
export default ETTEmaterial;
