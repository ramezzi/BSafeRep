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
//import firebase from 'firebase';

function ETTEmaterial() {
  const [firstpartShown, setIsFirstPartShown] = useState(false);
  const [tapaturmateoriaChecked, setIsTapaturmaTeoriaChecked] = useState(false);
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

  const isTapaturmaTeoriaChecked = () => {
    if (tapaturmateoriaChecked === true) {
      setIsTapaturmaTeoriaChecked(false);
    } else {
      setIsTapaturmaTeoriaChecked(true);
    }
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
            <div class="chapterBox">
              <h3>1.2 Viisi askelta riskien vähentämiseen </h3>
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
    </div>
  );
}
export default ETTEmaterial;
