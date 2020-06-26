$(document).ready(function() {
    //Slider
    if(window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200,
            responsive: true
          });
    }

    //Posts
    if(window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia id nihil illo 
                porro voluptas quod ab eius ex, dolorum eveniet esse, harum asperiores assumenda quos 
                molestias. Non, praesentium corrupti.`
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia id nihil illo 
                porro voluptas quod ab eius ex, dolorum eveniet esse, harum asperiores assumenda quos 
                molestias. Non, praesentium corrupti.`
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia id nihil illo 
                porro voluptas quod ab eius ex, dolorum eveniet esse, harum asperiores assumenda quos 
                molestias. Non, praesentium corrupti.`
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia id nihil illo 
                porro voluptas quod ab eius ex, dolorum eveniet esse, harum asperiores assumenda quos 
                molestias. Non, praesentium corrupti.`
            }
        ];

        posts.forEach((item, index) => {
            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer mas</a>
            </article>
            `;

            $("#posts").append(post);
        });
    }

    //Selector de tema
    var theme = $("#theme");
    $("#to-green").click(function() {
        theme.attr("href","css/green.css")
    });

    $("#to-red").click(function() {
        theme.attr("href","css/red.css")
    });

    $("#to-blue").click(function() {
        theme.attr("href","css/blue.css")
    });
    console.log(theme);

    //Scroll arriba de la web
    $(".subir").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //Login falso
    $("#login form").submit(function() {
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");
    if(form_name != null && form_name != undefined) {
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido " + form_name + "</strong>")
        .append('<br><a href="#" id="logout">Cerrar sesión</a>');
        $("#login").hide();
    }
    $("#logout").click(function (e) { 
        e.preventDefault();
        localStorage.removeItem("form_name");
        location.assign("http://localhost/JAVASCRIPT-MASTER/proyecto-js/");
        return false;
    });

    
    $("#acordeon").accordion();

    //Reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function () {
            var reloj = moment().format('hh:mm:ss');
            $("#reloj").html(reloj);
        }, 1000);
        $("#reloj").html(reloj);
    }
    
    //Validacion contacto
    if(window.location.href.indexOf('contact') > -1){
        $("form input[name = 'date']").datepicker({
            dateFormat: 'dd/mm/yy'
        });
        $.validate({
            lang:'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
    
});