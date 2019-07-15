function makeStatCountsRaisable() {
    var startDate = 1479900000000;//Nov 23 2016 11:20:00
    var no_sep = $.animateNumber.numberStepFactories.separator('');
    var comma_sep = $.animateNumber.numberStepFactories.separator(',');
    var space_sep = $.animateNumber.numberStepFactories.separator(' ');
    var money = $.animateNumber.numberStepFactories.separator('P');
    
    $(".count-users").hide();
    $(".js-count-trigger").viewportChecker({
        callbackFunction: function (elem, action) {
            var settings = getCountsSettings(startDate);
            setTimeout(function () {
                var countUsers = $('.count-users');
                countUsers.show();
                countUsers.animateNumber({number: settings.countUsers, numberStep: space_sep}, 2500, function () {
                    var reloadFunc = function () {
                        var sett = getCountsSettings(startDate);
                        countUsers.animateNumber({number: sett.countUsers, numberStep: space_sep}, 2000, function () {
                        });
                    };
                    reloadFunc();
                    setInterval(reloadFunc, 2000);
                });
            }, 100);
            
            setTimeout(function () {
                var earnNow = $('.now75');
                earnNow.show();
                earnNow.animateNumber({number: settings.earnNow, numberStep: space_sep}, 4000, function () {
                    var reloadFunc = function () {
                        var sett = getCountsSettings(startDate);
                        earnNow.animateNumber({number: sett.earnNow, numberStep: space_sep}, 3000, function () {
                        });
                    };
                    reloadFunc();
                    setInterval(reloadFunc, 3000);
                });
            }, 1500);
            setTimeout(function () {
                var earnNowTwo = $('.now1000');
                earnNowTwo.show();
                earnNowTwo.animateNumber({number: settings.earnNowTwo, numberStep: space_sep}, 4000, function () {
                    var reloadFunc = function () {
                        var sett = getCountsSettings(startDate);
                        earnNowTwo.animateNumber({number: sett.earnNowTwo, numberStep: space_sep}, 3000, function () {
                        earnNowTwo.text(earnNowTwo.text() + 'P');
                        });
                    };
                    reloadFunc();
                    setInterval(reloadFunc, 3000);
                });
            }, 2500);
            
            setTimeout(function () {
                var topUserOne = $('.topuser1');
                var moneyuser1 = $('.moneyuser1')
                topUserOne.show();
                moneyuser1.show();
                topUserOne.animateNumber({number: settings.topUserOne, numberStep: space_sep}, 4000, function () {
                    var reloadFunc = function () {
                        var sett = getCountsSettings(startDate);
                        topUserOne.animateNumber({number: sett.topUserOne, numberStep: space_sep}, 3000, function () { 
                            topUserOne.text(topUserOne.text() + 'Р');
                        });
                    };
                    reloadFunc();
                    setInterval(reloadFunc, 3000);
                });
            }, 3500);
            setTimeout(function () {
                var topUserTwo = $('.topuser2');
                var moneyuser1 = $('.moneyuser2')
                topUserTwo.show();
                topUserTwo.animateNumber({number: settings.topUserTwo, numberStep: space_sep}, 4000, function () {
                    var reloadFunc = function () {
                        var sett = getCountsSettings(startDate);
                        topUserTwo.animateNumber({number: sett.topUserTwo, numberStep: space_sep}, 3000, function () {
                        });
                    };
                    reloadFunc();
                    setInterval(reloadFunc, 3000);
                });
            }, 4500);
            setTimeout(function () {
                var topUserThree = $('.topuser3');
                var moneyuser1 = $('.moneyuser3')
                topUserThree.show();
                topUserThree.animateNumber({number: settings.topUserThree, numberStep: space_sep}, 4000, function () {
                    var reloadFunc = function () {
                        var sett = getCountsSettings(startDate);
                        topUserThree.animateNumber({number: sett.topUserThree, numberStep: space_sep}, 3000, function () {
                        });
                    };
                    reloadFunc();
                    setInterval(reloadFunc, 3000);
                });
            }, 5500);
            setTimeout(function () {
                var topUserFour = $('.topuser4');
                var moneyuser1 = $('.moneyuser4')
                topUserFour.show();
                topUserFour.animateNumber({number: settings.topUserFour, numberStep: space_sep}, 4000, function () {
                    var reloadFunc = function () {
                        var sett = getCountsSettings(startDate);
                        topUserFour.animateNumber({number: sett.topUserFour, numberStep: space_sep}, 3000, function () {
                        });
                    };
                    reloadFunc();
                    setInterval(reloadFunc, 3000);
                });
            }, 6500);
            setTimeout(function () {
                var topUserFive = $('.topuser5');
                var moneyuser1 = $('.moneyuser5')
                topUserFive.show();
                topUserFive.animateNumber({number: settings.topUserFive, numberStep: space_sep}, 4000, function () {
                    var reloadFunc = function () {
                        var sett = getCountsSettings(startDate);
                        topUserFive.animateNumber({number: sett.topUserFive, numberStep: space_sep}, 3000, function () {
                        });
                    };
                    reloadFunc();
                    setInterval(reloadFunc, 3000);
                });
            }, 7500);
        }
    });

}

function getCountsSettings(startDate) {
    var settings = {};
    var timeSinceCountDownStart = (new Date()).getTime() - startDate;
    settings.countUsers = 5500000 + Math.round(timeSinceCountDownStart / (1000 * 8));
    settings.earnNow = 44 + Math.round(timeSinceCountDownStart / (200000 * 200));
    settings.earnNowTwo = 120 + Math.round(timeSinceCountDownStart / (10000 * 200));
    settings.topUserOne = 4480 + Math.round(timeSinceCountDownStart / (11236 * 200));
    settings.topUserTwo = 3290 + Math.round(timeSinceCountDownStart / (12697 * 200));
    settings.topUserThree = 2180 + Math.round(timeSinceCountDownStart / (13354 * 200));
    settings.topUserFour = 1230 + Math.round(timeSinceCountDownStart / (14698 * 200));
    settings.topUserFive = 960 + Math.round(timeSinceCountDownStart / (16568 * 200));
    return settings;
}

$(document).ready(function () {
    makeStatCountsRaisable();
    var pageScrollHandlerExecuted = false;
    var pageScrollHandler = function () {
        if ($(window).scrollTop() > 20 && !pageScrollHandlerExecuted) {
            pageScrollHandlerExecuted = true;
        }
    };
    pageScrollHandler();
    $(window).scroll(pageScrollHandler);

});