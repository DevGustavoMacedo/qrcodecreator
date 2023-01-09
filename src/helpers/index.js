export const toDataURL = (url) =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(blob)
        })
    )

export const generateImage = (color, bg, site) => {
  color = color.replace('#', '')
  bg = bg.replace('#', '')

  return `https://api.qrserver.com/v1/create-qr-code/?size=400x400&bgcolor=${bg}&color=${color}&data=${site}`
} 