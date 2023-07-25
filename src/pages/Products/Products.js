import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../stylization/css/index_light_n_dark.css';
import jogada from '../../stylization/imgs/jogada.jpeg';
import temperamentos from '../../stylization/imgs/temperamentos.jpeg';
import inteligencia from '../../stylization/imgs/inteligencia.jpeg';
import analise from '../../stylization/imgs/analise.jpeg';
import economia from '../../stylization/imgs/economia.jpeg';
import programacao from '../../stylization/imgs/programacao.jpeg';
import bag from '../../stylization/icons/bag.png';
/* import bag_cheia from '../../stylization/icons/bag_cheia.png'; */


export default function Products({ addToCart }) {
  const [products] = useState([
    { id: 1, img: jogada, title: 'Jogada de Mestre', price: 70.00, description: 'Um guia prático que irá revolucionar a forma como você negocia e toma decisões em uma negociação! Quem já se sentiu vulnerável após uma negociação, ao perceber que não reconheceu alguma tática aplicada pelo outro negociador? Assim como no jogo de xadrez, as táticas de negociação são práticas intencionais adotadas com a finalidade de produzir efeitos desejados e pré-determinados na parte com quem se está negociando.' },
    { id: 2, img: temperamentos, title: 'Os Quatro Temperamentos nos Estudos', price: 50.00, description: 'O livro Os quatro temperamentos nos estudos é uma obra obrigatória para estudantes, vestibulandos, concurseiros e universitários. Entender e conhecer seu temperamento irá guiar você por uma vida de estudos direcionada, menos ansiosa e mais proveitosa. Você será apresentado a dicas direcionadas para cada tipo de estudante, técnicas de estudo com validação científica e a experiência de um professor que ajuda milhares de alunos diariamente em suas redes sociais.' },
    { id: 3, img: inteligencia, title: 'Inteligência Atitudinal', price: 60.00, description: 'Este livro pode ser um grande alerta e uma grande ajuda na sua transformação. A Inteligência Atitudinal nos mostra que o mundo não é dos que falam, é dos que agem! Mas como sair da procrastinação, ter disciplina e agir? Aqui você encontrará 5 pilares. Se seguir com atitude, vai transformar a sua vida, como eu transformei a minha e, consequentemente, da minha família e pessoas que convivem comigo, assim como ajudei os meus clientes que buscam essa transformação' },
    { id: 4, img: analise, title: 'Análise de Circuitos', price: 160.00, description: 'Totalmente atualizada, a nova edição de Introdução à análise de circuitos traz exemplos e problemas inéditos que, junto com uma abordagem teórica altamente didática, enriquecem a obra com aplicações práticas em MultiSim® e PSpice®. Além disso, mostrando total sintonia com as novidades da área, o livro apresenta tópicos recentes, como memristores, touchpads de computadores, iluminação fluorescente versus incandescente, medidores de carga, baterias de íon-lítio e células de combustível. Tudo isso deixa claro por que Introdução à análise de circuitos é referência na área e, portanto, imprescindível para estudantes de engenharia e tecnologia, bem como de profissionais que atuam nesses setores.' },
    { id: 5, img: programacao, title: 'Programação Orientada a Objetos', price: 80.00, description: 'Aprenda de forma prática e descomplicada o paradigma da orientação a objetos por meio da linguagem de programação Python. Obra com abordagem autodidata prática, totalmente exemplificado e com explicações para cada linha de código.' },
    { id: 6, img: economia, title: 'Princípio de Economia', price: 200.00, description: 'Autores e pesquisadores respeitados, Bob Frank e Ben Bernanke mostram neste livro que o estudo mais aprofundado de princípios básicos é o caminho para o sucesso pedagógico também na introdução à economia. Ao evitar o apelo excessivo às derivações matemáticas formais, os autores apresentam os conceitos de forma intuitiva com exemplos de contextos conhecidos.' }
    
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState({});
  let currentImg = 1
  var imgArray = [ bag]
  const trocar = () => {
    if(currentImg === imgArray.length) 
  {
    currentImg=0;
  }
  document.getElementById("bag").src=imgArray[currentImg]; 
  currentImg++; 
  }

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(prevState => ({ ...prevState, [product.id]: true }));
    toast.success('Adicionado com sucesso', {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    trocar()
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className='products'>
      <br></br>
      <h2>Produtos</h2>
      <Container fluid>
        <div className='bag'>
        <Link to="/cart"><img className='bag' id='bag' src={bag} alt="Carrinho" style={{ width: 60, height: 60 }} /></Link>
        </div>
      </Container>
      <Container fluid>
        <div className="caixas card-container row">
          {products.map(product => (
            <Card key={product.id} style={{ width: '18rem' }} className="card product-card">
              <Card.Body className='carditems'>
                <Card.Title className='carditems'>{product.title}</Card.Title>
                <Card.Img variant="top" src={product.img} />
                <Button
                className='add'
                  variant="primary"
                  onClick={() => handleAddToCart(product)}
                  disabled={addedToCart[product.id]}
                >
                  <p className='addp'>{addedToCart[product.id] ? 'Adicionado ao Carrinho' : 'Adicionar ao Carrinho'}</p>
                </Button>
                <Button className='details' variant="secondary" onClick={() => openModal(product)}>Detalhes</Button>
              </Card.Body>
            </Card>

          ))}
        </div>
      </Container>
      <Container fluid>
        <Modal
          show={!!selectedProduct}
          onHide={closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedProduct?.description}</p>
            <br></br>
            <p>Preço: R$ {selectedProduct?.price}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      
      <br></br>
    </div>
  );
}