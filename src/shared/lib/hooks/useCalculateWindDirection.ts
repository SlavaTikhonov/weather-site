export const calculateWindDirection = (deg: number) => {
    if((350 <= deg && deg <= 360) || (0 <= deg && deg <= 10))
    {
        return "север"
    }
    if(10 < deg && deg < 80)
    {
        return "северо-восток"
    }
    if((80 <= deg && deg <= 100))
    {
        return "восток"
    }
    if((100 < deg && deg < 170))
    {
        return "юго-восток"
    }
    if((170 <= deg && deg <= 190))
    {
        return "юг"
    }
    if((190 < deg && deg < 260))
    {
        return "юго-запад"
    }
    if((260 <= deg && deg <= 280))
    {
        return "запад"
    }
    if((280 < deg && deg < 350))
    {
        return "северо-запад"
    }
}