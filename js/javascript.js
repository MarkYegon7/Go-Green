function dev(e, i) {

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

dev($("#south"), $("#prep"));
dev($("#west2"), $("#prep1"));
dev($("#north2"), $("#prep2"));