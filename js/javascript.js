function dev(e, i, f, g, h, j) {

    $(document).ready(function() {
        e.click(function() {
            e.hide(1000);
            i.show(1000);
        });
        i.click(function() {
            e.show(1000);
            i.hide(1000);
        });


    });
}
dev($("#eastA"), $("#image1"));
dev($(".kenyat"), $("#image2"));
dev($(".ug"), $("#image3"));
dev($(".tz"), $("#image4"));
dev($(".central"), $("#image5"));
dev($(".dr-co"), $("#image6"));

$(document).ready(function() {
    i.click(function() {
        i.toggle();
        p.toggle();
    });
    p.click(function() {
        i.toggle();
        p.toggle();
    });
});
}

dev($("#south"), $("#imageon"));



function dev(i, p) {

    $(document).ready(function() {
        i.click(function() {
            i.toggle();
            p.toggle();
        });
        p.click(function() {
            i.toggle();
            p.toggle();
        });
    });
}

dev($("#west2"), $("#imageon2"));


function dev(i, p) {

    $(document).ready(function() {
        i.click(function() {
            i.toggle();
            p.toggle();
        });
        p.click(function() {
            i.toggle();
            p.toggle();
        });
    });
}

dev($("#north2"), $("#imageon3"));