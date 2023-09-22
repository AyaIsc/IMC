function montrerTaille() {
    const t = $("[name=taille]").val(); // recup la taille
    const p = $("[name=poids]").val(); // recup poids
    const imc = Math.round(p / ((t * t)) * 10) / 10;
    const imcPrec = +localStorage.getItem("imc");
    

    if (imc < 16.5) {
        description = " , Vous êtes en dénutrition";
        $('.emphasized').removeClass('emphasized');
        $("#denutrition").addClass("emphasized");
    }
    if (imc >= 16.5 && imc < 18.5) {
        description = " , Vous êtes en maigreur ";
        $('.emphasized').removeClass('emphasized');
        $("#maigreur").addClass("emphasized");
    }
    if (imc >= 18.5 && imc < 25) {
        description = " , Vous avez un poids normal";
        $('.emphasized').removeClass('emphasized');
        $("#normal").addClass("emphasized");
    }
    if (imc >= 25 && imc < 30) {
        description = " , vous êtes en surpoids";
        $('.emphasized').removeClass('emphasized');
        $("#surpoids").addClass("emphasized");
    }
    if (imc >= 30 && imc < 35) {
        description = " , vous êtes en obésité modérée";
        $('.emphasized').removeClass('emphasized');
        $("#obesite").addClass("emphasized");
    }
    if (imc >= 35 && imc < 40) {
        description = " , vous êtes en obésité sévère";
        $('.emphasized').removeClass('emphasized');
        $("#severe").addClass("emphasized");
    }
    if (imc >= 40) {
        description = " , vous êtes en obésité morbide/massive";
        $('.emphasized').removeClass('emphasized');
        $("#morbide").addClass("emphasized");
    }

    // $("#resultat").text("avec votre taille (" + t + "m) et votre poids (" + p + "kgs), votre imc est de : " + imc + description);

    $(".result").removeClass("hidden");
    $(".resultat-imc").text(imc);
    $(".resultat-poids").text(p);
    $(".resultat-taille").text(t);
    $(".resultat-sante").text(description);
    $(".imc-precedent").text(imcPrec);
    $(".compare").text(imc - imcPrec);
    $(".days").text(jourStorage);
    $(".month").text(monthStorage);
}
const date = new Date;
const jours = date.getDate();
const mois = date.getMonth() + 1;
const jourStorage = +localStorage.getItem("jourS");
const monthStorage = +localStorage.getItem("monthS");

function enregistrer() {
    const imc = $(".resultat-imc").eq(0).text();
    localStorage.setItem("imc", imc);

    localStorage.setItem("jourS", jours);
    localStorage.setItem("monthS", mois);
    //$(".date").text(datePrec);
}


function PoidsMinMax(imcVar, id) {
    const t = $("[name=taille]").val(); // recup la taille
    const imcRound = Math.round((t * t) * imcVar);
    $(id).text(imcRound);
}

function poidsDiff() {
    PoidsMinMax(16.5, "#denutp");
    PoidsMinMax(16.5, "#maigreurA");

    PoidsMinMax(18.5, "#maigreurB");
    PoidsMinMax(18.5, "#normalA");

    PoidsMinMax(25, "#normalB");
    PoidsMinMax(25, "#surpoidsA");

    PoidsMinMax(30, "#surpoidsB");
    PoidsMinMax(30,"#obeseA");

    PoidsMinMax(35, "#obeseB");
    PoidsMinMax(35,"#severeA");

    PoidsMinMax(40,"#severeB");
    PoidsMinMax(40,"#morbide");
}

function afficherTab() {
    $(".tabNutrition").removeClass("hidden");
}

$(() => {
    $("#montrer").on("click", montrerTaille);
    $("#enregistrer").on("click", enregistrer);
    $("#montrer").on("click", afficherTab);
    $("#montrer").on("click", poidsDiff);
});
