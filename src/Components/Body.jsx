// Body.js
import React from 'react';

function Body({ 
    // todos os props de variaveis, sets e tudo que será usado 
  products, handleEdit, handleDelete, name, price, motor, ano, setName, setPrice,setMotor, setAno, editMode, handleSubmit 
}) {
  return (
    <main className="body">
      {/* Container dos cards */}
      <div className="container">

        {/* Card para a lista de produtos */}
        <div className="products-card">
          <h2>Lista de Carros</h2>
          <ul className="product-list">
            {products.map((product) => (          /*pra cada elemento da database*/
            //    pra o id do elemento 
              <li key={product.id} className="product-item"> 
                <div className="product-details">
               {/* crie um h3 com o nome na div */}
                  <h3>{product.name}</h3>  
                  {/* crie um preço com o price na div  */}
                  <p>R$ {product.price}</p>               
                  <p>Motor: {product.motor}</p>               
                  <p>Ano: {product.ano}</p>               
                </div>
                <div className="product-actions">
                  <button onClick={() => handleEdit(product)}>Editar</button>
                  <button onClick={() => handleDelete(product.id)}>Deletar</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Card para o formulário */}
        <div className='form-card'>
          <h2>{editMode ? "Editar Produto" : "Adicionar Produto"}</h2>
          <form onSubmit={handleSubmit}>
            {/* imput la embaixo criado para fazer o submit, que 
            atualiza o valor usando a função handlesubmit que ta no app  */}
            <label>
              Nome:
              <input
                type="text"
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                required
                minLength="3"
              />
            </label>
            <label>
              Preço:
              <input
                type="number"
                value={price}
                name='price'
                onChange={(e) => setPrice(e.target.value)}
                required
                
              />
            </label>
            <label>
              Ano:
              <input
                type="number"
                value={ano}
                name='ano'
                onChange={(e) => setAno(e.target.value)}
               
                
              />
            </label>
            <label>
              Motorização:
              <input
                type="text"
                value={motor}
                name='motor'
                onChange={(e) => setMotor(e.target.value)}
                
                
              />
            </label>
            <input type="submit" value={editMode ? "Atualizar" : "Criar"} />
          </form>
        </div>
      </div>
    </main>
  );
}

export default Body;