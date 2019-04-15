// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "_Tarjeta de presentación",
    about: "Tarjetas de acrilico desarrolladas como exploración en tecnología de corte láser.",
}, {
    figure: "media/foto-02.jpg",
    title: "_Bagdad",
    about: "Representación 3d sobre la experimentación de volumen en base a polímeros y flujos de aire.",
}, {
    figure: "media/foto-03.jpg",
    title: "_Dorso",
    about: "Botella con 0 pérdida de atención, pensada para conductores del transporte público y la ingesta de líquido vertical.",
}, {
    figure: "media/foto-04.jpg",
    title: "_Triza",
    about: "Cóctel ahumado servido en un vaso de hielo.",
}, {
    figure: "media/foto-05.jpg",
    title: "_Maniobra H",
    about: "Dispositivo médico para realización de la Maniobra Heimlich.",
}, {
    figure: "media/foto-06.jpg",
    title: "_Fotografía",
    about: "Serie de experimentación y tratamiento digital en base a fotografías análogas.",
}, {
    figure: "media/foto-07.jpg",
    title: "_Tie Fighter",
    about: "Planimetría y modelado 3D - línea de cazas imperiales.",
}, {
    figure: "media/foto-08.jpg",
    title: "_Cu",
    about: "Lámpara contruida a partir de alambre de cobre y cristales azules.",

  }, {
      figure: "media/foto-09.jpg",
      title: "_Processing",
      about: "Representación interactiva trabajada en processing, sobre cómo los giros oceánicos inciden en la contaminación de costas en Isla de Pascua",

}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';

    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
