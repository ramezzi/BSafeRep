//import GameStatsStyle from './gamestats.css';
import {  FaArrowAltCircleRight, FaSearch, FaBookmark, FaBook, FaArrowAltCircleDown } from "react-icons/fa";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { fireEvent } from "@testing-library/dom";
//import firebase from 'firebase';
  
function ETTEmaterial() {

const [firstpartShown, setIsFirstPartShown] = useState(false);
const [tapaturmateoriaChecked, setIsTapaturmaTeoriaChecked] = useState(false);
  const [quizzess, setQuizzess] = useState([]);

    var isQuizzSelected = false

    const history = useHistory();

    const isFirstPartShown = () => {
      if (firstpartShown === true) {
        setIsFirstPartShown(false)
      } else {
        setIsFirstPartShown(true)
      }
    }
    
    const isTapaturmaTeoriaChecked = () => {
      if (tapaturmateoriaChecked === true) {
        setIsTapaturmaTeoriaChecked(false)
      } else {
        setIsTapaturmaTeoriaChecked(true)
      }
    }

    useEffect(() => {
      setQuizzess([]);
    }, [])

    return(
        <div>

              {firstpartShown ? 
            ( 
              <div>
        
        <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray', height: 'auto'}}>
          <div style={{display: "flex", flexDirection: "row"}}>
          <div style={{flex: 5}}>
          <h3 style={{marginLeft: 20}}>1 Työskentele turvallisesti</h3>
      </div>
      <div style={{flex: 1}}>
      <p style={{marginTop: '40%', fontSize: 40, zIndex: 2, marginTop: 30, marginLeft: 0, color: '#6603fc'}} onClick={() => isFirstPartShown()}><FaArrowAltCircleDown/></p>
      </div></div>
      <div style={{width: '100%'}}>
      <p style={{margin: 10}}>Turvallinen työskentely edellyttää, että tiedostat esitystuotantoihin liittyvät riskit ja otat ne työssäsi huomioon oman turvallisuutesi takaamiseksi.  </p>
        </div>
        <div style={{borderColor: 'grey', borderStyle: 'solid', borderWidth: 1, height: 'auto', margin: 10, borderRadius: 10, backgroundColor: 'white'}} onClick={() => isTapaturmaTeoriaChecked()}>
          <h2>1.1 Tapaturmateoria </h2>
          {tapaturmateoriaChecked ? <div><p style={{margin: 20}}>
            On tärkeää tiedostaa, että täydellistä turvallisuutta ei ole olemassa, ja huolimatta siitä, kuinka turvallisesti pyrimme työskentelemään, onnettomuuksia tapahtuu.  

Turvallisuudessa on aina kyse tasapainosta käytettävyyden ja hyväksyttävissä olevan riskin välillä. Jotta voimme tehdä tasapainoon johtavia valintoja järkevästi, meidän täytyy ymmärtää, miten onnettomuudet tapahtuvat ja minkälaisia mekanismeja niiden takana piilee.  

Riski 

Riskissä on kolme osatekijää 1. vaarallinen tilanne tai teko, 2. todennäköisyys, että jokin menee vikaan sekä tämän tapahtuman 3. seuraukset. Jokainen vaarallinen tilanne tai teko luo vaaran uhan. Tämä ei kuitenkaan tarkoita, että jokin menee pieleen. Esimerkiksi jos pudotat työkalun, kun ketään ei ole lähistöllä, vahinkoa ei tapahdu.  

Todennäköisyys  

Jokainen vaarallinen tilanne tai teko luo vaaran uhan. Tämä ei kuitenkaan tarkoita, että jokin menee pieleen. Esimerkiksi jos pudotat työkalun, kun ketään ei ole lähistöllä, vahinkoa ei tapahdu. 

Seuraus 

Seurauksen käsite osoittaa vahinkojen mahdollisen vakavuuden tai vaikutuksen työpaikkaan. Esimerkiksi, kun työkalu putoaa, aiheuttaako se pieniä vaurioita vai voiko se tappaa jonkun? 

Läheltä piti-tilanne 

Läheltä piti -tilanne on tahaton vaaratilanne, josta ei koidu lainkaan vaurioita tai vammoja tai vauriot ja vammat ovat vähäisiä. Jotain vaarallista siis tapahtui, mutta tilanne päättyi kuitenkin hyvin. 

Esimerkkejä: 

Joku pudottaa vasaran korkealta vahingoittamatta ketään. 

Joku kompastuu kaapeliin, mutta ei kuitenkaan kaadu vaan jatkaa matkaa. 

 

Tapaturma 

Tapaturma on tahaton tilanne, josta aiheutuu vakavaa vahinkoa tai vammoja. Toisin sanoen tilanne päättyy ikävästi. 

Esimerkkejä: 

Joku pudottaa vasaran korkealta ja satuttaa toista ihmistä. 

Joku kompastuu kaapeliin, kaatuu ja satuttaa itsensä 

Vahinko tai vamma 

Vammat ja vauriot ovat tapaturman seurauksia. Voimme luokitella ne vakavuuden ja seurausten perusteella. 

Pienet haaverit, jotka hoidetaan paikan päällä ensiavun turvin, ei sairauspoissaoloa 

Vammat, joista aiheutuu väliaikainen sairauspoissaolo 

Pysyvät vammat (esimerkiksi liikuntarajoitteet) 

Kuolema 

On tärkeä ymmärtää, että vahingon aiheuttaja ei ole sama kuin tapaturman aiheuttaja. Vahingon aiheuttaja on se, joka saa aikaan fyysisen vaurion, esimerkiksi putoava valonheitin tai terävä veitsi. Tapaturman aiheuttaja on se toiminta tai tilanne, joka aiheutti tapaturman, esimerkiksi turvavaijerin puute tai väärä tapa käsitellä veistä. 

Esimerkkejä: 

Vasara osuu päähän ja haava pitää ommella. 

Joku kompastuu ja ruhjeet hoidetaan ensiavulla. 

Suhteet 

Alla oleva kaavio osoittaa miten eri käsitteet suhtautuvat toisiinsa. Vaara, todennäköisyys ja seuraus muodostavat riskin. Riski saattaa aiheuttaa vaaratilanteen. Jos vaaratilanne päättyy huonosti, sattuu tapaturma, joka aiheuttaa vahinkoja. Tapaturmien välttämiseksi yritämme hallita riskitekijöitä, analysoimme riskit ja pidämme kirjaa läheltä piti -tilanteista. 

 

Vaarallinen toiminta 

Tilastot osoittavat, että 80 % tapaturmista johtuu ihmisen toiminnasta. Jos siis haluamme ehkäistä onnettomuudet, ensimmäiseksi pitää tarkastella ihmisen käytöstä. Meidän pitää kysyä, miksi joku käyttäytyy tietyllä tavalla. Syyt vaaralliseen käytökseen voidaan jakaa kolmeen: tietämättömyys, kykenemättömyys ja haluttomuus.  

Tietämättömyydessä on useimmiten kyse tiedon puutteesta. Jos ei tiedä vaaran olemassaolosta tai tekojensa seurauksista, riskiä on vaikea välttää. Jos ei tiedä, miten suojata itsensä tai kuinka toimia onnettomuustilanteessa, on vaikea minimoida onnettomuuden seurauksia. 

Esimerkki: 

Kaiuttimien ripustaminen tietämättä, että ensin pitää tarkistaa nostoapuvälineiden suurin sallittu kuorma. 

Ratkaisut tietämättömyyteen ovat yksinkertaisia. Jos joku epäilyttää, kysy. Perehdy laitteisiin, materiaaleihin ja työtapoihin. Ennen kaikkea myönnä, ettet tiedä.  

Kykenemättömyyteen voi olla monia syitä. Yksi syy voi olla, että työntekijä ei fyysisesti pysty tekemään jotain. Hän ei esimerkiksi ole tarpeeksi vahva tai notkea, häneltä puuttuu kokemusta tai oikeanlaista osaamista työn suorittamiseen tai hänellä ei ole aikaa tehdä työtä kunnolla. Joskus taas työntekijä ei henkisesti pysty suorittamaan tehtävää turvallisesti, esimerkiksi koska hän ei pysty keskittymään oman elämäntilanteensa takia tai koska hän pelkää sitä, mitä hänen pitäisi tehdä. 

Esimerkkejä: 

Ryhdyt siirtämään kaiuttimia, vaikka ne ovat liian raskaat yksin nostettaviksi. 

Työskentelet korkealla, vaikka tunnet itsesi sairaaksi. 

Jotta tilanne voidaan ratkaista, työntekijän täytyy tuntea ja myöntää rajansa. Tällä tavalla tunnistamme ongelman ja voimme (ehkä) tehdä sille jotakin. Joka tapauksessa, työntekijä ei saa antaa kenenkään pakottaa itseään tekemään mitään, mihin ei koe kykenevänsä. 

Haluttomuuteen onnettomuuden syynä on kaikkein vaikein puuttua, koska se edellyttää ihmisten asenteiden muutosta. Voi olla monia syitä, miksi joku ei halua käyttää olemassa olevia turvavälineitä tai työskennellä turvallisesti. Syynä voi olla laiskuus, motivaation puute tai käsitys, että itse tietää asiat paremmin. Useimmissa tapauksissa tällainen käytös juontuu tavoista, joita voi olla vaikea muuttaa tai ammatillisesta sokeudesta. Ammatillinen sokeus tarkoittaa, että pitkän ajan kuluessa tottuu tiettyihin riskeihin ja sen takia aliarvioi ne. 

Esimerkkejä: 

Et käytä turvakenkiä, koska olet aina työskennellyt ilman niitä. 

Kun työskentelet korkealla, et käytä työkaluissa turvavaijeria, koska et halua tuhlata aikaa. 

Käytät vääränlaista ripustustarviketta kaiuttimen ripustamiseen, koska et halua odottaa käyttötarkoitukseen suunniteltua tarviketta. 

Jotta tämäntyyppinen käytös korjaantuisi, meidän pitää ymmärtää muutostarpeen syyt ja motivoida ja tarkkailla toisiamme. 

Vaaralliset tilanteet 

Toinen tapaturmanaiheuttajatyyppi muodostuu tilanteista, jotka aiheuttavat riskin työntekijöille tai muille ihmisille. Nämä voidaan jakaa kolmeen lajiin: järjestelyt, tekniikka ja olosuhteet.  

Järjestelyihin liittyvät vaaratilanteet aiheutuvat tavasta, jolla työ on järjestetty. Nämä riskit sisältävät muun muassa aikataulutusongelmat työryhmien tai toimintojen välillä (esimerkiksi esityksen purku on järjestetty samaan aikaan kuin laitteiston siirrot).  

Tekniikkaan liittyviä vaaratilanteita aiheuttavat koneiden, laitteiden ja työkalujen lisäksi muut konkreettiset elementit kuten portaikot ja kulkusillat.  

Olosuhteisiin liittyvät vaaratilanteet viittaavat ulkoisiin tekijöihin, jotka eivät ole suoraan yhteydessä toimintaan mutta vaikuttavat siihen. Esimerkiksi rajallinen valaistus, sääolosuhteet tai liiallinen melu vaikuttavat työhön negatiivisesti. 

Samanaikaisuus 

Onnettomuudelle ei ole vain yhtä syytä. tapaturma on aina seurausta olosuhteiden ja toiminnan yhdistelmästä. Tapaturma sattuu ainoastaan silloin, kun nämä osatekijät tapahtuvat samaan aikaan.  

Esimerkki: 

Työkalu tippuu telineeltä ja osuu alla kulkevaan henkilöön. Jos tutkimme tilannetta tarkkaan, huomaamme, että tapaturmaan liittyy useita erilaisia riskejä: 

Rakennustelineellä on työkalu 

Esineitä ei ole suojattu putoamiselta 

Telineellä työskentelee joku 

Joku kulkee telineen alta 

Mikään näistä riskeistä ei kuitenkaan yksin aiheuta tapaturmaa. 

Tapaturman aiheuttaja on: 

Joku kulkee ohi, kun telineellä työskentelevä henkilö, joka ei ole suojannut työvälineitään putoamiselta, tönäisee työkalunsa alas 

Jos yksikin riskeistä poistettaisiin, tapaturmaa ei sattuisi. 

Jos työkalua ei ole, se ei voi pudota 

Jos työkalussa on turvavaijeri, se ei voi pudota 

Jos kukaan ei työskentele telineellä, työkalua ei voi tönäistä alas 

Jos kukaan ei kulje telineen ohi työkalun pudotessa, sattuisi vain vaaratilanne, ei tapaturmaa. 

Kaikkia riskejä ei kuitenkaan voi poistaa, muuten työ ei tule tehdyksi. Vaihtoehtona on välttää samanaikaisuutta. Varmistamme, että riskit eivät toteudu samaan aikaan. Toisin sanoen: 

Jos kukaan ei voi kulkea telineen läheisyydessä, kun joku työskentelee telineellä, tapaturmaa ei voi sattua. 

Samanaikaisuuden välttämistä käytetään paljon tilanteissa, joissa riskiä ei voida kokonaan poistaa. 

Ammattitaudit 

Ammattitaudit eivät johdu tapaturmista. Fyysiset vahingot eivät ole seurausta yhtäkkisestä tapahtumasta vaan pitkäaikaisesta altistumisesta vaarallisille tai epäterveellisille olosuhteille. Tyypillisiä esimerkkejä ovat kuulovauriot, jotka johtuvat pitkäaikaisesta altistumisesta melulle, toistuvasta nostamisesta johtuvat selkävaivat ja pitkäkestoisesta näyttöpäätetyöskentelystä johtuvat silmäongelmat. Koska vaivat eivät ole suoraan yhteydessä tiettyyn tapahtumaan, on vaikea todistaa yhteyttä työtehtäviin ja ehkäistä niitä.  

Ergonomisemmat työtavat, oikea suojavarustus ja tehtävien monipuolisuus ehkäisevät ammattitauteja parhaiten. 

Psykososiaaliset riskit 

Psykososiaaliset riskit ovat psyykkiseen ja fyysiseen terveyteen liittyviä riskejä, jotka juontavat juurensa työn sisällöstä tai työn kontekstista. Sisällöllä tarkoitetaan tässä työtehtävien laatua, työmäärää, aikatauluja ja työn olosuhteita (työpaikka, laitteistot jne.). Kontekstilla taas viitataan tässä työntekijän mahdollisuuksiin vaikuttaa työhönsä, työpaikan työkulttuuriin, työyhteisön jäsenten välisiin suhteisiin, etenemismahdollisuuksiin sekä työn ja vapaa-ajan väliseen tasapainoon. Nämä riskit voivat aiheuttaa äärimmäistä stressiä, masennusta, loppuun palamista tai tylsistymistä, mutta myös fyysisiä ongelmia kuten tuki- ja liikuntaelimistön vaivoja tai sydän- ja verisuonitauteja. 

Useimmilla työpaikoilla on toimintaohje seksuaalista häirintää, asiatonta käytöstä, kiusaamista ja muita vastaavia tilanteita varten. Ongelmien esiin ottaminen ajoissa voi auttaa minimoimaan psykososiaalisten riskien seurauksia. </p></div> : <div></div>}
        </div>
        <div style={{borderColor: 'grey', borderStyle: 'solid', borderWidth: 1, height: 100, margin: 10, borderRadius: 10}}>
          <h2>1.2 Viisi askelta riskien vähentämiseen </h2>
        </div>
        </div>
        </div>
      )
      :
      (
      <div>
        
        <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray', height: 110}} onClick={() => setIsFirstPartShown(true)}>
          <div style={{flex: 5}}>
          <h3 style={{marginLeft: 20}}>1 Työskentele turvallisesti</h3>
      </div>
      <div style={{flex: 1}}>
      <p style={{marginTop: '40%', fontSize: 40, zIndex: 2, marginTop: 30, marginLeft: 0, color: '#6603fc'}}><FaArrowAltCircleRight/></p>
      </div>
        </div>
        </div> ) }
</div>

    );
  }
  export default ETTEmaterial;