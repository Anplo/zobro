import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

const styles = require('../../styles/styles.ios');
const InPageImage = require('../inPageImage');
const AnimalText = require('../animalText');

const IMAGES = [
  require('../../images/animals/medvedKamcatsky/image00.png'),
  require('../../images/animals/medvedKamcatsky/image01.png'),
  require('../../images/animals/medvedKamcatsky/image02.png'),
];

const THUMBNAILS = [
  require('../../images/animals/medvedKamcatsky/image00.png'),
  require('../../images/animals/medvedKamcatsky/image01.png'),
  require('../../images/animals/medvedKamcatsky/image02.png'),
];

var AnimalDetail = React.createClass({
  componentWillMount() {
    this.props.bg();
  },

  render() {
    return (
      <ScrollView>
        <View>
          <InPageImage firstImage={true} indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        </View>
        <View style={styles.scrollView}>
          <AnimalText>
            Jespáci bojovní (Philomachus pugnax) jsou pěkní ptáčci. Žijí si na vysoké noze, a když je to na severu Evropy nebo Asie přestane bavit (komu by se chtělo zůstávat celý rok v takové zimě), táhnou na jih, nejlépe do subsaharské Afriky, někdy však také do Indie nebo Arábie, a to v hejnech, která mohou čítat až tisíce jedinců. Když jsou právě na tahu, můžete je zahlédnout i v České republice.
          </AnimalText>
          <AnimalText>
            Zbožňují vodu, a tak nejraději pobývají na březích jezer a mokřadů, kde se s oblibou brodí bahnem (ne nadarmo se řadí mezi bahňáky) a čas od času odchytí i nějakou tu rybku, jinak ale vezmou zavděk hmyzem a drobnými živočichy, nepohrdnou však ani vodními rostlinami nebo semeny.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Samci samicím přerůstají přes hlavu, obvykle o nějakých 5 až 8 centimetrů, jinak se však za normálních okolností příliš neliší. Všichni mají hnědé peří s černými skvrnami, bílé bříško a dlouhý špičatý zobák. Když ovšem chtějí samci v období páření (květen až červen) zapůsobit na samice, to pak hrají všemi barvami. Tedy všemi ne, ale naroste jim pestrý vztyčitelný límec (hnědý, žlutý až bílý), tváře si napudrují červenožlutou pudřenkou a tou dobou mají za ušima (kudrnaté chocholky). Sem tam připojí i nějakou tu poklonu. Chtějí za každou cenu ubránit svou pozici na tokaništi, a tak vám v tomto období nabídnou náramnou podívanou v podobě soubojů.
          </AnimalText>
          <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Jespáci, které můžete vidět zde v expozici Beringie, pocházejí z německé NaturZoo Rheine a většina z nich sem přišla v roce 2010. Společnost jim dělají kulíci píseční, tenkozobci opační a ústřičník velký.
          </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
