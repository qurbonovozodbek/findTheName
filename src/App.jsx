import { useState } from "react";
import { FaReact } from "react-icons/fa";

import "./App.css";

const categories = [
  { name: "Club Logos" },
  { name: "Footballer Names" },
  { name: "Stadiums" },
];

const difficulties = ["Easy", "Normal", "Hard"];

const questions = {
  Easy: {
    "Club Logos": [
      {
        image:
          "https://static.life.ru/posts/2018/09/1156058/e2880ca2dadf494de3efb025b3d8708f.png",
        correct: "A",
        options: { A: "Barcelona", B: "Real Madrid", C: "Chelsea", D: "PSG" },
      },
      {
        image:
          "https://e7da267a-b67b-4f13-925b-81f4cc6ae450.selcdn.net/origin/aeee2fd4-14a1-4ed9-9a51-992bba44f539.jpeg  ",
        correct: "B",
        options: {
          A: "Barcelona",
          B: "Real Madrid",
          C: "Juventus",
          D: "AC Milan",
        },
      },
      {
        image:
          "https://static.vecteezy.com/system/resources/previews/026/135/387/large_2x/chelsea-club-logo-black-and-white-symbol-premier-league-football-abstract-design-illustration-free-vector.jpg",
        correct: "C",
        options: {
          A: "Manchester City",
          B: "Liverpool",
          C: "Chelsea",
          D: "Atletico Madrid",
        },
      },
      {
        image:
          "https://avatars.mds.yandex.net/i?id=a90e017c8c6060dae293118b08ebfd666d91e8d5-5232253-images-thumbs&n=13",
        correct: "A",
        options: {
          A: "Manchester City",
          B: "Arsenal",
          C: "Liverpool",
          D: "Tottenham",
        },
      },
      {
        image:
          "https://photobooth.cdn.sports.ru/preset/post/4/32/ad2952a0e4834a90a0c54c8054eee.jpeg",
        correct: "D",
        options: { A: "Chelsea", B: "Real Madrid", C: "Barcelona", D: "PSG" },
      },
      {
        image: "https://5star.media/wp-content/uploads/2017/06/AGS-3.png",
        correct: "A",
        options: {
          A: "Bayern Munich",
          B: "Borussia Dortmund",
          C: "RB Leipzig",
          D: "Wolfsburg",
        },
      },
      {
        image:
          "https://www.mk.ru/upload/entities/2023/05/30/15/articles/detailPicture/47/ee/af/67/b69d98f89e1fcd762ab2cc9a915900c4.jpg",
        correct: "A",
        options: { A: "Juventus", B: "Roma", C: "AC Milan", D: "Inter Milan" },
      },
      {
        image:
          "https://static.vecteezy.com/system/resources/previews/027/011/090/non_2x/atletico-de-madrid-club-logo-symbol-black-la-liga-spain-football-abstract-design-illustration-free-vector.jpg",
        correct: "C",
        options: {
          A: "Real Madrid",
          B: "Barcelona",
          C: "Atletico Madrid",
          D: "Sevilla",
        },
      },
      {
        image:
          "https://i.pinimg.com/736x/10/9d/6d/109d6d790176aa5580e0e5879ea0f630.jpg",
        correct: "B",
        options: {
          A: "Manchester United",
          B: "Arsenal",
          C: "Tottenham",
          D: "West Ham",
        },
      },
      {
        image:
          "https://i.pinimg.com/736x/c1/1e/23/c11e2370d1662b78a325fabfe2b7ad68.jpg",
        correct: "D",
        options: {
          A: "Manchester City",
          B: "Arsenal",
          C: "Chelsea",
          D: "Liverpool",
        },
      },
    ],
    "Footballer Names": [
      {
        image:
          "https://s.yimg.com/ny/api/res/1.2/BmP9D62VbSv5HASq67oPWg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTk-/https://media.zenfs.com/en/ap.org/123270c6fee32b1090e6d00f89a1252b",
        correct: "C",
        options: { A: "Ronaldo", B: "Neymar", C: "Messi", D: "Mbappe" },
      },
      {
        image:
          "https://mir-cdn.behance.net/v1/rendition/project_modules/max_3840/f49d3640273381.57792c0c27fdc.jpg",
        correct: "A",
        options: { A: "Ronaldo", B: "Messi", C: "Neymar", D: "Mbappe" },
      },
      {
        image:
          "https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/09/03/3777881-76847548-2560-1440.jpg",
        correct: "D",
        options: { A: "Neymar", B: "Messi", C: "Ronaldo", D: "Mbappe" },
      },
      {
        image:
          "https://s0.rbk.ru/v6_top_pics/media/img/0/25/756733414790250.jpg",
        correct: "B",
        options: { A: "Son", B: "Salah", C: "Sterling", D: "Firmino" },
      },
      {
        image:
          "https://media.nbcwashington.com/2022/06/DIT_OTS_5_Things_to_Know_About_Raheem_Sterling_WEB.00_00_00_00.Still005.jpg?quality=85&amp;strip=all&amp;resize=1200%2C675",
        correct: "C",
        options: { A: "Mane", B: "Salah", C: "Sterling", D: "Grealish" },
      },
      {
        image:
          "https://avatars.dzeninfra.ru/get-zen_doc/9722138/pub_6441986105680c15fbb7f7be_64419c6b05680c15fbb8caad/scale_1200",
        correct: "B",
        options: { A: "Salah", B: "De Bruyne", C: "Benzema", D: "Foden" },
      },
      {
        image:
          "https://avatars.mds.yandex.net/i?id=b1f1c5634005d42a169b9a3067d794b4_l-7454445-images-thumbs&n=13",
        correct: "A",
        options: {
          A: "Haaland",
          B: "Lewandowski",
          C: "Vlahovic",
          D: "Timo Werner",
        },
      },
      {
        image: "https://i.ytimg.com/vi/p2Jg9sk-aME/maxresdefault.jpg",
        correct: "C",
        options: {
          A: "Grealish",
          B: "Foden",
          C: "Son Heung-min",
          D: "Diogo Jota",
        },
      },
      {
        image:
          "https://static.independent.co.uk/2022/09/20/07/GettyImages-1063567138.jpg?quality=75&width=1200&auto=webp",
        correct: "A",
        options: { A: "Van Dijk", B: "Matip", C: "TAA", D: "Robertson" },
      },
      {
        image:
          "https://s.yimg.com/ny/api/res/1.2/icoe9GDpXsTkXRpyOriQRw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg-/https://media.zenfs.com/en/evening_standard_239/e6128f6ea1e4f6e3bb359cc717237988",
        correct: "D",
        options: { A: "Barkley", B: "Mount", C: "Saka", D: "Grealish" },
      },
    ],
    Stadiums: [
      {
        image: "https://i.ytimg.com/vi/kKOvl-S_17Q/maxresdefault.jpg",
        correct: "A",
        options: {
          A: "Santiago Bernabeu",
          B: "Old Trafford",
          C: "Anfield",
          D: "Camp Nou",
        },
      },
      {
        image:
          "https://i.pinimg.com/736x/7f/68/c4/7f68c4f48ac7cf28867e57d73594959d.jpg",
        correct: "D",
        options: {
          A: "Stamford Bridge",
          B: "Wembley",
          C: "Allianz Arena",
          D: "Camp Nou",
        },
      },
      {
        image:
          "https://avatars.mds.yandex.net/get-altay/11374752/2a00000190f2f2b2477addea0230de8b5e1f/XXXL",
        correct: "B",
        options: {
          A: "Anfield",
          B: "Old Trafford",
          C: "Emirates",
          D: "Stamford Bridge",
        },
      },
      {
        image:
          "https://avatars.mds.yandex.net/get-altay/5503221/2a0000017e735c80da64ee38742c880a8d01/XXL_height",
        correct: "C",
        options: {
          A: "San Siro",
          B: "Allianz Arena",
          C: "Anfield",
          D: "Signal Iduna Park",
        },
      },
      {
        image:
          "https://avatars.mds.yandex.net/get-altay/10700956/2a0000018c6857dfbd1f6ef70889614c25dd/XXXL",
        correct: "C",
        options: {
          A: "Parc des Princes",
          B: "Camp Nou",
          C: "Allianz Arena",
          D: "Signal Iduna Park",
        },
      },
      {
        image:
          "https://avatars.mds.yandex.net/get-altay/7691421/2a00000188424a6910c7897a1fa4100c848f/orig",
        correct: "A",
        options: {
          A: "Stamford Bridge",
          B: "Wembley",
          C: "Emirates",
          D: "Old Trafford",
        },
      },
      {
        image:
          "https://avatars.mds.yandex.net/i?id=8950022a87bdc6cfa7d3000d608326d4c6d54c07-4809749-images-thumbs&n=13",
        correct: "B",
        options: {
          A: "Parc des Princes",
          B: "Wembley",
          C: "Emirates",
          D: "San Siro",
        },
      },
      {
        image:
          "https://i.pinimg.com/736x/e2/80/01/e2800174c1b0cf6c29ae5cb3a7d3cc06.jpg",
        correct: "D",
        options: {
          A: "Veltins Arena",
          B: "Stamford Bridge",
          C: "Old Trafford",
          D: "Etihad Stadium",
        },
      },
      {
        image: "https://tl.rulate.ru/i/translation/23/3/22518.jpg",
        correct: "C",
        options: {
          A: "Anfield",
          B: "Old Trafford",
          C: "San Siro",
          D: "Stamford Bridge",
        },
      },
      {
        image:
          "https://c8.alamy.com/comp/EDTG0Y/aerial-view-of-rotherham-united-fc-stadium-uk-EDTG0Y.jpg",
        correct: "A",
        options: {
          A: "Bloomfield Road",
          B: "Fratton Park",
          C: "Goodison Park",
          D: "Carrow Road",
        },
      },
    ],
  },

  Normal: {
    "Club Logos": [
      {
        image:
          "https://i.pinimg.com/736x/53/d6/d4/53d6d4040c2f0e47200dbd3e3abe1923.jpg",
        correct: "C",
        options: { A: "Juventus", B: "PSG", C: "Roma", D: "Bayern Munich" },
      },
      {
        image:
          "https://static.vecteezy.com/system/resources/previews/026/135/387/large_2x/chelsea-club-logo-black-and-white-symbol-premier-league-football-abstract-design-illustration-free-vector.jpg",
        correct: "C",
        options: {
          A: "Manchester City",
          B: "Liverpool",
          C: "Chelsea",
          D: "Atletico Madrid",
        },
      },
      {
        image:
          "https://yt3.googleusercontent.com/ytc/AIdro_mzxagEuGy_4PCBg3bh0k7hWkA1jHzSY0SIe2rfOJ49Tg=s900-c-k-c0x00ffffff-no-rj",
        correct: "B",
        options: { A: "RB Leipzig", B: "Monaco", C: "Basel", D: "Lille" },
      },
      {
        image:
          "https://media.contentapi.ea.com/content/dam/ea/easports/fifa/news-media/2018/feb/16/fifa18-harry-maguire-interview.jpg.adapt.crop191x100.628p.jpg",
        correct: "D",
        options: {
          A: "Everton",
          B: "West Ham",
          C: "Southampton",
          D: "Leicester City",
        },
      },
      {
        image: "https://i.ytimg.com/vi/DXexjwwWRT8/maxresdefault.jpg",
        correct: "C",
        options: {
          A: "Borussia Dortmund",
          B: "Bayer Leverkusen",
          C: "Schalke 04",
          D: "Werder Bremen",
        },
      },
      {
        image: "https://i.ytimg.com/vi/a_IDvJKvsmg/maxresdefault.jpg",
        correct: "A",
        options: {
          A: "FC Porto",
          B: "Benfica",
          C: "Sporting CP",
          D: "Olympiacos",
        },
      },
      {
        image:
          "https://i.pinimg.com/736x/5a/c0/8e/5ac08e88fb17766e68ca765c25ae2979.jpg",
        correct: "B",
        options: { A: "Roma", B: "Napoli", C: "Atalanta", D: "Lazio" },
      },
      {
        image:
          "https://i.pinimg.com/736x/cb/ad/da/cbaddaedfd395312647a7d17d1a81d8f.jpg",
        correct: "C",
        options: { A: "Galatasaray", B: "Fenerbahce", C: "Benfica", D: "PAOK" },
      },
      {
        image: "https://i.ytimg.com/vi/K2nKPgkOTzI/maxresdefault.jpg",
        correct: "A",
        options: {
          A: "Valencia",
          B: "Sevilla",
          C: "Real Betis",
          D: "Villarreal",
        },
      },
      {
        image:
          "https://i.ytimg.com/vi/0TRRPnj0wD4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgRShCMA8=&rs=AOn4CLAAsBB32gAH2pakL1hocgdnxYNPFg",
        correct: "D",
        options: {
          A: "Asteras Tripolis",
          B: "Aris Thessaloniki",
          C: "PAOK",
          D: "Olympiacos",
        },
      },
    ],
    "Footballer Names": [
      {
        image: "https://sun9-80.userapi.com/impg/VjRNE7-R4qpvo0U2iFDYA1Cu9hhNi-yz3_CG6g/UcDqd424YU0.jpg?size=604x403&quality=95&sign=d2665573bbd9426c7068af0362ca9e6c&c_uniq_tag=eK97EvwWCTkd3yiRUDxtZyv6r8IeBkbCy5sp6ffduz4&type=album",
        correct: "B",
        options: {
          A: "Dan Burn",
          B: "Joelinton",
          C: "Chris Wood",
          D: "Jacob Murphy",
        },
      },
      {
        image: "https://iaaspr.tmgrup.com.tr/cb18d2/1200/627/0/102/1376/822?u=https://iaspr.tmgrup.com.tr/2023/03/07/galatasaray-transfer-haberleri-cimbomdan-milot-rashica-hamlesi-iste-sunulan-teklif-1678197048751.jpg",
        correct: "D",
        options: {
          A: "Teemu Pukki",
          B: "Josh Sargent",
          C: "Todd Cantwell",
          D: "Milot Rashica",
        },
      },
      {
        image: "https://e0.365dm.com/22/12/1600x900/skysports-west-brom-daryl-dike_5994804.jpg?20221212222314",
        correct: "B",
        options: {
          A: "Irving Harper",
          B: "Daryl Dike",
          C: "Andi Weimann",
          D: "Jay Dasilva",
        },
      },
      {
        image: "https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article26107162.ece/ALTERNATES/s1200/0_GettyImages-1460355196.jpg",
        correct: "C",
        options: {
          A: "Nico Schlotterbeck",
          B: "Mats Hummels",
          C: "Manuel Akanji",
          D: "Emre Can",
        },
      },
      {
        image: "https://img.championat.com/i/r/z/1693428989913176931.jpg",
        correct: "D",
        options: {
          A: "Harrison Reed",
          B: "Andreas Pereira",
          C: "Bobby Decordova-Reid",
          D: "João Palhinha",
        },
      },
      {
        image: "https://avatars.mds.yandex.net/i?id=46c3adaa58ef96c348a40ca8410daa98_l-5123535-images-thumbs&n=13",
        correct: "B",
        options: {
          A: "Tyler Adams",
          B: "Brenden Aaronson",
          C: "Jack Harrison",
          D: "Luis Sinisterra",
        },
      },
      {
        image: "https://avatars.mds.yandex.net/i?id=a8c9420228c7a21577d2c605f345d68a_l-9229611-images-thumbs&n=13",
        correct: "C",
        options: {
          A: "Pierre-Emile Højbjerg",
          B: "Yves Bissouma",
          C: "Rodrigo Bentancur",
          D: "Oliver Skipp",
        },
      },
      {
        image: "https://avatars.mds.yandex.net/i?id=f1033ea6282af17555071f0ecfdbd85b2de6474b-4248994-images-thumbs&n=13",
        correct: "A",
        options: {
          A: "Jean-Philippe Mateta",
          B: "Odsonne Édouard",
          C: "Jordan Ayew",
          D: "Wilfried Zaha",
        },
      },
      {
        image: "https://www.sports.ru/dynamic_images/news/111/540/575/6/share/2ef301_no_logo_no_text.jpg",
        correct: "D",
        options: {
          A: "Jan Bednarek",
          B: "Mohammed Salisu",
          C: "Duje Ćaleta-Car",
          D: "Armel Bella-Kotchap",
        },
      },
      {
        image: "https://itkv.tmgrup.com.tr/2024/09/07/galatasaraydan-sol-kanat-harekati-zaha-ve-keremin-yeri-doldurulacak-1725719640148.jpeg",
        correct: "B",
        options: {
          A: "Hugo Bueno",
          B: "Gonçalo Guedes",
          C: "Daniel Podence",
          D: "Matheus Nunes",
        },
      },
    ],
    Stadiums: [
      {
        image:
          "https://i.pinimg.com/736x/d3/ee/d4/d3eed4bc28cf44805a406960ce67c1a2.jpg",
        correct: "A",
        options: {
          A: "Orlando Stadium",
          B: "Soccer City",
          C: "FNB Stadium",
          D: "Loftus Versfeld",
        },
      },
      {
        image:
          "https://football-fun-live.com/uploads/34/stadiums/coliseum-alfonso-perez.jpg",
        correct: "B",
        options: {
          A: "Real Madrid Training Ground",
          B: "Coliseum Alfonso Perez",
          C: "Gran Canaria Stadium",
          D: "Estadio Anoeta",
        },
      },
      {
        image: "https://i.ytimg.com/vi/k3vrofVQVjw/maxresdefault.jpg",
        correct: "C",
        options: {
          A: "Sydney Olympic Park",
          B: "Adelaide Oval",
          C: "Melbourne Rectangular Stadium",
          D: "Brisbane Stadium",
        },
      },
      {
        image: "https://i.ytimg.com/vi/83WetQYmbZM/maxresdefault.jpg",
        correct: "D",
        options: {
          A: "Shakhtar Donetsk Arena",
          B: "Vorskla Poltava Stadium",
          C: "Metalist Stadium",
          D: "Olympic Stadium, Kiev",
        },
      },
      {
        image:
          "https://sun9-69.userapi.com/s/v1/ig2/uEXJ-pUwFMmZ5C5z7E2JSLft8Jpcp8I9JZQrn7tc2OFv85Upg9VRSSbuxNWYVBRostdfuaoIRy7TACFIIQVAY7FZ.jpg?quality=96&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810&from=bu&u=_hTOOaXZRF8LrdJnajX8alwcQxLNBAgc4lkOowyfcOc&cs=604x340",
        correct: "C",
        options: {
          A: "Aviva Stadium",
          B: "Belfield",
          C: "Dalymount Park",
          D: "Tolka Park",
        },
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Sheffield_united_bramall_lane_stadium.jpg/1200px-Sheffield_united_bramall_lane_stadium.jpg",
        correct: "C",
        options: {
          A: "Brentford Community Stadium",
          B: "Tennent Park",
          C: "Bramall Lane",
          D: "Molineux Stadium",
        },
      },
      {
        image:
          "https://i.pinimg.com/736x/0e/9e/60/0e9e6054609d5d0c0ce0a4f88b7ca5e6.jpg",
        correct: "A",
        options: {
          A: "Unsal Stadium",
          B: "Halkapinar",
          C: "Turk Telekom Arena",
          D: "Yeni Malatya Stadium",
        },
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Le_stade_de_Yamoussoukro%28Bosson%29.jpg/640px-Le_stade_de_Yamoussoukro%28Bosson%29.jpg",
        correct: "B",
        options: {
          A: "Jawaharlal Nehru Stadium",
          B: "Balewadi Stadium",
          C: "Salt Lake Stadium",
          D: "Rangpur Stadium",
        },
      },
      {
        image:
          "https://i.pinimg.com/originals/22/0d/0b/220d0b0941aee18d0abd8bc815c1fc4a.jpg",
        correct: "C",
        options: {
          A: "Stamford Bridge",
          B: "Emirates",
          C: "Flower Dome Stadium",
          D: "Madison Square Garden",
        },
      },
      {
        image:
          "https://i.pinimg.com/736x/91/09/2c/91092c1249cd0ddc968274a8faf1fcb7.jpg",
        correct: "D",
        options: {
          A: "Leicester Stadium",
          B: "Reading FC Ground",
          C: "Sunderland Stadium",
          D: "Birmingham City Stadium",
        },
      },
    ],
  },

  Hard: {
    "Club Logos": [
      {
        image:
          "https://www.rma.ru/upload/iblock/a82/%D0%A4%D0%9E%D0%A2%D0%9E%20%D0%9B%D0%9E%D0%9A%D0%9E%202.jpg",
        correct: "A",
        options: {
          A: "Lokomotiv Moscow",
          B: "Zenit St. Petersburg",
          C: "Spartak Moscow",
          D: "CSKA Moscow",
        },
      },
      {
        image:
          "https://statics.viralizalo.com/virs/2016/03/VIR_184237_15103_conoces_los_dorsales_del_real_betis_balompie.jpg?cb=26917",
        correct: "B",
        options: {
          A: "Getafe",
          B: "Real Betis",
          C: "Sevilla",
          D: "Villarreal",
        },
      },
      {
        image:
          "https://cdn1.ntv.com.tr/gorsel/hk1IPZ4hq0OJPpTGWSvp_w.jpg?width=1000&mode=both&scale=both&v=1388416899000",
        correct: "C",
        options: { A: "Molde", B: "Bodo/Glimt", C: "Rosenborg", D: "Brann" },
      },
      {
        image:
          "https://foto.haberler.com/haber/2022/11/03/trabzonspor-elendi-mi-trabzonspor-uefa-avrupa-15405936_2760_amp.jpg",
        correct: "A",
        options: {
          A: "Trabzonspor",
          B: "Galatasaray",
          C: "Fenerbahce",
          D: "Aykut Kocaman",
        },
      },
      {
        image: "https://i.ytimg.com/vi/0bLB2UZaHeQ/maxresdefault.jpg",
        correct: "C",
        options: { A: "Bologna", B: "Empoli", C: "Sassuolo", D: "Lazio" },
      },
      {
        image: "https://i.ytimg.com/vi/JcpzoeftEpA/maxresdefault.jpg",
        correct: "B",
        options: {
          A: "AEK Athens",
          B: "PAOK",
          C: "Olympiacos",
          D: "Aris Thessaloniki",
        },
      },
      {
        image:
          "https://i.pinimg.com/736x/03/b5/a4/03b5a420a094ea20ebc3a45505c995b3.jpg",
        correct: "D",
        options: {
          A: "Sao Paulo",
          B: "Corinthians",
          C: "Flamengo",
          D: "Vasco da Gama",
        },
      },
      {
        image:
          "https://i.pinimg.com/736x/dd/c4/e6/ddc4e66f1f52f702b4061f209f3a1c17.jpg",
        correct: "B",
        options: {
          A: "Ameerabad FC",
          B: "Persepolis",
          C: "Esteghlal",
          D: "Tractor Sazi",
        },
      },
      {
        image:
          "https://pic.rutubelist.ru/playlist/1c042289-a4bd-11ef-bb8c-02420a000309.jpg",
        correct: "C",
        options: { A: "Napoli", B: "Fiorentina", C: "Lazio", D: "Roma" },
      },
      {
        image:
          "https://sun9-11.userapi.com/impg/gfpHyNVjzZaykeMdB4qn7inBuibKRThbjJtLFg/DAh0rcxcKkg.jpg?size=604x341&quality=96&sign=fa8409a48ba96e00987b1b18ece46396&type=album",
        correct: "B",
        options: {
          A: "San Jose Earthquakes",
          B: "Montreal Impact",
          C: "LA Galaxy",
          D: "Columbus Crew",
        },
      },
    ],
    "Footballer Names": [
      {
        image: "https://i.ytimg.com/vi/fQnoQobjzn0/maxresdefault.jpg",
        correct: "B",
        options: {
          A: "Cazorla",
          B: "Santi Cazorla",
          C: "James Rodriguez",
          D: "Xabi Alonso",
        },
      },
      {
        image:
          "https://ss.sport-express.ru/userfiles/materials/171/1710125/large.jpg",
        correct: "D",
        options: {
          A: "Digne",
          B: "Mendy",
          C: "Alex Sandro",
          D: "Benjamin Mendy",
        },
      },
      {
        image:
          "https://avatars.mds.yandex.net/i?id=c920826d786146cb4bab57b8b93a53e1_l-4077654-images-thumbs&n=13",
        correct: "A",
        options: {
          A: "Illarramendi",
          B: "Xabi Alonso",
          C: "Sergio Busquets",
          D: "Koke",
        },
      },
      {
        image:
          "https://assets.nst.com.my/images/articles/desi43_field_image_socialmedia.var_1512236702.jpg",
        correct: "C",
        options: {
          A: "Bakambu",
          B: "Bacca",
          C: "Mame Birame Diouf",
          D: "Andre Ayew",
        },
      },
      {
        image:
          "https://sun1-24.userapi.com/impg/U0LfLjudvMOKnvxAwEd2WIiYfZTBmAiE99LeXQ/Bu8vxbZF7zo.jpg?size=807x538&quality=96&sign=0c7cb996e0866c96db392403b7db229c&c_uniq_tag=8FQPiqJ_aBeF8hVd6qMrY5_PihaIUH5veQG139tEi0c&type=album",
        correct: "D",
        options: { A: "Cavani", B: "Falcao", C: "Luis Suarez", D: "Forlan" },
      },
      {
        image:
          "https://avatars.dzeninfra.ru/get-zen_doc/96506/pub_5d6048dc78125e00ac0512a1_5d60543203bdd400ae03a83b/scale_1200",
        correct: "B",
        options: {
          A: "Gervinho",
          B: "Stefano Okaka",
          C: "Balotelli",
          D: "Giovinco",
        },
      },
      {
        image:
          "https://i2-prod.manchestereveningnews.co.uk/incoming/article10353564.ece/ALTERNATES/s1200/JS75451053.jpg",
        correct: "D",
        options: {
          A: "Fernando Torres",
          B: "Juan Mata",
          C: "Brajan Bravo",
          D: "Manu Garcia",
        },
      },
      {
        image:
          "https://avatars.mds.yandex.net/i?id=88cfc128b5dd7df9b1e5ecb1c8e6d12c_l-5252183-images-thumbs&n=13",
        correct: "A",
        options: {
          A: "Pablo Zabaleta",
          B: "Antonio Valencia",
          C: "Juanfran",
          D: "Carvajal",
        },
      },
      {
        image:
          "https://avatars.mds.yandex.net/i?id=062e05261a6f42c42f36083280d5323e_l-5770979-images-thumbs&n=13",
        correct: "C",
        options: {
          A: "Adrien Rabiot",
          B: "Moussa Sissoko",
          C: "Benjamin Stambouli",
          D: "William Carvalho",
        },
      },
      {
        image:
          "https://avatars.mds.yandex.net/i?id=62287ac7580874f63d300d3a24c2f4d5_l-10250346-images-thumbs&n=13",
        correct: "D",
        options: {
          A: "Sergio Busquets",
          B: "David Silva",
          C: "Gerard Pique",
          D: "Cesc Fabregas",
        },
      },
    ],
    Stadiums: [
      {
        image:
          "https://i.pinimg.com/736x/d3/ee/d4/d3eed4bc28cf44805a406960ce67c1a2.jpg",
        correct: "A",
        options: {
          A: "Orlando Stadium",
          B: "Soccer City",
          C: "FNB Stadium",
          D: "Loftus Versfeld",
        },
      },
      {
        image:
          "https://football-fun-live.com/uploads/34/stadiums/coliseum-alfonso-perez.jpg",
        correct: "B",
        options: {
          A: "Real Madrid Training Ground",
          B: "Coliseum Alfonso Perez",
          C: "Gran Canaria Stadium",
          D: "Estadio Anoeta",
        },
      },
      {
        image: "https://i.ytimg.com/vi/k3vrofVQVjw/maxresdefault.jpg",
        correct: "C",
        options: {
          A: "Sydney Olympic Park",
          B: "Adelaide Oval",
          C: "Melbourne Rectangular Stadium",
          D: "Brisbane Stadium",
        },
      },
      {
        image: "https://i.ytimg.com/vi/83WetQYmbZM/maxresdefault.jpg",
        correct: "D",
        options: {
          A: "Shakhtar Donetsk Arena",
          B: "Vorskla Poltava Stadium",
          C: "Metalist Stadium",
          D: "Olympic Stadium, Kiev",
        },
      },
      {
        image:
          "https://sun9-69.userapi.com/s/v1/ig2/uEXJ-pUwFMmZ5C5z7E2JSLft8Jpcp8I9JZQrn7tc2OFv85Upg9VRSSbuxNWYVBRostdfuaoIRy7TACFIIQVAY7FZ.jpg?quality=96&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810&from=bu&u=_hTOOaXZRF8LrdJnajX8alwcQxLNBAgc4lkOowyfcOc&cs=604x340",
        correct: "C",
        options: {
          A: "Aviva Stadium",
          B: "Belfield",
          C: "Dalymount Park",
          D: "Tolka Park",
        },
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Sheffield_united_bramall_lane_stadium.jpg/1200px-Sheffield_united_bramall_lane_stadium.jpg",
        correct: "C",
        options: {
          A: "Brentford Community Stadium",
          B: "Tennent Park",
          C: "Bramall Lane",
          D: "Molineux Stadium",
        },
      },
      {
        image:
          "https://i.pinimg.com/736x/0e/9e/60/0e9e6054609d5d0c0ce0a4f88b7ca5e6.jpg",
        correct: "A",
        options: {
          A: "Unsal Stadium",
          B: "Halkapinar",
          C: "Turk Telekom Arena",
          D: "Yeni Malatya Stadium",
        },
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Le_stade_de_Yamoussoukro%28Bosson%29.jpg/640px-Le_stade_de_Yamoussoukro%28Bosson%29.jpg",
        correct: "B",
        options: {
          A: "Jawaharlal Nehru Stadium",
          B: "Balewadi Stadium",
          C: "Salt Lake Stadium",
          D: "Rangpur Stadium",
        },
      },
      {
        image:
          "https://i.pinimg.com/originals/22/0d/0b/220d0b0941aee18d0abd8bc815c1fc4a.jpg",
        correct: "C",
        options: {
          A: "Stamford Bridge",
          B: "Emirates",
          C: "Flower Dome Stadium",
          D: "Madison Square Garden",
        },
      },
      {
        image:
          "https://i.pinimg.com/736x/91/09/2c/91092c1249cd0ddc968274a8faf1fcb7.jpg",
        correct: "D",
        options: {
          A: "Leicester Stadium",
          B: "Reading FC Ground",
          C: "Sunderland Stadium",
          D: "Birmingham City Stadium",
        },
      },
    ],
  },
};

export default function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [category, setCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  if (!difficulty) {
    return (
      <div className="game-container">
        <h1 className="title">Choose a Difficulty</h1>
        <div className="category-list">
          {difficulties.map((level) => (
            <button
              key={level}
              onClick={() => setDifficulty(level)}
              className="category-button"
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="game-container">
        <h1 className="title">Choose a Category</h1>
        <div className="category-list">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setCategory(cat.name)}
              className="category-button"
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const currentQuestion = questions[difficulty][category][currentIndex];

  const checkAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correct) {
      setFeedback("✅ Correct!");
      setScore(score + 1);
    } else {
      setFeedback(
        `❌ Wrong! The correct answer was ${
          currentQuestion.options[currentQuestion.correct]
        }`
      );
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions[difficulty][category].length) {
        setCurrentIndex(currentIndex + 1);
        setFeedback("");
        setSelectedAnswer(null);
      } else {
        setGameOver(true);
      }
    }, 2000);
  };

  if (gameOver) {
    return (
      <div className="game-container">
        <h1 className="title">Game Over</h1>
        <p className="score">Your Score: {score}</p>
        <button
          className="category-button"
          onClick={() => window.location.reload()}
        >
          Restart
        </button>
      </div>
    );
  }

  return (
    <div className="game-container">
      <div className="card">
        <h2 className="category-title">
          {category} - {difficulty}
        </h2>
        <img
          src={currentQuestion.image}
          alt="Question"
          className="player-image"
        />
        <div className="options">
          {Object.entries(currentQuestion.options).map(([key, value]) => (
            <button
              key={key}
              onClick={() => checkAnswer(key)}
              className={`option-button ${
                selectedAnswer && key === currentQuestion.correct
                  ? "correct"
                  : ""
              } ${
                selectedAnswer && key !== currentQuestion.correct
                  ? "incorrect"
                  : ""
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <span className="creator"> <FaReact className="icon"/>created by @qurbonovozodbe</span>
    </div>
  );
}
