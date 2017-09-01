export default function checkInit(component) {
  if (!component.stripeInitialized) {
    throw new Error(`You should call init first.\nRead more https://github.com/tipsi/tipsi-stripe#usage`)
  }
}
