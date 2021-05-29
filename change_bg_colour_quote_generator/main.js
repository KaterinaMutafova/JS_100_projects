function changeBackground() {
    var body = document.getElementsByTagName("body")[0]
    const colors = ["hotPink", "deepPink", "darkSalmon", "lightCoral", "lightPink", "antiqueWhite", 
    "pink", "coral", "lightSalmon", "moccasin", "navajoWhite", "mistyRose", "peachPuff", "salmon"]
    index = Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[index]
    let quote = document.getElementById('quotetext')
    let quotes = ['"Work is the least important thing and family is the most important" ~ Jerry Seinfeld in TV Guide', 
    '"Courage  is not about being afraidq it is about understanding that something else is  more important than being afraid" ~ Galadriel',
    '"There is  no element of genious without some form of madness" ~ Leonardo Dicaprio',
    '"There are two kinds of women - the kind that drive a man to drink and  the kind that drive a man to do great things. If you found the  woman who could do both, that would be the one  to marry" ~ Caeria, FF.net'
];

    index_quote = Math.floor(Math.random() * quotes.length);
    chosen_quote = quotes[index_quote];
    quote.innerHTML = chosen_quote;
  


}