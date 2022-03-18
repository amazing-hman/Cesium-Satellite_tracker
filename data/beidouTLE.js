const data = [
"1 36287U 10001A   22076.89782602 -.00000281  00000+0  00000+0 0  9997",
"2 36287   1.9218  48.5010 0002663   5.7167 224.8657  1.00273993 44590",
"1 36828U 10036A   22076.73229059 -.00000148  00000+0  00000+0 0  9993",
"2 36828  54.1920 177.0698 0027575 183.1860 187.3398  1.00272765 42668",
"1 37210U 10057A   22076.90175083 -.00000113  00000+0  00000+0 0  9990",
"2 37210   1.0058  55.6313 0003433 147.5225  96.9351  1.00271520 41715",
"1 37256U 10068A   22077.22080704 -.00000164  00000+0  00000+0 0  9999",
"2 37256  50.3732 290.7368 0017909 182.8448 250.3033  1.00278657 41233",
"1 37384U 11013A   22077.22808829 -.00000154  00000+0  00000+0 0  9997",
"2 37384  60.1645  55.1581 0019397 196.1543 115.3177  1.00279970 40107",
"1 37763U 11038A   22077.22640194 -.00000082  00000+0  00000+0 0  9994",
"2 37763  54.4760 179.5476 0090594 226.0222 303.8407  1.00254252 39082",
"1 37948U 11073A   22076.36565257 -.00000112  00000+0  00000+0 0  9992",
"2 37948  50.4889 290.3784 0077015 217.7256 254.3959  1.00273966 37832",
"1 38091U 12008A   22077.18938322  .00000057  00000+0  00000+0 0  9996",
"2 38091   1.3647  64.7678 0014359 315.7442 282.0176  1.00277313 36919",
"1 38250U 12018A   22076.18975563 -.00000080  00000+0  00000+0 0  9998",
"2 38250  56.7179 356.6074 0022736 257.9079  13.9334  1.86234344 67365",
"1 38251U 12018B   22076.43149395 -.00000079  00000+0  00000+0 0  9991",
"2 38251  56.6359 355.9301 0013344 264.6308 213.5503  1.86234536 67375",
"1 38775U 12050B   22077.15708163  .00000058  00000+0  00000+0 0  9998",
"2 38775  55.3459 114.7579 0014414 318.4460 122.8385  1.86231289 64769",
"1 38953U 12059A   22076.88657487 -.00000177  00000+0  00000+0 0  9999",
"2 38953   1.7608  84.5610 0013228 287.9325 206.1672  1.00273289 34348",
"1 40549U 15019A   22076.80148516 -.00000136  00000+0  00000+0 0  9997",
"2 40549  52.0408 313.8194 0035329 189.1326  55.6617  1.00261874 25516",
"1 40748U 15037A   22076.73028726 -.00000078  00000+0  00000+0 0  9995",
"2 40748  55.8909 354.8422 0005493   1.3332 226.7325  1.86233261 45202",
"1 40749U 15037B   22076.35938049 -.00000079  00000+0  00000+0 0  9993",
"2 40749  55.8943 354.8442 0006637 333.1486 141.1472  1.86232447 45196",
"1 40938U 15053A   22076.42531500 -.00000091  00000+0  00000+0 0  9994",
"2 40938  51.6430 276.9258 0043743 192.5609 314.4370  1.00267173 23786",
"1 41434U 16021A   22077.23024105 -.00000116  00000+0  00000+0 0  9998",
"2 41434  57.9672  53.7749 0043376 219.9612  78.3995  1.00260043 21912",
"1 41586U 16037A   22077.24316234 -.00000354  00000+0  00000+0 0  9995",
"2 41586   1.7734  68.3038 0008683 356.5071 308.9571  1.00277565 21221",
"1 43001U 17069A   22076.80100822  .00000058  00000+0  00000+0 0  9990",
"2 43001  55.4990 114.7582 0011451 286.9850  71.7600  1.86231623 29688",
"1 43002U 17069B   22076.73393745  .00000058  00000+0  00000+0 0  9991",
"2 43002  55.4992 114.7959 0009287 305.3553  51.5646  1.86231372 29675",
"1 43107U 18003A   22077.18319844 -.00000078  00000+0  00000+0 0  9997",
"2 43107  55.3398 355.7856 0005146  39.3890  64.7646  1.86232402 28457",
"1 43108U 18003B   22077.17565749 -.00000078  00000+0  00000+0 0  9994",
"2 43108  55.3334 355.7753 0003084 275.6032 227.8944  1.86230845 28458",
"1 43207U 18018A   22075.79678237  .00000055  00000+0  00000+0 0  9997",
"2 43207  55.4578 114.9087 0006324 321.6274  38.4179  1.86231634 27816",
"1 43208U 18018B   22076.40037792  .00000058  00000+0  00000+0 0  9995",
"2 43208  55.4578 114.8933 0009519 295.8338  64.1594  1.86231678 27824",
"1 43245U 18029A   22076.53144083 -.00000079  00000+0  00000+0 0  9998",
"2 43245  55.2581 353.5811 0001502 345.6250 311.9169  1.86232457 26977",
"1 43246U 18029B   22077.41270366 -.00000076  00000+0  10000-3 0  9993",
"2 43246  55.2547 353.5821 0005333 355.2187 219.6349  1.86232974 26982",
"1 43539U 18057A   22076.77822128 -.00000148  00000+0  00000+0 0  9991",
"2 43539  55.0746 176.5176 0045966 224.0075 165.7467  1.00285802 13596",
"1 43581U 18062A   22076.39374512  .00000027  00000+0  00000+0 0  9996",
"2 43581  54.3054 235.2353 0001847 317.8266 144.6159  1.86231828 24713",
"1 43582U 18062B   22077.08342962  .00000029  00000+0  00000+0 0  9990",
"2 43582  54.3054 235.2009 0006298  24.0831 272.4708  1.86232103 24720",
"1 43602U 18067A   22076.57485843  .00000027  00000+0  00000+0 0  9995",
"2 43602  54.3864 233.8252 0007628  15.3087 341.8286  1.86231633 24202",
"1 43603U 18067B   22076.67399674  .00000027  00000+0  00000+0 0  9993",
"2 43603  54.3836 233.7892 0004628  10.7090 323.2892  1.86231579 24229",
"1 43622U 18072A   22077.21862887  .00000058  00000+0  00000+0 0  9996",
"2 43622  55.4249 114.4192 0008056 281.9539  86.7468  1.86231498 23754",
"1 43623U 18072B   22077.17304980  .00000058  00000+0  00000+0 0  9997",
"2 43623  55.4259 114.4132 0005795 301.1283 127.2473  1.86231498 23755",
"1 43647U 18078A   22077.00760671 -.00000078  00000+0 -72319+0 0  9990",
"2 43647  55.1525 353.7333 0007747 359.7683 213.1299  1.86232978 23257",
"1 43648U 18078B   22077.15848750 -.00000077  00000+0  00000+0 0  9998",
"2 43648  55.1493 353.7338 0005627   7.0046 215.0094  1.86232188 23277",
"1 43683U 18085A   22077.25655772 -.00000279  00000+0  00000+0 0  9990",
"2 43683   0.8392 182.4964 0002174 328.0443 257.6485  1.00274384 12492",
"1 43706U 18093A   22076.97922152  .00000029  00000+0  00000+0 0  9994",
"2 43706  54.3883 235.0935 0007446 279.8604  80.0070  1.86231797 22617",
"1 43707U 18093B   22076.33907991  .00000027  00000+0  00000+0 0  9997",
"2 43707  54.3885 235.1059 0006549 315.2463  66.5674  1.86232324 22615",
"1 44204U 19023A   22076.82211501 -.00000185  00000+0  00000+0 0  9999",
"2 44204  56.4283  53.9518 0020406 205.7843 330.3998  1.00286027 10794",
"1 44231U 19027A   22077.28407063 -.00000248  00000+0  00000+0 0  9994",
"2 44231   0.6475  71.0536 0004805 144.7492 206.8168  1.00271482 10511",
"1 44337U 19035A   22076.88011154 -.00000150  00000+0  00000+0 0  9999",
"2 44337  55.1130 172.5409 0022591 191.0428 247.5813  1.00281124 10134",
"1 44542U 19061A   22076.37776601  .00000028  00000+0  00000+0 0  9998",
"2 44542  54.6142 235.2378 0007892 351.7695   8.1710  1.86231221 16870",
"1 44543U 19061B   22076.50404204  .00000028  00000+0  00000+0 0  9991",
"2 44543  54.6118 235.2036 0005120 352.2071   3.5764  1.86231660 16865",
"1 44709U 19073A   22076.37561900 -.00000133  00000+0  00000+0 0  9998",
"2 44709  57.4122 297.3364 0020425 172.0528 319.9112  1.00284242  8882",
"1 44793U 19078A   22075.80354826 -.00000082  00000+0  10000-3 0  9998",
"2 44793  55.0018 353.8068 0007504   4.4656  75.2030  1.86232114 15722",
"1 44794U 19078B   22076.51110266 -.00000079  00000+0  00000+0 0  9997",
"2 44794  54.9756 353.7754 0005425   0.6002 104.9483  1.86232971 15738",
"1 44864U 19090A   22077.13576061  .00000058  00000+0  00000+0 0  9993",
"2 44864  55.3591 114.6381 0018209 268.6758  90.1817  1.86231795 15321",
"1 44865U 19090B   22077.00188081  .00000058  00000+0  00000+0 0  9991",
"2 44865  55.3619 114.6737 0016496 281.6512  77.3301  1.86231768 15298",
"1 45344U 20017A   22076.88578991 -.00000143  00000+0  00000+0 0  9999",
"2 45344   2.1347 347.5810 0002800  69.3554 157.4006  1.00271659  7695",
"1 45807U 20040A   22077.39418794 -.00000357  00000+0  00000+0 0  9997",
"2 45807   1.6461 300.9971 0008563 339.7524 147.5518  1.00279744  6526",
];

export default data;
