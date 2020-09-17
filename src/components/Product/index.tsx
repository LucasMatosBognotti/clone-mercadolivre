import React from 'react';

import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import tshirtImage from '../../assets/tshirt.png';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="ada">Compartilhar</a>
        <a href="add">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt"/>
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantSection />
          <WarrantSection />
          <WarrantSection />
          <WarrantSection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantSection = () => (
  <Section>
    <h4>Garantina</h4>

    <div>
      <span>
        <p className="title">Comprar garantida com o Jose da Silva</p>
        <p className="description">Receba o produto que esta espearando ou devolva</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="ada">Saiba mais sobre garantia</a>
  </Section>
);


const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      adeaadadaojkt pojua opqw tpja oprjkro pjrfpoajrarjaopirj
      ojaiojdaopdopak jdoiajoipaj hnadioahjiodjaoijd ojdaopjaqopdwjk
      aedojaoipedjaopd oajedjpod-TKPITṔKṔ KAKWAROPŔF  lojnadpojopajkop

      <br />
      <br />

      Items inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
    </p>
  </Description>
);


export default Product;
