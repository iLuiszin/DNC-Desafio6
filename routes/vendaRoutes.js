app.post('/criar', async (req, res) => {
  const { data, total, ClienteId, ProdutoId } = req.body

  if (!data || !total || !ClienteId || !ProdutoId) {
    return res
      .status(400)
      .json({ message: 'Data, total, ClienteId e ProdutoId são obrigatórios' })
  }

  const estoque = await Estoque.findOne({ where: { ProdutoId } })

  if (estoque.dataValues.quantidade < 1) {
    res.status(400).json({ message: 'Produto sem estoque' })
  }

  const venda = await Venda.create({ data, total, ClienteId, ProdutoId })

  await Estoque.update(
    { quantidade: estoque.dataValues.quantidade - 1 },
    { where: { ProdutoId } }
  )

  res.json(venda)
})
