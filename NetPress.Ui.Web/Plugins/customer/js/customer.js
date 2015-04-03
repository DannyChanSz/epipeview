
$(".nav li a,#down-button").click(function (e) {
    if (this.hash != "") {
        $('html,body').scrollTo(this.hash, this.hash, { gap: { x: 0, y: -60 } });
        e.preventDefault();
    }
    });
