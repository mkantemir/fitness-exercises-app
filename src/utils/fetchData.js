export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "4fefc7be29mshbe406c719e549a2p1ab431jsn092a5cedb0f6",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4fefc7be29mshbe406c719e549a2p1ab431jsn092a5cedb0f6',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

//fonsiyon iki parametre alıyor, url: apinin adresi, options: egzersiz opsiyonları
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
