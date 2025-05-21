import puppeteer from 'puppeteer';
import {NextApiRequest, NextApiResponse} from 'next';
import ejs from 'ejs';

// Dati di esempio
import {heroData, aboutData, skills, experience, education, contact, portfolioItems} from '../../data/data';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Costruisci l'URL di base per accedere alle risorse pubbliche
    const host = req.headers.host;
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const baseUrl = `${protocol}://${host}`;

    // URL del template e dell'immagine
    const templateUrl = `${baseUrl}/templates/resumeTemplate.ejs`;
    const heroImageUrl = `${baseUrl}/images/profilepic.jpg`;

    // Recupera il template dal server
    const templateResponse = await fetch(templateUrl);
    if (!templateResponse.ok) throw new Error('Errore nel recupero del template');
    const templateContent = await templateResponse.text();
    console.log('Template recuperato con successo.');

    // Recupera l'immagine dal server
    const heroImageResponse = await fetch(heroImageUrl);
    if (!heroImageResponse.ok) throw new Error("Errore nel recupero dell'immagine");
    const heroImageBuffer = await heroImageResponse.arrayBuffer();
    const heroImageBase64 = `data:image/jpeg;base64,${Buffer.from(heroImageBuffer).toString('base64')}`;
    console.log('Immagine convertita in Base64 con successo.');

    console.log(portfolioItems);

    // TODO per riattivare la sezione portfolio deccomenta linea 35 e commenta linea 36
    // const portfolio = portfolioItems;
    const portfolio: [] = [];

    const website: string = heroData.website;

    // Passa i dati al template EJS
    const html = await ejs.render(templateContent, {
      heroData: {...heroData, imageSrc: heroImageBase64}, // Usa il Data URI
      aboutData,
      skills,
      experience,
      education,
      contact,
      portfolio,
      website,
    });

    console.log('HTML Renderizzato con successo.');

    // Avvia Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'], // Necessario per ambienti Linux
    });
    const page = await browser.newPage();

    // Imposta il contenuto HTML nella pagina
    await page.setContent(html, {waitUntil: 'domcontentloaded'});

    // Genera il PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
    });

    console.log('PDF generato con successo. Dimensione:', pdfBuffer.length);

    // Chiudi il browser
    await browser.close();

    // Invia il PDF come risposta
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=Resume_${heroData.name}.pdf`);
    res.end(pdfBuffer); // Usa `end` per inviare il buffer binario
  } catch (error) {
    console.error('Errore durante la generazione del PDF:', error);
    res.status(500).send('Errore durante la generazione del PDF.');
  }
}
