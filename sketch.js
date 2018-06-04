var d_1_1, d_1_2, d_1_3, d_1_4, d_1_5, d_1_6, d_1_7, d_1_8, d_1_9, d_1_10,
	d_2_1, d_2_2, d_2_3, d_2_4, d_2_5, d_2_6, d_2_7, d_2_8, d_2_9, d_2_10,
	d_3_1, d_3_2, d_3_3, d_3_4, d_3_5, d_3_6, d_3_7, d_3_8, d_3_9, d_3_10,
	d_4_1, d_4_2, d_4_3, d_4_4, d_4_5, d_4_6, d_4_7, d_4_8, d_4_9, d_4_10,
	d_5_1, d_5_2, d_5_3, d_5_4, d_5_5, d_5_6, d_5_7, d_5_8, d_5_9, d_5_10,
	d_6_1, d_6_2, d_6_3, d_6_4, d_6_5, d_6_6, d_6_7, d_6_8, d_6_9, d_6_10,
	d_7_1, d_7_2, d_7_3, d_7_4, d_7_5, d_7_6, d_7_7, d_7_8, d_7_9, d_7_10,
	d_8_1, d_8_2, d_8_3, d_8_4, d_8_5, d_8_6, d_8_7, d_8_8, d_8_9, d_8_10,
	d_9_1, d_9_2, d_9_3, d_9_4, d_9_5, d_9_6, d_9_7, d_9_8, d_9_9, d_9_10,
	d_10_1, d_10_2, d_10_3, d_10_4, d_10_5, d_10_6, d_10_7, d_10_8, d_10_9, d_10_10,
	d_11_1, d_11_2, d_11_3, d_11_4, d_11_5, d_11_6, d_11_7, d_11_8, d_11_9, d_11_10,
	d_12_1, d_12_2, d_12_3, d_12_4, d_12_5, d_12_6, d_12_7, d_12_8, d_12_9, d_12_10,
	d_13_1, d_13_2, d_13_3, d_13_4, d_13_5, d_13_6, d_13_7, d_13_8, d_13_9, d_13_10,
	d_14_1, d_14_2, d_14_3, d_14_4, d_14_5, d_14_6, d_14_7, d_14_8, d_14_9, d_14_10,
	d_15_1, d_16_2, d_16_3, d_16_4, d_16_5, d_16_6, d_16_7, d_16_8, d_16_9, d_16_10,
	d_16_1, d_16_2, d_16_3, d_16_4, d_16_5, d_16_6, d_16_7, d_16_8, d_16_9, d_16_10,
	d_17_1, d_17_2, d_17_3, d_17_4, d_17_5, d_17_6, d_17_7, d_17_8, d_17_9, d_17_10,
	d_18_1, d_18_2, d_18_3, d_18_4, d_18_5, d_18_6, d_18_7, d_18_8, d_18_9, d_18_10,
	d_19_1, d_19_2, d_19_3, d_19_4, d_19_5, d_19_6, d_19_7, d_19_8, d_19_9, d_19_10,
	d_20_1, d_20_2, d_20_3, d_20_4, d_20_5, d_20_6, d_20_7, d_20_8, d_20_9, d_20_10;

var myImageList;
var index = 0;

var myDesertList = ["Antarctic", "Arctic", "Sahara", "Rub' al-Khali", "Gobi", "Kalahari", "Patagonian", "Syrian", "Chihuahua", "Great Basin", "Great Victoria", "Great Sandy", "Kara-kum", "Colorado Plateau", "Sonoran", "Kizilkum", "Taklamakan", "Thar", "Gibson", "Simpson"];

var cover;

var myData;
var indexName = 0;
var indexKind = 0;
var indexRange = 0;
var indexCountry = 0;
var indexArea = 0;

var colorLabel = ['#c1f4f3', '#f6c3cb'];
var indexColorLabel = 0;
var tenColorLabel = 0;

var myFontArial, myFontKarlaBold, myFontKarlaRegular;

var mySquareList = [1, 5, 20, 100, 300, 500, 900, 0, 0, 0];
var indexSquare = 0;

var side = 0;

var myCounterList = ["100 m", "500 m", "2 km", "10 km", "30 km", "50 km", "100 km", "300 km", "500 km", "1000 km"];
var indexCounter = 0;

var tenImage = 0;
var tenKind = 0;
var tenRange = 0;
var tenCountry = 0;
var tenArea = 0;

var tenDot = 0;
var dot = 0;

function preload() {

	myFontArial = loadFont('assets/Font/ArialRoundedBold.ttf');

	cover = loadImage("./assets/cover.jpg");

	myData = loadJSON('./assets/deserts.json');

	//Desert 1: Antarctic
	d_1_1 = loadImage("./assets/1-Antarctic/1-Antarctic-1.jpg");
	d_1_2 = loadImage("./assets/1-Antarctic/1-Antarctic-2.jpg");
	d_1_3 = loadImage("./assets/1-Antarctic/1-Antarctic-3.jpg");
	d_1_4 = loadImage("./assets/1-Antarctic/1-Antarctic-4.jpg");
	d_1_5 = loadImage("./assets/1-Antarctic/1-Antarctic-5.jpg");
	d_1_6 = loadImage("./assets/1-Antarctic/1-Antarctic-6.jpg");
	d_1_7 = loadImage("./assets/1-Antarctic/1-Antarctic-7.jpg");
	d_1_8 = loadImage("./assets/1-Antarctic/1-Antarctic-8.jpg");
	d_1_9 = loadImage("./assets/1-Antarctic/1-Antarctic-9.jpg");
	d_1_10 = loadImage("./assets/1-Antarctic/1-Antarctic-10.jpg");

	//Desert 2: Arctic
	d_2_1 = loadImage("./assets/2-Arctic/2-Arctic-1.jpg");
	d_2_2 = loadImage("./assets/2-Arctic/2-Arctic-2.jpg");
	d_2_3 = loadImage("./assets/2-Arctic/2-Arctic-3.jpg");
	d_2_4 = loadImage("./assets/2-Arctic/2-Arctic-4.jpg");
	d_2_5 = loadImage("./assets/2-Arctic/2-Arctic-5.jpg");
	d_2_6 = loadImage("./assets/2-Arctic/2-Arctic-6.jpg");
	d_2_7 = loadImage("./assets/2-Arctic/2-Arctic-7.jpg");
	d_2_8 = loadImage("./assets/2-Arctic/2-Arctic-8.jpg");
	d_2_9 = loadImage("./assets/2-Arctic/2-Arctic-9.jpg");
	d_2_10 = loadImage("./assets/2-Arctic/2-Arctic-10.jpg");

	//Desert 3: Sahara
	d_3_1 = loadImage("./assets/3-Sahara/3-Sahara-1.jpg");
	d_3_2 = loadImage("./assets/3-Sahara/3-Sahara-2.jpg");
	d_3_3 = loadImage("./assets/3-Sahara/3-Sahara-3.jpg");
	d_3_4 = loadImage("./assets/3-Sahara/3-Sahara-4.jpg");
	d_3_5 = loadImage("./assets/3-Sahara/3-Sahara-5.jpg");
	d_3_6 = loadImage("./assets/3-Sahara/3-Sahara-6.jpg");
	d_3_7 = loadImage("./assets/3-Sahara/3-Sahara-7.jpg");
	d_3_8 = loadImage("./assets/3-Sahara/3-Sahara-8.jpg");
	d_3_9 = loadImage("./assets/3-Sahara/3-Sahara-9.jpg");
	d_3_10 = loadImage("./assets/3-Sahara/3-Sahara-10.jpg");

	//Desert 4: Rubkali
	d_4_1 = loadImage("./assets/4-Rk/4-Rk-1.jpg");
	d_4_2 = loadImage("./assets/4-Rk/4-Rk-2.jpg");
	d_4_3 = loadImage("./assets/4-Rk/4-Rk-3.jpg");
	d_4_4 = loadImage("./assets/4-Rk/4-Rk-4.jpg");
	d_4_5 = loadImage("./assets/4-Rk/4-Rk-5.jpg");
	d_4_6 = loadImage("./assets/4-Rk/4-Rk-6.jpg");
	d_4_7 = loadImage("./assets/4-Rk/4-Rk-7.jpg");
	d_4_8 = loadImage("./assets/4-Rk/4-Rk-8.jpg");
	d_4_9 = loadImage("./assets/4-Rk/4-Rk-9.jpg");
	d_4_10 = loadImage("./assets/4-Rk/4-Rk-10.jpg");

	//desert 5: Gobi
	d_5_1 = loadImage("./assets/5-Gobi/5-Gobi-1.jpg");
	d_5_2 = loadImage("./assets/5-Gobi/5-Gobi-2.jpg");
	d_5_3 = loadImage("./assets/5-Gobi/5-Gobi-3.jpg");
	d_5_4 = loadImage("./assets/5-Gobi/5-Gobi-4.jpg");
	d_5_5 = loadImage("./assets/5-Gobi/5-Gobi-5.jpg");
	d_5_6 = loadImage("./assets/5-Gobi/5-Gobi-6.jpg");
	d_5_7 = loadImage("./assets/5-Gobi/5-Gobi-7.jpg");
	d_5_8 = loadImage("./assets/5-Gobi/5-Gobi-8.jpg");
	d_5_9 = loadImage("./assets/5-Gobi/5-Gobi-9.jpg");
	d_5_10 = loadImage("./assets/5-Gobi/5-Gobi-10.jpg");

	//Desert 6: Sahara
	d_6_1 = loadImage("./assets/6-Kalahari/6-Kalahari-1.jpg");
	d_6_2 = loadImage("./assets/6-Kalahari/6-Kalahari-2.jpg");
	d_6_3 = loadImage("./assets/6-Kalahari/6-Kalahari-3.jpg");
	d_6_4 = loadImage("./assets/6-Kalahari/6-Kalahari-4.jpg");
	d_6_5 = loadImage("./assets/6-Kalahari/6-Kalahari-5.jpg");
	d_6_6 = loadImage("./assets/6-Kalahari/6-Kalahari-6.jpg");
	d_6_7 = loadImage("./assets/6-Kalahari/6-Kalahari-7.jpg");
	d_6_8 = loadImage("./assets/6-Kalahari/6-Kalahari-8.jpg");
	d_6_9 = loadImage("./assets/6-Kalahari/6-Kalahari-9.jpg");
	d_6_10 = loadImage("./assets/6-Kalahari/6-Kalahari-10.jpg");

	//Desert 7: Patagonian
	d_7_1 = loadImage("./assets/7-Patagonian/7-Patagonian-1.jpg");
	d_7_2 = loadImage("./assets/7-Patagonian/7-Patagonian-2.jpg");
	d_7_3 = loadImage("./assets/7-Patagonian/7-Patagonian-3.jpg");
	d_7_4 = loadImage("./assets/7-Patagonian/7-Patagonian-4.jpg");
	d_7_5 = loadImage("./assets/7-Patagonian/7-Patagonian-5.jpg");
	d_7_6 = loadImage("./assets/7-Patagonian/7-Patagonian-6.jpg");
	d_7_7 = loadImage("./assets/7-Patagonian/7-Patagonian-7.jpg");
	d_7_8 = loadImage("./assets/7-Patagonian/7-Patagonian-8.jpg");
	d_7_9 = loadImage("./assets/7-Patagonian/7-Patagonian-9.jpg");
	d_7_10 = loadImage("./assets/7-Patagonian/7-Patagonian-10.jpg");

	//Desert 8: Syrian
	d_8_1 = loadImage("./assets/8-Syrian/8-Syrian-1.jpg");
	d_8_2 = loadImage("./assets/8-Syrian/8-Syrian-2.jpg");
	d_8_3 = loadImage("./assets/8-Syrian/8-Syrian-3.jpg");
	d_8_4 = loadImage("./assets/8-Syrian/8-Syrian-4.jpg");
	d_8_5 = loadImage("./assets/8-Syrian/8-Syrian-5.jpg");
	d_8_6 = loadImage("./assets/8-Syrian/8-Syrian-6.jpg");
	d_8_7 = loadImage("./assets/8-Syrian/8-Syrian-7.jpg");
	d_8_8 = loadImage("./assets/8-Syrian/8-Syrian-8.jpg");
	d_8_9 = loadImage("./assets/8-Syrian/8-Syrian-9.jpg");
	d_8_10 = loadImage("./assets/8-Syrian/8-Syrian-10.jpg");

	//Desert 9: Chihuahuan
	d_9_1 = loadImage("./assets/9-Ch/9-Ch-1.jpg");
	d_9_2 = loadImage("./assets/9-Ch/9-Ch-2.jpg");
	d_9_3 = loadImage("./assets/9-Ch/9-Ch-3.jpg");
	d_9_4 = loadImage("./assets/9-Ch/9-Ch-4.jpg");
	d_9_5 = loadImage("./assets/9-Ch/9-Ch-5.jpg");
	d_9_6 = loadImage("./assets/9-Ch/9-Ch-6.jpg");
	d_9_7 = loadImage("./assets/9-Ch/9-Ch-7.jpg");
	d_9_8 = loadImage("./assets/9-Ch/9-Ch-8.jpg");
	d_9_9 = loadImage("./assets/9-Ch/9-Ch-9.jpg");
	d_9_10 = loadImage("./assets/9-Ch/9-Ch-10.jpg");

	//Desert 10: Great Basin
	d_10_1 = loadImage("./assets/10-Basin/10-Basin-1.jpg");
	d_10_2 = loadImage("./assets/10-Basin/10-Basin-2.jpg");
	d_10_3 = loadImage("./assets/10-Basin/10-Basin-3.jpg");
	d_10_4 = loadImage("./assets/10-Basin/10-Basin-4.jpg");
	d_10_5 = loadImage("./assets/10-Basin/10-Basin-5.jpg");
	d_10_6 = loadImage("./assets/10-Basin/10-Basin-6.jpg");
	d_10_7 = loadImage("./assets/10-Basin/10-Basin-7.jpg");
	d_10_8 = loadImage("./assets/10-Basin/10-Basin-8.jpg");
	d_10_9 = loadImage("./assets/10-Basin/10-Basin-9.jpg");
	d_10_10 = loadImage("./assets/10-Basin/10-Basin-10.jpg");

	//Desert 11: Karakum
	d_11_1 = loadImage("./assets/11-Victoria/11-Victoria-1.jpg");
	d_11_2 = loadImage("./assets/11-Victoria/11-Victoria-2.jpg");
	d_11_3 = loadImage("./assets/11-Victoria/11-Victoria-3.jpg");
	d_11_4 = loadImage("./assets/11-Victoria/11-Victoria-4.jpg");
	d_11_5 = loadImage("./assets/11-Victoria/11-Victoria-5.jpg");
	d_11_6 = loadImage("./assets/11-Victoria/11-Victoria-6.jpg");
	d_11_7 = loadImage("./assets/11-Victoria/11-Victoria-7.jpg");
	d_11_8 = loadImage("./assets/11-Victoria/11-Victoria-8.jpg");
	d_11_9 = loadImage("./assets/11-Victoria/11-Victoria-9.jpg");
	d_11_10 = loadImage("./assets/11-Victoria/11-Victoria-10.jpg");

	//Desert 12: Great Sandy
	d_12_1 = loadImage("./assets/12-Sandy/12-Sandy-1.jpg");
	d_12_2 = loadImage("./assets/12-Sandy/12-Sandy-2.jpg");
	d_12_3 = loadImage("./assets/12-Sandy/12-Sandy-3.jpg");
	d_12_4 = loadImage("./assets/12-Sandy/12-Sandy-4.jpg");
	d_12_5 = loadImage("./assets/12-Sandy/12-Sandy-5.jpg");
	d_12_6 = loadImage("./assets/12-Sandy/12-Sandy-6.jpg");
	d_12_7 = loadImage("./assets/12-Sandy/12-Sandy-7.jpg");
	d_12_8 = loadImage("./assets/12-Sandy/12-Sandy-8.jpg");
	d_12_9 = loadImage("./assets/12-Sandy/12-Sandy-9.jpg");
	d_12_10 = loadImage("./assets/12-Sandy/12-Sandy-10.jpg");

	//Desert 13: Karakum
	d_13_1 = loadImage("./assets/13-Karakum/13-Karakum-1.jpg");
	d_13_2 = loadImage("./assets/13-Karakum/13-Karakum-2.jpg");
	d_13_3 = loadImage("./assets/13-Karakum/13-Karakum-3.jpg");
	d_13_4 = loadImage("./assets/13-Karakum/13-Karakum-4.jpg");
	d_13_5 = loadImage("./assets/13-Karakum/13-Karakum-5.jpg");
	d_13_6 = loadImage("./assets/13-Karakum/13-Karakum-6.jpg");
	d_13_7 = loadImage("./assets/13-Karakum/13-Karakum-7.jpg");
	d_13_8 = loadImage("./assets/13-Karakum/13-Karakum-8.jpg");
	d_13_9 = loadImage("./assets/13-Karakum/13-Karakum-9.jpg");
	d_13_10 = loadImage("./assets/13-Karakum/13-Karakum-10.jpg");

	//Desert 14: Colorado
	d_14_1 = loadImage("./assets/14-Colorado/14-Colorado-1.jpg");
	d_14_2 = loadImage("./assets/14-Colorado/14-Colorado-2.jpg");
	d_14_3 = loadImage("./assets/14-Colorado/14-Colorado-3.jpg");
	d_14_4 = loadImage("./assets/14-Colorado/14-Colorado-4.jpg");
	d_14_5 = loadImage("./assets/14-Colorado/14-Colorado-5.jpg");
	d_14_6 = loadImage("./assets/14-Colorado/14-Colorado-6.jpg");
	d_14_7 = loadImage("./assets/14-Colorado/14-Colorado-7.jpg");
	d_14_8 = loadImage("./assets/14-Colorado/14-Colorado-8.jpg");
	d_14_9 = loadImage("./assets/14-Colorado/14-Colorado-9.jpg");
	d_14_10 = loadImage("./assets/14-Colorado/14-Colorado-10.jpg");

	//Desert 15: Sonoran
	d_15_1 = loadImage("./assets/15-Sonoran/15-Sonoran-1.jpg");
	d_15_2 = loadImage("./assets/15-Sonoran/15-Sonoran-2.jpg");
	d_15_3 = loadImage("./assets/15-Sonoran/15-Sonoran-3.jpg");
	d_15_4 = loadImage("./assets/15-Sonoran/15-Sonoran-4.jpg");
	d_15_5 = loadImage("./assets/15-Sonoran/15-Sonoran-5.jpg");
	d_15_6 = loadImage("./assets/15-Sonoran/15-Sonoran-6.jpg");
	d_15_7 = loadImage("./assets/15-Sonoran/15-Sonoran-7.jpg");
	d_15_8 = loadImage("./assets/15-Sonoran/15-Sonoran-8.jpg");
	d_15_9 = loadImage("./assets/15-Sonoran/15-Sonoran-9.jpg");
	d_15_10 = loadImage("./assets/15-Sonoran/15-Sonoran-10.jpg");

	//Desert 16: Ky
	d_16_1 = loadImage("./assets/16-Ky/16-Ky-1.jpg");
	d_16_2 = loadImage("./assets/16-Ky/16-Ky-2.jpg");
	d_16_3 = loadImage("./assets/16-Ky/16-Ky-3.jpg");
	d_16_4 = loadImage("./assets/16-Ky/16-Ky-4.jpg");
	d_16_5 = loadImage("./assets/16-Ky/16-Ky-5.jpg");
	d_16_6 = loadImage("./assets/16-Ky/16-Ky-6.jpg");
	d_16_7 = loadImage("./assets/16-Ky/16-Ky-7.jpg");
	d_16_8 = loadImage("./assets/16-Ky/16-Ky-8.jpg");
	d_16_9 = loadImage("./assets/16-Ky/16-Ky-9.jpg");
	d_16_10 = loadImage("./assets/16-Ky/16-Ky-10.jpg");

	//Desert 17: Tak
	d_17_1 = loadImage("./assets/17-Tak/17-Tak-1.jpg");
	d_17_2 = loadImage("./assets/17-Tak/17-Tak-2.jpg");
	d_17_3 = loadImage("./assets/17-Tak/17-Tak-3.jpg");
	d_17_4 = loadImage("./assets/17-Tak/17-Tak-4.jpg");
	d_17_5 = loadImage("./assets/17-Tak/17-Tak-5.jpg");
	d_17_6 = loadImage("./assets/17-Tak/17-Tak-6.jpg");
	d_17_7 = loadImage("./assets/17-Tak/17-Tak-7.jpg");
	d_17_8 = loadImage("./assets/17-Tak/17-Tak-8.jpg");
	d_17_9 = loadImage("./assets/17-Tak/17-Tak-9.jpg");
	d_17_10 = loadImage("./assets/17-Tak/17-Tak-10.jpg");

	//Desert 18: Thar
	d_18_1 = loadImage("./assets/18-Thar/18-Thar-1.jpg");
	d_18_2 = loadImage("./assets/18-Thar/18-Thar-2.jpg");
	d_18_3 = loadImage("./assets/18-Thar/18-Thar-3.jpg");
	d_18_4 = loadImage("./assets/18-Thar/18-Thar-4.jpg");
	d_18_5 = loadImage("./assets/18-Thar/18-Thar-5.jpg");
	d_18_6 = loadImage("./assets/18-Thar/18-Thar-6.jpg");
	d_18_7 = loadImage("./assets/18-Thar/18-Thar-7.jpg");
	d_18_8 = loadImage("./assets/18-Thar/18-Thar-8.jpg");
	d_18_9 = loadImage("./assets/18-Thar/18-Thar-9.jpg");
	d_18_10 = loadImage("./assets/18-Thar/18-Thar-10.jpg");

	//Desert 19: Gibson
	d_19_1 = loadImage("./assets/19-Gibson/19-Gibson-1.jpg");
	d_19_2 = loadImage("./assets/19-Gibson/19-Gibson-2.jpg");
	d_19_3 = loadImage("./assets/19-Gibson/19-Gibson-3.jpg");
	d_19_4 = loadImage("./assets/19-Gibson/19-Gibson-4.jpg");
	d_19_5 = loadImage("./assets/19-Gibson/19-Gibson-5.jpg");
	d_19_6 = loadImage("./assets/19-Gibson/19-Gibson-6.jpg");
	d_19_7 = loadImage("./assets/19-Gibson/19-Gibson-7.jpg");
	d_19_8 = loadImage("./assets/19-Gibson/19-Gibson-8.jpg");
	d_19_9 = loadImage("./assets/19-Gibson/19-Gibson-9.jpg");
	d_19_10 = loadImage("./assets/19-Gibson/19-Gibson-10.jpg");

	//Desert 20: Simpson
	d_20_1 = loadImage("./assets/20-Simpson/20-Simpson-1.jpg");
	d_20_2 = loadImage("./assets/20-Simpson/20-Simpson-2.jpg");
	d_20_3 = loadImage("./assets/20-Simpson/20-Simpson-3.jpg");
	d_20_4 = loadImage("./assets/20-Simpson/20-Simpson-4.jpg");
	d_20_5 = loadImage("./assets/20-Simpson/20-Simpson-5.jpg");
	d_20_6 = loadImage("./assets/20-Simpson/20-Simpson-6.jpg");
	d_20_7 = loadImage("./assets/20-Simpson/20-Simpson-7.jpg");
	d_20_8 = loadImage("./assets/20-Simpson/20-Simpson-8.jpg");
	d_20_9 = loadImage("./assets/20-Simpson/20-Simpson-9.jpg");
	d_20_10 = loadImage("./assets/20-Simpson/20-Simpson-10.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(67, 71, 156);

	//DESERT IMAGES
	myImageList = [d_1_1, d_1_2, d_1_3, d_1_4, d_1_5, d_1_6, d_1_7, d_1_8, d_1_9, d_1_10,
				   d_2_1, d_2_2, d_2_3, d_2_4, d_2_5, d_2_6, d_2_7, d_2_8, d_2_9, d_2_10,
                   d_3_1, d_3_2, d_3_3, d_3_4, d_3_5, d_3_6, d_3_7, d_3_8, d_3_9, d_3_10,
                   d_4_1, d_4_2, d_4_3, d_4_4, d_4_5, d_4_6, d_4_7, d_4_8, d_4_9, d_4_10,
                   d_5_1, d_5_2, d_5_3, d_5_4, d_5_5, d_5_6, d_5_7, d_5_8, d_5_9, d_5_10,
                   d_6_1, d_6_2, d_6_3, d_6_4, d_6_5, d_6_6, d_6_7, d_6_8, d_6_9, d_6_10,
				   d_7_1, d_7_2, d_7_3, d_7_4, d_7_5, d_7_6, d_7_7, d_7_8, d_7_9, d_7_10,
				   d_8_1, d_8_2, d_8_3, d_8_4, d_8_5, d_8_6, d_8_7, d_8_8, d_8_9, d_8_10,
				   d_9_1, d_9_2, d_9_3, d_9_4, d_9_5, d_9_6, d_9_7, d_9_8, d_9_9, d_9_10,
	               d_10_1, d_10_2, d_10_3, d_10_4, d_10_5, d_10_6, d_10_7, d_10_8, d_10_9, d_10_10,
	               d_11_1, d_11_2, d_11_3, d_11_4, d_11_5, d_11_6, d_11_7, d_11_8, d_11_9, d_11_10,
	               d_12_1, d_12_2, d_12_3, d_12_4, d_12_5, d_12_6, d_12_7, d_12_8, d_12_9, d_12_10,
	               d_13_1, d_13_2, d_13_3, d_13_4, d_13_5, d_13_6, d_13_7, d_13_8, d_13_9, d_13_10,
	               d_14_1, d_14_2, d_14_3, d_14_4, d_14_5, d_14_6, d_14_7, d_14_8, d_14_9, d_14_10,
	               d_15_1, d_16_2, d_16_3, d_16_4, d_16_5, d_16_6, d_16_7, d_16_8, d_16_9, d_16_10,
	               d_16_1, d_16_2, d_16_3, d_16_4, d_16_5, d_16_6, d_16_7, d_16_8, d_16_9, d_16_10,
	               d_17_1, d_17_2, d_17_3, d_17_4, d_17_5, d_17_6, d_17_7, d_17_8, d_17_9, d_17_10,
				   d_18_1, d_18_2, d_18_3, d_18_4, d_18_5, d_18_6, d_18_7, d_18_8, d_18_9, d_18_10,
				   d_19_1, d_19_2, d_19_3, d_19_4, d_19_5, d_19_6, d_19_7, d_19_8, d_19_9, d_19_10,
				   d_20_1, d_20_2, d_20_3, d_20_4, d_20_5, d_20_6, d_20_7, d_20_8, d_20_9, d_20_10
				 ];

	image(myImageList[index], windowWidth / 2, windowHeight / 2, side, side);

	if (width > height) {
		side = height / 1.4;
	} else {
		side = width / 1.4;
	}

	//console.log(myImageList);


	//TITLE
	textSize(windowWidth / 50);
	text("Desert constellations", windowWidth / 14.6, windowHeight / 5.9);


	//OUT-SQUARE
	imageMode(CENTER);
	noFill();
	strokeWeight(windowWidth / 200);
	stroke(181, 247, 244);
	rect(windowWidth / 2, windowHeight / 2, side, side, 10);

	//MOBILE-SQUARE
	stroke(233, 70, 70);
	rect(width / 2, height / 2, side / mySquareList[indexSquare], side / mySquareList[indexSquare], 10);


	//MENU
	//triangle
	stroke(181, 247, 244);
	strokeWeight(windowWidth / 1000);
	beginShape();
	vertex(windowWidth / 1.305, windowHeight / 6.8);
	vertex(windowWidth / 1.33, windowHeight / 6.8);
	vertex(windowWidth / 1.317, windowHeight / 5.9);
	endShape(CLOSE);

	textFont(myFontArial);
	noStroke();
	fill(181, 247, 244);
	textSize(windowWidth / 80);
	text("Scroll to explore", windowWidth / 1.29, windowHeight / 5.9);

	//+
	
	stroke(181, 247, 244);
	strokeWeight(windowWidth / 1000);
	textSize(windowWidth / 50);
	text("+", windowWidth / 1.327, windowHeight / 4.6);

	noStroke();
	textSize(windowWidth / 80);
	text("Press for Info", windowWidth / 1.29, windowHeight / 4.7);


	//DESERT NAME
	rectMode(CENTER);
	fill(colorLabel[indexColorLabel]);
	rect(windowWidth / 4.61, windowHeight / 2.5, width / 3.46, height / 8, 10);

	textAlign(CENTER);
	fill(233, 70, 70);
	textSize(windowWidth / 30);
	text(myData.deserts[indexName].name, windowWidth / 4.6, windowHeight / 2.4);

	//DISTANCE
	strokeWeight(windowWidth / 700);
	stroke('pink');
	noFill();
	textSize(windowWidth / 30);
	text(myCounterList[indexCounter], windowWidth / 1.25, windowHeight / 1.7);

	//KIND
	textAlign(LEFT);
	strokeWeight(windowWidth / 2100);
	stroke("pink");
	textSize(windowWidth / 50);
	text(myData.deserts[indexKind].kind, windowWidth / 14.6, windowHeight / 1.9);

	//RANGE
	noStroke();
	fill(181, 247, 244);
	textSize(windowWidth / 40);
	text(myData.deserts[indexRange].range, windowWidth / 30, windowHeight / 2.4);

	//PRE-AREA
	fill('pink');
	textSize(windowWidth / 100);
	text("Area (km2)", windowWidth / 14.6, windowHeight / 1.7);

	//AREA
	strokeWeight(windowWidth / 2100);
	stroke("pink");
	noFill();
	textSize(windowWidth / 50);
	text(myData.deserts[indexArea].area, windowWidth / 14.6, windowHeight / 1.6);

	//PRE-COUNTRY
	noStroke();
	fill('pink');
	textSize(windowWidth / 100);
	text("Location", windowWidth / 14.6, windowHeight / 1.45);

	//COUNTRY
	strokeWeight(windowWidth / 2100);
	stroke("pink");
	noFill();
	textSize(windowWidth / 50);
	text(myData.deserts[indexCountry].country, windowWidth / 14.6, windowHeight / 1.38);


	//DOT BAR
	//line
	strokeWeight(windowWidth / 1500);
	line(windowWidth / 7, windowHeight / 1.09, windowWidth / 1.18, windowHeight / 1.09, )

	//back-fixed-dot
	for (var x1 = windowWidth / 7; x1 < windowWidth / 1.14; x1 = x1 + windowWidth / 27) {
		fill(67, 71, 156);
		strokeWeight(windowWidth / 2100);
		noStroke();
		ellipse(x1, windowHeight / 1.09, windowWidth / 100);
	}

	//up-fix-dot
	for (var x1 = windowWidth / 7; x1 < windowWidth / 1.14; x1 = x1 + windowWidth / 27) {
		fill(181, 247, 244, 30);
		ellipse(x1, windowHeight / 1.09, windowWidth / 100);
	}

	//mobile-dot
	fill(181, 247, 244);
	ellipse(dot + (windowWidth / 7), windowHeight / 1.09, windowWidth / 100);

	//final-rect
	push();
	rectMode(CORNER);
	fill(67, 71, 156);
	rect((windowWidth / 1.16), windowHeight / 1.12, windowWidth / 7, windowHeight / 20);
	pop();


	// COVER
	if (mouseIsPressed) {
		fill('#c1f4f3');
		rect(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
		noStroke();
		image(cover, windowWidth / 2, windowHeight / 2, windowWidth, windowWidth / 1.7);
	} else {
		print(mouseIsPressed);
	}

}

function mouseWheel(event) {

	//DESERT IMAGES
	//List
	if (event.delta > 0) {
		index = index + 1;
	}
    //Loop
	if (index < 0) {
		index = myImageList.length - 1;
	}
	if (index > myImageList.length - 1) {
		index = 0;
	}

    //COUNTER
	//List
    if (event.delta > 0) {
		indexCounter = indexCounter + 1;
	}
    //Loop
    if (indexCounter < 0) {
		indexCounter = myCounterList.length - 1;
	}
	if (indexCounter > myCounterList.length - 1) {
		indexCounter = 0;
	}

	//DESERT NAMES
	//List
    if (event.delta > 0) {
		tenImage = tenImage + 1;
	}
    //x10
	if (tenImage == 10) {
		tenImage = 0;
		indexName = indexName + 1;
	}
    //Loop
	if (indexName < 0) {
		indexName = myData.deserts.length - 1;
	}
	if (indexName > myData.deserts.length - 1) {
		indexName = 0;
	}

    //KIND
	//List
	if (event.delta > 0) {
		tenKind = tenKind + 1;
	}
    //x10
	if (tenKind == 10) {
		tenKind = 0;
		indexKind = indexKind + 1;
	}
    //Loop
	if (indexKind < 0) {
		indexKind = myData.deserts.length - 1;
	}
	if (indexKind > myData.deserts.length - 1) {
		indexKind = 0;
	}

	//RANGE
	//List
	if (event.delta > 0) {
		tenRange = tenRange + 1;
	}
    //x10
	if (tenRange == 10) {
		tenRange = 0;
		indexRange = indexRange + 1;
	}
    //Loop
	if (indexRange < 0) {
		indexRange = myData.deserts.length - 1;
	}
	if (indexRange > myData.deserts.length - 1) {
		indexRange = 0;
	}

	//AREA
	//List
	if (event.delta > 0) {
		tenArea = tenArea + 1;
	}
    //x10
	if (tenArea == 10) {
		tenArea = 0;
		indexArea = indexArea + 1;
	}
    //Loop
	if (indexArea < 0) {
		indexArea = myData.deserts.length - 1;
	}
	if (indexArea > myData.deserts.length - 1) {
		indexArea = 0;
	}

	///COUNTRY
	//giro country
	if (event.delta > 0) {
		tenCountry = tenCountry + 1;
	}
    //x10
	if (tenCountry == 10) {
		tenCountry = 0;
		indexCountry = indexCountry + 1;
	}
    //Loop
	if (indexCountry < 0) {
		indexCountry = myData.deserts.length - 1;
	}
	if (indexCountry > myData.deserts.length - 1) {
		indexCountry = 0;
	}

	//MOBILE-SQUARE
	//List
	if (event.delta > 0) {
		indexSquare = indexSquare + 1;
	}
    //Loop
	if (indexSquare < 0) {
		indexSquare = mySquareList.length - 1;
	}
	if (indexSquare > mySquareList.length - 1) {
		indexSquare = 0;
	}

    //DOT-BAR
	if (event.delta > 0) {
		tenDot = tenDot + 1;
	}
    //x10
	if (tenDot == 10) {
		tenDot = 0;
		dot = dot + (windowWidth / 27);
	}

	//NAME-LABEL-COLOR
    if (event.delta > 0) {
		tenColorLabel = tenColorLabel + 1;
	}
    //x10
	if (tenColorLabel == 10) {
		tenColorLabel = 0;
		indexColorLabel = indexColorLabel + 1;
	}
    //Loop
	if (indexColorLabel < 0) {
		indexColorLabel = colorLabel.length - 1;
	}
	if (indexColorLabel > colorLabel.length - 1) {
		indexColorLabel = 0;
	}

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
