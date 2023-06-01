// Imports
const axios = require('axios')
const fs = require('fs');

// API key
const API_KEY = '6HRVWX1BF0TLLYBI82GWX' // Get your API key here: https://app.rytr.me/account/api-access

// API URL
const API_URL = 'https://api.rytr.me/v1'

// Language list
async function languageList() {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${API_URL}/languages`,
      headers: {
        Authentication: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    return data ? data.data : null
  } catch (error) {
    console.log(error)
  }

  return null
}

// Tone list
async function toneList() {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${API_URL}/tones`,
      headers: {
        Authentication: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    return data ? data.data : null
  } catch (error) {
    console.log(error)
  }

  return null
}

// Use case list
async function useCaseList() {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${API_URL}/use-cases`,
      headers: {
        Authentication: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    return data ? data.data : null
  } catch (error) {
    console.log(error)
  }

  return null
}

// Use case detail
async function useCaseDetail({ useCaseId }) {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${API_URL}/use-cases/${useCaseId}`,
      headers: {
        Authentication: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    return data ? data.data : null
  } catch (error) {
    console.log(error)
  }

  return null
}

// Generate content
async function ryte({ languageId, toneId, useCaseId, inputContexts }) {
  try {
    const { data } = await axios({
      method: 'post',
      url: `${API_URL}/ryte`,
      headers: {
        Authentication: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      data: {
        languageId,
        toneId,
        useCaseId,
        inputContexts,
        variations: 1,
        userId: 'USER1',
        format: 'html',
      },
    })

    return data ? data.data : null
  } catch (error) {
    console.log(error)
  }

  return null
}
// פונקציה שמגרילה שבלונה של מאמר על פי מילת מפתח
;async function generateContent() {
  const languageIdHebrew = '607c7c211ebe15000cbbc7b8';
  const useCaseBlogOutLineIdeaId = '60a40cf5da9d76000ccc2828';
  const useCaseBlogSectionWritingId = '60584cf2c2cdaa000c2a7954';
  const toneIdInformative = '60ff8d3afc873e000c08e8b2';

  const useCaseBlogOutLine = await useCaseDetail({ useCaseId: useCaseBlogOutLineIdeaId });
  const useCaseBlogSection = await useCaseDetail({ useCaseId: useCaseBlogSectionWritingId });

  const outputs1 = await ryte({
    languageId: languageIdHebrew,
    toneId: toneIdInformative,
    useCaseId: useCaseBlogOutLineIdeaId,
    inputContexts: {
      [useCaseBlogOutLine.contextInputs[0].keyLabel]: 'מנעולן באשדוד',
    },
  });
  //console.log("outputs1:", outputs1);
  // לקיחת את השבלונה של המאמר מי outputs1 בצורת HTML
  const htmlContent = `<h1 style=";text-align:right;direction:rtl">נושא הבלוג:</h1><h3style=";text-align:right;direction:rtl"> המדריך האולטימטיבי למציאת המנעולנים הטובים ביותר באשדוד לכל צרכי הביטחון שלך</h3><h3 style=";text-align:right;direction:rtl"> מתווה הבלוג:</h3><h3 style=";text-align:right;direction:rtl"> הקדמה: מהו מנעולן ולמה צריך אחד כזה?</h3><p style=";text-align:right;direction:rtl"> <em>מילות מפתח: מנעולן, אשדוד, אבטחה, תיקון מנעולים)</em></p><h3 style=";text-align:right;direction:rtl"> סקירה של אשדוד ושירותי המנעולנות שלה</h3><p style=";text-align:right;direction:rtl"> <em>מילות מפתח: מנעולנים אשדוד, שירותי מנעולים באשדוד, מנעולן בקרבתי)</em></p><h3 style=";text-align:right;direction:rtl"> כיצד לבחור את המנעולן המתאים לצרכי האבטחה שלך</h3><p style=";text-align:right;direction:rtl"> <em>מילות מפתח: מנעולן חירום, מנעולן מורשה, מנעולן מבוטח)</em></p><h3 style=";text-align:right;direction:rtl"> 5 טיפים חיוניים בבחירת מנעולן באשדוד</h3><p style=";text-align:right;direction:rtl"> <em>מילות מפתח: איך למצוא מנעולן טוב, שירותי מנעולן אמין באשדוד, שירות תיקון מנעולים מוכר)</em></p><h3 style=";text-align:right;direction:rtl"> 5 מנעולנים בדירוג הגבוה ביותר באשדוד שכדאי לקחת בחשבון לעבודת תיקון המנעולים הבאה שלך</h3><p style=";text-align:right;direction:rtl"> <em>מילות מפתח: המפתח הטוב ביותר</em></p><p style=";text-align:right;direction:rtl"></p><p style="color: grey;text-align:right;direction:rtl"> <em>💡 טיפ: כדי לכתוב תוכן ידידותי לקידום אתרים, בחר כל כותרת מקטע יחד עם מילות מפתח והשתמש באפשרות &quot;פסקה&quot; מהרצועה. יותר תיאורי הכותרות עם מילות מפתח, יותר טוב.</em> <a href='https://rytr.me/resources#how-to-write-long-form-blogs-amp-articles-using-rytr'><em>למידע נוסף →</em></a></p> `;
  
  const regex = /<h3 style="[\s\S]*?>([\s\S]*?)<[\s\S]*?<p style="[\s\S]*?>\W....([\s\S]*?)</g;
  const regexP = /<p style="[\s\S]*?>\W....([\s\S]*?)</g;
  const regexH1 = /<h1 style="[\s\S]*?([\s\S]*?)<\b/;
 
  
  let match;
  let index = 1;
  let st = "";
  while ((match = regex.exec(htmlContent)) !== null) {
    const head = match[1].trim();
    const words = match[2].trim();
  
    const outputs = await ryte({
      languageId: languageIdHebrew,
      toneId: toneIdInformative,
      useCaseId: useCaseBlogSectionWritingId,
      inputContexts: {
        [useCaseBlogSection.contextInputs[0].keyLabel]: head,
        [useCaseBlogSection.contextInputs[1].keyLabel]: words,
      },
    });
    st += outputs[0].text;
  
    index++;
  }
  
  let modifiedHtmlContent = htmlContent.replace(regexH1, '');
  modifiedHtmlContent = modifiedHtmlContent.replace(regexP, `<p>${st}`);
  fs.writeFile('modified.html', modifiedHtmlContent, (err) => {
    if (err) {
      console.error('Error saving the modified HTML:', err);
    } else {
      console.log('Modified HTML content saved successfully!');
    }
  });}

generateContent();
