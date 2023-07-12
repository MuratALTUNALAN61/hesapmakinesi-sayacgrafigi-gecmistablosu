var sayac= 
{
    toplasayac : 0,
    cıkarsayac : 0,
    carpsayac : 0,
    bolsayac : 0,
}

var islemler=
{
    data : 
    [
        
    ]
}

function toplama() 
{
    sayac.toplasayac++;
    var sayi1 = parseFloat(document.getElementById("sayi1").value);
    var sayi2 = parseFloat(document.getElementById("sayi2").value);

    var sonuc = sayi1 + sayi2;

    console.log(sayi1 + ' ve ' + sayi2 + ' sayılarının toplamı : ' + sonuc);
    document.getElementById("son").value = sonuc;

    var islem=
    {
        a: sayi1,
        b: '+',
        c: sayi2,
        d: '=',
        e: sonuc
    }
    islemler.data.push(islem);

}

function cıkarma()
{
    sayac.cıkarsayac++;
    var sayi1 = parseFloat(document.getElementById("sayi1").value);
    var sayi2 = parseFloat(document.getElementById("sayi2").value);

    var sonuc = sayi1 - sayi2;

    console.log(sayi1 + ' ve ' + sayi2 + ' sayılarının farkı : ' + sonuc);
    document.getElementById("son").value = sonuc;

    var islem=
    {
        a: sayi1,
        b: '-',
        c: sayi2,
        d: '=',
        e: sonuc
    }
    islemler.data.push(islem);
}

function carpma()
{
    sayac.carpsayac++;
    var sayi1 = parseFloat(document.getElementById("sayi1").value);
    var sayi2 = parseFloat(document.getElementById("sayi2").value);

    var sonuc = sayi1 * sayi2;

    console.log(sayi1 + ' ve ' + sayi2 + ' sayılarının çarpımı : ' + sonuc);
    document.getElementById("son").value = sonuc;

    var islem=
    {
        a: sayi1,
        b: '*',
        c: sayi2,
        d: '=',
        e: sonuc
    }
    islemler.data.push(islem);
}

function bolme()
{
    sayac.bolsayac++;
    var sayi1 = parseFloat(document.getElementById("sayi1").value);
    var sayi2 = parseFloat(document.getElementById("sayi2").value);

    var sonuc = sayi1 / sayi2;

    console.log(sayi1 + ' ve ' + sayi2 + ' sayılarının bölümü : ' + sonuc);
    document.getElementById("son").value = sonuc;

    var islem=
    {
        a: sayi1,
        b: '/',
        d: '=',
        c: sayi2,
        e: sonuc
    }

    islemler.data.push(islem);
}

function sayma()
{
    console.log('Toplama işlemi ' + sayac.toplasayac + ' kere tekrarlandı \n'+
    'Çıkarma işlemi ' + sayac.cıkarsayac + ' kere tekrarlandı \n'+
    'Çarpma işlemi ' + sayac.carpsayac + ' kere tekrarlandı \n'+
    'Bölme işlemi ' + sayac.bolsayac + ' kere tekrarlandı');
}

function dataolustur()
{
    for(i=0;i<islemler.data.length;i++)
    console.log(islemler.data[i]);
}

function grafik()
{
    var data = {
        labels: ['Tekrarlanan toplama işlemi', 'Tekrarlanan çıkarma işlemi', 'Tekrarlanan çarpma işlemi', 'Tekrarlanan bölme işlemi'],
        datasets: [{
            data: [sayac.toplasayac, sayac.cıkarsayac, sayac.carpsayac, sayac.bolsayac],
            backgroundColor: ['red', 'blue', 'yellow', 'green'],
        }]
    };
    
    var options = {
        responsive: true,         
        maintainAspectRatio: true,
        
    };
    
    var pieChartCanvas = document.getElementById('pieChart').getContext('2d');
    var piechart = {
        type: 'pie',
        data: data,
        options: options
    };
    var pieChart = new Chart(pieChartCanvas, piechart);
}

function historytable()
{
  var table = document.getElementById("hisTable");
  table.innerHTML = "";
  
  for (var i = 0; i < islemler.data.length; i++) 
  {
    var dataRow = table.insertRow();

    var cell1 = dataRow.insertCell();
    var cell2 = dataRow.insertCell();
    var cell3 = dataRow.insertCell();
    var cell4 = dataRow.insertCell();
    var cell5 = dataRow.insertCell();

    cell1.innerHTML = islemler.data[i].a;
    cell2.innerHTML = islemler.data[i].b;
    cell3.innerHTML = islemler.data[i].c;
    cell4.innerHTML = islemler.data[i].d;
    cell5.innerHTML = islemler.data[i].e;
  }
}