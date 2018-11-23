var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "184",
        "ko": "816"
    },
    "minResponseTime": {
        "total": "245",
        "ok": "245",
        "ko": "30109"
    },
    "maxResponseTime": {
        "total": "36969",
        "ok": "36969",
        "ko": "31414"
    },
    "meanResponseTime": {
        "total": "27231",
        "ok": "13845",
        "ko": "30250"
    },
    "standardDeviation": {
        "total": "7224",
        "ok": "7994",
        "ko": "178"
    },
    "percentiles1": {
        "total": "30147",
        "ok": "13749",
        "ko": "30159"
    },
    "percentiles2": {
        "total": "30206",
        "ok": "19282",
        "ko": "30307"
    },
    "percentiles3": {
        "total": "30600",
        "ok": "27141",
        "ko": "30622"
    },
    "percentiles4": {
        "total": "30760",
        "ok": "31126",
        "ko": "30759"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 175,
        "percentage": 18
    },
    "group4": {
        "name": "failed",
        "count": 816,
        "percentage": 82
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "21.277",
        "ok": "3.915",
        "ko": "17.362"
    }
},
contents: {
"req_home-page-93c4f": {
        type: "REQUEST",
        name: "home_page",
path: "home_page",
pathFormatted: "req_home-page-93c4f",
stats: {
    "name": "home_page",
    "numberOfRequests": {
        "total": "1000",
        "ok": "184",
        "ko": "816"
    },
    "minResponseTime": {
        "total": "245",
        "ok": "245",
        "ko": "30109"
    },
    "maxResponseTime": {
        "total": "36969",
        "ok": "36969",
        "ko": "31414"
    },
    "meanResponseTime": {
        "total": "27231",
        "ok": "13845",
        "ko": "30250"
    },
    "standardDeviation": {
        "total": "7224",
        "ok": "7994",
        "ko": "178"
    },
    "percentiles1": {
        "total": "30147",
        "ok": "13749",
        "ko": "30159"
    },
    "percentiles2": {
        "total": "30206",
        "ok": "19282",
        "ko": "30307"
    },
    "percentiles3": {
        "total": "30600",
        "ok": "27141",
        "ko": "30622"
    },
    "percentiles4": {
        "total": "30760",
        "ok": "31126",
        "ko": "30759"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 175,
        "percentage": 18
    },
    "group4": {
        "name": "failed",
        "count": 816,
        "percentage": 82
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "21.277",
        "ok": "3.915",
        "ko": "17.362"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
