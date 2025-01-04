// Base64 encoded Nepali font
export const NEPALI_FONT = 'BASE64_ENCODED_FONT_DATA';  // Replace with actual base64 font data

export const loadNepaliFont = (pdf) => {
  try {
    pdf.addFileToVFS('NepaliFont.ttf', NEPALI_FONT);
    pdf.addFont('NepaliFont.ttf', 'NepaliFont', 'normal');
    return true;
  } catch (error) {
    console.error('Error loading Nepali font:', error);
    return false;
  }
};
