const data = [
"1 24793U 97020B   22077.19122080  .00000212  00000+0  68323-4 0  9994",
"2 24793  86.3956 313.7350 0002199  85.8886 274.2561 14.34452975301881",
"1 24795U 97020D   22076.93486860  .00001195  00000+0  12738-3 0  9995",
"2 24795  86.3920 263.2297 0138285  26.1608 334.6513 14.80967861309151",
"1 24796U 97020E   22076.74160057  .00000238  00000+0  76274-4 0  9995",
"2 24796  86.3947 311.5882 0002131  92.6121 267.5320 14.35355863302062",
"1 24836U 97030A   22076.77115678  .00000230  00000+0  68092-4 0  9994",
"2 24836  86.3948 323.5897 0002909 125.5255 234.6215 14.39067275436274",
"1 24841U 97030F   22076.80696202  .00000261  00000+0  81365-4 0  9993",
"2 24841  86.4083 343.4094 0003407  41.4231 318.7225 14.37022415296404",
"1 24842U 97030G   22077.18092649  .00000326  00000+0  86893-4 0  9994",
"2 24842  86.4508 342.9879 0016604  87.9940 272.3164 14.45335084303502",
"1 24870U 97034B   22076.87878679  .00000281  00000+0  89736-4 0  9998",
"2 24870  86.4018  13.1469 0001144  28.2934 331.8325 14.36078704293102",
"1 24871U 97034C   22077.20192344  .00000277  00000+0  82043-4 0  9994",
"2 24871  86.4035 355.0549 0013075  39.9357 320.2801 14.39796448295965",
"1 24873U 97034E   22076.89520572  .00004363  00000+0  23405-3 0  9994",
"2 24873  86.3931 324.3675 0009979  91.3674 268.8710 15.14641857350035",
"1 24903U 97043A   22076.94288868  .00000233  00000+0  74166-4 0  9996",
"2 24903  86.3934 248.3508 0002241  88.4567 271.6886 14.35528671286343",
"1 24907U 97043E   22076.93568584  .00000225  00000+0  72834-4 0  9996",
"2 24907  86.3932 250.9577 0002068  94.0553 266.0880 14.34460118286505",
"1 24925U 97048A   22077.21956557  .00000234  00000+0  23897-4 0  9999",
"2 24925  86.3360 323.3593 0008401  42.5091 317.6782 14.85328786329103",
"1 24926U 97048B   22077.19257476  .00000224  00000+0  22926-4 0  9992",
"2 24926  86.3363 324.7742 0009487  49.6470 310.5581 14.85095421328905",
"1 24944U 97051A   22076.91765066  .00000249  00000+0  80652-4 0  9991",
"2 24944  86.3907 281.1898 0002085  97.5710 262.5723 14.34885551282945",
"1 24946U 97051C   22076.66917287  .00000193  00000+0  62377-4 0  9991",
"2 24946  86.3822 280.6825 0007893   6.8693 353.2609 14.33791785282532",
"1 24948U 97051E   22076.54963818  .00000241  00000+0  76570-4 0  9995",
"2 24948  86.3912 279.5412 0002189  80.0487 280.0957 14.35830109283351",
"1 24967U 97056C   22076.68853646  .00000252  00000+0  80167-4 0  9992",
"2 24967  86.3957 311.1797 0001823  87.7044 272.4361 14.35908606281739",
"1 25042U 97069D   22076.87418615  .00000392  00000+0  10302-3 0  9993",
"2 25042  86.3979 358.9482 0017260 307.9490  52.0152 14.46579620277199",
"1 25043U 97069E   22076.81793108  .00000262  00000+0  83035-4 0  9991",
"2 25043  86.4017  11.7965 0003166  61.5125 298.6391 14.36338736275430",
"1 25077U 97077A   22076.82298987  .00000304  00000+0  10050-3 0  9996",
"2 25077  86.4019  16.5369 0002490  75.1293 285.0179 14.34719725270872",
"1 25078U 97077B   22077.19975590  .00000261  00000+0  79014-4 0  9998",
"2 25078  86.4020   1.4860 0002047  30.1698 329.9617 14.38448253273015",
"1 25104U 97082A   22076.95108587  .00002469  00000+0  18836-3 0  9997",
"2 25104  86.3785 241.7403 0206361 305.1443  53.0595 14.86114204274191",
"1 25105U 97082B   22076.82486621  .00000303  00000+0  89636-4 0  9994",
"2 25105  86.3940 222.6245 0012782  42.4114 317.8071 14.40172948272237",
"1 25262U 98018A   22076.89317934  .00003708  00000+0  25545-3 0  9995",
"2 25262  86.3940 253.4372 0196162 278.9032  79.0035 14.91159158268229",
"1 25273U 98019B   22076.56240825  .00000204  00000+0  65452-4 0  9996",
"2 25273  86.3912 282.2753 0002076  91.2786 268.8648 14.34496987254465",
"1 25286U 98021B   22076.93717761  .00000234  00000+0  75206-4 0  9993",
"2 25286  86.4020 219.0568 0002141 100.0171 260.1267 14.34953005253518",
"1 25319U 98026A   22076.92643199  .00000249  00000+0  74332-4 0  9992",
"2 25319  86.3985 235.7506 0002096  29.3994 330.7322 14.38997165252239",
"1 25320U 98026B   22076.91802636  .00000259  00000+0  76756-4 0  9999",
"2 25320  86.3980 230.8261 0003718  65.9223 294.2365 14.39384318252729",
"1 25344U 98032C   22076.83297397  .00000310  00000+0  75900-4 0  9993",
"2 25344  86.4496 189.6545 0002447  83.3189 276.8294 14.49386257258477",
"1 25467U 98051A   22076.71839404  .00003459  00000+0  24859-3 0  9991",
"2 25467  86.3974 307.6942 0171846 318.4844  40.3433 14.92717666245224",
"1 25527U 98066A   22076.54051500  .00005537  00000+0  24594-3 0  9993",
"2 25527  85.5233  85.5727 0008838 161.9376 198.2182 15.21277588281528",
];

export default data;
