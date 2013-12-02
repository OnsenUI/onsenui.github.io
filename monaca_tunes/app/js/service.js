/*===================================================================
 Data
===================================================================*/
(function() {
	var myApp = angular.module('myApp');

	myApp.factory('Data', function() {

		var data = {};

		data.playlists = [{
			"id": 1,
			"name": "Favorite",
			"image": "99_musicData/demoImage/demo01.jpg"
		}, {
			"id": 2,
			"name": "Rock",
			"image": "http:\/\/imgjam.com\/albums\/s3\/3317\/covers\/1.100.jpg"
		}, {
			"id": 3,
			"name": "Pop",
			"image": "http:\/\/imgjam.com\/albums\/s31\/31732\/covers\/1.100.jpg"
		}, {
			"id": 4,
			"name": "Dance",
			"image": "http:\/\/imgjam.com\/albums\/s2\/2212\/covers\/1.100.jpg"
		}, ];

		data.Favorite = [{
			"album_id": "120948",
			"duration": 111,
			"id": "1028938",
			"artist_id": "375104",
			"artist_name": "Plastic3",
			"position": 1,
			"album_name": "Business Corporate Music ",
			"name": "Corporate Energetic Background Music",
			"license_ccurl": "http://creativecommons.org/licenses/by-nc-sa/3.0/",
			"releasedate": "2013-04-22",
			"album_image": "99_musicData/demoImage/demo01.jpg",
			"audio": "99_musicData/demoMusic/demo01.mp3",
			"prourl": "pro.jamendo.com/royalty-free-music-library#search=track-1028938"
		}, {
			"album_id": "123853",
			"duration": 104,
			"id": "1051627",
			"artist_id": "377055",
			"artist_name": "ZOE.LEELA",
			"position": 1,
			"album_name": "Digital Guilt",
			"name": "Pop Up",
			"license_ccurl": "http://creativecommons.org/licenses/by-nc-sa/2.0/de/",
			"releasedate": "2013-07-26",
			"album_image": "99_musicData/demoImage/demo02.jpg",
			"audio": "99_musicData/demoMusic/demo02.mp3"
		}, {
			"album_id": "124283",
			"duration": 168,
			"id": "1054396",
			"artist_id": "7063",
			"artist_name": "Fresh Body Shop",
			"position": 1,
			"album_name": "Kids In Toyland",
			"name": "Kids In Toy Land",
			"license_ccurl": "http://creativecommons.org/licenses/by-nc-nd/3.0/",
			"releasedate": "2013-08-07",
			"album_image": "99_musicData/demoImage/demo03.jpg",
			"audio": "99_musicData/demoMusic/demo03.mp3",
			"prourl": "pro.jamendo.com/royalty-free-music-library#search=track-1054396"
		}];

		data.Rock = [{
			"album_id": "49216",
			"duration": 193,
			"id": "391006",
			"artist_id": "351716",
			"artist_name": "Diablo Swing Orchestra",
			"position": 9,
			"album_name": "The Butcher's Ballroom",
			"name": "Wedding March for a Bullet",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-nd\/3.0\/",
			"releasedate": "2009-07-23",
			"album_image": "http:\/\/imgjam.com\/albums\/s49\/49216\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/391006\/mp31\/"
		}, {
			"album_id": "49216",
			"duration": 76,
			"id": "391008",
			"artist_id": "351716",
			"artist_name": "Diablo Swing Orchestra",
			"position": 10,
			"album_name": "The Butcher's Ballroom",
			"name": "Qualms of Conscience",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-nd\/3.0\/",
			"releasedate": "2009-07-23",
			"album_image": "http:\/\/imgjam.com\/albums\/s49\/49216\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/391008\/mp31\/"
		}, {
			"album_id": "3317",
			"duration": 291,
			"id": "24036",
			"artist_id": "1435",
			"artist_name": "JT Bruce",
			"position": 3,
			"album_name": "The Dreamer's Paradox",
			"name": "Plunge Into Hyperreality",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-nd\/2.5\/",
			"releasedate": "2006-11-09",
			"album_image": "http:\/\/imgjam.com\/albums\/s3\/3317\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/24036\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-24036"
		}, {
			"album_id": "3317",
			"duration": 352,
			"id": "24037",
			"artist_id": "1435",
			"artist_name": "JT Bruce",
			"position": 4,
			"album_name": "The Dreamer's Paradox",
			"name": "False Awakening",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-nd\/2.5\/",
			"releasedate": "2006-11-09",
			"album_image": "http:\/\/imgjam.com\/albums\/s3\/3317\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/24037\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-24037"
		}, {
			"album_id": "7505",
			"duration": 204,
			"id": "81746",
			"artist_id": "8303",
			"artist_name": "pornophonique",
			"position": 7,
			"album_name": "8-bit lagerfeuer",
			"name": "game over",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/2.0\/de\/",
			"releasedate": "2007-09-06",
			"album_image": "http:\/\/imgjam.com\/albums\/s7\/7505\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/81746\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-81746"
		}, {
			"album_id": "7505",
			"duration": 206,
			"id": "81743",
			"artist_id": "8303",
			"artist_name": "pornophonique",
			"position": 4,
			"album_name": "8-bit lagerfeuer",
			"name": "space invaders",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/2.0\/de\/",
			"releasedate": "2007-09-06",
			"album_image": "http:\/\/imgjam.com\/albums\/s7\/7505\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/81743\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-81743"
		}, {
			"album_id": "70270",
			"duration": 205,
			"id": "607077",
			"artist_id": "361195",
			"artist_name": "Circus Underground",
			"position": 1,
			"album_name": "2010",
			"name": "Circus Underground - Save You",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/1.0\/fi\/",
			"releasedate": "2010-07-01",
			"album_image": "http:\/\/imgjam.com\/albums\/s70\/70270\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/607077\/mp31\/"
		}, {
			"album_id": "46651",
			"duration": 202,
			"id": "359042",
			"artist_id": "350949",
			"artist_name": "The Way I Am !",
			"position": 1,
			"album_name": "I didn't cry",
			"name": "I Didn't Cry",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-nd\/3.0\/",
			"releasedate": "2009-06-03",
			"album_image": "http:\/\/imgjam.com\/albums\/s46\/46651\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/359042\/mp31\/"
		}, {
			"album_id": "25115",
			"duration": 182,
			"id": "170225",
			"artist_id": "339713",
			"artist_name": "Diagn\u00f3stico Canalla",
			"position": 3,
			"album_name": "La Estaci\u00f3n de las Mentiras",
			"name": "Diagn\u00f3stico Canalla",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-nd\/3.0\/",
			"releasedate": "2008-05-17",
			"album_image": "http:\/\/imgjam.com\/albums\/s25\/25115\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/170225\/mp31\/"
		}, {
			"album_id": "25115",
			"duration": 222,
			"id": "170231",
			"artist_id": "339713",
			"artist_name": "Diagn\u00f3stico Canalla",
			"position": 4,
			"album_name": "La Estaci\u00f3n de las Mentiras",
			"name": "Un par de cojones",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-nd\/3.0\/",
			"releasedate": "2008-05-17",
			"album_image": "http:\/\/imgjam.com\/albums\/s25\/25115\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/170231\/mp31\/"
		}];

		data.Pop = [{
			"album_id": "31732",
			"duration": 174,
			"id": "215576",
			"artist_id": "336871",
			"artist_name": "R\u00e9gis V. Gronoff",
			"position": 4,
			"album_name": "Hummingbird & Honeybee",
			"name": "Aux Temps Heureux",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/3.0\/",
			"releasedate": "2008-09-23",
			"album_image": "http:\/\/imgjam.com\/albums\/s31\/31732\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/215576\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-215576"
		}, {
			"album_id": "31732",
			"duration": 170,
			"id": "215582",
			"artist_id": "336871",
			"artist_name": "R\u00e9gis V. Gronoff",
			"position": 10,
			"album_name": "Hummingbird & Honeybee",
			"name": "Pale Dream",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/3.0\/",
			"releasedate": "2008-09-23",
			"album_image": "http:\/\/imgjam.com\/albums\/s31\/31732\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/215582\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-215582"
		}, {
			"album_id": "84877",
			"duration": 218,
			"id": "726453",
			"artist_id": "7872",
			"artist_name": "Josh Woodward",
			"position": 3,
			"album_name": "Sunny Side of the Street",
			"name": "Chainsaw",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by\/3.0\/",
			"releasedate": "2011-02-05",
			"album_image": "http:\/\/imgjam.com\/albums\/s84\/84877\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/726453\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-726453"
		}, {
			"album_id": "84877",
			"duration": 163,
			"id": "726458",
			"artist_id": "7872",
			"artist_name": "Josh Woodward",
			"position": 11,
			"album_name": "Sunny Side of the Street",
			"name": "Are You Having Fun?",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by\/3.0\/",
			"releasedate": "2011-02-05",
			"album_image": "http:\/\/imgjam.com\/albums\/s84\/84877\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/726458\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-726458"
		}, {
			"album_id": "7505",
			"duration": 204,
			"id": "81746",
			"artist_id": "8303",
			"artist_name": "pornophonique",
			"position": 7,
			"album_name": "8-bit lagerfeuer",
			"name": "game over",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/2.0\/de\/",
			"releasedate": "2007-09-06",
			"album_image": "http:\/\/imgjam.com\/albums\/s7\/7505\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/81746\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-81746"
		}, {
			"album_id": "7505",
			"duration": 206,
			"id": "81743",
			"artist_id": "8303",
			"artist_name": "pornophonique",
			"position": 4,
			"album_name": "8-bit lagerfeuer",
			"name": "space invaders",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/2.0\/de\/",
			"releasedate": "2007-09-06",
			"album_image": "http:\/\/imgjam.com\/albums\/s7\/7505\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/81743\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-81743"
		}, {
			"album_id": "19273",
			"duration": 179,
			"id": "135285",
			"artist_id": "162",
			"artist_name": "...anabase*",
			"position": 11,
			"album_name": "Le bonheur flou",
			"name": "Ios Island",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/2.0\/fr\/",
			"releasedate": "2008-02-13",
			"album_image": "http:\/\/imgjam.com\/albums\/s19\/19273\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/135285\/mp31\/"
		}, {
			"album_id": "19273",
			"duration": 241,
			"id": "135274",
			"artist_id": "162",
			"artist_name": "...anabase*",
			"position": 10,
			"album_name": "Le bonheur flou",
			"name": "A l'int\u00e9rieur",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/2.0\/fr\/",
			"releasedate": "2008-02-13",
			"album_image": "http:\/\/imgjam.com\/albums\/s19\/19273\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/135274\/mp31\/"
		}, {
			"album_id": "55594",
			"duration": 290,
			"id": "469577",
			"artist_id": "355169",
			"artist_name": "Leslie Hunt",
			"position": 10,
			"album_name": "Your Hair is on Fire",
			"name": "Down Day",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/3.0\/",
			"releasedate": "2009-11-19",
			"album_image": "http:\/\/imgjam.com\/albums\/s55\/55594\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/469577\/mp31\/"
		}, {
			"album_id": "55594",
			"duration": 221,
			"id": "469570",
			"artist_id": "355169",
			"artist_name": "Leslie Hunt",
			"position": 5,
			"album_name": "Your Hair is on Fire",
			"name": "Way Too Much",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/3.0\/",
			"releasedate": "2009-11-19",
			"album_image": "http:\/\/imgjam.com\/albums\/s55\/55594\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/469570\/mp31\/"
		}];

		data.Dance = [{
			"album_id": "2212",
			"duration": 196,
			"id": "15542",
			"artist_id": "2251",
			"artist_name": "sound of jack",
			"position": 5,
			"album_name": "sound of jack",
			"name": "Over the raimbow (bossa mix edit radio)",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-nd\/2.0\/fr\/",
			"releasedate": "2006-06-18",
			"album_image": "http:\/\/imgjam.com\/albums\/s2\/2212\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/15542\/mp31\/"
		}, {
			"album_id": "2212",
			"duration": 213,
			"id": "15546",
			"artist_id": "2251",
			"artist_name": "sound of jack",
			"position": 9,
			"album_name": "sound of jack",
			"name": "Savor a mi (edit radio)",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-nd\/2.0\/fr\/",
			"releasedate": "2006-06-18",
			"album_image": "http:\/\/imgjam.com\/albums\/s2\/2212\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/15546\/mp31\/"
		}, {
			"album_id": "4965",
			"duration": 1417,
			"id": "40340",
			"artist_id": "5490",
			"artist_name": "Peri Mental",
			"position": 1,
			"album_name": "BASSboy",
			"name": "megamix",
			"license_ccurl": "http:\/\/artlibre.org\/licence.php\/lal.html",
			"releasedate": "2007-03-31",
			"album_image": "http:\/\/imgjam.com\/albums\/s4\/4965\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/40340\/mp31\/"
		}, {
			"album_id": "1011",
			"duration": 368,
			"id": "6620",
			"artist_id": "876",
			"artist_name": "NeXuS",
			"position": 6,
			"album_name": "Trance Planet",
			"name": "Galactyka",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/2.0\/fr\/",
			"releasedate": "2006-01-13",
			"album_image": "http:\/\/imgjam.com\/albums\/s1\/1011\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/6620\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-6620"
		}, {
			"album_id": "1011",
			"duration": 356,
			"id": "6626",
			"artist_id": "876",
			"artist_name": "NeXuS",
			"position": 12,
			"album_name": "Trance Planet",
			"name": "Hypodemia",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-sa\/2.0\/fr\/",
			"releasedate": "2006-01-13",
			"album_image": "http:\/\/imgjam.com\/albums\/s1\/1011\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/6626\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-6626"
		}, {
			"album_id": "44841",
			"duration": 118,
			"id": "338667",
			"artist_id": "350052",
			"artist_name": "LionDance",
			"position": 1,
			"album_name": "Eurodance Evolution",
			"name": "Eurodance Evolution - Intro",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-nd\/2.0\/fr\/",
			"releasedate": "2009-05-02",
			"album_image": "http:\/\/imgjam.com\/albums\/s44\/44841\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/338667\/mp31\/"
		}, {
			"album_id": "44841",
			"duration": 215,
			"id": "338833",
			"artist_id": "350052",
			"artist_name": "LionDance",
			"position": 3,
			"album_name": "Eurodance Evolution",
			"name": "Eurodance Evolution - Wonderfull dancing",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-nd\/2.0\/fr\/",
			"releasedate": "2009-05-02",
			"album_image": "http:\/\/imgjam.com\/albums\/s44\/44841\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/338833\/mp31\/"
		}, {
			"album_id": "26259",
			"duration": 276,
			"id": "177570",
			"artist_id": "340035",
			"artist_name": "UltraCat",
			"position": 1,
			"album_name": "Disco High",
			"name": "Disco High",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-nd\/3.0\/",
			"releasedate": "2008-06-07",
			"album_image": "http:\/\/imgjam.com\/albums\/s26\/26259\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/177570\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-177570"
		}, {
			"album_id": "26259",
			"duration": 246,
			"id": "171573",
			"artist_id": "340035",
			"artist_name": "UltraCat",
			"position": 3,
			"album_name": "Disco High",
			"name": "Unexpected Little Happenings",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-nd\/3.0\/",
			"releasedate": "2008-06-07",
			"album_image": "http:\/\/imgjam.com\/albums\/s26\/26259\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/171573\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-171573"
		}, {
			"album_id": "6471",
			"duration": 300,
			"id": "73209",
			"artist_id": "4812",
			"artist_name": "SaReGaMa",
			"position": 1,
			"album_name": "Honky Fonky (EP)",
			"name": "SaReGaMa & Hamelin B\u00e9rengnier - Honky Fonky (2007)",
			"license_ccurl": "http:\/\/creativecommons.org\/licenses\/by-nc-nd\/3.0\/",
			"releasedate": "2007-07-08",
			"album_image": "http:\/\/imgjam.com\/albums\/s6\/6471\/covers\/1.600.jpg",
			"audio": "http:\/\/storage-new.newjamendo.com\/download\/track\/73209\/mp31\/",
			"prourl": "pro.jamendo.com\/royalty-free-music-library#search=track-73209"
		}];

		return data;
	});
})();