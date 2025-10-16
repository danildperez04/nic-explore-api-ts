import vision from '@google-cloud/vision';

// Crea cliente de Vision API (asegúrate de tener GOOGLE_APPLICATION_CREDENTIALS configurado)
const client = new vision.ImageAnnotatorClient({
  keyFilename: process.env.VISION_FILE as string
});

async function landmarkDetection(file: any) {
  // imagenBuffer: Buffer de imagen recibida desde tu app móvil
  const [result] = await client.landmarkDetection('./' + file.path);
  const landmarks = result.landmarkAnnotations;

  if (!landmarks || landmarks.length === 0) {
    return { found: false, message: 'There isn\'t any reference point' };
  }

  // Take first result
  const landmark = landmarks[0];
  return {
    found: true,
    name: landmark?.description,
    location: landmark?.locations?.[0]?.latLng || null,
    trust: landmark?.score,
    details: landmark
  };
}

export default landmarkDetection;