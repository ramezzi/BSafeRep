//import GameStatsStyle from './gamestats.css';
import "./styles/material.css";
import { FaSearch, FaBookmark, FaBook } from "react-icons/fa";
import { GrFormNext, GrFormDown } from "react-icons/gr";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { fireEvent } from "@testing-library/dom";
import sign1 from "./images/image002.png";
import sign2 from "./images/image003.png";
import sign3 from "./images/image004.png";
import sign4 from "./images/image005.png";
import sign5 from "./images/image006.png";
import sign6 from "./images/image007.png";
import sign7 from "./images/image008.png";
import sign8 from "./images/image009.png";
import sign9 from "./images/image010.png";
import sign10 from "./images/image011.png";
import sign11 from "./images/image012.png";
import sign12 from "./images/image013.png";
import sign13 from "./images/image014.png";
import sign14 from "./images/image015.png";
import sign15 from "./images/image016.png";
import sign16 from "./images/image017.png";
import sign17 from "./images/image018.png";
import sign18 from "./images/image019.png";
import sign19 from "./images/image020.png";
import sign20 from "./images/image021.png";
import sign21 from "./images/image022.png";
import sign22 from "./images/image023.png";
import sign23 from "./images/image024.png";
import sign24 from "./images/image025.png";
import sign25 from "./images/image026.png";
import sign26 from "./images/image027.png";
import sign27 from "./images/image028.png";
import sign28 from "./images/image029.png";
import sign29 from "./images/image030.png";
import sign30 from "./images/image031.png";

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
                <h2 style={{ marginLeft: 20 }}>1 Ty??skentele turvallisesti</h2>
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
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
                Turvallinen ty??skentely edellytt????, ett?? tiedostat
                esitystuotantoihin liittyv??t riskit ja otat ne ty??ss??si huomioon
                oman turvallisuutesi takaamiseksi.{" "}
              </p>
            </div>
            <div class="chapterBox" onClick={() => isTapaturmaTeoriaChecked()}>
              <h3>1.1 Tapaturmateoria </h3>
              {tapaturmateoriaChecked ? (
                <div class="chapterText">
                  <p>
                    On t??rke???? tiedostaa,{" "}
                    <strong>
                      ett?? t??ydellist?? turvallisuutta ei ole olemassa
                    </strong>
                    , ja huolimatta siit??, kuinka turvallisesti pyrimme
                    ty??skentelem????n, <strong>onnettomuuksia tapahtuu. </strong>
                    Turvallisuudessa on aina kyse tasapainosta k??ytett??vyyden ja
                    hyv??ksytt??viss?? olevan riskin v??lill??. Jotta voimme tehd??
                    tasapainoon johtavia valintoja j??rkev??sti, meid??n t??ytyy
                    ymm??rt????, miten onnettomuudet tapahtuvat ja mink??laisia
                    mekanismeja niiden takana piilee.
                  </p>
                  <b>Riski</b>
                  <p>
                    Riskiss?? on kolme osatekij????{" "}
                    <strong>
                      1. vaarallinen tilanne tai teko, 2. todenn??k??isyys,{" "}
                    </strong>
                    ett?? jokin menee vikaan sek?? t??m??n tapahtuman{" "}
                    <strong>3. seuraukset.</strong> Jokainen vaarallinen tilanne
                    tai teko luo vaaran uhan. T??m?? ei kuitenkaan tarkoita, ett??
                    jokin menee pieleen. Esimerkiksi jos pudotat ty??kalun, kun
                    ket????n ei ole l??hist??ll??, vahinkoa ei tapahdu.{" "}
                  </p>
                  <b>Todenn??k??isyys </b>
                  <p>
                    Jokainen vaarallinen tilanne tai teko luo vaaran uhan. T??m??
                    ei kuitenkaan tarkoita, ett?? jokin menee pieleen.
                    Esimerkiksi jos pudotat ty??kalun, kun ket????n ei ole
                    l??hist??ll??, vahinkoa ei tapahdu.{" "}
                  </p>
                  <b>Seuraus</b>
                  <p>
                    Seurauksen k??site osoittaa vahinkojen mahdollisen vakavuuden
                    tai vaikutuksen ty??paikkaan. Esimerkiksi, kun ty??kalu
                    putoaa, aiheuttaako se pieni?? vaurioita vai voiko se tappaa
                    jonkun?{" "}
                  </p>
                  <b>L??helt?? piti-tilanne </b>
                  <p>
                    L??helt?? piti -tilanne on tahaton vaaratilanne, josta ei
                    koidu lainkaan vaurioita tai vammoja tai vauriot ja vammat
                    ovat v??h??isi??. Jotain vaarallista siis tapahtui, mutta
                    tilanne p????ttyi kuitenkin hyvin. Esimerkkej??: Joku pudottaa
                    vasaran korkealta vahingoittamatta ket????n tai joku kompastuu
                    kaapeliin, mutta ei kuitenkaan kaadu vaan jatkaa matkaa.{" "}
                  </p>
                  <b>Tapaturma </b>
                  <p>
                    Tapaturma on tahaton tilanne, josta aiheutuu vakavaa
                    vahinkoa tai vammoja. Toisin sanoen tilanne p????ttyy
                    ik??v??sti. Esimerkkej??: Joku pudottaa vasaran korkealta ja
                    satuttaa toista ihmist?? tai joku kompastuu kaapeliin, kaatuu
                    ja satuttaa itsens??{" "}
                  </p>
                  <b>Vahinko tai vamma </b>
                  <p>
                    Vammat ja vauriot ovat{" "}
                    <strong>tapaturman seurauksia.</strong> Voimme luokitella ne
                    vakavuuden ja seurausten perusteella.
                  </p>
                  <ul>
                    <li>
                      <strong>Pienet haaverit,</strong> jotka hoidetaan paikan
                      p????ll?? ensiavun turvin, ei sairauspoissaoloa
                    </li>
                    <li>
                      Vammat, joista aiheutuu{" "}
                      <strong>v??liaikainen sairauspoissaolo</strong>
                    </li>
                    <li>
                      <strong>Pysyv??t vammat</strong> (esimerkiksi
                      liikuntarajoitteet)
                    </li>
                    <li>
                      <strong> Kuolema</strong>{" "}
                    </li>
                  </ul>
                  <p>
                    On t??rke?? ymm??rt????, ett??{" "}
                    <strong>
                      vahingon aiheuttaja ei ole sama kuin tapaturman
                      aiheuttaja.
                    </strong>{" "}
                    Vahingon aiheuttaja on se, joka saa aikaan fyysisen vaurion,
                    esimerkiksi putoava valonheitin tai ter??v?? veitsi.
                    Tapaturman aiheuttaja on se toiminta tai tilanne, joka
                    aiheutti tapaturman, esimerkiksi turvavaijerin puute tai
                    v????r?? tapa k??sitell?? veist??.{" "}
                  </p>
                  <b>Suhteet </b>
                  <p>
                    Vaara, todenn??k??isyys ja seuraus muodostavat riskin. Riski
                    saattaa aiheuttaa vaaratilanteen. Jos vaaratilanne p????ttyy
                    huonosti, sattuu tapaturma, joka aiheuttaa vahinkoja.
                    Tapaturmien v??ltt??miseksi yrit??mme hallita riskitekij??it??,
                    analysoimme riskit ja pid??mme kirjaa l??helt?? piti
                    -tilanteista.{" "}
                  </p>
                  <b>Vaarallinen toiminta </b>
                  <p>
                    Tilastot osoittavat, ett?? 80 % tapaturmista johtuu ihmisen
                    toiminnasta. Jos siis haluamme ehk??ist?? onnettomuudet,
                    ensimm??iseksi pit???? tarkastella ihmisen k??yt??st??. Meid??n
                    pit???? kysy??, miksi joku k??ytt??ytyy tietyll?? tavalla. Syyt
                    vaaralliseen k??yt??kseen voidaan jakaa kolmeen:
                    tiet??m??tt??myys, kykenem??tt??myys ja haluttomuus.
                  </p>
                  <p>
                    <strong>Tiet??m??tt??myydess??</strong> on useimmiten kyse{" "}
                    <strong>tiedon puutteesta. </strong>
                    Jos ei tied?? vaaran olemassaolosta tai tekojensa
                    seurauksista, riski?? on vaikea v??ltt????. Jos ei tied??, miten
                    suojata itsens?? tai kuinka toimia onnettomuustilanteessa, on
                    vaikea minimoida onnettomuuden seurauksia.{" "}
                  </p>
                  <p>
                    Ratkaisut tiet??m??tt??myyteen ovat yksinkertaisia. Jos joku
                    ep??ilytt????, kysy. Perehdy laitteisiin, materiaaleihin ja
                    ty??tapoihin. Ennen kaikkea my??nn??, ettet tied??.
                  </p>{" "}
                  <p>
                    <strong>Kykenem??tt??myyteen</strong> voi olla monia syit??.
                    Yksi syy voi olla, ett?? ty??ntekij?? ei
                    <strong> fyysisesti</strong> pysty tekem????n jotain. H??n ei
                    esimerkiksi ole tarpeeksi vahva tai notkea, h??nelt?? puuttuu
                    kokemusta tai oikeanlaista osaamista ty??n suorittamiseen tai
                    h??nell?? ei ole aikaa tehd?? ty??t?? kunnolla. Joskus taas
                    ty??ntekij?? ei
                    <strong> henkisesti</strong> pysty suorittamaan teht??v????
                    turvallisesti, esimerkiksi koska h??n ei pysty keskittym????n
                    oman el??m??ntilanteensa takia tai koska h??n pelk???? sit??, mit??
                    h??nen pit??isi tehd??.
                  </p>{" "}
                  <p>
                    Esimerkkej??: Ryhdyt siirt??m????n kaiuttimia, vaikka ne ovat
                    liian raskaat yksin nostettaviksi tai ty??skentelet
                    korkealla, vaikka tunnet itsesi sairaaksi.{" "}
                  </p>{" "}
                  <p>
                    Jotta tilanne voidaan ratkaista, ty??ntekij??n t??ytyy
                    <strong> tuntea ja my??nt???? rajansa.</strong> T??ll?? tavalla
                    tunnistamme ongelman ja voimme (ehk??) tehd?? sille jotakin.
                    Joka tapauksessa, ty??ntekij?? ei saa antaa kenenk????n pakottaa
                    itse????n tekem????n mit????n, mihin ei koe kykenev??ns??.
                  </p>
                  <p>
                    <strong>Haluttomuuteen </strong>onnettomuuden syyn?? on
                    kaikkein vaikein puuttua, koska se edellytt???? ihmisten
                    <strong> asenteiden</strong> muutosta. Voi olla monia syit??,
                    miksi joku ei halua k??ytt???? olemassa olevia turvav??lineit??
                    tai ty??skennell?? turvallisesti. Syyn?? voi olla laiskuus,
                    motivaation puute tai k??sitys, ett?? itse tiet???? asiat
                    paremmin. Useimmissa tapauksissa t??llainen k??yt??s juontuu
                    tavoista, joita voi olla vaikea muuttaa tai ammatillisesta
                    sokeudesta. Ammatillinen sokeus tarkoittaa, ett?? pitk??n ajan
                    kuluessa tottuu tiettyihin riskeihin ja sen takia aliarvioi
                    ne.
                  </p>{" "}
                  <p>
                    Esimerkkej??: Et k??yt?? turvakenki??, koska olet aina
                    ty??skennellyt ilman niit?? tai kun ty??skentelet korkealla, et
                    k??yt?? ty??kaluissa turvavaijeria, koska et halua tuhlata
                    aikaa.
                  </p>{" "}
                  <p>
                    Jotta t??m??ntyyppinen k??yt??s korjaantuisi, meid??n pit????
                    ymm??rt???? muutostarpeen syyt ja motivoida ja tarkkailla
                    toisiamme.{" "}
                  </p>
                  <b>Vaaralliset tilanteet </b>
                  <p>
                    Toinen tapaturmanaiheuttajatyyppi muodostuu tilanteista,
                    jotka aiheuttavat riskin ty??ntekij??ille tai muille
                    ihmisille. N??m?? voidaan jakaa kolmeen lajiin: j??rjestelyt,
                    tekniikka ja olosuhteet.
                  </p>
                  <p>
                    <strong>J??rjestelyihin </strong>liittyv??t vaaratilanteet
                    aiheutuvat
                    <strong> tavasta, jolla ty?? on j??rjestetty.</strong> N??m??
                    riskit sis??lt??v??t muun muassa aikataulutusongelmat
                    ty??ryhmien tai toimintojen v??lill?? (esimerkiksi esityksen
                    purku on j??rjestetty samaan aikaan kuin laitteiston
                    siirrot).
                  </p>
                  <p>
                    <strong>Tekniikkaan liittyvi?? vaaratilanteita </strong>
                    aiheuttavat koneiden, laitteiden ja ty??kalujen lis??ksi muut
                    konkreettiset elementit kuten portaikot ja kulkusillat.
                  </p>
                  <p>
                    <strong>Olosuhteisiin </strong>liittyv??t vaaratilanteet
                    viittaavat <strong>ulkoisiin tekij??ihin, </strong>
                    jotka eiv??t ole suoraan yhteydess?? toimintaan mutta
                    vaikuttavat siihen. Esimerkiksi rajallinen valaistus,
                    s????olosuhteet tai liiallinen melu vaikuttavat ty??h??n
                    negatiivisesti.{" "}
                  </p>
                  <b>Samanaikaisuus </b>
                  <p>
                    Onnettomuudelle ei ole vain yht?? syyt??. tapaturma on aina
                    seurausta{" "}
                    <strong>olosuhteiden ja toiminnan yhdistelm??st??.</strong>{" "}
                    Tapaturma sattuu ainoastaan silloin, kun n??m?? osatekij??t
                    tapahtuvat samaan aikaan.
                  </p>
                  <p>
                    Esimerkki: Ty??kalu tippuu telineelt?? ja osuu alla kulkevaan
                    henkil????n. Jos tutkimme tilannetta tarkkaan, huomaamme, ett??
                    tapaturmaan liittyy useita erilaisia riskej??:
                    <ul>
                      <li>Rakennustelineell?? on ty??kalu</li>
                      <li>Esineit?? ei ole suojattu putoamiselta</li>
                      <li>Telineell?? ty??skentelee joku</li>
                      <li>Joku kulkee telineen alta</li>
                    </ul>
                    Mik????n n??ist?? riskeist?? ei kuitenkaan yksin aiheuta
                    tapaturmaa.
                  </p>
                  <p>
                    Tapaturman aiheuttaja on: Joku kulkee ohi, kun telineell??
                    ty??skentelev?? henkil??, joka ei ole suojannut ty??v??lineit????n
                    putoamiselta, t??n??isee ty??kalunsa alas{" "}
                  </p>
                  <p>
                    Jos yksikin riskeist?? poistettaisiin, tapaturmaa ei
                    sattuisi.
                    <ul>
                      <li>Jos ty??kalua ei ole, se ei voi pudota</li>
                      <li> Jos ty??kalussa on turvavaijeri, se ei voi pudota</li>
                      <li>
                        Jos kukaan ei ty??skentele telineell??, ty??kalua ei voi
                        t??n??ist?? alas
                      </li>
                      <li>
                        Jos kukaan ei kulje telineen ohi ty??kalun pudotessa,
                        sattuisi vain vaaratilanne, ei tapaturmaa.
                      </li>
                    </ul>
                    Kaikkia riskej?? ei kuitenkaan voi poistaa, muuten ty?? ei
                    tule tehdyksi. Vaihtoehtona on v??ltt???? samanaikaisuutta.
                    Varmistamme, ett?? riskit eiv??t toteudu samaan aikaan. Toisin
                    sanoen:{" "}
                    <ul>
                      <li>
                        Jos kukaan ei voi kulkea telineen l??heisyydess??, kun
                        joku ty??skentelee telineell??, tapaturmaa ei voi sattua.
                      </li>
                    </ul>
                    Samanaikaisuuden v??ltt??mist?? k??ytet????n paljon tilanteissa,
                    joissa riski?? ei voida kokonaan poistaa.{" "}
                  </p>
                  <b>Ammattitaudit </b>
                  <p>
                    Ammattitaudit eiv??t johdu tapaturmista. Fyysiset vahingot
                    eiv??t ole seurausta yht??kkisest?? tapahtumasta vaan
                    pitk??aikaisesta altistumisesta vaarallisille tai
                    ep??terveellisille olosuhteille. Tyypillisi?? esimerkkej?? ovat
                    kuulovauriot, jotka johtuvat pitk??aikaisesta altistumisesta
                    melulle, toistuvasta nostamisesta johtuvat selk??vaivat ja
                    pitk??kestoisesta n??ytt??p????tety??skentelyst?? johtuvat
                    silm??ongelmat. Koska vaivat{" "}
                    <strong>
                      eiv??t ole suoraan yhteydess?? tiettyyn tapahtumaan
                    </strong>
                    , on vaikea todistaa yhteytt?? ty??teht??viin ja ehk??ist??
                    niit??.
                  </p>
                  <p>
                    Ergonomisemmat ty??tavat, oikea suojavarustus ja teht??vien
                    monipuolisuus ehk??isev??t ammattitauteja parhaiten.{" "}
                  </p>
                  <b>Psykososiaaliset riskit</b>
                  <p>
                    Psykososiaaliset riskit ovat{" "}
                    <strong>
                      psyykkiseen ja fyysiseen terveyteen liittyvi?? riskej??
                    </strong>
                    , jotka juontavat juurensa ty??n sis??ll??st?? tai ty??n
                    kontekstista. Sis??ll??ll?? tarkoitetaan t??ss?? ty??teht??vien
                    laatua, ty??m????r????, aikatauluja ja ty??n olosuhteita
                    (ty??paikka, laitteistot jne.). Kontekstilla taas viitataan
                    t??ss?? ty??ntekij??n mahdollisuuksiin vaikuttaa ty??h??ns??,
                    ty??paikan ty??kulttuuriin, ty??yhteis??n j??senten v??lisiin
                    suhteisiin, etenemismahdollisuuksiin sek?? ty??n ja vapaa-ajan
                    v??liseen tasapainoon. N??m?? riskit voivat aiheuttaa
                    ????rimm??ist?? stressi??, masennusta, loppuun palamista tai
                    tylsistymist??, mutta my??s fyysisi?? ongelmia kuten tuki- ja
                    liikuntaelimist??n vaivoja tai syd??n- ja verisuonitauteja.
                  </p>
                  <p>
                    Useimmilla ty??paikoilla on toimintaohje seksuaalista
                    h??irint????, asiatonta k??yt??st??, kiusaamista ja muita
                    vastaavia tilanteita varten.{" "}
                    <strong>Ongelmien esiin ottaminen ajoissa</strong> voi
                    auttaa minimoimaan psykososiaalisten riskien seurauksia.{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isViisiAskeltaChecked()}>
              <h3>1.2 Viisi askelta riskien v??hent??miseen </h3>
              {viisiAskeltaChecked ? (
                <div class="chapterText">
                  <p>
                    Tapaturmateorian avulla opimme tunnistamaan riskit. Seuraava
                    askel riskienhallinnassa on ryhty?? turvallisuutta lis????viin
                    toimenpiteisiin. Toteuttamistapa riippuu kulloisestakin
                    kokonaistilanteesta.{" "}
                    <strong>
                      Tilanteen salliessa kohdistamme toimet mahdollisiin
                      tapaturman aiheuttajiin
                    </strong>
                    , niin ett?? poistamme riskit tai{" "}
                    <strong>v??lt??mme riskitekij??iden kasautumisen</strong>. Jos
                    t??m?? ei ole mahdollista, pyrimme minimoimaan seuraukset.
                  </p>
                  <p>
                    Periaatteena on, ett??{" "}
                    <strong>
                      arvioimme riskin, suoritamme parhaan mahdollisen
                      toimenpiteen ja arvioimme riskin uudelleen niin kauan,
                      ett?? se on hyv??ksytt??viss?? rajoissa
                    </strong>
                    . On t??rke???? tarkastella arvioinnissa koko tilannetta, koska
                    on mahdollista, ett?? yht?? riskitekij???? pienent??m??ll?? syntyy
                    uusi riski.
                  </p>
                  <p>
                    {" "}
                    Mahdollisia toimenpiteit?? on viitt?? eri tyyppi??. Jotkut
                    takaavat tilanteen turvallisuuden paremmin kuin toiset,
                    mutta kaikkia toimenpiteit?? ei voi soveltaa joka
                    tilanteeseen. Joissain tapauksissa riskin v??hent??minen
                    est??isi kokonaan toiminnan, jota yrit??mme suojata. Oikean
                    toimenpiteen valinta on aina tasapainottelua turvallisuuden
                    ja k??ytett??vyyden v??lill??. Viisi toimenpidetyyppi??
                    tehokkaimmasta v??hiten tehokkaaseen ovat:
                  </p>
                  <ol>
                    <li>Riskin poistaminen</li>
                    <li>Yleinen suojaaminen</li>
                    <li>Henkil??kohtainen suojautuminen</li>
                    <li>Koulutus</li>{" "}
                    <li> Tiedottaminen, ilmoittaminen ja varoittaminen</li>
                  </ol>
                  <p>
                    <strong>Riskin poistaminen</strong>
                    Tehokkain toimenpide on riskin poistaminen. Jos poistamme
                    tapaturman mahdollisen aiheuttajan, ongelmaa ei en???? ole.
                  </p>
                  <p>
                    Esimerkiksi:{" "}
                    <ul>
                      <li>
                        N??ytt??m??n lattiassa on aukko (luukku, orkesterisyvennys,
                        hissi tms.), jonka takia on olemassa riski, ett?? ihmiset
                        putoavat aukkoon. Aukon sulkeminen poistaa riskin
                        kokonaan.
                      </li>
                      <li>
                        Ty??kalujen ja laitteiden k??ytt?? n??ytt??m??ll?? on
                        v??ltt??m??t??nt??, mutta voimme poistaa ne kulkuv??ylilt?? ja
                        s??ilytt???? niit?? kuljetuslaatikoissa tai varastotiloissa.
                        Ty??kaluihin ja laitteisiin kompastumisen riski
                        poistetaan kulkuv??ylilt?? ja riski siirtyy muualle.
                      </li>
                    </ul>
                  </p>
                  <strong>Yleinen suojaaminen</strong>
                  <p>
                    Jos riski?? ei voida kokonaan poistaa, suoritamme
                    toimenpiteit??, jotka suojaavat kaikkia ihmisi?? yleisesti.
                    Kun kehittelemme yhteisi?? turvaratkaisuja, meid??n t??ytyy
                    ottaa huomioon k??ytt??jien v??liset erot. Voi olla tarpeen
                    tehd?? muutoksia yleiseen suojaukseen lapsia, ik??ihmisi?? ja
                    vammaisia varten.
                  </p>
                  <p>Esimerkiksi: </p>
                  <ul>
                    <li>
                      N??ytt??m??n lattiassa on aukko (luukku, orkesterisyvennys,
                      hissi tms.), jota tarvitaan juuri nyt. Suoja-aidan
                      pystytt??minen aukon ymp??rille suojelee kaikkia. Kukaan ei
                      p????se aukon l??helle, joten kukaan ei putoa. T??ss??
                      tapauksessa on t??rke???? m????ritell??, ketk?? kuuluvat
                      ???kaikkiin???. Jos joukkoon kuuluu my??s lapsia, suoja-aidan
                      rakoja t??ytyy pienent????.
                    </li>
                    <li>
                      {" "}
                      Valonheittimen ripustaminen tankoon sis??lt???? erityisen
                      putoamisriskin, koska valaisin roikkuu ihmisten p??iden
                      p????ll??. Riskin?? on pultin tai kiinnikkeen katkeaminen.
                      Turvavaijeri est???? valonheitint?? putoamasta ja turvaa alla
                      olevat ihmiset.
                    </li>
                  </ul>
                  <p>
                    <strong>Henkil??kohtainen suojautuminen</strong>
                  </p>
                  <p>
                    Useimmiten yleinen suojaaminen ei tule kysymykseen, koska se
                    tekisi esitysteknisen laitteiston k??yt??n mahdottomaksi.
                    Silloin t??ytyy erikseen <strong>suojata henkil??t</strong>,
                    jotka ty??skentelev??t laitteiston kanssa. T??m?? ei kuitenkaan
                    tee yleist?? suojaamista tarpeettomaksi, koska my??s muita
                    ihmisi?? pit???? suojella. Monesti tarvitaan kaksinkertaista
                    suojausta: yleinen suojaus niille, jotka eiv??t osallistu
                    toimintaan ja henkil??kohtainen suojaus niille, jotka
                    k??ytt??v??t laitteita. Henkil??kohtaisen suojauksen heikkous on
                    siin??, ett?? suojattava henkil?? on itse vastuussa sen
                    k??yt??st??.
                  </p>
                  <p>
                    On olemassa kahdenlaista henkil??kohtaista suojausta. Suojaus
                    joko <strong>est???? tapaturmat</strong> tai{" "}
                    <strong>minimoi niiden vaikutukset</strong>.
                  </p>
                  <p>Esimerkiksi: </p>
                  <ul>
                    <li>
                      Turvakenkien ansiosta varpaille tippuva valonheitin
                      aiheuttaa minimaalisen vahingon.
                    </li>
                    <li>
                      Valjaat, joissa on turvak??ysi, est??v??t joutumisen liian
                      l??helle n??ytt??m??ll?? olevaa aukkoa.
                    </li>
                  </ul>
                  <p>
                    <strong>Koulutus</strong>
                  </p>
                  <p>
                    Joskus on vaikeaa suojella ihmisi?? taiteellisessa
                    ty??ymp??rist??ss??. Jotkut turvatoimet eiv??t sovi yhteen
                    taiteellisen vision kanssa, ne pilaavat esityksen sis??ll??n
                    tai h??iritsev??t n??ytt??m??kuvaa.{" "}
                    <strong>
                      N??it??kin riskej?? voidaan v??hent???? kouluttamalla
                    </strong>{" "}
                    ihmisi??. Heill?? pit???? olla syv?? ymm??rrys riskitekij??ist?? ja
                    heid??n pit???? harjoitella miten ottaa riskit huomioon
                    n??ytt??m??ll?? ja kuinka toimia, kun jotain sattuu.{" "}
                  </p>
                  <p>Esimerkiksi: </p>
                  <ul>
                    <li>
                      N??ytt??m??ll?? on aukko katoamistemppua varten. Meid??n pit????
                      opastaa n??yttelij??it?? ja muita n??ytt??m??ll?? olevia
                      henkil??it??, kuinka n??ytt??m??ll?? toimitaan, kun
                      n??ytt??m??luukku on auki.
                    </li>
                    <li>
                      N??yttelij?? pit???? opettaa k??ytt??m????n asetta niin, ett??
                      kuulovaurioita ja palovammoja ei synny.
                    </li>
                  </ul>
                  <p>
                    On tilanteita, joissa koulutus on ainoa vaihtoehto. N??iden
                    lis??ksi tarvitaan{" "}
                    <strong>
                      koulutusta yleisen ja henkil??kohtaisen suojauksen
                      k??ytt????n.
                    </strong>{" "}
                    Toimenpiteet tehoavat vain, jos niit?? k??ytet????n oikein.
                  </p>
                  <p>
                    <strong>Tieto, tiedottaminen ja varoittaminen</strong>
                  </p>
                  <p>
                    Viimeinen askel on tiedottaa ja varoittaa kaikkia ihmisi??,
                    joita riskit koskevat.{" "}
                    <strong>
                      Tiedottaminen ja varoittaminen eiv??t pienenn?? riskej??
                    </strong>{" "}
                    tai tapaturman seurauksia, mutta tiedottamisen ja
                    varoittamisen ansioista ihmiset ovat tietoisia riskeist??.
                  </p>
                  <p>
                    Varoitukset sis??lt??v??t kaiken tyyppiset{" "}
                    <strong>opasteet</strong>
                    (varoituskyltit ovissa jne.), jotka kiinnitt??v??t ihmisten
                    huomion tietyn ymp??rist??n riskeihin. Kyltit my??s kertovat,
                    mit?? henkil??kohtaista suojausta tietyss?? ymp??rist??ss??
                    tarvitaan ja mit?? turvav??lineit?? on saatavilla.
                    Konkreettiset riskit tehd????n <strong>
                      n??kyv??mmiksi
                    </strong>{" "}
                    merkitsem??ll?? tai valaisemalla. Ihmisten tiedottaminen
                    auttaa heit?? toimimaan tietyiss?? tilanteissa. Ty??pisteill??
                    annetaan <strong>ohjeet</strong>
                    laitteiston turvalliseen k??ytt????n ja tuotteiden
                    turvaohjeissa kerrotaan, miten niit?? pit???? k??sitell??.
                  </p>
                  <p>
                    Toimintaohjeet eli sovittujen toimintojen ja vastuiden
                    selitt??minen (talon s????nn??t) kertovat ihmisille, kuinka
                    toimia eri tilanteissa. T??m??ntyyppinen tiedottaminen t??ytyy
                    toistaa s????nn??llisin v??liajoin. Joissain ty??paikoissa
                    t??llainen ohjeistus jaetaan p??ivitt??isiss??
                    tiedotustilaisuuksissa.
                  </p>
                  <p>Esimerkiksi: </p>
                  <ul>
                    <li>
                      N??ytt??m??n lattiassa oleva aukko tehd????n n??kyv??ksi
                      kiinnitt??m??ll?? sen ymp??rille LED-nauhoja.
                    </li>
                    <li>
                      Ennen esityksen alkua n??ytt??m??henkil??kunnalle kerrotaan,
                      kuinka toimia normaaleissa ja poikkeustilanteissa
                      trapetsiesityksen aikana
                    </li>
                    <li>
                      Ovilla on teksti, joka varoittaa yleis???? esityksess??
                      k??ytett??vist?? v??lkkyvist?? valoista
                    </li>
                  </ul>
                  <p>
                    <strong>Keinojen yhdisteleminen</strong>
                  </p>
                  <p>
                    Useimmiten tarvitsemme useampia turvatoimia pienent????ksemme
                    riskit hyv??ksytt??v??lle tasolle. Riskien v??hent??minen alkaa
                    yll??mainituilla viidell?? askeleella. Jokaisen askeleen
                    j??lkeen arvioimme riskit uudelleen ja suoritamme lis????
                    turvatoimia, kunnes riskit ovat hyv??ksytt??v??ll?? tasolla.
                  </p>
                  <p>
                    On t??rke???? <strong>ottaa huomioon kokonaistilanne</strong>{" "}
                    kaikkine riskeineen. On mahdollista, ett?? yhden riskitekij??n
                    minimoiminen synnytt???? uuden riskin. Uusi riski tunnistetaan
                    tilannearviossa.
                  </p>
                  <p>
                    Toiminnan kokonaisuuteen voi liitty??{" "}
                    <strong>useita riskej??</strong>. On t??rke???? k??sitell?? niit??
                    yksitellen, jotta toiminta on kokonaisuudessaan turvallinen.
                  </p>
                  <p>
                    <strong>Odottamattomat riskit </strong>
                  </p>
                  <p>
                    Kaikkia riskej?? ei tietenk????n voi ennakoida eik?? niit?? siis
                    yksil??id?? riskiarviossa. T??ll??in ratkaisuna on{" "}
                    <strong>viime hetken riskiarvio</strong>, jonka ty??ntekij??t
                    tekev??t itse, kun ongelmia ilmenee. He tekev??t nopean
                    tilanneanalyysin ja v??hent??v??t riski?? viiden askeleen
                    periaatteen mukaisesti.
                  </p>
                  <p>
                    <strong>Varo v????r???? turvallisuudentunnetta</strong>
                  </p>
                  <p>
                    Pahinta mit?? voi tehd??{" "}
                    <strong>
                      on antaa ihmisten luulla, ett?? tilanne on turvallinen
                    </strong>{" "}
                    silloin kun se ei ole. T??st?? koituu entist??kin
                    vaarallisempia tilanteita, koska ihmisilt?? h??vi???? tietoisuus
                    riskeist??.
                  </p>{" "}
                  <p>Esimerkiksi: </p>
                  <ul>
                    <li>
                      N??ytt??m??ll?? oleva aukko peitet????n ohuella vanerilevyll??.
                      Paikka n??ytt???? nyt turvalliselta, mutta jos aukon p????lle
                      astuu, putoaa levyn l??pi.
                    </li>
                  </ul>
                  <p>
                    <strong>Riskienarviointi</strong>
                  </p>
                  <p>
                    Riskienarviointi on <strong>prosessi</strong>, jossa
                    tunnistetaan riskit ja ehdotetaan toimia terveyden ja
                    turvallisuuden nostamiseksi hyv??ksytt??v??lle tasolle.
                    Ty??ymp??rist??ss?? arvio on <strong>muodollinen</strong>. T??m??
                    on tarpeen, koska riskit koskevat useita ihmisi??
                    monitahoisessa tilanteessa. Se on osa ty??paikan
                    riskienhallinnan kokonaisuutta. Riskiarviointi t??ytyy
                    dokumentoida, jotta siit?? olisi hy??ty?? koko ty??yhteis??lle.
                  </p>
                  <p>
                    Riskiarviointi on <strong>ty??kalu</strong>. Se on menetelm??,
                    joka auttaa meit?? tunnistamaan riskit, ehdottamaan
                    toimenpiteit?? ja dokumentoimaan prosessin. Se ei kuitenkaan
                    ole p????m????r?? tai tavoite itsess????n, vaan p????m????r?? on luoda
                    turvallisempi ty??ymp??rist??.
                  </p>
                  <p>
                    Riskiarviointia voidaan tehd?? <strong>eri tasoilla</strong>{" "}
                    ja eri tilanteita varten. Jotkut arvioinnit ovat staattisia
                    - rakennus seisoo paikallaan pitk??n aikaa eik?? tilanne
                    juurikaan muutu. Toiset arvioinnit ovat muuttuvampia, koska
                    esitystuotannot vaihtuvat.
                  </p>
                  <p>
                    Kaikki riskiarvioinnit t??ytyy n??hd??{" "}
                    <strong>kokonaisuuksina</strong>. On t??ysin mahdollista
                    tuoda turvallinen esitys turvalliselle n??ytt??m??lle ja
                    synnytt???? samalla uusia riskej??. Jos tilanteet muuttuvat,
                    riskianalyysi pit???? p??ivitt????. Siten
                    <strong> riskiarviointi on jatkuva prosessi</strong>. Jos
                    ty??prosessin aikana ilmenee ennakoimattomia riskej??, voi
                    olla tarpeen tehd??
                    <strong> viime hetken riskiarvio</strong>. T??m??n tekev??t
                    ty??ntekij??t itse v??litt??m??sti, kun huolenaihetta ilmenee.
                  </p>
                  <p>
                    Riskienhallinnan <strong>menetelmi??</strong> on paljon ja
                    jokaisella on hyv??t ja huonot puolensa. Numeeriset
                    menetelm??t m????ritt??v??t riskit numeroiden avulla ja laskevat
                    todenn??k??isyyksi?? ja esiintymistiheyksi?? sek?? koulutuksen
                    tasoja. Tekstil??ht??iset taas yhdist??v??t k??sitteet tiettyihin
                    mittareihin.
                  </p>
                  <p>
                    Riskienhallinnanj??rjest??m??t auttavat{" "}
                    <strong>priorisoimaan </strong>
                    toimintoja. Ei ole aina mahdollista tai tarpeellista ryhty??
                    konkreettisiin toimiin yksitt??isten riskien suhteen.
                    Riskienhallintaj??rjestelm?? ottaa huomioon ty??paikan
                    realiteetit, kuten toimenpiteen kustannukset, suunnittelun,
                    tuotantoajan menetyksen ja m????r??ajat, joiden perusteell??
                    p????tet????n suoritetaanko toimenpiteet heti vai voidaanko ne
                    lyk??t?? tiettyyn m????r??p??iv????n.
                  </p>
                  <p>
                    <strong>Meid??n teht??v??mme </strong>
                    riskienarviointiprosessissa on olla aktiivinen osallistuja,
                    tiedottaa riskeist?? turvallisuusvastaavalle, tehd?? viime
                    hetken riskianalyysej?? tilanteissa, jotka eiv??t olleet
                    ennustettavissa ja tietysti noudattaa riskianalyysin
                    tuloksena syntyvi?? suosituksia.{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isOikeudetChecked()}>
              <h3>1.3 Oikeudet ja velvollisuudet </h3>
              {oikeudetChecked ? (
                <div class="chapterText">
                  <p>
                    Taatakseen{" "}
                    <strong>
                      jokaisen EU-maan ty??ntekij??n tasavertaisen kohtelun
                      ty??terveys- ja turvallisuusasioissa
                    </strong>
                    , Euroopan unioni on m????ritellyt perusoikeudet ja
                    -velvollisuudet sek?? ty??nantajille ett?? ty??ntekij??ille. N??m??
                    s????d??kset on sis??llytetty jokaisen j??senmaan kansalliseen
                    tai alueelliseen lains????d??nt????n. Maat voivat tietysti
                    asettaa vaatimuksensa korkeammallekin, mutta kaikkien pit????
                    noudattaa ainakin alla lueteltuja v??himm??is-vaatimuksia.
                  </p>
                  <p>Ty??ntekij??n t??ytyy:</p>{" "}
                  <ul>
                    <li>
                      <strong>k??ytt???? asianmukaisesti</strong> koneita,
                      laitteita, ty??kaluja, vaarallisia aineita,
                      kuljetuskalustoa, muita tuotantoon liittyvi?? v??lineit?? ja
                      henkil??kohtaisia turvavarusteita.
                    </li>
                    <li>
                      <strong>tiedottaa</strong> ty??nantajaa v??litt??m??sti
                      kaikista tilanteista, joista aiheutuu vakavaa ja v??lit??nt??
                      vaaraa, sek?? kaikista puutteista turvaj??rjestelyiss??.
                    </li>
                    <li>
                      <strong>tehd?? yhteisty??t?? ty??nantajan kanssa</strong>{" "}
                      ty??turvallisuusvaatimusten t??ytt??miseksi ja ty??ymp??rist??n
                      ja -olosuhteiden turvallisuuden takaamiseksi.
                    </li>
                    <li>
                      Ty??ntekij??ille pit???? taata
                      <strong>ty??terveyspalvelut </strong>kansallisen
                      terveysj??rjestelm??n mukaisesti. Riskiryhmi?? pit???? suojella
                      vaaroilta, jotka vaikuttavat heihin erityisesti.
                    </li>
                  </ul>
                  <p>Ty??nantajan t??ytyy: </p>
                  <p>
                    <ul>
                      <li>
                        <strong>arvioida kaikki</strong> ty??ntekij??iden
                        terveyteen ja turvallisuuteen liittyv??t riskit, muun
                        muassa ty??v??lineiden valinnassa, kemiallisten aineiden
                        ja valmisteiden k??yt??ss?? sek?? ty??paikkojen
                        j??rjestelyiss??.
                      </li>
                      <li>
                        <strong>suorittaa toimenpiteit??</strong>, jotka
                        parantavat ty??ntekij??iden turvallisuutta ja jotka
                        integroidaan kaikkeen hankkeen ja/tai ty??paikan
                        toimintaan ja joita noudatetaan kaikilla
                        hallinnollisilla tasoilla.
                      </li>
                      <li>
                        osoittaessaan ty??ntekij??lle teht??vi??{" "}
                        <strong>
                          ottaa huomioon ty??ntekij??n kyvyt ja ominaisuudet
                        </strong>
                        , jotka vaikuttavat terveyteen ja turvallisuuteen
                      </li>
                      <li>
                        <strong>kysy??</strong> ty??ntekij??ilt?? neuvoa uuden
                        teknologian k??ytt????nottoa varten
                      </li>
                      <li>
                        <strong>nimet?? ty??ntekij??/ty??ntekij??it??</strong>{" "}
                        suorittamaan ty??turvallisuuteen ja ammatillisten riskien
                        ehk??isyyn liittyvi?? toimenpiteit??.
                      </li>
                      <li>
                        <strong>
                          suorittaa tarvittavat toimet, jotta ensiapu,
                          sammutusty??t ja ty??ntekij??iden evakuointi
                        </strong>{" "}
                        sujuvat ongelmitta vakavassa ja v??litt??m??ss??
                        vaaratilanteessa.
                      </li>
                      <li>
                        <strong>dokumentoida ty??tapaturmat</strong> ja laatia
                        vastuullisille viranomaisille raportteja ty??ntekij??ille
                        sattuneista ty??tapaturmista.
                      </li>
                      <li>
                        <strong>
                          tiedottaa ja kysy?? neuvoa ty??ntekij??ilt??
                        </strong>{" "}
                        ja antaa heid??n osallistua keskusteluihin kaikista
                        ty??turvallisuuteen ja -terveyteen liittyvist?? asioista.
                      </li>
                      <li>
                        varmistaa, ett?? jokainen ty??ntekij?? saa{" "}
                        <strong>
                          riitt??v??n ty??turvallisuus- ja -terveyskoulutuksen
                        </strong>
                        .
                      </li>
                    </ul>{" "}
                  </p>
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
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
              maxHeight: "6em",
              marginBottom: 0,
            }}
            onClick={() => setIsFirstPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>1 Ty??skentele turvallisesti</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  marginBottom: "0.3em",
                  color: "#6603fc",
                }}
              >
                <GrFormNext />
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
                <h2 style={{ marginLeft: 20 }}>
                  2 Luo turvallinen ja ymp??rist??yst??v??llinen ty??paikka
                </h2>
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
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
                Luodaksesi turvallisen ja ymp??rist??yst??v??llisen ty??paikan, sinun
                t??ytyy tiedostaa riskit, jotka syntyv??t sinun ja ty??tovereidesi
                toiminnasta n??ytt??m??ll?? ja yleis??alueella esitys- ja
                tapahtumatuotannoissa ja toimia niin, ett?? kaikki ovat turvassa.{" "}
              </p>
            </div>
            <div class="chapterBox" onClick={() => isNayttamoChecked()}>
              <h3>2.1 N??ytt??m??n riskit </h3>
              {nayttamoChecked ? (
                <div class="chapterText">
                  <p>
                    T??t?? ei voi korostaa liikaa: n??ytt??m?? on t??ynn?? riskej??. Osa
                    riskeist?? t??ytyy eliminoida rakenteellisesti, mutta hyvin
                    monet riskit voidaan minimoida n??ytt??m??ty??ntekij??iden
                    hyvill?? k??yt??nn??ill??. Ensimm??inen askel on erilaisten
                    riskien tiedostaminen.
                  </p>
                  <p>
                    <strong>Siisti n??ytt??m?? on turvallinen n??ytt??m?? </strong>
                  </p>
                  <p>
                    Monien ihmisten t??ytyy olla n??ytt??m??ll?? pystytyksen, purun,
                    harjoitusten ja esitysten aikana. Heist?? kaikki tarvitsevat
                    vapaat kulkureitit ty??pisteilleen ja tilaa ty??skennell??. On
                    ensiarvoisen t??rke????, ett?? rakentamisen aikana tarvittavat
                    tavarat ja materiaalit ovat n??ytt??m??ll??{" "}
                    <strong>hyv??ss?? j??rjestyksess??</strong>. Materiaalien tuonti
                    n??ytt??m??lle juuri oikeaan paikkaan tehostaa ty??t?? ja
                    parantaa turvallisuutta. Selke?? ja hyvin j??rjestetty
                    ty??piste, olipa se sitten pysyv?? tai v??liaikainen,
                    varmistaa, ett?? ty??ntekij??t voivat liikkua n??ytt??m??ll??
                    turvallisesti.
                  </p>
                  <p>
                    Ty??kalut ja materiaalilaatikot laitetaan riviin n??ytt??m??n
                    laidalle tai etureunaan. T??ll?? tavoin on helppo l??yt???? mit??
                    tarvitsee, laatikoita ei tarvitse liikutella ja kulkutiet
                    pysyv??t vapaina. Johdot vedet????n heti oikeaan kohtaan, pois
                    k??vely- tai ajoreiteilt??. Lavasteiden osat tuodaan
                    n??ytt??m??lle niin, ett?? niit?? ei tarvitse liikutella useaan
                    kertaan pystytysvaiheessa. Ihannetapauksessa ne sijoitetaan
                    n??ytt??m??lle samassa j??rjestyksess?? kuin niit?? k??ytet????n.
                    Roskat ja j??tteet poistetaan n??ytt??m??lt?? v??litt??m??sti.
                    Lavasteet, joita ei k??ytet??, varastoidaan erikseen ja tyhj??t
                    kuljetuslaatikot vied????n pois n??ytt??m??lt??, jos mahdollista.
                  </p>
                  <p>
                    <strong>Poistumisteiden</strong>
                    t??ytyy olla esteett??m??t ja{" "}
                    <strong>turvav??lineisiin t??ytyy p????st?? k??siksi</strong>{" "}
                    kaikkina aikoina.
                  </p>
                  <p>
                    Joskus siisteys on ristiriidassa taiteellisten vaatimusten
                    kanssa. Usein likainen n??ytt??m?? on osa lavastusta. T??ll??in
                    tarvitaan tiettyj?? turvatoimia ty??ntekij??iden, laitteiden ja
                    itse n??ytt??m??n suojelemiseksi. N??ytt??m??n lattia pit????
                    suojella vaurioilta ja <strong>lattian kantokyky</strong>{" "}
                    pit???? varmistaa.{" "}
                  </p>
                  <p>
                    Meid??n pit???? v??ltt???? materiaalien karkaamista niiden
                    k??ytt??alueen ulkopuolelle. T??m?? on erityisen t??rke????
                    silloin, kun kyse on aineista, jotka voivat valua
                    alapuolella oleviin tiloihin tai leijua ilmassa.
                  </p>
                  <p>
                    <strong>Valaistusolosuhteet</strong>
                  </p>
                  <p>
                    Yksi turvallisen ty??n t??rkeimmist?? tekij??ist?? on kunnon
                    valaistus. Kun olemme rakentamassa esityst??, hyv?? valaistus
                    auttaa n??kem????n mit?? olemme tekem??ss??. Esityksen aikana
                    ty??skentely tapahtuu kuitenkin esityst?? varten suunnitellun
                    valaistuksen ehdoilla. T??m??n takia tarvitsemme n??ytt??m??n
                    sivuille valoja, jotka eiv??t n??y katsomoon mutta
                    mahdollistavat liikkumisen ja ty??skentelyn. T??h??n
                    tarkoitukseen k??ytet????n useimmiten
                    <strong> sinist?? valoa</strong>, joka ei heijastu mustista
                    tai tummansinisist?? sivukatteista, mutta auttaa n??kem????n
                    eteens?? kulisseissa.
                  </p>
                  <p>
                    Rajallisten valaistusolosuhteiden takia kompastumiset pit????
                    ehk??ist?? huolellisesti.{" "}
                    <strong>Portaat, esteet ja kulkuv??yl??t </strong>
                    merkit????n fosforiteipill?? eli j??lkiheijastavalla teipill??
                    tai muulla huomiomateriaalilla.
                  </p>
                  <p>
                    <strong>Korkean riskin alueet</strong>
                  </p>
                  <p>
                    Joihinkin pystytyksen vaiheisiin kuuluu vaarallisia
                    teht??vi??, kuten ty??skentely avoimella k??ysiullakolla tai
                    elementtien kokoaminen muiden ty??ntekij??iden yl??puolella.
                    Muita riskitekij??it?? ovat lattialuukkujen avaaminen sek??
                    liikkuvat nostolavat, orkesterimontut ja korokkeet. N??iss??
                    tapauksissa vaarallinen alue <strong>aidataan</strong> ja
                    ainoastaan teht??v??n edellytt??mill?? ty??ntekij??ill?? on p????sy
                    kyseiselle alueelle. Heid??n tulee k??ytt???? asiaankuuluvia
                    henkil??nsuojaimia riskin minimoimiseksi.
                  </p>
                  <p>
                    Harjoitusten ja esitysten aikana
                    <strong> taiteellisten syiden</strong> takia aidat ja muut
                    turvatoimet t??ytyy j??tt???? pois. Silloin k??ytet????n
                    vaihtoehtoisia keinoja huomion kiinnitt??miseksi riskiin ja
                    ty??ntekij??iden m????r??n minimoimiseksi korkean riskin
                    alueella. Turvatoimien poiston j??lkeen alueelle p????stet????n
                    ainoastaan ihmisi??, joita tarvitaan n??ytt??m??ll?? ja jotka on
                    koulutettu kyseist?? tilannetta varten.
                  </p>
                  <p>
                    <strong>Erityistilanteet</strong>
                  </p>
                  <p>
                    Jotkut n??ytt??m??ll?? suoritettavat teht??v??t heikent??v??t
                    ty??olosuhteita. Valojen suuntaaminen edellytt???? pime????
                    n??ytt??m????, jotta teht??v??n voi hoitaa kunnolla. Muun
                    toiminnan pit???? sopeutua tai pys??hty?? siksi aikaa.
                  </p>
                  <p>
                    <strong>Soundcheck</strong> ja kaiutinj??rjestelm??n s????t??
                    edellytt??v??t joskus j??rjestelm??n k??ytt???? huomattavan
                    kova????nisesti tai maksimiteholla. T??m??n takia
                    keskusteleminen n??ytt??m??ll?? on mahdotonta ja riskin?? ovat
                    korkeat ????nenvoimakkuudet. Vaikutusalueella olevien ihmisten
                    pit???? k??ytt???? kuulonsuojaimia.
                  </p>
                  <p>
                    <strong>Erikoistehosteiden </strong>
                    testaamiseen liittyy aina ep??varmuustekij??it??. Emme voi
                    koskaan tarkasti tiet???? tehosteen laatua ja siihen liittyvi??
                    riskej??, ennen kuin sit?? testataan n??ytt??m??ll?? t??sm??lleen
                    samoissa olosuhteissa, joissa sit?? tullaan k??ytt??m????n.
                  </p>
                  <p>
                    Tavoitteena on, ett?? n??iss?? erityistilanteissa n??ytt??m??ll??
                    olisi ainostaan ihmisi??, joita tilanne suoranaisesti koskee.
                  </p>
                  <p>
                    <strong>
                      Ala- ja yl??puolella olevat koneet ja laitteet
                    </strong>
                  </p>
                  <p>
                    Pystytyksen ja purun aikana nostimet ja muu ripustuskalusto
                    liikkuvat ihmisten yl??puolella. Nostoa operoiva henkil??{" "}
                    <strong>varoittaa </strong>
                    kaikkia n??ytt??m??ll?? olijoita liikkeist?? erityisesti silloin,
                    kun liike tapahtuu p??iden tasolla. Sinun pit???? kuitenkin
                    itsekin <strong>tarkkailla</strong>, mit?? p????n yl??puolella
                    tapahtuu.
                  </p>
                  <p>
                    Riskej?? aiheuttavat my??s muut n??ytt??m??ll?? olevat laitteet ja
                    ty??ntekij??ill?? on velvollisuus suojata laitteet niin, ett??
                    ne eiv??t voi vahingoittaa ihmisi??, ja heid??n pit???? my??s
                    aidata ty??skentelyalueet, mutta riski on silti aina
                    olemassa. Tapaturmien v??ltt??miseksi on ensiarvoisen t??rke????
                    <strong> kiinnitt???? huomiota </strong>alati muuttuvaan
                    ty??ymp??rist????n.
                  </p>
                  <p>
                    <strong>Koneiden suojaaminen</strong>
                  </p>
                  <p>
                    Kun vaarallisiin koneisiin ja laitteisiin on p????sy
                    henkil??ill??, joilla ei ole koulutusta eik?? lupaa niiden
                    k??ytt????n, ne t??ytyy suojata asiatonta k??ytt???? vastaan.
                    Nostinj??rjestelm??t, pyrotekniikka, nostolaitteet,
                    henkil??nostimet ja s??hk??laitteet, kuten my??s rautaesiripun
                    k??ytt??paneeli t??ytyy lukita.
                  </p>
                  <p>
                    <strong>
                      Alkoholi, huumeet ja muut ty??skentelyyn vaikuttavat aineet
                    </strong>
                  </p>
                  <p>
                    Kaikki aineet,jotka vaikuttavat kykyyn reagoida nopeasti,
                    ajatella kunnolla ja ty??skennell?? tarkasti, pit???? kielt????,
                    koska ne aiheuttavat riskin muille n??ytt??m??ll?? olijoille.
                    T??m?? kielto ei koske pelk??st????n n??iden aineiden k??ytt???? vaan
                    my??s vapaa-aikana tapahtuneen k??yt??n vaikutuksia, jotka
                    tuntuvat my??s ty??aikana.
                  </p>
                  <p>Kiellettyihin aineisiin kuuluvat: </p>
                  <ul>
                    <li>alkoholi kaikenlaiset</li>
                    <li>huumeet</li>
                    <li>
                      l????kkeet, joilla on samankaltaisia vaikutuksia (tarkasta,
                      mit?? tuoteselosteessa sanotaan autolla ajamisesta ja
                      koneiden ja laitteiden k??yt??st??)
                    </li>
                  </ul>
                  <p>
                    Monet ty??nantajat noudattavat{" "}
                    <strong>nollatoleranssia</strong>, mutta
                    v??himm??isvaatimuksena on noudattaa samoja rajoituksia kuin
                    autolla ajettaessa.
                  </p>
                  <p>
                    <strong>Enimm??isty??aika</strong>
                  </p>
                  <p>
                    Aika jolloin ihminen voi ty??skennell?? keskittyneesti on
                    rajallinen. My??s ahkerimmilla ty??ntekij??ill?? on raja ajalle,
                    jolloin he voivat tehd?? ty??ns?? tarkasti ja reagoida
                    nopeasti. Ylitt??m??ll?? n??m?? aikarajat he vaarantavat
                    ty??toverinsa.
                  </p>
                  <p>
                    T??h??n asiaan liittyy my??s vuorokausilepo eli{" "}
                    <strong>lepoaika</strong> ty??vuorojen v??lill??. Lyhyiden
                    ??iden ja unien takia ihminen reagoi hitaammin ja v??hemm??n
                    tarkasti.
                  </p>
                  <p>
                    Enimm??isty??aikaa ja vuorokausilepoa koskevat asetukset
                    vaihtelevat maittain. Joissain maissa enimm??isty??ajan
                    ylitt??minen on rangaistava teko. Suomessa p????s????nt??n??
                    vuorokausilevossa on, ett?? ty??ntekij??lle on annettava
                    jokaisen ty??vuoron alkamista seuraavan 24 tunnin aikana
                    v??hint????n 11 tunnin pituinen keskeytym??t??n vuorokausilepo.
                    Vastaavasti p????s????nt??n?? viikoittaisessa vapaa-ajassa on,
                    ett?? ty??ntekij?? saa kerran seitsem??n p??iv??n aikana v??hint????n
                    35 tuntia kest??v??n keskeytym??tt??m??n lepoajan. Lepoaikoihin
                    on olemassa poikkeuksia esimerkiksi jaksoty??ss?? ja
                    liukuvassa ty??ajassa. My??s eri alojen ty??ehtosopimuksissa on
                    eroja, joten varmista oma lepoaikasi.
                  </p>
                  <p>
                    <strong>Ty??skentely kolmansien osapuolten kanssa</strong>
                  </p>
                  <p>
                    Pystytyksen aikana n??ytt??m??ll?? voi ty??skennell?? my??s
                    tuotannon ulkopuolisia ty??ryhmi??. Lakiasioiden n??k??kulmasta
                    niit?? kutsutaan ???kolmansiksi osapuoliksi???. Kolmannet
                    osapuolet eiv??t saa aloittaa ty??skentely?? ennen kuin heille
                    on kerrottu paikalliset ty??h??n ja turvallisuuteen liittyv??t
                    asiat:
                  </p>{" "}
                  <ul>
                    <li>ty??n j??rjest??minen, paikalliset s????d??kset</li>
                    <li>k??ytett??viss?? olevat ty??v??lineet, koneet jne.</li>
                    <li>olemassa olevat k??yt??nn??t</li>
                    <li>henkil??nsuojainten k??ytt??</li>
                    <li>poistumistiet, turvav??lineet, ensiapu</li>
                  </ul>
                  <p>
                    Toiminnat t??ytyy my??s <strong>koordinoida</strong>. T??ytyy
                    olla selv????, kuka on vastuussa mist??kin ty??n osaalueesta ja
                    mit?? riskej?? eri osapuolet aiheuttavat toisilleen. T??ytyy
                    my??s varmistaa, ett?? kaikki osapuolet ovat p??tevi??
                    suorittamaan teht??v??t turvallisesti.
                  </p>
                  <p>
                    Ty??antaja, joka kantaa kokonaisvastuun, usein{" "}
                    <strong>delegoi vastuun</strong> turvallisuusasioista
                    n??ytt??m??mestarille, j??rjest??j??lle, stagemanagerille tai
                    muulle turvallisuusvastaavalle, joka pit????
                    tiedotustilaisuuden ja turvallisuusinfon ja kertoo kaikille
                    laatimansa aikataulun siit??, kuka n??ytt??m??ll?? tekee mit?? ja
                    mill??kin hetkell??.
                  </p>
                  <p>
                    <strong>Kun asiat menev??t vikaan</strong>
                  </p>
                  <p>
                    Poikkeustilanteessa tai onnettomuuden sattuessa sinun pit????
                    ensimm??iseksi varmistaa oma turvallisuutesi. Seuraava askel
                    on ilmoittaa tilanteesta turvallisuusvastaavalle ja pyrki??
                    minimoimaan tapaturmasta aiheutuvat haitat. Pyri siihen,
                    ett?? muut ihmiset eiv??t altistu riskille.
                    Turvallisuusvastaava k??y{" "}
                    <strong>turvallisuusinfossa </strong>l??pi esiintymispaikkaan
                    ja kulloiseenkin esitykseen liittyv??t toimenpiteet ja
                    vastuunjaon h??t??tilanteen sattuessa.
                  </p>
                  <p>
                    Jos sinun pit???? soittaa <strong>h??t??numeroon</strong>, anna
                    tarkat tiedot:
                    <ul>
                      <li>Kerro, mit?? on tapahtunut.</li>
                      <li>Kerro tarkka osoite, kunta ja tapahtuma.</li>
                      <li>Vastaa sinulle esitettyihin kysymyksiin.</li>
                      <li>Toimi annettujen ohjeiden mukaisesti.</li>
                      <li>Lopeta puhelu vasta saatuasi siihen luvan.</li>
                    </ul>{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isYleisoChecked()}>
              <h3>2.2 Yleis??turvallisuus </h3>
              {yleisoChecked ? (
                <div class="chapterText">
                  <p>
                    Ensisijainen vastuu yleis??turvallisuudesta on
                    toiminnanharjoittajalla tai tapahtuman j??rjest??j??ll??.
                    Yleis??n turvallisuusasioista huolehtimiseen on tuotannossa
                    voitu nimet?? erikseen henkil??. H??nen kanssaan pit??isi
                    keskustella aina, kun ty??skentelet yleis??alueella ja
                    muutamat perusperiaatteet auttavat ehk??isem????n riskej??
                    siell??.{" "}
                  </p>
                  <p>
                    <strong>Vaihtoehtoiset tilat</strong>
                  </p>
                  <p>
                    Viime vuosina yh?? useampia esityksi?? on tuotettu paikkoihin
                    varsinaisten esitys- tai tapahtumatilojen ulkopuolella.
                    N??iss?? paikoissa esityksen j??rjest??j?? yleens?? rakentaa
                    katsomon ja tekninen henkil??kunta osallistuu normaalia
                    enemm??n yleis??tilan luomiseen. Heid??n pit???? noudattaa{" "}
                    <strong>samoja turvaohjeita</strong> kuin tavallisessa
                    teatterissa ja pysytt??yty?? niiss?? kompetensseissa, joihin
                    heid??t on koulutettu.
                  </p>
                  <p>
                    <strong>Ulkoilmatapahtumassa tai v??liaikaisessa</strong>{" "}
                    esiintymispaikassa t??ytyy luoda uusia toimintatapoja. Voi
                    olla tarvetta uudenlaiselle vastuunjaolle, uusille
                    turvallisuuss????d??ksille, vartioinnin lis??j??rjestelyille ja
                    erikoisj??rjestelyille yleis??n suhteen.
                  </p>
                  <p>
                    Maasta riippuen joko paikallinen pelastuslaitos tai
                    aluehallinto tarkastaa, onko kaikki j??rjestetty s????nn??sten,
                    lupien ja ohjeiden mukaan.
                  </p>
                  <p>
                    <strong>
                      Varmista kulkuv??yl??t normaalia poistumista ja
                      h??t??tilanteita varten
                    </strong>
                  </p>
                  <p>
                    Minimoidaksemme riskit meid??n t??ytyy varmistaa, ett?? mitk????n
                    yleis??tilaan tehdyt muutokset eiv??t tuki yleis??n
                    kulkuv??yli??. Johtojen vedot pit???? suunnitella niin, ett?? ne
                    eiv??t luo kompastumisriski??. Laitteita,
                    seurantavalonheittimi??, kameroita, henkil??kunnan tuoleja tai
                    muuta vastaavaa ei saa sijoittaa{" "}
                    <strong>yleis??n kulkuv??ylille</strong>. Luonnollisesti me
                    emme my??sk????n saa j??tt???? tilaan roskia, tyhji?? laatikoita
                    tai muuta ylim????r??ist??.{" "}
                  </p>
                  <p>
                    <strong>Kulkureittien v??himm??isleveydet</strong> vaihtelevat
                    maittain ja joskus jopa paikallinen pelastusviranomainen
                    antaa erilliset m????r??yksens??. Joka tapauksessa on aina
                    olemassa v??himm??isleveys, johon vaikuttavat ihmisten
                    lukum????r?? ja se, onko kulkuv??yl?? tasainen, nouseva tai
                    laskeva.
                  </p>
                  <p>
                    <strong>
                      Varmista, ett?? poistumis- ja turvavalot sek?? turvamerkit
                      ovat selke??sti n??kyvill??
                    </strong>
                  </p>
                  <p>
                    Yleis??tilassa on kahdentyyppist?? valaistusta lis????m??ss??
                    turvallisuutta. Toinen palaa jatkuvasti, jotta katsojat
                    n??kev??t minne menn??, jos heid??n pit???? l??hte?? tilasta
                    esityksen aikana. N??it?? valoja kutsutaan{" "}
                    <strong>poistumisopastevalaistukseksi</strong>, jotka
                    useissa tapauksissa yhdistet????n poistumistie- ja
                    turvamerkkeihin.
                  </p>
                  <p>
                    Toinen valaistustyyppi on <strong>turvavalaistus</strong>,
                    joka syttyy h??t??tilanteessa. Sen avulla ihmiset p????sev??t
                    poistumaan tilasta, vaikka samaan aikaan olisi s??hk??katkos.
                    Turvavalaistuksen valoteho on korkeampi kuin
                    poistumistieopasteiden.{" "}
                  </p>
                  <p>
                    Arkikieless?? poistumisopastevaloista ja turvaloista
                    k??ytet????n usein termi?? h??t??valot.
                  </p>
                  <p>
                    Miss????n tilanteessa poistumistieopasteita tai
                    turvavalaistusta{" "}
                    <strong>ei saa peitt???? tai kytke?? pois p????lt??</strong>, kun
                    yleis?? on katsomossa.Jos havaitset mink????nlaisia poikkeamia
                    tai rikkin??isi?? laitteita, ota yhteytt??
                    turvallisuusp????llikk????n.
                  </p>
                  <p>
                    <strong>Putoamissuojaus</strong>
                  </p>
                  <p>
                    Kun pystytet????n v??liaikaisia rakennelmia, joihin yleis??ll??
                    on p????sy, putoamissuojaus t??ytyy hoitaa erityisell??
                    huolella. Korokkeille ja muihin kohtiin, joissa on
                    putoamisvaara, t??ytyy asentaa <strong>kaiteet</strong>.
                    Katsomorakenteissa tuolien putoaminen estet????n matalilla
                    kaiteilla katsomopalojen reunoilla. Korokkeille nousemista
                    varten t??ytyy olla my??s kunnon portaat.{" "}
                  </p>
                  <p>
                    <strong>N??ytt??m??tehosteet</strong>
                  </p>
                  <p>
                    N??ytt??m??ll?? k??ytett??v??t tehosteet voivat aiheuttaa riskin
                    yleis??lle.{" "}
                  </p>
                  <ul>
                    <li>
                      <strong>????nenvoimakkuudet </strong>voivat nousta liian
                      korkeiksi joissain katsomon osissa.
                    </li>
                    <li>
                      <strong>Laserit</strong> voivat vahingoittaa silmi??.
                    </li>
                    <li>
                      <strong>Strobovalot</strong> voivat laukaista epileptisen
                      kohtauksen.
                    </li>
                    <li>
                      <strong>Savu</strong> voi saada ihmiset paniikkiin tai
                      aiheuttaa hengitysoireita.
                    </li>
                    <li>
                      <strong>Tuli</strong> voi saada ihmiset paniikkiin.
                    </li>
                    <li>
                      <strong>Pyrotekniikka</strong> voi vahingoittaa korvia,
                      silmi?? ja aiheuttaa palovammoja.
                    </li>
                    <li>
                      <strong>Blinderit eli h??ik??isyvalot</strong> voivat
                      sokaista silm??t joksikin aikaa.
                    </li>
                  </ul>
                  <p>
                    T??rkeint?? on olla altistamatta yleis???? riskille. Est??mme
                    yleis???? p????sem??st?? liian l??helle ja rajoitamme tehosteet
                    turvalliselle tasolle. Jotkut ihmiset ovat kuitenkin
                    herkempi??, ja heit?? varten meid??n t??ytyy laittaa
                    sis????ntulo-oville <strong>varoitukset</strong> n??ist??
                    riskeist?? ja muutoin ennakolta informoida yleis????
                    tehosteiden k??yt??st??.
                  </p>
                  <p>
                    <strong>Erityisj??rjestelyj?? erityisryhmille</strong>
                  </p>
                  <p>
                    Joidenkin katsojien kuten lasten, aisti- ja
                    liikuntarajoitteisten ihmisten sek?? ik??ihmisten vuoksi
                    t??ytyy joskus tehd?? <strong>erityisj??rjestelyj??</strong>.
                    T??m?? voi tarkoittaa pienempi?? aukkoja turvakaiteissa,
                    ramppeja tai py??r??tuoleille varattuja paikkoja katsomossa.
                    Joissain maissa voidaan edellytt???? valvojan nime??mist??
                    erityisryhmiin kohdistuvien riskien minimoimiseksi.
                  </p>
                  <p>
                    <strong>Ty??skentely yleis??n yl??puolella</strong>
                  </p>
                  <p>
                    Poikkeustapauksissa meid??n t??ytyy ty??skennell?? yleis??n
                    yl??puolella, t??ll??in tarvitaan ylim????r??isi?? turvatoimia ja
                    erityist?? huomiota kiinnitet????n putoaviin esineisiin.
                    Esimerkiksi kaikki yleis??n yl??puolella ty??skentelev??t
                    henkil??t tyhjent??v??t{" "}
                    <strong>taskunsa ja kaikki ty??kalut</strong> ja muut esineet
                    suojataan putoamisen varalta.
                  </p>
                  <p>
                    <strong>Vaaralliset alueet</strong>
                  </p>
                  Jos yleis??ll?? on p????sy n??ytt??m??lle tai huoltoalueille, meid??n
                  t??ytyy lukita kaikki vaaralliset alueet, kuten kattoristikko
                  ja sillat, s??hk??kaapit ja varastot. T??ll??in kiinteisiin
                  poistumisteihin voidaan joutua tekem????n tilap??isi?? muutoksia.
                  Silloin turvallinen toiminta t??ytyy varmistaa tilanteeseen
                  sopivin erityisj??rjestelyin ja varmistaa kaikissa olosuhteissa
                  yleis??n turvallisuus.
                  <p>
                    <strong>Toimintatavat</strong>
                  </p>
                  <p>
                    <strong>Menettelytavat</strong> t??ytyy varmistaa miss??
                    tahansa teetkin t??it??, mutta erityisesti silloin, kun
                    ty??skentelet yleis??alueella esityksen aikana. Silloin
                    k??yt??nn??t t??ytyy varmistaa yleis??turvallisuudesta vastaavan
                    henkil??kunnan kanssa. He kertovat sinulle, miten toimit sek??
                    normaalitilanteissa ett?? h??t??tilanteen sattuessa.{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isKestavaChecked()}>
              <h3>2.3 Kest??v?? kehitys </h3>
              {kestavaChecked ? (
                <div class="chapterText">
                  <p>
                    Kest??v??n kehityksen t??ytyy olla osa ty??t??mme. Esitystaide on
                    eritt??in kuormittava ala. Me rakennamme lavasteita
                    k??ytett??viksi pari kertaa, kuljetamme niit?? pitki?? matkoja
                    ja my??hemmin heit??mme ne pois.
                  </p>
                  <p>V??henn?? </p>
                  <ul>
                    <li>K??yt?? tavaraa, josta syntyy v??h??n j??tett??.</li>
                    <li>V??henn?? energian k??ytt????.</li>
                    <li>
                      V??henn?? j??tett?? valitsemalla tuotteita, joissa on
                      mahdollisimman v??h??n pakkausmateriaaleja, ja jotka voidaan
                      k??ytt???? tehokkaasti hy??dyksi ja sitten kierr??tt????.
                    </li>
                  </ul>
                  <p>K??yt?? uudelleen</p>
                  <ul>
                    <li>
                      K??yt?? s??ilytyslaatikot, pakkausmateriaalit ja j??tteet
                      uudelleen aina kun mahdollista.
                    </li>
                  </ul>
                  <p>Kierr??t??</p>{" "}
                  <ul>
                    <li>
                      Kierr??t?? j??tteet hy??tyk??ytt????n tai uusiksi tuotteiksi aina
                      kun mahdollista.
                    </li>
                  </ul>
                  <p>
                    P??ivitt??isess?? ty??ss??mme voimme tehd?? pieni?? mutta t??rkeit??
                    tekoja v??hent????ksemme ymp??rist??nkuormitusta.
                  </p>
                  <p>
                    <strong>Energiankulutus</strong>
                  </p>
                  <p>
                    Paras tapa v??hent???? energiankulutusta on sammuttaa valot ja
                    laitteet, silloin kuin niit?? ei k??ytet??. Esimerkiksi
                    ty??valojen k??ytt?? esitysvalojen sijaan v??hent????
                    energiankulutuksen puoleen.
                  </p>
                  <p>
                    <strong>Kulutustavaroiden ja materiaalien k??ytt??</strong>
                  </p>
                  <p>
                    K??yt??mme paljon kulutustavaroita. Joillekin voi l??yt????
                    vaihtoehtoja ja loput voi kierr??tt????.
                  </p>
                  <ul>
                    <li>
                      <strong>Teipit</strong> voidaan korvata tarranauhoilla tai
                      vastaavilla uudelleen k??ytett??vill?? kiinnitystarvikkeilla.
                      Teipin s????st??misen lis??ksi ne pit??v??t my??s johdot
                      puhtaina.{" "}
                    </li>
                    <li>
                      <strong>Kertak??ytt??paristot</strong> voi korvata
                      ladattavilla akuilla tai akkuparistoilla
                    </li>
                    <li>
                      <strong>V??rikalvot</strong> voi kierr??tt????, koska monet
                      yritykset ottavat ne pyydett??ess?? takaisin.
                    </li>
                    <li>
                      <strong>Paperin</strong> voi kierr??tt???? tai paperity??t voi
                      tehd?? s??hk??isesti.
                    </li>
                  </ul>
                  <p>
                    <strong>J??tteiden lajittelu</strong>
                  </p>
                  <p>
                    J??tteet voit lajitella huolellisesti. N??in perusmateriaalit
                    voidaan kierr??tt???? turvallisesti ja vastuullisesti.
                    Paristot, maalit ja spray-purkit sek?? vinyyliteipin voi
                    kierr??tt????, jos ne lajitellaan erikseen.
                  </p>
                  <p>
                    <strong>Liikkuminen</strong>
                  </p>
                  <p>
                    Liikkumisen j??rjesteleminen ja suunnitteleminen voivat
                    v??hent???? liikennett??. Yksinkertaiset j??rjestelyt kuten
                    kimppakyydit voivat puolittaa ajetut kilometrit.{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isTurvallisuusChecked()}>
              <h3>2.4 Turvallisuuslains????d??nt?? </h3>
              {turvallisuusChecked ? (
                <div class="chapterText">
                  <p>
                    Terveyteen, turvallisuuteen ja kest??v????n kehitykseen
                    liittyvist?? asioista s????det????n{" "}
                    <strong>
                      Euroopan unionin direktiiveiss??, suosituksissa ja
                      standardeissa
                    </strong>
                    . EU-direktiivit asettavat meille sek?? v??himm??isvaatimukset
                    ja perusperiaatteet, kuten ennaltaehk??isy ja
                    riskinarviointi, ett?? m????rittelev??t ty??nantajien ja
                    ty??ntekij??iden velvollisuudet.
                  </p>
                  <p>
                    Euroopan unionin suositukset pyrkiv??t helpottamaan{" "}
                    <strong>direktiivien</strong> toimeenpanoa ja
                    eurooppalaisten standardisointij??rjest??jen omaksumien{" "}
                    <strong>standardien</strong>
                    noudattamista. Euroopan unionin{" "}
                    <strong>j??senvaltiot</strong> integroivat direktiivit ja
                    standardit omaan lains????d??nt????ns?? ja
                    standardointij??rjestelmiins??. Niill?? on kuitenkin vapaus
                    noudattaa kansallisissa laeissaan my??s EU:ta tiukempia
                    s????nn??ksi??.
                  </p>
                  <p>
                    <strong>
                      Ty??turvallisuutta ja ty??terveytt?? koskeva puitedirektiivi
                      (89/391/ETY)
                    </strong>
                  </p>
                  <p>
                    Kaikkein t??rkein asiakirja meid??n kannaltamme on
                    Ty??turvallisuutta ja ty??terveytt?? koskeva puitedirektiivi
                    (89/391/ETY), jossa kuvataan yleiset periaatteet, joiden
                    mukaan ty??turvallisuus- ja terveysasioita k??sitell????n ja
                    alan ongelmia ehk??ist????n. Puitedirektiivi sis??lt???? my??s{" "}
                    <strong>
                      ty??nantajien ja ty??ntekij??iden velvollisuudet
                    </strong>
                    .
                  </p>
                  <p>
                    Direktiiviss?? luetellut ennaltaehk??isyn yleiset periaatteet:
                  </p>
                  <ul>
                    <li>riskien v??ltt??minen</li>
                    <li>riskien arvioiminen</li>
                    <li>riskien aiheuttajiin puuttuminen</li>
                    <li>ty??teht??vien mukauttaminen yksil??llisesti</li>
                    <li>mukautuminen tekniseen kehitykseen</li>
                    <li>
                      vaarallisten elementtien korvaaminen vaarattomilla tai
                      v??hemm??n vaarallisilla
                    </li>
                    <li>
                      yhten??isen ennaltaehk??isev??n toimintamallin kehitt??minen
                    </li>
                    <li>
                      yleisten suojaamiskeinojen suosiminen (henkil??kohtaisen
                      suojakeinojen sijaan)
                    </li>
                    <li>tarpeellisten ohjeiden antaminen ty??ntekij??ille</li>
                  </ul>
                  <p>Ty??nantajien ja ty??ntekij??iden velvollisuudet: </p>
                  <p>
                    On ty??nantajan velvollisuus taata ty??ntekij??iden
                    turvallisuus ja terveys kaikissa ty??h??n liittyviss??
                    asioissa. Ty??nantaja ei saa velvoittaa ty??ntekij???? kattamaan
                    mit????n turvallisuuteen ja terveyteen liittyvi?? kustannuksia.
                    Kun ty??nantaja sopii t??iden suorittamisesta p??tev??n
                    ulkopuolisen palveluntarjoajan tai henkil??n kanssa, t??m?? ei
                    vapauta ty??nantajaa ty??turvallisuuteen ja terveyteen
                    liittyvist?? velvoitteista.
                  </p>
                  <p>
                    <strong>Muut direktiivit</strong>
                  </p>
                  <p>
                    Puitedirektiivist?? johdetut direktiivit k??sittelev??t{" "}
                    <strong>yksitt??isi?? asioita</strong>. N??m?? direktiivit
                    konkretisoivat puitedirektiivin sis??lt??j?? tapauksissa,
                    joissa toiminnan yhten??ist??minen on tarpeen.
                  </p>
                  <p>Meid??n alaamme eniten koskevat direktiivit: </p>
                  <p>Altistuminen fyysisille vaaroille: </p>
                  <ul>
                    <li>Direktiivi 2003/10/EY ??? melu</li>
                  </ul>
                  <p>Ty??paikat, laitteet, kyltit, henkil??nsuojaimet:</p>
                  <ul>
                    <li>Direktiivi 2009/104/EY ??? ty??v??lineiden k??ytt?? </li>
                    <li>
                      Direktiivi 92/58/ETY ??? turvallisuus- ja/tai terveysmerkit
                    </li>
                    <li>Direktiivi 89/656/ETY ??? henkil??nsuojainten k??ytt??</li>
                    <li>Direktiivi 89/654/ETY ??? ty??paikkojen vaatimukset</li>
                  </ul>
                  <p>
                    Taakkoja, ergonomiaa ja psykososiaalisia riskej?? koskevat
                    s????d??kset:{" "}
                  </p>
                  <ul>
                    <li>Direktiivi 90/269/ETY ??? taakkojen k??sittely k??sin</li>
                  </ul>
                  <p>
                    <strong>Suositukset</strong>
                  </p>
                  <p>
                    Suositukset eiv??t ole sitovia, mutta ne auttavat
                    direktiivien noudattamisessa. Niihin on ker??tty hyvi??
                    k??yt??nteit?? ja konkreettisia esimerkkej?? direktiivien
                    tulkinnasta.
                  </p>
                  <p>
                    <strong>Muut asiaan liittyv??t dokumentit</strong>
                  </p>
                  <p>
                    EU:ssa on my??s direktiivej??, jotka k??sittelev??t muita
                    terveyteen, turvallisuuteen ja kest??v????n kehitykseen suoraan
                    vaikuttavia asioita. Esimerkiksi direktiivit markkinoille
                    tuotavista laitteista m????r????v??t, mit?? vaatimuksia laitteiden
                    t??ytyy t??ytt????, kuinka tuotteen valmistajan t??ytyy
                    dokumentoida tuotteen k??ytt?? jne.
                  </p>
                  <p>
                    Seuraavilla direktiiveill?? on suora vaikutus meid??n alaamme:{" "}
                  </p>
                  <ul>
                    <li>Direktiivi 2001/95 EY - tuoteturvallisuus</li>
                    <li>Direktiivi 2006/95/EY - s??hk??laitteet</li>
                    <li>
                      Direktiivi 2006/42/EY - uusi direktiivi, joka koskee mm.
                      koneita, laitteita ja apuv??lineit??
                    </li>
                    <li>Direktiivi 89/686/ETY ??? henkil??nsuojaimet</li>
                  </ul>
                  <p>
                    <strong>Standardit</strong>
                  </p>
                  <p>
                    Yhten??istetyt standardit konkretisoivat direktiivej??
                    tietyll?? alalla tai tietyntyyppisiss?? laitteissa. Standardit
                    auttavat valmistajia rakentamaan laitteita, jotka vastaavat
                    direktiivien tuotteille asettamia vaatimuksia.
                  </p>
                  <p>
                    Standardit eiv??t kuulu lains????d??nn??n piiriin, joten jokainen
                    valmistaja joko noudattaa niit?? tai on noudattamatta. Jos
                    valmistajat eiv??t kuitenkaan noudata kyseisi?? standardeja,
                    niiden pit???? todistaa, ett?? tuotteet eiv??t ole ristiriidassa
                    EU:n lains????d??nn??n kanssa.
                  </p>
                  <p>
                    <strong>Paikalliset lait ja s????nn??t</strong>
                  </p>
                  <p>
                    Kansallisten ja EU-lains????d??nn??n lis??ksi{" "}
                    <strong>paikallinen hallinto</strong>, pelastuslaitos tai
                    vakuutusyhti?? voi m????r??t?? tiukempia s????nt??j??. Useimmissa
                    esitystiloissa on talon s????nn??t ja tavat.
                  </p>
                  <p>
                    <strong>Turvallisuus ja vastuuvelvollisuus</strong>
                  </p>
                  <p>
                    Ty??nantajat ja turvallisuusvastaavat korostavat
                    <strong> turvallisuusasioiden dokumentoinnin</strong>{" "}
                    t??rkeytt??, koska ne haluavat suojata itsens?? ja edustamansa
                    organisaation tapaturmien varalta. Kun jotain tapahtuu,
                    tutkitaan, kuka asiassa on{" "}
                    <strong>vastuuvelvollinen</strong>.{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isVaroitusChecked()}>
              <h3>2.5 Varoitusmerkit </h3>
              {varoitusChecked ? (
                <div class="chapterText">
                  <p>
                    Varoitusmerkit varoittavat vaarallisista aineista ja
                    tilanteista. Niit?? sijoitetaan oviin, ty??pisteille,
                    laitteisiin ja tuotepakkauksiin.{" "}
                  </p>
                  <p>
                    Merkit ovat{" "}
                    <strong>
                      keltaisia kolmioita, joissa on musta reunus ja musta kuvio
                    </strong>
                    .{" "}
                  </p>

                  <img src={sign1} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Yleinen varoitusmerkki</strong>
                  </p>

                  <img src={sign2} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Vaarallinen j??nnite</strong>
                  </p>

                  <img src={sign3} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Riippuvia taakkoja</strong>
                  </p>

                  <img src={sign4} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Liikkuvia ajoneuvoja</strong>
                  </p>

                  <img src={sign5} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Lasers??teily??</strong>
                  </p>

                  <img src={sign6} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Optista s??teily??</strong>
                  </p>

                  <img src={sign7} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Myrkyllist?? ainetta</strong>
                  </p>

                  <img src={sign8} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Sy??vytt??v???? ainetta</strong>
                  </p>

                  <img src={sign9} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Tulenarkaa ainetta</strong>
                  </p>

                  <img src={sign10} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Hapettavia aineita</strong>
                  </p>

                  <img src={sign11} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>R??j??ht??v???? ainetta</strong>
                  </p>

                  <p>
                    <strong>Merkinn??t</strong>
                  </p>
                  <p>
                    Varoitusmerkkiten lis??ksi mustakeltaista teippi?? k??ytet????n
                    joskus merkitsem????n kulkuv??yli??, jotka t??ytyy pit???? vapaina,
                    tai kiinnitt??m????n huomio portaisiin. Tilanteissa, joissa
                    valaistus on alhainen, portaat voidaan merkit?? my??s
                    fosforiteipill??, joka hohtaa pime??ss??.
                  </p>

                  <img src={sign12} alt="varoitusmerkki"></img>

                  <p>
                    Kun halutaan est???? p????sy tietylle alueelle, k??ytet????n usein
                    punavalkoista nauhaa.
                  </p>

                  <img src={sign13} alt="varoitusmerkki"></img>

                  <p> </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isKieltoChecked()}>
              <h3>2.6 Kieltomerkit </h3>
              {kieltoChecked ? (
                <div class="chapterText">
                  <p>
                    Kieltomerkit osoittavat, mink??lainen k??yt??s aiheuttaa
                    todenn??k??isesti terveys- tai turvallisuusriskin. Ne
                    n??ytt??v??t ainoastaan mit?? tai ket?? kielto koskee. Merkit
                    sijoitetaan oviin, ty??pisteille, v??lineisiin ja laitteisiin
                    tai tuotepakkauksiin. Py??reiss?? merkeiss?? on{" "}
                    <strong>
                      punainen reunus ja viistottainen viiva valkoista taustaa
                      vasten
                    </strong>
                    . Musta merkki ympyr??n sis??ll?? osoittaa kielletyn toiminnan.
                  </p>

                  <img src={sign14} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Yleinen kieltomerkki</strong>
                  </p>

                  <img src={sign15} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Tupakointi kielletty</strong>
                  </p>

                  <img src={sign16} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Avotulen teko kielletty</strong>
                  </p>

                  <img src={sign17} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Vedell?? sammuttaminen kielletty</strong>
                  </p>

                  <img src={sign18} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>??l?? k??yt?? hissi?? tulipalon sattuessa</strong>
                  </p>

                  <img src={sign19} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>??l?? lastaa raskaita kuormia</strong>
                  </p>

                  <img src={sign20} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Ajoneuvoilla ajo kielletty</strong>
                  </p>

                  <img src={sign21} alt="varoitusmerkki"></img>

                  <p class="kuvateksti">
                    <strong>Tavaranj??tt?? kielletty</strong>
                  </p>
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
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
            }}
            onClick={() => setIsSecondPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>
                2 Luo turvallinen ja ymp??rist??yst??v??llinen ty??paikka
              </h2>
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
                <GrFormNext />
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
                <h2 style={{ marginLeft: 20 }}>3 Ty??skentele ergonomisesti</h2>
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
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>
                Ergonominen ty??skentely edellytt????, ett?? noudatat ergonomian
                periaatteita ty??j??rjestelyiss?? sek?? v??lineiden ja materiaalien
                k??sin tapahtuvassa k??sittelyss??.{" "}
              </p>
            </div>
            <div class="chapterBox" onClick={() => isNostotChecked()}>
              <h3>
                3.1 K??sin teht??viin nostoihin ja siirtoihin liittyv??t riskit{" "}
              </h3>
              {nostotChecked ? (
                <div class="chapterText">
                  <p>
                    On t??rke???? ymm??rt????, ett?? taakkojen <strong>painon</strong>{" "}
                    ja <strong>k??sittelytavan </strong>
                    lis??ksi my??s ty??teht??v??n <strong>toistuvuus</strong> ja
                    yksipuolisuus voivat aiheuttaa vahinkoa. Satojen pienten
                    tavaroiden siirtely voi aiheuttaa yht?? paljon vahinkoa kuin
                    yksi raskas taakka.
                  </p>
                  <p>
                    Tavaroiden k??sittely ty??ymp??rist??ss?? voi aiheuttaa
                    erityyppisi?? vaurioita ihmiskeholle. Esittelemme alla kolme
                    p????tyyppi??: lyhytkestoiset vaivat, krooniset vaivat ja
                    stressiin liittyv??t vaivat.
                  </p>
                  <p>
                    <strong>Lyhytkestoinen vaiva</strong>
                  </p>
                  <p>
                    Lyhytkestoisen vaivan{" "}
                    <strong>aiheuttaja on helppo tunnistaa</strong>. Vaiva voi
                    olla akuutti, kuten liukastumisesta tai putoamisesta johtuva
                    nilkan nyrj??hdys. Vaiva voi ilmet?? my??s viiveell??, mutta
                    syyn ja seurauksen v??lill?? on selv?? yhteys: paikallinen
                    lihaksen v??syminen ja kivun tunne, yleinen v??symys tai
                    liikkeiden koordinaation huonontuminen ovat tyypillisi??
                    esimerkkej??.
                  </p>
                  <p>
                    <strong>Krooninen vaiva</strong>
                  </p>
                  <p>
                    Kroonisten vaivojen aiheuttajaa on{" "}
                    <strong>vaikeampi tunnistaa</strong>. Vaiva on yleens??
                    seurasta pitk??aikaisesta rasituksesta. Kyse on kehon
                    kulumisesta - vauriosta, joka aiheutuu samojen kehonosien
                    vuosia kest??v??st?? (v????rin)k??yt??st?? ja ylikuormittamisesta.
                    Taakkojen painon ja k??sittelytavan lis??ksi merkityksellist??
                    on siis toiminnon toistuvuus.
                  </p>
                  <p>
                    Usein vauriota <strong>ei huomaa paikan p????ll??</strong>,
                    vaan my??hemmin, esimerkiksi kun keho on lepotilassa. T??m?? on
                    tyypillinen esitysteknikon vapaa-ajantauti.
                  </p>
                  <p>
                    Kroonisia vaivoja voi aiheutua esimerkiksi polville,
                    lonkille tai olkap??ille, mutta esitystekniikan alalla
                    ty??skentelevien yleisimm??t ja vaikeimmat vaivat ovat sel??n
                    alueella. N??iden vaivojen ymm??rt??miseksi t??ytyy tiet????
                    <strong> perusasiat selk??rangan rakenteesta</strong>.
                  </p>
                  <p>
                    Selk??ranka muodostuu <strong>33 nikamasta</strong>, joita
                    erottavat toisistaan tyynym??iset v??lilevyt. Selk??ranka
                    jaetaan nelj????n osaan. Levein n??ist?? on lanneranka, joka
                    muodostuu viidest?? nikamasta alasel??n alueella. Sen t??ytyy
                    kannatella koko yl??kehon paino ja samalla sen pit???? olla
                    joustava ja kest???? suurta rasitusta.
                  </p>
                  <p>
                    Selk??rangan luuosia eli nikamia erottavat{" "}
                    <strong>v??lilevyt</strong>, joilla on kaksi p????teht??v????:
                    vaimentaa selk????n kohdistuvia kuormituksia ja mahdollistaa
                    selk??rangan liike. V??lilevyjen ansiosta selk??ranka p????see
                    joustamaan ja liikkumaan. V??lilevyss?? on kaksi osaa.
                    Ulompana on kiinte?? sidekudossyinen rengas ja sis??ll??
                    hyytel??m??inen ydin.
                  </p>
                  <p>
                    Normaalitilanteessa, esimerkiksi kun seisomme,{" "}
                    <strong>nikamat ovat kohtisuorassa</strong> toisiinsa
                    n??hden. V??lilevyt kannattelevat rankaan ja nikamiin
                    kohdistuvaa kuormitusta tasaisesti.
                  </p>
                  <p>
                    Kun taas kannamme <strong>raskaita taakkoja</strong>,
                    v??lilevyihin kohdistuva kuormitus kasvaa. V??lilevyt painuvat
                    kasaan, neste puristuu ulos ja v??lilevy kovenee. Niin kauan
                    kuin v??lilevyt ovat kohtisuorassa nikamien kanssa, paine ei
                    kasva liian suureksi, vaan v??lilevyt kannattelevat nikamia
                    ja vaimentavat niihin kohdistuvan kuormituksen. Kun
                    kannettava taakka lasketaan alas, v??lilevyt palaavat
                    alkuasentoonsa.
                  </p>
                  <p>
                    Kun <strong>kumarrumme</strong> eteenp??in, selk??ranka
                    taipuu. T??ll??in v??lilevy puristuu kasaan etupuolelta ja
                    nikamiin kohdistuu ep??tasainen paine. Ep??tasainen kuorma
                    rajoittaa v??lilevyjen iskunvaimennuskyky??, mik?? voi
                    nopeuttaa v??lilevyn rappeutumista.
                  </p>
                  <p>
                    V??lilevyyn kohdistuvan v????nn??n ja ep??tasaisesti jakautuvan
                    suuren paineen yhdistelm???? pidet????n kaikkeen pahimpana sel??n
                    terveytt?? uhkaavana riskin??.
                  </p>
                  <p>
                    V??lilevyt <strong>rappeutuvat</strong> ihan tavallisissakin
                    olosuhteissa i??n my??t??. Suuri kuormitus, v????r??t
                    toimintatavat ja joissain tapauksissa yksitt??iset tapaturmat
                    nopeuttavat t??t?? prosessia. Oikeat tekniikat ja menetelm??t
                    viiv??stytt??v??t rappeutumisen vaikutuksia.
                  </p>
                  <p>
                    <strong>Stressi</strong>
                  </p>
                  <p>
                    Fyysisten syiden lis??ksi psykologiset tekij??t voivat
                    aiheuttaa ty??per??isi?? selk??ongelmia. Stressitekij??it?? on
                    kahta tyyppi??:{" "}
                  </p>
                  <ul>
                    <li>
                      Ty??n mielekkyyteen liittyv??t tekij??t, kuten{" "}
                      <strong>yksitoikkoisuus</strong> ja
                      <strong> tyytym??tt??myys</strong> ty??tilanteeseen,
                      esimerkiksi jos ty??skentelee varastossa, jossa ei koskaan
                      p????se n??kem????n ty??ns?? tuloksia.
                    </li>
                    <li>
                      Ty??ymp??rist????n suoraan liittyv??t stressitekij??t, jotka
                      ovat joko aisteihin liittyvi?? tai ulkoisia
                    </li>
                  </ul>
                  <p>
                    <strong>Aististressin </strong>
                    aiheuttaa prosessoitavan tiedon m????r??. Kun lyhyess?? ajassa
                    pit???? prosessoida liikaa informaatiota ja ty??ss?? on tiukkoja
                    aikatauluja, ty??ntekij??n henkil??kohtaiset rajat tulevat
                    vastaan. T??st?? voi seurata n??k??kyvyn alentumista, ty??nteon
                    ja reagoinnin hidastumista sek?? ep??j??rjestelm??llist??
                    toimintaa.
                  </p>
                  <p>
                    <strong>Ulkoiset tekij??t</strong> kuten melu ja savu voivat
                    voimistaa stressi??.
                  </p>
                  <p>
                    Stressin vaikutuksia on vaikea mitata ja ne ovat
                    yksil??llisi??, mutta tiedon ylikuormituksen v??hent??minen,
                    tarkkaamon ty??rauhan takaaminen ja ulkoisen stressin
                    v??hent??minen parantavat ty??terveytt?? ja -hyvinvointia joka
                    tapauksessa.{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isErgonomisetChecked()}>
              <h3>3.2 Ergonomiset ty??tavat </h3>
              {ergonomisetChecked ? (
                <div class="chapterText">
                  <p>
                    <strong>Ergonomiset tekniikat</strong> ohjeistavat, miten
                    laitteita ja muita taakkoja voi nostaa, siirt????, ty??nt???? tai
                    vet???? aiheuttamatta akuutteja tai kroonisia vammoja keholle.
                    Tekniikat ovat osa suurempaa, ergonomisen ty??ymp??rist??n
                    kokonaisuutta. Kokonaisuus sis??lt???? ty??j??rjestelyt, fyysisen
                    ty??ymp??rist??n ja laitteiden ja muiden taakkojen siirt??miseen
                    k??ytett??v??t apuv??lineet.
                  </p>
                  <p>
                    My??s harmittomalta vaikuttava toiminta voi aiheuttaa
                    terveyshaittoja, jos ty??ymp??rist?? ei ole sille otollinen.
                    Istuminen ahtaassa tilassa ohjausp??yd??n ????ress??,
                    k??ytett??vien laitteiden sijainti ja korkeuserot, selk??rangan
                    kiertyminen n??ytt??m??n tapahtumia tarkkailtaessa sek?? pitk????n
                    jatkuvat toistuvat liikkeet hiirt?? k??ytett??ess?? voivat
                    aiheuttaa selk??-, nivel- ja lihasvaivoja.
                  </p>
                  <p>
                    Samanlaisia vaaroja piilee{" "}
                    <strong>henkil??nsuojainten</strong> v????rink??yt??ss?? tai
                    k??ytt??m??tt?? j??tt??misess??. Oikeanlaiset keng??t vaimentavat
                    kehoon kohdistuvat iskut, oikeanlaiset k??sineet varmistavat
                    paremman otteen jne.{" "}
                  </p>
                  <p>
                    <strong>Ennakoi ja valmistaudu</strong>
                  </p>
                  <p>
                    On parempi ennakoida mahdolliset ongelmat, kun taakka on
                    viel?? vakaasti paikoillaan kuin havaita ongelma noston
                    puoliv??liss??, kun kuormaa kannatellaan hankalassa asennossa.
                  </p>
                  <p>
                    Ennen kuin aloitat, <strong>tarkista</strong> reitti. Mieti{" "}
                    <strong>miten</strong> kuorma on parasta nostaa ja siirt????.{" "}
                  </p>
                  <p>
                    <strong>V??lt?? nostamista</strong>
                  </p>
                  <p>
                    Kaikki, mink?? voi siirt???? nostamatta, vet??m??tt?? tai
                    ty??nt??m??tt?? parantaa turvallisuutta. T??m?? voidaan tehd??
                    k??ytt??m??ll?? oikeita apuv??lineit?? tai kallistamistekniikoita.{" "}
                    <strong>Kallistettaessa </strong>
                    taakan paino j??tet????n maahan ja taakkaa k????nnet????n
                    luonnollista reitti??.
                  </p>
                  <p>
                    Tyypillinen esimerkki on kuljetuslaatikon kallistaminen.
                    Laatikko nostetaan kyljelleen, mutta paino pysyy p????asiassa
                    maassa.
                  </p>
                  <p>
                    Kallistamista voidaan k??ytt???? my??s taakan nostamiseksi
                    korkeammalle tasolle. Silloin tavara tuodaan l??helle
                    korkeampaa tasoa kuten kuljetusauton lastauslavaa tai
                    koroketta. Tavara kallistetaan kohti tason reunaa ja
                    nostetaan niin, ett?? se pysyy koko ajan kiinni tason
                    reunassa. Lopuksi taakka liu???utetaan perille.
                  </p>
                  <p>
                    <strong>Ergonomiset ty??tavat</strong>
                  </p>
                  <p>
                    T??ss?? luvussa esitell????n erilaisia periaatteita, ty??tapoja
                    ja vinkkej?? pystysuuntaiseen liikkeeseen (nostaminen ja
                    kantaminen) sek?? vaakasuuntaiseen liikkeeseen (vet??minen ja
                    ty??nt??minen). Usein kuorman siirt??miseen ergonomisesti
                    tarvitaan n??iden menetelmien yhdistelm????.
                  </p>
                  <p>
                    <strong>Pid?? taakka l??hell?? kehoasi</strong>
                  </p>
                  <p>
                    Taakan painon lis??ksi selk??rangan kuormitukseen vaikuttaa
                    kuorman painopisteen ja kantajan selk??rangan v??linen
                    et??isyys vy??t??r??n korkeudella. Pid?? kuorman raskain puoli
                    kehoasi vasten. Jos kuormaa ei ole mahdollista saada l??helle
                    kehoa, yrit?? kuitenkin liu???uttaa se kohti kehoasi ennen
                    nostoa.
                  </p>
                  <p>
                    <strong>Jaa taakka molemmille k??sille</strong>
                  </p>
                  <p>
                    Molempien k??sien k??ytt??minen nostamiseen, vet??miseen ja
                    ty??nt??miseen jakaa kuormituksen tasaisesti selk??rangalle ja
                    hartioille. Me teemme t??m??n automaattisesti raskaiden
                    taakkojen kanssa, mutta on yht?? t??rke???? tehd?? se pienempien
                    painojen kanssa.
                  </p>
                  <p>
                    <strong>Seiso vakaasti</strong>
                  </p>
                  <p>
                    Ennen kuin nostat taakan, varmista ett?? seisoma-asentosi on
                    vakaa. Pid?? jalat hieman erill????n (korkeintaan hartioiden
                    leveydell??), toinen jalka hieman toisen edess??, jotta
                    tasapaino on helpompi pit???? (jalkater?? kuorman laitojen
                    suuntaisesti, jos kuorma on maassa). Varaudu jalkojen
                    siirt??miseen noston aikana vakaan asennon s??ilytt??miseksi.
                    Varmista, ett?? ainakin toinen jalka on koko ajan tukevasti
                    lattialla. Kun asetat jalkater??t kuorman ymp??rille, kuorman
                    painopiste pysyy aina jalkojen v??lisell?? tukialueella. N??in
                    seisoma-asento on aina vakaa.
                  </p>
                  <p>
                    <strong>K??yt?? jalkoja</strong>
                  </p>
                  <p>
                    Pid?? alaselk?? normaalilla S-kaarella ja k??yt?? jalkojasi
                    nostamiseen. Noston alussa on parempi taivuttaa v??h??n
                    selk????, lanteita ja polvia kuin taittaa pelkk?? selk??
                    (kumartua) tai taittaa lonkista ja polvista t??ysin
                    (kyykisty??). ??l?? laske selk???? noston aikana yht????n alemmas.
                  </p>
                  <p>
                    S??ilyt?? sel??n kaari my??s silloin, kun lasket kuorman alas.
                    Sel??n voi loukata yht?? helposti taakkaa laskiessa kuin sit??
                    nostaessa. Jos taakka t??ytyy sijoittaa tarkasti tiettyyn
                    asentoon maassa, laske se ensin maahan ja liu???uta sen
                    j??lkeen haluttuun paikkaan. Kun ved??t tai ty??nn??t kuormia,
                    voima otetaan lattiasta aina jalkojen kautta.
                  </p>
                  <p>
                    <strong>K??yt?? ylim????r??ist?? tukipistett??</strong>
                  </p>
                  <p>
                    Ylim????r??isen tukipisteen k??ytt?? esimerkiksi silloin, kun
                    nostat jotain yhdell?? k??dell??, minimoi selk??rangan
                    kuormituksen. Se kasvattaa my??s tukipinta-alaa ja tekee
                    nostoasennosta vakaamman.
                  </p>
                  <p>
                    <strong>Pid?? selk?? suorana ja p???? pystyss??</strong>
                  </p>
                  <p>
                    Sel??ss?? on luonnostaan kolme kaarta: sis??kaari alasel??ss??,
                    ulkokaari lapaluiden v??liss?? sek?? sis??kaari niskassa. T??ss??
                    asennossa selk?? pystyy parhaiten kannattelemaan taakkaa ja
                    v??lilevyt kuormittuvat v??hiten. Paras tapa s????st???? selk???? on
                    pyrki?? s??ilytt??m????n sel??n luonnollinen kaari koko p??iv??n,
                    my??s nostettaessa.
                  </p>
                  <p>
                    Pid?? my??s p???? pystyss??, kun nostat tai kannat. Kun olet
                    saanut kuormasta hyv??n otteen, katso eteenp??in, ??l?? alas
                    kuormaan. T??m?? pit???? selk??rangan oikeassa asennossa.
                  </p>
                  <p>
                    <strong>V??lt?? kiertoa ja v????nt????</strong>
                  </p>
                  <p>
                    V??lt?? sel??n kiertymist?? ja nojaamista sivulle, erityisesti
                    silloin kun olet kumartunut alas. Hartiat tulee pit????
                    samalla tasolla ja samaan suuntaan kuin lanteet. Kun olet
                    nostamassa jotakin, on parempi k????nty?? liikuttamalla jalkoja
                    kuin kiert??m??ll?? selk????. Koska jalkojen liike on
                    suositeltavampaa, kuorman kantomatkaa voi ihan hyvin v??h??n
                    kasvattaa.
                  </p>
                  <p>
                    <strong>V??lt?? tai v??henn?? dynaamista voimaa</strong>
                  </p>
                  <p>
                    Jos otat kiinni metrin korkeudelta putoavan kilon painoisen
                    esineen, vaikutus kehoon voi olla yli 15 kiloa.
                    Kiinniotettaessa putoavan esineen liikesuunnan my??t??ily ja
                    liikkeen hidastaminen v??hitellen pienent??v??t liikevoimaa.
                    K????nteisesti t??m?? tarkoittaa my??s sit??, ett?? yht??kkiset
                    liikkeelle l??hd??t ja pys??hdykset kasvattavat kehoon
                    kohdistuvaa terveysriski?? huomattavasti.
                  </p>
                  <p>
                    Kun ved??t tai ty??nn??t kuormaa, saata kuorma liikkeelle ja
                    pys??yt?? se rauhallisesti. Nopea kiihdytys ja hidastus
                    moninkertaistavat tarvittavat liikevoimat. Toinen hitaan
                    alun etu on se, ett?? omaa painoa voi k??ytt???? kuorman
                    saamiseksi liikkeelle.
                  </p>
                  <p>
                    <strong>Pyyd?? apua</strong>
                  </p>
                  <p>
                    Nosta ja siirr?? tavaroita yksin ainoastaan, jos pystyt
                    tekem????n sen helposti. Jos kuorma on liian raskas tai muuten
                    hankala nostettavaksi yksin, pyyd?? apua. Paikalliset s????nn??t
                    ja riskiarvio auttavat m????ritt??m????n turvallisen noston
                    rajat.{" "}
                  </p>
                  <p>
                    Kun siirr??t jotakin yhdess?? toisen henkil??n kanssa, on
                    eritt??in t??rke???? nostaa ja laskea kuorma{" "}
                    <strong>yht?? aikaa</strong>. Muuten toimitte toisianne
                    vastaan ja toinen teist?? p????tyy kannattelemaan koko kuormaa
                    yksin. Siksi on suositeltavaa, ett?? nostajat ovat
                    suunnilleen samanpituisia tai k??ytt??v??t apuna esimerkiksi
                    nostov??it??, jotka varmistavat taakan tasaisen jakaantumisen.
                    T??ss?? on selv????, ett?? hyv?? viestint?? on ratkaisevan t??rke????.
                  </p>
                  <p>
                    <strong>Ty??nt??minen voittaa vet??misen</strong>
                  </p>
                  <p>
                    Yleisesti ottaen on parempi ty??nt???? kuin vet????. Kehon painoa
                    voi k??ytt???? tehokkaammin ja hartiat kuormittuvat v??hemm??n.
                    Sel??n s????st??miseksi hyv?? alkuasento on eritt??in t??rke??. Kun
                    jalat ovat v??h??n harallaan ja toinen jalka on hieman toista
                    edell??, alkuasento on vakaa vet??mist?? tai ty??nt??mist??
                    varten. Jos jalat ovat liian l??hell?? toisiaan, nostaja voi
                    helposti kaatua eik?? pysty k??ytt??m????n voimaa.
                  </p>
                  <h3 style={{ paddingLeft: 0 }}>
                    Erityishaasteita ja -tilanteita
                  </h3>
                  <p>
                    Yleisten ergonomisten toimintatapojen j??lkeen esittelemme
                    esitystekniikan erityisi?? haasteita.
                  </p>
                  <p>
                    <strong>Yhdell?? k??dell?? nostaminen</strong>
                  </p>
                  <p>
                    Jos sinun pit???? nostaa tai vet???? jotain sivulla olevaa, on
                    parasta irrottaa toinen k??si ja n??in v??ltt???? kehon
                    kiertyminen.
                  </p>
                  <p>
                    <strong>Korkeat ja litte??t kuormat</strong>
                  </p>
                  <p>
                    Lavastetta on helpointa nostaa tarttumalla p????tyihin.
                    Varmista, ett?? sinun ja ty??kaverisi nosto-ote on peilikuvana
                    samanlainen. Nosta yhdell?? k??dell?? ja ty??nn?? lavastetta
                    hieman poisp??in vartalostasi niin, ett?? lavasteesta ja
                    k??sivarsistasi syntyy kolmio. N??in pystyt k??velem????n
                    vapaasti ja pit??m????n lavasteen tasapainossa.
                  </p>
                  <p>
                    <strong>Tekstiilien k??sittely</strong>
                  </p>
                  <p>
                    Taustakankaat ja muut kookkaat tekstiilit ovat raskaita.
                    Suurin ongelma on kuitenkin se, ett?? ne ovat pehmeit?? eik??
                    niill?? ole pysyv???? muotoa. Jos siirtomatka on lyhyt, on
                    parasta vet???? tekstiilit lattiaa pitkin. Jos siirtomatka
                    taas on pitk??, tekstiilit pit???? rullata tai taitella
                    tiukasti, jotta siirto sujuu mahdollisimman helposti.
                  </p>
                  <p>
                    <strong>Tavaran nostaminen laatikosta tai h??kist??</strong>
                  </p>
                  <p>
                    Nosto on vaikeaa, koska polvia ei voi koukistaa ja nosto on
                    teht??v?? sel??ll??. Yrit?? seisoa mahdollisimman l??hell??
                    nostettavaa taakkaa ja nojata laatikkoon. N??in saat pidetty??
                    taakan mahdollisimman l??hell?? vartaloasi ja minimoit
                    selk??rankaan kohdistuvan kuormituksen.
                  </p>
                  <p>
                    <strong>Vastapainojen kiinnitt??minen</strong>
                  </p>
                  <p>
                    Teatteripaino pit???? nostaa poisp??in kehosta ja kiert????
                    kelkan kuormatanko. Yrit?? v??ltt???? kiertoliikett??, kun tuo
                    painot kuormatangon luo. Seiso k??ysist??n edess?? ja tuo paino
                    kuormalaatalle kaksin k??sin. S????d?? k??ysist??n kuorman
                    korkeutta, jos pinosta on tulossa liian korkea.
                  </p>
                  <p>
                    <strong>
                      Kuljetuslaatikoiden kuljettaminen ramppia pitkin
                    </strong>
                  </p>
                  <p>
                    Py??rien p????ll?? oleva kuljetuslaatikko rampilla on
                    l??ht??kohtaisesti ep??vakaa asetelma. Tilannetta auttaa, jos
                    kuljetuslaatikkoa siirret????n tasaisella nopeudella.
                    Varmista, ett?? kulkureitill?? ei ole esteit?? ja
                    kuljetusautossa tai rampin alla on tilaa, jotta et joudu
                    pys??htym????n kaltevalla pinnalla. K??yt?? ty??nt??miseen kehon
                    painoa ja pid?? selk?? suorana, kuten aikaisemmin on
                    ohjeistettu.
                  </p>
                  <p>
                    Kuljetuslaatikon siirt??minen ramppia pitkin alas tarkoittaa
                    k??yt??nn??ss?? sen nopeuden hidastamista, koska muuten se
                    rullaisi alas itsest????n. Varmista, ett?? reitti takanasi on
                    vapaa ja ty??nn?? laatikkoa kevyesti, ik????n kuin olisit
                    ty??nt??m??ss?? sit?? yl??sp??in.{" "}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div class="chapterBox" onClick={() => isValineetChecked()}>
              <h3>3.3 Nosto-, kanto- ja siirtov??lineet </h3>
              {valineetChecked ? (
                <div class="chapterText">
                  <p>
                    On olemassa satoja erilaisia nosto-, kanto- ja
                    siirtov??lineit??, joita k??ytet????n esitystekniseen
                    ty??skentelyyn.
                  </p>
                  <p>
                    <strong>Yleisk??ytt????n sopivat laitteet ja v??lineet</strong>
                  </p>
                  <p>
                    Markkinoilla on paljon erilaisia standardisoituja nosto-,
                    kanto- ja siirtolaitteita ja v??lineit??, jotka sopivat
                    tavallisimpiin tilanteisiin. Useimmiten niist?? voi olla
                    paljon apua my??s esitys- ja tapahtumatuotannoissa.
                  </p>
                  <img src={sign22} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Kuljetusalusta eli ???dolly??? tai ???paukkari???</strong>
                  </p>
                  <p>
                    Kuljetusalusta on pieni puinen tai muovinen levy, jonka alle
                    on kiinnitetty nelj?? py??r????. Joissain kuljetusalustoissa on
                    kaksi kiinte???? ja kaksi k????ntyv???? py??r????. Kaikissa
                    alustoissa ei ole jarruja. Alustan p????lle voi laittaa
                    laatikoita tai muita tavaroita ja siirt???? paikasta toiseen.
                    Kuljetusalustan levyn materiaali synnytt???? tarpeeksi kitkaa,
                    niin ett?? kuormaa ja alustaa voidaan ty??nt???? yhten??
                    pakettina. Tarvittaessa kuorma voidaan kiinnitt???? alustaan
                    hihnoilla.
                  </p>
                  <img src={sign23} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Nokkak??rry</strong>
                  </p>
                  <p>
                    Nokkak??rry on L-kirjaimen muotoinen ty??nt??k??rry, jossa on
                    pieni metallinen lastitaso ja ty??nt??kahvat tai -aisa.
                    Joissakin k??rryiss?? on molemmilla puolilla kolme py??r????
                    portaissa kulkemista varten. Jotkut k??rryt voi helposti
                    taittaa kasaan niin, ett?? niit?? on helppo kantaa ja
                    kuljettaa. Nokkak??rryill?? siirret????n raskaita laatikkomaisia
                    kuormia, jotka voidaan pinota p????llekk??in. Kun lastitaso on
                    ty??nnetty kuorman alle, k??rry?? kallistetaan py??rien varassa,
                    kunnes painopiste on t??sm??lleen py??rienkohdalla. N??in
                    kuorman siirt??misess?? tarvitaan voimaa ainoastaan
                    vaakasuunnassa tapahtuvaan liikkeeseen.
                  </p>
                  <img src={sign24} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Lavavaunu</strong>
                  </p>
                  <p>
                    Lavavaunussa on metallirunko, yleens?? puusta tehty lava,
                    jossa on nelj?? py??r???? sek?? aisa vaunun ty??nt??mist?? tai
                    vet??mist?? varten. Useimmissa vaunuissa on kaksi kiinte???? ja
                    kaksi k????ntyv???? py??r???? sek?? mahdollisesti jarrut. Lavavaunu
                    on helppok??ytt??inen ja vakaa apuv??line useiden erimuotoisten
                    ja -tyyppisten tavaroiden siirt??miseen. Jarrut pit???? laittaa
                    p????lle, kun lavavaunuun lastataan kuormaa.
                  </p>
                  <img src={sign25} alt="varoitusmerkki"></img>
                  <p>
                    <strong>P??yt??vaunu</strong>
                  </p>
                  <p>
                    P??yt??vaunussa on kaksi yleens?? puusta tehty?? tasoa
                    nelipy??r??isess?? metallirungossa. Useimmissa vaunuissa on
                    kaksi kiinte???? ja kaksi k????ntyv???? py??r????. Useimmissa
                    p??yt??vaunuissa on jarrut. P??yt??vaunua on helppo k??ytt???? muun
                    muassa tietokoneiden, ohjausp??ytien ja rekvisiitan
                    siirt??miseen. P??yt??vaunun etuna on se, ett?? tavaroita
                    siirret????n <strong>p??yd??n korkeudella</strong>.
                  </p>
                  <img src={sign26} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Levyvaunu eli ???kulissivaunu???</strong>
                  </p>
                  <p>
                    Levyvaunu on kuljetusv??line, jossa on pitk?? puinen lava ja
                    korkea metallinen kaide sek?? ty??nt??aisa. Levyvaunulla
                    kuljetetaan <strong>suuria levyj?? </strong>
                    pystyasennossa. Py??rien sijoittelun ansiosta vaunun
                    k????nt??minen suurten levyjen kanssa on helppoa. Levyvaunussa
                    on yleens?? kaksi kiinte???? py??r???? keskell?? ja molemmissa
                    p??iss?? yksi k????ntyv?? py??r??. Etu- ja takapy??r??t ovat hieman
                    toisia py??ri?? korkeammalla, jotta pienet esteet on helppo
                    ylitt????. Levyvaunu on suunniteltu erityisesti suurten
                    liitteiden levyjen ja lavasteiden sek?? pitkien palkkien
                    kuljettamiseen. Lastitaso ja kaide ovat kaltevassa kulmassa
                    niin, ett?? levyt pysyv??t paikoillaan. Kun vaunu lastataan,
                    levyt voi k????nt???? vaaka-asentoon.
                  </p>
                  <img src={sign27} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Haarukkavaunu</strong>
                  </p>
                  <p>
                    Haarukkavaunu on metallinen kuljetusv??line, jonka
                    haarukkaosassa on pienet py??r??t. Vaunua ohjaillaan
                    ty??nt??aisalla, jossa on k??sipumppumekanismi ja isommat
                    ohjauspy??r??t. Pumppumekanismilla haarukkaosa nostetaan irti
                    maasta. Haarukkavaunulla nostetaan esimerkiksi{" "}
                    <strong>kuormalavoja</strong>, joissa on (raskaita) kuormia
                    tai muita taakkoja, jotka ovat valmiita nostettavaksi maasta
                    ja kuljetettavaksi jonnekin. Vaunun haarukat rullataan
                    kuormalavan alle ja lava nostetaan pumppaamalla kahvasta ja
                    lasketaan vapauttamalla paine. Kun kuormalava on irti
                    maasta, sit?? voidaan liikuttaa paikasta toiseen.
                  </p>
                  <img src={sign28} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Silmukkanostovy??t</strong>
                  </p>
                  <p>
                    Joustavissa silmukkanostov??iss?? on molemmissa p??iss?? lenkit,
                    joita k??ytet????n, kun tarvitaan parempi ote nostettaessa
                    raskaita tai hankalanmallisia tavaroita. Vy??t auttavat
                    saamaan hyv??n otteen kuormasta ja tuomaan kuorman painon
                    l??hemm??s kehoa.{" "}
                  </p>
                  <h3>Esitystekniikan erityisv??lineet</h3>{" "}
                  <p>
                    Esitys- ja tapahtuma-alan ihmiset ovat luovasti kehitt??neet
                    olemassa olevia apuv??lineit?? niin, ett?? niit?? pystyy k??ytt????
                    ergonomisemmin
                  </p>
                  <img src={sign29} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Flyygelin tai pianon siirtopy??r??t</strong>
                  </p>
                  <p>
                    Flyygelin siirtopy??r?? on pieni vaunu, jonka kolme py??r????
                    jakavat flyygelin jalkojen painon niin, ett?? soitinta on
                    helpompi kuljettaa. Koska flyygelin omat py??r??t voivat
                    vahingoittaa lattioita, siirtopy??ri?? k??ytet????n soittimen
                    siirt??miseen n??ytt??m??ll??. Siirtopy??r??t asetetaan{" "}
                    <strong>flyygelin omien pienten py??rien alle </strong>
                    ja varmistetaan, ett?? soitin kulkee tasaisesti.
                  </p>
                  <img src={sign30} alt="varoitusmerkki"></img>
                  <p>
                    <strong>Ohjausp??yd??n k????nnin</strong>
                  </p>
                  <p>
                    Ohjausp??yd??n k????ntimess?? on metallirunko, jonka kaarevan
                    sivun avulla p??yt?? voidaan k????nt???? suoraan oikeaan asentoon.
                    T??t?? apuv??linett?? k??ytet????n l??hinn?? isojen{" "}
                    <strong>analogisten ????nip??ytien kuljettamiseen</strong>.
                    Siirtoasennossa p??yt?? on pitk??ll?? kyljell????n. K??ytt???? varten
                    se pit???? k????nt???? ja nostaa p??yd??lle k??ytt???? varten. Kuljetin
                    kiinnitet????n p??yd??n alle, kun se on pystyasennossa. Sitten
                    runko kallistetaan kaarevan kyljen kautta kuljetusasentoon.
                  </p>
                  <p>
                    <strong>Vastapainop??yt??</strong>
                  </p>
                  <p>
                    Vastapainop??yd??t ovat vankkoja p??yti??, joissa on puinen
                    lastitaso, kest??v?? ter??srunko ja raskaita kuormia varten
                    suunnitellut py??r??t. Vastapainop??yd??ll?? painot ovat samalla
                    tasolla kuin vastapainoalustat. N??in pystyt????n paremmin
                    v??ltt??m????n sel??n kumartuminen ja kiertyminen yht?? aikaa.
                    P??yt?? sijoitetaan tarpeeksi kauas vastapainoalustasta niin,
                    ett?? sel??n kiert??misen sijaan liikutetaan jalkoja.
                  </p>
                  <p>
                    <strong>
                      Kuljetuslaatikko eli ???case???, ???keissi??? tai ???noppa???
                    </strong>
                  </p>
                  <p>
                    Kuljetuslaatikko on tukeva laatikko, jonka puiset sein??t on
                    liitetty toisiinsa alumiinilistoilla. Useimmissa
                    kuljetuslaatikoissa on{" "}
                    <strong>
                      kaksi kiinte???? ja kaksi k????ntyv???? py??r???? sek?? kantokahvat
                    </strong>
                    . Joskus py??riss?? on my??s jarrut. Laatikot on suunniteltu
                    erityisesti esitystekniikan laitteiston turvallista
                    s??ilytt??mist?? ja kuljettamista varten. Joskus laatikot
                    tehd????n tietty?? laitetta kuten ohjausp??yt???? tai
                    ketjunostinta varten.
                  </p>
                  <p>
                    <strong>Osastoitu kuljetuslaatikko</strong>
                  </p>{" "}
                  <p>
                    Osastoiduissa kuljetuslaatikoissa on puiset irrotettavat
                    v??lilevyt. Osastointi tehostaa ty??t??. Tavaroiden k??sittelyn
                    ja nostelun v??hent??minen est???? sel??n ylikuormittumisen.{" "}
                  </p>
                  <p>
                    <strong>S??hk??nostimen kuljetuslaatikko</strong>
                  </p>
                  <p>
                    N??iss?? laatikoissa on tarkasti suunniteltu osa, johon nostin
                    sopii t??ydellisesti ja toinen osa, jossa on tilaa ketjulle.
                    Pystytyksess?? ensin kiinnitet????n ketju ja sitten nostin
                    nostaa itsens?? yl??s kuljetuslaatikosta. Purussa sama tehd????n
                    toisinp??in. Nostin laskee itsens?? suoraan alapuolelle
                    sijoitettuun kuljetuslaatikkoon. Normaalik??yt??ss?? nostinta
                    ei tarvitse lainkaan nostella k??sin.
                  </p>
                  <p>
                    <strong>Kuljetuslaatikosta ty??pisteeksi</strong>
                  </p>
                  <p>
                    Kuljetuslaatikko voidaan muuttaa ty??pisteeksi p??yt??tason
                    avulla. Kaikki ty??kalut on lajiteltu omiin
                    vetolaatikkoihinsa ja kuljetuslaatikon kannesta tulee
                    p??yt??taso. P??yd??n avulla saat mukavan, oikeankorkuisen
                    ty??asennon. Ty??kalut ovat j??rjestyksess??, joten niit?? ei
                    tarvitse juurikaan nostella ja k??sitell??.{" "}
                    <p>
                      <strong>Kaapelilaatikot</strong>
                    </p>
                    <p>
                      Kaapelilaatikot voidaan laittaa trussin tai nostinputken
                      alle niin, ett?? kaapeleita ei tarvitse purkaa laatikosta.
                      Kun kaapelit on kiinnitetty nostoj??rjestelm????n, ne
                      purkautuvat kun trussi tai putki nousee yl??s ja kiertyv??t
                      takaisin laatikkoon, kun nostinputki lasketaan alas.
                      Raskaita monijohdinkaapeleita ei siis tarvitse k??sin
                      nostella.
                    </p>
                    <p>
                      <strong>Korokkeiden kuljetusvaunu</strong>
                    </p>
                    <p>
                      Ergonomisemmissa kuljetusvaunuissa lavat kuljetetaan
                      vaunuilla pystyasennossa liev??sti kallistettuina. N??m??
                      vaunut on tehty niin, ett?? lavojen jalat voidaan asentaa,
                      kun lava on vaunun kyydiss??. Lava kallistetaan jaloilleen
                      eik?? nostelua ja kantelua tarvita. Vaunu lastataan
                      p??invastaisessa j??rjestyksess??. Lava kallistetaan vaunun
                      p????lle ja jalat irrotetaan.
                    </p>
                    <p>
                      <strong>Valojen kuljetusteline eli ???meat rack???</strong>
                    </p>
                    <p>
                      Valonheitinten varastointia ja kuljetusta varten on
                      olemassa oma metallinen teline, jossa on py??r??t alla.
                      Telineeseen voi ripustaa valonheittimi??, joissa on
                      kiinnitin. Joissain telineiss?? on pysyv??t mutta
                      s????dett??viss?? olevat tangot heitinten ripustamista varten.
                      Jotkut telineet on suunniteltu nelj??n tai kuuden
                      valonheittimen tangolle. Joskus telineen lattialle voi
                      lastata lis??varuste- tai kaapelilaatikoita.
                    </p>
                    <p>
                      <strong>Tanssimattojen kuljetusvaunu</strong>
                    </p>
                    <p>
                      Tanssimattojen kuljetusvaunuissa on metallirunko ja nelj??
                      py??r????. Ne on suunniteltu raskaiden tanssimattorullien
                      varastoimiseen ja kuljettamiseen. Useimmissa vaunuissa on
                      k????ntyv??t py??r??t. Joissain malleissa on my??s toiminto,
                      joka helpottaa mattojen k????rimist?? ja avaamista.
                    </p>
                    <p>
                      <strong>Tekstiilien kuljetusvaunu</strong>
                    </p>
                    <p>
                      N??ytt??m??ll?? k??ytett??vien verhojen ja muiden pehmeiden
                      tavaroiden kuljetukseen on olemassa oma vaununsa, jossa on
                      metallirunko ja kankainen koriosa. N??iden vaunujen avulla
                      kankaat ja verhot voiottaa alas ja siirt???? ilman ett?? ne
                      koskettavat maata.
                    </p>
                    <p>
                      <strong>Rampit</strong>
                    </p>
                    <p>
                      Ramppi on metallinen kannettava ja kalteva levy, jonka
                      nostetut laidat est??v??t kuljetusvaunuja putoamasta.
                      Ramppeja k??ytet????n, kun kuljetusreitill?? on aukkoja tai
                      tasoeroja. N??in py??rill?? kulkevia kuormia ei tarvitse
                      kantaa esteiden yli. Rampin pintamateriaali on liukumista
                      est??v???? niin, ett?? jaloilla saa hyv??n otteen, kun kuormia
                      ty??nnet????n yl??sp??in. Yleens?? kaltevuus ei saa ylitt???? 30 %
                      (30 cm per metri).{" "}
                    </p>
                    <p>
                      <strong>Kiinte??t ergonomiset apuv??lineet</strong>
                    </p>
                    <p>
                      V??liaikaisessa k??yt??ss?? olevien, liikuteltavien laitteiden
                      siirtelemiseen on olemassa paljon ergonomisia
                      apuv??lineit??. Niiden lis??ksi on olemassa rakennukseen
                      kiinte??sti asennettuja ratkaisuja, kuten:
                    </p>{" "}
                    <ul>
                      <li>
                        Katsomoalueen yl??puolella oleva ketjunostin, jolla
                        raskaan miksausp??yd??n voi siirt???? toiseen
                        miksauspaikkaan.
                      </li>
                      <li>Nostin valonheitinten nostamiseksi valosillalle.</li>
                      <li>
                        Tiivistetyt kuormaussillat, joiden nosto- ja
                        siltap??ytien asentoa voi s????t????.
                      </li>
                    </ul>{" "}
                  </p>
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
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
              maxHeight: "6em",
            }}
            onClick={() => setIsThirdPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>3 Ty??skentele ergonomisesti</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  marginBottom: "0.3em",
                  color: "#6603fc",
                }}
              >
                <GrFormNext />
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
                <h2 style={{ marginLeft: 20 }}>4 K??yt?? henkil??suojaimia</h2>
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
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>Tulossa my??hemmin. </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
              maxHeight: "6em",
            }}
            onClick={() => setIsFourthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>4 K??yt?? henkil??suojaimia</h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  marginBottom: "0.3em",
                  color: "#6603fc",
                }}
              >
                <GrFormNext />
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
                <h2 style={{ marginLeft: 20 }}>
                  5 Varmista paloturvallisuus esitysymp??rist??ss??
                </h2>
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
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>Tulossa my??hemmin. </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
            }}
            onClick={() => setIsFifthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>
                5 Varmista paloturvallisuus esitysymp??rist??ss??
              </h2>
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
                <GrFormNext />
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
                <h2 style={{ marginLeft: 20 }}>
                  6 Ty??skentele korkealla turvallisesti
                </h2>
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
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>Tulossa my??hemmin. </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
            }}
            onClick={() => setIsSixthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>
                6 Ty??skentele korkealla turvallisesti
              </h2>
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
                <GrFormNext />
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
                <h2 style={{ marginLeft: 20 }}>
                  7 K??yt?? esitystekniikan tilap??iss??hk???? turvallisesti
                </h2>
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
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>Tulossa my??hemmin. </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
            }}
            onClick={() => setIsSeventhPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>
                7 K??yt?? esitystekniikan tilap??iss??hk???? turvallisesti
              </h2>
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
                <GrFormNext />
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
                <h2 style={{ marginLeft: 20 }}>
                  8 K??yt?? ty??kaluja turvallisesti
                </h2>
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
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>Tulossa my??hemmin. </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
              maxHeight: "6em",
            }}
            onClick={() => setIsEightPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>
                8 K??yt?? ty??kaluja turvallisesti
              </h2>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "0.5em",
                  fontSize: 40,
                  zIndex: 2,
                  marginLeft: 0,
                  marginBottom: "0.3em",
                  color: "#6603fc",
                }}
              >
                <GrFormNext />
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
                <h2 style={{ marginLeft: 20 }}>
                  9 Ty??skentele turvallisesti kemikaalien kanssa
                </h2>
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
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>Tulossa my??hemmin. </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
            }}
            onClick={() => setIsNinthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>
                9 Ty??skentele turvallisesti kemikaalien kanssa
              </h2>
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
                <GrFormNext />
              </p>
            </div>
          </div>
        </div>
      )}
      {tenthpartShown ? (
        <div>
          <div class="materialBox" style={{ marginBottom: "60px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 5 }}>
                <h2 style={{ marginLeft: 20 }}>
                  10 Pystyt?? ja ripusta esitystekniikka turvallisesti
                </h2>
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
                  <GrFormDown />
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 10 }}>Tulossa my??hemmin. </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              marginBottom: "6em",
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: "auto",
            }}
            onClick={() => setIsTenthPartShown(true)}
          >
            <div style={{ flex: 5 }}>
              <h2 style={{ marginLeft: 20 }}>
                10 Pystyt?? ja ripusta esitystekniikka turvallisesti
              </h2>
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
                <GrFormNext />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ETTEmaterial;
