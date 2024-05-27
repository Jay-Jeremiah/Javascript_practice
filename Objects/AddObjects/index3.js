const Pc = {
    Name: 'Dell',
    Processor: 'Intel Core i5',
    RAM: '8GB',
    Storage: '256 SSD'
}

Pc.Generation = '8th Generation';

document.getElementById('demo').innerHTML = "The" + " " + Pc.Name + " " + "has" + " " + Pc.RAM + " " + "of speed";