let names = ['Ondřej', 'Michal', 'Barbora', 'Jana', 'Vendula' ];

names.forEach((name) => {
    $('ul').append('<li>' + name + '</li>');
});
$('li:last-child').css('font-weight', 'bold');

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};
$('body').append('<h2>Added with javascript</h2>');
$('body').append('<p>This block was added using JavaScript´s jQuery library. How awesome!');