import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Es Kuwut',
      image: require('../../Photo/EsKuwut.jpg'),
      description: 'Minuman khas Bali dengan rasa segar, cocok diminum saat cuaca panas',
      ingredients: [
                    '9 Buah Mentimun', 
                    '6 Sendok Makan, Sirup Melon', 
                    '2 Buah Kelapa Muda', 
                    '1 kg Nata De Coco',
                    'Secukupnya Es Batu', 
                    'Secukupnya air'
                  ],
      instructions: [
                    'Kupas mentimun, buang biji, cuci bersih dan parut.', 
                    'Siapkan bahan bahan lain, seerti Nata De Coco, Sirup Melon dan kelapa muda yang sudah dikerok', 
                    'Dalam baskom tuang mentimun, natadecoco, jas jus jeruk nipis, Lanjut tuang air matang dan es batu.',
                    'Lanjutkan tuangkan air matang dan es batu, lalu aduk hingga semua bahan tercamtur dan jangan lupa koreksi rasa',
                    'Es Kuwut siap dinikmati'
                    ],
      cookingTime: '5 menit',
      difficultyLevel: 'Mudah',
      servings: '10 Orang'
    },
    {
      id: 2,
      name: 'Coffe Milkshake',
      image: require('../../Photo/Coffe.jpg'),
      description: 'Minuman kopi dengan campuran susu dan es krim.',
      ingredients: [
                  '2 sashet kopi bubuk instan', 
                  '250 ml susu cair', 
                  'Es batu secukupnya', 
                  ],
      instructions: [
                  'Siapkan Blender',
                  'Masukkan es batu, Kopi dan Susu, blender semua hingga halus',
                  'Siap dinikmati'
                  ],
      cookingTime: '5 menit',
      difficultyLevel: 'Mudah',
      servings: '1 Gelas'
    },
    { 
      id: 3, 
      name: 'Ikan Bakar Bumbu Kecap',
      image: require('../../Photo/IkanBakar.jpg'),
      description: 'Variasi mengolah ikan dengan cara bakar tapi tidak perlu menggunakan arang, cukup pakai teflon.',
      ingredients: [
                  '2 ekor ikan mujiar', 
                  '5 sdm kecap manis', 
                  '1 sdt gla merah',
                  '100 ml air',
                  'Garam dan kaldu jamur secukupnya',
                  'Minyak goreng secukupnya',
                  '--- Bumbu Halus ---', 
                  '5 butir bawang merah',
                  '3 siaung bawang merah',
                  '1 sdt ketumbar',
                  '1/2 sdt lada',
                  '1 ruas jahe',
                  '2 butir kemiri'
                  ],
      instructions: [
                  'Cuci ikan lalu marinasi dengan garam dan air jeruk nipis. Kemudian bilas.',
                  'Panaskan minyak, goreng ikan hingga matang.',
                  'Haluskan bumbu menggunakan blender atau ulekan dan tumis bumbu itu hingga matang',
                  'Masukkan air, kecap dan bumbu lainnya dalam bumbu tersebut',
                  'Balur ikan dengan bumbu, lalu panggang di atas teflon panas. Beri tambahan kecap. Panggang sampai warnanya menggelap.'
                  ],
      cookingTime: '30 - 45 menit',
      difficultyLevel: 'Sedang',
      servings: '2 Orang'
    },
    { 
      id: 4, 
      name: 'Cincau Cappucino',
      image: require('../../Photo/Cicau.jpg'),
      description: 'Minuman kopi dengan variasi jelly cincau yang menyegarkan.',
      ingredients: [
                  '3 sashet kopi cappucino', 
                  '7 sdm gula pasir',
                  '2 sashet susu kental manis 40 gram',
                  '100 ml air panas',
                  '1400 ml air minum', 
                  'Es batu secukupnya',
                  '1 bungkus jelly cincau',
                  ' 5 sdm gula pasir',
                  ],
      instructions: [
                  'Mula mula, air, gula dan bubuk jelly campur menjadi satu dan masak hingga mendidih',
                  'kemudian tuang ke dalam cetakan. Biarkan adonan jelly cincau beku di suhu ruang',
                  'Setelah beku, serut jelly cincau menggunakan serutan untuk wortel. Boleh juga menggunakan serutan sayur',
                  'Campur jadi satu kopi cappuccino, gula pasir dan air panas, aduk rata. Kemudian tuang ke dalam wadah yg lebih besar. Tambahkan SKM, aduk rata.',
                  'Masukkan serutan jelly cincau, aduk rata.',
                  'Siapkan gelas saji, beri secukupnya es batu, kemudian tuang es cappuccino ke dalam gelas, sajikan.'
                  ],
      cookingTime: '30 menit',
      difficultyLevel: 'Mudah',
      servings: '5-6 gelas' 
    },
    { id: 5,
      name: 'Risol Mayo',
      image: require('../../Photo/RisolMayo.jpg'),
      description: 'Cemilan yang enak disantap dan bisa dijadikan frozen food juga loh!',
      ingredients: [
                  '250 gram tepung terigu (protein sedang)', 
                  '2 sdt garam', 
                  '2 sdm tepung tapioka',
                  '5 butir telur',
                  '600 ml air',
                  'Misyak Goreng secukupnya',
                  '2 sdm susu kental manis',
                  '100 gram mayo',
                  '5 batang sosis',
                  'tepung panir secukupnya (untuk membalur risol' 
                  ],
      instructions: [
                  'Masukkan tepung terigu ke dalam wadah',
                  'Masukkan Sdt garam',
                  'Masukkan 2 Sdm Tepung tapioka',
                  'Masukkan 1 Butir telur',
                  'Masukkan 600Ml Air',
                  'Masukkan 2 Sdm Minyak goreng',
                  'Aduk semuanya hingga tercampur rata lalu saring agar tidak bergerindil',
                  'Siapkan teflon beri sedikit misyak dan letakkan adonan jika sudah panas. pastikan setipis mungkin',
                  'Lakukan berulang hingga adonan habis, dna sisihkan',
                  'sekarang kita akan membuat isian risolnya, Potong kecil kecil sosis dan goreng hingga mateng',
                  'Rebus telur hingga benar-benar matang, kupas kulitnya dan belah menjadi 4 potong',
                  'Siapkan mayones lal campur dengan 2 sdm susu kental manis',
                  'setelah semua selesai, Kulit risol diberi isian dan lipat sesuai selera',
                  'Lumuri dengan telur yang sudah dikocok dan baluri ke tepung panir',
                  'Goreng hingga matang keemasan,',
                  'Lakukan berulang hingga semua bahan habis, dan risol siap di sajikan'
                  ],
      cookingTime: '30 - 60 menit',
      difficultyLevel: 'Sulit',
      servings: '20 Porsi'
    },
    {
      id: 6,
      name: 'Pempek',
      image: require('../../Photo/Pempek.jpg'),
      description: 'Makanan khas Palembang yang terbuat dari ikan dan tepung tapioka, disajikan dengan kuah cuka yang pedas.',
      ingredients: [
        '500 gram ikan tenggiri fillet',
        '250 gram tepung sagu',
        '100 ml air',
        '1 butir telur',
        '1 sdt bawang putih bubuk',
        'Garam secukupnya',
        'Minyak goreng secukupnya',
        'Kuah Cuka: 200 ml air, 100 ml cuka, 2 sdm gula merah, 1 sdt garam, 2 cabai rawit'
      ],
      instructions: [
        'Haluskan ikan tenggiri, campur dengan tepung sagu, telur, bawang putih, garam, dan air, aduk hingga rata.',
        'Bentuk adonan menjadi bulat atau lonjong, kemudian rebus dalam air mendidih hingga mengapung.',
        'Setelah matang, angkat dan tiriskan.',
        'Untuk kuah cuka, campurkan semua bahan dan didihkan hingga gula larut.',
        'Sajikan pempek dengan kuah cuka pedas.'
      ],
      cookingTime: '45 menit',
      difficultyLevel: 'Sedang',
      servings: '5 Porsi'
    },
    {
      id: 7,
      name: 'Sambal Terasi',
      image: require('../../Photo/SambalTomat.jpg'),
      description: 'Sambal pedas dengan bahan utama terasi, cocok untuk pendamping nasi atau lauk.',
      ingredients: [
        '5 buah cabai merah',
        '2 buah tomat',
        '1 sdt terasi bakar',
        '2 siung bawang merah',
        '2 siung bawang putih',
        'Garam dan gula secukupnya',
        'Minyak goreng secukupnya'
      ],
      instructions: [
        'Goreng cabai, tomat, bawang merah, bawang putih, dan terasi hingga layu.',
        'Haluskan semua bahan menggunakan cobek atau blender.',
        'Tumis sambal yang sudah dihaluskan dengan sedikit minyak goreng hingga harum.',
        'Tambahkan garam dan gula sesuai selera.',
        'Sambal terasi siap disajikan.'
      ],
      cookingTime: '15 menit',
      difficultyLevel: 'Mudah',
      servings: '4 Porsi'
    },
    {
      id: 8,
      name: 'Gulai',
      image: require('../../Photo/OporAyam.jpg'),
      description: 'Makanan berkuah kental dengan rasa rempah yang kaya, sering disajikan dengan nasi putih.',
      ingredients: [
        '500 gram daging ayam, potong-potong',
        '1 liter santan kelapa',
        '1 batang serai, memarkan',
        '2 lembar daun salam',
        '5 lembar daun jeruk',
        '1 sdt kunyit bubuk',
        '1 sdt ketumbar bubuk',
        '2 cm lengkuas, memarkan',
        'Garam dan gula secukupnya',
        'Minyak goreng secukupnya'
      ],
      instructions: [
        'Panaskan minyak, tumis bumbu halus (kunyit, ketumbar, bawang merah, bawang putih) hingga harum.',
        'Masukkan ayam dan aduk rata hingga berubah warna.',
        'Tambahkan santan kelapa, serai, daun salam, daun jeruk, lengkuas, garam, dan gula.',
        'Masak dengan api kecil hingga ayam empuk dan kuah kental.',
        'Sajikan gulai ayam dengan nasi putih.'
      ],
      cookingTime: '1 jam',
      difficultyLevel: 'Sedang',
      servings: '5 Porsi'
    },
    {
      id: 9,
      name: 'Sate Taican',
      image: require('../../Photo/Sate.jpg'),
      description: 'Sate vegan yang terbuat dari tempe, disajikan dengan bumbu kacang pedas.',
      ingredients: [
        '500 gram tempe, potong dadu',
        '2 sdm kecap manis',
        '2 sdm minyak goreng',
        '1 sdt bawang putih bubuk',
        '1 sdt ketumbar bubuk',
        '100 gram kacang tanah, goreng',
        '2 sdm gula merah, serut',
        '2 cabai merah, rebus',
        'Garam secukupnya'
      ],
      instructions: [
        'Tumis bawang putih bubuk dan ketumbar dengan sedikit minyak goreng hingga harum.',
        'Masukkan tempe ke dalam tumisan bumbu, aduk rata, dan tambahkan kecap manis.',
        'Tusukkan tempe pada tusuk sate, panggang di atas panggangan atau grill.',
        'Untuk bumbu kacang, haluskan kacang tanah, cabai, gula merah, dan garam hingga halus.',
        'Sajikan sate tempe dengan bumbu kacang pedas.'
      ],
      cookingTime: '30 menit',
      difficultyLevel: 'Mudah',
      servings: '3 Porsi'
    },
    {
      id: 10,
      name: 'Rendang',
      image: require('../../Photo/Rendang.jpg'),
      description: 'Masakan daging sapi dengan bumbu rempah yang kaya, dimasak dalam waktu lama hingga empuk dan berwarna cokelat gelap.',
      ingredients: [
        '1 kg daging sapi, potong dadu',
        '500 ml santan kelapa kental',
        '3 batang serai, memarkan',
        '5 lembar daun salam',
        '2 cm lengkuas, memarkan',
        '2 sdt kunyit bubuk',
        '1 sdt ketumbar bubuk',
        '1 sdt jintan bubuk',
        '1 sdt garam',
        '1 sdt gula merah',
        'Minyak goreng secukupnya'
      ],
      instructions: [
        'Panaskan minyak, tumis bumbu halus (bawang merah, bawang putih, cabai, kunyit, ketumbar, jintan) hingga harum.',
        'Masukkan daging sapi dan aduk rata hingga daging berubah warna.',
        'Tambahkan santan, serai, daun salam, lengkuas, garam, dan gula merah, masak dengan api kecil.',
        'Masak rendang hingga daging empuk dan kuah mengental.',
        'Sajikan rendang dengan nasi putih.'
      ],
      cookingTime: '3 jam',
      difficultyLevel: 'Sulit',
      servings: '6 Porsi'
    },
    {
      id: 11,
      name: 'Tekwan',
      image: require('../../Photo/Tekwan.jpg'),
      description: 'Sup bakso ikan dengan kuah bening, dilengkapi dengan jamur dan bengkoang.',
      ingredients: [
        '300 gram ikan tenggiri fillet',
        '200 gram tepung sagu',
        '50 gram bengkoang, serut halus',
        '100 gram jamur merang, iris tipis',
        '500 ml kaldu ayam',
        '2 batang daun bawang, iris tipis',
        'Garam dan merica secukupnya',
        'Minyak goreng secukupnya'
      ],
      instructions: [
        'Haluskan ikan tenggiri, campur dengan tepung sagu, bengkoang serut, garam, dan merica.',
        'Bentuk adonan menjadi bola-bola kecil, rebus dalam air mendidih hingga bola ikan mengapung.',
        'Untuk kuah, didihkan kaldu ayam, tambahkan jamur dan daun bawang.',
        'Masukkan bola ikan ke dalam kuah dan masak hingga matang.',
        'Sajikan tekwan dengan taburan daun bawang.'
      ],
      cookingTime: '1 jam',
      difficultyLevel: 'Sedang',
      servings: '4 Porsi'
    },
    {
      id: 12,
      name: 'Spicy Chicken Wings',
      image: require('../../Photo/Chicken.jpg'),
      description: 'Sayap ayam pedas dengan bumbu manis dan pedas, cocok sebagai camilan.',
      ingredients: [
        '10 sayap ayam',
        '2 sdm saus sambal',
        '2 sdm kecap manis',
        '1 sdt lada hitam',
        '1 sdt garam',
        'Minyak goreng secukupnya'
      ],
      instructions: [
        'Cuci bersih sayap ayam dan marinasi dengan saus sambal, kecap manis, lada, dan garam.',
        'Diamkan selama 30 menit agar bumbu meresap.',
        'Panaskan minyak dan goreng sayap ayam hingga kecokelatan.',
        'Angkat dan tiriskan.',
        'Sajikan sayap ayam pedas dengan nasi atau camilan.'
      ],
      cookingTime: '30 menit',
      difficultyLevel: 'Mudah',
      servings: '4 Porsi'
    },
    {
      id: 13,
      name: 'Takoyaki',
      image: require('../../Photo/Takoyaki.jpg'),
      description: 'Camilan khas Jepang berupa bola-bola tepung dengan isian gurita, disajikan dengan saus takoyaki khas.',
      ingredients: [
        '200 gram tepung terigu',
        '200 ml air',
        '1 butir telur',
        '100 gram gurita rebus, potong kecil',
        '2 sdm kecap asin',
        'Saus takoyaki',
        'Bonito flakes dan aonori untuk taburan'
      ],
      instructions: [
        'Campurkan tepung terigu, air, telur, dan kecap asin, aduk hingga rata.',
        'Panaskan cetakan takoyaki, tuangkan adonan hingga setengah penuh.',
        'Letakkan potongan gurita di tengah-tengah adonan dan tutup dengan adonan.',
        'Masak hingga takoyaki matang dan berwarna kecokelatan.',
        'Sajikan takoyaki dengan saus dan taburan bonito flakes serta aonori.'
      ],
      cookingTime: '45 menit',
      difficultyLevel: 'Sedang',
      servings: '4 Porsi'
    },    
    {
      id: 14,
      name: 'Cah Kangkung',
      image: require('../../Photo/CahKangkung.jpg'),
      description: 'Sayur kangkung yang dimasak dengan bumbu saus tiram dan bawang putih, memberikan rasa gurih dan sedikit pedas.',
      ingredients: [
        '200 gram kangkung',
        '2 siung bawang putih, cincang halus',
        '2 sdm saus tiram',
        '1 sdm kecap manis',
        '1 sdt minyak wijen',
        '1/2 sdt merica',
        'Minyak goreng secukupnya'
      ],
      instructions: [
        'Cuci bersih kangkung dan tiriskan.',
        'Tumis bawang putih hingga harum dengan minyak goreng.',
        'Masukkan kangkung, aduk cepat, lalu tambahkan saus tiram, kecap manis, minyak wijen, dan merica.',
        'Masak selama 2-3 menit hingga kangkung layu.',
        'Sajikan cah kangkung dengan nasi putih.'
      ],
      cookingTime: '10 menit',
      difficultyLevel: 'Mudah',
      servings: '2 Porsi'
    },
    {
      id: 15,
      name: 'Soto Koya Lamongan',
      image: require('../../Photo/Soto.jpg'),
      description: 'Soto khas Lamongan dengan kuah bening yang gurih, disajikan dengan ayam suwir, sambal, dan kerupuk.',
      ingredients: [
        '500 gram ayam, rebus dan suwir',
        '1 liter kaldu ayam',
        '2 batang serai, memarkan',
        '2 daun jeruk',
        '1 sdt kunyit bubuk',
        '1 sdt ketumbar bubuk',
        '2 siung bawang putih, cincang halus',
        '2 siung bawang merah, cincang halus',
        'Garam dan merica secukupnya',
        'Kerupuk, sambal, dan daun bawang untuk pelengkap'
      ],
      instructions: [
        'Rebus ayam dalam kaldu hingga matang, lalu suwir-suwir daging ayam.',
        'Tumis bawang merah, bawang putih, kunyit, dan ketumbar hingga harum.',
        'Masukkan tumisan bumbu ke dalam kaldu ayam, tambahkan serai, daun jeruk, garam, dan merica.',
        'Didihkan selama 15 menit dan pastikan rasa cukup.',
        'Sajikan soto dengan ayam suwir, sambal, kerupuk, dan daun bawang.'
      ],
      cookingTime: '30 menit',
      difficultyLevel: 'Sedang',
      servings: '4 Porsi'
    },
    {
      id: 16,
      name: 'Ayam Bakar',
      image: require('../../Photo/AyamBakar.jpg'),
      description: 'Ayam yang dipanggang dengan bumbu kacang dan rempah, menghasilkan rasa manis, pedas, dan gurih.',
      ingredients: [
        '1 ekor ayam, potong menjadi 4 bagian',
        '3 sdm kecap manis',
        '2 sdm minyak goreng',
        '1 sdt ketumbar bubuk',
        '1 sdt kunyit bubuk',
        '2 siung bawang putih, haluskan',
        '1 sdt garam',
        '1 sdt gula merah'
      ],
      instructions: [
        'Campurkan kecap manis, minyak goreng, ketumbar, kunyit, bawang putih, garam, dan gula merah untuk bumbu marinasi.',
        'Lumuri ayam dengan bumbu marinasi, diamkan selama 30 menit.',
        'Panggang ayam di atas bara api atau grill pan hingga matang dan kecokelatan.',
        'Sajikan ayam bakar dengan nasi dan sambal.'
      ],
      cookingTime: '45 menit',
      difficultyLevel: 'Mudah',
      servings: '4 Porsi'
    },
    {
      id: 17,
      name: 'Gado Gado',
      image: require('../../Photo/GadoGado.jpg'),
      description: 'Salad sayuran segar dengan bumbu kacang yang kaya rasa, cocok sebagai makanan sehat dan menyegarkan.',
      ingredients: [
        '100 gram kacang panjang, rebus',
        '100 gram tauge, rebus',
        '1 buah mentimun, iris tipis',
        '1 buah tomat, iris',
        '2 butir telur rebus, potong',
        '50 gram tahu, goreng',
        '50 gram tempe, goreng',
        '2 sdm bumbu kacang',
        'Kerupuk untuk pelengkap'
      ],
      instructions: [
        'Rebus kacang panjang dan tauge hingga empuk.',
        'Siapkan sayuran segar lainnya seperti mentimun, tomat, dan telur rebus.',
        'Potong tahu dan tempe, kemudian goreng hingga kecokelatan.',
        'Susun sayuran, tahu, tempe, dan telur di atas piring.',
        'Sirami dengan bumbu kacang, tambahkan kerupuk untuk pelengkap.'
      ],
      cookingTime: '15 menit',
      difficultyLevel: 'Mudah',
      servings: '3 Porsi'
    },
    {
      id: 18,
      name: 'Baso',
      image: require('../../Photo/Baso.jpg'),
      description: 'Bola daging sapi yang kenyal dan gurih, disajikan dengan kuah kaldu dan mie atau nasi.',
      ingredients: [
        '500 gram daging sapi, giling halus',
        '1 butir telur',
        '100 gram tepung sagu',
        '2 siung bawang putih, cincang halus',
        '1 sdt lada putih',
        '1 sdt garam',
        '1 liter kaldu sapi',
        'Mie atau nasi untuk pelengkap'
      ],
      instructions: [
        'Campurkan daging sapi, telur, tepung sagu, bawang putih, lada, dan garam, aduk hingga rata.',
        'Bentuk adonan menjadi bola-bola kecil, rebus dalam air mendidih hingga bola baso mengapung.',
        'Saring bola baso dan masukkan ke dalam kaldu sapi yang sudah didihkan.',
        'Sajikan baso dengan mie atau nasi dan kuah kaldu.'
      ],
      cookingTime: '45 menit',
      difficultyLevel: 'Sedang',
      servings: '5 Porsi'
    },
  ];


  type RootStackParamList = {
    Home: undefined;
    DetailRecipes: {
      message: string;
      name: string;
      description: string;
      image: any;
      ingredients: string[];
      instructions: string[];
      cookingTime: string;
      difficultyLevel: string;
      servings: string;
    };
    Profile: undefined;
    News: undefined;
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleProductPress = (product: any) => {
    navigation.navigate('DetailRecipes', {
      message: 'Product Details',
      name: product.name,
      description: product.description,
      image: product.image,
      ingredients: product.ingredients,
      instructions: product.instructions,
      cookingTime: product.cookingTime,
      difficultyLevel: product.difficultyLevel,
      servings: product.servings,
    });
  };

  return (
    <View style={styles.container}>
      {/* Bagian Promo */}
      <View style={styles.bottomImageContainer}>
        <Image source={require('../../Photo/home.png')} style={styles.bottomImage} />
      </View>

      {/* Kartu Produk */}
      <ScrollView style={styles.cardsScrollView}>
        <View style={styles.cardsContainer}>
          {products.map((product) => (
            <TouchableOpacity key={product.id} style={styles.verticalCard} onPress={() => handleProductPress(product)}>
              <ImageBackground source={product.image} style={styles.imageBackground} imageStyle={{ borderRadius: 20 }}>
                <View style={styles.overlay}>
                  <Text style={styles.verticalCardTitle}>{product.name}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Navigasi Bawah */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#689F38" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Icon name="plus" size={24} color="#689F38" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('News')}>
          <Icon name="newspaper-o" size={24} color="#689F38" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={24} color="#689F38" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles di bawah tidak berubah
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  bottomImageContainer: {
    position: 'static',
    marginBottom: 5,
  },
  bottomImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  cardsScrollView: {
    marginTop: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  verticalCard: {
    width: '46%',
    height: 330,
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 25,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  verticalCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#EEE',
    backgroundColor: '#FFF',
  },
});
