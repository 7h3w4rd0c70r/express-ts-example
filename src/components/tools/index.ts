
export function getTimestamp() {
    const now = new Date()
    const houres = String(now.getHours())
    const minutes = String(now.getMinutes())
    const seconds = String(now.getSeconds())
    const timestamp = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${houres.length < 2 ? `0${houres}` : houres}:${minutes.length < 2 ? `0${minutes}` : minutes}:${seconds.length < 2 ? `0${seconds}` : seconds}`

    return timestamp
}

export function generateRandomAlphanumericString(numberOfChars: number = 8) {
    numberOfChars = Math.round(numberOfChars)
    if (numberOfChars < 0) {
        numberOfChars = 1
    }
    let output = ''
    const source = 'abcdefghijklmnopqrstuvwxyz0123456789'
	for (let i = 0; i < numberOfChars; i++) {
        output += source.charAt(Math.floor(Math.random() * source.length))
    }
	return output
}

export function createUUID(): string {
    return generateRandomAlphanumericString(24)
}
