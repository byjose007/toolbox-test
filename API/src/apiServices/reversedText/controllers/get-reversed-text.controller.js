exports.getReversedText = (req, res) => {
  if (req.query.text) {
    const originalText = req.query.text
    const reversedText = originalText.split('').reverse().join('')
    const isPalindromo = originalText.toLowerCase() === reversedText.toLowerCase()

    res.status(200).json({
      text: reversedText,
      palindromo: isPalindromo
    })
  } else {
    res.status(400).send({
      error: 'No text.'
    })
  }
}
