var hi='lIFe';
document.write(hi.toUpperCase());
document.write('<br>');
document.write(hi.toLowerCase());
document.write('<br>');
document.write(hi.startsWith('e'));
document.write('<br>');

var lol='I am excited to lern about coding';
var hg=new RegExp('coding');
var gt=hg.test(lol);
document.write(gt);