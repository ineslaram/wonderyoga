export default (value) => {
  const dateLong = new Date(value)
  return dateLong.toLocaleString(['es-ES'], {month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'})
}