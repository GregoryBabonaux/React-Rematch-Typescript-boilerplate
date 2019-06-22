module.exports = () => {
  const data = { sheeps: [] }
  for (let i = 0; i < 50; i++) {
    data.sheeps.push({ id: i, name: `sheep ${i}`, color: 'white' })
  }
  return data
}