var x = [0,827,886,1488,1047,1813,1377,1199,1684,635,1088,753,1972,674,1979,591,1671,1693,667,1646,967,780,1338,689,1034,710,604,964,1320,1483,1876,1949,593,1060,819,1622,1928,1386,1664,1163,1629,621,1236,1959,1991,1071,762,987,1559,1850,962,1718,1149,575,1253,1781,1953,829,1192,1996,1273,1350,1212,1892,749,861,1208,1864,503,1317,1910,1281,1259,1568,1260,1985,1402,513,581,954,1895,1752,1115,1859,1961,1061,1379,989,1796,1374,1681,1480,1717,682,1050,1743,1977,1070,1725,1562,1597,1815,1360,1132,1492,738,894,1822,932,1689,1486,782,1731,695,620,560,1087,902,1216,935,1801,1055,741,1506,678,724,1167,1318,1367,1114,1108,1029,1438,549,1706,1594,1021,1263,511,781,633,551,528,976,840,775,1836,1191,1226,1862,865,1655,574,508,1798,1351,846,1941,739,630,937,1145,1255,707,916,785,1505,1485,1442,1421,1023,1694,1093,640,1588,1058,1912,1476,1669,1569,736,721,1036,1978,1434,1818,638,1151,1598,1631,553,817,735,523,1084,1707,1282,758,1902,926,1932,1565,901,970,1968,1948,1853,1736,1322,606,1403,797,1254,1005,696,1316,809,991,1692,716,1142,772,960,893,933,1344,1467,533,815,1123,856,602,1369,1237,1444,1370,1301,1283,1552,534,1774,790,990,531,1508,1096,676,1371,1435,1356,656,1525,1638,1422,1960,1083,1162,1446,1746,1268,808,1481,605,1515,884,1872,1852,830,836,1722,1893,1039,609,631,984,1025,1966,520,610,1127,717,700,1624,603,1720,1676,1264,1666,562,1206,1292,812,1657,1124,600,1075,766,1913,1239,1863,615,1134,519,1045,1235,1092,1992,554,1221,1879,1332,822,899,1887,1726,745,1085,1782,1917,1065,977,1558,1690,1823,559,1156,1314,582,514,1423,1973,1856,597,1256,1040,1130,1974,1473,1970,1463,1647,1161,860,1018,1062,1937,1080,1849,1131,1190,1376,1545,1373,598,675,1118,832,658,1721,1509,1500,928,516,876,784,1355,1727,1238,1519,807,1776,919,518,622,1289,1117,1626,718,1251,1396,1103,1533,1768,1443,750,542,1611,1633,1009,1744,652,583,1668,510,824,1750,1160,945,1907,1474,1775,1164,1874,572,754,988,1613,569,875,978,683,680,1663,1478,802,1931,1563,936,1250,1829,798,1650,704,869,1077,1437,1511,1052,1494,1554,1844,525,668,1969,1012,643,757,1997,1571,887,1387,765,1246,851,1682,1194,1924,1923,1091,1592,1390,1967,1951,1532,1155,1133,1883,872,1634,1595,1397,1908,1827,1449,1465,1048,878,1276,666,905,888,1719,693,1846,947,1901,1526,1193,1610,1556,773,909,968,1944,1637,1808,1678,1311,1385,1699,1605,1817,1816,1606,1144,1891,793,1015,1824,578,703];

for (let i = 1; i < 1000; i++) {
    const d = new Date();
    var date = d.getUTCDate();
    var day = d.getUTCDay() + 1;
    var year = d.getUTCFullYear();
    var month = d.getUTCMonth() + 1;
    var hour = d.getUTCHours();
    var min = d.getMinutes();
    if (min > 30) {
        min = 1;
    } else {
        min = 2;
    }
    var xx = day + year * month * date;
    xx = Math.pow(xx, hour * min);
    xx = xx * x[i];
    // xx = xx * 2 - 1;
    // xx = xx/2;

    if (i == 4 || i == 9 || i == 8 || i == 17 || i == 136 || i == 6 || i == 6 || i == 5 || i == 120 || i == 26 || i == 3 || i == 13 || i == 147) {
        xx = xx % 27;
        xx += 65;
    } else {
        xx = xx % 83;
        xx += 10;
    }
    const as = "percent-bar-" + i;
    const asd = "percent-txt-" + i;
    var percentTxt = document.getElementById("percent-txt-" + i);
    var bar = document.getElementById("percent-bar-" + i);
    const bartext = document.getElementById("card-title" + i);
    percentTxt.innerHTML = xx + "%";
    $("#percent-bar-" + i)
        .attr("aria-valuenow", xx)
        .css("width", xx + "%");
    if (xx < 30) {
        bar.classList.add("red");
    } else if (xx > 70) {
        bar.classList.add("green");
    } else {
        bar.classList.add("yellow");
    }
}
